# Baseline Matrix CSX Demonstration

`_index.md` for Hugo consumption is made by trimming down `index.html`.

`index.html` is available for local testing.

Note that the paths to CSS (in the header) and SaxonJS (in the script) are not the same.

## To compile the XSLT into SEF:

Requires `xslt3` under `npm` (with `SaxonJS`).

```
$ xslt3 -xsl:profile-matrix.xsl -export:profile-matrix.sef.json -nogo
```

Also notice the XSLT has a different name from the application.

## To test

Run `http-server` or the equivalent. Examine the `index.html` as served to the browser.

## To publish under Hugo

Into ../../docs/content/demos/csx/baseline-matrix

- `_index.md` (compare with `index.html` for adjustments)
- `profile-matrix.sef.json`

Into ../../docs/assets/css/csx/

- `baseline-matrix.css`

The application also depends on `../NIST_SP-800-53_rev5_catalog.xml` in the next directory up.
 