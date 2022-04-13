const { PurgeCSS } = require('purgecss');
const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const STATIC_DIR_PATH = '/static/v9f09b073/imei';

const outputPath = path.join(__dirname, 'dist/bundle.css');

const exampleTemplatePages = [
    'https://www.imei.info/phonedatabase/blackberry-evolve/',
    'https://www.imei.info/phonedatabase/samsung-galaxy-a33-5g/',
    'https://www.imei.info/phonedatabase/apple-iphone-se-2022/'
];

(async () => {
    const content = [];

    for (let url of exampleTemplatePages) {
        content.push({
            raw: await fetch(url).then((res) => res.text()),
            extension: 'html'
        });
    }

    const out = await new PurgeCSS().purge({
        css: ['./src/css/*.css'],
        content
    });
    const css = out.reduce((css, obj) => {
        css += obj.css + '\n';
        return css;
    }, '');

    const output = new CleanCSS({}).minify(css);
    fs.writeFileSync(
        outputPath,
        output.styles.replaceAll('STATIC_DIR_PATH', STATIC_DIR_PATH)
    );
})();
