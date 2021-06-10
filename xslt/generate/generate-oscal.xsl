<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet  version="3.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:uuid="java:java.util.UUID"
    extension-element-prefixes="uuid"
    xmlns="http://csrc.nist.gov/ns/oscal/1.0"
    xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0"
    exclude-result-prefixes="#all">

<!--

    Apply the XSLT to any OSCAL to refresh its (top-level) UUID and metadata timestamp.
        
    Alternatively, to produce a 'blank' OSCAL instance
    invoke this XSLT with initial template (-it flag for Saxon)
      - 'make-blank-ssp' makes a new *generic* SSP
      - 'make-assessment-plan' makes a new Assessment Plan
      - 'make-assessment-report' makes a new Assessment Report (OSCAL assessment-results document)
      all with newly minted UUIDs and time stamp.

    -->
    
    <xsl:output indent="true"/>
    
    <xsl:mode on-no-match="shallow-copy"/>
    
    <xsl:template match="/*/@uuid">
        <xsl:attribute name="uuid" select="uuid:randomUUID()"/>
    </xsl:template>
    
    <xsl:template match="last-modified" expand-text="true">
        <last-modified>{ current-dateTime() }</last-modified>
    </xsl:template>
    
    <xsl:template expand-text="true" name="make-blank-ssp">
        <system-security-plan uuid="{ uuid:randomUUID() }">
            <metadata>
                <title>System Security Plan</title>
                <last-modified>{ current-dateTime() }</last-modified>
                <version>0.0</version>
                <oscal-version>1.0.0</oscal-version>
            </metadata>
            <import-profile href="abc-profile.xml"/>
            <system-characteristics>
                <system-id>System Identifier</system-id>
                <system-name>System Name</system-name>
                <description>
                    <p>Description of the system.</p>
                </description>
                <security-sensitivity-level>HIGH</security-sensitivity-level>
                <system-information>
                    <information-type>
                        <title>Information type.</title>
                        <description>
                            <p>Description of the information type.</p>
                        </description>
                        <confidentiality-impact>
                            <base>LOW</base>
                        </confidentiality-impact>
                        <integrity-impact>
                            <base>LOW</base>
                        </integrity-impact>
                        <availability-impact>
                            <base>LOW</base>
                        </availability-impact>
                    </information-type>
                </system-information>
                <security-impact-level>
                    <security-objective-confidentiality>LOW</security-objective-confidentiality>
                    <security-objective-integrity>LOW</security-objective-integrity>
                    <security-objective-availability>LOW</security-objective-availability>
                </security-impact-level>
                <status state="operational"/>
                <authorization-boundary>
                    <description><p>Any system has an authorization boundary.</p></description>
                </authorization-boundary>
            </system-characteristics>
            <system-implementation>
                <user uuid="{ uuid:randomUUID() }"><title>System Owner</title></user>
                <component uuid="{ uuid:randomUUID() }" type="this-system">
                    <title>This system</title>
                    <description><p>This system as a whole is also a component. Describe the system here.</p></description>
                    <status state="operational"/>
                </component>
            </system-implementation>
            <control-implementation>
                <description><p>Description of a control implementation.</p></description>
                <implemented-requirement uuid="{ uuid:randomUUID() }" control-id="x"/>
            </control-implementation>
        </system-security-plan>
    </xsl:template>

    <xsl:template expand-text="true" name="make-blank-assessment-plan">
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
    
    <xsl:template expand-text="true" name="make-blank-assessment-report">
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
                    <title>Assessment Finding</title>
                    <description>
                        <p>Describe an assessment finding here.</p>
                    </description>
                </finding>
            </result>
        </assessment-results>
    </xsl:template>
    
</xsl:stylesheet>