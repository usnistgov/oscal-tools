<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet  version="3.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:uuid="java:java.util.UUID"
    extension-element-prefixes="uuid"
    xmlns="http://csrc.nist.gov/ns/oscal/1.0"
    exclude-result-prefixes="#all">

<!--
        
    Run this XSLT on itself or from the "xsl:initial-template" entry point
    to produce a minimal (but valid) "stub" OSCAL Assessment Plan
    with a freshly minted UUID.
    
    -->
    
    <xsl:output indent="true"/>
    
    <xsl:template match="/" expand-text="true" name="xsl:initial-template">
        <assessment-plan uuid="{ uuid:randomUUID() }">
            <metadata>
                <title>Assessment Plan</title>
                <last-modified>{ current-dateTime() }</last-modified>
                <version>0.0</version>
                <oscal-version>1.0.0</oscal-version>
            </metadata>
            <import-ssp href="abc-ssp.xml"/>
            <reviewed-controls>
                <control-selection>
                    <include-all/>
                </control-selection>
            </reviewed-controls>
        </assessment-plan>
    </xsl:template>

</xsl:stylesheet>