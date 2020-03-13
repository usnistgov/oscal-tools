# OSCAL Publishing Demo

This is a demo OSCAL publishing platform. It is designed to be freely adapted, used, and reverse engineered.

(Proposed architecture and command-line syntax offered below.)

## Applications provided for

### Generic preview

Produce a readable and browsable rendering of an OSCAL catalog or SSP.

Makes HTML or PDF.

Invoke `generic-preview` like this:

(produce HTML for a catalog)
```
./produce-oscal.sh generic-preview catalog my-catalog.xml my-html-preview.html
```

(produce PDF for a catalog)
```
./produce-oscal.sh generic-preview catalog my-catalog.xml my-html-preview.pdf
```

(produce HTML for an SSP)
 

```
./produce-oscal.sh generic-preview SSP my-catalog.xml my-html-preview.html
```

Where

- the first argument is the string 'generic-preview'
- the second argument is 'catalog' for a catalog, 'SSP' for an SSP
- the third argument identifies an XML file on the system (relative path)
  - if it does not conform to the expected type, exceptions will be flagged in the results
- the fourth argument (optional) designates a result file:
  - suffix 'html' indicates HTML results
  - suffix 'pdf' indicates PDF results
  - omitting the argument writes HTML to STDOUT?
  - any other suffix (?)
- an optional final argument: -css-inline -css-linked indicates how CSS should be handled when HTML is produced, whether as a literal inclusion, or only as a link (to a CSS file resource provided).

XML and web developers will recognize that CSS hooks permit plenty of extension and customization of HTML outputs even without changing the underlying XSLT transformation.

### NIST emulation

These applications depend on *generic preview* to run and can be considered to be an add-on or customization of it. We offer two applications:

- A presentation of a catalog that renders it after the form of the published version of NIST SP800-53
- A presentation of an SSP that renders it in the form of the NIST MODERATE/LOW SSP Template, which is designed to conform to the guidelines of NIST800-18.

Like *generic preview*, these both produce HTML and PDF outputs from OSCAL inputs.


```
./produce-oscal.sh NIST-800-53-catalog my-catalog.xml my-pretty-catalog.html (produces HTML for a catalog)
```

```
./produce-oscal.sh NIST-template-SSP my-ssp.xml my-preview-ssp.pdf (produces PDF for an SSP)
```

The *NIST Catalog emulator* aims to produce HTML, or PDF, that is roughly reminiscent (HTML) or reasonably close (PDF) to the rendition offered to the SP800-53 catalog in its canonical published version. It produces this rendition for any OSCAL catalog including catalogs produced from OSCAL profiles.

The *NIST SSP emulator* aims to produce HTML that presents an SSP in "digested" form, as it would appear conformant with the NIST SP800-18 template for an SSP (under development etc.), in submittable form. Where the source SSP is complete and adequate to the input requirements for the emulator, is indicated visually in the outputs, so work in progress can be reasonably presented, not only a final product. Complementing this functionality, this emulator will be accompanied by a Schematron to help test and diagnose quality issues in data.

Note: we do not aim for pixel-level fidelity, but rather for clean functionality and familiar look/feel.

Note also: this effort is *not intended to be exclusive of parallel approaches* to delivering similiarly useful outputs (result artifacts) from OSCAL data, whether they be implemented on a similar or alternative stack.
