# OSCAL Publishing Demo

This is a demo OSCAL publishing platform. It is designed to be freely adapted, used, and reverse engineered.

## Applications

### Generic preview

Apply this XSLT to your OSCAL catalog or to the results of resolving an OSCAL profile (as a catalog baseline).

Generic preview logic attempts to provide any valid input with a "fair and honest" representation. This means that elements that are specifically presentational in their scope (such as paragraphs or inline italic) are simply rendered as such for display, while generic (typed) structures are labeled to indicate their type.

While these transformations provide no validation support as such, even the generic fallback logic for any/all valid OSCAL might support checking the data "by eye", to an extent.

### NIST emulation

These XSLTs produce a more polished formatted result than the rough previews. They rely on the preview stylesheets for fallback processing, but they provide their own formatting in emulation of an official NIST publication.

They are designed to work specifically with OSCAL as exemplified in test and common samples, such as the SP800-53 catalogs or baselines derived from them.

They can also serve also as the site of extension; that is, you can build on this logic to add support for specialized data constructs.

## Setup and use

These applications are implemented as *sequences* of transformations, not always single transformations (invocations of a processor with a runtime stylesheet).


## Customization

Either or both of these XSLT transformations may be further customized, either by direct intervention or by importing or including into local/customizing XSLT stylesheets.

## Proposed command-line syntax

We need (do not yet have) a script that can:

- instigate XSLT processing over provided source data
- designate a target pathway via argument e.g. 'catalog'
- provide for user to name output (result) file(s)
- provide for any necessary parameterization

In the below, our (not yet developed) script is called `produce-oscal.sh`.

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
