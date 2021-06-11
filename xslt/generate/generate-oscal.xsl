<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:uuid="java:java.util.UUID"
                xmlns="http://csrc.nist.gov/ns/oscal/1.0"
                version="3.0"
                extension-element-prefixes="uuid"
                xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0"
                exclude-result-prefixes="#all">
   <xsl:output indent="true"/>
   <!-- Apply this XSLT to itself with a runtime parameter, e.g. 'make=catalog' to produce a blank (but nominally valid) OSCAL catalog. All formats supported: -->
   <!-- make=catalog -->
   <!-- make=profile -->
   <!-- make=component-definition -->
   <!-- make=system-security-plan -->
   <!-- make=assessment-plan -->
   <!-- make=assessment-results -->
   <!-- make=plan-of-action-and-milestones -->
   <!-- The same can be achieved running without stated inputs or parameters, by invoking named templates "make-{catalog}" (etc.) as initial templates. -->
   <!-- When applied to an OSCAL document, this XSLT will produce a copy with new timestamp and top-level @uuid.-->
   <xsl:param name="make" as="xs:string">none</xsl:param>
   <xsl:mode on-no-match="shallow-copy"/>
   <xsl:template match="/*/@uuid">
      <xsl:attribute use-when="function-available('uuid:randomUUID')"
                     name="uuid"
                     select="uuid:randomUUID()"/>
   </xsl:template>
   <xsl:template match="last-modified" expand-text="true">
      <last-modified>{ current-dateTime() }</last-modified>
   </xsl:template>
   <xsl:template expand-text="true"
                 match="/xsl:stylesheet[$make='catalog']"
                 name="make-catalog">
      <catalog uuid="00000000-0000-4000-8000-000000000000">
         <xsl:attribute use-when="function-available('uuid:randomUUID')"
                        name="uuid"
                        select="uuid:randomUUID()"/>
         <metadata>
            <title>
               <xsl:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</xsl:text>
               <xsl:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</xsl:text>
            </title>
            <last-modified>{ current-dateTime() }</last-modified>
            <version>string</version>
            <oscal-version>string</oscal-version>
         </metadata>
      </catalog>
   </xsl:template>
   <xsl:template expand-text="true"
                 match="/xsl:stylesheet[$make='profile']"
                 name="make-profile">
      <profile uuid="00000000-0000-4000-8000-000000000000">
         <xsl:attribute use-when="function-available('uuid:randomUUID')"
                        name="uuid"
                        select="uuid:randomUUID()"/>
         <metadata>
            <title>
               <xsl:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</xsl:text>
               <xsl:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</xsl:text>
            </title>
            <last-modified>{ current-dateTime() }</last-modified>
            <version>string</version>
            <oscal-version>string</oscal-version>
         </metadata>
         <import href="uri-reference">
            <include-all/>
            <!--<include-controls xmlns="http://csrc.nist.gov/ns/oscal/1.0"><with-id>token</with-id></include-controls>-->
         </import>
      </profile>
   </xsl:template>
   <xsl:template expand-text="true"
                 match="/xsl:stylesheet[$make='component-definition']"
                 name="make-component-definition">
      <component-definition uuid="00000000-0000-4000-8000-000000000000">
         <xsl:attribute use-when="function-available('uuid:randomUUID')"
                        name="uuid"
                        select="uuid:randomUUID()"/>
         <metadata>
            <title>
               <xsl:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</xsl:text>
               <xsl:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</xsl:text>
            </title>
            <last-modified>{ current-dateTime() }</last-modified>
            <version>string</version>
            <oscal-version>string</oscal-version>
         </metadata>
      </component-definition>
   </xsl:template>
   <xsl:template expand-text="true"
                 match="/xsl:stylesheet[$make='system-security-plan']"
                 name="make-system-security-plan">
      <system-security-plan uuid="00000000-0000-4000-8000-000000000000">
         <xsl:attribute use-when="function-available('uuid:randomUUID')"
                        name="uuid"
                        select="uuid:randomUUID()"/>
         <metadata>
            <title>
               <xsl:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</xsl:text>
               <xsl:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</xsl:text>
            </title>
            <last-modified>{ current-dateTime() }</last-modified>
            <version>string</version>
            <oscal-version>string</oscal-version>
         </metadata>
         <import-profile href="uri-reference"/>
         <system-characteristics>
            <system-id identifier-type="protocol:uri">string</system-id>
            <system-name>string</system-name>
            <system-name-short>string</system-name-short>
            <description>
               <p>Markup multiline content.</p>
            </description>
            <security-sensitivity-level>string</security-sensitivity-level>
            <system-information>
               <information-type uuid="00000000-0000-4000-8000-000000000000">
                  <xsl:attribute use-when="function-available('uuid:randomUUID')"
                                 name="uuid"
                                 select="uuid:randomUUID()"/>
                  <title>markup-line</title>
                  <description>
                     <p>Markup multiline content.</p>
                  </description>
                  <confidentiality-impact>
                     <base>string</base>
                  </confidentiality-impact>
                  <integrity-impact>
                     <base>string</base>
                  </integrity-impact>
                  <availability-impact>
                     <base>string</base>
                  </availability-impact>
               </information-type>
            </system-information>
            <security-impact-level>
               <security-objective-confidentiality>string</security-objective-confidentiality>
               <security-objective-integrity>string</security-objective-integrity>
               <security-objective-availability>string</security-objective-availability>
            </security-impact-level>
            <status state="string"/>
            <authorization-boundary>
               <description>
                  <p>Markup multiline content.</p>
               </description>
               <remarks>
                  <p>Markup multiline content.</p>
               </remarks>
            </authorization-boundary>
         </system-characteristics>
         <system-implementation>
            <user uuid="00000000-0000-4000-8000-000000000000">
               <xsl:attribute use-when="function-available('uuid:randomUUID')"
                              name="uuid"
                              select="uuid:randomUUID()"/>
               <title>markup-line</title>
               <short-name>string</short-name>
               <description>
                  <p>Markup multiline content.</p>
               </description>
            </user>
            <component uuid="00000000-0000-4000-8000-000000000000" type="string">
               <xsl:attribute use-when="function-available('uuid:randomUUID')"
                              name="uuid"
                              select="uuid:randomUUID()"/>
               <title>markup-line</title>
               <description>
                  <p>Markup multiline content.</p>
               </description>
               <purpose>markup-line</purpose>
               <status state="token"/>
            </component>
         </system-implementation>
         <control-implementation>
            <description>
               <p>Markup multiline content.</p>
            </description>
            <implemented-requirement uuid="00000000-0000-4000-8000-000000000000" control-id="token">
               <xsl:attribute use-when="function-available('uuid:randomUUID')"
                              name="uuid"
                              select="uuid:randomUUID()"/>
            </implemented-requirement>
         </control-implementation>
      </system-security-plan>
   </xsl:template>
   <xsl:template expand-text="true"
                 match="/xsl:stylesheet[$make='assessment-plan']"
                 name="make-assessment-plan">
      <assessment-plan uuid="00000000-0000-4000-8000-000000000000">
         <xsl:attribute use-when="function-available('uuid:randomUUID')"
                        name="uuid"
                        select="uuid:randomUUID()"/>
         <metadata>
            <title>
               <xsl:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</xsl:text>
               <xsl:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</xsl:text>
            </title>
            <last-modified>{ current-dateTime() }</last-modified>
            <version>string</version>
            <oscal-version>string</oscal-version>
         </metadata>
         <import-ssp href="uri-reference"/>
         <reviewed-controls>
            <description>
               <p>Markup multiline content.</p>
            </description>
            <control-selection>
               <description>
                  <p>Markup multiline content.</p>
               </description>
               <include-all/>
               <!--<include-control xmlns="http://csrc.nist.gov/ns/oscal/1.0" control-id="token"><statement-id>token</statement-id></include-control>-->
            </control-selection>
         </reviewed-controls>
      </assessment-plan>
   </xsl:template>
   <xsl:template expand-text="true"
                 match="/xsl:stylesheet[$make='assessment-results']"
                 name="make-assessment-results">
      <assessment-results uuid="00000000-0000-4000-8000-000000000000">
         <xsl:attribute use-when="function-available('uuid:randomUUID')"
                        name="uuid"
                        select="uuid:randomUUID()"/>
         <metadata>
            <title>
               <xsl:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</xsl:text>
               <xsl:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</xsl:text>
            </title>
            <last-modified>{ current-dateTime() }</last-modified>
            <version>string</version>
            <oscal-version>string</oscal-version>
         </metadata>
         <import-ap href="uri-reference"/>
         <result uuid="00000000-0000-4000-8000-000000000000">
            <xsl:attribute use-when="function-available('uuid:randomUUID')"
                           name="uuid"
                           select="uuid:randomUUID()"/>
            <title>markup-line</title>
            <description>
               <p>Markup multiline content.</p>
            </description>
            <start>{ current-dateTime() }</start>
            <end>{ current-dateTime() }</end>
            <reviewed-controls>
               <description>
                  <p>Markup multiline content.</p>
               </description>
               <control-selection>
                  <description>
                     <p>Markup multiline content.</p>
                  </description>
                  <include-all/>
                  <!--<include-control xmlns="http://csrc.nist.gov/ns/oscal/1.0" control-id="token"><statement-id>token</statement-id></include-control>-->
               </control-selection>
            </reviewed-controls>
         </result>
      </assessment-results>
   </xsl:template>
   <xsl:template expand-text="true"
                 match="/xsl:stylesheet[$make='plan-of-action-and-milestones']"
                 name="make-plan-of-action-and-milestones">
      <plan-of-action-and-milestones uuid="00000000-0000-4000-8000-000000000000">
         <xsl:attribute use-when="function-available('uuid:randomUUID')"
                        name="uuid"
                        select="uuid:randomUUID()"/>
         <metadata>
            <title>
               <xsl:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</xsl:text>
               <xsl:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</xsl:text>
            </title>
            <last-modified>{ current-dateTime() }</last-modified>
            <version>string</version>
            <oscal-version>string</oscal-version>
         </metadata>
         <poam-item uuid="00000000-0000-4000-8000-000000000000">
            <xsl:attribute use-when="function-available('uuid:randomUUID')"
                           name="uuid"
                           select="uuid:randomUUID()"/>
            <title>markup-line</title>
            <description>
               <p>Markup multiline content.</p>
            </description>
         </poam-item>
      </plan-of-action-and-milestones>
   </xsl:template>
</xsl:stylesheet>
