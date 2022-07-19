---
title: "OSCAL CAT"
description: "OSCAL Catalog Authoring Tool (CAT) - import, edit, and export OSCAL Profiles from the browser"
heading: "CAT: OSCAL Catalog Authoring Tool"
toc:
  enabled: true
usabanner: true
---

## What is CAT?

The OSCAL Catalog Authoring Tool (CAT) enables users to create, scope, tailor control catalogs by creating [OSCAL Profiles in JSON format](https://pages.nist.gov/OSCAL/reference/latest/profile/json-reference/) and subsequently create new catalogs using [profile resolution](https://pages.nist.gov/OSCAL/concepts/processing/profile-resolution/).

## How does CAT work, is it right for me?

CAT is designed in a convenient, web-based form factor and user-friendly interface. Users can quickly focus on what matters: creating or customizing their control catalog by making profiles, all within the familiar experience of their preferred web browser. The interface allows users to generate a profile by manipulating the controls of the imported catalog, without a detailed understanding of the OSCAL's information or data models. The focus is the content.

CAT is a self-contained web application that runs within the user's preferred browser. After, the user downloads the application's content from the server upon the first load, all processing is performed within the user's preferred browser. More advanced users can run the application locally on their own computer or an isolated network without internet access. (If you are interested in these more advanced use cases, [let the team know through GitHub](#how-do-i-request-support-with-my-own-deployment-of-oscal-cat-report-bugs-or-file-features).)

## What are CAT's features? What can I do with profiles?

At this time, CAT enables users with a variety of features to declare [an OSCAL profile](https://pages.nist.gov/OSCAL/reference/latest/profile/) and subsequently generate [an OSCAL catalog](https://pages.nist.gov/OSCAL/reference/latest/catalog/) with an external profile resolver.

- CAT's Author Mode allows users to:
  - edit [metadata in the profile](https://pages.nist.gov/OSCAL/reference/latest/profile/json-reference/#/profile/metadata).
  - create profiles to customize from the whole of [NIST SP 800-53 controls](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final), or derive baselines from the published [SP 800-53B baseline defaults](https://csrc.nist.gov/publications/detail/sp/800-53b/final).
    - customize individual control content.
    - tailor and scope controls.
  - save OSCAL JSON profiles for reusability and sharing across organizations and technologies.
- CAT's Review Mode allows users to review content for accuracy and correctness.

Interested in improving these features, or have ideas for new features altogether? [Let the team know through GitHub](#how-do-i-request-support-with-my-own-deployment-of-oscal-cat-report-bugs-or-file-features).

## How do I use CAT now?

To use CAT now, visit the demo site at [pages.nist.gov/oscal/tools/demos/cat](https://pages.nist.gov/oscal/tools/demos/cat).

## What is the current development status of OSCAL CAT?

The OSCAL CAT application is still under active development. The application's maturity is not yet stable and feature complete. It is [beta software](https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta).

Please review [the application's source code repository](https://github.com/usnistgov/oscal-cat/) for detailed information about development status, upcoming features, and bug fixes.

## How do I request support with my own deployment of OSCAL CAT, report bugs, or file features?

The developers of OSCAL CAT will provide support on a best-effort basis by responding to the general community [by opening issues on GitHub](https://github.com/usnistgov/oscal-cat/issues/new). Interested community members are also encouraged to select and implement the features of interest.
