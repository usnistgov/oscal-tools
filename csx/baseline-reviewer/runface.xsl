<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:math="http://www.w3.org/2005/xpath-functions/math"
  exclude-result-prefixes="xs math"
  version="3.0">
  
  <xsl:template name="from-json">
    <out>You hit the 'from-json' initial template.</out>
  </xsl:template>
  
  <xsl:template match="/" expand-text="true">
    <out>You matched the root node of the input, which contains an element named { /*/name() }</out>
  </xsl:template>
  
</xsl:stylesheet>