---
title: "CSX Applications"
heading: "CSX: Client-side XSLT"
toc:
  enabled: true
---

Client-side [XSLT](https://www.w3.org/TR/xslt-30/) is an architecture in which application logic is distributed to web clients (browsers) to apply to data under local control, without exposure. These applications depend on the [SaxonJS](https://www.npmjs.com/package/saxon-js) implementation of XSLT 3.0 within nodeJS or browser execution frameworks.

See the [CSX Demonstrations](/demos/csx) page for more specifics on each of the demonstrations.

## Why client-side?

Simply put, an application running entirely on a user's system has no need to guard data in transit (over the wire) or in a foreign system (where it tends to persist), since it does not transmit it. Data loaded into a web browser in isolation is not always entirely secure (depending on what other pages a user may have open or what plugins are installed), but it is more easily secured than the combination of browser, server and channels (protocols) that characterizes a client/server deployment.

More broadly, CSX combines the advantages of a lightweight deployment model with the power of general-purpose XSLT and the flexibility, adaptability and transparency of declarative programming.

## Limitations

Currently these applications support only OSCAL XML, not OSCAL JSON (with the exception of the JSON-to-XML converter).




