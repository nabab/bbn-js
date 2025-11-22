/* eslint-disable no-var */

interface Money {
  precision: number;
  thousands: string;
  decimal: string;
  currency: string;
  kilo?: boolean;
  novalue?: string;
}


interface Lng {
  [key: string]: string;
}

interface Vars {
  colors: object;
  regexp: {
    [key: string]: RegExp;
  };
  shortenLen: number;
  [key: string]: any;
}

interface BbnEnv {
  siteTitle: string;
  logging: boolean;
  cdn: string;
  lang: string;
  host: string;
  url: string;
  old_path: string;
  loading: boolean;
  width: number;
  height: number;
  focused: any;
  last_focus: number;
  sleep: any;
  _enumerated: any[];
  get isEnumerating(): boolean;
  theme: string;
  loaders: BbnLoader[];
  loadersHistory: BbnLoader[];
  maxLoadersHistory: number;
  resizeTimer: any;
  hashChanged: number;
  params: string[];
  isInit: boolean;
  isFocused: boolean;
  timeoff: any;
  loggingLevel: number;
  ignoreUnload: boolean;
  historyDisabled: boolean;
  nav: string;
  root?: string;
  isDev?: boolean;
  mode?: string;
  token?: string;
  connection_failures?: number;
  connection_max_failures?: number;
  money?: Money;
  appPrefix?: string;
  appName?: string;
  plugins?: object[];
  path?: string;
  scrollBarSize?: number;
  online: boolean;
}


declare global {
  interface Window {
    bbn: Bbn;
    bbnData: any;
    scheduler: any;
  }  
  
  interface Bbn {
    version: string;
    opt: object;
    env: BbnEnv;
    var: Vars;
    date: Function;
    dt: any;
    com: object;
    lng: Lng;
    fn: {
      [key: string]: (...args: any[]) => any;
    };
    db?: object;
    vue?: object;
    cp?: object;
    _: (st: string, ...args: string[]) => string;
    $: (st: string, p?: HTMLElement) => NodeListOf<HTMLElement>;
    app?: object;
    info?: {
      value: string;
      label: string;
      description: string;
      icon: string;
    }[];
  }  

  interface BbnLoader {
    key: string;
    start: number;
    url: string;
    loader: any;
    aborter: any;
    loading: boolean;
    error: boolean;
    abort: boolean;
    errorMessage: boolean;
    success: boolean;
  }

  interface BbnAjaxCfg {
    successFn?: (url) => any;
    errorFn?: () => any;
    abortFn?: () => any;
    force?: boolean;
    url?: string;
    datatype?: string;
    e?: Event;
    ele?: HTMLElement;
    obj?: object;
  }
  
  interface BbnBasicObject {
    [key: string]: any;
  }
  
  interface BbnOrderItem {
    field: string;
    dir: string;
  }
  
	interface BbnResError {
		error: false|string;
		result: boolean;
	}

  interface BbnAjaxResult {
    prescript?: string;
    url?: string;
    content?: string;
    script?: string|((data?:object, ele?:HTMLElement|HTMLInputElement|HTMLTextAreaElement|null) => any);
    data?: object;
    postscript?: string;
    error?: string;
    errorTitle?: string;
  }

  interface bbnXHR {
    error?: string;
    message?: string;
    request?: string;
    response?: null|{
      data?: string;
      status?: object;
    }
  }

  const bbn: Bbn;
}

export {};