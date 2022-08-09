---
title: "OSCAL Deep Diff"
description: "OSCAL Deep Diff - compare OSCAL artifacts programmatically and consistently"
heading: "OSCAL Deep Diff"
toc:
  enabled: true
usabanner: true
---

OSCAL Deep Diff is an open-source CLI application and library that can produce schema-agnostic comparisons of OSCAL JSON artifacts.

OSCAL Deep Diff was built with the following considerations:

- Document comparisons can vary wildly in intention and desired output, so reliance on an input schema is undesirable. The same tool should be able to compare any OSCAL JSON artifacts.
- The comparison must be configurable in order to constrain the output document to meet the user's needs. For example, a consumer comparing revisions of a control catalog may not care about capitalization differences in control names between two documents, but a catalog author may care about such differences.
- Human-readable output formats such as Excel workbooks are appropriate for sharing, but are not appropriate for automated decision making such as a CI/CD system. A document comparison output format should be configurable to match the use case.
- The tool must be portable and extendable so that it can be integrated into other tools, such as web applications.

## How do I use OSCAL Deep Diff?

OSCAL Deep Diff is currently designed as a command line (CLI) tool which can be used without relying on cloud services. For details on how to install and use OSCAL Deep Diff, see the project page [on GitHub](https://github.com/usnistgov/oscal-deep-diff).

OSCAL Deep Diff can also be used as a standalone library for integration into Javascript/Typescript applications. For details, see the [example OSCAL Deep Diff web application](https://github.com/usnistgov/oscal-deep-diff/tree/master/examples/odd-example-frontend).

## How do I request support, report bugs, or file features?

The developers of OSCAL Deep Diff will provide support on a best effort basis to the general community [by opening issues on GitHub](https://github.com/usnistgov/oscal-deep-diff/issues/new).

If you are interested in contributing to OSCAL Deep Diff, see the [contributing document](https://github.com/usnistgov/oscal-deep-diff/blob/master/CONTRIBUTING.md).
