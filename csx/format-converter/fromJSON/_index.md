---
title: "OSCAL Catalog JSON-to-XML Converter"
custom_css:
- "css/csx/nist-emulation.css"
---

{{< rawhtml >}}
<script type="text/javascript" src="../lib/Saxon-JS-2.2/SaxonJS2.js"> </script>
<script xml:space="preserve">
     
    function makeXMLforJSON(jsontext) {
          SaxonJS.transform({
            stylesheetLocation: "oscal-catalog_JSONtoXML_converter.sef.json",
            initialTemplate: "make-xml",
            stylesheetParams: {
              "oscal-data": jsontext
            }
          },"async")
    }

    function dropFileText(fileSet,whereID) {
      for (const eachFile of fileSet) {
        let where = document.getElementById(whereID)
        let frdr = new FileReader();
        frdr.onload = function () {
          where.value = frdr.result;
          makeXMLforJSON(frdr.result)
        }
        frdr.readAsText(eachFile);
      }
    }
    
    /* reads result off of pane, provides it to a download link and clicks it */
    function offerDownload(fileName) {
      var contents = document.getElementById("success").textContent;
      var f = new Blob([ contents ]);
      var a = document.createElement("a");
      a.href = URL.createObjectURL(f);
      a.download = fileName;
      a.click()
      }
</script>
      
<div id="bxheader">
  <h3 id="page-title" onclick="void(0)">OSCAL Catalog XML|JSON Format Converter - JSON</h3>
  <h4>Converting your OSCAL JSON catalog into OSCAL XML</h4>
  <p style="font-style:italic">(<b>Coming soon</b> - not just catalogs but other OSCAL models as well)</p>
    <details style="margin-top: 1em" id="overview">
      <summary style="font-style:italic">Explanation</summary>
     <p>Warning: data dropped into the converter that is not valid OSCAL, may be <em>dropped</em> without notice. It depends on the nature of the issue - some <q>near OSCAL</q> will also come through okay.</p>
      <p>Use with caution accordingly.</p>
    </details>
</div>
<div id="bxbody">
<div id="converter-grid">
  <div class="ui-box" id="jsonbox">
    <input type="file" accept=".json,text/json"
      id="loadjsonInput" name="loadjsonInput" title="Drop JSON"
      onchange="dropFileText(this.files,'jsondata')" />
    <p>Load or paste your OSCAL catalog JSON ... and good luck!</p>
    <textarea id="jsondata" spellcheck="false" rows="48" onchange="makeXMLforJSON(this.value)"></textarea>
  </div><div class="ui-box" id="resultbox">
    
  </div>
  
</div>
</div>
<div id="bxfooter">
  <p>The SP 800-53 Catalog XML|JSON Format Converter is an <a href="https://pages.nist.gov/OSCAL/">OSCAL</a> demonstration. Use with appropriate caution as disclaimers apply.</p>
    <p>Data processing on this page runs entirely in your browser, under <a href="https://www.saxonica.com/saxon-js/index.xml">SaxonJS</a>. No data is transferred to any other party, monitored or analyzed in any way other than what is displayed.</p>
</div>
        
{{< /rawhtml >}}

