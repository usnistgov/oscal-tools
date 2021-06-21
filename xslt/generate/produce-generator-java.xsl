<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:ixsl="http://saxonica.com/ns/interactiveXSLT"
    xmlns:XSLT="http://csrc.nist.gov/ns/oscal/metaschema/xslt-alias"
    xpath-default-namespace="http://csrc.nist.gov/ns/oscal/metaschema/1.0"
    exclude-result-prefixes="#all"
  
    version="3.0">
    
<!-- Purpose: Produce a generic XSLT capable of producing 'stub' instances of
        format(s) valid to schemas defined by a source Metaschema. -->
<!-- Input:   A composed metaschema (all modules resolved) -->
<!-- Variant: This version produces all 'uuid' values with '00000000-0000-4000-8000-000000000000' -->
<!-- Output:  An XSLT -->

    <xsl:template name="customization-comment">
        <xsl:comment> This XSLT was produced by the customization 'produce-generator-java.xsl`, a customization of the transformation `produce-generator3.xsl`, and calls reflexive Java functionality, (when available) to provide results with new UUIDs.</xsl:comment>
    </xsl:template>
    
    <xsl:strip-space elements="*"/>
    <xsl:preserve-space elements="p"/>
    
    <xsl:output indent="yes"/>
    <xsl:mode on-no-match="shallow-skip"/>
    
    <xsl:import href="produce-generator3.xsl"/>
    
    <!--<xsl:template mode="required-flags" match="define-flag">
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="using-name" select="($with-name, use-name, @name) => head()"/>
        <XSLT:attribute name="{ $using-name }">
            <xsl:apply-templates mode="typed-value" select="@as-type"/>
        </XSLT:attribute><!-\-
        <xsl:comment expand-text="true"> done { $using-name }</xsl:comment>-\->
    </xsl:template>-->
    
    <xsl:template priority="20" match="define-field/@as-type[.='uuid']" mode="typed-value">
        <XSLT:text xmlns:uuid="java:java.util.UUID">{ uuid:randomUUID() }</XSLT:text>
    </xsl:template>
    
    <xsl:template priority="10" match="@as-type[.='uuid']" mode="typed-value">
        <!--<XSLT:text xmlns:uuid="java:java.util.UUID" use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</XSLT:text>
        <XSLT:text xmlns:uuid="java:java.util.UUID" use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</XSLT:text>-->
        <xsl:text>{ uuid:randomUUID() }</xsl:text>
    </xsl:template>
    
<!-- OverrideS provide uuid namespace   -->
    
    <xsl:template mode="required-flags" priority="10" match="define-flag[@required='no']"/>
    
    <xsl:template mode="required-flags" match="define-flag">
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="reference" select="()"/>
        <xsl:param name="using-name" select="($with-name, use-name, @name) => head()"/>
        <xsl:variable name="minoccurs" select="(.|$reference)/@min-occurs"/>
        <XSLT:attribute name="{ $using-name }" xmlns:uuid="java:java.util.UUID">
            <xsl:apply-templates mode="typed-value" select="@as-type"/>
        </XSLT:attribute>
    </xsl:template>
    
    
    <xsl:template mode="optional-flags" priority="10" match="define-flag[not(@required='no')]"/>
    
    <xsl:template mode="optional-flags" match="define-flag">
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="reference" select="()"/>
        <xsl:param name="using-name" select="($with-name, use-name, @name) => head()"/>
        <xsl:variable name="minoccurs" select="(.|$reference)/@min-occurs"/>
        <XSLT:if test="$including-optional">
            <!--<XSLT:if test="$including-optional or { not($minoccurs='0') }() (: @min-occurs { $minoccurs } :)">-->
            <XSLT:attribute name="{ $using-name }" xmlns:uuid="java:java.util.UUID">
                <xsl:apply-templates mode="typed-value" select="@as-type"/>
            </XSLT:attribute>
        </XSLT:if>
    </xsl:template>
    
    <xsl:template priority="80" match="choice/*[exists(preceding-sibling::*)]" mode="tag-and-descend">
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="definition" select="(key('definition-by-keyname',(@_key-ref,name())),.)    => head()"/>
        <xsl:variable name="using-name" select="(use-name, $definition/use-name, $definition/@name) => head()"/>
        
        <xsl:variable name="result">
            <xsl:element name="{ $using-name }" inherit-namespaces="false"   >
                <xsl:apply-templates mode="required-flags" select="$definition/(flag | define-flag)"/>
            </xsl:element>
        </xsl:variable>
        
        <XSLT:comment xmlns:uuid="java:java.util.UUID">
            <XSLT:text disable-output-escaping="true">
                <xsl:text> </xsl:text>
                <xsl:value-of select="serialize($result)"/>
                <xsl:text> </xsl:text>
            </XSLT:text>
        </XSLT:comment>
    </xsl:template>
    
    
    
    <xsl:template name="include-uuid-support"/>
    
    <xsl:template name="handle-document-uuid">
        <xsl:variable name="proxy" as="element()">
            <proxy as-type='uuid'/>
        </xsl:variable>
        <XSLT:template match="/*/@uuid">
            <XSLT:attribute name="uuid" xmlns:uuid="java:java.util.UUID">{ uuid:randomUUID() }</XSLT:attribute>
        </XSLT:template>
    </xsl:template>
    
</xsl:stylesheet>