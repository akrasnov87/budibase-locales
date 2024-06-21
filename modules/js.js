var i18n = require('i18n')

export function initJSLocales () {
    /**
     * configure shared state
     */
    i18n.configure({
        staticCatalog: {
            ru: require("../locales/ru.json"),
            en: require("../locales/en.json"),
        },
        defaultLocale: "en",
    })
}