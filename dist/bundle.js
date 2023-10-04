(() => {
    const defines = {};
    const entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies, factory };
        entry[0] = name;
    }
    define("require", ["exports"], (exports) => {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: (name) => resolve(name) });
    });
    define("fn/isArray", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isArray = void 0;
        const isArray = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (!Array.isArray(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isArray = isArray;
    });
    define("fn/isNumber", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isNumber = void 0;
        const isNumber = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (['boolean', 'object', 'symbol'].includes(typeof a) || a === '' || isNaN(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isNumber = isNumber;
    });
    define("fn/isIterable", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isIterable = void 0;
        const isIterable = function (v) {
            return v && typeof v === 'object' && Symbol.iterator in Object(v);
        };
        exports.isIterable = isIterable;
    });
    define("fn/isString", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isString = void 0;
        const isString = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if ({}.toString.apply(a) !== '[object String]') {
                    return false;
                }
            }
            return true;
        };
        exports.isString = isString;
    });
    define("fn/isInt", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isInt = void 0;
        const isInt = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (!Number.isInteger(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isInt = isInt;
    });
    define("fn/isFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isFunction = void 0;
        const isFunction = function (...args) {
            if (!args.length)
                return false;
            for (let obj of args) {
                if (!(obj && obj.constructor && obj.call && obj.apply)) {
                    return false;
                }
            }
            return true;
        };
        exports.isFunction = isFunction;
    });
    define("fn/log", ["require", "exports", "fn/isFunction"], function (require, exports, isFunction_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.log = void 0;
        const log = function (...args) {
            if (window.console !== undefined) {
                let cfg;
                let level = 5;
                let fn = 'log';
                if (args[0] && typeof args[0] === 'object' && args[0]._bbn_console_style) {
                    if (args[0]._bbn_console_mode && (0, isFunction_1.isFunction)(console[args[0]._bbn_console_mode])) {
                        fn = args[0]._bbn_console_mode;
                    }
                    else {
                        cfg = args[0]._bbn_console_style;
                        level = args[0]._bbn_console_level;
                    }
                    args.shift();
                }
                if (bbn.env.loggingLevel >= level) {
                    let i = 0;
                    while (i < args.length) {
                        let t = typeof args[i];
                        if (t === 'string' || t === 'number') {
                            window.console[fn]('%c %s ', cfg, args[i]);
                        }
                        else {
                            window.console[fn](args[i]);
                        }
                        i++;
                    }
                }
            }
            return this;
        };
        exports.log = log;
    });
    define("fn/substr", ["require", "exports", "fn/isString", "fn/isInt", "fn/log"], function (require, exports, isString_1, isInt_1, log_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.substr = void 0;
        const substr = function (str, from, length) {
            if (!(0, isString_1.isString)(str) || !(0, isInt_1.isInt)(from)) {
                (0, log_1.log)(arguments);
                throw new Error(bbn._('The substr function should be applied to a string and at least a `from` argument should be given'));
            }
            if (from < 0) {
                from = str.length + from;
            }
            if (!(0, isInt_1.isInt)(length)) {
                return str.substring(from);
            }
            return str.substring(from, (length < 0 ? str.length : from) + length);
        };
        exports.substr = substr;
    });
    define("fn/removePrivateProp", ["require", "exports", "fn/substr"], function (require, exports, substr_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removePrivateProp = void 0;
        const removePrivateProp = function (obj, deep = false) {
            let r = null;
            if (typeof obj === 'object') {
                r = {};
                for (var n in obj) {
                    if ((0, substr_1.substr)(n, 0, 1).match(/^[A-z0-9]$/) && (n in obj)) {
                        if (deep && typeof obj[n] === 'object') {
                            r[n] = removePrivateProp(obj[n], true);
                        }
                        else {
                            r[n] = obj[n];
                        }
                    }
                }
            }
            return r || false;
        };
        exports.removePrivateProp = removePrivateProp;
    });
    define("fn/iterate", ["require", "exports", "fn/removePrivateProp"], function (require, exports, removePrivateProp_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.iterate = void 0;
        const iterate = function (obj, fn, noPrivate = false, reverse = false) {
            if (obj !== null && typeof obj === 'object') {
                let iter = Object.keys(noPrivate ? (0, removePrivateProp_1.removePrivateProp)(obj) : obj);
                if (reverse) {
                    iter.reverse();
                }
                for (let prop of iter) {
                    if (fn(obj[prop], prop) === false) {
                        break;
                    }
                }
            }
            return obj;
        };
        exports.iterate = iterate;
    });
    define("fn/each", ["require", "exports", "fn/isNumber", "fn/isIterable", "fn/iterate"], function (require, exports, isNumber_1, isIterable_1, iterate_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.each = void 0;
        const each = function (arr, fn) {
            if ((0, isNumber_1.isNumber)(arr) && arr > 0) {
                for (let i = 0; i < arr; i++) {
                    if (fn(i, i) === false) {
                        return;
                    }
                }
                return;
            }
            if ((0, isIterable_1.isIterable)(arr)) {
                for (let i = 0; i < arr.length; i++) {
                    if (fn(arr[i], i) === false) {
                        return;
                    }
                }
                return arr;
            }
            return (0, iterate_1.iterate)(arr, fn);
        };
        exports.each = each;
    });
    define("fn/correctCase", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.correctCase = void 0;
        const correctCase = function (str) {
            return str.replace(/[A-z]{1}/, (c) => c.toUpperCase());
        };
        exports.correctCase = correctCase;
    });
    define("fn/error", ["require", "exports", "fn/log"], function (require, exports, log_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.error = void 0;
        const error = function (errorMsg) {
            if (arguments.length > 1) {
                const args = [];
                for (let i = 1; i < arguments.length; i++) {
                    args.push(arguments[i]);
                }
                args.unshift({
                    _bbn_console_mode: 'error',
                    _bbn_console_level: 1,
                    _bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
                });
                log_2.log.apply(this, args);
            }
            throw new Error(errorMsg);
        };
        exports.error = error;
    });
    define("fn/checkType", ["require", "exports", "fn/isArray", "fn/each", "fn/isFunction", "fn/isString", "fn/correctCase", "fn/error", "fn/log"], function (require, exports, isArray_1, each_1, isFunction_2, isString_2, correctCase_1, error_1, log_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.checkType = void 0;
        const checkType = function (value, type, msg, ...logs) {
            let ok = false;
            if (!(0, isArray_1.isArray)(type)) {
                type = [type];
            }
            const typesList = [];
            (0, each_1.each)(type, (t) => {
                if (t === String) {
                    t = 'string';
                }
                else if (t === Number) {
                    t = 'number';
                }
                else if (t === Array) {
                    t = 'array';
                }
                else if (t === Boolean) {
                    t = 'boolean';
                }
                else if (t === Object) {
                    t = 'object';
                }
                else if (t === Function) {
                    t = 'function';
                }
                if ((0, isFunction_2.isFunction)(t)) {
                    typesList.push(t.name || t.constructor?.name || t.toString());
                    if (value instanceof t) {
                        ok = true;
                        return false;
                    }
                }
                else if (!(0, isString_2.isString)(t) || !(0, isFunction_2.isFunction)(bbn.fn['is' + (0, correctCase_1.correctCase)(t)])) {
                    (0, error_1.error)(`The type ${t} is not recognized`);
                }
                else if (bbn.fn['is' + (0, correctCase_1.correctCase)(t)](value)) {
                    ok = true;
                    return false;
                }
                else {
                    typesList.push(t);
                }
            });
            if (!ok) {
                (0, log_3.log)(['Value given', value, 'type', typeof value, 'expected', typesList.join(' or ')]);
                if (logs.length) {
                    (0, log_3.log)(logs);
                }
                throw new Error((msg ? msg + ' - ' : '') + bbn._('The value should be a %s', typesList.join(' ' + bbn._('or a') + ' ')));
            }
        };
        exports.checkType = checkType;
    });
    define("_", ["require", "exports", "fn/checkType"], function (require, exports, checkType_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports._ = void 0;
        /**
         * Translate an expression using the object bbn.lng
         *
         * @param {String} st
         * @returns {String}
         */
        const _ = (...args) => {
            let st = args.shift();
            let res = bbn.lng[st] || st;
            if (args.length) {
                let i = 0;
                return res.replace(/\%([d|s])/g, (match, type) => {
                    let tmp = args[i++];
                    if (!tmp) {
                        tmp = type === 'd' ? 0 : '';
                    }
                    (0, checkType_1.checkType)(tmp, type === 'd' ? 'number' : 'string', bbn._("The value you gave did not correspond, check the loggg"));
                    return tmp;
                });
            }
            return res;
        };
        exports._ = _;
    });
    define("$", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.$ = void 0;
        const $ = (selector, context) => {
            if (context?.querySelectorAll) {
                return context.querySelectorAll(selector);
            }
            return document.body.querySelectorAll(selector);
        };
        exports.$ = $;
    });
    define("lng", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.lng = void 0;
        const lng = {
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
        };
        exports.lng = lng;
    });
    define("vars", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.vars = void 0;
        const vars = {
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
                url: new RegExp('^(https?:\\/\\/)?' + // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                    '(\\#[-a-z\\d_]*)?$', 'i'),
                ip: /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
                hostname: /^[a-z\d]([a-z\d-]{0,61}[a-z\d])?(\.[a-z\d]([a-z\d-]{0,61}[a-z\d])?)*$/i,
            }
        };
        exports.vars = vars;
    });
    define("env", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.env = void 0;
        const env = {
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
        };
        exports.env = env;
    });
    define("fn/_addLoader", ["require", "exports", "fn/substr"], function (require, exports, substr_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports._addLoader = void 0;
        const _addLoader = function (requestId, prom, source) {
            /** @var {Number} tst Current timestamp */
            let tst = (new Date()).getTime();
            /** @var {String} url The original URL (part of requestId before : and md5) */
            let url = (0, substr_2.substr)(requestId, 0, requestId.length - 33);
            /** @var {Object} loader The loader object */
            let loader = {
                key: requestId,
                url: url,
                loader: prom,
                source: source,
                loading: true,
                error: false,
                abort: false,
                errorMessage: false,
                success: false,
                start: tst
            };
            // Adding the loader in bbn.env.loaders
            bbn.env.loaders.push(loader);
            // Adding an object with this loader info in bbn.env.loadersHistory
            bbn.env.loadersHistory.unshift(loader);
            /** @var {Number} idx A pointer starting at the end of  array loadersHistory */
            let idx = bbn.env.loadersHistory.length;
            // Removing elements from the loadersHistory object if their number is higher
            // than bbn.env.maxLoadersHistory
            while (idx && (bbn.env.loadersHistory.length > bbn.env.maxLoadersHistory)) {
                idx--;
                // Not removing the ones still loading
                if (!bbn.env.loading) {
                    bbn.env.loadersHistory.splice(idx, 1);
                }
            }
            return tst;
        };
        exports._addLoader = _addLoader;
    });
    define("fn/getProperty", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getProperty = void 0;
        const getProperty = function (obj, prop) {
            if (typeof obj === 'object' && typeof prop === 'string') {
                return prop.split('.').reduce((o, i) => {
                    if (o) {
                        return o[i];
                    }
                    return undefined;
                }, obj);
            }
        };
        exports.getProperty = getProperty;
    });
    define("fn/removeAccents", ["require", "exports", "fn/isString", "fn/log"], function (require, exports, isString_3, log_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeAccents = void 0;
        const removeAccents = function (st) {
            if (!(0, isString_3.isString)(st)) {
                if (st.toString) {
                    st = st.toString();
                }
                else {
                    (0, log_4.log)(st);
                    throw new Error(bbn._('removeAccent expects a string'));
                }
            }
            return st.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        };
        exports.removeAccents = removeAccents;
    });
    define("fn/isDate", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isDate = void 0;
        const isDate = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if ({}.toString.apply(a) !== '[object Date]') {
                    return false;
                }
            }
            return true;
        };
        exports.isDate = isDate;
    });
    define("fn/_compareValues", ["require", "exports", "fn/getProperty", "fn/isString", "fn/removeAccents", "fn/isDate"], function (require, exports, getProperty_1, isString_4, removeAccents_1, isDate_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports._compareValues = void 0;
        const _compareValues = function (a, b, prop, dir = 'asc') {
            let va = (0, getProperty_1.getProperty)(a, prop), vb = (0, getProperty_1.getProperty)(b, prop), ta = (typeof (va)).toLowerCase(), tb = (typeof (vb)).toLowerCase();
            if ((dir !== 'asc') && (0, isString_4.isString)(dir) && (dir.toLowerCase() === 'desc')) {
                dir = 'desc';
            }
            if (ta !== tb) {
                va = ta;
                vb = tb;
            }
            else {
                switch (ta) {
                    case 'string':
                        va = (0, removeAccents_1.removeAccents)(va).toLowerCase();
                        vb = (0, removeAccents_1.removeAccents)(vb).toLowerCase();
                        break;
                    case 'boolean':
                        va = va ? 1 : 0;
                        vb = vb ? 1 : 0;
                        break;
                    case 'object':
                        if ((0, isDate_1.isDate)(va)) {
                            va = va.getTime();
                            vb = (0, isDate_1.isDate)(vb) ? vb.getTime() : 0;
                        }
                        break;
                }
            }
            if (va < vb) {
                return dir === 'desc' ? 1 : -1;
            }
            if (va > vb) {
                return dir === 'desc' ? -1 : 1;
            }
            return 0;
        };
        exports._compareValues = _compareValues;
    });
    define("fn/numProperties", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.numProperties = void 0;
        const numProperties = function (obj) {
            if (!obj || typeof obj !== 'object') {
                return 0;
            }
            return Object.keys(obj).length;
        };
        exports.numProperties = numProperties;
    });
    define("fn/isEmpty", ["require", "exports", "fn/isArray", "fn/numProperties"], function (require, exports, isArray_2, numProperties_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isEmpty = void 0;
        const isEmpty = function (obj) {
            if (!obj) {
                return true;
            }
            if ((0, isArray_2.isArray)(obj)) {
                return obj.length ? false : true;
            }
            if (typeof obj === 'object') {
                if ((0, numProperties_1.numProperties)(obj)) {
                    return false;
                }
                return true;
            }
            return false;
        };
        exports.isEmpty = isEmpty;
    });
    define("fn/isNull", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isNull = void 0;
        const isNull = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if ({}.toString.apply(a) !== '[object Null]') {
                    return false;
                }
            }
            return true;
        };
        exports.isNull = isNull;
    });
    define("fn/isObject", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isObject = void 0;
        const isObject = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if ({}.toString.apply(a) !== '[object Object]') {
                    return false;
                }
            }
            return true;
        };
        exports.isObject = isObject;
    });
    define("fn/isDom", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isDom = void 0;
        const isDom = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (!(a instanceof HTMLElement)) {
                    return false;
                }
            }
            return true;
        };
        exports.isDom = isDom;
    });
    define("fn/isCp", ["require", "exports", "fn/isDom"], function (require, exports, isDom_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isCp = void 0;
        const isCp = function (...args) {
            if (!args.length) {
                return false;
            }
            if ('cp' in bbn && 'isComponent' in bbn['cp'] && (typeof bbn['cp'].isComponent === 'function')) {
                for (let a of args) {
                    let res = bbn.cp.isComponent(a);
                    if (!res || (0, isDom_1.isDom)(res) || !res.$el) {
                        return false;
                    }
                }
                return false;
            }
            return true;
        };
        exports.isCp = isCp;
    });
    define("fn/circularReplacer", ["require", "exports", "fn/isDom", "fn/isCp", "fn/log"], function (require, exports, isDom_2, isCp_1, log_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.circularReplacer = void 0;
        const circularReplacer = function () {
            const visited = new WeakSet();
            return (key, value) => {
                if (typeof value === 'object' && value !== null) {
                    if (visited.has(value)) {
                        return;
                    }
                    visited.add(value);
                    if (![undefined, Object, Array, null].includes(value.constructor)) {
                        if ((0, isDom_2.isDom)(value)) {
                            if (value.bbnId) {
                                value = '__BBN_DOM__' + value.tagName + '/' + value.bbnId + value.bbnHash;
                            }
                            else {
                                value = '__BBN_DOM__' + value.tagName + '/' + value.className;
                            }
                        }
                        else if ((0, isCp_1.isCp)(value)) {
                            (0, log_5.log)('IS CP');
                            value = '__BBN_CP__' + value.$options.name + '/' + value.$cid;
                        }
                        else {
                            value = value.constructor.toString();
                        }
                    }
                }
                return value;
            };
        };
        exports.circularReplacer = circularReplacer;
    });
    define("fn/simpleHash1", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.simpleHash1 = void 0;
        const simpleHash1 = function (str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash |= 0; // Convert to 32-bit integer
            }
            return hash;
        };
        exports.simpleHash1 = simpleHash1;
    });
    define("fn/simpleHash2", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.simpleHash2 = void 0;
        const simpleHash2 = function (str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = char + (hash << 6) + (hash << 16) - hash;
                hash |= 0; // Convert to 32-bit integer
            }
            return hash;
        };
        exports.simpleHash2 = simpleHash2;
    });
    define("fn/simpleHash", ["require", "exports", "fn/simpleHash1", "fn/simpleHash2"], function (require, exports, simpleHash1_1, simpleHash2_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.simpleHash = void 0;
        const simpleHash = function (str) {
            const part1 = (0, simpleHash1_1.simpleHash1)(str).toString(16).padStart(8, '0');
            const part2 = (0, simpleHash2_1.simpleHash2)(str).toString(16).padStart(8, '0');
            return part1 + part2;
        };
        exports.simpleHash = simpleHash;
    });
    define("fn/hash", ["require", "exports", "fn/log", "fn/isDom", "fn/isCp", "fn/circularReplacer", "fn/simpleHash"], function (require, exports, log_6, isDom_3, isCp_2, circularReplacer_1, simpleHash_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.hash = void 0;
        const hash = function (obj) {
            //log(obj);
            let st = '__bbn__';
            for (let i in arguments) {
                if (arguments[i]) {
                    let value = arguments[i];
                    if ((0, isDom_3.isDom)(value)) {
                        if (value.bbnId) {
                            st += '__BBN_DOM__' + value.tagName + '/' + value.bbnId + value.bbnHash;
                        }
                        else {
                            st += '__BBN_DOM__' + value.tagName + '/' + value.className;
                        }
                    }
                    else if ((0, isCp_2.isCp)(value)) {
                        (0, log_6.log)('IS CP');
                        st += '__BBN_CP__' + value.$options.name + '/' + value.$cid;
                    }
                    else {
                        try {
                            st += JSON.stringify(arguments[i], (0, circularReplacer_1.circularReplacer)());
                        }
                        catch (e) {
                            st += '.';
                        }
                    }
                }
            }
            return (0, simpleHash_1.simpleHash)(st);
        };
        exports.hash = hash;
    });
    define("fn/isSame", ["require", "exports", "fn/hash", "fn/each"], function (require, exports, hash_1, each_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isSame = void 0;
        const isSame = function (obj1, obj2, done) {
            if (!done) {
                done = [];
            }
            if (obj1 === obj2) {
                return true;
            }
            if (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object') {
                let tmp1 = Object.keys(obj1).sort(), tmp2 = Object.keys(obj2).sort();
                // Case where the keys are different
                if ((0, hash_1.hash)(tmp1) !== (0, hash_1.hash)(tmp2)) {
                    return false;
                }
                let ok = true;
                if (obj1 && typeof obj1 === 'object') {
                    if (done.includes(obj1)) {
                        return ok;
                    }
                    done.push(obj1);
                }
                (0, each_2.each)(tmp1, (a) => {
                    if (!isSame(obj1[a], obj2[a])) {
                        ok = false;
                        return false;
                    }
                });
                return ok;
            }
            return false;
        };
        exports.isSame = isSame;
    });
    define("fn/compare", ["require", "exports", "fn/isEmpty", "fn/removeAccents", "fn/isNull", "fn/isObject", "fn/isSame"], function (require, exports, isEmpty_1, removeAccents_2, isNull_1, isObject_1, isSame_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.compare = void 0;
        const compare = function (v1, v2, operator) {
            switch (operator) {
                case '===':
                case '=':
                case 'equal':
                case 'eq':
                case 'is':
                    return v1 === v2;
                case '!==':
                case 'notequal':
                case 'neq':
                case 'isnot':
                    return v1 !== v2;
                case '!=':
                case 'different':
                    return v1 != v2;
                case 'contains':
                case 'contain':
                case 'icontains':
                case 'icontain':
                    if ((0, isEmpty_1.isEmpty)(v1) || (0, isEmpty_1.isEmpty)(v2)) {
                        return false;
                    }
                    return (0, removeAccents_2.removeAccents)(v1).toLowerCase().indexOf((0, removeAccents_2.removeAccents)(v2).toLowerCase()) !== -1;
                case 'doesnotcontain':
                case 'donotcontain':
                    if ((0, isNull_1.isNull)(v1) || (0, isNull_1.isNull)(v2)) {
                        return true;
                    }
                    return (0, removeAccents_2.removeAccents)(v1.toLowerCase()).indexOf((0, removeAccents_2.removeAccents)(v2.toLowerCase())) === -1;
                case 'starts':
                case 'start':
                    if ((0, isNull_1.isNull)(v1) || (0, isNull_1.isNull)(v2)) {
                        return false;
                    }
                    if (typeof v1 !== 'string') {
                        v1 = v1.toString() || '';
                    }
                    if (typeof v2 !== 'string') {
                        v2 = v2.toString() || '';
                    }
                    return v1.indexOf(v2) === 0;
                case 'startswith':
                case 'startsi':
                case 'starti':
                case 'istarts':
                case 'istart':
                    if ((0, isNull_1.isNull)(v1) || (0, isNull_1.isNull)(v2)) {
                        return false;
                    }
                    return (0, removeAccents_2.removeAccents)(v1).toLowerCase().indexOf((0, removeAccents_2.removeAccents)(v2).toLowerCase()) === 0;
                case 'endswith':
                case 'endsi':
                case 'endi':
                case 'iends':
                case 'iend':
                    if ((0, isNull_1.isNull)(v1) || (0, isNull_1.isNull)(v2)) {
                        return false;
                    }
                    return v1.lastIndexOf(v2) === v1.length - v2.length;
                case 'like':
                    if ((0, isNull_1.isNull)(v1) || (0, isNull_1.isNull)(v2)) {
                        return false;
                    }
                    return (0, removeAccents_2.removeAccents)(v1).toLowerCase() === (0, removeAccents_2.removeAccents)(v2).toLowerCase();
                case 'gt':
                case '>':
                    return v1 > v2;
                case 'gte':
                case '>=':
                    return v1 >= v2;
                case 'lt':
                case '<':
                    return v1 < v2;
                case 'lte':
                case '<=':
                    return v1 <= v2;
                case 'isnull':
                    return v1 === null;
                case 'isnotnull':
                    return v1 !== null;
                case 'isempty':
                    return v1 === '';
                case 'isnotempty':
                    return v1 !== '';
                case '==':
                    if ((0, isObject_1.isObject)(v1, v2)) {
                        return (0, isSame_1.isSame)(v1, v2);
                    }
                default:
                    return v1 == v2;
            }
        };
        exports.compare = compare;
    });
    define("fn/compareConditions", ["require", "exports", "fn/isArray", "fn/each", "fn/compare", "fn/getProperty"], function (require, exports, isArray_3, each_3, compare_1, getProperty_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.compareConditions = void 0;
        const compareConditions = function (data, filter) {
            if (!filter.conditions || !filter.logic || !(0, isArray_3.isArray)(filter.conditions)) {
                throw new Error('Error in compareConditions: the filter should an abject with conditions and logic properties and conditions should be an array of objects');
            }
            let ok = filter.logic === 'AND' ? true : false;
            (0, each_3.each)(filter.conditions, (a) => {
                let comparator;
                if (a.conditions && (0, isArray_3.isArray)(a.conditions)) {
                    comparator = compareConditions(data, a);
                }
                else {
                    comparator = (0, compare_1.compare)((0, getProperty_2.getProperty)(data, a.field), a.value, a.operator);
                    if (comparator) {
                        let bits = a.field.split('.');
                        let prop = bits.pop();
                        if (bits.length) {
                            (0, each_3.each)(bits, (b) => (data = data[b]));
                        }
                        // Case where both are undefined: value and prop which doesn't exist; they are not the same!
                        if ((0, getProperty_2.getProperty)(data, prop) === undefined && a.value !== undefined) {
                            comparator = false;
                        }
                    }
                }
                if (comparator) {
                    if (filter.logic === 'OR') {
                        ok = true;
                        return false;
                    }
                }
                else if (filter.logic === 'AND') {
                    ok = false;
                    return false;
                }
            });
            return ok;
        };
        exports.compareConditions = compareConditions;
    });
    define("fn/filterToConditions", ["require", "exports", "fn/isObject", "fn/isArray", "fn/iterate"], function (require, exports, isObject_2, isArray_4, iterate_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.filterToConditions = void 0;
        const filterToConditions = function (filter, operator = '=') {
            if (!(0, isObject_2.isObject)(filter)) {
                throw new Error('Error in filterToCondition: filter must be an object');
            }
            if (!filter.conditions || !(0, isArray_4.isArray)(filter.conditions)) {
                let tmp = [];
                (0, iterate_2.iterate)(filter, (a, n) => {
                    if ((0, isObject_2.isObject)(a) && typeof a.conditions === 'object') {
                        tmp.push(filterToConditions(a));
                    }
                    else {
                        tmp.push({
                            field: n,
                            operator: operator,
                            value: a,
                        });
                    }
                });
                filter = {
                    conditions: tmp,
                };
            }
            if (!filter.logic) {
                filter.logic = 'AND';
            }
            return filter;
        };
        exports.filterToConditions = filterToConditions;
    });
    define("fn/search", ["require", "exports", "fn/isIterable", "fn/compareConditions", "fn/filterToConditions", "fn/isObject", "fn/numProperties", "fn/isNumber"], function (require, exports, isIterable_2, compareConditions_1, filterToConditions_1, isObject_3, numProperties_2, isNumber_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.search = void 0;
        const search = function (arr, prop, val = null, operator = '=', startFrom = 0) {
            if (!(0, isIterable_2.isIterable)(arr)) {
                throw new Error(bbn._('The first argument for a search should be iterable') + ' ' + typeof arr + ' ' + bbn._('given'));
            }
            if (!arr.length) {
                return -1;
            }
            let filter;
            let isFn = false;
            if (typeof prop === 'string') {
                filter = {
                    conditions: [
                        {
                            field: prop,
                            value: val,
                            operator: operator || '=',
                        },
                    ]
                };
            }
            else if (!prop) {
                isFn = true;
                filter = a => {
                    return (0, compareConditions_1.compareConditions)({ value: a }, (0, filterToConditions_1.filterToConditions)({
                        logic: 'AND',
                        conditions: [
                            {
                                field: 'value',
                                operator: operator || '=',
                                value: val,
                            },
                        ],
                    }));
                };
            }
            else {
                startFrom = typeof (operator) === 'number' ? operator : 0;
                operator = val;
                if ((0, isObject_3.isObject)(prop)) {
                    filter = prop;
                }
                else if (typeof (prop) === 'function') {
                    isFn = true;
                    filter = prop;
                }
            }
            if (isFn || ((0, isObject_3.isObject)(filter) && (0, numProperties_2.numProperties)(filter))) {
                if ((0, isNumber_2.isNumber)(operator)) {
                    startFrom = typeof (operator) === 'number' ? operator : 0;
                    operator = undefined;
                }
                if (!(0, isNumber_2.isNumber)(startFrom)) {
                    startFrom = 0;
                }
                if (typeof filter === 'function') {
                    for (let i = startFrom; i < arr.length; i++) {
                        if (filter(arr[i])) {
                            return i;
                        }
                    }
                }
                else {
                    filter = (0, filterToConditions_1.filterToConditions)(filter);
                    for (let i = startFrom; i < arr.length; i++) {
                        if ((0, compareConditions_1.compareConditions)(arr[i], filter)) {
                            return i;
                        }
                    }
                }
            }
            return -1;
        };
        exports.search = search;
    });
    define("fn/getRow", ["require", "exports", "fn/search"], function (require, exports, search_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getRow = void 0;
        const getRow = function (arr, prop, val = null, operator = '=') {
            var idx = (0, search_1.search)(arr, prop, val, operator);
            if (idx > -1) {
                return arr[idx];
            }
            return false;
        };
        exports.getRow = getRow;
    });
    define("fn/_deleteLoader", ["require", "exports", "fn/search", "fn/getRow", "fn/isObject"], function (require, exports, search_2, getRow_1, isObject_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports._deleteLoader = void 0;
        const _deleteLoader = function (requestId, res = null, isAbort = false) {
            let idx = (0, search_2.search)(bbn.env.loaders, { key: requestId });
            if (idx > -1) {
                let loader = bbn.env.loaders.splice(idx, 1)[0];
                let history = (0, getRow_1.getRow)(bbn.env.loadersHistory, { key: requestId, start: loader.start });
                if (history) {
                    history.loading = false;
                    history.duration = new Date().getTime() - loader.start;
                    if (typeof res === 'string') {
                        history.errorMessage = res;
                        history.error = !isAbort;
                        history.abort = isAbort;
                    }
                    else if ((0, isObject_4.isObject)(res)) {
                        history.success = true;
                    }
                }
                return true;
            }
            return false;
        };
        exports._deleteLoader = _deleteLoader;
    });
    define("fn/getLoader", ["require", "exports", "fn/search"], function (require, exports, search_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getLoader = void 0;
        const getLoader = function (requestId) {
            let idx = (0, search_3.search)(bbn.env.loaders, { key: requestId });
            if (idx > -1) {
                return bbn.env.loaders[idx];
            }
            return null;
        };
        exports.getLoader = getLoader;
    });
    define("fn/abort", ["require", "exports", "fn/getLoader"], function (require, exports, getLoader_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.abort = void 0;
        const abort = function (requestId) {
            let loader = (0, getLoader_1.getLoader)(requestId);
            if (loader && loader.source) {
                //_deleteLoader(requestId);
                loader.source.cancel('Operation canceled by the user.');
            }
            /*
              else {
                throw new Error("Impossible to find the loader " + requestId);
              }
              */
        };
        exports.abort = abort;
    });
    define("fn/filter", ["require", "exports", "fn/isArray", "fn/each", "fn/filterToConditions", "fn/compareConditions"], function (require, exports, isArray_5, each_4, filterToConditions_2, compareConditions_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.filter = void 0;
        const filter = function (arr, prop, val = null, operator = '=') {
            if (!(0, isArray_5.isArray)(arr)) {
                bbn.fn.log("NOT ARRAY", arr);
                throw new Error('Error in filter: The first argument must be an array');
            }
            let cfg = {};
            const res = [];
            const isFn = typeof (prop) === 'function';
            if (!prop || !arr.length) {
                return arr;
            }
            if (arr.length) {
                if (typeof prop === 'object') {
                    operator = val;
                    cfg = prop;
                }
                else if (typeof prop === 'string') {
                    cfg[prop] = val;
                }
                else if (!isFn) {
                    throw new Error('Search function error: The prop argument should be a string or an object');
                }
                if (typeof (prop) === 'function') {
                    (0, each_4.each)(arr, (a, i) => {
                        if (prop(a, i)) {
                            res.push(a);
                        }
                    });
                }
                else {
                    cfg = (0, filterToConditions_2.filterToConditions)(cfg, operator);
                    if (cfg.conditions && cfg.logic) {
                        (0, each_4.each)(arr, (a) => {
                            if ((0, compareConditions_2.compareConditions)(a, cfg)) {
                                res.push(a);
                            }
                        });
                    }
                }
                return res;
            }
        };
        exports.filter = filter;
    });
    define("fn/abortURL", ["require", "exports", "fn/each", "fn/filter"], function (require, exports, each_5, filter_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.abortURL = void 0;
        const abortURL = function (url) {
            (0, each_5.each)((0, filter_1.filter)(bbn.env.loaders, { url: url }), (a) => {
                if (a && a.source) {
                    a.source.cancel('Operation canceled by the user.');
                }
                else {
                    throw new Error('Impossible to find the loader with URL ' + url);
                }
            });
        };
        exports.abortURL = abortURL;
    });
    define("fn/addColors", ["require", "exports", "fn/numProperties", "fn/iterate"], function (require, exports, numProperties_3, iterate_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.addColors = void 0;
        const addColors = function (colors) {
            if ((0, numProperties_3.numProperties)(colors)) {
                if (!bbn.vars.colors) {
                    bbn.vars.colors = {};
                }
                let element = document.createElement('style');
                document.head.appendChild(element);
                let sheet = element.sheet;
                // Append style element to head
                let i = 0;
                (0, iterate_3.iterate)(colors, (v, n) => {
                    bbn.vars.colors[n] = v;
                    sheet.insertRule('.bbn-' + n + ', .bbn-color-text-' + n + ' {color: ' + v + ' !important;}', i);
                    sheet.insertRule('svg.bbn-' +
                        n +
                        ', .bbn-' +
                        n +
                        ' svg, svg.bbn-color-text-' +
                        n +
                        ', .bbn-color-text-' +
                        n +
                        ' svg {fill: ' +
                        v +
                        ';}', i);
                    sheet.insertRule('.bbn-bg-' +
                        n +
                        ', .bbn-color-bg-' +
                        n +
                        ', .bbn-color-background-' +
                        n +
                        ' {background-color: ' +
                        v +
                        ' !important;}', i);
                    sheet.insertRule('.bbn-border-' + n + ', .bbn-color-border-' + n + ' {border-color: ' + v + ' !important;}', i);
                    sheet.insertRule('.bbn-color-' + n + ' {border-color: ' + v + '; background-color: ' + v + '; color: ' + v + ';}', i);
                });
            }
        };
        exports.addColors = addColors;
    });
    define("fn/addInputs", ["require", "exports", "fn/iterate"], function (require, exports, iterate_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.addInputs = void 0;
        const addInputs = function (form, params = null, prefix = '') {
            if (form && form.tagName === 'FORM') {
                let appendToForm = (name, val) => {
                    let input = document.createElement('input');
                    input.setAttribute('type', 'hidden');
                    input.setAttribute('name', name);
                    input.setAttribute('value', val);
                    form.appendChild(input);
                };
                params = JSON.parse(JSON.stringify(params || {}));
                prefix = prefix || '';
                if (params) {
                    (0, iterate_4.iterate)(params, (param, key) => {
                        let name = prefix ? `${prefix}[${key}]` : key;
                        if (param instanceof Date) {
                            appendToForm(name, param.toISOString());
                        }
                        else if (param instanceof Array) {
                            param.forEach((e, i) => {
                                const tempName = `${name}[${i}]`;
                                if (typeof e === 'object') {
                                    addInputs(form, e, tempName);
                                }
                                else {
                                    appendToForm(tempName, e.toString());
                                }
                            });
                        }
                        else if (typeof param === 'object' && !(param instanceof File)) {
                            addInputs(form, param, name);
                        }
                        else {
                            appendToForm(name, param.toString());
                        }
                    });
                }
            }
        };
        exports.addInputs = addInputs;
    });
    define("fn/addStyle", ["require", "exports", "fn/isObject", "fn/iterate"], function (require, exports, isObject_5, iterate_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.addStyle = void 0;
        const addStyle = function (ele, o) {
            if ((0, isObject_5.isObject)(o)) {
                (0, iterate_5.iterate)(o, (v, k) => {
                    ele.style[k] = v;
                });
            }
        };
        exports.addStyle = addStyle;
    });
    define("fn/adjustSize", ["require", "exports", "fn/each"], function (require, exports, each_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.adjustSize = void 0;
        const adjustSize = function (type, eles) {
            let max = 0, idx;
            (0, each_6.each)(eles, (el) => {
                el.style[type] = 'auto';
            });
            (0, each_6.each)(eles, (el, i) => {
                let rect = el.getBoundingClientRect(), s = rect[type] % 1 ? rect[type] - (rect[type] % 1) + 1 : rect[type];
                //s = rect[type];
                if (s > max) {
                    max = s;
                    idx = i;
                }
            });
            (0, each_6.each)(eles, (el, i) => {
                if (max) {
                    el.style[type] = max + 'px';
                }
            });
        };
        exports.adjustSize = adjustSize;
    });
    define("fn/adjustHeight", ["require", "exports", "fn/isIterable", "fn/adjustSize"], function (require, exports, isIterable_3, adjustSize_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.adjustHeight = void 0;
        const adjustHeight = function () {
            let args = arguments;
            if (args.length === 1 && (0, isIterable_3.isIterable)(args[0])) {
                args = args[0];
            }
            return (0, adjustSize_1.adjustSize)('height', args);
        };
        exports.adjustHeight = adjustHeight;
    });
    define("fn/adjustWidth", ["require", "exports", "fn/isIterable", "fn/adjustSize"], function (require, exports, isIterable_4, adjustSize_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.adjustWidth = void 0;
        const adjustWidth = function () {
            let args = arguments;
            if (args.length === 1 && (0, isIterable_4.isIterable)(args[0])) {
                args = args[0];
            }
            return (0, adjustSize_2.adjustSize)('width', args);
        };
        exports.adjustWidth = adjustWidth;
    });
    define("fn/escapeRegExp", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeRegExp = void 0;
        const escapeRegExp = function (str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        };
        exports.escapeRegExp = escapeRegExp;
    });
    define("fn/replaceAll", ["require", "exports", "fn/isObject", "fn/escapeRegExp"], function (require, exports, isObject_6, escapeRegExp_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.replaceAll = void 0;
        const replaceAll = function (find, replace, str, flags = '') {
            return str.toString().replace((0, isObject_6.isObject)(find) ? find : new RegExp((0, escapeRegExp_1.escapeRegExp)(find), 'g' + flags), replace);
        };
        exports.replaceAll = replaceAll;
    });
    define("fn/md5", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.md5 = void 0;
        const md5 = function (st) {
            var hc = '0123456789abcdef';
            function rh(n) {
                var j, s = '';
                for (j = 0; j <= 3; j++)
                    s += hc.charAt((n >> (j * 8 + 4)) & 0x0f) + hc.charAt((n >> (j * 8)) & 0x0f);
                return s;
            }
            function ad(x, y) {
                var l = (x & 0xffff) + (y & 0xffff);
                var m = (x >> 16) + (y >> 16) + (l >> 16);
                return (m << 16) | (l & 0xffff);
            }
            function rl(n, c) {
                return (n << c) | (n >>> (32 - c));
            }
            function cm(q, a, b, x, s, t) {
                return ad(rl(ad(ad(a, q), ad(x, t)), s), b);
            }
            function ff(a, b, c, d, x, s, t) {
                return cm((b & c) | (~b & d), a, b, x, s, t);
            }
            function gg(a, b, c, d, x, s, t) {
                return cm((b & d) | (c & ~d), a, b, x, s, t);
            }
            function hh(a, b, c, d, x, s, t) {
                return cm(b ^ c ^ d, a, b, x, s, t);
            }
            function ii(a, b, c, d, x, s, t) {
                return cm(c ^ (b | ~d), a, b, x, s, t);
            }
            function sb(x) {
                var i;
                var nblk = ((x.length + 8) >> 6) + 1;
                var blks = new Array(nblk * 16);
                for (i = 0; i < nblk * 16; i++)
                    blks[i] = 0;
                for (i = 0; i < x.length; i++)
                    blks[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
                blks[i >> 2] |= 0x80 << ((i % 4) * 8);
                blks[nblk * 16 - 2] = x.length * 8;
                return blks;
            }
            var i, x = sb(st), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, olda, oldb, oldc, oldd;
            for (i = 0; i < x.length; i += 16) {
                olda = a;
                oldb = b;
                oldc = c;
                oldd = d;
                a = ff(a, b, c, d, x[i + 0], 7, -680876936);
                d = ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = ff(c, d, a, b, x[i + 10], 17, -42063);
                b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
                a = gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = gg(b, c, d, a, x[i + 0], 20, -373897302);
                a = gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
                a = hh(a, b, c, d, x[i + 5], 4, -378558);
                d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = hh(d, a, b, c, x[i + 0], 11, -358537222);
                c = hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = hh(b, c, d, a, x[i + 2], 23, -995338651);
                a = ii(a, b, c, d, x[i + 0], 6, -198630844);
                d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = ii(b, c, d, a, x[i + 9], 21, -343485551);
                a = ad(a, olda);
                b = ad(b, oldb);
                c = ad(c, oldc);
                d = ad(d, oldd);
            }
            return rh(a) + rh(b) + rh(c) + rh(d);
        };
        exports.md5 = md5;
    });
    define("fn/getRequestId", ["require", "exports", "fn/iterate", "fn/md5"], function (require, exports, iterate_6, md5_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getRequestId = void 0;
        const getRequestId = function (url, data, datatype) {
            let d = {};
            if (data) {
                (0, iterate_6.iterate)(data, (a, n) => {
                    if (n.indexOf('_bbn') === -1) {
                        d[n] = a;
                    }
                });
            }
            return url + ':' + (0, md5_1.md5)((datatype || 'json') + JSON.stringify(d));
        };
        exports.getRequestId = getRequestId;
    });
    define("fn/extend", ["require", "exports", "fn/iterate", "fn/isArray", "fn/each", "fn/isObject"], function (require, exports, iterate_7, isArray_6, each_7, isObject_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.extend = void 0;
        const extend = function (...originalArgs) {
            let deep = false;
            let args = [];
            for (let i = 0; i < originalArgs.length; i++) {
                if (originalArgs[i] === true) {
                    deep = true;
                }
                else if (!originalArgs[i]) {
                    continue;
                }
                else if (typeof originalArgs[i] !== 'object') {
                    throw new Error(bbn._('Error in extend: all arguments should be object, you have given ') + typeof originalArgs[i]);
                }
                else {
                    args.push(originalArgs[i]);
                }
            }
            if (!args.length) {
                throw new Error('No argument given');
            }
            let out = args[0];
            for (let i = 1; i < args.length; i++) {
                (0, iterate_7.iterate)(args[i], (a, key) => {
                    if (deep) {
                        if ((0, isArray_6.isArray)(a)) {
                            out[key] = (0, isArray_6.isArray)(out[key]) ? out[key] : [];
                            (0, each_7.each)(a, (b, i) => {
                                if (b && typeof b === 'object') {
                                    let tmp = out[key][i];
                                    if ((0, isArray_6.isArray)(b)) {
                                        if (!(0, isArray_6.isArray)(tmp)) {
                                            tmp = [];
                                        }
                                    }
                                    else if (!(0, isObject_7.isObject)(tmp)) {
                                        tmp = {};
                                    }
                                    out[key][i] = extend(true, tmp, b);
                                }
                                else {
                                    out[key][i] = b;
                                }
                            });
                        }
                        else if ((0, isObject_7.isObject)(a)) {
                            out[key] = extend(true, out[key] && typeof out[key] === 'object' ? out[key] : Object.create(Object.getPrototypeOf(a)), a);
                        }
                        else {
                            out[key] = a;
                        }
                    }
                    else if (out[key] !== a) {
                        out[key] = a;
                    }
                });
                if (args[i].__bbnNoData) {
                    Object.defineProperty(out, '__bbnNoData', {
                        value: true,
                        enumerable: false,
                        configurable: false,
                        writable: false,
                    });
                }
            }
            return out;
        };
        exports.extend = extend;
    });
    define("fn/defaultEndLoadingFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultEndLoadingFunction = void 0;
        const defaultEndLoadingFunction = function (url, timestamp, data, res) {
            return true;
        };
        exports.defaultEndLoadingFunction = defaultEndLoadingFunction;
    });
    define("fn/defaultAjaxErrorFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultAjaxErrorFunction = void 0;
        const defaultAjaxErrorFunction = function (jqXHR, textStatus, errorThrown) {
            return false;
        };
        exports.defaultAjaxErrorFunction = defaultAjaxErrorFunction;
    });
    define("fn/defaultAjaxAbortFunction", ["require", "exports", "fn/log"], function (require, exports, log_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultAjaxAbortFunction = void 0;
        const defaultAjaxAbortFunction = function (message, url = '') {
            (0, log_7.log)(message);
        };
        exports.defaultAjaxAbortFunction = defaultAjaxAbortFunction;
    });
    define("fn/defaultStartLoadingFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultStartLoadingFunction = void 0;
        const defaultStartLoadingFunction = function (url, tst, data, requestId = null) {
            return true;
        };
        exports.defaultStartLoadingFunction = defaultStartLoadingFunction;
    });
    define("fn/ajax", ["require", "exports", "fn/isObject", "fn/replaceAll", "fn/getRequestId", "fn/getLoader", "fn/extend", "fn/numProperties", "fn/_deleteLoader", "fn/defaultEndLoadingFunction", "fn/isFunction", "fn/defaultAjaxErrorFunction", "fn/defaultAjaxAbortFunction", "fn/_addLoader", "fn/defaultStartLoadingFunction"], function (require, exports, isObject_8, replaceAll_1, getRequestId_1, getLoader_2, extend_1, numProperties_4, _deleteLoader_1, defaultEndLoadingFunction_1, isFunction_3, defaultAjaxErrorFunction_1, defaultAjaxAbortFunction_1, _addLoader_1, defaultStartLoadingFunction_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.ajax = void 0;
        const ajax = function (url, datatype, data, success, failure, abort) {
            if (arguments.length === 1 && url && typeof url === 'object' && url.url) {
                if (url.abort) {
                    abort = url.abort;
                }
                if (url.failure) {
                    failure = url.failure;
                }
                if (url.success) {
                    success = url.success;
                }
                if (url.data) {
                    data = url.data;
                }
                if (url.datatype) {
                    datatype = url.datatype;
                }
                url = url.url;
            }
            if (!url) {
                return;
            }
            if (url && typeof url === 'string') {
                if (url.indexOf('://') === -1) {
                    // Prevent protocol mismatch by Axios
                    url = (0, replaceAll_1.replaceAll)('//', '/', url);
                }
                if (!datatype) {
                    datatype = 'json';
                }
                let requestId = (0, getRequestId_1.getRequestId)(url, data, datatype);
                let loaderObj = (0, getLoader_2.getLoader)(requestId);
                //log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
                if (loaderObj?.loader) {
                    return loaderObj.loader;
                }
                if (bbn.env.token) {
                    (0, extend_1.extend)(data || {}, { _bbn_token: bbn.env.token });
                }
                let cancelToken = axios.CancelToken;
                let source = cancelToken.source();
                let options = {
                    responseType: datatype,
                    cancelToken: source.token,
                };
                if (datatype === 'text') {
                    options.headers = {
                        accept: 'text/javascript',
                        'Content-Type': 'text/javascript',
                    };
                }
                let args = [url];
                if ((0, isObject_8.isObject)(data) && (0, numProperties_4.numProperties)(data) > 0) {
                    args.push(data);
                }
                args.push(options);
                let loader = axios[args.length === 2 ? 'get' : 'post']
                    .apply(axios, ...args)
                    .then((res) => {
                    (0, _deleteLoader_1._deleteLoader)(requestId, res);
                    (0, defaultEndLoadingFunction_1.defaultEndLoadingFunction)(url, tst, data, res);
                    switch (res.status) {
                        case 200:
                            if ((0, isFunction_3.isFunction)(success)) {
                                success(res.data, res.headers);
                            }
                            break;
                        default:
                            (0, defaultAjaxErrorFunction_1.defaultAjaxErrorFunction)(loader, res);
                    }
                    return res;
                })
                    .catch((err) => {
                    let isAbort = axios.isCancel(err);
                    (0, _deleteLoader_1._deleteLoader)(requestId, err.message || err.response.data, isAbort);
                    (0, defaultEndLoadingFunction_1.defaultEndLoadingFunction)(url, tst, data, err);
                    if (isAbort) {
                        let ok = 1;
                        if ((0, isFunction_3.isFunction)(abort)) {
                            ok = abort(err.message, url);
                        }
                        if (ok) {
                            (0, defaultAjaxAbortFunction_1.defaultAjaxAbortFunction)(err.message, url);
                        }
                    }
                    else {
                        let ok = 1;
                        if ((0, isFunction_3.isFunction)(failure)) {
                            ok = failure(err.request, err);
                        }
                        if (ok) {
                            (0, defaultAjaxErrorFunction_1.defaultAjaxErrorFunction)(err.request, err.response ? err.response.data : '', err.response ? err.response.status : err);
                        }
                    }
                });
                let tst = (0, _addLoader_1._addLoader)(requestId, loader, source);
                (0, defaultStartLoadingFunction_1.defaultStartLoadingFunction)(url, tst, data, requestId);
                return loader;
            }
        };
        exports.ajax = ajax;
    });
    define("fn/analyzeFunction", ["require", "exports", "fn/md5"], function (require, exports, md5_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.analyzeFunction = void 0;
        const analyzeFunction = function (fn) {
            const functionString = fn.toString();
            let all = functionString.split('');
            let exp = '';
            let isArrow = false;
            let isAsync = false;
            let hasFunction = false;
            let name = null;
            let parOpened = 0;
            let parClosed = 0;
            let args = [];
            let currentArg = {};
            let body;
            let currentQuote = '';
            let escapable = ['"', "'", '`'];
            let isEscaped = false;
            let settingDefault = false;
            for (let i = 0; i < all.length; i++) {
                if (all[i] === currentQuote && !isEscaped && currentQuote) {
                    currentQuote = '';
                    exp += all[i];
                }
                else if (currentQuote) {
                    exp += all[i];
                }
                else if (escapable.includes(all[i]) && !isEscaped) {
                    currentQuote = all[i];
                    exp += all[i];
                }
                else if (all[i] === '(') {
                    parOpened++;
                    if (exp.trim() !== '') {
                        if (exp.trim() === 'function') {
                            hasFunction = true;
                        }
                        if (exp.trim() !== 'async') {
                            name = exp.trim();
                        }
                        exp = '';
                    }
                }
                else if (all[i] === ')') {
                    if (parOpened === parClosed + 1) {
                        if (settingDefault) {
                            currentArg.default = exp.trim();
                            settingDefault = false;
                        }
                        else if (exp) {
                            currentArg.name = exp.trim();
                        }
                        if (currentArg.name || currentArg.default) {
                            args.push(currentArg);
                            currentArg = {};
                        }
                        exp = '';
                    }
                    parClosed++;
                }
                else if (all[i] === '=') {
                    if (functionString.substr(i, 2) === '=>') {
                        if (exp.trim() !== '' && parOpened === parClosed) {
                            currentArg.name = exp.trim();
                            args.push(currentArg);
                            currentArg = {};
                            exp = '';
                        }
                        isArrow = true;
                        i++;
                        continue;
                    }
                    else if (parOpened > parClosed && !settingDefault) {
                        currentArg.name = exp.trim();
                        exp = '';
                        settingDefault = true;
                    }
                    else {
                        exp += all[i];
                    }
                }
                else if (all[i] === ',') {
                    if (parOpened > parClosed) {
                        if (settingDefault) {
                            currentArg.default = exp.trim();
                            settingDefault = false;
                        }
                        else if (exp) {
                            currentArg.name = exp.trim();
                        }
                        if (currentArg.name || currentArg.default) {
                            args.push(currentArg);
                            currentArg = {};
                        }
                        exp = '';
                    }
                    else {
                        throw Error("Unexpected ',' while parsing function");
                    }
                }
                else if (all[i] === '{' || all[i] === '}') {
                    body = functionString.substring(i).trim();
                    break;
                }
                else if (isArrow) {
                    body = functionString.substring(functionString.indexOf('=>') + 2).trim();
                    break;
                }
                else if (all[i] === ' ') {
                    if (exp.trim() !== '') {
                        if (exp.trim() === 'async') {
                            isAsync = true;
                            exp = '';
                        }
                    }
                }
                else {
                    exp += all[i];
                }
            }
            if (!body) {
                if (isArrow) {
                    body = exp;
                }
                else {
                    throw Error('Unexpected end of function while parsing function');
                }
            }
            const argString = args.map((arg) => arg.name + (arg.default ? ' = ' + arg.default : '')).join(', ');
            const hash = (0, md5_2.md5)(body + (name ? '-' + name : '') + (argString ? '-' + argString : ''));
            return {
                body,
                args,
                argString,
                isArrow,
                hasFunction,
                name,
                isAsync,
                hash,
            };
        };
        exports.analyzeFunction = analyzeFunction;
    });
    define("fn/animateCss", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.animateCss = void 0;
        const animateCss = function (ele, animationName, callback) {
            let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            /*$(ele).addClass('animated ' + animationName).one(animationEnd, function(){
                if ( typeof callback == 'function' ){ // make sure the callback is a function
                  callback.call(this); // brings the scope to the callback
                }
                $(this).removeClass('animated ' + animationName);
              })*/
            ele.classList.add('animated');
            ele.classList.add(animationName);
            ele.addEventListener(animationEnd, (e) => {
                e.target.removeEventListener(e.type, arguments.callee);
                if (typeof callback == 'function') {
                    // make sure the callback is a function
                    callback.call(this); // brings the scope to the callback
                }
                e.target.classList.remove(animationName);
            });
        };
        exports.animateCss = animateCss;
    });
    define("fn/arrayBuffer2String", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.arrayBuffer2String = void 0;
        const arrayBuffer2String = function (buf) {
            return String.fromCharCode.apply(null, new Uint16Array(buf));
        };
        exports.arrayBuffer2String = arrayBuffer2String;
    });
    define("fn/arrayFromProp", ["require", "exports", "fn/each", "fn/getProperty"], function (require, exports, each_8, getProperty_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.arrayFromProp = void 0;
        const arrayFromProp = function (arr, prop) {
            let r = [];
            (0, each_8.each)(arr, (a, i) => {
                r.push((0, getProperty_3.getProperty)(a, prop));
            });
            return r;
        };
        exports.arrayFromProp = arrayFromProp;
    });
    define("fn/autoExtend", ["require", "exports", "fn/extend"], function (require, exports, extend_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.autoExtend = void 0;
        const autoExtend = function (namespace, obj) {
            if (!bbn[namespace]) {
                bbn[namespace] = {};
                //$.extend(true, bbn[namespace], obj);
                (0, extend_2.extend)(bbn[namespace], obj);
            }
            else {
                // $.extend(true, bbn[namespace], obj);
                (0, extend_2.extend)(bbn[namespace], obj);
            }
        };
        exports.autoExtend = autoExtend;
    });
    define("fn/baseName", ["require", "exports", "fn/isString", "fn/substr"], function (require, exports, isString_5, substr_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.baseName = void 0;
        const baseName = function (path, suffix) {
            if (path && (0, isString_5.isString)(path)) {
                let bits = path.split('/');
                let res = bits.pop();
                if (!suffix) {
                    return res;
                }
                let len = suffix.length;
                if (res && (0, substr_3.substr)(res, -len) === suffix) {
                    return (0, substr_3.substr)(res, 0, res.length - len);
                }
            }
            return '';
        };
        exports.baseName = baseName;
    });
    define("fn/br2nl", ["require", "exports", "fn/replaceAll"], function (require, exports, replaceAll_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.br2nl = void 0;
        const br2nl = function (st) {
            return (0, replaceAll_2.replaceAll)('<br />', '\n', (0, replaceAll_2.replaceAll)('<br/>', '\n', (0, replaceAll_2.replaceAll)('<br>', '\n', st)));
        };
        exports.br2nl = br2nl;
    });
    define("fn/date", ["require", "exports", "fn/isNumber", "fn/substr", "fn/isDate"], function (require, exports, isNumber_3, substr_4, isDate_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.date = void 0;
        const date = function (v) {
            let d = false, t = typeof v;
            if (v === undefined) {
                return new Date();
            }
            if (t === 'number' || ((0, isNumber_3.isNumber)(v) && v !== '')) {
                if (v < 10000000000) {
                    v = v * 1000;
                }
                return new Date(v);
            }
            if (t === 'string') {
                if (v.length === 10) {
                    return new Date(parseInt((0, substr_4.substr)(v, 0, 4)), parseInt((0, substr_4.substr)(v, 5, 2)) - 1, parseInt((0, substr_4.substr)(v, 8, 2)), 12);
                }
                else if (v.length === 19) {
                    return new Date(parseInt((0, substr_4.substr)(v, 0, 4)), parseInt((0, substr_4.substr)(v, 5, 2)) - 1, parseInt((0, substr_4.substr)(v, 8, 2)), parseInt((0, substr_4.substr)(v, 11, 2)), parseInt((0, substr_4.substr)(v, 14, 2)), parseInt((0, substr_4.substr)(v, 17, 2)));
                }
            }
            else if ((0, isDate_2.isDate)(v)) {
                return v;
            }
            return d;
        };
        exports.date = date;
    });
    define("fn/fdatetime", ["require", "exports", "fn/date", "fn/isDate", "fn/isString"], function (require, exports, date_1, isDate_3, isString_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fdatetime = void 0;
        const fdatetime = function (d, wrong_result) {
            let r = (0, date_1.date)(d);
            if (!(0, isDate_3.isDate)(r)) {
                return wrong_result && (0, isString_6.isString)(wrong_result) ? wrong_result : '';
            }
            if (undefined !== dayjs) {
                //return dayjs(r).format('lll');
                return dayjs(r).calendar(null, {
                    sameDay: '[' + bbn._('Today') + '] HH:mm',
                    nextDay: '[' + bbn._('Tomorrow') + '] HH:mm',
                    nextWeek: 'ddd D HH:mm',
                    lastDay: '[' + bbn._('Yesterday') + '] HH:mm',
                    lastWeek: 'ddd D HH:mm',
                    sameElse: 'DD/MM/YYYY HH:mm',
                });
                //return dayjs(r).format("DD/MM/YYYY HH:mm")
            }
            return r.toLocaleDateString();
        };
        exports.fdatetime = fdatetime;
    });
    define("fn/fdate", ["require", "exports", "fn/fdatetime", "fn/date", "fn/isDate", "fn/isString"], function (require, exports, fdatetime_1, date_2, isDate_4, isString_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fdate = void 0;
        const fdate = function (d, wrong_result) {
            // Retro compatibility
            if (wrong_result === true) {
                return (0, fdatetime_1.fdatetime)(d);
            }
            let r = (0, date_2.date)(d);
            if (!(0, isDate_4.isDate)(r)) {
                return wrong_result && (0, isString_7.isString)(wrong_result) ? wrong_result : '';
            }
            if (undefined !== dayjs) {
                return dayjs(r).format('L');
            }
            return r.toLocaleDateString();
        };
        exports.fdate = fdate;
    });
    define("fn/calendar", ["require", "exports", "fn/fdate", "fn/date", "fn/isDate", "fn/isString"], function (require, exports, fdate_1, date_3, isDate_5, isString_8) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.calendar = void 0;
        dayjs.extend(window['dayjs_plugin_calendar']);
        const calendar = function (d, wrong_result) {
            if (undefined === dayjs) {
                return (0, fdate_1.fdate)(d, wrong_result);
            }
            let r = (0, date_3.date)(d);
            if (!(0, isDate_5.isDate)(r)) {
                return wrong_result && (0, isString_8.isString)(wrong_result) ? wrong_result : '';
            }
            return dayjs(r).calendar(null, {
                sameDay: '[' + bbn._('Today') + ']',
                nextDay: '[' + bbn._('Tomorrow') + ']',
                nextWeek: 'ddd D',
                lastDay: '[' + bbn._('Yesterday') + ']',
                lastWeek: 'ddd D',
                sameElse: 'L',
            });
        };
        exports.calendar = calendar;
    });
    define("fn/defaultLinkFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultLinkFunction = void 0;
        const defaultLinkFunction = function (responseObj, ele) {
            return true;
        };
        exports.defaultLinkFunction = defaultLinkFunction;
    });
    define("fn/defaultPostLinkFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultPostLinkFunction = void 0;
        const defaultPostLinkFunction = function (r, ele) {
            return true;
        };
        exports.defaultPostLinkFunction = defaultPostLinkFunction;
    });
    define("fn/defaultAlertFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultAlertFunction = void 0;
        const defaultAlertFunction = function (msg, title) {
            /** @todo */
            alert(msg);
        };
        exports.defaultAlertFunction = defaultAlertFunction;
    });
    define("fn/callback", ["require", "exports", "fn/error", "fn/defaultLinkFunction", "fn/isFunction", "fn/log", "fn/defaultPostLinkFunction", "fn/defaultAlertFunction"], function (require, exports, error_2, defaultLinkFunction_1, isFunction_4, log_8, defaultPostLinkFunction_1, defaultAlertFunction_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.callback = void 0;
        const callback = function (url, res = null, fn = null, fn2 = null, ele = null) {
            let tmp = false;
            if (res) {
                tmp = true;
                let t = typeof res;
                let isObj = t.toLowerCase() === 'object';
                let errTitle;
                if (isObj && res.prescript) {
                    /* var ok can be changed to false in prescript execution */
                    try {
                        eval(res.prescript);
                    }
                    catch (e) {
                        (0, error_2.error)(e.message || '');
                    }
                }
                if (isObj && res.url === undefined) {
                    res.url = url;
                }
                /* Case where a callback is defined */
                if (fn) {
                    tmp = fn(res, ele);
                }
                else {
                    tmp = (0, defaultLinkFunction_1.defaultLinkFunction)(res, ele);
                }
                if (ele && isObj && (res.content !== undefined)) {
                    if ('value' in ele) {
                        ele.value = res.content;
                    }
                    else {
                        ele.innerHTML = res.content;
                    }
                }
                if (tmp && isObj && res.script) {
                    if (typeof (res.script) === 'function') {
                        tmp = res.script(res.data ? res.data : {}, ele || null);
                    }
                    else {
                        tmp = ((data, ele) => {
                            let r = null;
                            try {
                                r = eval(res.script);
                                if ((0, isFunction_4.isFunction)(r)) {
                                    r = r(data, ele);
                                }
                            }
                            catch (e) {
                                (0, log_8.log)(e, res);
                                (0, error_2.error)((0, isFunction_4.isFunction)(e.getMessage) ? e.getMessage() : null);
                            }
                            return r;
                        })(res.data ? res.data : {}, ele ? ele : false);
                    }
                }
                /* Case where a callback is defined */
                if (tmp && fn2) {
                    fn2(res);
                }
                else if (isObj && defaultPostLinkFunction_1.defaultPostLinkFunction) {
                    (0, defaultPostLinkFunction_1.defaultPostLinkFunction)(res, ele);
                }
                if (tmp && isObj && res.postscript) {
                    eval(res.postscript);
                }
                if (isObj && res.error) {
                    errTitle = res.errorTitle || bbn.lng.server_response;
                    (0, defaultAlertFunction_1.defaultAlertFunction)(res.error, errTitle);
                }
            }
            else {
                (0, defaultAlertFunction_1.defaultAlertFunction)(bbn.lng.errorText, bbn.lng.error);
            }
            return tmp;
        };
        exports.callback = callback;
    });
    define("fn/camelize", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.camelize = void 0;
        const camelize = function (str) {
            return str.replace(/^([A-Z])|[\s-](\w)/g, function (match, p1, p2, offset) {
                if (p2) {
                    return p2.toUpperCase();
                }
                return p1.toLowerCase();
            });
        };
        exports.camelize = camelize;
    });
    define("fn/camelToCss", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.camelToCss = void 0;
        const camelToCss = function (str) {
            return str
                .replace(/([A-Z])/g, function (st) {
                return '-' + st.toLowerCase();
            })
                .replace('/^./', function (st) {
                return st.toLowerCase();
            });
        };
        exports.camelToCss = camelToCss;
    });
    define("fn/canvasToImage", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.canvasToImage = void 0;
        const canvasToImage = function (canvas) {
            let img = new Image();
            img.src = canvas.toDataURL('image/png');
            return img;
        };
        exports.canvasToImage = canvasToImage;
    });
    define("fn/center", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.center = void 0;
        const center = function (ele) {
            //ele = $(ele);
            let parent = ele.parentNode, 
            //w = parent.width(),
            w = parent.clientWidth, 
            //h = parent.height();
            h = parent.clientHeight;
            while (parent && (!w || !h)) {
                /*parent = parent.parent(),
                  w = parent.width(),
                  h = parent.height();*/
                parent = ele.parentNode;
                w = parent.clientWidth;
                h = parent.clientHeight;
            }
            //ele.css("position","absolute");
            ele.style.position = 'absolute';
            //ele.css("top", Math.max(0, ((h - ele.outerHeight()) / 2) + parent.scrollTop()) + "px");
            ele.style.top = Math.max(0, (h - ele.offsetHeight) / 2 + parent.scrollTop) + 'px';
            //ele.css("left", Math.max(0, ((w - ele.outerWidth()) / 2) + parent.scrollLeft()) + "px");
            ele.style.left = Math.max(0, (h - ele.offsetWidth) / 2 + parent.scrollLeft) + 'px';
            return ele;
        };
        exports.center = center;
    });
    define("fn/checkPropsDetails", ["require", "exports", "fn/isArray", "fn/isObject", "fn/each", "fn/substr"], function (require, exports, isArray_7, isObject_9, each_9, substr_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.checkPropsDetails = void 0;
        const checkPropsDetails = function (obj, props, checkEmpty = false) {
            let res = {
                error: false,
                result: true,
            };
            if (typeof (props) === 'string') {
                props = [props];
            }
            if (!(0, isArray_7.isArray)(props)) {
                res.error = bbn._('checkProps must receive a string or an array as props argument');
            }
            if (!(0, isObject_9.isObject)(obj)) {
                res.error = bbn._('checkProps must receive an object as obj argument');
            }
            if (!res.error) {
                let check;
                (0, each_9.each)(props, (varName) => {
                    varName = varName.trim().split(':');
                    let type = varName[1] || false;
                    varName = varName[0];
                    if (obj[varName] === undefined) {
                        res.error = varName + ' ' + bbn._('is not defined');
                    }
                    else if (type) {
                        check = 'is' + (0, substr_5.substr)(type, 0, 1).toUpperCase() + (0, substr_5.substr)(type, 1).toLowerCase();
                        if (bbn.fn[check] === undefined) {
                            res.error = type + ' ' + bbn._('is not a valid type');
                        }
                        else if (!bbn.fn[check](obj[varName])) {
                            res.error = varName + ' ' + bbn._('is not a') + ' ' + type;
                        }
                    }
                    else if (checkEmpty && !obj[varName]) {
                        res.error = varName + ' ' + bbn._('is empty');
                    }
                    if (res.error) {
                        return false;
                    }
                });
            }
            if (res.error) {
                res.result = false;
            }
            return res;
        };
        exports.checkPropsDetails = checkPropsDetails;
    });
    define("fn/checkProps", ["require", "exports", "fn/checkPropsDetails"], function (require, exports, checkPropsDetails_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.checkProps = void 0;
        const checkProps = function (obj, props, checkEmpty = false) {
            return (0, checkPropsDetails_1.checkPropsDetails)(obj, props, checkEmpty).result;
        };
        exports.checkProps = checkProps;
    });
    define("fn/checkPropsOrDie", ["require", "exports", "fn/checkPropsDetails"], function (require, exports, checkPropsDetails_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.checkPropsOrDie = void 0;
        const checkPropsOrDie = function (obj, props, checkEmpty = false) {
            let res = (0, checkPropsDetails_2.checkPropsDetails)(obj, props, checkEmpty);
            if (res.error) {
                throw new Error(res.error);
            }
            return true;
        };
        exports.checkPropsOrDie = checkPropsOrDie;
    });
    define("fn/clone", ["require", "exports", "fn/isArray", "fn/isObject", "fn/extend"], function (require, exports, isArray_8, isObject_10, extend_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.clone = void 0;
        const clone = function (obj) {
            if ((0, isArray_8.isArray)(obj)) {
                return obj.slice().map((a) => {
                    return typeof a === 'object' ? clone(a) : a;
                });
            }
            if ((0, isObject_10.isObject)(obj)) {
                const o = Object.create(Object.getPrototypeOf(obj));
                return (0, extend_3.extend)(true, o, obj);
            }
            return obj;
        };
        exports.clone = clone;
    });
    define("fn/colorToHex", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.colorToHex = void 0;
        const colorToHex = function (color) {
            let canvas = document.createElement('canvas').getContext('2d');
            canvas.fillStyle = color;
            return canvas.fillStyle;
        };
        exports.colorToHex = colorToHex;
    });
    define("fn/copy", ["require", "exports", "fn/isObject", "fn/isFunction"], function (require, exports, isObject_11, isFunction_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.copy = void 0;
        const copy = function (st) {
            return new Promise((resolve) => {
                if (st) {
                    if (navigator && navigator.clipboard) {
                        if (st instanceof Blob) {
                            navigator.clipboard.write([new ClipboardItem({ [st.type.toString()]: st })]).then(() => {
                                resolve(true);
                            });
                        }
                        else if ((0, isObject_11.isObject)(st) && (0, isFunction_5.isFunction)(st.toBlob)) {
                            st.toBlob((blob) => {
                                navigator.clipboard.write([new ClipboardItem({ [blob.type.toString()]: blob })]).then(() => {
                                    resolve(true);
                                });
                            });
                        }
                        else {
                            navigator.clipboard.writeText(st);
                            resolve(true);
                        }
                        return;
                    }
                    let input = document.createElement('textarea');
                    input.style.opacity = '0';
                    input.value = st;
                    document.body.appendChild(input);
                    input.select();
                    document.execCommand('copy');
                    document.body.removeChild(input);
                    resolve(true);
                }
                resolve(false);
            });
        };
        exports.copy = copy;
    });
    define("fn/count", ["require", "exports", "fn/filter"], function (require, exports, filter_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.count = void 0;
        const count = function (arr, prop, val = null, operator = '=') {
            return (0, filter_2.filter)(arr, prop, val, operator).length || 0;
        };
        exports.count = count;
    });
    define("fn/crc32", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.crc32 = void 0;
        // this is a test
        const crc32Table = [];
        for (let i = 0; i < 256; i++) {
            let c = i;
            for (let j = 0; j < 8; j++) {
                c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
            }
            crc32Table.push(c);
        }
        const crc32 = function (str) {
            let crc = 0 ^ -1;
            for (let i = 0; i < str.length; i++) {
                const charCode = str.charCodeAt(i);
                crc = (crc >>> 8) ^ crc32Table[(crc ^ charCode) & 0xff];
            }
            return (crc ^ -1) >>> 0; // Make sure the result is a 32-bit positive integer
        };
        exports.crc32 = crc32;
    });
    define("fn/createObject", ["require", "exports", "fn/extend"], function (require, exports, extend_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.createObject = void 0;
        const createObject = function (...args) {
            const obj = Object.create(null);
            if (args.length) {
                (0, extend_4.extend)(obj, ...args);
            }
            return obj;
        };
        exports.createObject = createObject;
    });
    define("fn/cssExists", ["require", "exports", "fn/escapeRegExp"], function (require, exports, escapeRegExp_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.cssExists = void 0;
        const cssExists = function (f) {
            let ok;
            let rules;
            let css = document.styleSheets;
            for (let sx = 0; sx < css.length; sx++) {
                ok = 1;
                try {
                    rules = css[sx].rules || css[sx].cssRules;
                }
                catch (e) {
                    ok = false;
                    if (e.name !== 'SecurityError') {
                        throw e;
                    }
                }
                if (ok) {
                    //log(rules);
                    for (let cx = 0; cx < rules.length; cx++) {
                        //log(rules[cx].selectorText);
                        if (new RegExp('(^|\\s)' + (0, escapeRegExp_2.escapeRegExp)(f) + '(\\{|\\s)', 'g').test(rules[cx].selectorText)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        exports.cssExists = cssExists;
    });
    define("fn/dateSQL", ["require", "exports", "fn/date"], function (require, exports, date_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.dateSQL = void 0;
        const dateSQL = function (v, dayOnly) {
            let value = (0, date_4.date)(v);
            if (value) {
                return dayjs(value).format('YYYY-MM-DD' + (dayOnly ? '' : ' HH:mm:ss'));
            }
        };
        exports.dateSQL = dateSQL;
    });
    define("fn/daysInMonth", ["require", "exports", "fn/date"], function (require, exports, date_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.daysInMonth = void 0;
        const daysInMonth = function (v) {
            let d = (0, date_5.date)(v);
            if (d) {
                return dayjs(d).daysInMonth();
            }
            return false;
        };
        exports.daysInMonth = daysInMonth;
    });
    define("fn/deepPath", ["require", "exports", "fn/search", "fn/each", "fn/isArray"], function (require, exports, search_4, each_10, isArray_9) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.deepPath = void 0;
        const deepPath = function (arr, filter, deepProperty, res = []) {
            let idx;
            let start = 0;
            if ((idx = (0, search_4.search)(arr, filter, start)) > -1) {
                res.push(idx);
                return res;
            }
            (0, each_10.each)(arr, (it, i) => {
                if ((0, isArray_9.isArray)(it[deepProperty])) {
                    let r = res.slice();
                    r.push(i);
                    let tmp = deepPath(it[deepProperty], filter, deepProperty, r);
                    if (tmp !== false) {
                        return tmp;
                    }
                }
            });
            return false;
        };
        exports.deepPath = deepPath;
    });
    define("fn/defaultConfirmFunction", ["require", "exports", "fn/isFunction"], function (require, exports, isFunction_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultConfirmFunction = void 0;
        const defaultConfirmFunction = function (text, yesFn, noFn) {
            let ok = 0;
            if (confirm(text)) {
                if ((0, isFunction_6.isFunction)(yesFn)) {
                    yesFn();
                    ok = 1;
                }
            }
            if (!ok && (0, isFunction_6.isFunction)(noFn)) {
                noFn();
            }
        };
        exports.defaultConfirmFunction = defaultConfirmFunction;
    });
    define("fn/defaultErrorFunction", ["require", "exports", "fn/log"], function (require, exports, log_9) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultErrorFunction = void 0;
        const defaultErrorFunction = function (message) {
            (0, log_9.log)(message);
        };
        exports.defaultErrorFunction = defaultErrorFunction;
    });
    define("fn/defaultHistoryFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultHistoryFunction = void 0;
        const defaultHistoryFunction = function (obj) {
            return true;
        };
        exports.defaultHistoryFunction = defaultHistoryFunction;
    });
    define("fn/defaultPreLinkFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultPreLinkFunction = void 0;
        const defaultPreLinkFunction = function (url, force, ele) {
            return url;
        };
        exports.defaultPreLinkFunction = defaultPreLinkFunction;
    });
    define("fn/defaultResizeFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultResizeFunction = void 0;
        const defaultResizeFunction = function () {
            return true;
        };
        exports.defaultResizeFunction = defaultResizeFunction;
    });
    define("fn/deleteProp", ["require", "exports", "fn/checkType"], function (require, exports, checkType_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.deleteProp = void 0;
        const deleteProp = function (obj, prop) {
            (0, checkType_2.checkType)(obj, 'object', bbn._('The obj must be an object in setProp'));
            (0, checkType_2.checkType)(prop, 'string', bbn._('The prop must be a string in setProp'));
            delete obj[prop];
        };
        exports.deleteProp = deleteProp;
    });
    define("fn/isValue", ["require", "exports", "fn/isNull"], function (require, exports, isNull_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isValue = void 0;
        const isValue = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (typeof a === 'object' && !(0, isNull_2.isNull)(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isValue = isValue;
    });
    define("fn/diffObj", ["require", "exports", "fn/isDate", "fn/createObject", "fn/isFunction", "fn/isValue", "fn/isDom", "fn/numProperties"], function (require, exports, isDate_6, createObject_1, isFunction_7, isValue_1, isDom_4, numProperties_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.diffObj = void 0;
        let diffObjProcessed = [];
        const diffObj = function (obj1, obj2, unchanged = false, notRoot = false) {
            if (!notRoot) {
                diffObjProcessed = [];
            }
            let VALUE_CREATED = 'created', VALUE_UPDATED = 'updated', VALUE_DELETED = 'deleted', VALUE_UNCHANGED = 'unchanged', _compareValues = function (value1, value2) {
                if (value1 === value2) {
                    return VALUE_UNCHANGED;
                }
                if ((0, isDate_6.isDate)(value1) && (0, isDate_6.isDate)(value2) && value1.getTime() === value2.getTime()) {
                    return VALUE_UNCHANGED;
                }
                if ('undefined' == typeof value1) {
                    return VALUE_CREATED;
                }
                if ('undefined' == typeof value2) {
                    return VALUE_DELETED;
                }
                return VALUE_UPDATED;
            };
            if (notRoot === undefined) {
                notRoot = false;
            }
            let diff = (0, createObject_1.createObject)();
            if (!(0, isFunction_7.isFunction)(obj1) && !(0, isFunction_7.isFunction)(obj2)) {
                if ((0, isValue_1.isValue)(obj1) || (0, isValue_1.isValue)(obj2)) {
                    let res = _compareValues(obj1, obj2);
                    if (unchanged || res !== VALUE_UNCHANGED) {
                        let ret = (0, createObject_1.createObject)();
                        Object.defineProperty(ret, 'type', {
                            value: res,
                            enumerable: false,
                        });
                        Object.defineProperty(ret, 'data', {
                            value: obj1 === undefined ? obj2 : obj1,
                            enumerable: false,
                        });
                        Object.defineProperty(ret, '_bbnDiffObjProof', {
                            value: true,
                            enumerable: false,
                        });
                        if (obj1 !== undefined) {
                            Object.defineProperty(ret, 'newData', {
                                value: obj2,
                                enumerable: false,
                            });
                        }
                        return ret;
                    }
                    return false;
                }
                if ((0, isDom_4.isDom)(obj1) || (0, isDom_4.isDom)(obj2)) {
                    return false;
                }
                if (diffObjProcessed.includes(obj1) || diffObjProcessed.includes(obj2)) {
                    //error(bbn._("Can't compare objects because they contain circular references"));
                    return false;
                }
                diffObjProcessed.push(obj1, obj2);
                for (let key in obj1) {
                    if ((0, isFunction_7.isFunction)(obj1[key])) {
                        continue;
                    }
                    let value2 = undefined;
                    if ('undefined' != typeof obj2[key]) {
                        value2 = obj2[key];
                    }
                    let res = diffObj(obj1[key], value2, unchanged, true);
                    if (res) {
                        diff[key] = res;
                    }
                }
                for (let key in obj2) {
                    if ((0, isFunction_7.isFunction)(obj2[key]) || 'undefined' != typeof obj1[key]) {
                        continue;
                    }
                    let res = diffObj(undefined, obj2[key], unchanged, true);
                    if (res) {
                        diff[key] = res;
                    }
                }
            }
            return !notRoot || unchanged || (0, numProperties_5.numProperties)(diff) ? diff : false;
        };
        exports.diffObj = diffObj;
    });
    define("fn/dirName", ["require", "exports", "fn/isString", "fn/substr"], function (require, exports, isString_9, substr_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.dirName = void 0;
        const dirName = function (path) {
            if ((0, isString_9.isString)(path) && path) {
                while ((0, substr_6.substr)(path, path.length - 1) === '/') {
                    path = (0, substr_6.substr)(path, 0, path.length - 1);
                }
                let pos = path.lastIndexOf('/');
                if (pos > 0) {
                    return (0, substr_6.substr)(path, 0, pos);
                }
                if (pos === 0) {
                    return '/';
                }
            }
            return '';
        };
        exports.dirName = dirName;
    });
    define("fn/isBlob", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isBlob = void 0;
        const isBlob = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if ({}.toString.apply(a) !== '[object Blob]') {
                    return false;
                }
            }
            return true;
        };
        exports.isBlob = isBlob;
    });
    define("fn/fileExt", ["require", "exports", "fn/isString"], function (require, exports, isString_10) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fileExt = void 0;
        const fileExt = function (filename) {
            if (filename && (0, isString_10.isString)(filename)) {
                let bits = filename.split('.');
                if (bits[0] && bits.length > 1) {
                    return bits[bits.length - 1].toLowerCase();
                }
            }
            return '';
        };
        exports.fileExt = fileExt;
    });
    define("fn/isCanvas", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isCanvas = void 0;
        const isCanvas = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (!(a instanceof HTMLCanvasElement)) {
                    return false;
                }
            }
            return true;
        };
        exports.isCanvas = isCanvas;
    });
    define("fn/downloadContent", ["require", "exports", "fn/isCanvas", "fn/isObject", "fn/isString", "fn/log"], function (require, exports, isCanvas_1, isObject_12, isString_11, log_10) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.downloadContent = void 0;
        const downloadContent = function (filename, content, type) {
            if ((0, isCanvas_1.isCanvas)(content)) {
                content.toBlob((blob) => {
                    // blob ready, download it
                    let a = document.createElement('a');
                    a.download = filename;
                    a.href = window.URL.createObjectURL(blob);
                    a.className = 'bbn-no';
                    a.click();
                    // delete the internal blob reference, to let the browser clear memory from it
                    window.URL.revokeObjectURL(a.href);
                }, type || 'image/png');
                return;
            }
            if (!type) {
                type = (0, isObject_12.isObject)(content) && content.type ? content.type : 'octet/stream';
            }
            else if (type.indexOf('/') === -1) {
                type = 'text/' + type;
            }
            let a = window.document.createElement('a');
            a.className = 'bbn-no';
            let src = null;
            if ((0, isString_11.isString)(content)) {
                src = new Blob([content], { type: type });
            }
            else {
                try {
                    src = content;
                }
                catch (e) {
                    (0, log_10.log)(e);
                }
            }
            a.href = window.URL.createObjectURL(src);
            a.download = filename;
            // Append anchor to body.
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(a.href);
            // Remove anchor from body
            document.body.removeChild(a);
        };
        exports.downloadContent = downloadContent;
    });
    define("fn/download", ["require", "exports", "fn/ajax", "fn/substr", "fn/baseName", "fn/isBlob", "fn/fileExt", "fn/downloadContent", "fn/defaultAjaxErrorFunction"], function (require, exports, ajax_1, substr_7, baseName_1, isBlob_1, fileExt_1, downloadContent_1, defaultAjaxErrorFunction_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.download = void 0;
        const download = function (url, filename, params) {
            // We can intervert the arguments
            if (filename && (typeof (filename) === 'object')) {
                params = filename;
                filename = null;
            }
            return (0, ajax_1.ajax)(url, 'blob', params || { _bbn_download: 1 }, (d, headers) => {
                if (!filename) {
                    let cd = 'attachment; filename=';
                    if (headers && headers['content-disposition'] && headers['content-disposition'].indexOf(cd) === 0) {
                        filename = (0, substr_7.substr)(headers['content-disposition'], cd.length + 1, headers['content-disposition'].length - cd.length - 2);
                    }
                    else {
                        filename = (0, baseName_1.baseName)(url);
                    }
                }
                if ((0, isBlob_1.isBlob)(d)) {
                    let extension = (0, fileExt_1.fileExt)(filename);
                    let htmlExtensions = ['php', 'html'];
                    if ((typeof filename === 'string') && ((('type' in d) && (d.type !== 'text/html')) || htmlExtensions.includes(extension))) {
                        (0, downloadContent_1.downloadContent)(filename, d);
                        return;
                    }
                }
            }, e => {
                (0, defaultAjaxErrorFunction_2.defaultAjaxErrorFunction)(e);
            });
        };
        exports.download = download;
    });
    define("fn/eraseCookie", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.eraseCookie = void 0;
        const eraseCookie = function (name) {
            document.cookie = name + '=; Max-Age=-99999999;';
        };
        exports.eraseCookie = eraseCookie;
    });
    define("fn/escapeDquotes", ["require", "exports", "fn/isString"], function (require, exports, isString_12) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeDquotes = void 0;
        const escapeDquotes = function (str) {
            if (!(0, isString_12.isString)(str)) {
                return str;
            }
            return str.replace(/"/g, '\\"');
        };
        exports.escapeDquotes = escapeDquotes;
    });
    define("fn/escapeSquotes", ["require", "exports", "fn/isString"], function (require, exports, isString_13) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeSquotes = void 0;
        const escapeSquotes = function (str) {
            if (!(0, isString_13.isString)(str)) {
                return str;
            }
            return str.replace(/'/g, "\\'");
        };
        exports.escapeSquotes = escapeSquotes;
    });
    define("fn/escapeTicks", ["require", "exports", "fn/isString"], function (require, exports, isString_14) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeTicks = void 0;
        const escapeTicks = function (str) {
            if (!(0, isString_14.isString)(str)) {
                return str;
            }
            return str.replace(/`/g, '\\`');
        };
        exports.escapeTicks = escapeTicks;
    });
    define("fn/escapeUrl", ["require", "exports", "fn/each", "fn/dirName", "fn/baseName", "fn/isString"], function (require, exports, each_11, dirName_1, baseName_2, isString_15) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeUrl = void 0;
        const escapeUrl = function (url, params) {
            let st = '';
            if (url.match('^(http|https)://')) {
                st += 'http';
                url = url.substring(4);
                if (url.substr(0, 1) === 's') {
                    st += 's';
                    url = url.substring(1);
                }
                st += '://';
                url = url.substring(3);
            }
            (0, each_11.each)((0, dirName_1.dirName)(url).split('/'), (a) => {
                st += encodeURIComponent(a) + '/';
            });
            let base = (0, baseName_2.baseName)(url);
            let sep = '?';
            let existingParams = '';
            if (base.indexOf(sep)) {
                let tmp = base.split('?');
                sep = '&';
                existingParams = '?' + tmp[1];
                base = tmp[0];
            }
            if (params && (0, isString_15.isString)(params)) {
                if (params.match('^(\\&|\\?)')) {
                    params = params.substring(1);
                }
                params = sep + params;
            }
            else {
                params = '';
            }
            return st + encodeURIComponent(base) + existingParams + params;
        };
        exports.escapeUrl = escapeUrl;
    });
    define("fn/extendOut", ["require", "exports", "fn/isObject"], function (require, exports, isObject_13) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.extendOut = void 0;
        const extendOut = function (...args) {
            let r = null;
            for (let a of args) {
                if (!(0, isObject_13.isObject)(a)) {
                    throw new Error('Each argument for extendOut must be an object, ' + typeof a + ' given');
                }
                if (r === null) {
                    r = a;
                }
                else {
                    for (let n in a) {
                        if ((0, isObject_13.isObject)(r[n], a[n])) {
                            extendOut(r[n], a[n]);
                        }
                        else if (r[n] === undefined) {
                            r[n] = a[n];
                        }
                    }
                }
            }
            return r;
        };
        exports.extendOut = extendOut;
    });
    define("fn/fieldValue", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fieldValue = void 0;
        const fieldValue = function (field) {
            let v;
            if (field.type === 'checkbox') {
                if (field.checked) {
                    v = field.value;
                    if (!v) {
                        v = 1;
                    }
                }
                else {
                    v = 0;
                }
            }
            else if (field.type === 'radio') {
                if (field.checked) {
                    v = field.value;
                }
            }
            else {
                v = field.value;
            }
            return v;
        };
        exports.fieldValue = fieldValue;
    });
    define("fn/findAll", ["require", "exports", "fn/search", "fn/each", "fn/isArray"], function (require, exports, search_5, each_12, isArray_10) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.findAll = void 0;
        const findAll = function (arr, filter, deepProperty, res = []) {
            let idx;
            let start = 0;
            while ((idx = (0, search_5.search)(arr, filter, start)) > -1) {
                res.push(arr[idx]);
                start = idx + 1;
            }
            (0, each_12.each)(arr, (it) => {
                if ((0, isArray_10.isArray)(it[deepProperty])) {
                    findAll(it[deepProperty], filter, deepProperty, res);
                }
            });
            return res;
        };
        exports.findAll = findAll;
    });
    define("fn/fori", ["require", "exports", "fn/isArray", "fn/isNumber"], function (require, exports, isArray_11, isNumber_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fori = void 0;
        const fori = function (arr, fn, max = arr.length - 1, min = 0) {
            if ((0, isArray_11.isArray)(arr)) {
                let realMax = arr.length - 1;
                if (!(0, isNumber_4.isNumber)(max) || !((0 < max) && (max <= realMax))) {
                    max = realMax;
                }
                if (!(0, isNumber_4.isNumber)(min) || !((0 <= min) && (min < realMax)) || (min > max)) {
                    min = 0;
                }
                for (let i = min; i <= max; i++) {
                    if (fn(arr[i], i) === false) {
                        return;
                    }
                }
            }
        };
        exports.fori = fori;
    });
    define("fn/forir", ["require", "exports", "fn/isArray", "fn/isNumber"], function (require, exports, isArray_12, isNumber_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.forir = void 0;
        const forir = function (arr, fn, max = arr.length - 1, min = 0) {
            if ((0, isArray_12.isArray)(arr)) {
                let realMax = arr.length - 1;
                if (!(0, isNumber_5.isNumber)(max) || !((0 < max) && (max <= realMax))) {
                    max = realMax;
                }
                if (!(0, isNumber_5.isNumber)(min) || !((0 <= min) && (min < realMax)) || (min > max)) {
                    min = 0;
                }
                for (let i = max; i >= min; i--) {
                    if (fn(arr[i], i) === false) {
                        return;
                    }
                }
            }
        };
        exports.forir = forir;
    });
    define("fn/format", ["require", "exports", "fn/checkType"], function (require, exports, checkType_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.format = void 0;
        const format = function (str) {
            let args = Array.prototype.slice.call(arguments, 1);
            if (args.length) {
                let i = 0;
                return str.replace(/\%([d|s])/g, (match, type) => {
                    let tmp = args[i++];
                    (0, checkType_3.checkType)(tmp, type === 'd' ? 'number' : 'string', bbn._("The value doesn't correspond to the format"));
                    return tmp;
                });
            }
            return str;
        };
        exports.format = format;
    });
    define("fn/formatBytes", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.formatBytes = void 0;
        const formatBytes = function (bytes, decimals = 2) {
            if (!bytes) {
                return '0 B';
            }
            const k = 1024, s = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals < 0 ? 0 : decimals)) + ' ' + s[i];
        };
        exports.formatBytes = formatBytes;
    });
    define("fn/formatDate", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.formatDate = void 0;
        const formatDate = function (date, format) {
            return dayjs(date).format(format);
        };
        exports.formatDate = formatDate;
    });
    define("fn/formatSize", ["require", "exports", "fn/isNumber", "fn/isString"], function (require, exports, isNumber_6, isString_16) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.formatSize = void 0;
        const formatSize = function (st, noValid) {
            if ((0, isNumber_6.isNumber)(st)) {
                return st + 'px';
            }
            if ((0, isString_16.isString)(st)) {
                return st;
            }
            return noValid ? false : 'auto';
        };
        exports.formatSize = formatSize;
    });
    define("fn/formdata", ["require", "exports", "fn/each", "fn/fieldValue", "fn/replaceAll", "fn/substr"], function (require, exports, each_13, fieldValue_1, replaceAll_3, substr_8) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.formdata = void 0;
        const formdata = function (form) {
            let $inputs = form.querySelectorAll('input[name],select[name],textarea[name],button[name]');
            let res = {};
            let n;
            let v;
            (0, each_13.each)($inputs, (input, i) => {
                v = (0, fieldValue_1.fieldValue)(input);
                if (v !== undefined && !input.disabled) {
                    let name = input.name;
                    if (name.indexOf('[]') === -1 &&
                        name.indexOf('[') > -1 &&
                        name.indexOf(']') > -1 &&
                        name.lastIndexOf(']') === name.length - 1) {
                        name = (0, replaceAll_3.replaceAll)('][', '.', name);
                        name = (0, replaceAll_3.replaceAll)('[', '.', name);
                        name = (0, replaceAll_3.replaceAll)(']', '', name);
                    }
                    if (name.length > 2 && name.indexOf('[]') === name.length - 2) {
                        n = (0, substr_8.substr)(name, 0, name.length - 2);
                        if (res[n] === undefined) {
                            res[n] = [];
                        }
                        res[n].push(v);
                    }
                    else if (name.indexOf('.') > -1) {
                        let tmp, parts = name.split('.');
                        tmp = res;
                        for (let i = 0; i < parts.length; i++) {
                            if (res[parts[i]] === undefined) {
                                if (i < parts.length - 1) {
                                    tmp[parts[i]] = {};
                                }
                                else {
                                    tmp[parts[i]] = v;
                                }
                            }
                            tmp = tmp[parts[i]];
                        }
                    }
                    else {
                        res[name] = v;
                    }
                }
            });
            // return num_changes ? res : false;
            return res;
        };
        exports.formdata = formdata;
    });
    define("fn/fromXml", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fromXml = void 0;
        const fromXml = function (xml, arrayTags) {
            let dom = null;
            if (window.DOMParser)
                dom = new DOMParser().parseFromString(xml, 'text/xml');
            else if (window['ActiveXObject']) {
                dom = new window['ActiveXObject']('Microsoft.XMLDOM');
                dom.async = false;
                if (!dom.loadXML(xml))
                    throw dom.parseError.reason + ' ' + dom.parseError.srcText;
            }
            else
                throw new Error('cannot parse xml string!');
            function parseNode(xmlNode, result) {
                if (xmlNode.nodeName == '#text') {
                    let v = xmlNode.nodeValue;
                    if (v.trim())
                        result['#text'] = v;
                    return;
                }
                let jsonNode = {}, existing = result[xmlNode.nodeName];
                if (existing) {
                    if (!Array.isArray(existing))
                        result[xmlNode.nodeName] = [existing, jsonNode];
                    else
                        result[xmlNode.nodeName].push(jsonNode);
                }
                else {
                    if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1)
                        result[xmlNode.nodeName] = [jsonNode];
                    else
                        result[xmlNode.nodeName] = jsonNode;
                }
                if (xmlNode.attributes)
                    for (let attribute of xmlNode.attributes)
                        jsonNode[attribute.nodeName] = attribute.nodeValue;
                for (let node of xmlNode.childNodes)
                    parseNode(node, jsonNode);
            }
            let result = {};
            for (let node of dom.childNodes)
                parseNode(node, result);
            return result;
        };
        exports.fromXml = fromXml;
    });
    define("fn/ftime", ["require", "exports", "fn/date", "fn/isDate", "fn/isString"], function (require, exports, date_6, isDate_7, isString_17) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.ftime = void 0;
        dayjs.extend(window['dayjs_plugin_calendar']);
        const ftime = function (d, wrong_result) {
            let r = (0, date_6.date)(d);
            if (!(0, isDate_7.isDate)(r)) {
                return wrong_result && (0, isString_17.isString)(wrong_result) ? wrong_result : '';
            }
            if (undefined !== dayjs) {
                return dayjs(r).calendar();
            }
            return r.toLocaleDateString();
        };
        exports.ftime = ftime;
    });
    define("fn/unique", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.unique = void 0;
        const unique = function (arr) {
            return arr.filter(function (el, index, ar) {
                return index === ar.indexOf(el);
            });
        };
        exports.unique = unique;
    });
    define("fn/getAllTags", ["require", "exports", "fn/unique"], function (require, exports, unique_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getAllTags = void 0;
        const getAllTags = function () {
            return (0, unique_1.unique)(Array.prototype.map.apply(document.all, [(a) => a.tagName.toLowerCase()]));
        };
        exports.getAllTags = getAllTags;
    });
    define("fn/getAncestors", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getAncestors = void 0;
        const getAncestors = function (ele, selector) {
            let r = [];
            if (typeof ele === 'string') {
                ele = document.querySelector(ele);
            }
            if (ele instanceof HTMLElement) {
                if (ele.parentElement) {
                    if (typeof selector === 'string') {
                        while ((ele = ele.parentElement.closest(selector))) {
                            r.push(ele);
                        }
                    }
                    else {
                        if (selector === true) {
                            r.push(ele);
                        }
                        while ((ele = ele.parentElement)) {
                            r.push(ele);
                        }
                    }
                }
            }
            return r;
        };
        exports.getAncestors = getAncestors;
    });
    define("fn/getAttributes", ["require", "exports", "fn/error"], function (require, exports, error_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getAttributes = void 0;
        const getAttributes = function (ele) {
            if (!ele.getAttributeNames) {
                (0, error_3.error)('The element is not a proper HTML Element');
            }
            let res = Object.create(null);
            ele.getAttributeNames().forEach((name) => {
                res[name] = ele.getAttribute(name);
            });
            return res;
        };
        exports.getAttributes = getAttributes;
    });
    define("fn/getBrowserName", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getBrowserName = void 0;
        const getBrowserName = function () {
            const userAgent = navigator.userAgent.toLowerCase();
            switch (true) {
                case userAgent.includes('edge'):
                case userAgent.includes('edg/'):
                    return 'Edge';
                case userAgent.includes('opr') && !!window['opr']:
                    return 'Opera';
                case userAgent.includes('chrome') && !!window['chrome']:
                    return 'Chrome';
                case userAgent.includes('trident'):
                    return 'Internet Explorer';
                case userAgent.includes('firefox'):
                    return 'Firefox';
                case userAgent.includes('safari'):
                    return 'Safari';
                default:
                    return 'Other';
            }
        };
        exports.getBrowserName = getBrowserName;
    });
    define("fn/getBrowserVersion", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getBrowserVersion = void 0;
        const getBrowserVersion = function () {
            const userAgent = navigator.userAgent.toLowerCase();
            switch (true) {
                case userAgent.includes('edge/'):
                    return userAgent.split('edge/')[1].split(' ')[0];
                case userAgent.includes('edg/'):
                    return userAgent.split('edg/')[1].split(' ')[0];
                case userAgent.includes('opr/') && !!window['opr']:
                    return userAgent.split('opr/')[1].split(' ')[0];
                case userAgent.includes('chrome/') && !!window['chrome']:
                    return userAgent.split('chrome/')[1].split(' ')[0];
                case userAgent.includes('trident/'):
                    return userAgent.split('trident/')[1].split(' ')[0];
                case userAgent.includes('firefox/'):
                    return userAgent.split('firefox/')[1].split(' ')[0];
                case userAgent.includes('safari/'):
                    return userAgent.split('version/')[1].split(' ')[0];
                default:
                    return '';
            }
        };
        exports.getBrowserVersion = getBrowserVersion;
    });
    define("fn/getCookie", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getCookie = void 0;
        const getCookie = function (name) {
            let nameEqual = name + '=';
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEqual) == 0) {
                    let st = c.substring(nameEqual.length, c.length);
                    if (st) {
                        return JSON.parse(unescape(st)).value;
                    }
                }
            }
            return null;
        };
        exports.getCookie = getCookie;
    });
    define("fn/getCssVar", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getCssVar = void 0;
        const getCssVar = function (varname) {
            if (varname.indexOf('--') !== 0) {
                varname = '--' + varname;
            }
            return getComputedStyle(document.documentElement).getPropertyValue(varname);
        };
        exports.getCssVar = getCssVar;
    });
    define("fn/getDay", ["require", "exports", "fn/date"], function (require, exports, date_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getDay = void 0;
        const getDay = function (v) {
            const biss = 1972;
            let d = (0, date_7.date)(v);
            if (d) {
                let t = d.getTime(), y = d.getYear(), m = d.getMonth(), days = (y - 1970) * 365;
                if (m < 2) {
                    y--;
                }
                for (var i = biss; i <= y; i += 4) {
                    days++;
                }
                return days + Math.floor(t / (24 * 3600000));
            }
            return false;
        };
        exports.getDay = getDay;
    });
    define("fn/getDeviceType", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getDeviceType = void 0;
        const getDeviceType = function () {
            const userAgent = navigator.userAgent.toLowerCase();
            if (/iPhone|Android/i.test(navigator.userAgent)) {
                return 'mobile';
            }
            if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent)) {
                return 'tablet';
            }
            return 'desktop';
        };
        exports.getDeviceType = getDeviceType;
    });
    define("fn/getHTMLOfSelection", ["require", "exports", "fn/log"], function (require, exports, log_11) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getHTMLOfSelection = void 0;
        const getHTMLOfSelection = function () {
            let range;
            let selection = window.getSelection();
            if (selection.rangeCount > 0) {
                range = selection.getRangeAt(0);
                (0, log_11.log)('RANGE', range);
                let clonedSelection = range.cloneContents();
                (0, log_11.log)('clonedSelection', clonedSelection);
                let div = document.createElement('div');
                div.appendChild(clonedSelection);
                return div.innerHTML;
            }
            else {
                return '';
            }
        };
        exports.getHTMLOfSelection = getHTMLOfSelection;
    });
    define("fn/getEventData", ["require", "exports", "fn/getHTMLOfSelection", "fn/each", "fn/defaultErrorFunction"], function (require, exports, getHTMLOfSelection_1, each_14, defaultErrorFunction_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getEventData = void 0;
        const getEventData = function (e) {
            let dt = e.dataTransfer || e.clipboardData;
            let t = dt.getData('Text');
            let res = { raw: t, files: [], str: [] };
            let p = new Promise((ok, err) => {
                let done = !(dt instanceof DataTransfer);
                if (!t && e.type === 'copy') {
                    let sel = window.getSelection();
                    res.raw = sel.toString();
                    let html = (0, getHTMLOfSelection_1.getHTMLOfSelection)();
                    res.str.push({
                        type: 'text/plain',
                        data: res.raw,
                    });
                    if (html !== res.raw) {
                        res.str.push({
                            type: 'text/html',
                            data: html,
                        });
                    }
                    else if (res.raw.trim().indexOf('<') === 0) {
                        res.str.push({
                            type: 'text/html',
                            data: "<meta charset='utf-8'><code style=\"white-space: pre; font-family: 'Courier New', sans-serif\">\n" +
                                res.raw +
                                '\n</code>',
                        });
                    }
                    done = true;
                    ok(res);
                }
                if (!done) {
                    let strings = [];
                    let num = dt.items.length;
                    (0, each_14.each)(dt.items, (item, idx) => {
                        let kind = item.kind;
                        let type = item.type;
                        if (kind === 'file') {
                            let cp = dt.files[idx];
                            if (!type && cp.name) {
                                let bits = cp.name.split('.');
                                type = bits[bits.length - 1];
                            }
                            let name = cp ? cp.name : bbn._('untitled');
                            let size = cp ? cp.size : null;
                            let lastModified = cp ? cp.lastModified : null;
                            let blob = item.getAsFile();
                            if (blob) {
                                done = true;
                                num--;
                                res.files.push({
                                    type: type,
                                    data: blob,
                                    name: name,
                                    size: size,
                                    mdate: lastModified,
                                });
                                strings.push(name);
                                if (!num) {
                                    if (!res.raw) {
                                        res.raw = strings.join(', ');
                                    }
                                    ok(res);
                                }
                            }
                            else {
                                (0, defaultErrorFunction_1.defaultErrorFunction)(bbn._('Impossible to read the file') + ' ' + name);
                            }
                        }
                        else {
                            done = true;
                            item.getAsString((data) => {
                                num--;
                                res.str.push({
                                    type: type,
                                    data: data,
                                });
                                if (type === 'text/plain') {
                                    strings.push(name);
                                }
                                if (!num) {
                                    if (!res.raw) {
                                        res.raw = strings.join(', ');
                                    }
                                    ok(res);
                                }
                            });
                        }
                    });
                }
                if (!done) {
                    setTimeout(() => {
                        ok(res);
                    });
                }
            });
            return p;
        };
        exports.getEventData = getEventData;
    });
    define("fn/getField", ["require", "exports", "fn/getRow"], function (require, exports, getRow_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getField = void 0;
        const getField = function (arr, field, prop = '', val = null, operator = '=') {
            let r;
            if (field && (r = (0, getRow_2.getRow)(arr, prop, val, operator))) {
                return r[field];
            }
            return undefined;
        };
        exports.getField = getField;
    });
    define("fn/getFieldValues", ["require", "exports", "fn/checkType", "fn/filter", "fn/each"], function (require, exports, checkType_4, filter_3, each_15) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getFieldValues = void 0;
        const getFieldValues = function (arr, field, prop, val, operator) {
            (0, checkType_4.checkType)(field, 'string');
            if (prop) {
                arr = (0, filter_3.filter)(arr, prop, val, operator);
            }
            let res = [];
            (0, each_15.each)(arr, (a) => (res.indexOf(a[field]) === -1 ? res.push(a[field]) : null));
            return res;
        };
        exports.getFieldValues = getFieldValues;
    });
    define("fn/removeHtmlComments", ["require", "exports", "fn/isString"], function (require, exports, isString_18) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeHtmlComments = void 0;
        const removeHtmlComments = function (str) {
            if (!(0, isString_18.isString)(str)) {
                return str;
            }
            return str.replace(/<!--[\s\S]*?-->/g, '');
        };
        exports.removeHtmlComments = removeHtmlComments;
    });
    define("fn/getHtml", ["require", "exports", "fn/removeHtmlComments"], function (require, exports, removeHtmlComments_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getHtml = void 0;
        const getHtml = function (ele, stripComments = false) {
            let st = ele.innerHTML();
            if (stripComments) {
                st = (0, removeHtmlComments_1.removeHtmlComments)(st);
            }
            return st.trim();
        };
        exports.getHtml = getHtml;
    });
    define("fn/getPath", ["require", "exports", "fn/replaceAll"], function (require, exports, replaceAll_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getPath = void 0;
        const getPath = function (element) {
            let path, 
            //node = $(element),
            node = element, done = 0;
            while (node.length) {
                //let realNode = node[0],
                let realNode = node, name = realNode.localName;
                if (!name)
                    break;
                if (realNode === document.body)
                    break;
                if (realNode.id) {
                    return '#' + realNode.id;
                }
                if (!done) {
                    if (realNode.className && realNode.className !== ' ') {
                        name += '.' + (0, replaceAll_4.replaceAll)(' ', '.', (0, replaceAll_4.replaceAll)('  ', ' ', realNode.className));
                    }
                    done = 1;
                }
                //var parent = node.parent(),
                let parent = node.parentNode, 
                //sameTagSiblings = parent.children(name);
                sameTagSiblings = parent.children.filter((val) => {
                    return val.tagName === name;
                });
                if (sameTagSiblings.length > 1) {
                    //var allSiblings = parent.children(),
                    let allSiblings = parent.children, 
                    //index = allSiblings.index(realNode) + 1;
                    index = allSiblings.indexOf(realNode) + 1;
                    if (index > 1) {
                        name += ':nth-child(' + index + ')';
                    }
                }
                path = name + (path ? '>' + path : '');
                node = parent;
            }
            return path;
        };
        exports.getPath = getPath;
    });
    define("fn/getProp", ["require", "exports", "fn/checkType"], function (require, exports, checkType_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getProp = void 0;
        const getProp = function (obj, prop) {
            (0, checkType_5.checkType)(obj, 'object', bbn._('The obj must be an object in setProp'));
            (0, checkType_5.checkType)(prop, 'string', bbn._('The prop must be a string in setProp'));
            return obj[prop];
        };
        exports.getProp = getProp;
    });
    define("fn/getScrollBarSize", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getScrollBarSize = void 0;
        const getScrollBarSize = function () {
            if (bbn.env.scrollBarSize === undefined) {
                let outer = document.createElement('div');
                outer.style.visibility = 'hidden';
                outer.style.width = '100px';
                if ('msOverflowStyle' in outer.style) {
                    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
                }
                document.body.appendChild(outer);
                let widthNoScroll = outer.offsetWidth;
                // force scrollbars
                outer.style.overflow = 'scroll';
                // add innerdiv
                let inner = document.createElement('div');
                inner.style.width = '100%';
                outer.appendChild(inner);
                let widthWithScroll = inner.offsetWidth;
                // remove divs
                outer.parentNode.removeChild(outer);
                let sz = widthNoScroll - widthWithScroll;
                bbn.env.scrollBarSize = sz ? sz + 1 : 0;
            }
            return bbn.env.scrollBarSize;
        };
        exports.getScrollBarSize = getScrollBarSize;
    });
    define("fn/getText", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getText = void 0;
        const getText = function (ele) {
            return ele.innerText().trim();
        };
        exports.getText = getText;
    });
    define("fn/getTimeoff", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getTimeoff = void 0;
        const getTimeoff = function () {
            if (!bbn.env.isFocused) {
                return Math.round(new Date().getTime() / 1000 - bbn.env.timeoff);
            }
            return 0;
        };
        exports.getTimeoff = getTimeoff;
    });
    define("fn/happy", ["require", "exports", "fn/log"], function (require, exports, log_12) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.happy = void 0;
        const happy = function (...args) {
            args.unshift({
                _bbn_console_level: 3,
                _bbn_console_style: 'color: white; background: green; font-size: 18px;',
            });
            log_12.log.apply(this, args);
            return this;
        };
        exports.happy = happy;
    });
    define("fn/hex2rgb", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.hex2rgb = void 0;
        const hex2rgb = function (hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
                ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16),
                }
                : null;
        };
        exports.hex2rgb = hex2rgb;
    });
    define("fn/history", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.history = void 0;
        const history = function () {
            return window.history || false;
        };
        exports.history = history;
    });
    define("fn/html2text", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.html2text = void 0;
        const html2text = function (st) {
            let $test = document.createElement('div');
            $test.innerHTML = st;
            st = $test.innerText;
            return st;
        };
        exports.html2text = html2text;
    });
    define("fn/imageToCanvas", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.imageToCanvas = void 0;
        const imageToCanvas = function (img) {
            let canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.getContext('2d').drawImage(img, 0, 0);
            return canvas;
        };
        exports.imageToCanvas = imageToCanvas;
    });
    define("fn/imgToBase64", ["require", "exports", "fn/imageToCanvas"], function (require, exports, imageToCanvas_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.imgToBase64 = void 0;
        const imgToBase64 = function (img, type = 'image/png') {
            let canvas = (0, imageToCanvas_1.imageToCanvas)(img);
            //return canvasToImage(canvas);
            return canvas.toDataURL(type);
        };
        exports.imgToBase64 = imgToBase64;
    });
    define("fn/info", ["require", "exports", "fn/log"], function (require, exports, log_13) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.info = void 0;
        const info = function (...args) {
            args.unshift({
                //_bbn_console_mode: "info",
                _bbn_console_level: 4,
                _bbn_console_style: 'color: #EEE; background: blue; font-size: 12px;',
            });
            log_13.log.apply(this, args);
            return this;
        };
        exports.info = info;
    });
    define("fn/treatAjaxArguments", ["require", "exports", "fn/isObject", "fn/isFunction", "fn/substr", "fn/numProperties"], function (require, exports, isObject_14, isFunction_8, substr_9, numProperties_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.treatAjaxArguments = void 0;
        const treatAjaxArguments = function (args) {
            let cfg = {};
            let t;
            let i;
            if ((0, isObject_14.isObject)(args[0]) && args.length === 1) {
                return args[0];
            }
            for (i = 0; i < args.length; i++) {
                t = typeof args[i];
                t = t.toLowerCase();
                /* Callbacks */
                if ((0, isFunction_8.isFunction)(args[i])) {
                    if (cfg.errorFn && !cfg.abortFn) {
                        cfg.abortFn = args[i];
                    }
                    if (cfg.successFn && !cfg.errorFn) {
                        cfg.errorFn = args[i];
                    }
                    else if (!cfg.successFn) {
                        cfg.successFn = args[i];
                    }
                }
                else if (args[i] === 1 || args[i] === true) {
                    /* Force */
                    cfg.force = true;
                }
                else if (t === 'string') {
                    if (!cfg.url) {
                        /* Hash */
                        if (args[i].indexOf('#') === 0 || args[i].indexOf(bbn.env.root + '#') === 0) {
                            cfg.url = (0, substr_9.substr)(args[i], bbn.env.root.length);
                        }
                        else {
                            /* Link */
                            cfg.url = args[i];
                            if (cfg.url.indexOf(bbn.env.root) === 0) {
                                cfg.url = (0, substr_9.substr)(cfg.url, bbn.env.root.length);
                            }
                        }
                    }
                    else {
                        /* Ajax datatype */
                        cfg.datatype = args[i];
                    }
                }
                else if (args[i] && t === 'object') {
                    /* Event */
                    if (args[i] instanceof Event) {
                        cfg.e = args[i];
                    }
                    else if (!cfg.ele && args[i].nodeType === 1) {
                        /* HTML Element */
                        cfg.ele = args[i];
                    }
                    else if (t.toLowerCase() === 'object') {
                        /* An object to post */
                        cfg.obj = args[i];
                    }
                }
            }
            if (!cfg.url && (0, numProperties_6.numProperties)(cfg)) {
                cfg.url = bbn.env.path;
            }
            if (cfg.obj === undefined) {
                cfg.obj = { _bbn: 'public' };
            }
            if (!cfg.datatype) {
                cfg.datatype = 'json';
            }
            return cfg;
        };
        exports.treatAjaxArguments = treatAjaxArguments;
    });
    define("fn/setNavigationVars", ["require", "exports", "fn/substr", "fn/filter", "fn/extend", "fn/html2text"], function (require, exports, substr_10, filter_4, extend_5, html2text_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setNavigationVars = void 0;
        const setNavigationVars = function (url, title, data, repl) {
            // Current path becomes old path
            bbn.env.old_path = bbn.env.path;
            // URL includes the domain
            bbn.env.url = ['https:/', 'http://'].includes((0, substr_10.substr)(url, 0, 7)) ? url : bbn.env.root + url;
            // Path does not
            bbn.env.path = (0, substr_10.substr)(bbn.env.url, bbn.env.root.length);
            // Params will include each part of the URL
            bbn.env.params = (0, filter_4.filter)(bbn.env.path.split('/'), (v) => {
                return v !== '';
            });
            // Managing history
            let h = window.history;
            if (h) {
                // Current state
                let state = h.state;
                // Future state
                let obj = {
                    url: bbn.env.path,
                    old_path: bbn.env.old_path || null,
                    data: data || {},
                    reload: false
                };
                // If same URL we replace
                if (state && state.url === bbn.env.path) {
                    if (state.data) {
                        (0, extend_5.extend)(obj.data, state.data);
                    }
                    if (state.title && !title) {
                        title = state.title;
                    }
                    repl = true;
                }
                // If no title the global title
                if (!title) {
                    title = bbn.env.siteTitle;
                }
                // Otherwise we add the global title at the end
                else {
                    title = (0, html2text_1.html2text)(title);
                }
                // Replacing state
                if (repl) {
                    obj.reload = true;
                    h.replaceState(obj, title, bbn.env.url);
                }
                // Adding state
                else {
                    h.pushState(obj, title, bbn.env.url);
                }
            }
        };
        exports.setNavigationVars = setNavigationVars;
    });
    define("fn/link", ["require", "exports", "fn/treatAjaxArguments", "fn/getLoader", "fn/defaultPreLinkFunction", "fn/ajax", "fn/log", "fn/isObject", "fn/callback", "fn/setNavigationVars"], function (require, exports, treatAjaxArguments_1, getLoader_3, defaultPreLinkFunction_1, ajax_2, log_14, isObject_15, callback_1, setNavigationVars_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.link = void 0;
        const link = function (...args) {
            let cfg = (0, treatAjaxArguments_1.treatAjaxArguments)(args);
            let ok = true;
            /* If we can't find a correct link we load the current URL */
            if (!cfg) {
                return link(window.location.href);
            }
            /* Just executing the javascript if there is */
            if (cfg.url.indexOf('javascript:') === 0) {
                return true;
            }
            if (cfg.url.indexOf('data:') === 0) {
                return true;
            }
            if (cfg.url.indexOf('#') === 0) {
                location.href = bbn.env.url + cfg.url;
                /*
                if ( window.history ){
                  bbn.env.historyDisabled = true;
                  let state = h.state;
                  window.history.replaceState(null, state.title, bbn.env.url);
                }
                bbn.env.historyDisabled = false;
                */
                return true;
            }
            else if (cfg.url.indexOf('mailto:') === 0) {
                /* Mail link */
                bbn.env.ignoreUnload = true;
                window.location.href = cfg.url;
                setTimeout(() => {
                    bbn.env.ignoreUnload = false;
                }, 0);
                return false;
            }
            if ((0, getLoader_3.getLoader)(cfg.url)) {
                return false;
            }
            /* Opens an external page in a new window */
            if ((cfg.url.indexOf('http://') === 0 || cfg.url.indexOf('https://') === 0) &&
                cfg.url.indexOf(bbn.env.host) !== 0) {
                if (cfg.e) {
                    cfg.e.preventDefault();
                }
                window.open(cfg.url);
                return false;
            }
            else if (cfg.url !== bbn.env.params.join('/') || cfg.force) {
                /* The URL is fine so go ahead if something is not already loading */
                /* If a second callback is defined, it is triggered instead of defaultPreLinkFunction */
                if (cfg.successFn) {
                    ok = cfg.successFn(cfg.url);
                }
                else if (defaultPreLinkFunction_1.defaultPreLinkFunction) {
                    ok = (0, defaultPreLinkFunction_1.defaultPreLinkFunction)(cfg.url, cfg.force, cfg.ele);
                    /*
                    if (ok.data !== undefined) {
                        extend(cfg.obj, ok.data);
                        ok = 1;
                    }
                    */
                }
                if (ok) {
                    if (ok !== 1 && typeof ok === 'string') {
                        cfg.url = ok;
                    }
                    /** todo Do we keep obj in the unique string or do we make that only one concurrent connection to the same address can occur at the same time? */
                    let errSt = bbn._('The Ajax call to') + ' ' + cfg.url + ' ';
                    return (0, ajax_2.ajax)(cfg.url, cfg.datatype, cfg.obj, function (res) {
                        if (!res) {
                            (0, log_14.log)(errSt + bbn._('returned no answer'));
                        }
                        if ((0, isObject_15.isObject)(res)) {
                            // If there's nothing in the result, just an empty object, the callback stops here and the URL is not changed
                            if (Object.keys(res).length === 0) {
                                (0, log_14.log)(errSt + bbn._('returned an empty object'));
                            }
                            if (res.new_url) {
                                res.old_path = cfg.url;
                                cfg.url = res.new_url;
                            }
                            else if (res.url && cfg.url !== res.url) {
                                res.old_path = cfg.url;
                            }
                        }
                        if ((0, callback_1.callback)(cfg.url, res, cfg.successFn, null, cfg.ele) && res.noNav === undefined) {
                            // This solution is not very clean (we can't shorten a URL)
                            if (bbn.env.path.indexOf(cfg.url) !== 0) {
                                (0, setNavigationVars_1.setNavigationVars)(cfg.url, (res.title ? res.title + ' - ' : '') + bbn.env.siteTitle);
                            }
                        }
                    }, cfg.errorFn || null);
                }
            }
            return true;
        };
        exports.link = link;
    });
    define("fn/post", ["require", "exports", "fn/treatAjaxArguments", "fn/ajax", "fn/callback"], function (require, exports, treatAjaxArguments_2, ajax_3, callback_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.post = void 0;
        const post = function (...args) {
            let cfg = (0, treatAjaxArguments_2.treatAjaxArguments)(args);
            if (cfg.url) {
                return (0, ajax_3.ajax)(cfg.url, cfg.datatype, cfg.obj, (res) => {
                    (0, callback_2.callback)(cfg.url, res, cfg.successFn, null, cfg.ele);
                }, cfg.errorFn, cfg.abortFn);
            }
        };
        exports.post = post;
    });
    define("fn/submit", ["require", "exports", "fn/formdata", "fn/post"], function (require, exports, formdata_1, post_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.submit = void 0;
        const submit = function (form, e, fn) {
            let url = form.getAttribute('action') || bbn.env.path;
            let data;
            if (url === '') {
                url = '.';
            }
            //if ( (typeof(url) === 'string') && (url.indexOf("http") !== 0 || url.indexOf(window.document.location.hostname) !== -1) && !form.is("[target]") ){
            if (typeof url === 'string' &&
                (url.indexOf('http') !== 0 || url.indexOf(window.document.location.hostname) !== -1) &&
                !form.getAttribute('target')) {
                if (e) {
                    e.preventDefault();
                }
                data = (0, formdata_1.formdata)(form);
                if (data) {
                    //$form.attr("action", null);
                    form.setAttribute('action', null);
                    //$form.data("bbnSubmit", 1);
                    if (!fn) {
                        fn = form.getAttribute('data-script') ? eval(form.getAttribute('data-script')) : null;
                    }
                    if (fn) {
                        (0, post_1.post)(url, data, fn);
                    }
                    else {
                        (0, post_1.post)(url, data);
                    }
                }
            }
        };
        exports.submit = submit;
    });
    define("fn/resize", ["require", "exports", "fn/getCssVar", "fn/each", "fn/defaultResizeFunction"], function (require, exports, getCssVar_1, each_16, defaultResizeFunction_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.resize = void 0;
        const resize = function () {
            let diffW = bbn.env.width !== window.innerWidth;
            let diffH = bbn.env.height !== window.innerHeight;
            if (diffW || diffH) {
                if (diffW) {
                    bbn.env.width =
                        window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
                    document.documentElement.style.setProperty('--vw', bbn.env.width * 0.01 + 'px');
                }
                if (diffH) {
                    bbn.env.height =
                        window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
                    document.documentElement.style.setProperty('--vh', bbn.env.height * 0.01 + 'px');
                }
                let smallWidth = parseInt((0, getCssVar_1.getCssVar)('mobile-limit')) || 650;
                let newCls = 'bbn-screen-' + (bbn.env.width < smallWidth ? 'small' : 'regular');
                let classes = (document.body.className || '').split(' ');
                let done = false;
                (0, each_16.each)(classes, (cls, idx) => {
                    let bits = cls.split('-');
                    if (bits.length === 3 && cls.indexOf('bbn-screen-') === 0) {
                        done = true;
                        if (cls !== newCls) {
                            classes.splice(idx, 1, newCls);
                        }
                        return false;
                    }
                });
                if (!done) {
                    classes.push(newCls);
                }
                document.body.className = classes.join(' ');
                (0, defaultResizeFunction_1.defaultResizeFunction)();
            }
        };
        exports.resize = resize;
    });
    define("fn/isMobileDevice", ["require", "exports", "fn/getDeviceType"], function (require, exports, getDeviceType_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isMobileDevice = void 0;
        const isMobileDevice = function () {
            return (0, getDeviceType_1.getDeviceType)() === 'mobile';
        };
        exports.isMobileDevice = isMobileDevice;
    });
    define("fn/isTabletDevice", ["require", "exports", "fn/getDeviceType"], function (require, exports, getDeviceType_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isTabletDevice = void 0;
        const isTabletDevice = function () {
            return (0, getDeviceType_2.getDeviceType)() === 'tablet';
        };
        exports.isTabletDevice = isTabletDevice;
    });
    define("fn/isMobile", ["require", "exports", "fn/isMobileDevice", "fn/isTabletDevice"], function (require, exports, isMobileDevice_1, isTabletDevice_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isMobile = void 0;
        const isMobile = function () {
            return (0, isMobileDevice_1.isMobileDevice)() || (0, isTabletDevice_1.isTabletDevice)();
        };
        exports.isMobile = isMobile;
    });
    define("fn/init", ["require", "exports", "fn/substr", "fn/each", "fn/extend", "fn/addColors", "fn/link", "fn/submit", "fn/resize", "fn/isMobile", "fn/isTabletDevice", "fn/defaultHistoryFunction", "fn/isFunction", "fn/log"], function (require, exports, substr_11, each_17, extend_6, addColors_1, link_1, submit_1, resize_1, isMobile_1, isTabletDevice_2, defaultHistoryFunction_1, isFunction_9, log_15) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.init = void 0;
        const init = function (cfg, force) {
            let parts;
            if (!bbn.env.isInit || force) {
                bbn.env.root = document.baseURI.length > 0 ? document.baseURI : bbn.env.host;
                if (bbn.env.root.length && (0, substr_11.substr)(bbn.env.root, -1) !== '/') {
                    bbn.env.root += '/';
                }
                if (!bbn.env.isInit && typeof dayjs !== 'undefined') {
                    (0, each_17.each)([
                        'advancedFormat',
                        'arraySupport',
                        'badMutable',
                        'buddhistEra',
                        'calendar',
                        'customParseFormat',
                        'dayOfYear',
                        'devHelper',
                        'duration',
                        'isBetween',
                        'isLeapYear',
                        'isSameOrAfter',
                        'isSameOrBefore',
                        'isToday',
                        'isTomorrow',
                        'isYesterday',
                        'isoWeek',
                        'isoWeeksInYear',
                        'localeData',
                        'localizedFormat',
                        'minMax',
                        'objectSupport',
                        'pluralGetSet',
                        'quarterOfYear',
                        'relativeTime',
                        'timezone',
                        'toArray',
                        'toObject',
                        'updateLocale',
                        'utc',
                        'weekOfYear',
                        'weekYear',
                        'weekday',
                    ], (plugin) => {
                        if (window['dayjs_plugin_' + plugin]) {
                            dayjs.extend(window['dayjs_plugin_' + plugin]);
                        }
                    });
                }
                /* The server's path (difference between the host and the current dir */
                if (typeof cfg === 'object') {
                    (0, extend_6.extend)(true, bbn, cfg);
                }
                bbn.env.path = (0, substr_11.substr)(bbn.env.url, bbn.env.root.length);
                parts = bbn.env.path.split('/');
                //$.each(parts, function(i, v){
                (0, each_17.each)(parts, (v, i) => {
                    v = decodeURI(v.trim());
                    if (v !== '') {
                        bbn.env.params.push(v);
                    }
                });
                if (bbn.vars.colors) {
                    (0, addColors_1.addColors)(bbn.vars.colors);
                }
                if (bbn.env.lang && undefined !== dayjs) {
                    dayjs.locale(bbn.env.lang);
                }
                window.onfocus = () => {
                    bbn.env.isFocused = true;
                };
                window.onblur = () => {
                    bbn.env.isFocused = false;
                    bbn.env.timeoff = Math.round(new Date().getTime() / 1000);
                };
                document.addEventListener('focusin', (e) => {
                    if (e.target instanceof HTMLElement && !e.target.classList.contains('bbn-no')) {
                        bbn.env.focused = e.target;
                    }
                    bbn.env.last_focus = new Date().getTime();
                });
                document.addEventListener('click', (e) => {
                    bbn.env.last_focus = new Date().getTime();
                    if (bbn.env.nav !== 'ajax') {
                        return;
                    }
                    let target = e.target;
                    if (target instanceof HTMLElement && (target.tagName !== 'A')) {
                        let p = target;
                        while (p && p.tagName !== 'A') {
                            if (p.tagName === 'BODY') {
                                break;
                            }
                            p = p.parentElement;
                        }
                        if (p && p.tagName === 'A') {
                            target = p;
                        }
                        else {
                            target = null;
                        }
                    }
                    if (target instanceof HTMLElement && target.hasAttribute('href') && !target.hasAttribute('target') && !target.classList.contains('bbn-no')) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, link_1.link)(target.getAttribute('href'));
                        return false;
                    }
                });
                (0, each_17.each)(document.querySelectorAll('form:not(.bbn-no), form:not(.bbn-form)'), (ele) => {
                    ele.addEventListener('submit', (e) => {
                        (0, submit_1.submit)(ele, e);
                    });
                });
                window.addEventListener('hashchange', () => {
                    bbn.env.hashChanged = new Date().getTime();
                }, false);
                window.addEventListener('resize', () => {
                    (0, resize_1.resize)();
                });
                window.addEventListener('orientationchange', () => {
                    (0, resize_1.resize)();
                });
                (0, resize_1.resize)();
                if ((0, isMobile_1.isMobile)()) {
                    document.body.classList.add('bbn-mobile');
                    if ((0, isTabletDevice_2.isTabletDevice)()) {
                        document.body.classList.add('bbn-tablet');
                    }
                }
                if (window.history) {
                    window.onpopstate = function (e) {
                        let h = window.history;
                        if (!bbn.env.historyDisabled && h) {
                            //e.preventDefault();
                            let state = h.state;
                            if (state) {
                                if ((0, defaultHistoryFunction_1.defaultHistoryFunction)(state)) {
                                    //link(substr(state.url, bbn.env.root.length), $.extend({title: state.title}, state.data));
                                    (0, link_1.link)(state.url, (0, extend_6.extend)({ title: state.title || bbn.env.siteTitle }, state.data || {}));
                                }
                                else if (state && state.data && (0, isFunction_9.isFunction)(state.data.script)) {
                                    state.data.script();
                                }
                            }
                        }
                    };
                }
                bbn.env.isInit = true;
                document.dispatchEvent(new Event('bbninit'));
                if (bbn.env.logging) {
                    (0, log_15.log)('Logging in bbn is enabled');
                }
            }
        };
        exports.init = init;
    });
    define("fn/isActiveInterface", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isActiveInterface = void 0;
        const isActiveInterface = function (secs = 600) {
            if (!bbn.env.last_focus) {
                return false;
            }
            let t = new Date().getTime();
            return t - bbn.env.last_focus < secs * 1000;
        };
        exports.isActiveInterface = isActiveInterface;
    });
    define("fn/isBoolean", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isBoolean = void 0;
        const isBoolean = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (![true, false].includes(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isBoolean = isBoolean;
    });
    define("fn/isColor", ["require", "exports", "fn/isString"], function (require, exports, isString_19) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isColor = void 0;
        const isColor = function (...args) {
            if (!args.length)
                return false;
            var reg = new RegExp('^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|rgba *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$', 'i');
            for (let st of args) {
                if (!(0, isString_19.isString)(st)) {
                    return false;
                }
                if (!reg.test(st)) {
                    return false;
                }
            }
            return true;
        };
        exports.isColor = isColor;
    });
    define("fn/isComment", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isComment = void 0;
        const isComment = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (!(a instanceof Comment)) {
                    return false;
                }
            }
            return true;
        };
        exports.isComment = isComment;
    });
    define("fn/isDesktopDevice", ["require", "exports", "fn/getDeviceType"], function (require, exports, getDeviceType_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isDesktopDevice = void 0;
        const isDesktopDevice = function () {
            return (0, getDeviceType_3.getDeviceType)() === 'desktop';
        };
        exports.isDesktopDevice = isDesktopDevice;
    });
    define("fn/isValidDimension", ["require", "exports", "fn/isNumber", "fn/substr"], function (require, exports, isNumber_7, substr_12) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isValidDimension = void 0;
        const isValidDimension = function (st) {
            if (typeof st === 'string' && (st.length > 0) && ((st.indexOf('calc') === 0) || (0, isNumber_7.isNumber)((0, substr_12.substr)(st, 0, 1)))) {
                let el = document.createElement('div');
                el.style.width = st;
                let res = !!el.style.width.length;
                el.remove();
                return res;
            }
            return false;
        };
        exports.isValidDimension = isValidDimension;
    });
    define("fn/isDimension", ["require", "exports", "fn/isValidDimension"], function (require, exports, isValidDimension_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isDimension = void 0;
        const isDimension = function (...args) {
            if (!args.length)
                return false;
            for (let st of args) {
                if ((typeof st !== 'number') || (st < 0)) {
                    return false;
                }
                if (!(0, isValidDimension_1.isValidDimension)(st)) {
                    return false;
                }
            }
            return true;
        };
        exports.isDimension = isDimension;
    });
    define("fn/isEmail", ["require", "exports", "fn/isString"], function (require, exports, isString_20) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isEmail = void 0;
        const isEmail = function (...args) {
            if (!args.length)
                return false;
            let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            for (let st of args) {
                if (!(0, isString_20.isString)(st)) {
                    return false;
                }
                if (!regex.test(st)) {
                    return false;
                }
            }
            return true;
        };
        exports.isEmail = isEmail;
    });
    define("fn/isEvent", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isEvent = void 0;
        const isEvent = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (!(a instanceof Event)) {
                    return false;
                }
            }
            return true;
        };
        exports.isEvent = isEvent;
    });
    define("fn/isFocused", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isFocused = void 0;
        const isFocused = function (ele, contain) {
            return ele === document.activeElement || (contain && ele.contains && ele.contains(document.activeElement));
        };
        exports.isFocused = isFocused;
    });
    define("fn/isIP", ["require", "exports", "fn/isString"], function (require, exports, isString_21) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isIP = void 0;
        const isIP = function (...args) {
            if (!args.length)
                return false;
            for (let st of args) {
                if (!(0, isString_21.isString)(st) || !bbn.vars.regexp.ip.test(st)) {
                    return false;
                }
            }
            return true;
        };
        exports.isIP = isIP;
    });
    define("fn/isHostname", ["require", "exports", "fn/isString", "fn/isIP"], function (require, exports, isString_22, isIP_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isHostname = void 0;
        const isHostname = function (...args) {
            if (!args.length)
                return false;
            for (let st of args) {
                if (!(0, isString_22.isString)(st)) {
                    return false;
                }
                if (!(0, isIP_1.isIP)(st) && !bbn.vars.regexp.hostname.test(st)) {
                    return false;
                }
            }
            return true;
        };
        exports.isHostname = isHostname;
    });
    define("fn/isInside", ["require", "exports", "fn/getAncestors", "fn/isString", "fn/each"], function (require, exports, getAncestors_1, isString_23, each_18) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isInside = void 0;
        const isInside = function (ele, ancestor) {
            let ancestors = (0, getAncestors_1.getAncestors)(ele);
            if (ancestors.length) {
                if ((0, isString_23.isString)(ancestor)) {
                    let ok = false;
                    (0, each_18.each)(ancestors, (a) => {
                        if (a.matches && a.matches(ancestor)) {
                            ok = true;
                            return false;
                        }
                    });
                    return ok;
                }
                if (ancestor instanceof HTMLElement) {
                    return ancestors.indexOf(ancestor) > -1;
                }
            }
            return false;
        };
        exports.isInside = isInside;
    });
    define("fn/isPercent", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isPercent = void 0;
        const isPercent = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (typeof a !== 'string' || !a.match(/^\d+(?:\.\d+)?%$/)) {
                    return false;
                }
            }
            return true;
        };
        exports.isPercent = isPercent;
    });
    define("fn/isPrimitive", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isPrimitive = void 0;
        const isPrimitive = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (a !== null && (typeof a == 'object' || typeof a == 'function')) {
                    return false;
                }
            }
            return true;
        };
        exports.isPrimitive = isPrimitive;
    });
    define("fn/isPromise", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isPromise = void 0;
        const isPromise = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if ({}.toString.apply(a) !== '[object Promise]') {
                    return false;
                }
            }
            return true;
        };
        exports.isPromise = isPromise;
    });
    define("fn/isPropSize", ["require", "exports", "fn/each"], function (require, exports, each_19) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isPropSize = void 0;
        const isPropSize = function (name) {
            let isTrue = false;
            (0, each_19.each)(['width', 'height', 'gap', 'margin', 'padding', 'top', 'left', 'right', 'bottom'], (a) => {
                if (name.indexOf(a) !== -1) {
                    isTrue = true;
                    return false;
                }
            });
            return isTrue;
        };
        exports.isPropSize = isPropSize;
    });
    define("fn/isSQLDate", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isSQLDate = void 0;
        const isSQLDate = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if (typeof a !== 'string' ||
                    !a.match(/^([1-2]\d{3})-((0[0-9])|(1[12]))-(([0-2][0-9])|(3[01]))(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/)) {
                    return false;
                }
            }
            return true;
        };
        exports.isSQLDate = isSQLDate;
    });
    define("fn/isSymbol", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isSymbol = void 0;
        const isSymbol = function (...args) {
            if (!args.length)
                return false;
            for (let a of args) {
                if ({}.toString.apply(a) !== '[object Symbol]') {
                    return false;
                }
            }
            return true;
        };
        exports.isSymbol = isSymbol;
    });
    define("fn/isURL", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isURL = void 0;
        const isURL = function (...args) {
            if (!args.length)
                return false;
            for (let str of args) {
                if (!bbn.vars.regexp.url.test(str)) {
                    return false;
                }
            }
            return true;
        };
        exports.isURL = isURL;
    });
    define("fn/isValidName", ["require", "exports", "fn/isString"], function (require, exports, isString_24) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isValidName = void 0;
        const isValidName = function (...args) {
            if (!args.length) {
                return false;
            }
            for (let arg of args) {
                if (!(0, isString_24.isString)(arg) || !/^[$A-Z_][0-9A-Z_$]*$/i.test(arg)) {
                    return false;
                }
            }
            return true;
        };
        exports.isValidName = isValidName;
    });
    define("fn/isVue", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isVue = void 0;
        const isVue = function (...args) {
            if (!args.length) {
                return false;
            }
            if ('vue' in bbn && window['Vue']) {
                if ('app' in bbn.vue) {
                    for (let a of args) {
                        if (!a || typeof a.render !== 'function') {
                            return false;
                        }
                    }
                }
                else {
                    for (let a of args) {
                        if (!(a instanceof window['Vue'])) {
                            return false;
                        }
                    }
                }
            }
            if ('cp' in bbn && 'isComponent' in bbn['cp'] && (typeof bbn['cp'].isComponent === 'function')) {
                return bbn.cp.isComponent(...args);
            }
            return true;
        };
        exports.isVue = isVue;
    });
    define("fn/lightenDarkenHex", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.lightenDarkenHex = void 0;
        const lightenDarkenHex = function (hex, amt) {
            if (hex && amt) {
                let ht = hex[0] === '#';
                hex = ht ? hex.slice(1) : hex;
                let num = parseInt(hex, 16), r = (num >> 16) + amt, b = ((num >> 8) & 0x00ff) + amt, g = (num & 0x0000ff) + amt;
                if (r > 255) {
                    r = 255;
                }
                else if (r < 0) {
                    r = 0;
                }
                if (b > 255) {
                    b = 255;
                }
                else if (b < 0) {
                    b = 0;
                }
                if (g > 255) {
                    g = 255;
                }
                else if (g < 0) {
                    g = 0;
                }
                return (ht ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
            }
        };
        exports.lightenDarkenHex = lightenDarkenHex;
    });
    define("fn/warning", ["require", "exports", "fn/log"], function (require, exports, log_16) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.warning = void 0;
        const warning = function (message) {
            const args = ['BBN: ' + message];
            const obj = {
                _bbn_console_mode: 'warn',
                _bbn_console_level: 2,
                _bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
            };
            args.unshift(obj);
            log_16.log.apply(this, args);
        };
        exports.warning = warning;
    });
    define("fn/makeReactive", ["require", "exports", "fn/log", "fn/createObject", "fn/isSymbol", "fn/isNumber", "fn/isArray", "fn/warning", "fn/isFunction", "fn/isSame"], function (require, exports, log_17, createObject_2, isSymbol_1, isNumber_8, isArray_13, warning_1, isFunction_10, isSame_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.makeReactive = void 0;
        const makeReactive = function (obj, onSet, parent, parentProp) {
            const parentString = parent?.$cid || '';
            const prefix = '__bbn_' + (parentString ? parentString + '_' : '');
            if (obj && typeof obj === 'object' && [undefined, Object, Array].includes(obj.constructor)) {
                if (obj.__bbnIsProxy && obj.__bbnParent === parent) {
                    return obj;
                }
                if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
                    (0, log_17.log)(['MAKING bbn-loadbar', obj]);
                }
                if (!obj.__bbnWatchers) {
                    Reflect.defineProperty(obj, '__bbnWatchers', {
                        value: (0, createObject_2.createObject)(),
                        writable: true,
                        configurable: true,
                        enumerable: false,
                    });
                }
                const handler = {
                    get(target, key) {
                        const realValue = Reflect.get(target, key);
                        const realTarget = target.__bbnRoot || target;
                        if ((0, isSymbol_1.isSymbol)(key)) {
                            return Reflect.get(realTarget, key);
                        }
                        const propName = parentProp ? parentProp + '.' + key : key;
                        const hiddenKey = prefix + ((0, isNumber_8.isNumber)(key) ? key.toString() : key);
                        if (['fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'].includes(key) &&
                            (0, isArray_13.isArray)(target)) {
                            return function (...args) {
                                let res = realTarget[key](...args);
                                (0, warning_1.warning)('DOING ARRAY STUFF');
                                (0, log_17.log)(target.__bbnParent);
                                onSet(target, 'length', parent);
                                return res;
                            };
                        }
                        if ((0, isFunction_10.isFunction)(realValue)) {
                            return realValue;
                        }
                        if (key === '__bbnRoot') {
                            let root = obj;
                            while (root && root?.__bbnTarget) {
                                root = root.__bbnTarget;
                            }
                            return root;
                        }
                        if (key === '__bbnIsProxy') {
                            return true;
                        }
                        if (key === '__bbnTarget') {
                            return target;
                        }
                        if (key === '__bbnParent') {
                            return parent;
                        }
                        if (key === '__bbnWatchers') {
                            return target.__bbnWatchers;
                        }
                        if (key.indexOf('__bbn_') === 0) {
                            return Reflect.get(target, key);
                        }
                        if (key === 'length' && (0, isArray_13.isArray)(target.__bbnRoot || target)) {
                            return realTarget.length;
                        }
                        if (!(key in target)) {
                            return realValue;
                        }
                        if (realValue &&
                            typeof realValue === 'object' &&
                            [undefined, Object, Array].includes(realValue.constructor)) {
                            if (realValue.__bbnIsProxy && realValue.__bbnParent === parent) {
                                return realTarget[hiddenKey];
                            }
                            if (!(hiddenKey in realTarget)) {
                                Reflect.defineProperty(realTarget, hiddenKey, {
                                    value: makeReactive(realValue, onSet, parent, propName),
                                    writable: true,
                                    configurable: true,
                                    enumerable: false,
                                });
                            }
                            if (realTarget[hiddenKey].__bbnIsProxy && !realTarget.__bbnWatchers[parentString]) {
                                realTarget.__bbnWatchers[parentString] = propName;
                            }
                            return realTarget[hiddenKey];
                        }
                        return realValue;
                    },
                    set(target, key, value) {
                        if ((0, isSymbol_1.isSymbol)(key)) {
                            return Reflect.get(target, key, value);
                        }
                        const realTarget = target.__bbnRoot || target;
                        const propName = parentProp ? parentProp + '.' + key : key;
                        if ((0, isSymbol_1.isSymbol)(key)) {
                            return Reflect.get(target, key);
                        }
                        if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
                            (0, log_17.log)(['Setting proxy prop in ' + parent.$options.name, target, key, value]);
                        }
                        if (!(0, isSame_2.isSame)(realTarget[key], value)) {
                            if (key.indexOf('__bbn_') === 0) {
                                Reflect.defineProperty(realTarget, key, {
                                    value: makeReactive(value, onSet, parent, propName),
                                    writable: true,
                                    configurable: true,
                                    enumerable: false,
                                });
                            }
                            else {
                                if (value &&
                                    typeof value === 'object' &&
                                    [undefined, Object, Array].includes(value.constructor)) {
                                    const hiddenKey = prefix + ((0, isNumber_8.isNumber)(key) ? key.toString() : key);
                                    Reflect.defineProperty(realTarget, hiddenKey, {
                                        value: makeReactive(value, onSet, parent, propName),
                                        writable: true,
                                        configurable: true,
                                        enumerable: false,
                                    });
                                    if (realTarget[hiddenKey].__bbnIsProxy && !realTarget.__bbnWatchers[parentString]) {
                                        realTarget.__bbnWatchers[parentString] = propName;
                                    }
                                }
                            }
                            if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
                                (0, log_17.log)([
                                    'Setting proxy prop in ' +
                                        parent.$options.name +
                                        ' ' +
                                        ((0, isNumber_8.isNumber)(key) ? key.toString() : key),
                                    value,
                                    target,
                                ]);
                            }
                            Reflect.set(realTarget, key, value);
                            onSet(target, key, parent);
                        }
                        return true;
                    },
                    defineProperty(target, key, description) {
                        const realTarget = target;
                        const propName = parentProp ? parentProp + '.' + key : key;
                        if (key === '__bbnWatchers' || (0, isSymbol_1.isSymbol)(key) || key.indexOf('__bbn_') === 0) {
                            Reflect.defineProperty(realTarget, key, description);
                        }
                        else {
                            const hiddenKey = prefix + ((0, isNumber_8.isNumber)(key) ? key.toString() : key);
                            Reflect.defineProperty(realTarget, hiddenKey, {
                                value: makeReactive(description.value, onSet, parent, propName),
                                writable: true,
                                configurable: true,
                                enumerable: false,
                            });
                        }
                        onSet(target, key, parent);
                        return true;
                    },
                    deleteProperty(target, key) {
                        const realTarget = target;
                        if (key.indexOf('__bbn_') === 0) {
                            Reflect.deleteProperty(realTarget, key);
                        }
                        else {
                            const hiddenKey = prefix + ((0, isNumber_8.isNumber)(key) ? key.toString() : key);
                            Reflect.deleteProperty(realTarget, hiddenKey);
                            Reflect.deleteProperty(target, key);
                        }
                        return true;
                    },
                };
                return new Proxy(obj, handler);
            }
            return obj;
        };
        exports.makeReactive = makeReactive;
    });
    define("fn/map", ["require", "exports", "fn/isArray"], function (require, exports, isArray_14) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.map = void 0;
        const map = function (arr, fn, deepProp, level = 0) {
            return arr.map((a, i) => {
                a = fn(a, i, level);
                if (deepProp && a[deepProp] && (0, isArray_14.isArray)(a[deepProp])) {
                    a[deepProp] = map(a[deepProp], fn, deepProp, level + 1);
                }
                return a;
            });
        };
        exports.map = map;
    });
    define("fn/money", ["require", "exports", "fn/isNumber"], function (require, exports, isNumber_9) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.money = void 0;
        const money = function (val, kilo, currency, novalue, decimal, thousands, precision) {
            /*
            money(val, kilo){
              let decimal = ',',
                  currency = '€',
                  thousands = ' ';
              if ( (isNaN(val) || !val) ){
                return '-';
              }
              if ( isNaN(val) || !val ){
                return 0;
              }
              if ( kilo && val ){
                val = val / 1000;
                if ( currency ){
                  currency = 'K' + currency;
                }
              }
              return parseFloat(val).toFixed(0).replace(/./g, function(c, i, a) {
                if ( c === '.' ){
                  return decimal;
                }
                return i && ((a.length - i) % 3 === 0) ? thousands + c : c;
              }) + ( currency ? ' ' + currency : '');
            },
        
               */
            if (!decimal) {
                decimal =
                    decimal === undefined && bbn.env.money && bbn.env.money.decimal !== undefined ? bbn.env.money.decimal : '.';
            }
            if (!currency) {
                currency =
                    currency === undefined && bbn.env.money && bbn.env.money.currency !== undefined
                        ? bbn.env.money.currency
                        : '';
            }
            if (!thousands) {
                thousands =
                    thousands === undefined && bbn.env.money && bbn.env.money.thousands !== undefined
                        ? bbn.env.money.thousands
                        : ' ';
            }
            if (!precision) {
                precision =
                    precision === undefined && bbn.env.money && bbn.env.money.precision !== undefined
                        ? bbn.env.money.precision
                        : 0;
            }
            if (!kilo) {
                kilo = kilo === undefined && bbn.env.money && bbn.env.money.kilo !== undefined ? bbn.env.money.kilo : false;
            }
            if (!novalue) {
                novalue =
                    novalue === undefined && bbn.env.money && bbn.env.money.novalue !== undefined
                        ? bbn.env.money.novalue
                        : false;
            }
            if (!(0, isNumber_9.isNumber)(precision)) {
                precision = kilo ? 3 : 0;
            }
            if ((val === 0) && (typeof precision === 'number') && (precision > 0)) {
                let res = val.toFixed(precision).replace('.', decimal);
                if (currency) {
                    res += ' ' + (kilo ? 'K' + currency : currency);
                }
                return res;
            }
            if ((isNaN(val) || !val) && novalue) {
                return novalue;
            }
            if (isNaN(val) || !val) {
                return 0 + (currency ? ' ' + currency : '');
            }
            if (kilo && val) {
                val = val / 1000;
                if (currency) {
                    currency = 'K' + currency;
                }
            }
            let v = val.toFixed(precision);
            let decimalPosition = 0;
            let decimalIdx = 10000;
            if (v) {
                decimalIdx = v.indexOf('.');
                if (decimalIdx <= 0) {
                    decimalIdx = 10000;
                }
                else {
                    decimalPosition = v.length - decimalIdx;
                }
            }
            return (v.replace(/./g, function (c, i, a) {
                if (c === '.') {
                    return decimal;
                }
                return i && (a.length - i - decimalPosition) % 3 === 0 && i < decimalIdx ? thousands + c : c;
            }) + (currency ? ' ' + currency : ''));
        };
        exports.money = money;
    });
    define("fn/move", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.move = void 0;
        const move = function (arr, fromIndex, toIndex) {
            if (toIndex >= arr.length) {
                let k = toIndex - arr.length;
                while (k-- + 1) {
                    arr.push(undefined);
                }
            }
            arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
            return arr;
        };
        exports.move = move;
    });
    define("fn/multiorder", ["require", "exports", "fn/_compareValues"], function (require, exports, _compareValues_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.multiorder = void 0;
        const multiorder = function (arr, orders) {
            let currentOrders;
            if (!Array.isArray(orders) && typeof orders === 'object') {
                currentOrders = [];
                for (var n in orders) {
                    currentOrders.push({ field: n, dir: orders[n] });
                }
            }
            let r = arr.slice();
            return r.sort((a, b) => {
                let res;
                for (let order of currentOrders) {
                    res = (0, _compareValues_1._compareValues)(a, b, order.field, order.dir);
                    if (res !== 0) {
                        return res;
                    }
                }
                return 0;
            });
        };
        exports.multiorder = multiorder;
    });
    define("fn/nl2br", ["require", "exports", "fn/replaceAll"], function (require, exports, replaceAll_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.nl2br = void 0;
        const nl2br = function (st, keepNl) {
            return (0, replaceAll_5.replaceAll)('\n', '<br>' + (keepNl ? '\n' : ''), st);
        };
        exports.nl2br = nl2br;
    });
    define("fn/objectToFormData", ["require", "exports", "fn/isArray", "fn/each", "fn/isObject", "fn/iterate", "fn/isNull"], function (require, exports, isArray_15, each_20, isObject_16, iterate_8, isNull_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.objectToFormData = void 0;
        const objectToFormData = function (obj, key = '', ignoreList) {
            let formData = new FormData();
            let appendFormData = (data, key = '') => {
                if (!ignoreList || ((0, isArray_15.isArray)(ignoreList) && !ignoreList.includes(key))) {
                    if (data instanceof File) {
                        formData.append(key, data);
                    }
                    else if ((0, isArray_15.isArray)(data)) {
                        (0, each_20.each)(data, (v, i) => {
                            appendFormData(v, key + '[' + i + ']');
                        });
                    }
                    else if ((0, isObject_16.isObject)(data) && Object.keys(data).length) {
                        (0, iterate_8.iterate)(data, (v, i) => {
                            if (i in data) {
                                appendFormData(v, !key ? i : key + '[' + i + ']');
                            }
                        });
                    }
                    else {
                        if (!(0, isNull_3.isNull)(data) && data !== undefined) {
                            formData.append(key, data);
                        }
                    }
                }
            };
            appendFormData(obj, key);
            return formData;
        };
        exports.objectToFormData = objectToFormData;
    });
    define("fn/order", ["require", "exports", "fn/_compareValues"], function (require, exports, _compareValues_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.order = void 0;
        const order = function (arr, prop, dir = 'asc') {
            if (arr) {
                return arr.sort(function (a, b) {
                    return (0, _compareValues_2._compareValues)(a, b, prop, dir);
                });
            }
            return arr;
        };
        exports.order = order;
    });
    define("fn/selector", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.selector = void 0;
        const selector = function (ele) {
            return typeof ele === 'string' ? document.querySelector(ele) : ele;
        };
        exports.selector = selector;
    });
    define("fn/outerHeight", ["require", "exports", "fn/selector"], function (require, exports, selector_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.outerHeight = void 0;
        const outerHeight = function (ele) {
            ele = (0, selector_1.selector)(ele);
            if (ele && ('offsetHeight' in ele)) {
                let styles = window.getComputedStyle(ele);
                let margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
                return Math.ceil(ele.offsetHeight + margin);
            }
        };
        exports.outerHeight = outerHeight;
    });
    define("fn/outerWidth", ["require", "exports", "fn/selector"], function (require, exports, selector_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.outerWidth = void 0;
        const outerWidth = function (ele) {
            ele = (0, selector_2.selector)(ele);
            let styles = window.getComputedStyle(ele);
            let margin = parseFloat(styles['marginLeft']) + parseFloat(styles['marginRight']);
            return Math.ceil(ele.offsetWidth + margin);
        };
        exports.outerWidth = outerWidth;
    });
    define("fn/percent", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.percent = void 0;
        const percent = function (percent, cent) {
            return (cent / 100) * percent;
        };
        exports.percent = percent;
    });
    define("fn/pickValue", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.pickValue = void 0;
        const pickValue = function (arr) {
            if (Array.isArray(arr) && arr.length) {
                return arr[Math.floor(Math.random() * arr.length)];
            }
        };
        exports.pickValue = pickValue;
    });
    define("fn/postOut", ["require", "exports", "fn/createObject", "fn/addInputs"], function (require, exports, createObject_3, addInputs_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.postOut = void 0;
        const postOut = function (url, data, success, target) {
            let form = document.body.querySelector('form#bbn-form_out');
            if (!form) {
                form = document.createElement('form');
                form.classList.add('bbn-no');
                form.setAttribute('id', 'bbn-form_out');
                form.setAttribute('method', 'post');
                form.setAttribute('enctype', 'multipart/form-data-encoded');
                form.style.display = 'none';
                document.body.appendChild(form);
            }
            form.innerHTML = '';
            form.setAttribute('action', url);
            form.setAttribute('target', target || '_blank');
            if (!data) {
                data = {};
            }
            data = (0, createObject_3.createObject)(data);
            if (!data.bbn) {
                data.bbn = 'public';
            }
            (0, addInputs_1.addInputs)(form, data);
            form.submit();
            if (success) {
                success();
            }
        };
        exports.postOut = postOut;
    });
    define("fn/printf", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.printf = void 0;
        const printf = function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined' ? args[number] : match;
            });
        };
        exports.printf = printf;
    });
    define("fn/quotes2html", ["require", "exports", "fn/replaceAll"], function (require, exports, replaceAll_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.quotes2html = void 0;
        const quotes2html = function (st, type) {
            if (!type || type.toLowerCase().indexOf('s') === 0) {
                st = (0, replaceAll_6.replaceAll)("'", '&#39;', st);
            }
            if (!type || type.toLowerCase().indexOf('d') === 0) {
                st = (0, replaceAll_6.replaceAll)('"', '&quot;', st);
            }
            return st;
        };
        exports.quotes2html = quotes2html;
    });
    define("fn/randomInt", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.randomInt = void 0;
        const randomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        exports.randomInt = randomInt;
    });
    define("fn/randomString", ["require", "exports", "fn/randomInt"], function (require, exports, randomInt_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.randomString = void 0;
        const randomString = function (min, max, types) {
            let length;
            let type;
            let chars = {
                n: '0123456789',
                l: 'abcdefghijklmnopqrstuvwxyz',
                u: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            };
            if (!types) {
                types = 'nlu';
            }
            if (!min) {
                length = (0, randomInt_1.randomInt)(8, 14);
            }
            if (typeof max === 'string') {
                types = 'n';
                delete chars.l;
                delete chars.u;
                chars.n = max;
                if (!length) {
                    length = min;
                }
            }
            else if (typeof max === 'number' && min < max) {
                length = (0, randomInt_1.randomInt)(min, max);
            }
            else if (min) {
                length = min;
            }
            let result = '';
            for (let i = 0; i < length; i++) {
                // Not a number for the first char
                if (i === 0) {
                    if (types !== 'n') {
                        type = types.indexOf('u') === -1 ? 'l' : 'u';
                    }
                }
                else {
                    type = types[Math.floor(Math.random() * types.length)];
                }
                result += chars[type][Math.floor(Math.random() * chars[type].length)];
            }
            return result;
        };
        exports.randomString = randomString;
    });
    define("fn/removeEmpty", ["require", "exports", "fn/isArray", "fn/isObject", "fn/numProperties"], function (require, exports, isArray_16, isObject_17, numProperties_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeEmpty = void 0;
        const removeEmpty = function (arr) {
            var tmp = [];
            if ((0, isArray_16.isArray)(arr)) {
                for (let i = 0; i < arr.length; i++) {
                    let ok = false;
                    if (arr[i]) {
                        if ((0, isArray_16.isArray)(arr[i])) {
                            if (arr[i].length) {
                                ok = true;
                            }
                        }
                        else if ((0, isObject_17.isObject)(arr[i])) {
                            if ((0, numProperties_7.numProperties)(arr[i])) {
                                ok = true;
                            }
                        }
                        else {
                            ok = true;
                        }
                    }
                    if (ok) {
                        tmp.push(arr[i]);
                    }
                }
            }
            return tmp;
        };
        exports.removeEmpty = removeEmpty;
    });
    define("fn/removeExtraSpaces", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeExtraSpaces = void 0;
        const removeExtraSpaces = function (str) {
            return str.replace(/\s+/g, ' ').trim();
        };
        exports.removeExtraSpaces = removeExtraSpaces;
    });
    define("fn/removeTrailingChars", ["require", "exports", "fn/substr"], function (require, exports, substr_13) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeTrailingChars = void 0;
        const removeTrailingChars = function (st, char) {
            if (!char) {
                char = ' ';
            }
            if (char.length) {
                while ((0, substr_13.substr)(st, -char.length) === char) {
                    st = (0, substr_13.substr)(st, 0, st.length - char.length);
                }
                while ((0, substr_13.substr)(st, 0, char.length) === char) {
                    st = (0, substr_13.substr)(st, char.length);
                }
            }
            return st;
        };
        exports.removeTrailingChars = removeTrailingChars;
    });
    define("fn/repeat", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.repeat = void 0;
        const repeat = function (st, num) {
            return st.repeat(num);
        };
        exports.repeat = repeat;
    });
    define("fn/replaceSelection", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.replaceSelection = void 0;
        const replaceSelection = function (html, selectInserted) {
            let sel, range, fragment;
            sel = window.getSelection();
            // Test that the Selection object contains at least one Range
            if (sel.getRangeAt && sel.rangeCount) {
                // Get the first Range (only Firefox supports more than one)
                range = window.getSelection().getRangeAt(0);
                range.deleteContents();
                // Create a DocumentFragment to insert and populate it with HTML
                // Need to test for the existence of range.createContextualFragment
                // because it's non-standard and IE 9 does not support it
                if (range.createContextualFragment) {
                    fragment = range.createContextualFragment(html);
                }
                else {
                    // In IE 9 we need to use innerHTML of a temporary element
                    const div = document.createElement('div');
                    let child;
                    div.innerHTML = html;
                    fragment = document.createDocumentFragment();
                    while ((child = div.firstChild)) {
                        fragment.appendChild(child);
                    }
                }
                const firstInsertedNode = fragment.firstChild;
                const lastInsertedNode = fragment.lastChild;
                range.insertNode(fragment);
                sel.removeAllRanges();
                if (selectInserted) {
                    if (firstInsertedNode) {
                        range.setStartBefore(firstInsertedNode);
                        range.setEndAfter(lastInsertedNode);
                    }
                    sel.addRange(range);
                }
                else {
                    range.setStartAfter(lastInsertedNode);
                    sel.addRange(range);
                }
            }
        };
        exports.replaceSelection = replaceSelection;
    });
    define("fn/rgb2hex", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.rgb2hex = void 0;
        const rgb2hex = function (rgb) {
            rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return rgb && rgb.length === 4
                ? '#' +
                    ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
                    ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
                    ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
                : '';
        };
        exports.rgb2hex = rgb2hex;
    });
    define("fn/riterate", ["require", "exports", "fn/iterate"], function (require, exports, iterate_9) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.riterate = void 0;
        const riterate = function (obj, fn, noPrivate) {
            return (0, iterate_9.iterate)(obj, fn, noPrivate, true);
        };
        exports.riterate = riterate;
    });
    define("fn/roundDecimal", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.roundDecimal = void 0;
        const roundDecimal = function (value, decimals) {
            return Math.round(Math.pow(Math.pow(value, decimals), -decimals));
        };
        exports.roundDecimal = roundDecimal;
    });
    define("fn/trim", ["require", "exports", "fn/substr"], function (require, exports, substr_14) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.trim = void 0;
        const trim = function (str, hair = ' ') {
            if (hair === ' ') {
                return str.trim();
            }
            if (!hair) {
                return str;
            }
            if (hair === str) {
                return '';
            }
            while (str.indexOf(hair) === 0) {
                str = (0, substr_14.substr)(str, hair.length);
            }
            while (str.lastIndexOf(hair) === str.length - hair.length) {
                str = (0, substr_14.substr)(str, 0, str.length - hair.length);
            }
            return str;
        };
        exports.trim = trim;
    });
    define("fn/sanitize", ["require", "exports", "fn/removeAccents", "fn/trim"], function (require, exports, removeAccents_3, trim_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.sanitize = void 0;
        const sanitize = function (str, separator = '_') {
            let escaped = ['[', ']', '{', '}', '(', ')', '-', '+', '*', '/'];
            let exp = '[';
            for (let i = 0; i < separator.length; i++) {
                if (escaped.includes(separator[i])) {
                    exp += '\\';
                }
                exp += separator[i];
            }
            exp += ']+';
            let re = new RegExp(exp, 'g');
            let res = (0, removeAccents_3.removeAccents)(str)
                .replace(/[^a-z0-9]/gi, separator)
                .replace(re, separator);
            return (0, trim_1.trim)(res, separator);
        };
        exports.sanitize = sanitize;
    });
    define("fn/selectElementText", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.selectElementText = void 0;
        const selectElementText = function (ele, win) {
            win = win || window;
            if (ele instanceof HTMLInputElement) {
                ele.select();
                return;
            }
            let doc = win.document;
            let sel;
            let range;
            if (win.getSelection && doc.createRange) {
                sel = win.getSelection();
                range = doc.createRange();
                range.selectNodeContents(ele);
                sel.removeAllRanges();
                sel.addRange(range);
            }
            else if (('createTextRange' in doc.body) && (typeof doc.body.createTextRange === 'function')) {
                range = doc.body.createTextRange();
                range.moveToElementText(ele);
                range.select();
            }
        };
        exports.selectElementText = selectElementText;
    });
    define("fn/setCookie", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setCookie = void 0;
        const setCookie = function (name, value, days) {
            let expires = '';
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = '; expires=' + date.toUTCString();
            }
            let st = escape(JSON.stringify({ value: value }));
            document.cookie = name + '=' + st + expires + '; path=/';
        };
        exports.setCookie = setCookie;
    });
    define("fn/setCssVar", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setCssVar = void 0;
        const setCssVar = function (varname, value) {
            if (varname.indexOf('--') !== 0) {
                varname = '--' + varname;
            }
            /** @todo To Fix */
            //document.documentElement.setProperty(varname, value);
        };
        exports.setCssVar = setCssVar;
    });
    define("fn/setProp", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setProp = void 0;
        const setProp = function (obj, prop, value, writable = true, configurable = true) {
            Object.defineProperty(obj, prop, {
                value: value,
                writable: writable,
                configurable: configurable,
            });
        };
        exports.setProp = setProp;
    });
    define("fn/setProperty", ["require", "exports", "fn/each"], function (require, exports, each_21) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setProperty = void 0;
        const setProperty = function (obj, prop, value, force) {
            if (typeof obj === 'object' && typeof prop === 'string') {
                let o = obj;
                const bits = prop.split('.');
                (0, each_21.each)(bits, (v, i) => {
                    if (!o) {
                        if (!force) {
                            throw new Error(bbn._('The object is invalid'));
                        }
                        o = {};
                    }
                    if (bits.length - 1 === i) {
                        o[v] = value;
                    }
                    else {
                        o = o[v];
                    }
                });
            }
        };
        exports.setProperty = setProperty;
    });
    define("fn/shorten", ["require", "exports", "fn/isString", "fn/substr"], function (require, exports, isString_25, substr_15) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.shorten = void 0;
        const shorten = function (st, len, adj) {
            if (typeof st.toLowerCase() === 'string') {
                if (!len) {
                    len = bbn.vars.shortenLen;
                }
                if (adj === undefined || !(0, isString_25.isString)(adj)) {
                    adj = '...';
                }
                if (st.length > len) {
                    st = (0, substr_15.substr)(st, 0, len) + adj;
                }
            }
            return st;
        };
        exports.shorten = shorten;
    });
    define("fn/shortenObj", ["require", "exports", "fn/clone", "fn/each", "fn/isString", "fn/shorten"], function (require, exports, clone_1, each_22, isString_26, shorten_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.shortenObj = void 0;
        const shortenObj = function (obj, max = 100) {
            let o = (0, clone_1.clone)(obj);
            (0, each_22.each)(o, (a, n) => {
                if ((0, isString_26.isString)(a) && a.length > max) {
                    o[n] = (0, shorten_1.shorten)(a, max);
                }
                else if (a && typeof a === 'object') {
                    o[n] = shortenObj(a);
                }
            });
            return o;
        };
        exports.shortenObj = shortenObj;
    });
    define("fn/shuffle", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.shuffle = void 0;
        const shuffle = function (array) {
            let currentIndex = array.length, randomIndex;
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        };
        exports.shuffle = shuffle;
    });
    define("fn/chrono", ["require", "exports", "fn/each"], function (require, exports, each_23) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.stopChrono = exports.startChrono = void 0;
        const _private = [];
        const startChrono = function (name) {
            let now = new Date().getTime();
            let h1 = 3600 * 1000;
            if (_private.length) {
                (0, each_23.each)(_private, (t, n) => {
                    if (now - t > h1) {
                        delete _private[n];
                    }
                });
                now = new Date().getTime();
            }
            _private[name] = now;
        };
        exports.startChrono = startChrono;
        const stopChrono = function (name) {
            if (_private[name]) {
                let now = new Date().getTime();
                let diff = now - _private[name];
                return diff;
            }
        };
        exports.stopChrono = stopChrono;
    });
    define("fn/stat", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.stat = void 0;
        const stat = function (returnStat) {
            return;
            /*
            if (bbn.env.logging) {
                var logs = bbn.vars.loggers;
                for (var i = 0; i < arguments.length; i++) {
                    var a = arguments[i],
                        type = typeof a;
                    if (type === 'boolean' || type === 'undefined') {
                        break;
                    } else {
                        if (type === 'object') {
                            a = getPath(a);
                        } else {
                            a = a.toString();
                        }
                        if (!logs[a]) {
                            logs[a] = {
                                _num: 0,
                            };
                        }
                        logs[a]._num++;
                        logs = logs[a];
                    }
                }
                if (arguments[arguments.length - 1] === true) {
                    var treat = function (obj) {
                        var v = {};
                        for (var n in obj) {
                            if (n.indexOf('_') !== 0) {
                                v[n + '(' + obj[n]._num + ')'] = treat(obj[n]);
                            }
                        }
                        return v;
                    };
                    return treat(logs);
                }
                if (arguments[arguments.length - 1] === false) {
                    for (var n in logs) {
                        delete logs[n];
                    }
                    logs._num = 0;
                    return;
                }
                return returnStat;
            }
            */
        };
        exports.stat = stat;
    });
    define("fn/string2ArrayBuffer", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.string2ArrayBuffer = void 0;
        const string2ArrayBuffer = function (str) {
            var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
            var bufView = new Uint16Array(buf);
            for (var i = 0, strLen = str.length; i < strLen; i++) {
                bufView[i] = str.charCodeAt(i);
            }
            return buf;
        };
        exports.string2ArrayBuffer = string2ArrayBuffer;
    });
    define("fn/sum", ["require", "exports", "fn/each", "fn/filter"], function (require, exports, each_24, filter_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.sum = void 0;
        const sum = function (arr, numberProp, prop, val, operator) {
            let r = 0;
            (0, each_24.each)((0, filter_5.filter)(arr, prop, val, operator), (a) => {
                let tmp = typeof numberProp === 'function' ? numberProp(a) : a[numberProp];
                if (tmp) {
                    r += parseFloat(tmp) || 0;
                }
            });
            return r;
        };
        exports.sum = sum;
    });
    define("fn/timestamp", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.timestamp = void 0;
        const timestamp = function (seconds) {
            var r = new Date().getTime();
            return seconds ? Math.round(r / 1000) : r;
        };
        exports.timestamp = timestamp;
    });
    define("fn/toCSV", ["require", "exports", "fn/each", "fn/isArray", "fn/replaceAll"], function (require, exports, each_25, isArray_17, replaceAll_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.toCSV = void 0;
        const toCSV = function (arr, valSep = ',', rowSep = '', valEsc = '"') {
            if (!valSep) {
                valSep = ',';
            }
            if (!valEsc) {
                valEsc = '"';
            }
            let csvContent = '';
            let total = arr.length;
            (0, each_25.each)(arr, (a, i) => {
                let num = (0, isArray_17.isArray)(a) ? a.length : Object.values(a).length;
                let j = 0;
                (0, each_25.each)(a, (b) => {
                    if (typeof b === 'string') {
                        csvContent += valEsc + (0, replaceAll_7.replaceAll)(valEsc, '\\' + valEsc, b) + valEsc;
                    }
                    else if (b === 0) {
                        csvContent += '0';
                    }
                    else if (!b) {
                        csvContent += valEsc + valEsc;
                    }
                    else {
                        csvContent += b.toString ? b.toString() : valEsc + valEsc;
                    }
                    j++;
                    if (j < num) {
                        csvContent += valSep;
                    }
                });
                if (i < total - 1) {
                    csvContent += rowSep + '\n';
                }
            });
            return csvContent;
        };
        exports.toCSV = toCSV;
    });
    define("fn/toggleFullScreen", ["require", "exports", "fn/resize"], function (require, exports, resize_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.toggleFullScreen = void 0;
        const toggleFullScreen = function () {
            if ('mozRequestFullScreen' in window.document.documentElement) {
                if (window.document['mozFullScreen']) {
                    window.document['mozCancelFullScreen']();
                }
                else if (typeof window.document.documentElement.mozRequestFullScreen === 'function') {
                    window.document.documentElement.mozRequestFullScreen();
                }
            }
            else if ('webkitRequestFullScreen' in window.document.documentElement) {
                if (window.document['webkitIsFullScreen']) {
                    window.document['webkitCancelFullScreen']();
                }
                else if (typeof window.document.documentElement.webkitRequestFullScreen === 'function') {
                    window.document.documentElement.webkitRequestFullScreen();
                }
            }
            else if ('msRequestFullScreen' in window.document.documentElement) {
                if (window.document['msFullscreenEnabled']) {
                    window.document['msExitFullscreen']();
                }
                else if (typeof window.document.documentElement.msRequestFullScreen === 'function') {
                    window.document.documentElement.msRequestFullScreen();
                }
            }
            else if ('requestFullscreen' in window.document) {
                if (window.document.fullscreenEnabled) {
                    window.document.exitFullscreen();
                }
                else {
                    window.document.documentElement.requestFullscreen();
                }
            }
            setTimeout(function () {
                (0, resize_2.resize)();
            }, 0);
        };
        exports.toggleFullScreen = toggleFullScreen;
    });
    define("fn/translate", ["require", "exports", "fn/iterate"], function (require, exports, iterate_10) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.translate = void 0;
        const translate = function (o, namespace) {
            let lng = namespace ? bbn.lng[namespace.indexOf('_') === 0 ? namespace : '_' + namespace] : bbn.lng;
            (0, iterate_10.iterate)(o, (v, k) => {
                lng[k] = v;
            });
        };
        exports.translate = translate;
    });
    define("fn/uniqString", ["require", "exports", "fn/isArray", "fn/each", "fn/md5"], function (require, exports, isArray_18, each_26, md5_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.uniqString = void 0;
        const uniqString = function (...args) {
            var st = '';
            for (var i = 0; i < args.length; i++) {
                if (!args[i]) {
                    st += '__bbn_empty__';
                }
                else if (typeof args[i] === 'object') {
                    if ((0, isArray_18.isArray)(args[i])) {
                        st += JSON.stringify(args[i]);
                    }
                    else {
                        // An object with the same properties, even in different order, should produce the same answer
                        let tmp = {};
                        let ks = Object.keys(args[i]).sort();
                        (0, each_26.each)(ks, (k) => {
                            tmp[k] = args[i][k];
                        });
                        st += JSON.stringify(tmp);
                    }
                }
                else if (typeof args[i] !== 'string') {
                    st += args[i].toString();
                }
                else {
                    st += args[i];
                }
            }
            return (0, md5_3.md5)(st);
        };
        exports.uniqString = uniqString;
    });
    define("fn/upload", ["require", "exports", "fn/objectToFormData", "fn/log"], function (require, exports, objectToFormData_1, log_18) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.upload = void 0;
        const upload = function (url, file, success, failure, progress) {
            let fn = () => {
                return axios.post(url || bbn.env.path, (0, objectToFormData_1.objectToFormData)(file), {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress(progressEvent) {
                        if (progress) {
                            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                            progress(percentCompleted, progressEvent.loaded, progressEvent.total);
                        }
                    },
                });
            };
            if (!success && !failure) {
                return fn();
            }
            else {
                return fn()
                    .then((res) => {
                    if (success) {
                        (0, log_18.log)('SUCCESS', res);
                        success(res);
                    }
                })
                    .catch((err) => {
                    if (failure) {
                        (0, log_18.log)('ERROR', err);
                        failure(err);
                    }
                });
            }
        };
        exports.upload = upload;
    });
    define("fn", ["require", "exports", "fn/_addLoader", "fn/_compareValues", "fn/_deleteLoader", "fn/abort", "fn/abortURL", "fn/addColors", "fn/addInputs", "fn/addStyle", "fn/adjustHeight", "fn/adjustSize", "fn/adjustWidth", "fn/ajax", "fn/analyzeFunction", "fn/animateCss", "fn/arrayBuffer2String", "fn/arrayFromProp", "fn/autoExtend", "fn/baseName", "fn/br2nl", "fn/calendar", "fn/callback", "fn/camelize", "fn/camelToCss", "fn/canvasToImage", "fn/center", "fn/checkProps", "fn/checkPropsDetails", "fn/checkPropsOrDie", "fn/checkType", "fn/circularReplacer", "fn/clone", "fn/colorToHex", "fn/compare", "fn/compareConditions", "fn/copy", "fn/correctCase", "fn/count", "fn/crc32", "fn/createObject", "fn/cssExists", "fn/date", "fn/dateSQL", "fn/daysInMonth", "fn/deepPath", "fn/defaultAjaxAbortFunction", "fn/defaultAjaxErrorFunction", "fn/defaultAlertFunction", "fn/defaultConfirmFunction", "fn/defaultEndLoadingFunction", "fn/defaultErrorFunction", "fn/defaultHistoryFunction", "fn/defaultLinkFunction", "fn/defaultPostLinkFunction", "fn/defaultPreLinkFunction", "fn/defaultResizeFunction", "fn/defaultStartLoadingFunction", "fn/deleteProp", "fn/diffObj", "fn/dirName", "fn/download", "fn/downloadContent", "fn/each", "fn/eraseCookie", "fn/error", "fn/escapeDquotes", "fn/escapeRegExp", "fn/escapeSquotes", "fn/escapeTicks", "fn/escapeUrl", "fn/extend", "fn/extendOut", "fn/fdate", "fn/fdatetime", "fn/fieldValue", "fn/fileExt", "fn/filter", "fn/filterToConditions", "fn/findAll", "fn/fori", "fn/forir", "fn/format", "fn/formatBytes", "fn/formatDate", "fn/formatSize", "fn/formdata", "fn/fromXml", "fn/ftime", "fn/getAllTags", "fn/getAncestors", "fn/getAttributes", "fn/getBrowserName", "fn/getBrowserVersion", "fn/getCookie", "fn/getCssVar", "fn/getDay", "fn/getDeviceType", "fn/getEventData", "fn/getField", "fn/getFieldValues", "fn/getHtml", "fn/getHTMLOfSelection", "fn/getLoader", "fn/getPath", "fn/getProp", "fn/getProperty", "fn/getRequestId", "fn/getRow", "fn/getScrollBarSize", "fn/getText", "fn/getTimeoff", "fn/happy", "fn/hash", "fn/hex2rgb", "fn/history", "fn/html2text", "fn/imageToCanvas", "fn/imgToBase64", "fn/info", "fn/init", "fn/isActiveInterface", "fn/isArray", "fn/isBlob", "fn/isBoolean", "fn/isCanvas", "fn/isColor", "fn/isComment", "fn/isCp", "fn/isDate", "fn/isDesktopDevice", "fn/isDimension", "fn/isDom", "fn/isEmail", "fn/isEmpty", "fn/isEvent", "fn/isFocused", "fn/isFunction", "fn/isHostname", "fn/isInside", "fn/isInt", "fn/isIP", "fn/isIterable", "fn/isMobile", "fn/isMobileDevice", "fn/isNull", "fn/isNumber", "fn/isObject", "fn/isPercent", "fn/isPrimitive", "fn/isPromise", "fn/isPropSize", "fn/isSame", "fn/isSQLDate", "fn/isString", "fn/isSymbol", "fn/isTabletDevice", "fn/isURL", "fn/isValidDimension", "fn/isValidName", "fn/isValue", "fn/isVue", "fn/iterate", "fn/lightenDarkenHex", "fn/link", "fn/log", "fn/makeReactive", "fn/map", "fn/md5", "fn/money", "fn/move", "fn/multiorder", "fn/nl2br", "fn/numProperties", "fn/objectToFormData", "fn/order", "fn/outerHeight", "fn/outerWidth", "fn/percent", "fn/pickValue", "fn/post", "fn/postOut", "fn/printf", "fn/quotes2html", "fn/randomInt", "fn/randomString", "fn/removeAccents", "fn/removeEmpty", "fn/removeExtraSpaces", "fn/removeHtmlComments", "fn/removePrivateProp", "fn/removeTrailingChars", "fn/repeat", "fn/replaceAll", "fn/replaceSelection", "fn/resize", "fn/rgb2hex", "fn/riterate", "fn/roundDecimal", "fn/sanitize", "fn/search", "fn/selectElementText", "fn/selector", "fn/setCookie", "fn/setCssVar", "fn/setNavigationVars", "fn/setProp", "fn/setProperty", "fn/shorten", "fn/shortenObj", "fn/shuffle", "fn/simpleHash", "fn/simpleHash1", "fn/simpleHash2", "fn/chrono", "fn/stat", "fn/string2ArrayBuffer", "fn/submit", "fn/substr", "fn/sum", "fn/timestamp", "fn/toCSV", "fn/toggleFullScreen", "fn/translate", "fn/treatAjaxArguments", "fn/trim", "fn/uniqString", "fn/unique", "fn/upload", "fn/warning"], function (require, exports, _addLoader_2, _compareValues_3, _deleteLoader_2, abort_1, abortURL_1, addColors_2, addInputs_2, addStyle_1, adjustHeight_1, adjustSize_3, adjustWidth_1, ajax_4, analyzeFunction_1, animateCss_1, arrayBuffer2String_1, arrayFromProp_1, autoExtend_1, baseName_3, br2nl_1, calendar_1, callback_3, camelize_1, camelToCss_1, canvasToImage_1, center_1, checkProps_1, checkPropsDetails_3, checkPropsOrDie_1, checkType_6, circularReplacer_2, clone_2, colorToHex_1, compare_2, compareConditions_3, copy_1, correctCase_2, count_1, crc32_1, createObject_4, cssExists_1, date_8, dateSQL_1, daysInMonth_1, deepPath_1, defaultAjaxAbortFunction_2, defaultAjaxErrorFunction_3, defaultAlertFunction_2, defaultConfirmFunction_1, defaultEndLoadingFunction_2, defaultErrorFunction_2, defaultHistoryFunction_2, defaultLinkFunction_2, defaultPostLinkFunction_2, defaultPreLinkFunction_2, defaultResizeFunction_2, defaultStartLoadingFunction_2, deleteProp_1, diffObj_1, dirName_2, download_1, downloadContent_2, each_27, eraseCookie_1, error_4, escapeDquotes_1, escapeRegExp_3, escapeSquotes_1, escapeTicks_1, escapeUrl_1, extend_7, extendOut_1, fdate_2, fdatetime_2, fieldValue_2, fileExt_2, filter_6, filterToConditions_3, findAll_1, fori_1, forir_1, format_1, formatBytes_1, formatDate_1, formatSize_1, formdata_2, fromXml_1, ftime_1, getAllTags_1, getAncestors_2, getAttributes_1, getBrowserName_1, getBrowserVersion_1, getCookie_1, getCssVar_2, getDay_1, getDeviceType_4, getEventData_1, getField_1, getFieldValues_1, getHtml_1, getHTMLOfSelection_2, getLoader_4, getPath_1, getProp_1, getProperty_4, getRequestId_2, getRow_3, getScrollBarSize_1, getText_1, getTimeoff_1, happy_1, hash_2, hex2rgb_1, history_1, html2text_2, imageToCanvas_2, imgToBase64_1, info_1, init_1, isActiveInterface_1, isArray_19, isBlob_2, isBoolean_1, isCanvas_2, isColor_1, isComment_1, isCp_3, isDate_8, isDesktopDevice_1, isDimension_1, isDom_5, isEmail_1, isEmpty_2, isEvent_1, isFocused_1, isFunction_11, isHostname_1, isInside_1, isInt_2, isIP_2, isIterable_5, isMobile_2, isMobileDevice_2, isNull_4, isNumber_10, isObject_18, isPercent_1, isPrimitive_1, isPromise_1, isPropSize_1, isSame_3, isSQLDate_1, isString_27, isSymbol_2, isTabletDevice_3, isURL_1, isValidDimension_2, isValidName_1, isValue_2, isVue_1, iterate_11, lightenDarkenHex_1, link_2, log_19, makeReactive_1, map_1, md5_4, money_1, move_1, multiorder_1, nl2br_1, numProperties_8, objectToFormData_2, order_1, outerHeight_1, outerWidth_1, percent_1, pickValue_1, post_2, postOut_1, printf_1, quotes2html_1, randomInt_2, randomString_1, removeAccents_4, removeEmpty_1, removeExtraSpaces_1, removeHtmlComments_2, removePrivateProp_2, removeTrailingChars_1, repeat_1, replaceAll_8, replaceSelection_1, resize_3, rgb2hex_1, riterate_1, roundDecimal_1, sanitize_1, search_6, selectElementText_1, selector_3, setCookie_1, setCssVar_1, setNavigationVars_2, setProp_1, setProperty_1, shorten_2, shortenObj_1, shuffle_1, simpleHash_2, simpleHash1_2, simpleHash2_2, chrono_1, stat_1, string2ArrayBuffer_1, submit_2, substr_16, sum_1, timestamp_1, toCSV_1, toggleFullScreen_1, translate_1, treatAjaxArguments_3, trim_2, uniqString_1, unique_2, upload_1, warning_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fn = void 0;
        const fn = {
            _addLoader: _addLoader_2._addLoader,
            _compareValues: _compareValues_3._compareValues,
            _deleteLoader: _deleteLoader_2._deleteLoader,
            abort: abort_1.abort,
            abortURL: abortURL_1.abortURL,
            addColors: addColors_2.addColors,
            addInputs: addInputs_2.addInputs,
            addStyle: addStyle_1.addStyle,
            adjustHeight: adjustHeight_1.adjustHeight,
            adjustSize: adjustSize_3.adjustSize,
            adjustWidth: adjustWidth_1.adjustWidth,
            ajax: ajax_4.ajax,
            analyzeFunction: analyzeFunction_1.analyzeFunction,
            animateCss: animateCss_1.animateCss,
            arrayBuffer2String: arrayBuffer2String_1.arrayBuffer2String,
            arrayFromProp: arrayFromProp_1.arrayFromProp,
            autoExtend: autoExtend_1.autoExtend,
            baseName: baseName_3.baseName,
            br2nl: br2nl_1.br2nl,
            calendar: calendar_1.calendar,
            callback: callback_3.callback,
            camelize: camelize_1.camelize,
            camelToCss: camelToCss_1.camelToCss,
            canvasToImage: canvasToImage_1.canvasToImage,
            center: center_1.center,
            checkProps: checkProps_1.checkProps,
            checkPropsDetails: checkPropsDetails_3.checkPropsDetails,
            checkPropsOrDie: checkPropsOrDie_1.checkPropsOrDie,
            checkType: checkType_6.checkType,
            circularReplacer: circularReplacer_2.circularReplacer,
            clone: clone_2.clone,
            colorToHex: colorToHex_1.colorToHex,
            compare: compare_2.compare,
            compareConditions: compareConditions_3.compareConditions,
            copy: copy_1.copy,
            correctCase: correctCase_2.correctCase,
            count: count_1.count,
            crc32: crc32_1.crc32,
            createObject: createObject_4.createObject,
            cssExists: cssExists_1.cssExists,
            date: date_8.date,
            dateSQL: dateSQL_1.dateSQL,
            daysInMonth: daysInMonth_1.daysInMonth,
            deepPath: deepPath_1.deepPath,
            defaultAjaxAbortFunction: defaultAjaxAbortFunction_2.defaultAjaxAbortFunction,
            defaultAjaxErrorFunction: defaultAjaxErrorFunction_3.defaultAjaxErrorFunction,
            defaultAlertFunction: defaultAlertFunction_2.defaultAlertFunction,
            defaultConfirmFunction: defaultConfirmFunction_1.defaultConfirmFunction,
            defaultEndLoadingFunction: defaultEndLoadingFunction_2.defaultEndLoadingFunction,
            defaultErrorFunction: defaultErrorFunction_2.defaultErrorFunction,
            defaultHistoryFunction: defaultHistoryFunction_2.defaultHistoryFunction,
            defaultLinkFunction: defaultLinkFunction_2.defaultLinkFunction,
            defaultPostLinkFunction: defaultPostLinkFunction_2.defaultPostLinkFunction,
            defaultPreLinkFunction: defaultPreLinkFunction_2.defaultPreLinkFunction,
            defaultResizeFunction: defaultResizeFunction_2.defaultResizeFunction,
            defaultStartLoadingFunction: defaultStartLoadingFunction_2.defaultStartLoadingFunction,
            deleteProp: deleteProp_1.deleteProp,
            diffObj: diffObj_1.diffObj,
            dirName: dirName_2.dirName,
            download: download_1.download,
            downloadContent: downloadContent_2.downloadContent,
            each: each_27.each,
            eraseCookie: eraseCookie_1.eraseCookie,
            error: error_4.error,
            escapeDquotes: escapeDquotes_1.escapeDquotes,
            escapeRegExp: escapeRegExp_3.escapeRegExp,
            escapeSquotes: escapeSquotes_1.escapeSquotes,
            escapeTicks: escapeTicks_1.escapeTicks,
            escapeUrl: escapeUrl_1.escapeUrl,
            extend: extend_7.extend,
            extendOut: extendOut_1.extendOut,
            fdate: fdate_2.fdate,
            fdatetime: fdatetime_2.fdatetime,
            fieldValue: fieldValue_2.fieldValue,
            fileExt: fileExt_2.fileExt,
            filter: filter_6.filter,
            filterToConditions: filterToConditions_3.filterToConditions,
            findAll: findAll_1.findAll,
            fori: fori_1.fori,
            forir: forir_1.forir,
            format: format_1.format,
            formatBytes: formatBytes_1.formatBytes,
            formatDate: formatDate_1.formatDate,
            formatSize: formatSize_1.formatSize,
            formdata: formdata_2.formdata,
            fromXml: fromXml_1.fromXml,
            ftime: ftime_1.ftime,
            getAllTags: getAllTags_1.getAllTags,
            getAncestors: getAncestors_2.getAncestors,
            getAttributes: getAttributes_1.getAttributes,
            getBrowserName: getBrowserName_1.getBrowserName,
            getBrowserVersion: getBrowserVersion_1.getBrowserVersion,
            getCookie: getCookie_1.getCookie,
            getCssVar: getCssVar_2.getCssVar,
            getDay: getDay_1.getDay,
            getDeviceType: getDeviceType_4.getDeviceType,
            getEventData: getEventData_1.getEventData,
            getField: getField_1.getField,
            getFieldValues: getFieldValues_1.getFieldValues,
            getHtml: getHtml_1.getHtml,
            getHTMLOfSelection: getHTMLOfSelection_2.getHTMLOfSelection,
            getLoader: getLoader_4.getLoader,
            getPath: getPath_1.getPath,
            getProp: getProp_1.getProp,
            getProperty: getProperty_4.getProperty,
            getRequestId: getRequestId_2.getRequestId,
            getRow: getRow_3.getRow,
            getScrollBarSize: getScrollBarSize_1.getScrollBarSize,
            getText: getText_1.getText,
            getTimeoff: getTimeoff_1.getTimeoff,
            happy: happy_1.happy,
            hash: hash_2.hash,
            hex2rgb: hex2rgb_1.hex2rgb,
            history: history_1.history,
            html2text: html2text_2.html2text,
            imageToCanvas: imageToCanvas_2.imageToCanvas,
            imgToBase64: imgToBase64_1.imgToBase64,
            info: info_1.info,
            init: init_1.init,
            isActiveInterface: isActiveInterface_1.isActiveInterface,
            isArray: isArray_19.isArray,
            isBlob: isBlob_2.isBlob,
            isBoolean: isBoolean_1.isBoolean,
            isCanvas: isCanvas_2.isCanvas,
            isColor: isColor_1.isColor,
            isComment: isComment_1.isComment,
            isCp: isCp_3.isCp,
            isDate: isDate_8.isDate,
            isDesktopDevice: isDesktopDevice_1.isDesktopDevice,
            isDimension: isDimension_1.isDimension,
            isDom: isDom_5.isDom,
            isEmail: isEmail_1.isEmail,
            isEmpty: isEmpty_2.isEmpty,
            isEvent: isEvent_1.isEvent,
            isFocused: isFocused_1.isFocused,
            isFunction: isFunction_11.isFunction,
            isHostname: isHostname_1.isHostname,
            isInside: isInside_1.isInside,
            isInt: isInt_2.isInt,
            isIP: isIP_2.isIP,
            isIterable: isIterable_5.isIterable,
            isMobile: isMobile_2.isMobile,
            isMobileDevice: isMobileDevice_2.isMobileDevice,
            isNull: isNull_4.isNull,
            isNumber: isNumber_10.isNumber,
            isObject: isObject_18.isObject,
            isPercent: isPercent_1.isPercent,
            isPrimitive: isPrimitive_1.isPrimitive,
            isPromise: isPromise_1.isPromise,
            isPropSize: isPropSize_1.isPropSize,
            isSame: isSame_3.isSame,
            isSQLDate: isSQLDate_1.isSQLDate,
            isString: isString_27.isString,
            isSymbol: isSymbol_2.isSymbol,
            isTabletDevice: isTabletDevice_3.isTabletDevice,
            isURL: isURL_1.isURL,
            isValidDimension: isValidDimension_2.isValidDimension,
            isValidName: isValidName_1.isValidName,
            isValue: isValue_2.isValue,
            isVue: isVue_1.isVue,
            iterate: iterate_11.iterate,
            lightenDarkenHex: lightenDarkenHex_1.lightenDarkenHex,
            link: link_2.link,
            log: log_19.log,
            makeReactive: makeReactive_1.makeReactive,
            map: map_1.map,
            md5: md5_4.md5,
            money: money_1.money,
            move: move_1.move,
            multiorder: multiorder_1.multiorder,
            nl2br: nl2br_1.nl2br,
            numProperties: numProperties_8.numProperties,
            objectToFormData: objectToFormData_2.objectToFormData,
            order: order_1.order,
            outerHeight: outerHeight_1.outerHeight,
            outerWidth: outerWidth_1.outerWidth,
            percent: percent_1.percent,
            pickValue: pickValue_1.pickValue,
            post: post_2.post,
            postOut: postOut_1.postOut,
            printf: printf_1.printf,
            quotes2html: quotes2html_1.quotes2html,
            randomInt: randomInt_2.randomInt,
            randomString: randomString_1.randomString,
            removeAccents: removeAccents_4.removeAccents,
            removeEmpty: removeEmpty_1.removeEmpty,
            removeExtraSpaces: removeExtraSpaces_1.removeExtraSpaces,
            removeHtmlComments: removeHtmlComments_2.removeHtmlComments,
            removePrivateProp: removePrivateProp_2.removePrivateProp,
            removeTrailingChars: removeTrailingChars_1.removeTrailingChars,
            repeat: repeat_1.repeat,
            replaceAll: replaceAll_8.replaceAll,
            replaceSelection: replaceSelection_1.replaceSelection,
            resize: resize_3.resize,
            rgb2hex: rgb2hex_1.rgb2hex,
            riterate: riterate_1.riterate,
            roundDecimal: roundDecimal_1.roundDecimal,
            sanitize: sanitize_1.sanitize,
            search: search_6.search,
            selectElementText: selectElementText_1.selectElementText,
            selector: selector_3.selector,
            setCookie: setCookie_1.setCookie,
            setCssVar: setCssVar_1.setCssVar,
            setNavigationVars: setNavigationVars_2.setNavigationVars,
            setProp: setProp_1.setProp,
            setProperty: setProperty_1.setProperty,
            shorten: shorten_2.shorten,
            shortenObj: shortenObj_1.shortenObj,
            shuffle: shuffle_1.shuffle,
            simpleHash: simpleHash_2.simpleHash,
            simpleHash1: simpleHash1_2.simpleHash1,
            simpleHash2: simpleHash2_2.simpleHash2,
            startChrono: chrono_1.startChrono,
            stat: stat_1.stat,
            stopChrono: chrono_1.stopChrono,
            string2ArrayBuffer: string2ArrayBuffer_1.string2ArrayBuffer,
            submit: submit_2.submit,
            substr: substr_16.substr,
            sum: sum_1.sum,
            timestamp: timestamp_1.timestamp,
            toCSV: toCSV_1.toCSV,
            toggleFullScreen: toggleFullScreen_1.toggleFullScreen,
            translate: translate_1.translate,
            treatAjaxArguments: treatAjaxArguments_3.treatAjaxArguments,
            trim: trim_2.trim,
            uniqString: uniqString_1.uniqString,
            unique: unique_2.unique,
            upload: upload_1.upload,
            warning: warning_2.warning,
        };
        exports.fn = fn;
    });
    define("index", ["require", "exports", "_", "$", "lng", "vars", "env", "fn"], function (require, exports, _1, _2, lng_1, vars_1, env_1, fn_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.bbn = void 0;
        const bbn = {
            version: "1.0.1",
            opt: {
                _cat: {}
            },
            app: {},
            _: _1._,
            $: _2.$,
            lng: lng_1.lng,
            vars: vars_1.vars,
            env: env_1.env,
            fn: fn_1.fn
        };
        exports.bbn = bbn;
        window.bbn = bbn;
    });
    
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            const dependencies = ['exports'];
            const factory = (exports) => {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies, factory };
        }
    }
    const instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        const define = get_define(name);
        if (typeof define.factory !== 'function') {
            return define.factory;
        }
        instances[name] = {};
        const dependencies = define.dependencies.map(name => resolve(name));
        define.factory(...dependencies);
        const exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports.default : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();