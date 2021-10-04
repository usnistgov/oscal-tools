/* SaxonJS runtime invocation */
window.onload = function () {
      SaxonJS.transform({
        sourceLocation: "NIST_SP-800-53_rev5_catalog.xml",
        stylesheetLocation: "profile-matrix.sef.json",
        initialTemplate: "initialize"
      });
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