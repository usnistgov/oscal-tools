<?xml version="1.0" encoding="UTF-8"?>
<p:declare-step xmlns:p="http://www.w3.org/ns/xproc"
  xmlns:c="http://www.w3.org/ns/xproc-step" version="1.0"
  xmlns:oscal="http://csrc.nist.gov/ns/oscal/1.0"
  type="oscal:produce-html-and-pdf" name="produce-html-and-pdf">
  
  <p:option name="result-pdf-path" select="'test.pdf'"/>
  
  <p:input port="source" primary="true"/>
  <p:input port="parameters" kind="parameter"/>
  
  <p:output port="input" primary="false">
    <p:pipe port="result" step="input"/>
  </p:output>
  <p:output port="HTML" primary="false">
    <p:pipe port="result" step="make-html"/>
  </p:output>
  <p:output port="FO" primary="false">
    <p:pipe port="result" step="make-xsl-fo"/>
  </p:output>
  
  <p:serialization port="HTML" indent="true" method="xml"
    doctype-public="-//W3C//DTD XHTML 1.1//EN"
    doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"
   />
  <!--<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" 
   "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">-->
  <!--<p:serialization port="markdown"     indent="false" method="text"/>-->
  
  <p:serialization port="input" indent="true"/>
  <p:serialization port="FO"    indent="true"/>
  
  <p:identity name="input"/>
  
  <p:xslt name="make-html">
    <p:input port="stylesheet">
      <p:document href="nist-emulation/sp800-53A-catalog_html.xsl"/>
    </p:input>
  </p:xslt>
  
  <p:xslt name="make-xsl-fo">
    <p:input port="stylesheet">
      <p:document href="nist-emulation/oscal_sp800-53-emulator_fo.xsl"/>
    </p:input>
  </p:xslt>
  
  <p:xsl-formatter name="make-pdf" content-type="application/pdf">
    <p:with-option name="href" select="$result-pdf-path"/>
    <p:input port="parameters">
      <p:empty/>
    </p:input>
  </p:xsl-formatter>
  
  
</p:declare-step>