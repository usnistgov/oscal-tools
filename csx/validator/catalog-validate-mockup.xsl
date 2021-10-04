<?xml version="1.0" encoding="UTF-8"?>
<XSLT:stylesheet version="3.0" xmlns:XSLT="http://www.w3.org/1999/XSL/Transform"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:html="http://www.w3.org/1999/xhtml"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:map="http://www.w3.org/2005/xpath-functions/map"
    xmlns:o="http://csrc.nist.gov/ns/oscal/1.0"
    exclude-result-prefixes="#all"
    xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0">

    <XSLT:variable name="declared-ns" as="xs:string">http://csrc.nist.gov/ns/oscal/1.0</XSLT:variable>
    
    <!-- Root from /define-assembly[root-name] -->
    <XSLT:template match="/root" mode="test">
        <!-- nothing to test for cardinality or order -->
        <XSLT:apply-templates select="." mode="test-definition"/>
    </XSLT:template>
    
    <!-- From assembly references -->
    <XSLT:template match="ancestor/parent/name" mode="test">
        <!-- test for cardinality and order -->
        <XSLT:call-template name="test-occurrence"/>
        <XSLT:apply-templates select="." mode="test-definition"/>
    </XSLT:template>
    
    <!-- From assembly inline definitions -->
    <XSLT:template match="ancestor/parent/name" mode="test">
        <!-- test for cardinality and order -->
        <XSLT:call-template name="test-occurrence"/>
        <XSLT:apply-templates select="." mode="test-definition"/>
    </XSLT:template>
    
    <!-- From field references -->
    <XSLT:template match="ancestor/parent/name" mode="test">
        <!-- test for cardinality and order -->
        <XSLT:call-template name="test-occurrence"/>
        <XSLT:apply-templates select="." mode="test-definition"/>
    </XSLT:template>
    
    <!-- From field inline definitions -->
    <XSLT:template match="ancestor/parent/name" mode="test">
        <!-- test for cardinality and order -->
        <XSLT:call-template name="test-occurrence"/>
        <XSLT:apply-templates select="." mode="test-definition"/>
    </XSLT:template>
    
    <!-- From flag references -->
    <XSLT:template match="ancestor/parent/name" mode="test">
        <XSLT:apply-templates select="." mode="test-definition"/>
    </XSLT:template>
    
    <!-- From flag inline definitions -->
    <XSLT:template match="ancestor/parent/name" mode="test">
        <XSLT:apply-templates select="." mode="test-definition"/>
    </XSLT:template>
    

    <!-- 'test-definition' mode -->

    <!--After generating templates for the field references, generate mode 'test-definition' templates
    (for the same set of matches) except from the definitions ... -->

    <!-- From //define-assembly: check attribute requirements, contents   -->
    <XSLT:template name="assembly-definition-name" match="assembly-names-in-use" mode="test-definition">
        <!-- 'test' mode here will cough up messages for unknown attributes and test known attributes -->
        <XSLT:apply-templates select="@*" mode="test"/>
        <!-- for each required element ... -->
        <XSLT:if test="empty(metadata)">
            <XSLT:call-template name="warning">
                <XSLT:with-param name="msg" expand-text="true">Catalog requires metadata.</XSLT:with-param>
            </XSLT:call-template>
        </XSLT:if>
    </XSLT:template>
    
    <!-- From //define-field: check attribute requirements, value datatype   -->
    <XSLT:template name="field-definition-name" match="fieldnames-in-use" mode="test-definition">
        <!-- 'test' mode here will cough up messages for unknown attributes and test known attributes -->
        <XSLT:apply-templates select="@*" mode="test"/>
        <XSLT:apply-templates select="." mode="datatype-check"/>
    </XSLT:template>
    
    <!-- From //define-flag: check value datatype   -->
    <XSLT:template name="flag-definition-name" match="flagnames-in-use" mode="test-definition">
        <!-- 'test' mode here will cough up messages for unknown attributes and test known attributes -->
        <XSLT:apply-templates select="@*" mode="test"/>
        <XSLT:apply-templates select="." mode="datatype-check"/>
    </XSLT:template>
    
    <!-- And - for fields and flags [not(@as-type='string')]
         there will be datatype checks ... -->
    
    <!-- 'datatype-check' mode -->
    
    <!-- From //define-field | //define-flag: datatype check -->
    <XSLT:template match="fieldnames-in-use" mode="datatype-check">
        <XSLT:call-template name="warning">
            <XSLT:with-param name="msg" expand-text="true">Datatype checking on ... { name() } ...</XSLT:with-param>
        </XSLT:call-template>
    </XSLT:template>
    
    
<!-- To match elements and attributes to their assembly, field or flag references (uses)
    
    for each reference or *local* definition, construct a path to match
   
    root (global)
      /*/define-assembly[exists(root-name)]
        '/root-name'

    global/inline/inline
      /*/define-assembly//(define-flag|define-field|define-assembly)
        'global/inline-name/inline-name'

    global/ref
      /*/define-assembly/flag
      /*/define-assembly/model/(.|choice)/field
      /*/define-assembly/model/(.|choice)/assembly
    
    global/inline/inline/ref
      /*/define-assembly//define-assembly/flag
      /*/define-assembly//define-assembly/model/(.|choice)/field
      /*/define-assembly//define-assembly/model/(.|choice)/assembly
    
    match these - priority is the definition depth (ancestor count from metaschema)
 
 produce tests from both the reference or local definition (cardinality checks in use) and the definition (contents, datatyping)
 
   
 From reference (or inline definition):
 'test' template:
    x Cardinality (of elements appearing) - too many or too few - check each element[last()] for its position</li>
    x Any violations of 'choice' rules
    x Order of elements - no elements expected to follow are permitted to precede
    From definition:
    x  Unrecognized attributes
    x  Required elements and attributes</li>
    x Lexical datatypes, 'castable as'</li>

   o prose special handling
     markup-line and markup-multiline
     o @in-xml='UNWRAPPED' special handling
   o recursion handling especially overloaded names (such as different kinds of parts)
   o group-as/@in-xml='WITH_WRAPPER' w/ exceptions to above
       to occurrence, cardinality, 

    -->

    <XSLT:template name="warning">
        <XSLT:param name="msg"/>
    </XSLT:template>
    <XSLT:template name="test-occurrence"/>
    
</XSLT:stylesheet>
