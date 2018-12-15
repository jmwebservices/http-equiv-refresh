// rollup.config.js
export default {
    input: 'BSI/modules/metaRefresh/parse/parse.js',
    output: {
        banner: [ '/* ', '@requires /core/module/module.js', `DO NOT EDIT! AUTO GENERATED ON ${ Date() } BY ${ __filename }`, '*/' ].join( "\n " ),
        file: 'dist/BSI/modules/metaRefresh/parse/parse.js',
        format: 'iife',
        strict: false
    }
};