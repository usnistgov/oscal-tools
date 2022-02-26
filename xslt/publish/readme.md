
# OSCAL Publishing Demos

The repository provides XSLT transformations that together form a starter/demo OSCAL publishing platform. The stylesheets are in the public domain, and are designed to be freely used, adapted, and reverse engineered.

For all work in this repository the standard NIST DISCLAIMER applies, as documented here: https://www.nist.gov/disclaimer

(Also copied below as of February 2022.)

XSLT transformations can be applied to XML data to produce results (outputs) in various formats, including other forms of XML, HTML or PDF (for processing by software that know how to read those formats). Since this is a publishing application (that is, aiming at legible display for human readers), we aim at HTML (readily installed into any web site) and PDF.

Neither the HTML nor the PDF outputs produced by this software is or can be warranted for any purpose. They are published mainly for the purpose of providing baseline functionality, as a starting point for others.

## XSLT Version

Unless marked otherwise, assume that XSLT in this repository conforms to version 3.0 and may exploit 3.0 features. Accordingly it will not run in older XSLT engines: at least Saxon version 10 is recommended (any platform or license, or the free-to-use Saxon 10 HE).

Some stylesheets may conform to older versions including XSLT 1.0 for use in browsers, but these will be special purpose.

See more below under "XSLT Dependencies".

## Summary of XSLT transformations available

### Producing HTML (web pages)

To produce a "clean" legible catalog as an HTML page, use `generic-preview/oscal_catalog_html.xsl` as your entry point. From a valid OSCAL XML catalog, this produces HTML, with some 'ornamentation' to reflect the OSCAL structure.

For "NIST emulation" output, use `nist-emulation/sp800-53A-catalog_html.xsl` as your entry point. This also produces HTML, except it is enhanced with styling to resemble a formal publication. (While the "emulation" is loose here, this rendering respects some special features of OSCAL usage in the published NIST catalog.) This XSLT imports the `generic-preview` XSLT.

The XSLT can also be customized, whether by patching, layering, or pipelining, to produce enhanced outputs given consistent usage patterns in your OSCAL.   

**Note: neither of these renditions by any means guarantees that a data set is fit for any purpose! They are only renditions. GARBAGE IN GARBAGE OUT.**

### Producing PDF

To create PDFs, supplement either of these transformations with a second step, applied to the HTML representations produced above. These create XSL formatting objects suitable for processing in a conformant XSL formatter, including commercially available formatters.
The XSLT to apply in this step is `nist-emulation/oscal_sp800-53-emulator_fo.xsl`. It can be applied to (XML-conformant) HTML produced by either of the HTML transformations.

Where XSL-FO is not well supported, other means of producing PDFs are however also viable, either as applied directly to OSCAL, or producing PDFs from the same (HTML) or other intermediary resources; for those who need formatted (printable) pages, more expedient methods may be available.

### Adjusting results with runtime parameters

These are wired into `generic-preview/oscal_catalog_html.xsl` but available to both transformations at runtime:

- `css-path` (string) A literal value providing a path to a CSS. If this value is not given, CSS is written into the HTML file.
- `with-toc` (string `yes|no`) Whether to provide a table of contents (by default, yes).

### Customizing these stylesheets

#### Via CSS

The easiest quickest customization can be achieved by modifying the CSS. The file `css/oscal-catalog_html.css` contains CSS that is included (as literal data) into HTML results by default; this can be rewritten or overwritten.

Alternatively (more robustly) the `css-path` parameter used to point the HTML page to any path to a customized or rewritten) CSS file to be applied to the page.

Since OSCAL structural semantics are reflected directly in the HTML class structure, this is a reasonable way of accomplishing many basic adjustments to global look-and-feel.

#### Via XSLT

Where CSS applied to the generic results is not sufficient -- and especially to support advanced functionality such as indexing, dynamic analysis or data validations -- the XSLT can also be imported, supplemented, rewritten or adapted.

## Command-line use

If you are familiar with XSLT transformations, and have a preferred environment for applying XSLT to XML, you can probably skip this section. If what you need to know is not given in the summary above, please let us know.

### Prerequisites for this guide

* You are comfortable at the command line (e.g. *nix, Mac, Windows shell)
* You are comfortable installing and running Java applications

Developers should take note that these transformations are designed to be integrated and embedded into end-user applications. These instructions apply only for producing outputs in a "bare bones" environment, for testing or lightweight use.

The stylesheets described, however, can be used inside any architecture or stack supporting XSLT, and are designed with simple interfaces (single file input, single result output, limited parameterization) to make this easier. In most cases, configuration for these tools can be readily inferred from the command line syntax offered here.

### XSLT dependencies

The XSLT is documented internally, but developers can assume that features of XSLT 3.0 are sometimes exploited, meaning these stylesheets will generally not run correctly, unaltered, in an XSLT 1.0 environment.

The Saxon processor from Saxonica.com is the leading XSLT 3.0 processor and has been used for testing. Its open-source version is recommended. However, the XSLT code is conformant to standards and should also run in any (conformant) XSLT 3.0 engine.

### Java

The Java applications we rely on here are SaxonHE (open source XSLT 3.0 engine from Saxonica) and Apache FOP. HTML can be produced using Saxon only. PDF requires the combination of Saxon and FOP.

Since the HTML production does not require FOP, it can be achieved using an XSLT engine running on another platform, such as Saxon-C.


#### Saxon

[https://sourceforge.net/projects/saxon/files/Saxon-HE/](https://sourceforge.net/projects/saxon/files/Saxon-HE/)SaxonHE is produced by Saxonica.com and documented as part of commercial offerings
[https://www.saxonica.com/products/products.xml](https://www.saxonica.com/products/products.xml) [links].

To back up this guide, see especially documentation on  
[Getting started on Java](https://www.saxonica.com/documentation/index.html#!about/gettingstarted/gettingstartedjava) page and the page on 
[Running XSLT from the Command Line](https://www.saxonica.com/documentation/index.html#!using-xsl/commandline)

To produce HTML preview file called `html-preview.html` from XML file `latest-catalog.xml` using XSLT transformation `imaginary-html.xsl`, using Saxon, use

```bash
> java -cp saxon-he-10.0.jar net.sf.saxon.Transform -t -s:latest-catalog.xml -xsl:imaginary-html.xsl -o:html-preview.html
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

**Note that as delivered, however, FOP supports only XSLT 1.0.** To reset FOP to use Saxon instead of the Java-native (XSLT 1.0) Xalan processor, requires two steps:

1. Ensure that SaxonHE is on the system classpath when FOP is invoked.
1. Modify the calling instruction to add the flag `-Djavax.xml.transform.TransformerFactory=net.sf.saxon.TransformerFactoryImpl`. (Or configure the equivalent programmatically)

(See [this stackoverflow post]( https://stackoverflow.com/questions/19379070/how-to-change-apache-fop-xalan-xslt-processor for more.)

The calling instruction is the command to FOP appearing in its `fop.sh` or `fop.bat` shell scripts, as delivered.

FOP is also, however, available in other forms such as XProc engines (XML Calabash) and IDEs, which typically provide better integration with XSLT 3.0 and may be more suitable for regular use.
  
*Developers should also take note that the XSLT and XSL code in this repository is written to be standards-conformant, and should have no formal dependency on the tools described here. Any conformant XSLT or XSL-FO processors should be able to execute these transformations as coded - including other versions of Saxon, other current XSLT engines, and other formatting engines supporting XSL (FO). If your testing shows this not to be the case please let us know.*


## Applications

In the initial release, we provide support for formatting OSCAL *catalog* documents only. In addition to resources that are published and maintained specifically as catalogs, this class of documents includes also *resolved OSCAL profiles*, inasmuch as the OSCAL profile format (such as the NIST HIGH Baseline) resolves into a nominal catalog (presenting a selection of controls from the base catalog).

Like most stylesheets designed for production, these do not produce runtime errors or warnings for bad inputs, instead working on the principle that all inputs however badly formed should be represented somehow. Nonetheless they have not been tested and cannot be expected to work consistently on input documents that are not formally valid to the OSCAL Catalog schema (XML version).

In these instructions, we call the input document `home-catalog.xml`. It is presumed to be a valid OSCAL XML catalog document (referencing appropriate schemas). Adjust accordingly.


### HTML production

#### Generic preview

Apply this XSLT to your OSCAL catalog or to the results of resolving an OSCAL profile (as a catalog baseline).

Generic preview logic attempts to provide any valid input with a "fair and honest" representation. This means that elements that are specifically presentational in their scope (such as paragraphs or inline italic) are simply rendered as such for display, while generic (typed) structures are labeled to indicate their type.

While these transformations provide no validation support as such, even generic logic such as is, applicable to any/all valid OSCAL (considered broadly), might support checking the data "by eye", to an extent.

This stylesheet is also designed to be easily extended by inclusion (importing) into other stylesheets. The next stylesheet **NIST emulation** imports the generic preview XSLT for its fallback logic, as a demonstration of how to do this.

**To produce HTML for a catalog** (run from a location containing the `generic-preview` subdirectory, the SaxonHE `jar` file, and the XML source file `latest-catalog.xml`; or adjust the paths)

```bash
> java -cp saxon-he-10.0.jar net.sf.saxon.Transform -t -s:latest-catalog.xml -xsl:generic-preview/oscal-catalog_html.xsl -o:latest-html-preview.html
```  

**To produce preview HTML for a catalog, with parameterized CSS file reference**

The same XSLT can be used with a runtime parameter to indicate that CSS should not be embedded, but called out as an external CSS file. Use this option if you wish to externalize CSS either for 'skinning' or to be shared among a set of HTML results.

```bash
> java -cp saxon-he-10.0.jar net.sf.saxon.Transform -t -s:latest-catalog.xml -xsl:generic-preview/oscal-catalog_html.xsl -o:latest-html-preview.html css-path=path/to/styles.css
```  

The resulting HTML will have, in place of literal CSS, a link to the file indicated, as

```
<link rel="stylesheet" href="path/to/styles.css"/>
```

See the Saxon documentation for more on parameter syntax.

**To produce preview HTML for a catalog, without a table of contents**

By default, the preview includes a table of contents. To suppress the table of contents from appearing, use a runtime parameter.

```bash
> java -cp saxon-he-10.0.jar net.sf.saxon.Transform -t -s:latest-catalog.xml -xsl:generic-preview/oscal-catalog_html.xsl -o:latest-html-preview.html with-toc=no
```  

#### NIST emulation

This XSLT produces a more polished formatted result than the rough previews. It relies on the preview stylesheets for fallback processing, but also provides enhanced formatting for catalog structures in emulation of a styled (formatted) NIST publication.

It is designed to work specifically with OSCAL as exemplified in test and common samples, such as the SP800-53 catalogs or baselines derived from them; but it should also "degrade gracefully" into generic-preview logic for other "flavors" of OSCAL catalogs.

Like the generic preview stylesheet (which this stylesheet imports), this can also serve also as the site of extension; that is, you can build on this logic to add support for specialized data constructs appearing in OSCAL, or simply to modify how they handle the basics.

**To produce 'NIST emulation' HTML for a catalog** (run from a location containing the `nist-emulation` and `generic-preview` subdirectories, the SaxonHE `jar` file, and the XML source file `latest-catalog.xml`; or adjust the paths):


```bash
java -cp saxon-he-10.0.jar net.sf.saxon.Transform -t -s:latest-catalog.xml -xsl:nist-emulation/oscal_sp800-53-emulator_fo.xsl -o:latest-catalog-formatted.html
```  

*Note that 'NIST emulation' does not imply any guarantee, warranty or endorsement from NIST.*

**Parameterization**

Since this XSLT is a customization of the generic preview (HTML) XSLT, it accepts the same runtime parameters described above, either to "skin" the CSS or to suppress the Table of Contents.

### PDF production

PDF production is supported by an XSLT 3.0 transformation applied to the HTML (either 'preview' or 'NIST emulation') produced in earlier steps.

A command line for producing a PDF version of the "NIST emulation" HTML, will look like this:

```bash
> ./fop -xml name.xml -xsl name2fo.xsl -pdf name.pdf
```

Note that in order to work, however, the script `fop.sh` will have been modified to call SaxonHE instead of the built-in Java transformation engine (Xalan), which is used by default.


## Customization

Either or both of these XSLT transformations may be further customized, either by direct intervention or by importing or including into local/customizing XSLT stylesheets.

## NIST DISCLAIMER STATEMENT

Also see https://www.nist.gov/disclaimer.

> ### Software Disclaimer
>
> NIST-developed software is provided by NIST as a public service. You may use, copy and distribute copies of the software in any medium, provided that you keep intact this entire notice. You may improve, modify and create derivative works of the software or any portion of the software, and you may copy and distribute such modifications or works. Modified works should carry a notice stating that you changed the software and should note the date and nature of any such change. Please explicitly acknowledge the National Institute of Standards and Technology as the source of the software.
> 
> NIST-developed software is expressly provided "AS IS." NIST MAKES NO WARRANTY OF ANY KIND, EXPRESS, IMPLIED, IN FACT OR ARISING BY OPERATION OF LAW, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT AND DATA ACCURACY. NIST NEITHER REPRESENTS NOR WARRANTS THAT THE OPERATION OF THE SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED. NIST DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OF THE SOFTWARE OR THE RESULTS THEREOF, INCLUDING BUT NOT LIMITED TO THE CORRECTNESS, ACCURACY, RELIABILITY, OR USEFULNESS OF THE SOFTWARE.
> 
> You are solely responsible for determining the appropriateness of using and distributing the software and you assume all risks associated with its use, including but not limited to the risks and costs of program errors, compliance with applicable laws, damage to or loss of data, programs or equipment, and the unavailability or interruption of operation. This software is not intended to be used in any situation where a failure could cause risk of injury or damage to property. The software developed by NIST employees is not subject to copyright protection within the United States.
> 
> [See the NIST Privacy, Security Notice, and Accessibility Statement](https://www.nist.gov/property-fieldsection/privacy-statementsecuritynoticeaccessibility-statement)
> [More information about copyright, fair use and licensing for SRD, data and software](https://www.nist.gov/open/copyright-fair-use-and-licensing-statements-srd-data-software-and-technical-series-publications)
