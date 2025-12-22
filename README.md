# Large dist demo site

This is an example of a site that has a large number of generated files in astro. It is intended to test out scaling astro deployments. 

# rangefs

It is also a demo site for [rangefs](https://github.com/polvi/rangefs). See the worker entry point in `src/worker.ts` and `astro.config.mjs`.

# try it out

```
bun install
```

```
bun run build
```

Notes: 

`public/.assetignore` currently ignores all files, so that the astro worker handles every request, giving it an entrypoint to using rangefs for lookups.
