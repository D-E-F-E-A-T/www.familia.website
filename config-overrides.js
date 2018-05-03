const { injectBabelPlugin: RewireInject } = require('react-app-rewired');
const RewireCssModules = require('react-app-rewire-css-modules');
const RewireHotReload = require('react-app-rewire-hot-loader');

/* eslint-disable no-param-reassign */
module.exports = function override(config, env) {

    // Enable hot module reloading, and preserve the state.
    config = RewireHotReload(config, env);

    // Treat "~" ad an alias for the src (root) directory.
    config = RewireInject(['root-import', {
        rootPathPrefix: '~',
        rootPathSuffic: 'src',
    }], config);

    // Enable CSS modules (using sass)
    config = RewireCssModules(config, env);

    return config;
};
/* eslint-enable no-param-reassign */
