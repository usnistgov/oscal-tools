<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:xs="http://www.w3.org/2001/XMLSchema"
   xmlns="http://www.w3.org/1999/xhtml"
   xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0"
   exclude-result-prefixes="#all">
   
<!-- XSLT produced from Metaschema ... -->


  <!-- metadata matched in no mode produces nothing ... -->
  <xsl:template match="metadata"/>
   
<!-- A metadata section is produced for metadata called in 'metadata' mode -->
  <xsl:template match="metadata" mode="metadata">
      <section class="metadata">
         <details>
            <summary><span class="lbl">metadata</span></summary>
            <xsl:apply-templates select="published, last-modified, version, oscal-version, doc-id, prop, link"/>
            <xsl:for-each-group select="role" group-by="true()">
               <div class="block roles">
                  <xsl:apply-templates select="current-group()"/>
               </div>
            </xsl:for-each-group>
            <xsl:for-each-group select="party" group-by="true()">
               <div class="block parties">
                  <xsl:apply-templates select="current-group()"/>
               </div>
            </xsl:for-each-group>
            <!-- responsibile-parties elements bind parties to roles, handled with parties -->
            <xsl:apply-templates select="remarks"/>
         </details>
      </section>
   </xsl:template>

   <xsl:template match="metadata/title">
      <h1 class="title">
         <xsl:apply-templates/>
      </h1>
   </xsl:template>
   
   <xsl:template match="last-modified | version | oscal-version">
      <p class="line { local-name() }">
         <span class="lbl">
            <xsl:apply-templates select="." mode="button-text"/>
         </span>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:template match="role">
      <div class="button role">
         <span class="role button lbl">
            <xsl:apply-templates select="*" mode="button-text"/>
         </span>
      </div>
   </xsl:template>
   
   <xsl:template match="*" mode="button-text">
      <xsl:value-of select="local-name()"/>
   </xsl:template>
   
   <xsl:template match="last-modified" mode="button-text">last modified</xsl:template>
   
   <xsl:template match="oscal-version" mode="button-text">OSCAL version</xsl:template>
   
   <xsl:template match="role" mode="include">
      <span class="role lbl">
         <xsl:apply-templates select="*" mode="button-text"/>
      </span>
   </xsl:template>
   
   <xsl:template match="role/*" mode="button-text"/>
   
   <xsl:template priority="5" match="role/title" mode="button-text">
         <xsl:apply-templates/>
   </xsl:template>
   
   
   <xsl:key name="assignment-by-party-id" match="responsible-party" use="party-uuid"/>
   
   <xsl:template match="metadata/party">
      <div class="block party">
         <xsl:variable name="assignments" select="key('assignment-by-party-id',@uuid,..)"/>
         <xsl:variable name="roles" select="../role[@id=$assignments/@role-id]"/>
         <xsl:apply-templates select="$roles" mode="include"/>
         <xsl:if test="empty($roles)">
            <span class="role lbl">
               <xsl:value-of select="tokenize(@uuid,'\-')[1]"/>
            </span>
         </xsl:if>
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="org">
      <div class="org">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="party/org/* | address/*">
      <p class="line { local-name() }">
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:template priority="2" match="address">
      <xsl:apply-templates/>
   </xsl:template>
   
   <xsl:template priority="3" match="email">
      <p class="line email">
         <span class="lbl2">email</span>
         <xsl:text> </xsl:text>
         <a href="mailto:{.}">
           <xsl:apply-templates/>
         </a>
      </p>
   </xsl:template>
   
   <xsl:template match="responsible-party"/>
   
   <xsl:template match="prop">
      <p class="{ @ns ! (. || '_') || @name ! (. || ' ')}prop">
         <xsl:apply-templates select="." mode="decorate-inline"/>
         <xsl:value-of select="@value"/>
      </p>
      <xsl:apply-templates select="remarks"/>
   </xsl:template>
   
   <!-- Any @id or @uuid is considered suitable to target via href -->
   <xsl:key name="cross-reference-targets" match="*[exists(@id|@uuid)]" use="(@uuid | @id) ! ('#' || .)"/>
   
   <xsl:template match="*" mode="decorate-inline">
      <span class="lbl">
         <xsl:value-of select="local-name()"/>
      </span>
   </xsl:template>
   
   <xsl:template match="*[exists(@name)]" mode="decorate-inline">
      <span class="lbl">
         <xsl:value-of select="@ns"/>
         <xsl:if test="matches(@ns, '\S')">:</xsl:if>
         <xsl:value-of select="@name"/>
      </span>
   </xsl:template>
   
   <xsl:template match="citation/*" mode="decorate-inline">
      <span class="lbl">
         <xsl:text>citation </xsl:text>
         <xsl:value-of select="local-name()"/>
      </span>
   </xsl:template>
   
   <xsl:template match="annotation">
      <div class="{ @ns ! (. || '_') || @name ! (. || ' ')}annotation">
         <p class="line"><xsl:apply-templates select="." mode="decorate-inline"/>
         <xsl:for-each select="@value">
            <xsl:text>: </xsl:text>
            <xsl:value-of select="."/>
         </xsl:for-each></p>
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template match="description">
      <div class="description">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="remarks">
      <div class="{ parent::prop/@name ! ( . || '-property ' ) }remarks">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="back-matter">
      <xsl:where-populated>
         <details class="back-matter">
            <summary><span class="lbl">back matter</span></summary>
            <xsl:apply-templates/>
         </details>
      </xsl:where-populated>
   </xsl:template>
   
   <xsl:template match="@uuid">
      <xsl:attribute name="id" select="."/>
   </xsl:template>
   
   <xsl:template match="back-matter/*">
      <div class="{ local-name() }">
         <xsl:apply-templates select="@*"/>
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="resource/title | resource/desc | resource/prop | resource/citation/*">
      <p class="{ local-name() }{ @name ! (' ' || .) }">
         <xsl:apply-templates select="." mode="decorate-inline"/>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:template match="resource/citation" priority="2">
      <div class="{ local-name() }">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="rlink" priority="2">
      <p class="rlink">
         <xsl:apply-templates select="." mode="decorate-inline"/>
         <xsl:apply-templates select="@href, @media-type"/>
      </p>
   </xsl:template>
   
   <xsl:template match="rlink/@media-type">
      <xsl:text> [</xsl:text>
      <xsl:value-of select="."/>
      <xsl:text>]</xsl:text>
   </xsl:template>
   
   <xsl:template priority="-0.4"
                 match="metadata | back-matter | annotation | party | person | org | rlink | address | resource | role | responsible-party | citation | description | remarks">
      <div class="{name()}">
         <div class="tag">
            <xsl:value-of select="name()"/>: </div>
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template priority="-0.4"
                 match="link | published | last-modified | version | oscal-version | doc-id | prop | party-id | person-id | org-id | person-name | org-name | short-name | addr-line | city | state | postal-code | country | email | phone | url | desc | hash | title | base64 | target">
      <p class="{name()}">
         <span class="tag">
            <xsl:value-of select="name()"/>: </span>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   
</xsl:stylesheet>
