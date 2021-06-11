<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:uuid="java:java.util.UUID"
    xmlns="http://csrc.nist.gov/ns/oscal/1.0"
    
    xmlns:XSLT="http://csrc.nist.gov/ns/oscal/metaschema/xslt-alias"
    xpath-default-namespace="http://csrc.nist.gov/ns/oscal/metaschema/1.0"
    version="3.0">
    
<!-- Purpose: Produce a generic XSLT capable of producing 'stub' instances of
        format(s) valid to schemas defined by a source Metaschema. -->
<!-- Input:   A composed metaschema (all modules resolved) -->
<!-- Output:  An XSLT -->

    <xsl:strip-space elements="*"/>
    <xsl:preserve-space elements="p"/>
    
    <xsl:output indent="yes"/>
    <xsl:mode on-no-match="shallow-skip"/>
    
    <xsl:namespace-alias stylesheet-prefix="XSLT" result-prefix="xsl"/>
    
    <xsl:variable name="source-namespace" select="string(/*/@namespace)"/>
    <xsl:variable name="source-prefix"    select="string(/*/@prefix)"/>
    
    <xsl:key name="definition-by-keyname"
        match="/METASCHEMA/define-assembly | /METASCHEMA/define-field | /METASCHEMA/define-flag" composite="true">
        <xsl:sequence select="@_key-name"/>
        <xsl:sequence select="substring-after(name(),'define-')"/>
    </xsl:key>
    
    <xsl:template match="/*">
        <XSLT:stylesheet version="3.0"
            extension-element-prefixes="uuid"
            xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0"
            exclude-result-prefixes="#all">
            <xsl:call-template name="boilerplate"/>
            <xsl:apply-templates mode="initial-template" select="define-assembly[exists(root-name)]"/>
        </XSLT:stylesheet>
    </xsl:template>
    
    <xsl:template match="define-assembly" mode="initial-template">
        <XSLT:template expand-text="true"
            match="/xsl:stylesheet[$make='{root-name}']" name="make-{ root-name }">
            <xsl:apply-templates select="." mode="tag-and-descend">
                <xsl:with-param name="at-root" select="true()"/>
            </xsl:apply-templates>
        </XSLT:template>
    </xsl:template>
    
    <xsl:template match="assembly | field | flag" mode="tag-and-descend">
        <xsl:param tunnel="true" name="continue" select="true()"/>
        <xsl:if test="$continue">
        <xsl:apply-templates mode="#current" select="key('definition-by-keyname',(@_key-ref,name()))">
            <xsl:with-param name="with-name" select="use-name"/>
            <xsl:with-param tunnel="true" name="continue" select="not(@_key-ref = ancestor::*/@_key-name)"/>
            
        </xsl:apply-templates>
        </xsl:if>
    </xsl:template>
    
    <xsl:template match="define-assembly" mode="tag-and-descend">
        <xsl:param name="at-root" select="false()"/>
        <xsl:param name="with-name" select="()"/>
        <xsl:variable name="using-name" select="(root-name[$at-root], $with-name, use-name, @name)[1]"/>
        <xsl:element name="{ $using-name }" namespace="{ /*/namespace }">
            <xsl:apply-templates mode="tag-and-descend" select="flag| define-flag"/>
            <xsl:call-template name="override-for-uuid"/>
            <xsl:apply-templates mode="tag-and-descend" select="model"/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="define-field" mode="tag-and-descend">
        <xsl:param name="with-name" select="()"/>
        <xsl:variable name="using-name" select="($with-name, use-name, @name)[1]"/>
        <xsl:element name="{ $using-name }" namespace="{ /*/namespace }">
            <xsl:apply-templates mode="tag-and-descend" select="flag| define-flag"/>
            <xsl:apply-templates mode="typed-value" select="@as-type"/>
            <xsl:call-template name="override-for-uuid"/>
            <xsl:if test="empty(@as-type)">STRING</xsl:if>
        </xsl:element>
    </xsl:template>
    
    <xsl:template match="define-flag" mode="tag-and-descend">
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="using-name" select="($with-name, use-name, @name)[1]"/>
        <xsl:attribute name="{ $using-name }">
            <xsl:apply-templates mode="typed-value" select="@as-type"/>
        </xsl:attribute>
        
    </xsl:template>
    
    <xsl:template name="override-for-uuid">
        <xsl:for-each-group group-by="true()" select="(flag | define-flag)[@as-type = 'uuid']">
            <xsl:for-each select="current-group()">
                <XSLT:attribute use-when="function-available('uuid:randomUUID')"
                    name="{ (use-name,@name)[1] }" select="uuid:randomUUID()"/>
            </xsl:for-each>
        </xsl:for-each-group>
    </xsl:template>
    
    <xsl:template match="@as-type" mode="typed-value" expand-text="true">{ . }</xsl:template>
    
    <!--<xsl:template priority="5" match="@as-type[.='uuid']" mode="typed-value">
        <xsl:text>{ uuid:randomUUID() }</xsl:text>
    </xsl:template>-->
    
    <xsl:template match="@as-type[.='uuid']" mode="typed-value">
        <xsl:text>00000000-0000-4000-8000-000000000000</xsl:text>
    </xsl:template>
    
    <xsl:template match="define-field/@as-type[.='uuid']" mode="typed-value">
        <XSLT:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</XSLT:text>
        <XSLT:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.='dateTime-with-timezone']" mode="typed-value">
        <xsl:text>{ current-dateTime() }</xsl:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.='date']" mode="typed-value">
        <xsl:text>{ current-date() }</xsl:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.='boolean']" mode="typed-value">
        <xsl:text>false</xsl:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.='uri']" mode="typed-value">
        <xsl:text>protocol:uri</xsl:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('integer','nonNegativeInteger')]" mode="typed-value">
        <xsl:text>0</xsl:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('positiveInteger')]" mode="typed-value">
        <xsl:text>1</xsl:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('base64Binary')]" mode="typed-value">
        <xsl:text>00000</xsl:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('markup-multiline')]" mode="typed-value">
        <p>Markup multiline content.</p>
    </xsl:template>
    
    
    <!-- if an element is not required we leave it out -->
    <xsl:template priority="10" mode="tag-and-descend" match="assembly[@min-occurs='0'] | field[@min-occurs='0'] | flag[@required='no'] | define-flag[@required='0'] | model//define-assembly[@min-occurs='0'] | model//define-assembly[@min-occurs='0']"/>
    
<!-- if an element is required more than once, we include it repeatedly -->
    <xsl:template priority="8" mode="tag-and-descend"
        match="assembly[not(@min-occurs = '1')] | field[not(@min-occurs = '1')] | model//define-assembly[not(@min-occurs = '1')] | model//define-assembly[not(@min-occurs = '1')]">
        <xsl:for-each select="1 to xs:integer(@min-occurs)">
            <xsl:next-match/>
        </xsl:for-each>

    </xsl:template>
    
    <xsl:template priority="20" mode="tag-and-descend"
        match="choice/*[exists(preceding-sibling::*)]">
        <xsl:variable name="looks-like">
            <xsl:next-match/>
        </xsl:variable>
        <xsl:comment>
            <xsl:value-of select="serialize($looks-like)"/>
        </xsl:comment>
    </xsl:template>
        
    <xsl:template name="boilerplate">
        <XSLT:output indent="true"/>
        
        <xsl:comment> Apply this XSLT to itself with a runtime parameter, e.g. 'make=catalog' to produce a blank (but nominally valid) OSCAL catalog. All formats supported: </xsl:comment>
        <xsl:comment> make=catalog </xsl:comment>
        <xsl:comment> make=profile </xsl:comment>
        <xsl:comment> make=component-definition </xsl:comment>
        <xsl:comment> make=system-security-plan </xsl:comment>
        <xsl:comment> make=assessment-plan </xsl:comment>
        <xsl:comment> make=assessment-results </xsl:comment>
        <xsl:comment> make=plan-of-action-and-milestones </xsl:comment>
        <xsl:comment> The same can be achieved running without stated inputs or parameters, by invoking named templates "make-{catalog}" (etc.) as initial templates. </xsl:comment>
        <xsl:comment> When applied to an OSCAL document, this XSLT will produce a copy with new timestamp and top-level @uuid.</xsl:comment>
        <XSLT:param name="make" as="xs:string">none</XSLT:param>
        
        <XSLT:mode on-no-match="shallow-copy"/>
        
        <XSLT:template match="/*/@uuid">
            <XSLT:attribute use-when="function-available('uuid:randomUUID')" name="uuid" select="uuid:randomUUID()"/>
        </XSLT:template>
        
        <XSLT:template match="last-modified" expand-text="true">
            <last-modified>{ current-dateTime() }</last-modified>
        </XSLT:template>
        
    </xsl:template>
    
</xsl:stylesheet>