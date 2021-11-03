const LANGUAGES = ['fr', 'en'];

/**
 * Gets the user preferred language if avaible,
 * Returns 'en' otherwise.
 * @returns the user preferred language
 */
function getPreferredLanguage() {
    if (/^fr\b/.test(navigator.language)) {
        return 'fr';
    }
    return 'en';
}

/**
 * Gets the defined language from cookies if avaible,
 * otherwise returns the preferred language.
 * @returns the defined language
 */
function getLanguage() {
    const lang = Cookies.get('lang');
    return LANGUAGES.includes(lang) ? lang : getPreferredLanguage();
}

/**
 * Sets the defined language and emit the `x-langchange` event
 * if `lang` is valid and different from the current language.
 * @param {string} lang
 */
function setLanguage(lang) {
    if (!LANGUAGES.includes(lang) || lang == getLanguage()) return;
    Cookies.set('lang', lang);
    window.dispatchEvent(new Event('x-langchange'));
}
