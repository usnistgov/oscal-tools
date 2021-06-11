# OSCAL instance generator XSLT

Generate your own fresh stub OSCAL instances.

It can be of any of the supported models.

Required elements will be included. If required more than once, an element is included as many times as required. Optional elements are not included.

Where data values are required, a valid (albeit bogus) value is supplied for formal validity.

## Dependency

In order to produce fresh UUIDs for values that require UUID syntax, currently this XSLT requires a Java-based XSLT 3.0 processor supporting reflexive calls to Java, such as SaxonPE or SaxonEE.

Processors unable to call the Java method `uuid.randomUUID` will fall back to provide the dummy UUID '00000000-0000-4000-8000-000000000000' where required.

## How to run

### Configuring with a runtime parameter

The XSLT will produce fresh OSCAL when invoked on itself (or any XSLT stylesheet)  with one of the following parameter settings:

- `make=catalog` 
- `make=profile` 
- `make=component-definition` 
- `make=system-security-plan` 
- `make=assessment-plan` 
- `make=assessment-results` 
- `make=plan-of-action-and-milestones` 

This is a convenient way to set up for calls to be configured at runtime, if an application can acquire an appropriate value for the `make` parameter from the user.

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

### Refresher utility

Applied to any OSCAL document, this XSLT will produce a copy with fresh top-level UUID and metadata timestamp.

## Folder contents

In addition to `generate-oscal.xsl`, this folder contains an XSLT used to produce it (from a composed OSCAL metaschema source).
