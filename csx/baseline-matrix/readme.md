# Baseline Matrix CSX Demonstration

`_index.md` for Hugo consumption is made by trimming down `index.html`.

`index.html` is available for local testing.

Note that the path to SaxonJS is not the same.

To compile the XSLT into SEF:

```
$ xslt3 -xsl:profile-matrix.xsl -export:profile-matrix.sef.json -nogo
```

Notice the XSLT has a different name from the application.

## To be copied into ../../docs/content/demos/csx/baseline-matrix

- `_index.md` (compare with `index.html` for adjustments)
- `profile-matrix.sef.json`

Also depends on `../NIST_SP-800-53_rev5_catalog.xml` in the next directory up.
 