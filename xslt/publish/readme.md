
# OSCAL Publishing Demos

The repository provides XSLT transformations that together form a starter/demo OSCAL publishing platform. The stylesheets are in the public domain, and are designed to be freely used, adapted, and reverse engineered.

XSLT transformations can be applied to XML data to produce results (outputs) in various formats, including other forms of XML, HTML or PDF (for processing by software that know how to read those formats). Since this is a publishing application (that is, aiming at legible display for human readers), we aim at HTML (readily installed into any web site) and PDF.

Neither the HTML nor the PDF outputs produced by this software is or can be warranted for any purpose. They are published mainly for the purpose of providing a starting point for others.

## Prerequisites for this guide

* You are comfortable at the command line (e.g. *nix, Mac, Windows shell)
* You are comfortable installing and running Java applications

To set up and run this software requires (rudimentary) development skills. These stylesheets are designed to be embedded in systems used by persons (human operators) who invoke their functionality without being able to install or test them. This guidance is not for those users (who have no use for it), or even for advanced developers who plan not only to run the transformations, but to embed them in their own applications. (These users probably know too much, and can learn what they need by skimming). Rather, this "how-to" aims at the developer who needs to test and demonstrate the capability ("producing readable OSCAL"), even if intermittently -- without (yet) having the skills or tools needed to adapt the tools or run them at scale.

At the same time, the resources are designed such that more advanced users especially with XSLT skills will be able to drop these stylesheets into any framework supporting XSLT 3.0, then use them as a springboard for further development. With these use cases in mind, interfaces are designed to be as simple as possible, with minimal parameterization or runtime options, and the XSLT code itself is provided with internal documentation.

(Devs please feel free to offer feedback about how we can make it easier.)

### XSLT dependencies

The XSLT is documented internally, but developers can assume that features of XSLT 3.0 are sometimes exploited, meaning these stylesheets will not always run correctly, unaltered, in an XSLT 1.0 environment.

### Java

The Java applications we rely on here are SaxonHE (open source XSLT 3.0 engine from Saxonica) and Apache FOP. HTML can be produced using Saxon only. PDF requires the combination of Saxon and FOP.

#### Saxon
[https://sourceforge.net/projects/saxon/files/Saxon-HE/](https://sourceforge.net/projects/saxon/files/Saxon-HE/)SaxonHE is produced by Saxonica.com and documented as part of commercial offerings
[https://www.saxonica.com/products/products.xml](https://www.saxonica.com/products/products.xml) [links].

To back up this guide, see especially documentation on  
[Getting started on Java](https://www.saxonica.com/documentation/index.html#!about/gettingstarted/gettingstartedjava) page and the page on 
[Running XSLT from the Command Line](https://www.saxonica.com/documentation/index.html#!using-xsl/commandline)

To produce HTML preview file called `html-preview.html` from XML file `latest-catalog.xml` using XSLT transformation `imaginary-html.xsl`, using Saxon, use

```bash
java -cp saxon-he-10.0.jar net.sf.saxon.Transform -t -s:latest-catalog.xml -xsl:imaginary-html.xsl -o:html-preview.html
```     

Of course you will substitute the names and paths with your own.

The flags here:

- `-cp` Java classpath (followed by the class to invoke)
- `-t` Run noisy (displaying version and timing info)
- `-s` Path to (primary) source file resource
- `-xsl` Path to transformation (XSLT) resource
- `-o` Path for output file

#### Apache FOP

For easy production of lightly-formatted PDF from HTML, we rely on the open-source Apache FOP processor. Again, this can be switched out: use a different XSL engine or an entirely different HTML-to-PDF pathway for your PDF production.

The Apache Foundation has a 
[Quick Start Guide](https://xmlgraphics.apache.org/fop/quickstartguide.html) for FOP.


*Developers should also take note that the XSLT and XSL code in this repository is written to be standards-conformant, and should have no formal dependency on the tools described here. Any conformant XSLT or XSL-FO processors should be able to execute these transformations as coded - including other versions of Saxon, other current XSLT engines, and other formatting engines supporting XSL (FO). If your testing shows this not to be the case please let us know.*

## Paths and `jar` files

In these examples, all resources are assumed to be present in a local subdirectory, including source document(s) (XML), stylesheets (XSLT) and Java `jar` files. In your own deployment, you might prefer a better arrangement. Adjust your scripts accordingly.



## Applications

In the initial release, we provide support for formatting OSCAL *catalog* documents only. In addition to resources that are published and maintained specifically as catalogs, this class of documents includes also *resolved OSCAL profiles*, inasmuch as the OSCAL profile format (such as the NIST HIGH Baseline) resolves into a nominal catalog (presenting a selection of controls from the base catalog).

Like most stylesheets designed for production, these do not produce runtime errors or warnings for bad inputs, instead working on the principle that all inputs however badly formed should be represented somehow. Nonetheless they have not been tested and cannot be expected to work consistently on input documents that are not formally valid to the OSCAL Catalog schema (XML version).

In these instructions, we call the input document `home-catalog.xml`. It is presumed to be a valid OSCAL XML catalog document (referencing appropriate schemas). Adjust accordingly.

### Generic preview

Apply this XSLT to your OSCAL catalog or to the results of resolving an OSCAL profile (as a catalog baseline).

Generic preview logic attempts to provide any valid input with a "fair and honest" representation. This means that elements that are specifically presentational in their scope (such as paragraphs or inline italic) are simply rendered as such for display, while generic (typed) structures are labeled to indicate their type.

While these transformations provide no validation support as such, even generic logic such as is, applicable to any/all valid OSCAL (considered broadly), might support checking the data "by eye", to an extent.

This stylesheet is also designed to be easily extended by inclusion (importing) into other stylesheets. The next stylesheet **NIST emulation** imports the generic preview XSLT for its fallback logic, as a demonstration of how to do this.

### NIST emulation

This XSLT produces a more polished formatted result than the rough previews. They rely on the preview stylesheets for fallback processing, but they provide their own formatting in emulation of a styled (formatted) NIST publication.

It is designed to work specifically with OSCAL as exemplified in test and common samples, such as the SP800-53 catalogs or baselines derived from them.

Like the generic preview stylesheet (which this stylesheet imports), this can also serve also as the site of extension; that is, you can build on this logic to add support for specialized data constructs appearing in OSCAL, or simply to modify how they handle the basics.

## Setup and use

These applications are implemented as transformations, each one with a nominal input and output.

Developers will note, however, that the two formats are not produced the same way: while the HTML is produced directly from the OSCAL, the PDF is produced from the HTML. Deploying a PDF pathway from HTML instead of from OSCAL directly offers several advantages for development; the close alignment it guarantees between the two views may also be useful to users.

In this simple deployment, two steps are combined to produce a PDF. Running both processes in a single step is also possible using any of a number of pipelining architectures or environments (typically by making a PDF, but not holding onto the HTML). Developers should feel free to "borrow" these sheets for use in applications with more amenable user interfaces.

## Customization

Either or both of these XSLT transformations may be further customized, either by direct intervention or by importing or including into local/customizing XSLT stylesheets.

## Tooling and command-line syntax

We recommend, and describe for these purposes, the SaxonHE processor. At time of writing this has been recently released in version 10.

Here is the syntax for:

1. Producing a generic HTML preview from an OSCAL catalog
   - providing a runtime CSS configuration for "skinning"
1. Producing a "NIST emulation" HTML from an OSCAL catalog
   - same "skinnability" feature

1. Producing a PDF from the generic preview HTML
1. Similarly producing a PDF from the NIST emulation HTML

Note that **profile resolution**, that is the process of making a catalog representation from an OSCAL profile or baseline, is not supported by this tool. These transformations can make display versions (HTML and PDF) of a catalog that is made by such resolution.


### Generic preview

Produce a readable and browsable rendering of an OSCAL catalog or SSP.

Makes HTML or PDF.

(produce HTML for a catalog)

```
saxon straight up
```

(parameterize CSS)
```
saxon straight up
```

 outputs even without changing the underlying XSLT transformation.

### NIST emulation

These applications depend on *generic preview* to run and can be considered to be an add-on or customization of it. We offer two applications:

- A presentation of a catalog that renders it after the form of the published version of NIST SP800-53


