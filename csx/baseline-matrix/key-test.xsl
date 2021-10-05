<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:math="http://www.w3.org/2005/xpath-functions/math"
  exclude-result-prefixes="xs math"
  version="3.0">
  
  <xsl:key name="test" match="doc:*" use="@id" xmlns:doc="doc"/>
  
  <doc id="doc" xmlns="doc">
    <p id="p1"/>
    <p id="p2"/>
    <p id="p3"/>
    <p id="p1"/>
    
  </doc>
  
  <xsl:template match="/">
    <xsl:value-of select="count(key('test','p1'))"/>
  </xsl:template>
  
</xsl:stylesheet>