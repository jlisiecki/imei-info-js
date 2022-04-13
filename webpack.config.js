const path = require('path');
const { ProvidePlugin } = require('webpack');
module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
