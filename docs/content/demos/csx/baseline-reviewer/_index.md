---
title: Baseline Reviewer
description: An OSCAL analysis tool
custom_css:
- "css/csx/nist-emulation.css"
- "css/csx/baseline-reviewer-ui.css"
---


{{< rawhtml >}}

        <script type="text/javascript" src="../lib/Saxon-JS-2.2/SaxonJS2.js"> </script>
        <script xml:space="preserve">

    window.onload = function () {
      SaxonJS.transform({
        sourceLocation: "../NIST_SP-800-53_rev5_catalog.xml",
        stylesheetLocation: "catalog-with-profile-ui.sef.json",
        initialTemplate: "display-catalog"
      },"async");
    }
    
    function viewWithProfile(fileSet) {
      for (const eachFile of fileSet) {
        let frdr = new FileReader();
        frdr.onload = function () {
          SaxonJS.transform({
            sourceLocation: "../NIST_SP-800-53_rev5_catalog.xml",
            stylesheetLocation: "catalog-with-profile-ui.sef.json",
            initialTemplate: "refresh-catalog",
            stylesheetParams: {
              "profileXML": frdr.result,
              "fileName": eachFile.name
            }
          },"async")
        }
        frdr.readAsText(eachFile);
      }
    }
   
</script>
        <div id="bxheader">
          <h3 id="page-title" onclick="void(0)">OSCAL Baseline Reviewer</h3>
          <h4>Surveying SP800-53 controls as modified by your OSCAL profile</h4>
          <details style="margin-top: 1em" id="overview">
              <summary style="font-style:italic">Explanation</summary>
              <p>The <b>Control Reviewer</b> is an enhanced OSCAL catalog viewer designed to present
                the selections and adjustments made to the SP 800-53 control catalog by a baseline (described as an OSCAL profile), either as
                selected, or as loaded by the user. <i>(Currently it only shows control selection, not control alterations or parameter settings; those are next.)</i></p>
            <p>It can also be used <q>plain</q>, as a simple browser for the SP 800-53 control catalog.</p>
              <p>Note: this analysis does not examine the documents actually linked (imported) by your profile. Instead, it examines every import directive as if the SP800-653 Rev 5 catalog were its intended source. For reference and comparison, please see the <a href="../NIST_SP-800-53_rev5_catalog.xml">SP 800-53 Rev 5 catalog (copy) in this repository</a>. </p>
              <p>Limitations / tbd:</p>
              <ul>
                <li>Does not validate profiles - GIGO applies</li>
                <li>Conformance with OSCAL profile spec is work-in-progress as the spec evolves</li>
                <li>The (entire) SP800-53 control catalog is assumed for <i>any</i> and <i>all</i> imports. In other words, this viewer is safe to use only with
                  profiles that call only the SP 800-53 catalog (no other or subordinate catalogs), and only once. In fact this application does not offer a view of a profile (yours or any) but of this catalog, using a profile as a point of reference for filtering.</li>
                <li>Supports <code>import-control/with-id</code> only, not <code>import-control/matches</code>. (Let us know if you need this or any of these features.)</li>
                <li>Similarly does not yet support <code>import-control/@with-child-controls</code> so control enhancements must be included explicitly.</li>
              </ul>
            </details>
          <div id="button-block"><span> </span></div>
          
        </div>
      <div id="bxbody">
            <!--<p>body</p>-->
        </div>
        <div id="bxfooter">
            <p>The SP 800-53 Baseline Reviewer is an <a href="https://pages.nist.gov/OSCAL/">OSCAL</a> demonstration. Use with appropriate caution as disclaimers apply.</p>
            <p>Data processing on this page runs entirely in your browser, under <a href="https://www.saxonica.com/saxon-js/index.xml">SaxonJS</a>. No data is transferred to any other party, monitored or analyzed in any way other than what is displayed.</p>
        </div>

{{< /rawhtml >}}

