# The format converter is experimental!

XSLT reads two catalogs and writes a delta
assumes families, controls and enhancements (one level)

Family by family
Control by control
Matched by ID and title
showing withdrawn controls w/ incorporated/moveto
run on rev4 + rev5
producing tabular view that can be annotated by baselines

to do: exhaustively test

XML-to-JSON and JSON-to-XML
  raw text not XML/JSON
  JSON not OSCAL
  XML not OSCAL
  OSCAL JSON
  OSCAL XML
  cosmetics of results
  Save As functionality
  
NB: XSLTs in `lib` need to be aligned with upstream.

Lots of testing is still needed to gauge performance and handling.

Needs more work on look/feel / styling outputs.

Don't know how it will work under load.

Unexposed bugs in conversion may not be detected, and GIGO is a feature! so do not rely on your converted data without reviewing and checking the conversion for correctness and accuracy.

**Validate your input data** before even trying it! Valid inputs should work (there should be no data loss). Inputs that are not schema-valid are guaranteed to produce invalid outputs, even if correct.

All this is subject to testing, and miscellaneous issues such as whitespace handling remain to be addressed....
