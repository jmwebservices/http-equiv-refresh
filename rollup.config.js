// rollup.config.js
export default {
    input: 'parseMetaRefresh.js',
    output: {
        banner: '/* @requires /core/str/str.js */',
        file: 'dist/parseMetaRefresh.js',
        format: 'iife',
        strict: false
    }
};