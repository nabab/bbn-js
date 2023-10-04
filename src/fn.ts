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
};


export {fn};

