<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    xmlns="http://www.w3.org/2005/xpath-functions"
    exclude-result-prefixes="xs math"
    version="3.0">
    
    <!-- To debug, switch output methods and modes on template[@match='/'] -->
    <!--<xsl:output method="xml" indent="yes"/>-->
    <xsl:output method="text"/>
    
    <xsl:variable name="json-indent">yes</xsl:variable>
    <xsl:variable name="write-options" as="map(*)" expand-text="true">
        <xsl:map>
            <xsl:map-entry key="'indent'">{ $json-indent='yes' }</xsl:map-entry>
        </xsl:map>
    </xsl:variable>
    
    <xsl:template match="/">
        <xsl:variable name="xpath-json">
            <xsl:apply-templates select="*" mode="cast"/>
        </xsl:variable>
        <xsl:value-of select="xml-to-json($xpath-json,$write-options)"/>
    </xsl:template>    
    
    <xsl:template match="/" mode="hide">
        <xsl:apply-templates select="*" mode="cast"/>
    </xsl:template>    
    
    <xsl:template match="*" mode="cast" expand-text="true">
        <map>
            <string key="_gi">{ name(.) }</string>
            <!--<map key="name">
                <string key="local">
                  <xsl:value-of select="local-name(.)"/>
                </string>
                <xsl:for-each select="prefix-from-QName( node-name() )">
                    <string key="prefix">{ . }</string>
                </xsl:for-each>
                <xsl:if test="not( namespace-uri(.) eq namespace-uri(parent::node()) )">
                    <string key="ns">{  namespace-uri(.) }</string>
                    </xsl:if>
            </map>-->
            <xsl:apply-templates select="@*" mode="cast"/>
            <xsl:if test="boolean(node())">
                <array key="_C">
                    <xsl:apply-templates mode="cast"/>
                </array>
            </xsl:if>
        </map>
    </xsl:template>
    
    <xsl:template match="text()" mode="cast" expand-text="true">
        <string>{ replace(.,'\s+',' ') }</string>
    </xsl:template>
    
    <xsl:template match="@*" mode="cast" expand-text="true">
        <string key="@{ local-name() }">{ string(.) }</string>
    </xsl:template>
    
<!-- Comments and PIs are dropped. -->
    
</xsl:stylesheet>