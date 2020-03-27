# OSCAL Publishing Demos

In this repo are XSLT transformations that together form a starter/demo OSCAL publishing platform. It is designed to be freely adapted, used, and reverse engineered.

XSLT transformations can be applied to XML data to produce results (outputs) in various formats, including other forms of XML, HTML or PDF (for processing by software that know how to read those). Since this is a publishing application (that is, aiming at legible display for human readers), we aim at HTML (readily installed into any web site) and PDF.

While the application semantics of the various targets of OSCAL processing are open-ended, it also remains the case that human-readable versions and representations of all these data sets will remain indispensable, even at different stages of creation, production, processing and review. Accordingly, the generic logic provided in these utilities may be useful and adaptable across a wide range of scenarios, wherever OSCAL is involved.

Neither the HTML nor the PDF outputs produced by this software is or can be warranted for any purpose. They are published mainly for the purpose of providing a starting point for others.

To set up and run this software requires development skills. It is possible to embed these stylesheets in systems used by persons (human operators) who invoke this software without being able to install or test it. This readme is not for those users (who do not know enough for it to be useful), or even for advanced developers who plan to embed the software in their own (who probably know too much, and can learn what they need by skimming). Rather, it aims at the developer who needs to test and demonstrate the capability -- and, perhaps, produce useful HTML or PDF from OSCAL inputs -- without (yet) being able to adapt it or run it at scale.

At the same time, the resources are designed such that more advanced users especially with XSLT skills will be able to drop these stylesheets into any framework supporting XSLT 3.0. With these use cases in mind, interfaces are designed to be as simple as possible, with minimal parameterization or runtime options, and the XSLT code itself is provided with internal documentation.

(Devs please feel free to offer feedback about how we can make it easier.)

## Prerequisites for this guide

* You are comfortable at the command line (e.g. *nix, Mac, Windows shell)
* You are comfortable installing and running Java applications

The Java applications are SaxonHE (open source XSLT 3.0 engine from Saxonica) and Apache FOP. HTML can be produced using Saxon only. PDF requires the combination of Saxon and FOP.

SaxonHE is produced by Saxonica, Inc. and documented as part of commercial offerings [links]. Windows users may note that a standalone Windows installation of Saxon is also available, which should also work.

FOP is documented [...]

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


