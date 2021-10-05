# Client-side XSLT (CSX) Demonstrations

Published versions of these demonstrations are hosted at http://pages.nist.gov/oscal-tools/demos/csx.

For convenience and clarity, the code base is maintained here with the actual demo runtimes copied out (as operational subsets) to the docs/content/demos/csx directories for processing by Hugo and delivery through the Pages site.

So maintenance has two tiers:

- Each application should operate standalone when served (by a plain web server) from a development directory in this folder.

- Additionally, a subset of this application file set, mirrored into docs/content/demos/csx, should function within the static web site built by Hugo and posted on Pages.

Test an application standalone before providing (and documenting) its mirroring (publishing) procedure. An application can be prototyped here and not copied, before a public demonstration is ready.

Run a web server such as nodejs `http-server` from this directory to serve the applications from `localhost`.

## Web site to do

Maintained here to keep it from being published....

* Test each project
  * copy readmes from XMLjellysandwich
  * test in /csx
  * fill out top-level summary /demos/csx/_index.md (expander box?)
  * migrate and test in /docs/content/demos/csx
  * write up publishing model (readme.md)
* Spiff up "About" page w/ links
* Fill out projects/csx page
* Page favicons (layouts/partials/head.html)

   