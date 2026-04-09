var _a, _b, _c, _d, _e, _f;
export default {
    siteTitle: (_a = globalThis.document) === null || _a === void 0 ? void 0 : _a.title,
    /* This variable should be set to true in debugging mode only */
    logging: false,
    /* Address of the CDN (where this file should be hosted) */
    cdn: '',
    /* Default language */
    lang: 'en',
    host: ((_b = globalThis.location) === null || _b === void 0 ? void 0 : _b.protocol) + '//' + ((_c = globalThis.location) === null || _c === void 0 ? void 0 : _c.hostname),
    url: (_d = globalThis.location) === null || _d === void 0 ? void 0 : _d.href,
    old_path: null,
    /* True when non asynchronous Ajax loads */
    loading: false,
    _enumerated: [],
    get isEnumerating() {
        return this._enumerated.length > 0;
    },
    /* globalThis width */
    width: 0,
    /* globalThis height */
    height: 0,
    /* Element currently focused (Element object) */
    focused: false,
    /* Last time user has been active */
    last_focus: (new Date()).getTime(),
    /* Sleep mode (tab or globalThis unfocused */
    sleep: false,
    theme: 'dark',
    /**
     *  @var bbn.env.loaders Object where the props are MD5 of data and url while the values are the requests,
     *  for preventing the same call to be made at the same time
     **/
    loaders: [],
    loadersHistory: [],
    maxLoadersHistory: 50,
    /* bbn.env.params is an array of each element of the path */
    resizeTimer: false,
    hashChanged: 0,
    params: [],
    isInit: false,
    isFocused: false,
    isVisible: !((_e = globalThis.document) === null || _e === void 0 ? void 0 : _e.hidden),
    timeoff: Math.round((new Date()).getTime() / 1000),
    loggingLevel: 5,
    ignoreUnload: false,
    historyDisabled: false,
    nav: 'ajax',
    online: (_f = globalThis.navigator) === null || _f === void 0 ? void 0 : _f.onLine
};
