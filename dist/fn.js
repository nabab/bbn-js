import { _addLoader } from './fn/ajax/_addLoader';
import { _compareValues } from './fn/object/_compareValues';
import { _deleteLoader } from './fn/ajax/_deleteLoader';
import { abort } from './fn/ajax/abort';
import { abortURL } from './fn/ajax/abortURL';
import { addColors } from './fn/style/addColors';
import { addInputs } from './fn/form/addInputs';
import { addStyle } from './fn/style/addStyle';
import { adjustHeight } from './fn/html/adjustHeight';
import { adjustSize } from './fn/html/adjustSize';
import { adjustWidth } from './fn/html/adjustWidth';
import { ajax } from './fn/ajax/ajax';
import { analyzeFunction } from './fn/misc/analyzeFunction';
import { animateCss } from './fn/style/animateCss';
import { arrayBuffer2String } from './fn/convert/arrayBuffer2String';
import { arrayFromProp } from './fn/object/arrayFromProp';
import { autoExtend } from './fn/object/autoExtend';
import { baseName } from './fn/string/baseName';
import { br2nl } from './fn/string/br2nl';
import { calendar } from './fn/datetime/calendar';
import { callback } from './fn/ajax/callback';
import { camelize } from './fn/string/camelize';
import { camelToCss } from './fn/string/camelToCss';
import { canvasToImage } from './fn/convert/canvasToImage';
import { center } from './fn/style/center';
import { checkProps } from './fn/object/checkProps';
import { checkPropsDetails } from './fn/object/checkPropsDetails';
import { checkPropsOrDie } from './fn/object/checkPropsOrDie';
import { checkType } from './fn/type/checkType';
import { circularReplacer } from './fn/object/circularReplacer';
import { clone } from './fn/object/clone';
import { colorToHex } from './fn/convert/colorToHex';
import { compare } from './fn/object/compare';
import { compareConditions } from './fn/object/compareConditions';
import { copy } from './fn/browser/copy';
import { correctCase } from './fn/string/correctCase';
import { count } from './fn/object/count';
import { crc32 } from './fn/string/crc32';
import { createObject } from './fn/object/createObject';
import { cssExists } from './fn/style/cssExists';
import { date } from './fn/datetime/date';
import { dateSQL } from './fn/datetime/dateSQL';
import { daysInMonth } from './fn/datetime/daysInMonth';
import { deepPath } from './fn/object/deepPath';
import { defaultAjaxAbortFunction } from './fn/default/defaultAjaxAbortFunction';
import { defaultAjaxErrorFunction } from './fn/default/defaultAjaxErrorFunction';
import { defaultAlertFunction } from './fn/default/defaultAlertFunction';
import { defaultConfirmFunction } from './fn/default/defaultConfirmFunction';
import { defaultEndLoadingFunction } from './fn/default/defaultEndLoadingFunction';
import { defaultErrorFunction } from './fn/default/defaultErrorFunction';
import { defaultHistoryFunction } from './fn/default/defaultHistoryFunction';
import { defaultLinkFunction } from './fn/default/defaultLinkFunction';
import { defaultPostLinkFunction } from './fn/default/defaultPostLinkFunction';
import { defaultPreLinkFunction } from './fn/default/defaultPreLinkFunction';
import { defaultResizeFunction } from './fn/default/defaultResizeFunction';
import { defaultStartLoadingFunction } from './fn/default/defaultStartLoadingFunction';
import { deleteProp } from './fn/object/deleteProp';
import { diffObj } from './fn/object/diffObj';
import { dirName } from './fn/string/dirName';
import { download } from './fn/ajax/download';
import { downloadContent } from './fn/ajax/downloadContent';
import { each } from './fn/loop/each';
import { eraseCookie } from './fn/browser/eraseCookie';
import { error } from './fn/browser/error';
import { escapeDquotes } from './fn/string/escapeDquotes';
import { escapeRegExp } from './fn/string/escapeRegExp';
import { escapeSquotes } from './fn/string/escapeSquotes';
import { escapeTicks } from './fn/string/escapeTicks';
import { escapeUrl } from './fn/string/escapeUrl';
import { extend } from './fn/object/extend';
import { extendOut } from './fn/object/extendOut';
import { fdate } from './fn/datetime/fdate';
import { fdatetime } from './fn/datetime/fdatetime';
import { fieldValue } from './fn/form/fieldValue';
import { fileExt } from './fn/string/fileExt';
import { filter } from './fn/object/filter';
import { filterToConditions } from './fn/object/filterToConditions';
import { findAll } from './fn/object/findAll';
import { fori } from './fn/loop/fori';
import { forir } from './fn/loop/forir';
import { format } from './fn/string/format';
import { formatBytes } from './fn/string/formatBytes';
import { formatDate } from './fn/datetime/formatDate';
import { formatSize } from './fn/string/formatSize';
import { formdata } from './fn/form/formdata';
import { fromXml } from './fn/convert/fromXml';
import { ftime } from './fn/datetime/ftime';
import { getAllTags } from './fn/html/getAllTags';
import { getAncestors } from './fn/html/getAncestors';
import { getAttributes } from './fn/html/getAttributes';
import { getBrowserName } from './fn/browser/getBrowserName';
import { getBrowserVersion } from './fn/browser/getBrowserVersion';
import { getCookie } from './fn/browser/getCookie';
import { getCssVar } from './fn/style/getCssVar';
import { getDay } from './fn/datetime/getDay';
import { getDeviceType } from './fn/browser/getDeviceType';
import { getEventData } from './fn/browser/getEventData';
import { getField } from './fn/object/getField';
import { getFieldValues } from './fn/object/getFieldValues';
import { getHtml } from './fn/html/getHtml';
import { getHTMLOfSelection } from './fn/html/getHTMLOfSelection';
import { getLoader } from './fn/ajax/getLoader';
import { getPath } from './fn/html/getPath';
import { getProp } from './fn/object/getProp';
import { getProperty } from './fn/object/getProperty';
import { getRequestId } from './fn/ajax/getRequestId';
import { getRow } from './fn/object/getRow';
import { getScrollBarSize } from './fn/style/getScrollBarSize';
import { getText } from './fn/html/getText';
import { getTimeoff } from './fn/misc/getTimeoff';
import { happy } from './fn/browser/happy';
import { hash } from './fn/string/hash';
import { hex2rgb } from './fn/convert/hex2rgb';
import { history } from './fn/browser/history';
import { html2text } from './fn/html/html2text';
import { imageToCanvas } from './fn/convert/imageToCanvas';
import { imgToBase64 } from './fn/convert/imgToBase64';
import { info } from './fn/browser/info';
import { init } from './fn/init';
import { isActiveInterface } from './fn/browser/isActiveInterface';
import { isArray } from './fn/type/isArray';
import { isBlob } from './fn/type/isBlob';
import { isBoolean } from './fn/type/isBoolean';
import { isCanvas } from './fn/type/isCanvas';
import { isColor } from './fn/type/isColor';
import { isComment } from './fn/type/isComment';
import { isCp } from './fn/type/isCp';
import { isDate } from './fn/type/isDate';
import { isDesktopDevice } from './fn/browser/isDesktopDevice';
import { isDimension } from './fn/type/isDimension';
import { isDom } from './fn/type/isDom';
import { isEmail } from './fn/type/isEmail';
import { isEmpty } from './fn/type/isEmpty';
import { isEvent } from './fn/type/isEvent';
import { isFocused } from './fn/browser/isFocused';
import { isFunction } from './fn/type/isFunction';
import { isHostname } from './fn/type/isHostname';
import { isInside } from './fn/html/isInside';
import { isInt } from './fn/type/isInt';
import { isIP } from './fn/type/isIP';
import { isIterable } from './fn/type/isIterable';
import { isMobile } from './fn/browser/isMobile';
import { isMobileDevice } from './fn/browser/isMobileDevice';
import { isNull } from './fn/type/isNull';
import { isNumber } from './fn/type/isNumber';
import { isObject } from './fn/type/isObject';
import { isPercent } from './fn/type/isPercent';
import { isPrimitive } from './fn/type/isPrimitive';
import { isPromise } from './fn/type/isPromise';
import { isPropSize } from './fn/type/isPropSize';
import { isSame } from './fn/type/isSame';
import { isSQLDate } from './fn/type/isSQLDate';
import { isString } from './fn/type/isString';
import { isSymbol } from './fn/type/isSymbol';
import { isTabletDevice } from './fn/browser/isTabletDevice';
import { isURL } from './fn/type/isURL';
import { isValidDimension } from './fn/type/isValidDimension';
import { isValidName } from './fn/type/isValidName';
import { isValue } from './fn/type/isValue';
import { isVue } from './fn/type/isVue';
import { iterate } from './fn/loop/iterate';
import { lightenDarkenHex } from './fn/style/lightenDarkenHex';
import { link } from './fn/ajax/link';
import { log } from './fn/browser/log';
import { makeReactive } from './fn/html/makeReactive';
import { map } from './fn/object/map';
import { md5 } from './fn/string/md5';
import { money } from './fn/misc/money';
import { move } from './fn/object/move';
import { multiorder } from './fn/object/multiorder';
import { nl2br } from './fn/string/nl2br';
import { numProperties } from './fn/object/numProperties';
import { objectToFormData } from './fn/form/objectToFormData';
import { order } from './fn/object/order';
import { outerHeight } from './fn/style/outerHeight';
import { outerWidth } from './fn/style/outerWidth';
import { percent } from './fn/misc/percent';
import { pickValue } from './fn/object/pickValue';
import { post } from './fn/ajax/post';
import { postOut } from './fn/ajax/postOut';
import { printf } from './fn/string/printf';
import { quotes2html } from './fn/string/quotes2html';
import { randomInt } from './fn/misc/randomInt';
import { randomString } from './fn/string/randomString';
import { removeAccents } from './fn/string/removeAccents';
import { removeEmpty } from './fn/object/removeEmpty';
import { removeExtraSpaces } from './fn/string/removeExtraSpaces';
import { removeHtmlComments } from './fn/string/removeHtmlComments';
import { removePrivateProp } from './fn/object/removePrivateProp';
import { removeTrailingChars } from './fn/string/removeTrailingChars';
import { repeat } from './fn/string/repeat';
import { replaceAll } from './fn/string/replaceAll';
import { replaceSelection } from './fn/browser/replaceSelection';
import { resize } from './fn/style/resize';
import { rgb2hex } from './fn/convert/rgb2hex';
import { riterate } from './fn/loop/riterate';
import { roundDecimal } from './fn/misc/roundDecimal';
import { sanitize } from './fn/string/sanitize';
import { search } from './fn/object/search';
import { selectElementText } from './fn/browser/selectElementText';
import { selector } from './fn/html/selector';
import { setCookie } from './fn/browser/setCookie';
import { setCssVar } from './fn/style/setCssVar';
import { setNavigationVars } from './fn/ajax/setNavigationVars';
import { setProp } from './fn/object/setProp';
import { setProperty } from './fn/object/setProperty';
import { shorten } from './fn/string/shorten';
import { shortenObj } from './fn/object/shortenObj';
import { shuffle } from './fn/object/shuffle';
import { simpleHash } from './fn/string/simpleHash';
import { simpleHash1 } from './fn/string/simpleHash1';
import { simpleHash2 } from './fn/string/simpleHash2';
import { startChrono, stopChrono } from './fn/datetime/chrono';
import { string2ArrayBuffer } from './fn/convert/string2ArrayBuffer';
import { submit } from './fn/form/submit';
import { substr } from './fn/string/substr';
import { sum } from './fn/object/sum';
import { timestamp } from './fn/datetime/timestamp';
import { toCSV } from './fn/convert/toCSV';
import { toggleFullScreen } from './fn/browser/toggleFullScreen';
import { translate } from './fn/misc/translate';
import { treatAjaxArguments } from './fn/ajax/treatAjaxArguments';
import { trim } from './fn/string/trim';
import { uniqString } from './fn/string/uniqString';
import { unique } from './fn/object/unique';
import { upload } from './fn/ajax/upload';
import { warning } from './fn/browser/warning';
const fn = {
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
};
export { fn };
