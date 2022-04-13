# IMEI.info JS and CSS Bundler

Installation:

```
git clone https://github.com/jlisiecki/imei-info-js.git
cd imei-info-js
npm i
```

To bundle js run:

```
npm run js
```

"bundle.js" file will be placed in "dist/"

Just place in `<head>` section under GTM code with "defer" attribute:

```
<script src="./dist/bundle.js" defer></script>
```

To bundle CSS per template you should modify `exampleTemplatePages` array in purge.js file - replace urls with few represetative pages for choosen template, then run:

```
npm run css
```

Place contents of ./dist/bundle.css as inline `<style></style>` in `<head>` section of choosen template after "preloads" of "banner.jpg" file variants.
