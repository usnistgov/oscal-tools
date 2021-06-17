<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:uuid="java:java.util.UUID"
    
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
    
    <xsl:template priority="80" match="choice/*[exists(preceding-sibling::*)]" mode="tag-and-descend">
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="definition" select="(key('definition-by-keyname',(@_key-ref,name())),.)    => head()"/>
        <xsl:variable name="using-name" select="(use-name, $definition/use-name, $definition/@name) => head()"/>
            
            <xsl:variable name="result">
                <xsl:element name="{ $using-name }" inherit-namespaces="false"   >
                    <xsl:apply-templates mode="required-flags" select="$definition/(flag | define-flag)"/>
                </xsl:element>
            </xsl:variable>
            
            <XSLT:comment>
                <XSLT:text disable-output-escaping="true">
                <xsl:text> </xsl:text>
                <xsl:value-of select="serialize($result)"/>
                <xsl:text> </xsl:text>
                </XSLT:text>
            </XSLT:comment>
    </xsl:template>
    
    
    <xsl:template priority="50" match="*[@min-occurs='0']" mode="tag-and-descend">
        <xsl:param tunnel="true" name="continue" select="true()"/>
        <xsl:if test="$continue">
            <XSLT:if test="$including-optional">
                <xsl:next-match/>
            </XSLT:if>
        </xsl:if>
    </xsl:template>
    
    <!-- should not match but just in case   -->
    <xsl:template priority="10" match="define-assembly | define-field | assembly | field" mode="optional-flags required-flags"/>
        
    <xsl:template match="assembly | field | flag" mode="tag-and-descend optional-flags required-flags">
        <xsl:param tunnel="true" name="continue" select="true()"/>
        <xsl:if test="$continue">
        <xsl:apply-templates mode="#current" select="key('definition-by-keyname',(@_key-ref,name()))">
            <xsl:with-param name="with-name" select="use-name"/>
            <xsl:with-param tunnel="true" name="continue" select="not(@_key-ref = ancestor::*/@_key-name)"/>
            <xsl:with-param name="reference" select="."/>
        </xsl:apply-templates>
        </xsl:if>
    </xsl:template>
    
    <xsl:template match="define-assembly" mode="tag-and-descend">
        <xsl:param name="at-root" select="false()"/>
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="reference" select="()"/>
        <xsl:variable name="using-name" select="(root-name[$at-root], $with-name, use-name, @name) => head()"/>
        <xsl:element name="{ $using-name }" namespace="{ /*/namespace }">
            <xsl:apply-templates mode="required-flags" select="flag | define-flag"/>
            <xsl:apply-templates mode="optional-flags" select="flag | define-flag"/>
            <xsl:call-template name="override-for-uuid"/>
            <xsl:apply-templates mode="tag-and-descend" select="model"/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="define-field" mode="tag-and-descend">
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="reference" select="()"/>
        <xsl:variable name="using-name" select="($with-name, use-name, @name) => head()"/>
        <xsl:element name="{ $using-name }" namespace="{ /*/namespace }">
            <xsl:apply-templates mode="required-flags" select="flag | define-flag"/>
            <xsl:apply-templates mode="optional-flags" select="flag | define-flag"/>
            <xsl:call-template name="override-for-uuid"/>
            <xsl:apply-templates mode="typed-value" select="@as-type"/>
            <xsl:if test="empty(@as-type)">STRING</xsl:if>
        </xsl:element>
    </xsl:template>
    
    <xsl:template priority="15" match="define-field[@as-type='markup-multiline'][@in-xml='UNWRAPPED']" mode="tag-and-descend">
        <xsl:apply-templates mode="typed-value" select="@as-type"/>
    </xsl:template>
    
    <xsl:template mode="required-flags" priority="10" match="define-flag[@required='no']"/>
    
    <xsl:template mode="required-flags" match="define-flag">
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="using-name" select="($with-name, use-name, @name) => head()"/>
        <xsl:attribute name="{ $using-name }">
            <xsl:apply-templates mode="typed-value" select="@as-type"/>
        </xsl:attribute><!--
        <xsl:comment expand-text="true"> done { $using-name }</xsl:comment>-->
    </xsl:template>

    <xsl:template mode="optional-flags" priority="10" match="define-flag[not(@required='no')]"/>
        
    <xsl:template mode="optional-flags" match="define-flag">
        <xsl:param name="with-name" select="()"/>
        <xsl:param name="reference" select="()"/>
        <xsl:param name="using-name" select="($with-name, use-name, @name) => head()"/>
        <xsl:variable name="minoccurs" select="(.|$reference)/@min-occurs"/>
        <XSLT:if test="$including-optional or { not($minoccurs='0') }() (: @min-occurs { $minoccurs } :)">
            <XSLT:attribute name="{ $using-name }">
                <xsl:apply-templates mode="typed-value" select="@as-type"/>
            </XSLT:attribute>
        </XSLT:if>
    </xsl:template>
    
    <xsl:template priority="20" mode="tag-and-descend" match="*[group-as/@in-xml='GROUPED']">
        <xsl:param name="reference" select="()"/>
        <xsl:variable name="minoccurs" select="(.|$reference)/@min-occurs"/>
        <XSLT:if test="$including-optional or { not($minoccurs='0') }() (: @min-occurs { $minoccurs } :)">
            <xsl:element name="{ group-as/@name }" namespace="{ /*/namespace }">
                <xsl:next-match/>
            </xsl:element>
        </XSLT:if>
    </xsl:template>
    
    
    <!--<!-\- if an element is not required we leave it out -\->
    <xsl:template priority="10" mode="tag-and-descend" match="assembly[@min-occurs='0'] | field[@min-occurs='0'] | flag[@required='no'] | define-flag[@required='0'] | model//define-assembly[@min-occurs='0'] | model//define-assembly[@min-occurs='0']">
        <XSLT:if test="$including-optional">
           <xsl:next-match/>
        </XSLT:if>
    </xsl:template>-->
    
    
    <!-- if an element is required more than once, we include it repeatedly -->
    <xsl:template priority="8" mode="tag-and-descend"
        match="assembly[@min-occurs > 1] | field[@min-occurs > 1] | model//define-assembly[@min-occurs > 1] | model//define-field[@min-occurs > 1]">
        <xsl:for-each select="1 to xs:integer(@min-occurs)">
            <xsl:next-match/>
        </xsl:for-each>
    </xsl:template>
    
    <xsl:template name="override-for-uuid">
        <xsl:for-each select="flag[@as-type = 'uuid']">
            <xsl:variable name="definition" select="(key('definition-by-keyname',(@_key-ref,name())),.) => head()"/>
            <XSLT:if test="$including-optional or { not(@required='no') }() (: required: { @required } :)">
            <XSLT:attribute use-when="function-available('uuid:randomUUID')"
                name="{ (use-name,$definition/use-name, $definition/@name) => head() }" select="uuid:randomUUID()"/>
            </XSLT:if>
        </xsl:for-each>
        <xsl:for-each select="define-flag[@as-type = 'uuid']">
            <XSLT:if test="$including-optional or { not(@required='no') }() (: required: { @required } :)">
                <XSLT:attribute use-when="function-available('uuid:randomUUID')"
                name="{ (use-name,@name) => head() }" select="uuid:randomUUID()"/>
            </XSLT:if>
        </xsl:for-each>
    </xsl:template>
    
    <xsl:template match="@as-type" mode="typed-value" expand-text="true">
        <XSLT:text>{ . }</XSLT:text>
    </xsl:template>
    
    <!--<xsl:template priority="5" match="@as-type[.='uuid']" mode="typed-value">
        <xsl:text>{ uuid:randomUUID() }</xsl:text>
    </xsl:template>-->
    
    <xsl:template match="@as-type[.='uuid']" mode="typed-value">
        <XSLT:text>00000000-0000-4000-8000-000000000000</XSLT:text>
        <!--<XSLT:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</XSLT:text>
        <XSLT:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</XSLT:text>-->
    </xsl:template>
    
    <xsl:template priority="10" match="define-field/@as-type[.='uuid']" mode="typed-value">
        <XSLT:text use-when="function-available('uuid:randomUUID')">{ uuid:randomUUID() }</XSLT:text>
        <XSLT:text use-when="not(function-available('uuid:randomUUID'))">00000000-0000-4000-8000-000000000000</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.='dateTime-with-timezone']" mode="typed-value">
        <XSLT:text>{ current-dateTime() }</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.='date']" mode="typed-value">
        <XSLT:text>{ current-date() }</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.='boolean']" mode="typed-value">
        <XSLT:text>false</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.='uri']" mode="typed-value">
        <XSLT:text>protocol:uri</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('integer','nonNegativeInteger')]" mode="typed-value">
        <XSLT:text>0</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('positiveInteger')]" mode="typed-value">
        <XSLT:text>1</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('base64Binary')]" mode="typed-value">
        <XSLT:text>base64Binary</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('email')]" mode="typed-value">
        <XSLT:text>receiver@email.org</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('markup-line')]" mode="typed-value">
        <XSLT:text>Text and (inline) markup</XSLT:text>
    </xsl:template>
    
    <xsl:template match="@as-type[.=('markup-multiline')]" mode="typed-value" 
        xmlns="http://csrc.nist.gov/ns/oscal/1.0">
        <p>Paragraphs and (block-level) markup contents.</p>
    </xsl:template>
    
    <xsl:template name="boilerplate">
        <XSLT:output indent="true"/>

        <xsl:comment> Apply this XSLT to itself with a runtime parameter, e.g. 'make=catalog' to produce a blank (but nominally valid) OSCAL catalog XML instance.</xsl:comment>
        <xsl:comment> The OSCAL produced can be either minimal - only required structures are given - or maximal. Use parameter 'include=all' to include optional contents, or leave the setting with default 'required-only' and the XSLT will produce only elements and attributes required in each model.</xsl:comment>
        <xsl:comment> All OSCAL formats supported: </xsl:comment>
        <xsl:for-each select="/METASCHEMA/define-assembly/root-name">
            <xsl:comment expand-text="true"> - make={ . } </xsl:comment>    
        </xsl:for-each>
        <xsl:comment> Alternatively, the same results can be produced without stated inputs or parameters, by invoking the appropriate template by name "make-catalog" (etc.), as initial template. This syntax can be more  lightweight: for example `xslt3 -xsl:generate-oscal.sef -it:make-catalog` for SaxonJS.</xsl:comment>
        <xsl:comment> When applied to an OSCAL document (as source), this XSLT ignores runtime parameters produces a copy of the input with new timestamp (in OSCAL metadata) and top-level @uuid.</xsl:comment>
        <xsl:comment> Limitations: </xsl:comment>
        <xsl:comment> - When a model permits a choice, only the first defined or referenced of the permitted elements is included. Delete this element to permit alternate members of the choice. As indicators, other available alternatives are included in comments. </xsl:comment>
        <xsl:comment> - = + = - = # = - = + = - = # = - = + = - = # = - = + = - = # = - = + = - = # = - = + = - = # = </xsl:comment>

        <XSLT:param name="make" as="xs:string">none</XSLT:param>
        <XSLT:param name="include" as="xs:string">required-only</XSLT:param>
        <XSLT:variable name="including-optional" select="$include='all'"/>

        <XSLT:mode on-no-match="shallow-copy"/>

        <XSLT:template match="/*/@uuid">
            <XSLT:attribute use-when="function-available('uuid:randomUUID')" name="uuid"
                select="uuid:randomUUID()"/>
        </XSLT:template>

        <XSLT:template match="last-modified" expand-text="true"
            xmlns="http://csrc.nist.gov/ns/oscal/1.0">
            <last-modified>{ current-dateTime() }</last-modified>
        </XSLT:template>

    </xsl:template>
    
</xsl:stylesheet>