export default {
  siteTitle: globalThis.document?.title,
  /* This variable should be set to true in debugging mode only */
  logging: false,
  /* Address of the CDN (where this file should be hosted) */
  cdn: '',
  /* Default language */
  lang: 'en',
  host: globalThis.location?.protocol + '//' + globalThis.location?.hostname,
  url: globalThis.location?.href,
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
  isVisible: !globalThis.document?.hidden,
  timeoff: Math.round((new Date()).getTime() / 1000),
  loggingLevel: 5,
  ignoreUnload: false,
  historyDisabled: false,
  nav: 'ajax',
  online: globalThis.navigator?.onLine
}

