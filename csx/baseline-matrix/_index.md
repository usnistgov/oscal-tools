---
title: "Baseline Matrix: An SP800-53B Emulator"
custom_css:
  - "css/csx/nist-emulation.css"
---

{{< rawhtml >}}
<script src="../lib/Saxon-JS-2.2/SaxonJS2.js"></script>
<script src="baseline-matrix-csx-runtime.js">

window.onload = function () {
      SaxonJS.transform({
        sourceLocation: "NIST_SP-800-53_rev5_catalog.xml",
        stylesheetLocation: "profile-matrix.sef.json",
        initialTemplate: "initialize"
      },"async");
    }
    
function applyTransform(fileSet) {
  for (const eachFile of fileSet) {
    let frdr = new FileReader();
    frdr.onload = function () {
      SaxonJS.transform({
        sourceText: frdr.result,
        stylesheetLocation: "profile-matrix.sef.json",
        initialTemplate: "amend-table",
        stylesheetParams: {
          "fileName": eachFile.name
        }
      },"async")
    }
    frdr.readAsText(eachFile);
  }
}
</script>
<style type="text/css" xml:space="preserve">
  a { color: inherit; text-decoration: none }
  a:hover { text-decoration: underline }
</style>
<div id="bxheader">
  <h3 id="page-title" onclick="void(0)">SP-800-53 Baseline Control Matrix</h3>
  <p style="font-style: italic">Load your OSCAL profile XML file(s) here ... <input
      type="file" accept=".xml,text/xml"
      id="stampfile" name="stampfile" title="Drop XML"
      onchange="applyTransform(this.files)" /></p>
</div>
<div id="file-roster">
    
</div>
<div id="family-directory">
    
</div>
<div id="bxbody">
      <!--<p>body</p>-->
</div>
<div id="bxfooter">
    <p>SP-800-53 Baseline Control Matrix is an <a href="https://pages.nist.gov/OSCAL/">OSCAL</a> demonstration. Use with appropriate caution as disclaimers apply.</p>
    <p>Data processing on this page runs entirely in your browser, under <a href="https://www.saxonica.com/saxon-js/index.xml">SaxonJS</a>. No data is transferred to any other party, monitored or analyzed in any way other than what is displayed.</p>
</div>
{{< /rawhtml >}}
