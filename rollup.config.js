// rollup.config.js
export default {
    input: 'parseMetaRefresh.js',
    output: {
        banner: '/* @requires /core/module/module.js */',
        file: 'dist/parseMetaRefresh.js',
        format: 'iife',
        strict: false
    }
};