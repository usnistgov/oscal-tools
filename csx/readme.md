# Client-side XSLT (CSX) Demonstrations

Published versions of these demonstrations are hosted at http://pages.nist.gov/oscal-tools/demos/csx.

For convenience and clarity, the code base is maintained here with the actual demo runtimes copied out (as operational subsets) to the docs/content/demos/csx directories for processing by Hugo and delivery through the Pages site.

So maintenance has two tiers:

- Each application should operate standalone when served (by a plain web server) from a development directory in this folder.

- Additionally, a subset of this application file set, mirrored into docs/content/demos/csx, should function within the static web site built by Hugo and posted on Pages.

Test an application standalone before providing (and documenting) its mirroring (publishing) procedure. An application can be prototyped here and not copied, before a public demonstration is ready.

Run a web server such as nodejs `http-server` from this directory to serve the applications from `localhost`.

## Deployment Model

Currently each demo is maintained in its own directory, where it can also be served for preview (outside Hugo or Pages).

For pages.nist.gov integration, an application (or an operational subset) must be copied (echoed) to the /docs folder where the Hugo site is configured and stocked.

Note that migration is typically not simply copying, but also sometimes rewiring or resetting configuration. For example, the location of the SaxonJS distribution changes. These divergences help ensure that deployment is not done without due care and deliberation.
Typically this means that the analogous folder in /docs must be examined to see that things are accounted for properly. Typically either file headers or links can be impacted.

### Baseline Matrix

- stable
- 20211006 updated to current SP800-53 catalog

### Baseline Reviewer

- retest and write up readme

### Format Converter

- retest and write up readme
- extend to support profile

### Import Examiner

- retest and write up readme

### Validator

- retest and write up readme
- extend to support other models?

### OSCAL Mapper

Reads spreadsheet (ODS) in, emits OSCAL

user designs an (XML) template with queries into the spreadsheet
an XSLT is derived from this and executed over the spreadsheet contents
emitting the required XML
which can be saved

### Further demos

See project directories for more....

### Ideas

