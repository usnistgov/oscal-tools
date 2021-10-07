---
title: CSX - Client-side XSLT
description: Process your OSCAL data in the web browser (load but no upload)
toc:
  enabled: true
suppresstopiclist: true 
---

Client-side [XSLT](https://www.w3.org/TR/xslt-30/) (CSX) is an architecture in which application logic written in XSLT (a declarative fourth-generation language) is distributed to web clients (browsers) to apply to data under local control, without exposure. These particular applications depend on the [SaxonJS](https://www.saxonica.com/saxon-js/documentation/index.html) implementation of XSLT within nodeJS or browser execution frameworks.

Several of these applications were first offered at [Balisage: The Markup Conference 2021](https://www.balisage.net/Proceedings/vol26/cover.html), and are reproduced here with grateful acknowledgement to conference organizers and attendees (as well as to NIST colleagues) for helping to motivate their longer-term support and maintenance. Early versions were hosted on the developer's [personal repository](https://github.com/wendellpiez/XMLjellysandwich), which still hosts a number of [interesting CSX applications](https://wendellpiez.github.io/XMLjellysandwich/) not based on OSCAL.

Notwithstanding this support these applications should be regarded as *experimental* and suitable primarily for *demonstration* and *testing*. 

## Current demonstrations

{{< accordian >}}
{{< accordian-entry heading="Baseline Matrix">}}

[Link to the Baseline Matrix demo](baseline-matrix "Baseline Matrix demo")

The Baseline Matrix provides display for your OSCAL profile in the style of presentation (a tabular layout) given in the official NIST publication [NIST SP 800-53B](https://doi.org/10.6028/NIST.SP.800-53B), **Control Baselines for Information Systems and Organizations**, Chapter III.

Instead of listing the control selections of the official baselines, however, this application lists the control selection given by any OSCAL profile provided by the user at runtime (subject to certain limitations as described).

As a demonstration it is intended to illustrate some of the potential of a common format such as OSCAL: at the same level of effort, the design and implementation of legible output, even with high production values, can now be done not only for a single publication, but for an entire class of documents that share formatting requirements.

{{< /accordian-entry >}}
{{< accordian-entry heading="Import Examiner">}}

[Link to the Import Examiner demo](import-examiner "Import Examiner demo")

The OSCAL Import Examiner provides a service of *targeted validation*: it tests and presents reports on an OSCAL profile offered by the user, indicating how well it functions when considered as an overlay with respect the standard NIST SP800-53 OSCAL control catalog (as published by NIST), or to any of the standard baselines. In short, the application shows whether the document's control imports are viable, assuming SP800-53 is its (proximate or ultimate) source for control identifiers.

As an application its practical usefulness is limited to authors of profiles based on the SP 800-53 catalog in particular, or a baseline derived from it (while the same application could also be mounted for any other control sources). As such its best use will be as a cross-check against processes in place to confirm a profile's adequacy (correctness), or as a quick way to examine a new profile for possible issues. As a demonstration, it shows a species of application with very broad capabilities in general: a harness for code addressing any set of validation requirements expressible in XPath/XSLT.

{{< /accordian-entry >}}
{{< accordian-entry heading="Schema Emulator">}}

[Link to the Schema Emulator demo](validator "Schema Emulator")

Picking up from the Import Examiner, the Schema Emulator explores the idea that if a person can write application logic to test constraints over OSCAL data, so can a code generator (given an appropriate information source); and thus a machine-generated XSLT transformation can test the same set of constraints as are declared in an OSCAL metaschema, and as are commonly enforced by a schema language such as XML Schema Definition (XSD) or JSON Schema.

In this case, the rules asserted by the OSCAL Catalog Model (metaschema) are expressed by an XSLT that produces error reports when presented with data that violates the model described. *This is work in progress*.

{{< /accordian-entry >}}
{{< accordian-entry heading="Baseline Reviewer">}}

[Link to the Baseline Reviewer demo](baseline-reviewer)

Like the [Baseline Matrix](baseline-matrix "Baseline Matrix demo"), this application provides a dynamic, formatted rendering of a user's OSCAL profile, except not in the form of a formatted document (tables of controls with checks showing selections) but rather a panoramic or "birds-eye view" of the catalog as a whole, with selected controls highlighted.

{{< /accordian-entry >}}
{{< accordian-entry heading="Format Converters">}}

- [Link to the JSON-to-XML catalog converter](format-converter/fromjson/catalog)
- [Link to the XML-to-JSON catalog converter](format-converter/fromxml/catalog)

The OSCAL project publishes format converter stylesheets to produce [JSON from XML](https://github.com/usnistgov/OSCAL/tree/main/xml/convert) or [XML from JSON](https://github.com/usnistgov/OSCAL/tree/main/json/convert). These demonstrations apply these transformations to content copied or uploaded into your browser, permitting you to save the results locally.

{{< /accordian-entry >}}
{{< /accordian >}}

