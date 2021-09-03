const { path } = require('@vuepress/utils')

module.exports = (options = {}, ctx) => ({
    define: {
        __SELECTOR__: options.selector || 'div[class*="language-"] pre',
        __ALIGN__: options.align || 'bottom',
        __COLOR__: options.color || '#27b1ff',
        __BACKGROUNDCOLOR__: options.backgroundColor || '#0075b8',
        __BACKGROUNDTRANSITION__: options.backgroundTransition !== false,
        __SUCCESSTEXT__: options.successText || 'Copied!',
        __STSTICICON__: options.staticIcon === true

    },
    clientAppEnhanceFiles: path.resolve(__dirname, 'appFile.js'),
    clientAppSetupFiles: path.resolve(__dirname, 'clientAppSetup.ts')
})
