# Profile maker

Application to be developed

o fill (checks all) o wipe (unchecks all)
o with-children (toggles with-children behavior)


## Project purposes

1. Close the loop on (some) OSCAL functionalities
1. Further demo/test SaxonJS including, here
  - UI features
  - pushing boundaries of resource management/document load
  - pushing performance
1. Demonstrate / test CSX-based data acquisition for meaningful data

### Defects/limitations

Data throughput (see above); partiality of support of OSCAL profile model; does not produce files that are usable without enhancement (you have to add your own metadata).

### Blank

A catalog is displayed with none of its controls selected ('wiped').


### Maker

By checking boxes and filling in values, selections can be made and parameters set.

Use the UI to make a selection of controls, with parameter settings and notes, *eh voila*.

A profile can be serialized and saved out representing the current selection.

### Sniffer

Fill out a text box with a list of control identifiers. Let the Profile Maker produce an OSCAL profile indicating those controls. Import this list from a plain text file.

Or, drop your ODS spreadsheet onto the sniffer, and it offers a mapping grid, permitting you to designate the columns where identifiers and values appear. Using this information the sniffer can produce an OSCAL profile with a button push, populating the Maker.

### Editor

When you load a profile instead of a spreadsheet, the Maker becomes a rudimentary profile editor.

## Architecture

Much of the display logic should already be available in the `control-reviewer` application. The essence of this application is to add interactivity to this, then read it back (out of the modified page) and write an OSCAL profile. To be added are (a) the ability to select controls (via checkbox or dynamic tag/load) and (b) writing it back out.

The XSLT reads a catalog and accepts a profile as a runtime parameter to display its controls and parameters with selections, settings and modifications. The selections, settings and modifications are editable on the page.

Most of the UI is implemented as SaxonJS templates including page refills.

A set of templates can also read the HTML and produce an OSCAL profile back again, writing it to a "Download" button.

The 'blank' is produced by processing the catalog with no profile.

page load: read catalog and present (interactive) blank

'make OSCAL' button builds the profile from current page state and injects a Save As Profile button

'read controls' reads a textbox and 
'load ODS' re-initiates the transformation reading an ODS spreadsheet
- template load-ODS
  - exposes mapping grid w/ interface
  - with button to 'populate profile' using the assigned mapping

'load profile' re-initiates the transform
- template load-profile
  - presenting the selections and patches of a profile read in
  - limits: no restructuring; only limited alteration

interactive features of browser
- control parts activate/deactivate with selection
  - deactivate 'quiets' but does not wipe settings
  - active permits parameter value setting (textfields)
  - this can dynamically inject into control content
