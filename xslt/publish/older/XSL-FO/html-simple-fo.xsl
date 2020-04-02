<?xml version="1.0" encoding="utf-8"?>

<!-- NOT YET AN OSCAL XSL! 2017-06-06 -->

<xsl:stylesheet version="2.0" xmlns:fo="http://www.w3.org/1999/XSL/Format"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xpath-default-namespace="http://www.w3.org/1999/xhtml">

  <xsl:template match="/">
    <fo:root>
      <fo:layout-master-set>
        <fo:simple-page-master master-name="cover" page-height="11in"
          page-width="8.5in" margin-top="0.5in" margin-bottom="0.5in"
          margin-left="1in" margin-right="1in"
          font-size="12pt">
          <fo:region-body region-name="content" margin-top="1in"
            margin-bottom="1in"/>
        </fo:simple-page-master>
        <fo:simple-page-master master-name="simple" page-height="11in"
          page-width="8.5in" margin-top="0.5in" margin-bottom="0.5in"
          margin-left="1in" margin-right="1in">
          <fo:region-body region-name="content" margin-top="0.5in"
            margin-bottom="1in"/>
          <fo:region-before region-name="header" extent="1in"/>
          <fo:region-after  region-name="footer" extent="0.5in"/>
        </fo:simple-page-master>
      </fo:layout-master-set>

      <xsl:apply-templates select="/html/body"/>
    </fo:root>
  </xsl:template>

<xsl:template match="body">
  <xsl:apply-templates select="main"/>
</xsl:template>
  
  <xsl:template match="body/main" priority="2">
    <xsl:variable name="sections" select="child::section"/>
    <fo:page-sequence master-reference="cover" font-family="serif" initial-page-number="auto">
      <fo:flow flow-name="content">
        <fo:block>
          <xsl:apply-templates select="* except $sections"/>
        </fo:block>
      </fo:flow>
    </fo:page-sequence>
    <xsl:apply-templates select="$sections"/>
  </xsl:template>
  
  <xsl:template match="section">
    <fo:page-sequence master-reference="simple" font-family="serif" initial-page-number="{ if (empty(preceding-sibling::section|preceding-sibling::main)) then '1' else 'auto' }">
      <fo:static-content flow-name="header" font-size="10pt" font-family="sans-serif">
        <xsl:apply-templates select="ancestor::html/head/title" mode="header-table"/>
      </fo:static-content>
      <fo:static-content flow-name="footer">
        <fo:block text-align="right" font-size="9pt" font-family="sans-serif" padding-before="1em">
          <xsl:text>PAGE </xsl:text>
          <fo:page-number/>
        </fo:block>
      </fo:static-content>
      <fo:static-content flow-name="xsl-footnote-separator">
        <fo:block end-indent="4in" margin-top="12pt" margin-bottom="8pt"
          border-width="0.5pt" border-bottom-style="solid"/>
      </fo:static-content>
      <fo:flow flow-name="content" >
        <fo:block font-size="10pt">
          <xsl:apply-templates/>
        </fo:block>
      </fo:flow>
    </fo:page-sequence>
  </xsl:template>
  
  <xsl:template match="title" mode="header-table">
    <fo:table border-after-style="solid">
      <fo:table-body>
        <fo:table-row>
          <xsl:for-each select="tokenize(.,':')">
            <fo:table-cell>
              <fo:block>
              <xsl:if test="position() gt 1">
                <xsl:attribute name="text-align">right</xsl:attribute>
              </xsl:if>
              <xsl:value-of select="normalize-space(.)"/>
              </fo:block>
            </fo:table-cell>
          </xsl:for-each>
        </fo:table-row>
        
      </fo:table-body>
    </fo:table>
  </xsl:template>

  <xsl:template match="head/title">
    <xsl:apply-templates/>
  </xsl:template>
  
  <xsl:template match="h1">
    <fo:block font-size="16pt" font-weight="bold" keep-with-next="always">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>

  <xsl:template priority="5" match="section[@class='group']/details/summary">
    <fo:block font-family="sans-serif" keep-with-next="always">
      <fo:inline font-weight="bold">FAMILY:</fo:inline>
      <xsl:text> </xsl:text>
      <xsl:variable name="title">
        <xsl:apply-templates/>
      </xsl:variable>
      <xsl:value-of select="normalize-space($title) => upper-case()"/>
    </fo:block>
    
  </xsl:template>
  
  
  
  <xsl:template match="summary[contains-token(@class,'h2')]">
    <fo:block font-weight="bold" keep-with-next="always">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>

  <xsl:template match="summary[contains-token(@class,'h3')]">
    <fo:block font-family="sans-serif" font-weight="bold" keep-with-next="always">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <!--special handling for control enhancements (nested controls)-->
  <xsl:template priority="5" match="div[contains-token(@class,'control')]//div[contains-token(@class,'control')]//summary[contains-token(@class,'h3')]">
    <fo:block font-family="sans-serif" font-style="italic" keep-with-next="always">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template priority="5" match="div[contains-token(@class,'control')]//div[contains-token(@class,'control')]//div[contains-token(@class,'statement')]">
    <fo:block font-family="sans-serif" font-weight="bold" keep-with-next="always">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template priority="5" match="div[contains-token(@class,'control')]//div[contains-token(@class,'control')]//div[contains-token(@class,'statement')]//p/span[@class='inline-head']"/>
  
  <xsl:template priority="5" match="div[contains-token(@class,'control')]//div[contains-token(@class,'control')]//div[contains-token(@class,'statement')]//p/text()[preceding-sibling::*[1]/self::span/@class='inline-head']">
    <xsl:value-of select="replace(.,'^:\s*','')"/>
  </xsl:template>
  
  <!-- Removing the annotation -->
  <xsl:template match="section/details/summary/small"/>
  

  <xsl:template match="summary[contains-token(@class,'h4')]" priority="2"/>
  
  <xsl:template priority="5" match="details[contains-token(@class,'none')]/summary[contains-token(@class,'h4')]">
    <fo:block space-before="0.5em" keep-with-next="always">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="p">
    <fo:block space-before="0.5em">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>

  <xsl:template match="span[@class='inline-head']">
    <fo:inline font-family="sans-serif" text-decoration="underline"
      font-size="9pt">
      <xsl:apply-templates/>
    </fo:inline>
    <xsl:if test="not(starts-with(following::text()[1],':'))">: </xsl:if>
  </xsl:template>
  
  <xsl:template match="span[@class='count'][not(.=' None')]"/>
  
  <xsl:template match="details[summary[@class='h4']]/p[1]">
    <fo:block space-before="0.5em">
      <xsl:for-each select="../summary">
        <fo:inline font-family="sans-serif" text-decoration="underline"
          font-size="9pt">
          <xsl:apply-templates/>
        </fo:inline>
        <xsl:text>: </xsl:text>
      </xsl:for-each>
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template priority="5" match="details[contains-token(@class,'enhancements')][not(contains-token(@class,'none'))]">
    <fo:block space-before="0.5em" keep-with-next="always">
      <fo:inline font-family="sans-serif" text-decoration="underline"
        font-size="9pt">Control Enhancements</fo:inline>
        <xsl:text>: </xsl:text>
    </fo:block>
    <xsl:apply-templates/>
  </xsl:template>
  
  
  <!-- special handling of control references -->
  <xsl:template match="details[contains-token(@class,'control-references')]">
    <fo:block space-before="0.5em" keep-with-next="always">
      <xsl:for-each select="summary">
        <xsl:apply-templates/>
      </xsl:for-each>
      <xsl:apply-templates select="* except summary"/>
    </fo:block>
  </xsl:template>
  
  <xsl:template priority="5" match="details[contains-token(@class,'control-references')]//p[@class='link']">
    <xsl:variable name="predecessor" select="preceding-sibling::p[1]"/>
    <xsl:if test="exists($predecessor)">, </xsl:if>
    <xsl:apply-templates/>
    <!--<xsl:choose>
      <xsl:when test="starts-with(normalize-space(.),'NIST Special Publication') and starts-with(normalize-space($predecessor),'NIST Special Publication')">
        <xsl:value-of select="substring-after(normalize-space(.),'NIST Special Publication')"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:apply-templates/>
      </xsl:otherwise>
    </xsl:choose>-->
  </xsl:template>
    
  <!--<xsl:template match="mention">
    <fo:inline font-weight="bold">
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>-->

  <!--<xsl:template match="note">
    <fo:footnote>
      <fo:inline baseline-shift="super" font-size="65%">
        <xsl:number level="any"/>
      </fo:inline>
      <fo:footnote-body space-before="12pt" font-size="10pt" line-height="13pt">
        <fo:block text-indent="-1em" start-indent="1em" end-indent="0em">
          <xsl:number level="any"/>
          <xsl:text>. </xsl:text>
          <xsl:apply-templates/>
        </fo:block>
      </fo:footnote-body>
    </fo:footnote>
  </xsl:template>-->

  <xsl:template match="div[contains-token(@class,'metadata')]">
      <xsl:apply-templates select="details/div[contains-token(@class,'parties')]"/>
  </xsl:template>
  
  <xsl:template match="div[contains-token(@class,'control')]">
    <xsl:variable name="enhancement" select="ancestor::div/tokenize(@class,'\s+')='control'"/>
    <fo:block space-before="1em">
      <fo:list-block provisional-distance-between-starts="{ if ($enhancement) then '0.3' else '0.5' }in"
        provisional-label-separation="1em"  space-before="0.5em">
        <fo:list-item space-before="0.5em">
          <fo:list-item-label>
            <fo:block font-family="sans-serif" font-weight="bold">
              <xsl:choose>
                <xsl:when test="$enhancement">
                  <xsl:value-of select="replace(details/summary/span[1],'^[^\(]+','')"/>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="details/summary/span[1]"/>
                </xsl:otherwise>
              </xsl:choose>
            </fo:block>
          </fo:list-item-label>
          <fo:list-item-body start-indent="body-start()">
            
            <xsl:apply-templates/>
          </fo:list-item-body>
        </fo:list-item>
      </fo:list-block>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="div[contains-token(@class,'control')]/details/summary/span"/>
  
  <xsl:template match="div[contains-token(@class,'prop')]">
    <fo:block font-family="sans-serif" space-before="0.5m" font-size="80%">
      <fo:inline font-weight="bold">
        <xsl:apply-templates select="@class"/>
      <xsl:text>: </xsl:text>
      </fo:inline>
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="desc">
    <fo:block space-before="1em">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>

  <xsl:template priority="3" match="div[details/summary=('Objective','Objectives')]"/>
  
  <xsl:template priority="2" match="div[contains-token(@class,'assessment')]"/>
  
  
  
<!-- for now, every table is assumed to be a layout structure.
     They should have a @class to distinguish them. -->
  <xsl:template match="table">
    <fo:list-block provisional-distance-between-starts="2em"
      provisional-label-separation="1em"  space-before="0.5em">
      <xsl:apply-templates/>
    </fo:list-block>
  </xsl:template>
  
  <xsl:template match="tr">
    <fo:list-item space-before="0.5em">
      <fo:list-item-label end-indent="label-end()">
        <fo:block>
          <xsl:apply-templates select="child::*[1]"/>
        </fo:block>
      </fo:list-item-label><fo:list-item-body start-indent="body-start()">
        <fo:block>
          <xsl:apply-templates select="child::*[2]"/>
        </fo:block>
      </fo:list-item-body>
    </fo:list-item>
  </xsl:template>
  
  
  <xsl:template match="ol">
    <fo:list-block provisional-distance-between-starts="2em"
      provisional-label-separation="1em"  space-before="0.5em">
      <xsl:apply-templates/>
    </fo:list-block>
  </xsl:template>
  
  <xsl:template match="li">
    <fo:list-item space-before="0.5em">
      <xsl:apply-templates select="." mode="item-no"/>
      <fo:list-item-body start-indent="body-start()">
        <fo:block>
          <xsl:apply-templates/>
        </fo:block>
      </fo:list-item-body>
    </fo:list-item>
  </xsl:template>
  
  <xsl:template match="li" mode="item-no">
    <fo:list-item-label end-indent="label-end()">
      <fo:block>
        <xsl:number format="a"/>
        <xsl:text>.</xsl:text>
      </fo:block>
    </fo:list-item-label>
  </xsl:template>
  
  <xsl:template match="li//li" mode="item-no">
    <fo:list-item-label end-indent="label-end()">
      <fo:block>
        <xsl:number format="1"/>
      </fo:block>
    </fo:list-item-label>
  </xsl:template>
  
  <xsl:template match="em | i">
    <fo:inline font-style="italic">
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template name="label-form">
    <xsl:attribute name="font-family">sans-serif</xsl:attribute>
    <xsl:attribute name="font-size">80%</xsl:attribute>
    <xsl:attribute name="background-color">black</xsl:attribute>
    <xsl:attribute name="color">white</xsl:attribute>
    <xsl:attribute name="padding-before">0.2em</xsl:attribute>
    <xsl:attribute name="padding-after">0.2em</xsl:attribute>
    <xsl:attribute name="space-end">0.3em</xsl:attribute>
    <xsl:attribute name="padding-start">0.2em</xsl:attribute>
    <xsl:attribute name="padding-end">0.2em</xsl:attribute>
  </xsl:template>
  
  <xsl:template match="span[contains-token(@class,'decorated')]">
    <fo:inline>
      <xsl:call-template name="label-form"/>
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template match="span[contains-token(@class,'insert')]">
    <fo:inline font-style="italic">
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template match="strong[contains-token(@class,'decorated')]">
    <fo:inline font-weight="bold">
      <xsl:call-template name="label-form"/>
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  

</xsl:stylesheet>