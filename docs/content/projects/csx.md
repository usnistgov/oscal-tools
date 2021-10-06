---
title: "CSX Applications"
description: "Client-side XSLT - process your data in the browser locally"
heading: "CSX: Client-side XSLT"
toc:
  enabled: true
---

Client-side [XSLT](https://www.w3.org/TR/xslt-30/) is an architecture in which application logic is distributed to web clients (browsers) to apply to data under local control, without exposure. This project focused on applications built using the [SaxonJS](https://www.npmjs.com/package/saxon-js) implementation of XSLT 3.0, which functions in late-model web browsers. Source code in XSLT is compiled into a JSON transformation 'plan', which can be downloaded with a page and applied by SaxonJS on the user's machine. Especially of interest to us (although not exclusively) were scenarios in which the data to be processed (main transformation input or source) belongs to, and remains in the custody of, the user. CSX is appealing here because the user presumably wants to see the results of processing the data, but does not wish to expose either data or results to anyone (or at any rate anyone not already authorized and inside). OSCAL offers examples of such use cases in the creation (derivation or authoring), display, analysis, and validation of catalogs, profiles and other information types.

See the [CSX Demonstrations](/demos/csx) page for more specifics on each of the demonstrations.

## Why client-side?

Simply put, an application running entirely on a user's system has no need to guard data in transit (over any network) or in a foreign system (where it tends to persist) as long as nothing is ever transmitted. Data loaded into a web browser in isolation is not always entirely secure (depending on what other pages a user may have open or what plugins are installed), but it is more easily secured than the combination of browser, remote server(s) and channels (protocols) that characterizes a typical client/server deployment supporting local data processing.

More broadly, CSX combines the advantages of a lightweight deployment model with the power of general-purpose XSLT and the flexibility, adaptability and transparency of declarative programming. XSLT enables us to prototype rapidly, thus focusing on *demonstration of functionality and capability*. As these technologies and applications mature, we hope these demonstrations are succeeded by others.

## Limitations

Currently these applications support only OSCAL XML, not OSCAL JSON (with the exception of the JSON-to-XML converter).




