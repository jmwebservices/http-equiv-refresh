// rollup.config.js
export default {
    input: 'parseMetaRefresh.js',
    output: {
        banner: [ '/* ', '@requires /core/module/module.js', `DO NOT EDIT! AUTO GENERATED ON ${ Date() } BY ${ __filename }`, '*/' ].join( "\n " ),
        file: 'dist/parseMetaRefresh.js',
        format: 'iife',
        strict: false
    }
};