<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math" exclude-result-prefixes="xs math"
    xmlns:r="http://csrc.nist.gov/ns/random" version="3.0">

    <!-- from the spec https://www.w3.org/TR/xpath-functions-31/#func-random-number-generator
    
declare %public function r:random-sequence($length as xs:integer) as xs:double* {
  r:random-sequence($length, fn:random-number-generator())
};

declare %private function r:random-sequence($length as xs:integer, 
                                            $G as map(xs:string, item())) {
  if ($length eq 0)
  then ()
  else ($G?number, r:random-sequence($length - 1, $G?next()))
};

r:random-sequence(200);

v4 UUID
   hex fields 8 4 4 4 12
     place 13 = a
     place 17 = 8-b
            
    -->
    <xsl:output indent="yes"/>

    <xsl:param name="germ" as="xs:string?"/>
    
    <xsl:variable name="seed" select="if (exists($germ)) then $germ else current-dateTime()"/>
    
    <xsl:variable name="hex-digits" select="tokenize('0 1 2 3 4 5 6 7 8 9 0 a b c d e f', ' ')"/>
    
    <xsl:variable name="uuid-v4-template" as="xs:string"
        >00000000-0000-a000-b000-000000000000</xsl:variable>

    <!-- replacements for UUID v4:
           '0' => random hex value
           '-' => '-'
           'a' => 'a'
           'b' => one of '8','9','a','b'   -->


    <!-- for testing random number features   -->
    <xsl:template match="/" name="xsl:initial-template" expand-text="true">
        <!--<uuid><xsl:value-of select="uuid:randomUUID()" xmlns:uuid="java:java.util.UUID"/></uuid>-->
        <randomness>
            <now>
                <xsl:sequence select="r:make-uuid(current-time())"/>
            </now>
            <a>
                <xsl:sequence select="r:make-uuid('1')"/>
            </a>
            <b>
                <xsl:sequence select="r:make-uuid('2')"/>
            </b>
            <alpha>
                <xsl:sequence select="r:make-uuid($seeds[1])"/>
            </alpha>
            <alpha>
                <xsl:sequence
                    select="r:produce-uuid($uuid-v4-template, random-number-generator($seeds[1]))"/>
            </alpha>
            <beta>
                <xsl:sequence
                    select="r:produce-uuid($uuid-v4-template, random-number-generator($seeds[2]))"/>
            </beta>
            <!--<gamma>{ r:random-hex-sequence($seeds[2],5) => string-join() }</gamma>-->
            <xsl:for-each select="r:make-uuid-sequence($seeds[1],10)">
                <uuid>{ . }</uuid>
            </xsl:for-each>
        </randomness>
    </xsl:template>

    <xsl:function name="r:make-uuid-sequence" as="xs:string*">
        <xsl:param name="seed" as="item()"/>
        <xsl:param name="length" as="xs:integer"/>
        <xsl:sequence select="r:produce-uuid-sequence($length,random-number-generator($seed))"/>
    </xsl:function>
    
    <xsl:function name="r:produce-uuid-sequence" as="xs:string*">
        <xsl:param name="length" as="xs:integer"/>
        <xsl:param name="PRNG" as="map(xs:string, item())"/>
        <xsl:if test="$length gt 0">
            <xsl:variable name="new-uuid" select="r:make-uuid(string($PRNG?number))"/>
            <xsl:message expand-text="true">A { $new-uuid } from { $PRNG?number }</xsl:message>
            <xsl:sequence select="$new-uuid"/>
            <xsl:sequence select="r:produce-uuid-sequence($length - 1, $PRNG?next())"/>
        </xsl:if>
    </xsl:function>
    
    <!-- make-uuid produces a UUID for a given seed - the same UUID every time for the same seed -->
    <xsl:function name="r:make-uuid" as="xs:string">
        <xsl:param name="seed" as="item()"/>
        <xsl:message expand-text="true">B { $seed } { random-number-generator($seed)?number }</xsl:message>
        <xsl:sequence select="r:produce-uuid($uuid-v4-template, random-number-generator($seed))"/>
    </xsl:function>
    
    <!--$template is a string to serve as a template for the UUID syntax
        $PRNG is a pseudo-random-number generator produced by fn:random-number-generator() -->
    <xsl:function name="r:produce-uuid" as="xs:string">
        <xsl:param name="template" as="xs:string"/>
        <xsl:param name="PRNG" as="map(xs:string, item())"/>
        <xsl:value-of>
            <xsl:apply-templates select="substring($template, 1, 1)" mode="uuid-char">
                <xsl:with-param name="PRNG" select="$PRNG"/>
            </xsl:apply-templates>
            <xsl:if test="matches($template, '.')">
                <xsl:sequence select="r:produce-uuid(substring($template, 2), $PRNG?next())"/>
            </xsl:if>
        </xsl:value-of>
    </xsl:function>

    <!-- mode 'uuid-char' matches each character in the template in turn, mapping
         it to a random value (or not) -->
    <xsl:template match="." mode="uuid-char">
        <xsl:sequence select="."/>
    </xsl:template>

    <xsl:template match=".[. = 'a']" mode="uuid-char">a</xsl:template>

    <xsl:template match=".[. = '0']" mode="uuid-char">
        <xsl:param name="PRNG" as="map(xs:string, item())"/>
        <xsl:sequence select="$PRNG?permute($hex-digits)[1]"/>
    </xsl:template>

    <xsl:template match=".[. = 'b']" mode="uuid-char">
        <xsl:param name="PRNG" as="map(xs:string, item())"/>
        <xsl:sequence select="$PRNG?permute(('8', '9', 'a', 'b'))[1]"/>
    </xsl:template>

    <!--<xsl:function name="r:random-hex-digit" as="xs:string*">
        <xsl:param name="seed" as="item()"/>
        <xsl:sequence select="r:random-hex-sequence($seed, 1, random-number-generator($seed))"/>
    </xsl:function>

    <xsl:function name="r:random-hex-sequence" as="xs:string*">
        <xsl:param name="seed" as="item()"/>
        <xsl:param name="length" as="xs:integer"/>
        <xsl:sequence select="r:random-hex-sequence($seed, $length, random-number-generator($seed))"
        />
    </xsl:function>

    <xsl:function name="r:random-hex-sequence" as="xs:string*">
        <xsl:param name="seed" as="item()"/>
        <xsl:param name="length" as="xs:integer"/>
        <xsl:param name="PRNG" as="map(xs:string, item())"/>
        <xsl:if test="$length ne 0">
            <xsl:sequence
                select="$PRNG?permute($hex-digits)[1], r:random-hex-sequence($seed, $length - 1, $PRNG?next())"
            />
        </xsl:if>
    </xsl:function>-->

    <xsl:variable name="seeds" as="element()*">
        <seed>3</seed>
        <seed>3-</seed>
    </xsl:variable>



</xsl:stylesheet>