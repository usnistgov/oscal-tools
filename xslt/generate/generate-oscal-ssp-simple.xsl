<?xml version="1.0" encoding="UTF-8"?>
<system-security-plan xmlns="http://csrc.nist.gov/ns/oscal/1.0" uuid="{ uuid:randomUUID() }"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:uuid="java:java.util.UUID"
    xsl:version="3.0"
    xsl:extension-element-prefixes="uuid"
    xsl:exclude-result-prefixes="#all"
    xsl:expand-text="true">
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
            <description>
                <p>Any system has an authorization boundary.</p>
            </description>
        </authorization-boundary>
    </system-characteristics>
    <system-implementation>
        <user uuid="{ uuid:randomUUID() }">
            <title>System Owner</title>
        </user>
        <component uuid="{ uuid:randomUUID() }" type="this-system">
            <title>This system</title>
            <description>
                <p>This system as a whole is also a component. Description of this system.</p>
            </description>
            <status state="operational"/>
        </component>
    </system-implementation>
    <control-implementation>
        <description>
            <p>Description of a control implementation.</p>
        </description>
        <implemented-requirement uuid="{ uuid:randomUUID() }" control-id="x"/>
    </control-implementation>
</system-security-plan>
