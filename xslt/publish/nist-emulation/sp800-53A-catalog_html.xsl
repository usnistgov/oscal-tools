<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns="http://www.w3.org/1999/xhtml"
    xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0"
    exclude-result-prefixes="#all">

   <xsl:import href="../generic-preview/oscal_catalog_html.xsl"/>
   
   <!-- Space can be stripped from anything modeled as an assembly. -->
   <xsl:strip-space elements="catalog group control param guideline select part
      metadata back-matter annotation party person org rlink address resource role responsible-party citation
      profile import merge custom modify include exclude set-parameter alter add"/>
   
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
      <xsl:variable name="withdrawn" select="prop[@name='status']=('Withdrawn','withdrawn')"/>
      <div class="control{ $withdrawn[boolean(.)] ! ' withdrawn' }">
         <xsl:copy-of select="@id"/>
         <details>
            <!-- Keeping control enhancements closed -->
            <xsl:if test="empty(parent::control)">
               <xsl:attribute name="open">open</xsl:attribute>
            </xsl:if>
            <summary class="h3">
               <span class="label">
                  <xsl:apply-templates mode="part-number" select="prop[@name = 'label']"/>
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
            <xsl:if test="@name='guidance' and empty(* except (part|link))">
               <p class="link">
                  <xsl:call-template name="guidance-links"/>
               </p>
            </xsl:if>
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
   
   <xsl:template match="part[@name='assessment']/prop[@name='method']"/>   
   
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
      <xsl:apply-templates mode="#current" select="prop[@name='label']"/>
   </xsl:template>
   
   <xsl:template priority="3" match="part[@name='objective']" mode="part-number">
      <xsl:variable name="inherited-no" select="ancestor::*[prop/@name='label'][1]/prop[@name='label']"/>
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
   
   <xsl:template priority="2" match="part[@name='guidance']" mode="title">
      <h4>Supplemental guidance</h4>
   </xsl:template>
   
   <xsl:template priority="2" match="part[@name='objective']" mode="title">
      <h4>
         <xsl:text>Objective</xsl:text>
         <xsl:if test="part">s</xsl:if>
      </h4>
   </xsl:template>
   
   <xsl:template  priority="2" match="part[@name='assessment']" mode="title">
      <h4>
         <xsl:text>Assessment: </xsl:text>
         <xsl:value-of select="prop[@name='method']"/>
      </h4>
   </xsl:template>
   
   <xsl:template match="param"/>
   
   <xsl:template match="part[@name='guidance']/link"/>
   
   <xsl:template match="prop[@name='status'][.=('Withdrawn','withdrawn')]">
      <p class="withdrawn-status">
         <xsl:text>[Withdrawn</xsl:text>
         <xsl:for-each-group select="../link[@rel='incorporated-into']" group-by="true()">
            <xsl:choose>
               <xsl:when test="count(current-group()) gt 2">: Capability provided by </xsl:when>
               <xsl:otherwise>: Incorporated into </xsl:otherwise>
            </xsl:choose>
            <xsl:for-each select="current-group()">
               <xsl:if test="position() gt 1">, </xsl:if>
               <xsl:apply-templates select="." mode="link-as-link"/>
            </xsl:for-each>
            <xsl:text>.</xsl:text>
         </xsl:for-each-group>
         <xsl:text>]</xsl:text>
      </p>
   </xsl:template>
   
   <xsl:template match="prop[@name='sort-id']"/>
   
   <!-- overriding the imported stylesheet to suppress labeling of links  -->
   <xsl:template match="link" mode="link-label"/>
      
   <xsl:template match="part[@name='objective']//part[@name='objective']" priority="2" mode="title"/>
   
   <!--<xsl:template match="part[@name='guidance']/p" name="guidance-paragraph">
     <p>
        <xsl:apply-templates/>
        <xsl:if test="empty(following-sibling::p)">
           <xsl:call-template name="guidance-links">
              <xsl:with-param name="links" select="following-sibling::link[@rel = 'related']"/>
           </xsl:call-template>
        </xsl:if>
     </p>   
   </xsl:template>-->
   
   <!-- Makes links to related controls at the end of the last text inside the 'guidance' part
        before any subparts or links. All 'related' links within the (closest) control are collected  -->
   <xsl:template match="part[@name='guidance']//text()" mode="#default html-ns">
      <xsl:variable name="scope" select="ancestor::part[@name='guidance']/(* except (part|link))"/>
      <xsl:value-of select="."/>
      <xsl:if test=". is $scope/descendant::text()[last()]">
         <xsl:call-template name="guidance-links">
            <xsl:with-param name="links" select="ancestor::control[1]//link[@rel = 'related']"/>
         </xsl:call-template>
      </xsl:if>
   </xsl:template>
   
   
   <xsl:template name="guidance-links">
      <xsl:param name="links" select="link[@rel = 'related']"/>
      <xsl:for-each-group select="$links" group-by="true()">
         <xsl:text expand-text="true"> Related { if (count(current-group()) eq 1) then 'control' else 'controls' }: </xsl:text>
         <xsl:for-each select="current-group()">
            <xsl:if test="position() gt 1">, </xsl:if>
            <xsl:apply-templates select="." mode="link-as-link"/>
         </xsl:for-each>
         <xsl:text>.</xsl:text>
      </xsl:for-each-group>
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
   
   <xsl:template match="part[@name='objects']/p">
      <p class="object">
         <input type="checkbox" class="box"/>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:key name="param-for-id" match="param" use="@id"/>
   
   <xsl:template match="insert">
      <xsl:variable name="best-param"
         select="(key('param-for-id',@param-id) intersect ancestor-or-self::*/param)[last()]"/>
      <!-- Providing substitution via declaration not yet supported -->
      <span class="insert">
         <xsl:apply-templates select="$best-param/(value, select , label)[1]"/>
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
      <tr class="resource" id="{@uuid}">
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
   
   <xsl:template priority="2" match="resource/citation">
      <td class="{ local-name() }">
         <xsl:apply-templates select="./text"/>
         <xsl:apply-templates select="../rlink" mode="cited"/>
      </td>   
   </xsl:template>
   
   <xsl:template priority="2" match="resource/citation/text">
      <xsl:apply-templates/>
      <xsl:if test="not(matches(string(.),'\.$'))">.</xsl:if>
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
         <xsl:value-of select="prop[@name='label']"/>
      </a>
   </xsl:template>
   
</xsl:stylesheet>
