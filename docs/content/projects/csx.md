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

When the application is delivered to the user, the user's data never has to leave the user's system. It is never exposed, either in communication with a server or due to any copy's persisting over time in some other system. Data loaded into a web browser in isolation is not always entirely secure (depending on what other pages a user may have open or what plugins are installed), but it is more easily secured than the combination of browser, remote server(s) and channels (protocols) that characterizes a typical client/server deployment supporting  data processing, whether distributed or centralized.

This factor alone means that "thick client" applications have built-in advantages for OSCAL applications (which tend to be sensitive to risks of data exfiltration). It must be noted that this is not an *intrinsic* feature of the technology - an application that spies on the user, studying not only data but interactions with it -- is presumably just as feasible on a CSX platform as it is on a pure-Javascript platform (for example). The difference is that a CSX application is easier to build, test and validate with security considerations in mind.

What XSLT (along with user-event bindings provided by SaxonJS) brings to this is discrete layering(s) between model, view and controller (and hence better use of HTML/CSS/JS); a powerful general-purpose transformation language with declarative syntax well suited to development and rapid (relatively lightweight) deployment; and perhaps most importantly, an easy way to expose and exploit the semantics captured in OSCAL XML. On an OSCAL foundation, XSLT enables us to prototype rapidly, thus focusing on *demonstration of functionality and capability*. As these technologies and applications mature, we hope these demonstrations are succeeded by others.

## XSLT 3.0 and SaxonJS

These applications rely on SaxonJS, developed and distributed by [Saxonica](https://www.saxonica.com/welcome/welcome.xml). SaxonJS is a conformant implementation of [XSL Transformations (XSLT) Version 3.0](https://www.w3.org/TR/xslt-30/), an externally specified, non-proprietary (i.e. "standardized") declarative language published by the World Wide Web Consortium as part of the [XML](https://www.w3.org/XML/) family of standards.

Authored in XSLT and available for inspection in the Github repository, these stylesheets are not executable as such (that is, absent any calling application that implements XSLT or embeds an XSLT engine); in compiled form (as SEF files) they are non-operable in any context but SaxonJS. They can, however, be inspected and tested independently of Saxon, as well as refitted to work in other environments.

The [licensing terms of SaxonJS](https://www.saxonica.com/saxon-js/index.xml#license) permit free distribution of the Javascript application that provides for execution, in the browser, of the stylesheets as provided (in compiled form), so that end users can use the tool as deployed, transparently and without encumbrance. At the same time, with regard to outputs expected for given inputs, processes applied to data are entirely as directed by the stylesheet (not the implementation) and thus within the scope of the developer to define and limit as appropriate. Compiling of the XSLTs for these applications was performed as prescribed using nodeJS (and not under automation), as documented in each application's `readme.md`. The replicability of the steps of this process helps ensure traceability.

In the context of this dependency, it is worth stressing that while a goal of this project is to demonstrate capability, this is in order not that a particular solution should be promoted, so much as that similar capabilities, where actually useful, can be replicated and emulated using any suitable tool. 

## Limitations

Currently these applications support only OSCAL XML, not OSCAL JSON (with the exception of the JSON-to-XML converter).

Because the XML parser used by SaxonJS is limited by default to a subset of XML (specifically excluding external parsed entities), YMMV when it comes to XML with active `DOCTYPE` declarations. Protect against these issues by normalizing your XML into a standalone form first. For similar reasons, UTF-8 is recommended.



