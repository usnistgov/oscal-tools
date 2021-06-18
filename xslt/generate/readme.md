# OSCAL instance generator XSLT

Generate your own fresh stub OSCAL XML documents.

The document can conform to any of the OSCAL models. Required elements will be included. If required more than once, an element is included as many times as required.

Optional elements are not included by default, but can be added with a runtime parameter.

Where data values are required, a valid placeholder value is supplied for formal validity.

## Dependency

This XSLT requires XSLT 3.1 as it uses pseudo-random-number generation provided by XPath 3.1 as well as other advanced XSLT features.

It has been tested in Saxon (Java) and SaxonJS (nodeJS). The latter delivers results when the XSLT is called directly, but slowly; also a compiled (SEF) version returns a runtime error. These issues are being looked into.

Other variants of this logic (tbd) might:

* Drop the UUID functionality and make 'blank' UUIDs
  - `generate-oscal-blank.xsl`
  - in XSLT 1.0 for legacy processors
  - in SaxonJS for SEF distribution
* Deliver the UUID functionality using Java -- even under XSLT 1.0

## How to run

### Configuring with a runtime parameter

The XSLT will produce a fresh 'unused' OSCAL document when invoked on itself (or any XSLT stylesheet) with one of the following parameter settings:

- `make=catalog` 
- `make=profile` 
- `make=component-definition` 
- `make=system-security-plan` 
- `make=assessment-plan` 
- `make=assessment-results` 
- `make=plan-of-action-and-milestones` 

This is a convenient way to set up for calls to be configured at runtime, if an application can acquire an appropriate value for the `make` parameter from the user.

Leaving the parameter unset or setting it to an unrecognized value will produce a message along with an empty document.

### Configuring by using an initial template

Alternatively, invoke by calling an initial template for any of the supported formats (`-it` is `--initial-template` using Saxon CL syntax):

- `-it make-catalog` 
- `-it make-profile` 
- `-it make-component-definition` 
- `-it make-system-security-plan` 
- `-it make-assessment-plan` 
- `-it make-assessment-results` 
- `-it make-plan-of-action-and-milestones` 

This is a useful way to produce outputs from a calling stylesheet or application hard-coded to produce the desired format.

#### SaxonJS CL call

> $ xslt3 -xsl:generate-oscal.xsl -it:make-plan-of-action-and-milestones

Produces a (blank) Plan of Action and Milestones (template).

> $ xslt3 -xsl:generate-oscal.xsl -it:make-plan-of-action-and-milestones include=all

Delivers the same result, except optional elements and attributes are included.

### Refresher utility

Applied to any OSCAL document, this XSLT will produce a copy with fresh top-level UUID and metadata timestamp.

## Folder contents

In addition to `generate-oscal.xsl`, this folder contains an XSLT used to produce it (from a composed OSCAL metaschema source) as well as other development artifacts.

