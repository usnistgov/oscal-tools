<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet  version="3.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:uuid="java:java.util.UUID"
    extension-element-prefixes="uuid"
    xmlns="http://csrc.nist.gov/ns/oscal/1.0"
    exclude-result-prefixes="#all">

<!--
        
    Run this XSLT on itself or from the "xsl:initial-template" entry point
    to produce a minimal (but valid) "stub" OSCAL Assessment Results (Report)
    with a freshly minted UUIDs.

try
java net.sf.saxon.Transform -xsl:generate-oscal-assessment-results.xsl -it !indent=yes
java -jar path/to/saxonljar -xsl:generate-oscal-assessment-results.xsl -it !indent=yes

-it without setting defaults to Q{http://www.w3.org/1999/XSL/Transform}initial-template

    -->
    
    <xsl:output indent="true"/>
    
    <xsl:template match="/" expand-text="true" name="xsl:initial-template">
        <assessment-results uuid="{ uuid:randomUUID() }">
            <metadata>
                <title>Assessment Results</title>
                <last-modified>{ current-dateTime() }</last-modified>
                <version>0.0</version>
                <oscal-version>1.0.0</oscal-version>
            </metadata>
            <import-ap href="abc-ap.xml"/>
            <result uuid="{ uuid:randomUUID() }">
                <title>System Assessment Report</title>
                <description>
                    <p>Describe the system assessment.</p>
                </description>
                <start>{ current-dateTime() }</start>
                <reviewed-controls>
                    <control-selection>
                        <include-all/>
                    </control-selection>
                </reviewed-controls>
                <finding uuid="{ uuid:randomUUID() }">
                    <title>Assessment Findings</title>
                    <description>
                        <p>Describe the assessment findings here.</p>
                    </description>
                </finding>
            </result>
        </assessment-results>
    </xsl:template>

</xsl:stylesheet>