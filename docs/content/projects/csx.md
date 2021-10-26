---
title: "CSX Applications"
description: "Client-side XSLT - process your data in the browser locally"
heading: "CSX: Client-side XSLT"
toc:
  enabled: true
usabanner: true
---

Client-side [XSLT](https://www.w3.org/TR/xslt-30/) is an architecture in which application logic is distributed to web clients (browsers) to apply to data under local control, without exposure. This project focused on applications built using the [SaxonJS](https://www.npmjs.com/package/saxon-js) implementation of XSLT 3.0, which functions in late-model web browsers (writing in 2021). Source code in XSLT is compiled into a JSON transformation 'plan', which can be downloaded with a page and applied by SaxonJS on the user's machine. Especially of interest to us (although not exclusively) were scenarios in which the data to be processed (main transformation input or source) belongs to, and remains in the custody of, the user. CSX is appealing here because the user presumably wants to see the results of processing the data, but does not wish to expose either data or results to anyone (or at any rate to anyone not already authorized and inside the system). OSCAL offers examples of such use cases in the creation (derivation or authoring), display, analysis, and validation of catalogs, profiles and other information types.

These demonstrations were designed and deployed for the purposes of testing current capabilities, while providing examples of different ways of leveraging OSCAL &mdash; both available OSCAL data (such as control catalogs and baselines) and OSCAL as a set of rules (thus, new catalogs or baselines such as those provided by a user).

See the [CSX Demonstrations](/demos/csx) page for more specifics on each of the demonstrations.

Community members are invited to ask questions or offer feedback in any form or channel including [Github Issues](https://github.com/usnistgov/oscal-tools/issues) and the [OSCAL Gitter channel](https://gitter.im/usnistgov-OSCAL/Lobby). We regard feature requests as indicators of success.

## Why client-side?

When the application is delivered to the user, the user's data never has to leave the user's system. It is never exposed either in transit or from any copy's persisting over time in some other system. Data loaded into a web browser in isolation is not always entirely secure (depending on what other pages a user may have open or what plugins are installed), but it is more easily secured than the combination of browser, remote server(s) and channels (protocols) that characterizes a typical client/server deployment supporting local data processing.

This factor alone means that "thick client" applications have built-in advantages for OSCAL applications. What XSLT (along with user-event bindings provided by SaxonJS) brings to this is discrete layering(s) between model, view and controller (and hence better use of HTML/CSS/JS); a powerful general-purpose transformation language with declarative syntax well suited to development and rapid (relatively lightweight) deployment; and perhaps most importantly, an easy way to expose and exploit the semantics captured in OSCAL XML. On an OSCAL foundation, XSLT enables us to prototype rapidly, thus focusing on *demonstration of functionality and capability*. As these technologies and applications mature, we hope these demonstrations are succeeded by others.

## Limitations

Currently these applications support only OSCAL XML, not OSCAL JSON (with the exception of the JSON-to-XML converter).




