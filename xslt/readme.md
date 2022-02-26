# OSCAL XSLT tooling

This subdirectory includes miscellaneous XML-based tooling to support [OSCAL](http://pages.nist.gov/oscal)

Although at different stages of development, for the most part these resources have inline comments as well, providing documentation as to purpose and use.

## Subdirectory contents

`author` - CSS for authoring OSCAL XML formats, in XML editors supporting CSS for display - can also be made to work in browsers

`conversion` - various conversion utilities and tools - includes prototypes or generic versions of tooling maintained elsewhere

`generate` - generate incomplete-but-valid OSCAL "stub" documents suitable for testing or further work
`lib` - miscelleneous tooling at different stages of maturity

`publish` - publishing OSCAL in HTML and PDF formats

## XSLT Version

Unless marked otherwise, assume that XSLT in this repository conforms to version 3.0 and may exploit 3.0 features. Accordingly it will not run in older XSLT engines: at least Saxon version 10 is recommended (any platform or license, or the free-to-use Saxon 10 HE).

Some stylesheets may conform to older versions including XSLT 1.0 for use in browsers, but these will be special purpose.

