# OSCAL instance generator XSLT

Generate your own fresh stub OSCAL XML documents.

*Note: the utility does not produce JSON or YAML, but the XML it produces should be readily convertible.*

The document can conform to any of the OSCAL models. Required elements will be included. If required more than once, an element is included as many times as required.

Optional elements are not included by default, but can be added with a runtime parameter.

Where data values are required, a valid placeholder value is supplied for formal validity.

[Jump to How to Run](#how-to-run) below.

## Dependencies

`generate-oscal.xsl` is a single XSLT transformation, which produces "empty but valid" OSCAL documents.

`generate-oscal-blank.xsl` is a variant of the same transformation (also standalone) which produces OSCAL except with "blank" UUID values (where UUIDs are expected).

Either of these are standalone XSLTs that will function in an XSLT 3.1 processor without further dependencies.

### Blank mode

In this mode, nominal UUID values are provided with the blank UUID `00000000-0000-4000-8000-000000000000`.

Operational requirements -- or validity rules -- that require UUIDs to be distinct, will *not* be honored.

This XSLT runs on any XSLT 3.1 processor. It is available as both XSLT and SEF (Saxon compiled format), which runs significantly faster under SaxonJS.

### UUID mode

This XSLT requires XSLT 3.1 as it uses pseudo-random-number generation provided by XPath 3.1 as well as other advanced XSLT features.

It has been tested in Saxon (Java) and SaxonJS (nodeJS). Performance in Java is comparable. The latter delivers results when the XSLT is called directly, but slowly; also a compiled (SEF) version returns a runtime error. These issues are being looked into.

### To come?

#### XSLT 1.0

Would there be any use for an XSLT 1.0 version of this utility, which could run more widely on generic platforms (supporting XSLT 1.0)?

Should it be "blank" or could/should it rely on Java or other extension functionality to provide UUIDs? (Please offer your feedback in an [Issue](https://github.com/usnistgov/oscal-tools/issues).)

#### UUIDs in SaxonJS

Currently because higher-order functions are not supported in SaxonJS SEF, the UUID-generating utility fails to compile. It works (albeit slowly) when called in XSLT.

Potentially this logic could be provided by Javascript natively. There is an XSLT that stubs out such a variant.

## How to run

The industry-leading [Saxon processor](https://www.saxonica.com/products/products.xml) has been relied on for development and testing.

The codebase should function to produce the same outputs in any conformant XSLT engine supporting the necessary functions (as described below). Since Saxon is [readily available](https://sourceforge.net/projects/saxon/files/Saxon-HE/10/Java/), Saxon syntax is given below for convenience.

### Java Saxon CL

For SaxonHE, EE and PE (requires Saxon 10):

>  $ java -jar /path/to/saxon-he-10.jar -xsl:generate-oscal.xsl make=system-security-plan -it:*make-catalog*
    
Produces a catalog. Adjust the `-it` (initial template) setting as needed.

This will run in versions of Saxon before 10, but support for the [`random-number-generator()`](https://www.w3.org/TR/xpath-functions-31/#func-random-number-generator) function (needed for UUID generation) comes into SaxonHE only with version 10.

>  $ java -jar /path/to/saxon-he-10.jar -xsl:generate-oscal.xsl make=system-security-plan -it:*make-catalog* **include=all**
    
Delivers the same result, except optional elements and attributes are included.

If fresh UUIDs are not wanted, use `generate-oscal-blank.xsl` with the same syntax.

### SaxonJS CL

With the XSLT available.

> $ xslt3 -xsl:generate-oscal.xsl -it:*make-catalog*

Produces an OSCAL catalog (template) document, with new UUIDs. YMMV on performance.

> $ xslt3 -xsl:generate-oscal.xsl -it:*component-definition* include=all

As above, delivers the same result (time time a `component-definition` not a `catalog`), except optional elements and attributes are included.

> $ xslt3 -xsl:generate-oscal-blank.xsl -it:*make-profile*

Produces a (blank) OSCAL profile (template), except that UUID fields have a 'dummy' value.

> $ xslt3 -xsl:generate-oscal-blank.sef -it:*assessment-plan*

The same -- this time an `assessment-plan` -- with the compiled SEF version (faster).

### In an IDE or from an application

This XSLT is designed to be embedded in other runtime scenarios such as browsers and applications. For example, in oXygenXML Editor, Author or Developer, one or more Transformation Scenarios could call the stylesheet(s) as needed. By using the "runtime parameter" syntax, a Scenario can expose the choice of which format to deliver to the user; or Scenarios may be 'hard wired' per format.

A browser-based version of this utility is also contemplated.

## Runtime configuration

### Initial template

Either XSLT can be invoked with an initial template (without a source document) for any of the supported formats (`-it` is `--initial-template` using Saxon CL syntax):

- `-it make-catalog` 
- `-it make-profile` 
- `-it make-component-definition` 
- `-it make-system-security-plan` 
- `-it make-assessment-plan` 
- `-it make-assessment-results` 
- `-it make-plan-of-action-and-milestones` 

This is a useful way to produce outputs from a calling stylesheet or application hard-coded to produce the desired format.

### Runtime parameter

Alternatively, the XSLT will produce a fresh 'unused' OSCAL document when invoked with itself (or any XSLT stylesheet) as nominal source document, with one of the following parameter settings:

- `make=catalog` 
- `make=profile` 
- `make=component-definition` 
- `make=system-security-plan` 
- `make=assessment-plan` 
- `make=assessment-results` 
- `make=plan-of-action-and-milestones` 

This is a convenient way to set up for calls to be configured at runtime, if an application can acquire an appropriate value for the `make` parameter from the user.

Leaving the parameter unset or setting it to an unrecognized value will produce a message along with an empty document.

### OSCAL "refresher" utility

Applied to any OSCAL document, `generate-oscal.xsl` will produce a copy with fresh top-level UUID and metadata timestamp.

## Folder contents

In addition to `generate-oscal.xsl`, this folder contains an XSLT used to produce it (from a composed OSCAL metaschema source) as well as other development artifacts.

