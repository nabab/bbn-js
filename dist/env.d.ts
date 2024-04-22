declare const _default: {
    siteTitle: string;
    logging: boolean;
    cdn: string;
    lang: string;
    host: string;
    url: string;
    old_path: any;
    loading: boolean;
    width: number;
    height: number;
    focused: boolean;
    last_focus: number;
    sleep: boolean;
    theme: string;
    /**
     *  @var bbn.env.loaders Object where the props are MD5 of data and url while the values are the requests,
     *  for preventing the same call to be made at the same time
     **/
    loaders: any[];
    loadersHistory: any[];
    maxLoadersHistory: number;
    resizeTimer: boolean;
    hashChanged: number;
    params: any[];
    isInit: boolean;
    isFocused: boolean;
    timeoff: number;
    loggingLevel: number;
    ignoreUnload: boolean;
    historyDisabled: boolean;
    nav: string;
};
export default _default;
