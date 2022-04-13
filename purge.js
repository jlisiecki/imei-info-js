const cssPurge = require('css-purge');
const fs = require('fs');
const path = require('path');

const STATIC_DIR_PATH = '/static/v9f09b073/imei';

const cssDirPath = path.join(__dirname, 'src/css');
const outputPath = path.join(__dirname, 'dist/bundle.css');

const cssPaths = [
    cssDirPath + '/bootstrap.css',
    cssDirPath + '/main.css',
    cssDirPath + '/icons.css'
];

const css = cssPaths.reduce((output, path) => {
    output += fs.readFileSync(path, 'utf-8');
    return output;
}, '');

cssPurge.purgeCSS(css, {}, (err, output) => {
    if (err) return console.log(error);
    const css = output.replaceAll('STATIC_DIR_PATH', STATIC_DIR_PATH);
    fs.writeFileSync(outputPath, css);
});
