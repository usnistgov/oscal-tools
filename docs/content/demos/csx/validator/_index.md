---
title: "Schema Validation Emulator"
usabanner: true
custom_css:
  - "css/csx/nist-emulation.css"
  - "css/csx/csx-validator.css"
---

{{< rawhtml >}}
        <script type="text/javascript" src="../lib/Saxon-JS-2.2/SaxonJS2.js"> </script>
        <script xml:space="preserve">

    function validateFiles(fileSet) {
      for (const eachFile of fileSet) {
        let frdr = new FileReader();
        frdr.onload = function () {
          SaxonJS.transform({
            sourceText: frdr.result,
            stylesheetLocation: "apply-validator.sef.json",
            initialTemplate: "validate-catalog",
            stylesheetParams: {
              "fileName": eachFile.name
            }
          },"async")
        }
        frdr.readAsText(eachFile);
      }
    }
    
</script>
        <div id="bxheader">
          <h3 id="page-title" onclick="void(0)">OSCAL Catalog Validator</h3>
          <h4>Checking your XML document against rules defined by the OSCAL Catalog Metaschema</h4>
          <h5>NB - work in progress - features and testing still to come -</h5>
          <p style="font-style:italic">(<b>Coming soon</b> - not just catalogs but other OSCAL models as well)</p></div>
      <div id="bxbody">
            <!--<p>body</p>-->
        </div>
      <div id="bxhelp">
          <p>Load your OSCAL XML catalog file(s) here for instant validation... <input
                type="file" accept=".xml,text/xml"
                id="loadfileInput" name="loadfileInput" title="Drop XML"
                onchange="validateFiles(this.files)" /></p>
        </div>
      
      <details style="margin-top: 1em" id="overview">
        <summary style="font-style:italic">Explanation</summary>
        <p>The <i>OSCAL Validator</i> reads an arbitrary XML document and reports back findings from an inspection relative to rules
          defined for the OSCAL catalog (meta)schema:</p>
        <ul>
          <li>If it is (not) a <code>catalog</code> XML document in the OSCAL namespace (i.e.,
            represented to be an OSCAL catalog)</li>
          <li>If it sees unknown element occurrences (foreign or out of place)</li>
          <li>On recognized elements, it reports:
            <ol><li>Unrecognized attributes</li>
              <li>Required elements and attributes (checking for elements missing)</li>
              <li>Cardinality (of elements appearing) - too many or too few</li>
              <li>Order of elements - impermissible element ordering</li>
              <li>Datatype-based lexical constraints (<q>castable as</q>) constraints (also tested on attributes)</li>
              <li><em>To come</em>... further metaschema-based constraints (<code>allowed-values</code> etc.)</li></ol></li>
        </ul>
        <p>Effectively, this feature set is intended to match that of the normative XML Schema Definition (XSD)-based expression of constraints defining the (XML) OSCAL catalog format. If you find any disparities between this tool, and a compliant application of the OSCAL catalog XSD, please let the developer know.</p>
      </details>
        <div id="bxfooter">
          <p>The <i>SP 800-53 Catalog Validator</i> is an <a href="https://pages.nist.gov/OSCAL/">OSCAL</a> demonstration. Use with appropriate caution. Source code is available for inspection or analysis.</p>
            <p>Data processing on this page runs entirely in your browser, under <a href="https://www.saxonica.com/saxon-js/index.xml">SaxonJS</a>. No data is transferred to any other party, monitored or analyzed in any way other than what is displayed.</p>
        </div>

{{< /rawhtml >}}
