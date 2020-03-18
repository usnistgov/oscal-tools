<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    exclude-result-prefixes="xs math"
    xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0"
    version="3.0">
    
    <xsl:template match="catalog">
        <catalog>
            <xsl:apply-templates select="descendant::control"/>
        </catalog>
    </xsl:template>
    
    <xsl:template match="control" priority="3">
        <control>
            <xsl:apply-templates select="* except control"/>
        </control>
    </xsl:template>
    
    <xsl:template match="control/*">
        <xsl:message expand-text="true">{ local-name() } produced</xsl:message>
        <xsl:element name="{local-name()}">
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    
    <xsl:template match="control/title" priority="1.5">
        <title>
            <xsl:apply-templates/>
        </title>    
    </xsl:template>
    
    <xsl:template match="control/*[@name]" priority="1.5">
        <xsl:element name="{@name}">
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    
    <xsl:template match="param" priority="2"/>
    
    <xsl:template match="part[@name=('objective','assessment')]" priority="2"/>
    
    <xsl:key name="param-by-id" match="param" use="@id"/>
    
    <xsl:template match="insert">
        <xsl:apply-templates select="key('param-by-id',@param-id)" mode="show.parameter"/>
    </xsl:template>
    
    <xsl:template match="param" mode="show.parameter">
        <xsl:text>[Assignment: </xsl:text>
        <xsl:apply-templates select="(value,label)[1]"/>
        <xsl:text>]</xsl:text>
    </xsl:template>
    
    <xsl:template match="param[select]" mode="show.parameter">
        <xsl:text expand-text="true">[Selection{ @how-many ! ' (' || . || ')'}:</xsl:text>
        <xsl:apply-templates/>
        <xsl:text>]</xsl:text>
    </xsl:template>
    
    <xsl:template match="select/choice">
        <xsl:text>; </xsl:text>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="select/choice[1]" priority="2">
        <xsl:apply-templates/>
    </xsl:template>
    
    <!-- Links after the first link in a control are dropped. -->
    <xsl:template match="control/link" priority="2"/>
    
    <!-- A single cell is made from the first link for all of them-->
    <xsl:template match="control/link[1]" priority="3">
        <links>
            <xsl:apply-templates/>
            <xsl:for-each select="following-sibling::link">
                <xsl:text>&#xA;</xsl:text>
                <xsl:apply-templates/>
            </xsl:for-each>
        </links>
    </xsl:template>
    
</xsl:stylesheet>