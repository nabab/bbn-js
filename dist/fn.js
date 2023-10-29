import { _addLoader } from './fn/ajax/_addLoader.js';
import { _compareValues } from './fn/object/_compareValues.js';
import { _deleteLoader } from './fn/ajax/_deleteLoader.js';
import { abort } from './fn/ajax/abort.js';
import { abortURL } from './fn/ajax/abortURL.js';
import { addColors } from './fn/style/addColors.js';
import { addInputs } from './fn/form/addInputs.js';
import { addStyle } from './fn/style/addStyle.js';
import { adjustHeight } from './fn/html/adjustHeight.js';
import { adjustSize } from './fn/html/adjustSize.js';
import { adjustWidth } from './fn/html/adjustWidth.js';
import { ajax } from './fn/ajax/ajax.js';
import { analyzeFunction } from './fn/misc/analyzeFunction.js';
import { animateCss } from './fn/style/animateCss.js';
import { arrayBuffer2String } from './fn/convert/arrayBuffer2String.js';
import { arrayFromProp } from './fn/object/arrayFromProp.js';
import { autoExtend } from './fn/object/autoExtend.js';
import { baseName } from './fn/string/baseName.js';
import { br2nl } from './fn/string/br2nl.js';
import { calendar } from './fn/datetime/calendar.js';
import { callback } from './fn/ajax/callback.js';
import { camelize } from './fn/string/camelize.js';
import { camelToCss } from './fn/string/camelToCss.js';
import { canvasToImage } from './fn/convert/canvasToImage.js';
import { center } from './fn/style/center.js';
import { checkProps } from './fn/object/checkProps.js';
import { checkPropsDetails } from './fn/object/checkPropsDetails.js';
import { checkPropsOrDie } from './fn/object/checkPropsOrDie.js';
import { checkType } from './fn/type/checkType.js';
import { circularReplacer } from './fn/object/circularReplacer.js';
import { clone } from './fn/object/clone.js';
import { colorToHex } from './fn/convert/colorToHex.js';
import { compare } from './fn/object/compare.js';
import { compareConditions } from './fn/object/compareConditions.js';
import { copy } from './fn/browser/copy.js';
import { correctCase } from './fn/string/correctCase.js';
import { count } from './fn/object/count.js';
import { crc32 } from './fn/string/crc32.js';
import { createObject } from './fn/object/createObject.js';
import { cssExists } from './fn/style/cssExists.js';
import { date } from './fn/datetime/date.js';
import { dateSQL } from './fn/datetime/dateSQL.js';
import { daysInMonth } from './fn/datetime/daysInMonth.js';
import { deepPath } from './fn/object/deepPath.js';
import { defaultAjaxAbortFunction } from './fn/default/defaultAjaxAbortFunction.js';
import { defaultAjaxErrorFunction } from './fn/default/defaultAjaxErrorFunction.js';
import { defaultAlertFunction } from './fn/default/defaultAlertFunction.js';
import { defaultConfirmFunction } from './fn/default/defaultConfirmFunction.js';
import { defaultEndLoadingFunction } from './fn/default/defaultEndLoadingFunction.js';
import { defaultErrorFunction } from './fn/default/defaultErrorFunction.js';
import { defaultHistoryFunction } from './fn/default/defaultHistoryFunction.js';
import { defaultLinkFunction } from './fn/default/defaultLinkFunction.js';
import { defaultPostLinkFunction } from './fn/default/defaultPostLinkFunction.js';
import { defaultPreLinkFunction } from './fn/default/defaultPreLinkFunction.js';
import { defaultResizeFunction } from './fn/default/defaultResizeFunction.js';
import { defaultStartLoadingFunction } from './fn/default/defaultStartLoadingFunction.js';
import { deleteProp } from './fn/object/deleteProp.js';
import { diffObj } from './fn/object/diffObj.js';
import { dirName } from './fn/string/dirName.js';
import { download } from './fn/ajax/download.js';
import { downloadContent } from './fn/ajax/downloadContent.js';
import { each } from './fn/loop/each.js';
import { eraseCookie } from './fn/browser/eraseCookie.js';
import { error } from './fn/browser/error.js';
import { escapeDquotes } from './fn/string/escapeDquotes.js';
import { escapeRegExp } from './fn/string/escapeRegExp.js';
import { escapeSquotes } from './fn/string/escapeSquotes.js';
import { escapeTicks } from './fn/string/escapeTicks.js';
import { escapeUrl } from './fn/string/escapeUrl.js';
import { extend } from './fn/object/extend.js';
import { extendOut } from './fn/object/extendOut.js';
import { fdate } from './fn/datetime/fdate.js';
import { fdatetime } from './fn/datetime/fdatetime.js';
import { fieldValue } from './fn/form/fieldValue.js';
import { fileExt } from './fn/string/fileExt.js';
import { filter } from './fn/object/filter.js';
import { filterToConditions } from './fn/object/filterToConditions.js';
import { findAll } from './fn/object/findAll.js';
import { fori } from './fn/loop/fori.js';
import { forir } from './fn/loop/forir.js';
import { format } from './fn/string/format.js';
import { formatBytes } from './fn/string/formatBytes.js';
import { formatDate } from './fn/datetime/formatDate.js';
import { formatSize } from './fn/string/formatSize.js';
import { formdata } from './fn/form/formdata.js';
import { fromXml } from './fn/convert/fromXml.js';
import { ftime } from './fn/datetime/ftime.js';
import { getAllTags } from './fn/html/getAllTags.js';
import { getAncestors } from './fn/html/getAncestors.js';
import { getAttributes } from './fn/html/getAttributes.js';
import { getBrowserName } from './fn/browser/getBrowserName.js';
import { getBrowserVersion } from './fn/browser/getBrowserVersion.js';
import { getCookie } from './fn/browser/getCookie.js';
import { getCssVar } from './fn/style/getCssVar.js';
import { getDay } from './fn/datetime/getDay.js';
import { getDeviceType } from './fn/browser/getDeviceType.js';
import { getEventData } from './fn/browser/getEventData.js';
import { getField } from './fn/object/getField.js';
import { getFieldValues } from './fn/object/getFieldValues.js';
import { getHtml } from './fn/html/getHtml.js';
import { getHTMLOfSelection } from './fn/html/getHTMLOfSelection.js';
import { getLoader } from './fn/ajax/getLoader.js';
import { getPath } from './fn/html/getPath.js';
import { getProp } from './fn/object/getProp.js';
import { getProperty } from './fn/object/getProperty.js';
import { getRequestId } from './fn/ajax/getRequestId.js';
import { getRow } from './fn/object/getRow.js';
import { getScrollBarSize } from './fn/style/getScrollBarSize.js';
import { getText } from './fn/html/getText.js';
import { getTimeoff } from './fn/misc/getTimeoff.js';
import { happy } from './fn/browser/happy.js';
import { hash } from './fn/string/hash.js';
import { hex2rgb } from './fn/convert/hex2rgb.js';
import { history } from './fn/browser/history.js';
import { html2text } from './fn/html/html2text.js';
import { imageToCanvas } from './fn/convert/imageToCanvas.js';
import { imgToBase64 } from './fn/convert/imgToBase64.js';
import { info } from './fn/browser/info.js';
import { init } from './fn/init.js';
import { isActiveInterface } from './fn/browser/isActiveInterface.js';
import { isArray } from './fn/type/isArray.js';
import { isBlob } from './fn/type/isBlob.js';
import { isBoolean } from './fn/type/isBoolean.js';
import { isCanvas } from './fn/type/isCanvas.js';
import { isColor } from './fn/type/isColor.js';
import { isComment } from './fn/type/isComment.js';
import { isCp } from './fn/type/isCp.js';
import { isDate } from './fn/type/isDate.js';
import { isDesktopDevice } from './fn/browser/isDesktopDevice.js';
import { isDimension } from './fn/type/isDimension.js';
import { isDom } from './fn/type/isDom.js';
import { isEmail } from './fn/type/isEmail.js';
import { isEmpty } from './fn/type/isEmpty.js';
import { isEvent } from './fn/type/isEvent.js';
import { isFocused } from './fn/browser/isFocused.js';
import { isFunction } from './fn/type/isFunction.js';
import { isHostname } from './fn/type/isHostname.js';
import { isInside } from './fn/html/isInside.js';
import { isInt } from './fn/type/isInt.js';
import { isInViewport } from './fn/html/isInViewport.js';
import { isIP } from './fn/type/isIP.js';
import { isIterable } from './fn/type/isIterable.js';
import { isMobile } from './fn/browser/isMobile.js';
import { isMobileDevice } from './fn/browser/isMobileDevice.js';
import { isNull } from './fn/type/isNull.js';
import { isNumber } from './fn/type/isNumber.js';
import { isObject } from './fn/type/isObject.js';
import { isPercent } from './fn/type/isPercent.js';
import { isPrimitive } from './fn/type/isPrimitive.js';
import { isPromise } from './fn/type/isPromise.js';
import { isPropSize } from './fn/type/isPropSize.js';
import { isSame } from './fn/type/isSame.js';
import { isSQLDate } from './fn/type/isSQLDate.js';
import { isString } from './fn/type/isString.js';
import { isSymbol } from './fn/type/isSymbol.js';
import { isTabletDevice } from './fn/browser/isTabletDevice.js';
import { isURL } from './fn/type/isURL.js';
import { isValidDimension } from './fn/type/isValidDimension.js';
import { isValidName } from './fn/type/isValidName.js';
import { isValue } from './fn/type/isValue.js';
import { isVue } from './fn/type/isVue.js';
import { iterate } from './fn/loop/iterate.js';
import { lightenDarkenHex } from './fn/style/lightenDarkenHex.js';
import { link } from './fn/ajax/link.js';
import { log } from './fn/browser/log.js';
import { makeReactive } from './fn/html/makeReactive.js';
import { map } from './fn/object/map.js';
import { md5 } from './fn/string/md5.js';
import { money } from './fn/misc/money.js';
import { move } from './fn/object/move.js';
import { multiorder } from './fn/object/multiorder.js';
import { mutateArray } from './fn/object/mutateArray.js';
import { nl2br } from './fn/string/nl2br.js';
import { numProperties } from './fn/object/numProperties.js';
import { objectToFormData } from './fn/form/objectToFormData.js';
import { order } from './fn/object/order.js';
import { outerHeight } from './fn/style/outerHeight.js';
import { outerWidth } from './fn/style/outerWidth.js';
import { percent } from './fn/misc/percent.js';
import { pickValue } from './fn/object/pickValue.js';
import { post } from './fn/ajax/post.js';
import { postOut } from './fn/ajax/postOut.js';
import { printf } from './fn/string/printf.js';
import { quotes2html } from './fn/string/quotes2html.js';
import { randomInt } from './fn/misc/randomInt.js';
import { randomString } from './fn/string/randomString.js';
import { removeAccents } from './fn/string/removeAccents.js';
import { removeEmpty } from './fn/object/removeEmpty.js';
import { removeExtraSpaces } from './fn/string/removeExtraSpaces.js';
import { removeHtmlComments } from './fn/string/removeHtmlComments.js';
import { removePrivateProp } from './fn/object/removePrivateProp.js';
import { removeTrailingChars } from './fn/string/removeTrailingChars.js';
import { repeat } from './fn/string/repeat.js';
import { replaceAll } from './fn/string/replaceAll.js';
import { replaceSelection } from './fn/browser/replaceSelection.js';
import { resize } from './fn/style/resize.js';
import { rgb2hex } from './fn/convert/rgb2hex.js';
import { riterate } from './fn/loop/riterate.js';
import { roundDecimal } from './fn/misc/roundDecimal.js';
import { sanitize } from './fn/string/sanitize.js';
import { search } from './fn/object/search.js';
import { selectElementText } from './fn/browser/selectElementText.js';
import { selector } from './fn/html/selector.js';
import { setCookie } from './fn/browser/setCookie.js';
import { setCssVar } from './fn/style/setCssVar.js';
import { setNavigationVars } from './fn/ajax/setNavigationVars.js';
import { setProp } from './fn/object/setProp.js';
import { setProperty } from './fn/object/setProperty.js';
import { shorten } from './fn/string/shorten.js';
import { shortenObj } from './fn/object/shortenObj.js';
import { shuffle } from './fn/object/shuffle.js';
import { simpleHash } from './fn/string/simpleHash.js';
import { simpleHash1 } from './fn/string/simpleHash1.js';
import { simpleHash2 } from './fn/string/simpleHash2.js';
import { startChrono, stopChrono } from './fn/datetime/chrono.js';
import { string2ArrayBuffer } from './fn/convert/string2ArrayBuffer.js';
import { submit } from './fn/form/submit.js';
import { substr } from './fn/string/substr.js';
import { sum } from './fn/object/sum.js';
import { timestamp } from './fn/datetime/timestamp.js';
import { toCSV } from './fn/convert/toCSV.js';
import { toggleFullScreen } from './fn/browser/toggleFullScreen.js';
import { translate } from './fn/misc/translate.js';
import { treatAjaxArguments } from './fn/ajax/treatAjaxArguments.js';
import { trim } from './fn/string/trim.js';
import { uniqString } from './fn/string/uniqString.js';
import { unique } from './fn/object/unique.js';
import { upload } from './fn/ajax/upload.js';
import { warning } from './fn/browser/warning.js';
var fn = {
    _addLoader: _addLoader,
    _compareValues: _compareValues,
    _deleteLoader: _deleteLoader,
    abort: abort,
    abortURL: abortURL,
    addColors: addColors,
    addInputs: addInputs,
    addStyle: addStyle,
    adjustHeight: adjustHeight,
    adjustSize: adjustSize,
    adjustWidth: adjustWidth,
    ajax: ajax,
    analyzeFunction: analyzeFunction,
    animateCss: animateCss,
    arrayBuffer2String: arrayBuffer2String,
    arrayFromProp: arrayFromProp,
    autoExtend: autoExtend,
    baseName: baseName,
    br2nl: br2nl,
    calendar: calendar,
    callback: callback,
    camelize: camelize,
    camelToCss: camelToCss,
    canvasToImage: canvasToImage,
    center: center,
    checkProps: checkProps,
    checkPropsDetails: checkPropsDetails,
    checkPropsOrDie: checkPropsOrDie,
    checkType: checkType,
    circularReplacer: circularReplacer,
    clone: clone,
    colorToHex: colorToHex,
    compare: compare,
    compareConditions: compareConditions,
    copy: copy,
    correctCase: correctCase,
    count: count,
    crc32: crc32,
    createObject: createObject,
    cssExists: cssExists,
    date: date,
    dateSQL: dateSQL,
    daysInMonth: daysInMonth,
    deepPath: deepPath,
    defaultAjaxAbortFunction: defaultAjaxAbortFunction,
    defaultAjaxErrorFunction: defaultAjaxErrorFunction,
    defaultAlertFunction: defaultAlertFunction,
    defaultConfirmFunction: defaultConfirmFunction,
    defaultEndLoadingFunction: defaultEndLoadingFunction,
    defaultErrorFunction: defaultErrorFunction,
    defaultHistoryFunction: defaultHistoryFunction,
    defaultLinkFunction: defaultLinkFunction,
    defaultPostLinkFunction: defaultPostLinkFunction,
    defaultPreLinkFunction: defaultPreLinkFunction,
    defaultResizeFunction: defaultResizeFunction,
    defaultStartLoadingFunction: defaultStartLoadingFunction,
    deleteProp: deleteProp,
    diffObj: diffObj,
    dirName: dirName,
    download: download,
    downloadContent: downloadContent,
    each: each,
    eraseCookie: eraseCookie,
    error: error,
    escapeDquotes: escapeDquotes,
    escapeRegExp: escapeRegExp,
    escapeSquotes: escapeSquotes,
    escapeTicks: escapeTicks,
    escapeUrl: escapeUrl,
    extend: extend,
    extendOut: extendOut,
    fdate: fdate,
    fdatetime: fdatetime,
    fieldValue: fieldValue,
    fileExt: fileExt,
    filter: filter,
    filterToConditions: filterToConditions,
    findAll: findAll,
    fori: fori,
    forir: forir,
    format: format,
    formatBytes: formatBytes,
    formatDate: formatDate,
    formatSize: formatSize,
    formdata: formdata,
    fromXml: fromXml,
    ftime: ftime,
    getAllTags: getAllTags,
    getAncestors: getAncestors,
    getAttributes: getAttributes,
    getBrowserName: getBrowserName,
    getBrowserVersion: getBrowserVersion,
    getCookie: getCookie,
    getCssVar: getCssVar,
    getDay: getDay,
    getDeviceType: getDeviceType,
    getEventData: getEventData,
    getField: getField,
    getFieldValues: getFieldValues,
    getHtml: getHtml,
    getHTMLOfSelection: getHTMLOfSelection,
    getLoader: getLoader,
    getPath: getPath,
    getProp: getProp,
    getProperty: getProperty,
    getRequestId: getRequestId,
    getRow: getRow,
    getScrollBarSize: getScrollBarSize,
    getText: getText,
    getTimeoff: getTimeoff,
    happy: happy,
    hash: hash,
    hex2rgb: hex2rgb,
    history: history,
    html2text: html2text,
    imageToCanvas: imageToCanvas,
    imgToBase64: imgToBase64,
    info: info,
    init: init,
    isActiveInterface: isActiveInterface,
    isArray: isArray,
    isBlob: isBlob,
    isBoolean: isBoolean,
    isCanvas: isCanvas,
    isColor: isColor,
    isComment: isComment,
    isCp: isCp,
    isDate: isDate,
    isDesktopDevice: isDesktopDevice,
    isDimension: isDimension,
    isDom: isDom,
    isEmail: isEmail,
    isEmpty: isEmpty,
    isEvent: isEvent,
    isFocused: isFocused,
    isFunction: isFunction,
    isHostname: isHostname,
    isInside: isInside,
    isInt: isInt,
    isInViewport: isInViewport,
    isIP: isIP,
    isIterable: isIterable,
    isMobile: isMobile,
    isMobileDevice: isMobileDevice,
    isNull: isNull,
    isNumber: isNumber,
    isObject: isObject,
    isPercent: isPercent,
    isPrimitive: isPrimitive,
    isPromise: isPromise,
    isPropSize: isPropSize,
    isSame: isSame,
    isSQLDate: isSQLDate,
    isString: isString,
    isSymbol: isSymbol,
    isTabletDevice: isTabletDevice,
    isURL: isURL,
    isValidDimension: isValidDimension,
    isValidName: isValidName,
    isValue: isValue,
    isVue: isVue,
    iterate: iterate,
    lightenDarkenHex: lightenDarkenHex,
    link: link,
    log: log,
    makeReactive: makeReactive,
    map: map,
    md5: md5,
    money: money,
    move: move,
    multiorder: multiorder,
    mutateArray: mutateArray,
    nl2br: nl2br,
    numProperties: numProperties,
    objectToFormData: objectToFormData,
    order: order,
    outerHeight: outerHeight,
    outerWidth: outerWidth,
    percent: percent,
    pickValue: pickValue,
    post: post,
    postOut: postOut,
    printf: printf,
    quotes2html: quotes2html,
    randomInt: randomInt,
    randomString: randomString,
    removeAccents: removeAccents,
    removeEmpty: removeEmpty,
    removeExtraSpaces: removeExtraSpaces,
    removeHtmlComments: removeHtmlComments,
    removePrivateProp: removePrivateProp,
    removeTrailingChars: removeTrailingChars,
    repeat: repeat,
    replaceAll: replaceAll,
    replaceSelection: replaceSelection,
    resize: resize,
    rgb2hex: rgb2hex,
    riterate: riterate,
    roundDecimal: roundDecimal,
    sanitize: sanitize,
    search: search,
    selectElementText: selectElementText,
    selector: selector,
    setCookie: setCookie,
    setCssVar: setCssVar,
    setNavigationVars: setNavigationVars,
    setProp: setProp,
    setProperty: setProperty,
    shorten: shorten,
    shortenObj: shortenObj,
    shuffle: shuffle,
    simpleHash: simpleHash,
    simpleHash1: simpleHash1,
    simpleHash2: simpleHash2,
    startChrono: startChrono,
    stopChrono: stopChrono,
    string2ArrayBuffer: string2ArrayBuffer,
    submit: submit,
    substr: substr,
    sum: sum,
    timestamp: timestamp,
    toCSV: toCSV,
    toggleFullScreen: toggleFullScreen,
    translate: translate,
    treatAjaxArguments: treatAjaxArguments,
    trim: trim,
    uniqString: uniqString,
    unique: unique,
    upload: upload,
    warning: warning,
};
export { fn };
