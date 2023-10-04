import {_addLoader} from './fn/_addLoader'
import {_compareValues} from './fn/_compareValues'
import {_deleteLoader} from './fn/_deleteLoader'
import {abort} from './fn/abort'
import {abortURL} from './fn/abortURL'
import {addColors} from './fn/addColors'
import {addInputs} from './fn/addInputs'
import {addStyle} from './fn/addStyle'
import {adjustHeight} from './fn/adjustHeight'
import {adjustSize} from './fn/adjustSize'
import {adjustWidth} from './fn/adjustWidth'
import {ajax} from './fn/ajax'
import {analyzeFunction} from './fn/analyzeFunction'
import {animateCss} from './fn/animateCss'
import {arrayBuffer2String} from './fn/arrayBuffer2String'
import {arrayFromProp} from './fn/arrayFromProp'
import {autoExtend} from './fn/autoExtend'
import {baseName} from './fn/baseName'
import {br2nl} from './fn/br2nl'
import {calendar} from './fn/calendar'
import {callback} from './fn/callback'
import {camelize} from './fn/camelize'
import {camelToCss} from './fn/camelToCss'
import {canvasToImage} from './fn/canvasToImage'
import {center} from './fn/center'
import {checkProps} from './fn/checkProps'
import {checkPropsDetails} from './fn/checkPropsDetails'
import {checkPropsOrDie} from './fn/checkPropsOrDie'
import {checkType} from './fn/checkType'
import {circularReplacer} from './fn/circularReplacer'
import {clone} from './fn/clone'
import {colorToHex} from './fn/colorToHex'
import {compare} from './fn/compare'
import {compareConditions} from './fn/compareConditions'
import {copy} from './fn/copy'
import {correctCase} from './fn/correctCase'
import {count} from './fn/count'
import {crc32} from './fn/crc32'
import {createObject} from './fn/createObject'
import {cssExists} from './fn/cssExists'
import {date} from './fn/date'
import {dateSQL} from './fn/dateSQL'
import {daysInMonth} from './fn/daysInMonth'
import {deepPath} from './fn/deepPath'
import {defaultAjaxAbortFunction} from './fn/defaultAjaxAbortFunction'
import {defaultAjaxErrorFunction} from './fn/defaultAjaxErrorFunction'
import {defaultAlertFunction} from './fn/defaultAlertFunction'
import {defaultConfirmFunction} from './fn/defaultConfirmFunction'
import {defaultEndLoadingFunction} from './fn/defaultEndLoadingFunction'
import {defaultErrorFunction} from './fn/defaultErrorFunction'
import {defaultHistoryFunction} from './fn/defaultHistoryFunction'
import {defaultLinkFunction} from './fn/defaultLinkFunction'
import {defaultPostLinkFunction} from './fn/defaultPostLinkFunction'
import {defaultPreLinkFunction} from './fn/defaultPreLinkFunction'
import {defaultResizeFunction} from './fn/defaultResizeFunction'
import {defaultStartLoadingFunction} from './fn/defaultStartLoadingFunction'
import {deleteProp} from './fn/deleteProp'
import {diffObj} from './fn/diffObj'
import {dirName} from './fn/dirName'
import {download} from './fn/download'
import {downloadContent} from './fn/downloadContent'
import {each} from './fn/each'
import {eraseCookie} from './fn/eraseCookie'
import {error} from './fn/error'
import {escapeDquotes} from './fn/escapeDquotes'
import {escapeRegExp} from './fn/escapeRegExp'
import {escapeSquotes} from './fn/escapeSquotes'
import {escapeTicks} from './fn/escapeTicks'
import {escapeUrl} from './fn/escapeUrl'
import {extend} from './fn/extend'
import {extendOut} from './fn/extendOut'
import {fdate} from './fn/fdate'
import {fdatetime} from './fn/fdatetime'
import {fieldValue} from './fn/fieldValue'
import {fileExt} from './fn/fileExt'
import {filter} from './fn/filter'
import {filterToConditions} from './fn/filterToConditions'
import {findAll} from './fn/findAll'
import {fori} from './fn/fori'
import {forir} from './fn/forir'
import {format} from './fn/format'
import {formatBytes} from './fn/formatBytes'
import {formatDate} from './fn/formatDate'
import {formatSize} from './fn/formatSize'
import {formdata} from './fn/formdata'
import {fromXml} from './fn/fromXml'
import {ftime} from './fn/ftime'
import {getAllTags} from './fn/getAllTags'
import {getAncestors} from './fn/getAncestors'
import {getAttributes} from './fn/getAttributes'
import {getBrowserName} from './fn/getBrowserName'
import {getBrowserVersion} from './fn/getBrowserVersion'
import {getCookie} from './fn/getCookie'
import {getCssVar} from './fn/getCssVar'
import {getDay} from './fn/getDay'
import {getDeviceType} from './fn/getDeviceType'
import {getEventData} from './fn/getEventData'
import {getField} from './fn/getField'
import {getFieldValues} from './fn/getFieldValues'
import {getHtml} from './fn/getHtml'
import {getHTMLOfSelection} from './fn/getHTMLOfSelection'
import {getLoader} from './fn/getLoader'
import {getPath} from './fn/getPath'
import {getProp} from './fn/getProp'
import {getProperty} from './fn/getProperty'
import {getRequestId} from './fn/getRequestId'
import {getRow} from './fn/getRow'
import {getScrollBarSize} from './fn/getScrollBarSize'
import {getText} from './fn/getText'
import {getTimeoff} from './fn/getTimeoff'
import {happy} from './fn/happy'
import {hash} from './fn/hash'
import {hex2rgb} from './fn/hex2rgb'
import {history} from './fn/history'
import {html2text} from './fn/html2text'
import {imageToCanvas} from './fn/imageToCanvas'
import {imgToBase64} from './fn/imgToBase64'
import {info} from './fn/info'
import {init} from './fn/init'
import {isActiveInterface} from './fn/isActiveInterface'
import {isArray} from './fn/isArray'
import {isBlob} from './fn/isBlob'
import {isBoolean} from './fn/isBoolean'
import {isCanvas} from './fn/isCanvas'
import {isColor} from './fn/isColor'
import {isComment} from './fn/isComment'
import {isCp} from './fn/isCp'
import {isDate} from './fn/isDate'
import {isDesktopDevice} from './fn/isDesktopDevice'
import {isDimension} from './fn/isDimension'
import {isDom} from './fn/isDom'
import {isEmail} from './fn/isEmail'
import {isEmpty} from './fn/isEmpty'
import {isEvent} from './fn/isEvent'
import {isFocused} from './fn/isFocused'
import {isFunction} from './fn/isFunction'
import {isHostname} from './fn/isHostname'
import {isInside} from './fn/isInside'
import {isInt} from './fn/isInt'
import {isIP} from './fn/isIP'
import {isIterable} from './fn/isIterable'
import {isMobile} from './fn/isMobile'
import {isMobileDevice} from './fn/isMobileDevice'
import {isNull} from './fn/isNull'
import {isNumber} from './fn/isNumber'
import {isObject} from './fn/isObject'
import {isPercent} from './fn/isPercent'
import {isPrimitive} from './fn/isPrimitive'
import {isPromise} from './fn/isPromise'
import {isPropSize} from './fn/isPropSize'
import {isSame} from './fn/isSame'
import {isSQLDate} from './fn/isSQLDate'
import {isString} from './fn/isString'
import {isSymbol} from './fn/isSymbol'
import {isTabletDevice} from './fn/isTabletDevice'
import {isURL} from './fn/isURL'
import {isValidDimension} from './fn/isValidDimension'
import {isValidName} from './fn/isValidName'
import {isValue} from './fn/isValue'
import {isVue} from './fn/isVue'
import {iterate} from './fn/iterate'
import {lightenDarkenHex} from './fn/lightenDarkenHex'
import {link} from './fn/link'
import {log} from './fn/log'
import {makeReactive} from './fn/makeReactive'
import {map} from './fn/map'
import {md5} from './fn/md5'
import {money} from './fn/money'
import {move} from './fn/move'
import {multiorder} from './fn/multiorder'
import {nl2br} from './fn/nl2br'
import {numProperties} from './fn/numProperties'
import {objectToFormData} from './fn/objectToFormData'
import {order} from './fn/order'
import {outerHeight} from './fn/outerHeight'
import {outerWidth} from './fn/outerWidth'
import {percent} from './fn/percent'
import {pickValue} from './fn/pickValue'
import {post} from './fn/post'
import {postOut} from './fn/postOut'
import {printf} from './fn/printf'
import {quotes2html} from './fn/quotes2html'
import {randomInt} from './fn/randomInt'
import {randomString} from './fn/randomString'
import {removeAccents} from './fn/removeAccents'
import {removeEmpty} from './fn/removeEmpty'
import {removeExtraSpaces} from './fn/removeExtraSpaces'
import {removeHtmlComments} from './fn/removeHtmlComments'
import {removePrivateProp} from './fn/removePrivateProp'
import {removeTrailingChars} from './fn/removeTrailingChars'
import {repeat} from './fn/repeat'
import {replaceAll} from './fn/replaceAll'
import {replaceSelection} from './fn/replaceSelection'
import {resize} from './fn/resize'
import {rgb2hex} from './fn/rgb2hex'
import {riterate} from './fn/riterate'
import {roundDecimal} from './fn/roundDecimal'
import {sanitize} from './fn/sanitize'
import {search} from './fn/search'
import {selectElementText} from './fn/selectElementText'
import {selector} from './fn/selector'
import {setCookie} from './fn/setCookie'
import {setCssVar} from './fn/setCssVar'
import {setNavigationVars} from './fn/setNavigationVars'
import {setProp} from './fn/setProp'
import {setProperty} from './fn/setProperty'
import {shorten} from './fn/shorten'
import {shortenObj} from './fn/shortenObj'
import {shuffle} from './fn/shuffle'
import {simpleHash} from './fn/simpleHash'
import {simpleHash1} from './fn/simpleHash1'
import {simpleHash2} from './fn/simpleHash2'
import {startChrono, stopChrono} from './fn/chrono'
import {stat} from './fn/stat'
import {string2ArrayBuffer} from './fn/string2ArrayBuffer'
import {submit} from './fn/submit'
import {substr} from './fn/substr'
import {sum} from './fn/sum'
import {timestamp} from './fn/timestamp'
import {toCSV} from './fn/toCSV'
import {toggleFullScreen} from './fn/toggleFullScreen'
import {translate} from './fn/translate'
import {treatAjaxArguments} from './fn/treatAjaxArguments'
import {trim} from './fn/trim'
import {uniqString} from './fn/uniqString'
import {unique} from './fn/unique'
import {upload} from './fn/upload'
import {warning} from './fn/warning'

const bbn: Bbn = {
  version: "1.0.1",
  opt: {
    _cat: {}
  },
  /**
   * Translate an expression using the object bbn.lng
   * 
   * @param {String} st 
   * @returns {String}
   */
  _: (...args) => {
    let st: string = args.shift();
    let res: string = bbn.lng[st] || st;
    if (args.length) {
      let i = 0;
      return res.replace(/\%([d|s])/g, (match: string, type: string) => {
        let tmp: any = args[i++];
        if (!tmp) {
          tmp = type === 'd' ? 0 : '';
        }
  
        checkType(tmp, type === 'd' ? 'number' : 'string', bbn._("The value you gave did not correspond, check the loggg"));
        return tmp;
      });
    }
  
    return res;
  },
  $: (selector, context) => {
    if (context && context.querySelectorAll) {
      return context.querySelectorAll(selector);
    }
    return document.body.querySelectorAll(selector);
  },
  _popups: [],
  lng: {
    /* User-defined languages elements */
    select_unselect_all: "Select/Clear all",
    select_all: "Select all",
    search: 'Search',
    loading: 'Loading...',
    choose: 'Choose',
    error: 'Error',
    server_response: 'Server response',
    reload: 'Reload',
    errorText: 'Something went wrong',
    closeAll: "Close all",
    closeOthers: "Close others",
    pin: "Pin",
    arrange: "Arrange",
    cancel: "Cancel",
    unpin: "Unpin",
    yes: "Yes",
    no: "No",
    unknown: "Unknown",
    untitled: "Untitled",
    confirmation: "Confirmation",
    Today: "Today",
    Tomorrow: "Tomorrow",
    Yesterday: "Yesterday"
  },
  app: {
    popups: [],
  },
  vars: {
    loggers: {
      _num: 0
    },
    /* Usable datatypes through Ajax function */
    datatypes: ['xml', 'html', 'script', 'json', 'jsonp', 'text', 'blob'],
    /* The default value used by the function shorten */
    shortenLen: 30,
    /* Categorizing keyboard map */
    keys: {
      upDown: [33, 34, 35, 36, 38, 40],
      leftRight: [36, 35, 37, 39],
      dels: [8, 46, 45],
      confirm: [13, 9],
      alt: [20, 16, 17, 18, 144],
      numbers: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
      numsigns: [109, 110, 189, 190]
    },
    comparators: [">=", "<=", ">", "<", "="],
    operators: ["+", "-", "/", "*"],
    tags: ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'slot', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'],
    colors: {
      darkgrey: '#5a6a62',
      black: '#000000',
      anthracite: '#454545',
      grey: '#d3d3d3',
      white: '#ffffff',
      beige: '#fdfdfd',
      lightgrey: '#dcdcdc',
      pastelblue: '#ddebf6',
      cyan: '#00c8f8',
      blue: '#6e9ecf',
      indigo: '#3f51b5',
      navy: '#354458',
      webblue: '#2196f3',
      teal: '#009688',
      turquoise: '#1fda9a',
      pastelgreen: '#e2efda',
      palegreen: '#ccffcc',
      green: '#00a03e',
      olive: '#92b06a',
      pastelorange: '#fff2cc',
      yellow: '#fdf200',
      orange: '#ff9900',
      pink: '#eb65a0',
      purple: '#a333c8',
      red: '#db3340',
      brown: '#8c6954'
    },
    reserved: ['abstract', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'continue', 'const', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'],
    mockText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    regexp: {
      url: new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$', 'i'),
      ip: new RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"),
      hostname: new RegExp("^[a-z\\d]([a-z\\d\\-]{0,61}[a-z\\d])?(\\.[a-z\\d]([a-z\\d\\-]{0,61}[a-z\\d])?)*$", 'i'),
    }
  },
  env: {
    siteTitle: window.document.title,
    /* This variable should be set to true in debugging mode only */
    logging: false,
    /* Address of the CDN (where this file should be hosted) */
    cdn: '',
    /* Default language */
    lang: 'en',
    host: window.location.protocol + '//' + window.location.hostname,
    url: window.location.href,
    old_path: null,
    /* True when non asynchronous Ajax loads */
    loading: false,
    /* Window width */
    width: 0,
    /* Window height */
    height: 0,
    /* Element currently focused (Element object) */
    focused: false,
    /* Last time user has been active */
    last_focus: (new Date()).getTime(),
    /* Sleep mode (tab or window unfocused */
    sleep: false,
    /**
     *  @var bbn.env.loaders Object where the props are MD5 of data and url while the values are the requests,
     *  for preventing the same call to be made at the same time
     **/
    loaders: [],
    loadersHistory: [],
    maxLoadersHistory: 20,
    /* bbn.env.params is an array of each element of the path */
    resizeTimer: false,
    hashChanged: 0,
    params: [],
    isInit: false,
    isFocused: false,
    timeoff: Math.round((new Date()).getTime() / 1000),
    loggingLevel: 5,
    ignoreUnload: false,
    historyDisabled: false,
    nav: 'ajax'
  },
  fn: {
    _addLoader,
    _compareValues,
    _deleteLoader,
    abort,
    abortURL,
    addColors,
    addInputs,
    addStyle,
    adjustHeight,
    adjustSize,
    adjustWidth,
    ajax,
    analyzeFunction,
    animateCss,
    arrayBuffer2String,
    arrayFromProp,
    autoExtend,
    baseName,
    br2nl,
    calendar,
    callback,
    camelize,
    camelToCss,
    canvasToImage,
    center,
    checkProps,
    checkPropsDetails,
    checkPropsOrDie,
    checkType,
    circularReplacer,
    clone,
    colorToHex,
    compare,
    compareConditions,
    copy,
    correctCase,
    count,
    crc32,
    createObject,
    cssExists,
    date,
    dateSQL,
    daysInMonth,
    deepPath,
    defaultAjaxAbortFunction,
    defaultAjaxErrorFunction,
    defaultAlertFunction,
    defaultConfirmFunction,
    defaultEndLoadingFunction,
    defaultErrorFunction,
    defaultHistoryFunction,
    defaultLinkFunction,
    defaultPostLinkFunction,
    defaultPreLinkFunction,
    defaultResizeFunction,
    defaultStartLoadingFunction,
    deleteProp,
    diffObj,
    dirName,
    download,
    downloadContent,
    each,
    eraseCookie,
    error,
    escapeDquotes,
    escapeRegExp,
    escapeSquotes,
    escapeTicks,
    escapeUrl,
    extend,
    extendOut,
    fdate,
    fdatetime,
    fieldValue,
    fileExt,
    filter,
    filterToConditions,
    findAll,
    fori,
    forir,
    format,
    formatBytes,
    formatDate,
    formatSize,
    formdata,
    fromXml,
    ftime,
    getAllTags,
    getAncestors,
    getAttributes,
    getBrowserName,
    getBrowserVersion,
    getCookie,
    getCssVar,
    getDay,
    getDeviceType,
    getEventData,
    getField,
    getFieldValues,
    getHtml,
    getHTMLOfSelection,
    getLoader,
    getPath,
    getProp,
    getProperty,
    getRequestId,
    getRow,
    getScrollBarSize,
    getText,
    getTimeoff,
    happy,
    hash,
    hex2rgb,
    history,
    html2text,
    imageToCanvas,
    imgToBase64,
    info,
    init,
    isActiveInterface,
    isArray,
    isBlob,
    isBoolean,
    isCanvas,
    isColor,
    isComment,
    isCp,
    isDate,
    isDesktopDevice,
    isDimension,
    isDom,
    isEmail,
    isEmpty,
    isEvent,
    isFocused,
    isFunction,
    isHostname,
    isInside,
    isInt,
    isIP,
    isIterable,
    isMobile,
    isMobileDevice,
    isNull,
    isNumber,
    isObject,
    isPercent,
    isPrimitive,
    isPromise,
    isPropSize,
    isSame,
    isSQLDate,
    isString,
    isSymbol,
    isTabletDevice,
    isURL,
    isValidDimension,
    isValidName,
    isValue,
    isVue,
    iterate,
    lightenDarkenHex,
    link,
    log,
    makeReactive,
    map,
    md5,
    money,
    move,
    multiorder,
    nl2br,
    numProperties,
    objectToFormData,
    order,
    outerHeight,
    outerWidth,
    percent,
    pickValue,
    post,
    postOut,
    printf,
    quotes2html,
    randomInt,
    randomString,
    removeAccents,
    removeEmpty,
    removeExtraSpaces,
    removeHtmlComments,
    removePrivateProp,
    removeTrailingChars,
    repeat,
    replaceAll,
    replaceSelection,
    resize,
    rgb2hex,
    riterate,
    roundDecimal,
    sanitize,
    search,
    selectElementText,
    selector,
    setCookie,
    setCssVar,
    setNavigationVars,
    setProp,
    setProperty,
    shorten,
    shortenObj,
    shuffle,
    simpleHash,
    simpleHash1,
    simpleHash2,
    startChrono,
    stat,
    stopChrono,
    string2ArrayBuffer,
    submit,
    substr,
    sum,
    timestamp,
    toCSV,
    toggleFullScreen,
    translate,
    treatAjaxArguments,
    trim,
    uniqString,
    unique,
    upload,
    warning,
  }
};

window.bbn = bbn;


export {bbn};

