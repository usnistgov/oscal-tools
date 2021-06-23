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
<!-- Output:  An XSLT -->

    <xsl:strip-space elements="*"/>
    <xsl:preserve-space elements="p"/>
    
    <xsl:output indent="yes"/>
    <xsl:mode on-no-match="shallow-skip"/>
    
    <xsl:import href="produce-generator3.xsl"/>
    
    <xsl:template priority="5" match="@as-type[.='uuid']" mode="typed-value">
        <xsl:text expand-text="true">{{ ixsl:eval( ??? ) }}</xsl:text>
    </xsl:template>
    
</xsl:stylesheet>