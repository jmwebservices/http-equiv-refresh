// rollup.config.js
export default {
    input: 'BSI/core/metaRefresh/parse/parse.js',
    output: {
        banner: [ '/* ', '@requires /core/metaRefresh/metaRefresh.js', `DO NOT EDIT! AUTO GENERATED ON ${ Date() } BY ${ __filename }`, '*/' ].join( "\n " ),
        file: 'dist/BSI/core/metaRefresh/parse/parse.js',
        format: 'iife',
        strict: false
    }
};