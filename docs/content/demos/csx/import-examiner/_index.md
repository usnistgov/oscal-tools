---
title: Profile Import Examiner
usabanner: true
custom_css:
- "css/csx/nist-emulation.css"
- "css/csx/import-examiner.css"
---

{{< rawhtml >}}
  
<script type="text/javascript" src="../lib/Saxon-JS-2.2/SaxonJS2.js"> </script>
  <script xml:space="preserve">

function loadOSCAL(fileSet) {
    for (const eachFile of fileSet) {
        let frdr = new FileReader();
        frdr.onload = function () {
          SaxonJS.transform({
            sourceText: frdr.result,
            stylesheetLocation: "profile-checker.sef.json",
            initialTemplate: "examine-profile",
            stylesheetParams: {
              "fileName": eachFile.name
            }
          },"async")
    }
    frdr.readAsText(eachFile);
    }
}

function refreshBaseline(baseline, importIndex) {
    SaxonJS.transform({
        stylesheetLocation: "profile-checker.sef.json",
        initialTemplate:     "refresh-baseline",
        stylesheetParams: {
              "baseline":     baseline,
              "import-index": importIndex
            }
      },"async")
}
</script>
        <div id="bxheader">
          <h3 id="page-title" onclick="void(0)">OSCAL Import Examiner</h3>
          <h4>Checking your OSCAL profile with reference to the NIST SP 800-53 (revision 5) control catalog</h4>
          <p style="font-style:italic">(<b>Coming soon</b> - not just profiles but other OSCAL models as well)</p>
          <p>Load your OSCAL profile XML file(s) here for instant analysis of its control catalog imports (in your browser)... <input
                type="file" accept=".xml,text/xml"
                id="loadfileInput" name="loadfileInput" title="Drop XML"
                onchange="loadOSCAL(this.files)" /></p>
            <details style="margin-top: 1em" id="overview">
              <summary style="font-style:italic">Explanation</summary>
              <p>The <i>Import Examiner</i> reads an arbitrary XML document and reports back:</p>
              <ul>
                <li>If it is (not) a <code>profile</code> XML document in the OSCAL namespace (i.e., represented to be an OSCAL profile)</li>
                <li>For an OSCAL profile, we examine its imports. We are interested in two things:
                  <ul>
                    <li>Does the import make reference to a file whose name indicates SP800-53 in some form?</li>
                    <li>How do its controls appear in reference to SP800-53 or to other control selections including baselines made from it?</li>
                  </ul>
                </li>
                <li>Included is support for checking your control selections against four sources: the (full) SP 800-53 control catalog; and three
                  control sets derived from it, i.e. the NIST <code>HIGH</code>, <code>MODERATE</code> and <code>LOW</code> control baselines.</li>
                <li>In later versions we plan support of testing imports in other OSCAL documents as well as testing constraints over OSCAL data in general, with respect to their imports.</li>
              </ul>
              <p>Note: this analysis does not examine the documents actually linked (imported) by your profile. Instead, it examines every import directive as if the SP800-653 Rev 5 catalog (or other selected baseline) were its intended source, and as such can be provided by a known and trusted proxy (document). For reference and comparison, please see the <a href="../NIST_SP-800-53_rev5_catalog.xml">SP 800-53 Rev 5 catalog (copy) in this repository</a>. (It then proceeds, in part, to test this premise.)</p>
              <p>Using this analysis you can quickly and easily determine whether your OSCAL profile, considered as a baseline or overlay of Rev 5 or of its overlays (such as the NIST or FedRAMP HIGH, MODERATE or LOW baselines), will resolve correctly into a control selection for an OSCAL processor according to OSCAL profile semantics.</p>
              <p>Provided with further back end infrastructure (in the form of appropriate file sets, metadata, and match criteria between import statements and upstream catalogs), this tool can offer the same analysis against arbitrary catalogs. NIST SP 800-53 and its baselines are selected for this demonstration for their ubiquity and ready availability in OSCAL.</p>
              <p>A subsequent version of this tool could provide similar import-based analysis of other OSCAL document types including System Security Plans (SSPs) and POA&amp;Ms (Plans of Action and Milestones).</p>
              <p>Limitations / tbd:</p>
              <ul>
                <li>Supports <code>import-control/with-id</code> only, not <code>import-control/matches</code></li>
                <li>Does not support <code>import-control/@with-child-controls</code></li>
              </ul>
            </details>
        </div>
      <div id="bxbody">
            <!--<p>body</p>-->
        </div>
        <div id="bxfooter">
            <p>The SP 800-53 Import Examiner is an <a href="https://pages.nist.gov/OSCAL/">OSCAL</a> demonstration. Use with appropriate caution as disclaimers apply.</p>
            <p>Data processing on this page runs entirely in your browser, under <a href="https://www.saxonica.com/saxon-js/index.xml">SaxonJS</a>. No data is transferred to any other party, monitored or analyzed in any way other than what is displayed.</p>
        </div>

{{< /rawhtml >}}

