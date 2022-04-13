# IMEI.info JS and CSS Bundler

Usage:

```
git clone https://github.com/jlisiecki/imei-info-js.git
cd imei-info-js
npm i -D
npm run build
```

"bundle.js" & "bundle.css" file will be placed in "dist/"

Just place in `<head>` section under GTM code with "defer" attribute:

```
<script src="./dist/bundle.js" defer></script>
```

Place contents of ./dist/bundle.css as inline `<style></style>` in `<head>` section after "preloads" of "banner.jpg" variants.
