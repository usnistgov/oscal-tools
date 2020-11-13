<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns="http://www.w3.org/1999/xhtml"
    xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0"
    exclude-result-prefixes="#all">

   <!-- import fallback logic first -->
   <xsl:import href="oscal_fallback_html.xsl"/>
   
   <xsl:import href="oscal_metadata_html.xsl"/>
   
   <xsl:param name="css-path" as="xs:string" select="''"/>
   <xsl:param name="with-toc" as="xs:string">yes</xsl:param>
   
   <xsl:variable name="css-fallback">../css/oscal-catalog_html.css</xsl:variable>
   <xsl:variable name="include-toc" select="$with-toc=('yes','true')"/>
   
   <xsl:template match="/">
      <html lang="en">
         <head>
            <title>
               <xsl:value-of select="/descendant::title[1]/normalize-space(.)"/>
            </title>
            <xsl:choose>
               <xsl:when test="matches($css-path,'\S')">
                  <link rel="stylesheet" href="{$css-path}"/>
               </xsl:when>
               <xsl:otherwise>
                  <style type="text/css">
                     <xsl:value-of select="unparsed-text($css-fallback)" disable-output-escaping="yes"/>
                  </style>
               </xsl:otherwise>
            </xsl:choose>   
         </head>
         <body>
            <xsl:apply-templates/>
         </body>
      </html>
   </xsl:template>
   
   <xsl:template match="catalog">
      <xsl:apply-templates select="metadata/title"/>
      <xsl:apply-templates mode="metadata" select="metadata"/>
      <xsl:call-template name="table-of-contents"/>
      <main class="catalog">
         <xsl:apply-templates/>
      </main>
      <xsl:apply-templates select="back-matter" mode="back-matter"/>
   </xsl:template>

   <xsl:template match="back-matter"/>
   
   <xsl:template match="back-matter" mode="back-matter">
      <section class="references" id="references">
         <details open="open">
            <summary class="h3">Back matter</summary>
            <xsl:apply-templates/>
         </details>
      </section>
   </xsl:template>
   
   <xsl:template name="table-of-contents">
      <xsl:if test="$include-toc">
         <section class="ToC">
            <details open="open">
               <summary class="h3">Table of Contents</summary>
               <xsl:apply-templates select="group | control | back-matter" mode="toc"/>
            </details>
         </section>
      </xsl:if>
   </xsl:template>
   
   <xsl:template mode="toc" match="group">
      <details class="ToC">
         <xsl:apply-templates select="." mode="toc-listing"/>
         <xsl:apply-templates select="group | control" mode="#current"/>
      </details>
   </xsl:template>
   
   <xsl:template mode="toc" match="control">
      <xsl:apply-templates select="." mode="toc-listing"/>
      <xsl:for-each-group select="control" group-by="true()">
         <div class="ToC enhancements">
            <xsl:apply-templates select="current-group()" mode="#current"/>
         </div>
      </xsl:for-each-group>
   </xsl:template>
   
   <xsl:template match="group" mode="toc-listing">
      <xsl:apply-templates select="title" mode="#current"/>
   </xsl:template>
   
   <xsl:template match="control" mode="toc-listing">
      <p class="toc-listing">
         <xsl:apply-templates mode="#current" select="prop[@name='label']"/>
         <xsl:text> </xsl:text>
         <xsl:apply-templates mode="#current" select="title"/>
      </p>
   </xsl:template>
   
   <xsl:template match="back-matter" mode="toc">
      <p class="toc-listing">
         <a class="toc-label" href="#references">Back matter</a>
      </p>
   </xsl:template>
   
   <xsl:template mode="toc-listing" match="title">
      <a class="toc-title" href="#{../@id}">
         <xsl:apply-templates/>
      </a>
   </xsl:template>

   <xsl:template match="group/title" mode="toc-listing">
      <summary class="toc-listing">
         <span class="toc-label">Family</span>
         <xsl:text>: </xsl:text>
         <a href="#{../@id}">
            <xsl:apply-templates/>
         </a>
         <span class="toc-title">
            <xsl:text> (</xsl:text>
            <xsl:value-of select="(prop[@name='label'],../@id/upper-case(.))[1]"/>
            <xsl:text>)</xsl:text>
         </span>
      </summary>
   </xsl:template>
   
   
   <xsl:template match="prop[@name='label']" mode="toc-listing">
      <span class="toc-label">
         <xsl:value-of select="."/>
      </span>
   </xsl:template>
   
   <xsl:template priority="2" match="control/control/prop[@name='label']" mode="toc-listing">
      <xsl:variable name="parent-label" select="../parent::control/prop[@name='label']"/>
      <span class="toc-label">
         <xsl:value-of select="substring-after(.,$parent-label)"/>
      </span>
   </xsl:template>
   
   
   <xsl:template match="group">
      <section class="group">
         <xsl:copy-of select="@id"/>
         <details open="open">
            <summary>
               <xsl:apply-templates select="title"/>
            </summary>
            <xsl:apply-templates select="* except title"/>
         </details>
      </section>
   </xsl:template>

   <xsl:template match="control">
      <section class="control">
         <xsl:copy-of select="@id"/>
         <details open="open">
            <summary>
               <xsl:apply-templates select="title"/>
            </summary>
            
            <xsl:apply-templates select="* except title"/>
         </details>
      </section>
   </xsl:template>

   <xsl:key name="param-for-id" match="param" use="@id"/>
   
   <xsl:template match="insert">
      <xsl:variable name="best-param"
         select="(key('param-for-id',@param-id) intersect ancestor-or-self::*/param)[last()]"/>
      <!-- Providing substitution via declaration not yet supported -->
      <xsl:variable name="unassigned">
         <xsl:if test="empty($best-param)"> unassigned</xsl:if>
      </xsl:variable>
      <span class="insert{$unassigned}">
         <xsl:for-each select="$best-param">
            <a href="#{@id}">
               <xsl:apply-templates select="." mode="param-id-block"/>
            </a>
            <xsl:apply-templates mode="inline"/>
            <xsl:if test="empty(value | ./default)">
               <span class="value">
                  <xsl:apply-templates select="value" mode="param-value"/>
                  <xsl:if test="empty(value)">[NO PARAMETER VALUE GIVEN]</xsl:if>
               </span>
            </xsl:if>
         </xsl:for-each>
         <xsl:if test="empty($best-param)">[NO PARAMETER ASSIGNED]</xsl:if>
      </span>
   </xsl:template>
   
   <xsl:template match="param" mode="param-id-block">
      <span class="param-id">
         <xsl:value-of select="@id"/>
      </span>
      <xsl:text> </xsl:text>
   </xsl:template>
   
   <xsl:template match="part">
      <div class="{ @ns ! (. || '_') || @name ! (. || ' ')}part">
         <xsl:if test="empty(title)">
            <xsl:call-template name="make-title"/>
         </xsl:if>
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="group/title" mode="#default title">
      <h3 class="group-title">
         <xsl:for-each select="../ancestor::group/title">
            <small><xsl:apply-templates/>
               <xsl:text> | </xsl:text></small>
         </xsl:for-each>
         <xsl:apply-templates/>
         <xsl:if test="exists(../control)" expand-text="true">
            <xsl:text> </xsl:text>
            <small> - { count(../control) } { if (count(../control) gt 1) then 'controls' else 'control' }</small>
         </xsl:if>
      </h3>
   </xsl:template>
   
   <xsl:template match="*" mode="seal"/>
   
   <xsl:template match="control/title">
      <xsl:apply-templates select=".." mode="seal"/>
      <span class="h2 control-title">
         <!--<xsl:for-each select="ancestor::group/title">
            <small><xsl:apply-templates/>
               <xsl:text> | </xsl:text></small>
         </xsl:for-each>-->
         <xsl:apply-templates/>
         <xsl:for-each-group select="../control" expand-text="true" group-by="true()">
            <xsl:variable name="c" select="count(current-group())"/>
            <small> ({ $c })</small>
            <!--<small> ({ $c } { if ($c eq 1) then 'enhancement' else 'enhancements' })</small>-->
         </xsl:for-each-group>
      </span>
   </xsl:template>
   
   <xsl:template priority="3" match="control/control/title">
      <xsl:apply-templates select=".." mode="seal"/>
      <span class="h4 subcontrol-title">
         <xsl:for-each select="../ancestor::control/title">
            <small>
               <xsl:apply-templates/>
               <xsl:text> | </xsl:text>
            </small>
         </xsl:for-each>
         <xsl:apply-templates/>
      </span>
   </xsl:template>
   
   <xsl:template match="control" mode="seal">
      <span class="seal">
         <xsl:for-each select="prop[@name='label']">
            <xsl:apply-templates/>
         </xsl:for-each>
      </span>
   </xsl:template>
   
   <xsl:template match="part/title">
      <h4 class="{name(..)}-title">
         <xsl:apply-templates select=".." mode="decorate-inline"/>
         <xsl:apply-templates/>
      </h4>
   </xsl:template>
   
   <xsl:template name="make-title">
      <h4 class="{name(.)}-title">
         <xsl:apply-templates select="." mode="decorate-inline"/>
      </h4>
   </xsl:template>
   
   <xsl:template match="param[empty(* except (label,value,select)[1])]" expand-text="true">
      <div class="param">
         <xsl:copy-of select="@id"/>
         <span class="lbl">Parameter: { @id }</span>
         <xsl:apply-templates select="*" mode="param-inline"/>
      </div>
   </xsl:template>
   
   <xsl:template match="param" expand-text="true">
      <xsl:variable name="leader" select="(label,value,select)[1]"/>
      <div class="param">
         <xsl:copy-of select="@id"/>
         <details>
            <summary>
               <span class="lbl">Parameter: { @id }</span>
               <xsl:apply-templates select="$leader" mode="param-inline"/>
            </summary>
            <xsl:apply-templates select="* except $leader"/>
         </details>
      </div>
   </xsl:template>
   
   <xsl:template match="param/*" mode="decorate-inline">
      <span class="lbl2">
         <xsl:value-of select="local-name()"/>
      </span>
   </xsl:template>
   
   <xsl:template match="param/*" mode="param-inline">
      <xsl:apply-templates select="." mode="decorate-inline"/>
      <xsl:text> </xsl:text>
      <xsl:apply-templates/>
   </xsl:template>
   
   <xsl:template match="param/*">
      <p class="parameter-{local-name()}">
         <xsl:apply-templates select="." mode="param-inline"/>
      </p>
   </xsl:template>
   
   <xsl:template match="param/select/choice">
      <xsl:if test="exists(preceding-sibling::choice)"> | </xsl:if>
      <span class="parameter-choice">
         <xsl:apply-templates/>
      </span>
   </xsl:template>
   
   <!--<xsl:template match="link">
      <p class="link">
         <xsl:apply-templates select="." mode="listing"/>
      </p>
   </xsl:template>-->
   
   <xsl:template match="link">
      <p class="link">
         <xsl:apply-templates select="." mode="link-label"/>
         <a>
            <xsl:copy-of select="@href"/>
            <xsl:choose>
               <xsl:when test="normalize-space()">
                  <xsl:apply-templates/>
               </xsl:when>
               <xsl:otherwise>
                  <xsl:value-of select="@href"/>
               </xsl:otherwise>
            </xsl:choose>
         </a>
      </p>
   </xsl:template>
   
   <xsl:template match="link[starts-with(@href,'#')]">
      <xsl:variable name="target" select="key('cross-reference-targets',@href)"/>
      <p class="link">
         <xsl:if test="not($target)">
            <xsl:attribute name="class">broken link</xsl:attribute>
         </xsl:if>
         <xsl:apply-templates select="." mode="link-label"/>
         <xsl:apply-templates select="." mode="link-as-link"/>
      </p>
   </xsl:template>
   
   <xsl:template match="link" mode="link-label">
      <span class="lbl">link</span>
   </xsl:template>
   
   <xsl:template match="link[matches(@rel,'\S')]" mode="link-label">
      <span class="lbl">
         <xsl:text expand-text="true">link ({ @rel })</xsl:text>
      </span>
   </xsl:template>
   
   
   <!-- 'listing' mode intercepts internal links and delivers hrefs
     from their citation targets. -->
   <xsl:template match="link" mode="link-as-link">
      <a href="{@href}">
         <xsl:apply-templates/>
         <xsl:if test="not(matches(.,'\S'))" expand-text="true">
            <xsl:value-of select="@href"/> 
         </xsl:if>
      </a>
   </xsl:template>
   
   <xsl:template match="link[starts-with(@href,'#')]" mode="link-as-link">
      <xsl:variable name="target" select="key('cross-reference-targets',@href)"/>
      <xsl:choose>
         <xsl:when test="exists($target)">
            <xsl:apply-templates select="$target" mode="link-as-link">
               <xsl:with-param name="link" select="."/>
            </xsl:apply-templates>
         </xsl:when>
         <xsl:otherwise>
            <xsl:next-match/>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   
   <xsl:template match="*" mode="link-as-link">
      <a href="#{ (@uuid, @id)[1] }">
         <xsl:apply-templates select="." mode="link-text"/>
      </a>
   </xsl:template>
   
   <xsl:template priority="2" match="resource[empty(rlink)]" mode="link-as-link">
      <xsl:param name="link" select="()"/>
         <xsl:for-each select="$link">
            <span class="ref-label">
               <xsl:apply-templates/>
            </span>
            <xsl:if test="exists(desc | citation/text)">
              <xsl:text>: </xsl:text>
            </xsl:if>
         </xsl:for-each>
      <xsl:apply-templates select="child::desc"/>
      <xsl:apply-templates select="child::citation/text"/>
   </xsl:template>
   
   <xsl:template match="resource" mode="link-as-link">
      <xsl:param name="link" select="()"/>
      <a href="{ child::rlink[1]/@href }">
         <xsl:for-each select="$link">
            <span class="ref-label">
              <xsl:apply-templates/>
            </span>
            <xsl:text>: </xsl:text>
         </xsl:for-each>
         <xsl:apply-templates select="child::desc"/>
         <xsl:if test="not(matches(child::desc,'\S'))" expand-text="true">{ child::rlink[1]/@href }{ child::rlink[1]/@media-type ! ( ' (' || . || ')' ) }</xsl:if>
      </a>
   </xsl:template>
   
   <xsl:template match="control" mode="link-text">
      <xsl:choose>
         <xsl:when test="prop[@name='label']">
            <xsl:for-each select="prop[@name='label']">
               <xsl:apply-templates/>
            </xsl:for-each>
         </xsl:when>
         <xsl:otherwise>[Error: no 'label' property on link target]</xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   
   <xsl:template match="*" mode="link-text">
      <xsl:choose>
         <xsl:when test="title">
            <xsl:for-each select="title">
               <xsl:apply-templates/>
            </xsl:for-each>
         </xsl:when>
         <xsl:otherwise>[Error: no title on link target]</xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   
   
   <xsl:template priority="-0.4"
      match="param | guideline | select | part">
      <div class="{name()}">
         <div class="tag">
            <xsl:value-of select="name()"/>: </div>
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template priority="-0.4" match="label | usage | constraint | value | choice">
      <p class="{name()}">
         <span class="tag">
            <xsl:value-of select="name()"/>: </span>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   
</xsl:stylesheet>
