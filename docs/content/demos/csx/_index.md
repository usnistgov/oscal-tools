---
title: CSX - Client-side XSLT
description: Demonstrations of Client-side XSLT (CSX)
toc:
  enabled: true
suppresstopiclist: true 
---


Client-side [XSLT](https://www.w3.org/TR/xslt-30/) (CSX) is an architecture in which application logic written in XSLT (a declarative language) is distributed to web clients (browsers) to apply to data under local control, without exposure. These applications depend on the [SaxonJS](https://www.saxonica.com/saxon-js/documentation/index.html) implementation of XSLT within nodeJS or browser execution frameworks.

Several of these applications were first offered at [Balisage: The Markup Conference 2021](https://www.balisage.net/Proceedings/vol26/cover.html), and are reproduced here with grateful acknowledgement to conference organizers and attendees for helping to motivate their longer-term support and maintenance.

Notwithstanding this support these applications should be regarded as *experimental* and suitable primarily for *demonstration* and *testing*. 

{{< accordian bordered=true >}}
{{< accordian-entry heading="Baseline Matrix">}}

The Baseline Matrix provides display for your OSCAL profile in the style (tabular layout) of presentation given in the official NIST publication [NIST SP 800-53B](https://doi.org/10.6028/NIST.SP.800-53B), **Control Baselines for Information Systems and Organizations**, Chapter III.

Instead of listing the control selections of the official baselines, however, this application lists the control selection given by any OSCAL profile (subject to certain limitations as described) provided by the user at runtime.

As a demonstration it is intended to illustrate some of the potential inherent in having a shared format such as OSCAL: at the same level of effort, the design and implementation of legible output, even with high production values, can now be done not only for a single publication, but for an entire class of documents that share formatting requirements.

[Link to the Baseline Matrix demo](/demos/csx/baseline-matrix "Baseline Matrix demo")

{{< /accordian-entry >}}
{{< accordian-entry heading="Import Examiner">}}

The OSCAL Import Examiner provides a service of **targeted validation**: it tests and presents reports on an OSCAL profile offered by the user, indicating how well it functions when considered as an overlay with respect the standard NIST SP800-53 OSCAL control catalog (as published by NIST), or to any of the standard baselines. In short, the application shows whether the document's control imports are viable, assuming SP800-53 is its (proximate or ultimate) source for control identifiers.

As an application its practical usefulness is limited to authors of such profiles (while the same application could also be mounted for any other control sources). As such its best use will be as a cross-check against processes in place. As a demonstration, it shows a species of application with very broad capabilities in general: a harness for code addressing any set of validation requirements expressible in XPath/XSLT.

[Link to the Import Examiner demo](/demos/csx/import-examiner "Import Examiner demo")

{{< /accordian-entry >}}
{{< accordian-entry heading="Schema Emulator">}}

Picking off from the Import Examiner, the Schema Emulator seeks to test the proposition that a machine-generated XSLT transformation can test the same set of constraints as are declared in an OSCAL metaschema, and as are commonly enforced by a schema language such as XML Schema Definition (XSD) or JSON Schema.

In this case, the rules asserted by the OSCAL Catalog Model (metaschema) are expressed by an XSLT that produces error reports when presented with data that violates the model described. *This is work in progress*.

[Link to the Schema Emulator demo](/demos/csx/validator "Schema Emulator")

{{< /accordian-entry >}}
{{< accordian-entry heading="Baseline Reviewer">}}

Like the [Baseline Matrix](/demos/csx/baseline-matrix "Baseline Matrix demo"), this application provides a dynamic, formatted rendering of a user's OSCAL profile, except not in the form of a formatted document (tables of checkboxes) but rather a panoramic or "birds-eye" of the catalog as a whole, with selected controls highlighted.

[Link to the Baseline Reviewer demo](/demos/csx/baseline-reviewer")

{{< /accordian-entry >}}
{{< accordian-entry heading="Catalog Format Converter ">}}

The OSCAL project publishes format converter stylesheets to produce JSON from XML[JSON from XML](https://github.com/usnistgov/OSCAL/tree/main/xml/convert) or [XML from JSON](https://github.com/usnistgov/OSCAL/tree/main/json/convert). These demonstrations apply these transformations to content copied or uploaded into your browser, permitting you to save the results locally.

[Link to the JSON-to-XML converter](/oscal-tools/demos/csx/format-converter/fromjson/")

[Link to the XML-to-JSON converter](/oscal-tools/demos/csx/format-converter/fromxml/")

{{< /accordian-entry >}}
{{< /accordian >}}

