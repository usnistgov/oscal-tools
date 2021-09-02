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
        <xsl:comment> This XSLT was produced by 'produce-generator-blank.xsl`, a customization of the  transformation `produce-generator3.xsl`, providing result documents only with "blank" or dummy UUID values.</xsl:comment>
    </xsl:template>
    
    <xsl:strip-space elements="*"/>
    <xsl:preserve-space elements="p"/>
    
    <xsl:output indent="yes"/>
    <xsl:mode on-no-match="shallow-skip"/>
    
    <xsl:import href="produce-generator3.xsl"/>
    
    <xsl:template priority="5" match="@as-type[.='uuid']" mode="typed-value">
        <xsl:text>00000000-0000-4000-8000-000000000000</xsl:text>
    </xsl:template>
    
    <xsl:template name="include-uuid-support"/>
    
    <xsl:template name="handle-document-uuid"/>
    
</xsl:stylesheet>