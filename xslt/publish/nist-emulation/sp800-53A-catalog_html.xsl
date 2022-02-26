<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns="http://www.w3.org/1999/xhtml"
    xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0"
    exclude-result-prefixes="#all">

   <xsl:import href="../generic-preview/oscal_catalog_html.xsl"/>
   
<!--  
   
   
   x  confirm run on old data / tweak
   x confirm run on new data
   x run to PDF
   o rename 'objective-part' as 'statement-part'?
   x paste screen shot
   o update comments
   o PR
   o CSX: catalog display
   
   -->
   
   <!-- Space can be stripped from anything modeled as an assembly. -->
   <xsl:strip-space elements="catalog group control param guideline select part
      metadata back-matter annotation party person org rlink address resource role responsible-party citation
      profile import merge custom modify include exclude set-parameter alter add"/>
   
   
   <!-- Names of any properties we wish to drop in display...  -->
   <xsl:variable name="drop-properties" as="xs:string*" select="'fisma-baseline'"/>
   
   <xsl:template match="back-matter" mode="toc">
      <xsl:if test="exists(resource)">
         <p class="toc-listing">
            <a class="toc-label" href="#references">References</a>
         </p>
      </xsl:if>
   </xsl:template>
   
   <xsl:template match="group">
      <section class="group">
         <xsl:copy-of select="@id"/>
         <details open="open">
            <summary>
               <xsl:apply-templates select="." mode="summary-title"/>
            </summary>
            <xsl:apply-templates select="* except title"/>
         </details>
      </section>
   </xsl:template>
   
   <xsl:template match="control">
      <xsl:variable name="withdrawn" select="some $p in (prop[@name='status']) satisfies matches($p/@value,'Withdrawn','i')"/>
      <div class="control{ $withdrawn[boolean(.)] ! ' withdrawn' }">
         <xsl:copy-of select="@id"/>
         <details>
            <!-- Keeping control enhancements closed -->
            <xsl:if test="empty(parent::control)">
               <xsl:attribute name="open">open</xsl:attribute>
            </xsl:if>
            <summary class="h3">
               <span class="label">
                  <xsl:apply-templates mode="part-number" select="prop[@name = 'label'][1]"/>
               </span>
               <xsl:for-each select="ancestor::control/title">
                  <small>
                     <xsl:apply-templates/>
                     <xsl:text> | </xsl:text>
                  </small>
                  <xsl:text> </xsl:text>
               </xsl:for-each>
               <xsl:for-each select="title">
                  <xsl:apply-templates/>
                  <xsl:if test="position() ne last()"> | </xsl:if>
               </xsl:for-each>
            </summary>
            <div class="control-body">
               <xsl:apply-templates select="* except (control | link)"/>
               
               <xsl:call-template name="guidance-links">
                  <xsl:with-param name="links" select="link[@rel = 'related']"/>
               </xsl:call-template>
               
               <xsl:if test="empty(parent::control)">
                  <xsl:call-template name="unconditional-listing">
                     <xsl:with-param name="things" select="child::control"/>
                     <xsl:with-param name="sg">Control enhancement</xsl:with-param>
                     <xsl:with-param name="pl">Control enhancements</xsl:with-param>
                     <xsl:with-param name="css-class">enhancements</xsl:with-param>
                  </xsl:call-template>
                  <xsl:if test="not($withdrawn)">
                     <xsl:call-template name="unconditional-listing">
                        <xsl:with-param name="things" select="child::link[@rel='reference']"/>
                        <xsl:with-param name="sg">Reference</xsl:with-param>
                        <xsl:with-param name="pl">References</xsl:with-param>
                        <xsl:with-param name="css-class">control-references</xsl:with-param>
                     </xsl:call-template>

                  </xsl:if>
               </xsl:if>
            </div>
         </details>
         <!-- impact table went here -->
      </div>
   </xsl:template>
   
   <xsl:template name="unconditional-listing">
      <xsl:param name="things"/>
      <xsl:param name="sg">Thing</xsl:param>
      <xsl:param name="pl">Things</xsl:param>
      <xsl:param name="css-class">things</xsl:param>
      <xsl:variable name="count-of-things" select="count($things)"/>
      <div class="part { $css-class } { $count-of-things[. eq 0] ! ' none' }">
      <details>
         <!-- When building for control enhancements, open the details -->
         <xsl:if test="$things/self::control">
            <xsl:attribute name="open">open</xsl:attribute>
         </xsl:if>
         <summary class="h4">
            <span class="inline-head">
               <xsl:value-of
                  select="if ($count-of-things = 1) then $sg else $pl"/>
            </span>
            <xsl:text> </xsl:text>
            <span class="count">
               <xsl:value-of select="if ($count-of-things eq 0) then ' None' else $count-of-things"/>
            </span>
         </summary>
         <xsl:apply-templates select="$things"/>
      </details>
      </div>
   </xsl:template>
   
   
   
   <!-- Check out xsl:template[@mode='impact-table'] in the original SP800-53 rendering XSL
       for drawing the impact table in HTML -->
   
   <!-- Picked up in parent -->
   <xsl:template match="control/title"/>
   
   <!-- Pulled into title -->
   <xsl:template match="control/prop[@name='label']"/>
   
   <xsl:template name="make-title">
      <xsl:param name="runins" select="/text()"/>
      <h3>
         <xsl:apply-templates select="$runins" mode="run-in"/>
         <xsl:for-each select="title">
            <xsl:apply-templates/>
         </xsl:for-each>
      </h3>
   </xsl:template>
   
   <xsl:template match="control/part">
      <div class="part {@name}">
         <xsl:copy-of select="@id"/>
         <details>
            <summary>
               <xsl:apply-templates select="." mode="summary-title"/>
            </summary>
            <xsl:apply-templates/>
            <!-- Drop a paragraph for links in if no text will appear to which they would be appended.
                 See template matching 'part[@name='guidance']//text()' -->
            <!--<xsl:if test="@name='guidance' and empty(* except (part|link))">
               <p class="link">
                  <xsl:call-template name="guidance-links"/>
               </p>
            </xsl:if>-->
         </details>
      </div>
   </xsl:template>
   
   <xsl:template match="control/part[@name='statement']" priority="2">
      <div class="part {@name}">
         <xsl:copy-of select="@id"/>
            <xsl:apply-templates/>
       </div>
   </xsl:template>

   <xsl:template priority="3" match="control/part[@name='statement'][empty(child::p)]">
      <div class="part {@name}">
         <xsl:copy-of select="@id"/>
         <p><span class="inline-head">Control</span>:</p>
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
<!-- Statements of withdrawn controls are picked up with the 'withdrawn' prop below. -->
   <xsl:template  priority="5" match="control[matches(prop[@name='status'][1]/@value,'Withdrawn','i')]/part[@name='statement']"/>
   
   <xsl:template match="control/part[@name='statement']/p">
      <xsl:choose>
         <xsl:when test=". is ancestor::part[@name='statement']/child::p[1]">
            <p><span class="inline-head">Control</span>
               <xsl:text>: </xsl:text>
               <xsl:apply-templates/></p>
         </xsl:when>
         <xsl:otherwise>
            <xsl:next-match/>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   
   <xsl:template match="part">
      <div class="part {@name}">
         <xsl:copy-of select="@id"/>
         <xsl:apply-templates select="." mode="title"/>
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="part[@name=('assessment','assessment-method')]/prop[@name='method']"/>   
   
   <xsl:template match="part[@name=('assessment','assessment-objects')]/p">
      <p>
         <xsl:copy-of select="@*"/>
         <input type="checkbox"/>
         <xsl:text> </xsl:text>
         <xsl:apply-templates mode="#current"/>
      </p>
   </xsl:template>   
   
   <xsl:template match="part[@name='item'] | part[@name='objective']">
      <div class="part">
         <xsl:copy-of select="@id"/>
         <xsl:apply-templates select="." mode="title"/>
         <table class="objective-part">
            <tbody>
               <tr>
                  <td>
                     <xsl:apply-templates select="." mode="part-number"/>
                  </td>
                  <td>
                     <xsl:apply-templates/>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </xsl:template>
   
   <xsl:template priority="3" match="control/part[@name='objective']">
      <div class="part">
         <xsl:copy-of select="@id"/>
         <details>
            <summary>
               <xsl:apply-templates select="." mode="summary-title"/>
            </summary>
            <table class="objective-part">
               <tbody>
                  <tr>
                     <td>
                        <xsl:apply-templates select="." mode="part-number"/>
                     </td>
                     <td>
                        <xsl:apply-templates/>
                     </td>
                  </tr>
               </tbody>
            </table>
         </details>
      </div>
   </xsl:template>
   
   <xsl:template priority="3" match="control/part[@name='assessment-objective']">
      <div class="part">
         <xsl:copy-of select="@id"/>
         <details>
            <summary>
               <xsl:apply-templates select="." mode="summary-title"/>
            </summary>
            <table class="objective-table">
               <tbody>
                  <xsl:apply-templates select="." mode="assessment-table"/>
               </tbody>
            </table>
         </details>
      </div>
   </xsl:template>
   
   <xsl:template priority="5" mode="assessment-table" match="part[@name='assessment-objective']//part[@name='assessment-objective']">
      <xsl:apply-templates mode="#current"/>
   </xsl:template>
   
   <xsl:template priority="8" mode="assessment-table" match="part[@name='assessment-objective'][exists(p)]">
      <tr>
         <td class="assessment-label">
           <xsl:apply-templates select="." mode="part-number"/>
         </td>
         <td>
            <xsl:apply-templates/>
         </td>
      </tr>
   </xsl:template>
   
   <xsl:template match="*" mode="summary-title">
      <xsl:variable name="me" select="."/>
      <xsl:variable name="title" as="element()?">
         <xsl:apply-templates select="." mode="title"/>
      </xsl:variable>
      <xsl:for-each select="$title">
         <xsl:attribute name="class" select="local-name()"/>
         <xsl:apply-templates select="$me" mode="summary-label"/>
         <xsl:copy-of select="* | text()"/>
      </xsl:for-each>
   </xsl:template>
   
   <xsl:template match="*" mode="summary-label"/>
   
   <!--<xsl:template match="group" mode="summary-label">
      <small>FAMILY:</small>
      <xsl:text> </xsl:text>
   </xsl:template>-->
   
   <xsl:template priority="10" match="part//part" mode="title"/>
   
   <xsl:template match="part" mode="part-number"/>
   
   <xsl:template match="part[prop/@name='label']" mode="part-number">
      <xsl:apply-templates mode="#current" select="prop[@name='label'][1]"/>
   </xsl:template>
   
   <xsl:template match="prop" mode="part-number">
      <xsl:value-of select="@value"/>
   </xsl:template>
   
   <xsl:template priority="3" match="part[@name='objective']" mode="part-number">
      <xsl:variable name="inherited-no" select="ancestor::*[prop/@name='label'][1]/prop[@name='label']/@value"/>
      <xsl:variable name="inherited-trimmed" select="translate($inherited-no,' ','')"/>
      <p class="part-number">
         <xsl:value-of select="substring-after(translate(prop[@name='label'],' ',''),$inherited-trimmed)"/>
      </p>
   </xsl:template>
   
   <xsl:template match="part/prop[@name='label']"/>
   
   <xsl:template match="group" mode="title">
      <xsl:apply-templates select="./title"/>
   </xsl:template>
   
   <xsl:template priority="2" match="part[@name='statement']" mode="title">
      <h4>Control</h4>
   </xsl:template>
   
<!-- Now matching Rev 5 display -->
   <xsl:template priority="2" match="part[@name='guidance']" mode="title">
      <h4>Discussion</h4>
   </xsl:template>
   
   <xsl:template priority="2" match="part[@name='objective']" mode="title">
      <h4>
         <xsl:text>Objective</xsl:text>
         <xsl:if test="part">s</xsl:if>
      </h4>
   </xsl:template>
   
   <xsl:template priority="2" match="part[@name='assessment-objective']" mode="title">
      <h4>
         <xsl:text>Assessment Objective</xsl:text>
         <xsl:if test="part">s</xsl:if>
      </h4>
   </xsl:template>
   
   <xsl:template priority="2" match="part[@name='assessment-method']" mode="title">
      <h4>
         <xsl:text>Assessment Method: </xsl:text>
         <xsl:value-of select="prop[@name='method']/@value"/>
      </h4>
   </xsl:template>
   
   <xsl:template  priority="2" match="part[@name='assessment']" mode="title">
      <h4>
         <xsl:text>Assessment: </xsl:text>
         <xsl:value-of select="prop[@name='method']/@value"/>
      </h4>
   </xsl:template>
   
   <xsl:template match="param"/>
   
   <xsl:template match="part[@name='guidance']/link"/>
   
   <xsl:template match="prop[@name='status'][matches(@value,'Withdrawn','i')]">
      <p class="withdrawn-status">
         <xsl:text>[Withdrawn</xsl:text>
         <xsl:variable name="withdrawn-to" select="../link[@rel = ('moved-to', 'incorporated-into')]"/>
         <xsl:variable name="link-label">
            <xsl:choose>
               <xsl:when test="empty($withdrawn-to)">. </xsl:when>
               <xsl:when test="$withdrawn-to/@rel = 'incorporated-into'">: Incorporated into </xsl:when>
               <xsl:otherwise>: Moved to </xsl:otherwise>
            </xsl:choose>
         </xsl:variable>
         <xsl:variable name="withdrawn-statement">
            <xsl:sequence select="$link-label"/>
            <xsl:for-each-group select="$withdrawn-to" group-by="true()">
               <xsl:for-each select="current-group()">
                  <xsl:if test="position() gt 1">, </xsl:if>
                  <xsl:apply-templates select="." mode="link-as-link"/>
               </xsl:for-each>
            </xsl:for-each-group>
            <xsl:for-each select="../part[@name = 'statement']/*">
               <xsl:apply-templates/>
            </xsl:for-each>
         </xsl:variable>
         <xsl:sequence select="$withdrawn-statement"/>
         <xsl:if test="not(matches(string($withdrawn-statement), '\.\s*$'))">.</xsl:if>
         <xsl:text>]</xsl:text>
      </p>
   </xsl:template>

   <xsl:template match="prop[@name='sort-id']"/>
   
<!-- Don't want to display -->
   <xsl:template match="prop[@name=$drop-properties]"/>
   
   <!-- overriding the imported stylesheet to suppress labeling of links  -->
   <xsl:template match="link" mode="link-label"/>
      
   <xsl:template match="part[@name='objective']//part[@name='objective']" priority="2" mode="title"/>
   
   <xsl:template name="guidance-links">
      <xsl:param name="links" select="link[@rel = 'related']"/>
      <p>
           <xsl:for-each-group select="$links" group-by="true()" expand-text="true">
         <span class="inline-head"> Related { if (count(current-group()) eq 1) then 'control' else 'controls' }</span>
              <xsl:text>: </xsl:text>
            <xsl:for-each select="current-group()">
               <xsl:if test="position() gt 1">, </xsl:if>
               <xsl:apply-templates select="." mode="link-as-link"/>
            </xsl:for-each>
         <xsl:text>.</xsl:text>
      </xsl:for-each-group>
        </p>
   </xsl:template>
   
   <xsl:template match="part[empty(title)]" mode="title">
         <h4 class="part-title">
            <xsl:apply-templates select="." mode="decorate-inline"/>
         </h4>
   </xsl:template>
      
   <xsl:template match="*" mode="title">
      <p class="title">
         <xsl:value-of select="@name"/>
      </p>
   </xsl:template>
   
   <xsl:template match="part" mode="link-text">
      <xsl:for-each select="ancestor::control[1] | ancestor-or-self::part">
         <xsl:value-of select="prop[@name='label']/@value"/>
      </xsl:for-each>
   </xsl:template>
   
   <xsl:template match="part[@name='objects']/p">
      <p class="object">
         <input type="checkbox" class="box"/>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:key name="param-for-id" match="param" use="@id"/>
   
   <xsl:key name="by-id" match="*" use="@id"/>
   
   <xsl:template match="insert">
      <xsl:variable name="target" select="key('by-id',@id-ref)[last()]"/>
      <span class="insert">
         <xsl:apply-templates select="$target" mode="inline-ref"/>
      </span>
   </xsl:template>
   
   <xsl:template match="*" mode="inline-ref">
      <xsl:message expand-text="true">cross-reference fallback on { name() }</xsl:message>
      <xsl:value-of select="(child::title,@id,name()) => head()"/>
   </xsl:template>
   
   <xsl:template match="insert[@type='param']">
      <xsl:variable name="param"
         select="key('param-for-id',@id-ref)[last()]"/>
      <!-- Providing substitution via declaration not yet supported -->
      <span class="insert">
         <xsl:apply-templates select="$param/(value, select , label)[1]"/>
      </span>
   </xsl:template>
   
   <xsl:template match="param/value">
      <span class="value">
         <xsl:apply-templates/>
      </span>
   </xsl:template>
   
   <xsl:template match="param/label">
      <span class="unassigned">
         <xsl:text>[Assignment: </xsl:text>
         <xsl:apply-templates/>
         <xsl:text>]</xsl:text>
      </span>
   </xsl:template>
   
   <xsl:template match="param/select">
      <span class="selection">
         <xsl:text>[Selection: </xsl:text>
         <xsl:apply-templates/>
         <xsl:text>]</xsl:text>
      </span>
   </xsl:template>
   
   <xsl:template match="param/select/choice">
      <span class="value">
         <xsl:if test="exists(preceding-sibling::choice)">; </xsl:if>
         <xsl:apply-templates/>
      </span>
   </xsl:template>
   
   <xsl:template match="back-matter" mode="back-matter">
      <xsl:if test="exists(resource)">
      <section class="references" id="references">
         <details open="open">
            <summary class="h3">References</summary>
            <xsl:call-template name="make-resource-table"/>
         </details>
      </section>
      </xsl:if>
   </xsl:template>
   
   <xsl:key name="cross-references" match="link[starts-with(@href,'#')]" use="replace(@href,'^#','')"/>
   
   <xsl:template name="make-resource-table">
      <table class="resources">
         <xsl:apply-templates select="resource"/>
      </table>
   </xsl:template>
   
   <xsl:template match="back-matter/resource">
      <tr class="resource" id="resource-{@uuid}">
         <xsl:apply-templates/>
      </tr>
   </xsl:template>
   
   
   <xsl:template match="resource">
      <td class="{ local-name() }">
         <xsl:apply-templates/>
      </td>   
   </xsl:template>
   
   <xsl:template match="resource/*">
      <td class="{ local-name() }">
         <xsl:apply-templates/>
      </td>   
   </xsl:template>
   
   <xsl:template match="resource[empty(citation)]/title" priority="4">
      <td class="{ local-name() }" colspan="2">
         <xsl:apply-templates/>
      </td>   
   </xsl:template>
   
   <xsl:template match="resource[empty(citation)][exists(rlink/@href)]/title" priority="6">
      <td class="{ local-name() }" colspan="2">
         <a href="{../rlink/@href}">
           <xsl:apply-templates/>
         </a>
      </td>   
   </xsl:template>
   
   <xsl:template priority="2" match="resource/citation">
      <td class="{ local-name() }">
         <xsl:apply-templates select="./text"/>
         <xsl:apply-templates select="../rlink" mode="cited"/>
      </td>   
   </xsl:template>
   
   <xsl:template priority="2" match="resource/citation/text">
      <xsl:apply-templates/>
      <xsl:if test="not(matches(string(.),'\.\s*$'))">.</xsl:if>
   </xsl:template>
   
   <xsl:template match="rlink" priority="2"/>
   
   <xsl:template match="rlink" mode="cited" priority="2">
      <xsl:text> </xsl:text>
      <a class="{ local-name() }">
         <xsl:copy-of select="@href"/>
         <xsl:value-of select="@href"/>   
      </a>
      <xsl:if test="not(matches(@href,'\.$'))">.</xsl:if>
   </xsl:template>
   
   <xsl:template match="control" mode="link">
      <a href="#{@id}">
         <xsl:value-of select="prop[@name='label']/@value"/>
      </a>
   </xsl:template>
   
</xsl:stylesheet>
