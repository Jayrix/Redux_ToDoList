const path = require('path');

module.exports = {
    entry: './src/js/reducers/reducers.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    watch : true
};