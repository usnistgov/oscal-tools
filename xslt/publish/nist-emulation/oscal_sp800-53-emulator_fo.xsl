<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="2.0" xmlns:fo="http://www.w3.org/1999/XSL/Format"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xpath-default-namespace="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="#all">

  <xsl:param name="base-font-size" >10pt</xsl:param>
  <xsl:param name="frame-font-size">9pt</xsl:param>
  
  <xsl:variable name="small"      >9pt</xsl:variable>
  <xsl:variable name="extra-small">8pt</xsl:variable>
  <xsl:variable name="smaller"    >80%</xsl:variable>
  <xsl:variable name="big"        >11pt</xsl:variable>
  <xsl:variable name="extra-big"  >14pt</xsl:variable>
  
  <xsl:param name="body-font-family"  >Calibri</xsl:param>
  <xsl:param name="header-font-family">Calibri</xsl:param>
  <xsl:param name="frame-font-family" >Calibri</xsl:param>
  <xsl:param name="label-font-family" >Calibri</xsl:param>
  
  <xsl:template match="/">
    <fo:root>
      <fo:layout-master-set>
        <fo:simple-page-master master-name="cover" page-height="11in" page-width="8.5in"
          margin-top="0.5in" margin-bottom="0.5in" margin-left="0.5in" margin-right="1in"
          font-size="{ $base-font-size }">
          <fo:region-body region-name="main" margin-top="1in" margin-bottom="1in"/>
        </fo:simple-page-master>
        <fo:simple-page-master master-name="toc" page-height="11in" page-width="8.5in"
          margin-top="0.5in" margin-bottom="0.5in" margin-left="1in" margin-right="1in">
          <fo:region-body   region-name="main" margin-top="0.75in" margin-bottom="1in"/>
          <fo:region-before region-name="header" extent="1in"/>
          <fo:region-after  region-name="footer" extent="0.5in"/>
        </fo:simple-page-master>
        <xsl:call-template name="main-page-layout"/>
      </fo:layout-master-set>

      <xsl:apply-templates select="/html/body"/>
    </fo:root>
  </xsl:template>
  
  <xsl:template name="main-page-layout">
    <fo:simple-page-master master-name="simple" page-height="11in" page-width="8.5in"
      margin-top="0.5in" margin-bottom="0.5in" margin-left="1in" margin-right="1in">
      <fo:region-body region-name="main" margin-top="0.5in" margin-bottom="1in"/>
      <fo:region-before region-name="header" extent="1in"/>
      <fo:region-after region-name="footer" extent="0.5in"/>
    </fo:simple-page-master>
  </xsl:template>

  <xsl:template match="body">
    <xsl:apply-templates select="section | main"/>
  </xsl:template>
    
  <xsl:template match="section[@class='metadata']">
    <!--
      old cover page is a simple dump - - 
      <fo:page-sequence master-reference="cover" font-family="serif" initial-page-number="auto">
      <fo:flow flow-name="main">
        <fo:block>
          <xsl:apply-templates select="../h1"/>
          <xsl:apply-templates/>
        </fo:block>
      </fo:flow>
    </fo:page-sequence>  -->
    <xsl:variable name="metadata" select="."/>
    <fo:page-sequence master-reference="simple" font-family="{ $body-font-family }" initial-page-number="auto" force-page-count="no-force">
      <fo:static-content flow-name="footer">
        <fo:block text-align="center" font-size="{ $frame-font-size }" font-family="{ $frame-font-family }" padding-before="1em" font-style="italic">This document is produced from OSCAL source data</fo:block>
      </fo:static-content>
      <fo:flow flow-name="main">
        <fo:block text-align="end" margin-left="1.5in">
          <fo:block text-align="start" space-after="0.5in">
            <xsl:call-template name="black-border"/>
            <xsl:for-each select="'last-modified', 'version', 'oscal-version', 'keywords'">
              <xsl:variable name="point" select="."/>
              <xsl:apply-templates mode="cover-page"
                select="$metadata/details/p[contains-token(@class, $point)]"/>
            </xsl:for-each>
          </fo:block>
          <xsl:apply-templates select="../h1"/>
          <fo:block text-align="start" space-before="0.5in">
            <xsl:call-template name="black-border"/>
            <xsl:apply-templates mode="cover-page" select="details/div[contains-token(@class, 'parties')]"/>
          </fo:block>
        </fo:block>
      </fo:flow>
    </fo:page-sequence>
  </xsl:template>
  
  <xsl:template name="black-border">
    <xsl:attribute name="padding">1em</xsl:attribute>
    <xsl:attribute name="border-style">solid</xsl:attribute>
    <xsl:attribute name="border-width">0.5pt</xsl:attribute>
    <xsl:attribute name="border-color">black</xsl:attribute>
  </xsl:template>
  
  <xsl:template mode="cover-page address" match="*[tokenize(@class)=('lbl','lbl2')]">
    <fo:inline font-size="{ $smaller }" font-family="{ $frame-font-family }" font-style="italic">
      <xsl:apply-templates/>
    </fo:inline>
    <xsl:text>: </xsl:text>
  </xsl:template>
  
  <xsl:template mode="cover-page" match="div[contains-token(@class,'party')]">
    <fo:block>
      <fo:block font-size="{ $smaller }">
        <xsl:for-each select="span[contains-token(@class,'lbl')]">
          <xsl:if test="position() ne 1">; </xsl:if>
          <fo:inline font-family="{ $frame-font-family }" font-style="italic">
            <xsl:apply-templates/>
          </fo:inline>
        </xsl:for-each>
        <xsl:text>:</xsl:text>
      </fo:block>
      <xsl:apply-templates select="div" mode="address"/>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="div" mode="address">
    <xsl:variable name="city-line" select="p[tokenize(@class)=('city','state','postal-code')]"/>
    <xsl:apply-templates mode="#current" select="p except $city-line/(.|following-sibling::*)"/>
    <fo:block space-before="0.5em">
      <xsl:apply-templates mode="#current" select="$city-line"/>
    </fo:block>
    <xsl:apply-templates mode="#current" select="$city-line[last()]/following-sibling::*"/>
  </xsl:template>
  
  <xsl:template mode="address" match="p[tokenize(@class)=('city','state','postal-code')]">
    <fo:inline space-start="1em">
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template mode="cover-page" match="p[contains-token(@class,'last-modified')]/text()">
    <xsl:variable name="as-dateTime" select="normalize-space(.)[. castable as xs:dateTime] ! xs:dateTime(.)"/>
    <xsl:choose>
      <xsl:when test="exists($as-dateTime)">
        <xsl:value-of select="format-dateTime(.,'[MNn] [D] [Y] [H]:[m]')"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="."/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  
  
  
  <xsl:template match="section[@class='ToC']">
    <fo:page-sequence master-reference="simple" format="i" font-family="{ $frame-font-family }" initial-page-number="1" force-page-count="no-force">
      
      <fo:static-content flow-name="header">
        <xsl:apply-templates select="ancestor::body" mode="header-table"/>
      </fo:static-content>
      <fo:static-content flow-name="footer" font-size="{ $frame-font-size }" font-family="{ $frame-font-family }" text-align="center">
        <fo:block space-before="1em" font-style="italic">This document is produced from OSCAL source data</fo:block>
        <fo:block space-before="1em">PAGE <fo:page-number/></fo:block>
      </fo:static-content>
      <xsl:call-template name="page-left-column"/>
      <fo:flow flow-name="main" >
        <fo:block font-size="{ $base-font-size }">
          <xsl:apply-templates/>
        </fo:block>
      </fo:flow>
    </fo:page-sequence>
  </xsl:template>
  
  <!-- hook for ornamenting the page on a region-start -->
  <xsl:template name="page-left-column"/>
  
  <xsl:template match="section">
    <fo:page-sequence master-reference="simple" force-page-count="no-force"
      initial-page-number="{ if (exists(preceding-sibling::section|preceding-sibling::main)) then 'auto' else '1'}">
      
      <fo:static-content flow-name="header">
        <xsl:apply-templates select="ancestor::body" mode="header-table"/>
      </fo:static-content>
      <fo:static-content flow-name="footer">
        <xsl:call-template name="footer-table">
          <xsl:with-param name="left-side">
            <xsl:if test="not(@id='references')">FAMILY: </xsl:if>
            <fo:basic-link internal-destination="{ @id }"> 
              <fo:retrieve-marker retrieve-class-name="family-abbr"/>
            </fo:basic-link>
          </xsl:with-param>
          <xsl:with-param name="notice">
            <fo:block font-style="italic" text-align="center">This document is produced from OSCAL source data</fo:block>
          </xsl:with-param>
          <xsl:with-param name="right-side">
            <xsl:text>PAGE </xsl:text>
            <fo:page-number/>
          </xsl:with-param>
          <!--<xsl:with-param name="notice">
            <fo:block font-size="80%" font-style="italic" text-align="center">This document is produced from OSCAL source data</fo:block>
          </xsl:with-param>-->
        </xsl:call-template>
      </fo:static-content>
      <xsl:call-template name="page-left-column"/>
      <fo:static-content flow-name="xsl-footnote-separator">
        <fo:block end-indent="4in" margin-top="12pt" margin-bottom="8pt" border-width="0.5pt"
          border-bottom-style="solid"/>
      </fo:static-content>
      <fo:flow flow-name="main">
        <fo:marker marker-class-name="family-abbr">
          <xsl:value-of select="upper-case(@id)"/>
        </fo:marker>
        <fo:block font-size="{ $base-font-size }" font-family="{ $body-font-family }">
          <xsl:copy-of select="@id"/>
          <xsl:apply-templates/>
        </fo:block>
      </fo:flow>
    </fo:page-sequence>
  </xsl:template>

  <xsl:variable name="document-header-code">NIST SP 800-53</xsl:variable>
  
  <xsl:template match="body" mode="header-table">
    <fo:table border-after-style="solid">
      <fo:table-body>
        <fo:table-row>
          <fo:table-cell>
            <fo:block font-size="{$small}">
              <xsl:sequence select="$document-header-code"/>
              <xsl:text> </xsl:text>
              <xsl:value-of select="section[@class='metadata']/descendant::p[contains-token(@class,'version')]/text()"/>
              <xsl:text> </xsl:text>
              <xsl:value-of select="section[@class='metadata']/descendant::p[contains-token(@class,'last-modified')]/text()
                ! replace(.,'T.*$','') ! format-date(xs:date(.), '[MN,3-3] [D] [Y]')"/>
            </fo:block>
          </fo:table-cell>
          <fo:table-cell>
            <fo:block font-size="{$small}" text-align="right">
              <xsl:apply-templates select="h1[@class='title']" mode="#current"/>
            </fo:block>
          </fo:table-cell>
        </fo:table-row>
      </fo:table-body>
    </fo:table>
  </xsl:template>
  
  <xsl:template name="footer-table">
    <xsl:param name="left-side"/>
    <xsl:param name="notice"/>
    <xsl:param name="right-side"/>
    <fo:table font-size="{ $frame-font-size }" font-family="{ $frame-font-family }">
      <fo:table-body>
        <xsl:if test="matches($notice,'\S')">
          <fo:table-row>
            <fo:table-cell number-columns-spanned="2">
              <xsl:copy-of select="$notice"/>
            </fo:table-cell>
          </fo:table-row>
        </xsl:if>
        <fo:table-row>
          <fo:table-cell>
            <fo:block>
              <xsl:copy-of select="$left-side"/>
            </fo:block>
          </fo:table-cell>
          <fo:table-cell>
            <fo:block text-align="right">
              <xsl:copy-of select="$right-side"/>
            </fo:block>
          </fo:table-cell>
        </fo:table-row>
      </fo:table-body>
    </fo:table>
  </xsl:template>
  
  <xsl:template match="details[@class='ToC']/summary[@class='toc-listing']">
    <fo:block font-family="{ $header-font-family }" space-before="0.5em" keep-with-next="always">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template priority="2" match="details[@class='ToC']/p[@class='toc-listing']">
    <xsl:variable name="target-id" select="a[@class='toc-title']/substring-after(@href,'#')"/>
    <fo:block font-family="{ $frame-font-family }" space-before="0.5em" text-align-last="justify"  margin-left="2em">
      <xsl:if test="following-sibling::*[1]/@class='ToC enhancements'">
        <xsl:attribute name="keep-with-next">always</xsl:attribute>
      </xsl:if>
      <xsl:apply-templates/>
      <fo:leader leader-pattern="dots"/>
      <fo:basic-link internal-destination="{ $target-id }"> 
        <fo:page-number-citation ref-id="{ $target-id }"/>
      </fo:basic-link>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="section[@class='ToC']/details/p[@class='toc-listing']">
    <xsl:variable name="target-id" select="a[@class='toc-label']/substring-after(@href,'#')"/>
    <fo:block space-before="0.5em" text-align-last="justify"  margin-left="2em">
      <xsl:apply-templates/>
      <fo:leader leader-pattern="dots"/>
      <fo:basic-link internal-destination="{ $target-id }"> 
        <fo:page-number-citation ref-id="{ $target-id }"/>
      </fo:basic-link>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="div[@class='ToC enhancements']">
    <fo:block margin-left="4em" margin-right="4em" font-size="{ $extra-small }"  space-before="0.5em">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="div[@class='ToC enhancements']/p[@class='toc-listing']">
    <fo:inline>
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
<!-- links in the Toc become bold, except for enhancements (inside div[@class='ToC enhancements'])  -->
  <xsl:template priority="5" match="summary[@class='toc-listing']/a | details/p[@class='toc-listing']/a">
    <fo:inline font-weight="bold">
      <xsl:next-match/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template match="head/title">
    <xsl:apply-templates/>
  </xsl:template>
  
  <xsl:template match="h1">
    <fo:block font-size="{ $extra-big }" font-weight="bold" keep-with-next="always">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>

  <xsl:template priority="5" match="section[@class='group']/details/summary">
    <fo:block font-family="{ $header-font-family }" keep-with-next="always" text-transform="uppercase">
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
    <fo:block font-family="{ $header-font-family }" font-size="{ $big }" font-weight="bold" keep-with-next="always">
      <xsl:if test="empty(ancestor::main)">
        <xsl:attribute name="font-size">120%</xsl:attribute>
        <xsl:attribute name="text-align">center</xsl:attribute>
      </xsl:if>
      <xsl:if test="ancestor::div/@class='control'">
        <xsl:attribute name="text-transform">uppercase</xsl:attribute>
      </xsl:if>
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <!--special handling for control enhancements (nested controls)-->
  <xsl:template priority="5" match="div[contains-token(@class,'control')]//div[contains-token(@class,'control')]//summary[contains-token(@class,'h3')]">
    <fo:block font-family="{ $header-font-family }" keep-with-next="always" text-transform="uppercase" font-size="{ $big }">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template priority="5" match="div[contains-token(@class,'control')]//div[contains-token(@class,'control')]//div[contains-token(@class,'statement')]">
    <fo:block font-weight="bold" keep-with-next="always">
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
  
  <xsl:template match="p" mode="#all">
    <xsl:variable name="likely-header" select="exists(following-sibling::*) and (count(tokenize(string(.),'\s+')) lt 3)" />
    <fo:block space-before="0.5em">
      <xsl:if test="$likely-header">
        <xsl:attribute name="keep-with-next">always</xsl:attribute>
      </xsl:if>
      <xsl:apply-templates mode="#current"/>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="p[@class='withdrawn-status']">
    <fo:block space-before="0.5em" font-size="{ $small }">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="span[@class='inline-head']">
    <fo:inline font-family="{ $label-font-family }" text-decoration="underline"
      font-size="{ $small }">
      <xsl:apply-templates/>
    </fo:inline>
    <xsl:if test="not(starts-with(following-sibling::text()[1],':'))">: </xsl:if>
  </xsl:template>
  
<!-- External links from citations rewritten as internal -->
  <xsl:template match="p[@class='link']/a[span/@class='ref-label']">
     <xsl:variable name="citation" select="key('resource-by-label',span[@class='ref-label'])"/>
    <xsl:choose>
      <xsl:when test="exists($citation)">
        <fo:basic-link internal-destination="{$citation/@id}">
          <xsl:apply-templates select="span"/>
        </fo:basic-link>
      </xsl:when>
      <xsl:otherwise>
        <xsl:next-match/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  
  <xsl:key name="resource-by-label" match="tr[@class='resource']" use="td[@class='title']"/>
    
  <xsl:template match="span[@class='count'][not(.=' None')]"/>
  
  <xsl:template match="details[summary[@class='h4']]/p[1]">
    <fo:block space-before="0.5em">
      <xsl:for-each select="../summary">
        <fo:inline font-family="{ $label-font-family }" text-decoration="underline"
          font-size="{ $small }">
          <xsl:apply-templates/>
        </fo:inline>
        <xsl:text>: </xsl:text>
      </xsl:for-each>
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <!-- Special handling  for 'References' section -->
  <xsl:template priority="5" match="div[contains-token(@class,'control-references')]/details">
    <fo:block space-before="0.5em">
      <xsl:for-each select="summary">
        <xsl:apply-templates/>
      </xsl:for-each>
      <xsl:for-each select="p">
        <xsl:if test="not(position() eq 1)">,</xsl:if>
        <xsl:text> </xsl:text>
        <xsl:apply-templates/>
      </xsl:for-each>
    </fo:block>
  </xsl:template>
  
  <xsl:template priority="5" match="details[contains-token(@class,'enhancements')][not(contains-token(@class,'none'))]">
    <fo:block space-before="0.5em" keep-with-next="always">
      <fo:inline font-family="{ $label-font-family }" text-decoration="underline"
        font-size="{ $small }">Control Enhancements</fo:inline>
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
  
  <xsl:template match="div[contains-token(@class,'control')]">
    <xsl:variable name="enhancement" select="ancestor::div/tokenize(@class,'\s+')='control'"/>
    <fo:block space-before="1em">
      <xsl:copy-of select="@id"/>
      <fo:list-block provisional-distance-between-starts="{ if ($enhancement) then '0.3' else '0.5' }in"
        provisional-label-separation="1em"  space-before="0.5em">
        <fo:list-item space-before="0.5em">
          <fo:list-item-label>
            <fo:block font-weight="bold" font-family="{ $label-font-family }" font-size="{ $big }">
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
  
  <xsl:template match="div[contains-token(@class,'control')]/details/summary/span" priority="2"/>
  
  <xsl:template match="div[contains-token(@class,'prop')]">
    <fo:block space-before="0.5m" font-size="{ $smaller }">
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
  
<!-- We recognize certain sorts of tables (indicated by 'class') as def-list structures,
     potentially nested. (A useful pattern.) -->
  
  <xsl:variable name="list-tables" select="('objective-part','resources')"/>
  
<!-- for now, every table is assumed to be a layout structure.
     They should have a @class to distinguish them. -->
  <xsl:template match="table[@class=$list-tables]">
    <fo:list-block provisional-distance-between-starts="2em"
      provisional-label-separation="1em"  space-before="0.5em">
      <xsl:copy-of select="@id"/>
      <xsl:apply-templates/>
    </fo:list-block>
  </xsl:template>
  
  <xsl:template match="table[@class=$list-tables]//tr">
    <fo:list-item space-before="0.5em">
      <xsl:copy-of select="@id"/>
      <xsl:apply-templates select="." mode="tailor-list-item"/>
      <fo:list-item-label end-indent="label-end()">
        <fo:block>
          <xsl:apply-templates select="child::*[1]"/>
        </fo:block>
      </fo:list-item-label>
      <fo:list-item-body start-indent="body-start()">
        <fo:block>
          <xsl:apply-templates select="child::*[2]"/>
        </fo:block>
      </fo:list-item-body>
    </fo:list-item>
  </xsl:template>
  
  <xsl:template match="*" mode="tailor-list-item"/>
  
  <xsl:template match="table[@class='resources']//tr" mode="tailor-list-item">
    <xsl:attribute name="provisional-distance-between-starts">8em</xsl:attribute>
    <xsl:attribute name="keep-together.within-page">always</xsl:attribute>
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
  
  <xsl:template match="span[contains-token(@class,'lbl')]">
    <fo:inline>
      <xsl:call-template name="label-form"/>
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template match="span[contains-token(@class,'lbl2')]">
    <fo:inline>
      <xsl:call-template name="label2-form"/>
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template match="span[contains-token(@class,'insert')]">
    <fo:inline font-style="italic">
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template match="span[contains-token(@class,'label')]">
    <fo:inline font-style="{ $label-font-family }">
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template match="strong[contains-token(@class,'lbl')]">
    <fo:inline font-weight="bold">
      <xsl:call-template name="label-form"/>
      <xsl:apply-templates/>
    </fo:inline>
  </xsl:template>
  
  <xsl:template match="a">
    <fo:basic-link external-destination="{@href}">
      <xsl:apply-templates select="." mode="link-features"/>
      <xsl:apply-templates/>
    </fo:basic-link>
  </xsl:template>
  
  <xsl:template match="a[starts-with(@href,'#')]">
    <fo:basic-link internal-destination="{ substring-after(@href,'#') }">
      <xsl:apply-templates select="." mode="link-features"/>
      <xsl:apply-templates/>
    </fo:basic-link>
  </xsl:template>
  
  <xsl:template match="a" mode="link-features">
    <xsl:attribute name="color">blue</xsl:attribute>
  </xsl:template>
  
  <xsl:template match="*" mode="link-features"/>
  
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
  
  <xsl:template name="label2-form">
    <xsl:attribute name="font-family">sans-serif</xsl:attribute>
    <xsl:attribute name="font-size">80%</xsl:attribute>
    <xsl:attribute name="padding-before">0.2em</xsl:attribute>
    <xsl:attribute name="padding-after">0.2em</xsl:attribute>
    <xsl:attribute name="space-end">0.3em</xsl:attribute>
    <xsl:attribute name="padding-start">0.2em</xsl:attribute>
    <xsl:attribute name="padding-end">0.2em</xsl:attribute>
    <xsl:attribute name="border-style">solid</xsl:attribute>
    <xsl:attribute name="border-width">0.5pt</xsl:attribute>
  </xsl:template>
  
  

</xsl:stylesheet>