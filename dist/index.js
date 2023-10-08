(function () {
    var defines = {};
    var entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies: dependencies, factory: factory };
        entry[0] = name;
    }
    define("require", ["exports"], function (exports) {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: function (name) { return resolve(name); } });
    });
    var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    define("fn/type/isArray", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isArray = void 0;
        /**
         * Returns true if the given argument is array.
         * @method   isArray
         * @global
         * @example
         * ```javascript
         * bbn.fn.isArray([5,2,6]);
         * //true
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isArray = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var a = args_1[_a];
                if (!Array.isArray(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isArray = isArray;
    });
    define("fn/type/isNumber", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isNumber = void 0;
        /**
         * Returns true if the given argument is a number
         * @method   isNumber
         * @global
         * @example
         * ```javascript
         * bbn.fn.isNumber(5);
         * //true
         * ```
         * @example
         * ```javascript
         * bbn.fn.isNumber(0.5);
         * //true
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isNumber = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_2 = args; _a < args_2.length; _a++) {
                var a = args_2[_a];
                if (["boolean", "object", "symbol"].includes(typeof a) ||
                    a === "" ||
                    isNaN(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isNumber = isNumber;
    });
    define("fn/type/isIterable", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isIterable = void 0;
        /**
         * Returns true if the given object can be iterated as an array (numerically).
         *
         * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
         *
         * @method   isIterable
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * bbn.fn.isIterable([1, 2])
         * // true
         * bbn.fn.isIterable({a: 1, b: 2})
         * // false
         * bbn.fn.isIterable(25)
         * // false
         * bbn.fn.isIterable(document.body.querySelectorAll('.container > div'))
         * // true
         * ```
         *
         * @param    {String} st
         *
         * @returns  {Boolean}
         */
        var isIterable = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length) {
                return false;
            }
            for (var _a = 0, args_3 = args; _a < args_3.length; _a++) {
                var a = args_3[_a];
                if (!a ||
                    (typeof a !== "object") ||
                    !(Symbol.iterator in Object(a))) {
                    return false;
                }
            }
            return true;
        };
        exports.isIterable = isIterable;
    });
    define("fn/type/isString", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isString = void 0;
        /**
         * Returns true if the given argument is a string;
         * @method   isString
         * @global
         * @example
         * ```javascript
         * bbn.fn.isString('bbn');
         * //true
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_4 = args; _a < args_4.length; _a++) {
                var a = args_4[_a];
                if ({}.toString.apply(a) !== "[object String]") {
                    return false;
                }
            }
            return true;
        };
        exports.isString = isString;
    });
    define("fn/type/isInt", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isInt = void 0;
        /**
         * Returns true if the given argument is an integer
         * @method   isInt
         * @global
         * @example
         * ```javascript
         * bbn.fn.isInt(5);
         * // true
         * bbn.fn.isInt(0.5);
         * // false
         * bbn.fn.isInt("hello");
         * // false
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isInt = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_5 = args; _a < args_5.length; _a++) {
                var a = args_5[_a];
                if (!Number.isInteger(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isInt = isInt;
    });
    define("fn/type/isFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isFunction = void 0;
        /**
         * Returns true if the given argument is a function.
         * @global
         * @example
         * ```javascript
         * bbn.fn.isFunction(() => {
         *  alert('Hello world');
         * });
         * //true
         * ```
         * @method   isFunction
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_6 = args; _a < args_6.length; _a++) {
                var obj = args_6[_a];
                if (!(obj && obj.constructor && obj.call && obj.apply)) {
                    return false;
                }
            }
            return true;
        };
        exports.isFunction = isFunction;
    });
    define("fn/browser/log", ["require", "exports", "fn/type/isFunction"], function (require, exports, isFunction_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.log = void 0;
        /**
         * Logs the given arguments in the browser's console.
         * @method   log
         * @global
         * @example
         * ```javascript
         * //'hello'
         * bbn.fn.log('hello');
         * ```
         * @memberof bbn.fn
         * @param    {...any} args
         * @returns
         */
        var log = function () {
            var _a, _b;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (window.console !== undefined) {
                var cfg = void 0;
                var level = 5;
                var fn = 'log';
                if (args[0] && typeof args[0] === 'object' && args[0]._bbn_console_style) {
                    if (args[0]._bbn_console_mode && (0, isFunction_js_1.isFunction)(console[args[0]._bbn_console_mode])) {
                        fn = args[0]._bbn_console_mode;
                    }
                    else {
                        cfg = args[0]._bbn_console_style;
                        level = args[0]._bbn_console_level;
                    }
                    args.shift();
                }
                var exec = window.console[fn];
                if (((_b = (_a = window['bbn']) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.loggingLevel) >= level) {
                    var i = 0;
                    while (i < args.length) {
                        var t = typeof args[i];
                        var consoleArguments = [args[i]];
                        if (t === 'string' || t === 'number') {
                            consoleArguments.unshift('%c %s ', cfg);
                        }
                        exec.apply(window.console, consoleArguments);
                        i++;
                    }
                }
            }
            return this;
        };
        exports.log = log;
    });
    define("fn/string/substr", ["require", "exports", "fn/type/isString", "fn/type/isInt", "fn/browser/log"], function (require, exports, isString_js_1, isInt_js_1, log_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.substr = void 0;
        /**
         * Basic substring function accepting both positive and negative values.
         *
         * @method   substr
         * @global
         *
         * @example
         * ```javascript
         * bbn.fn.substr(bbn.fn, 'Hello', -3, -1);
         * // "ll"
         * bbn.fn.substr(bbn.fn, 'Hello', -3);
         * // "llo"
         * bbn.fn.substr(bbn.fn, 'Hello', 0, 1);
         * // "H"
         * ```
         * @memberof bbn.fn
         * @param    {String} str
         * @param    {Number} from
         * @param    {Number} length
         * @returns  {String} Result substring
         */
        var substr = function (str, from, length) {
            if (!(0, isString_js_1.isString)(str) || !(0, isInt_js_1.isInt)(from)) {
                (0, log_js_1.log)(arguments);
                throw new Error(bbn._("The substr function should be applied to a string and at least a `from` argument should be given"));
            }
            if (from < 0) {
                from = str.length + from;
            }
            if (!(0, isInt_js_1.isInt)(length)) {
                return str.substring(from);
            }
            return str.substring(from, (length < 0 ? str.length : from) + length);
        };
        exports.substr = substr;
    });
    define("fn/object/removePrivateProp", ["require", "exports", "fn/string/substr"], function (require, exports, substr_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removePrivateProp = void 0;
        /**
          * Returns an object with the original objects' properties starting with an alphanumeric character.
          *
          * It is presumed that external libraries, bbn variables use prefixes such as _ or $ for
          * naming private properties; this returns a new object purged from these properties.
          *
          * @method   removePrivateProp
          * @global
          * @example
          * ```javascript
          * bbn.fn.removePrivateProp({
          *   _bbn_timestamp: 1587269593987,
          *   name: "Wonka",
          *   fname: "Willy"
          * });
          * // {name: "Wonka", fname: "Willy"}
          * ```
          * @memberof bbn.fn
          * @param    {Object}  obj  The original object
          * @param    {Boolean} deep If true the function will be reapplied on object properties
          * @returns  {Object}  A new object without only the _public_ properties.
          */
        var removePrivateProp = function (obj, deep) {
            if (deep === void 0) { deep = false; }
            var r = null;
            if (typeof obj === 'object') {
                r = {};
                for (var n in obj) {
                    if ((0, substr_js_1.substr)(n, 0, 1).match(/^[A-z0-9]$/) && (n in obj)) {
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
    define("fn/loop/iterate", ["require", "exports", "fn/object/removePrivateProp"], function (require, exports, removePrivateProp_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.iterate = void 0;
        /**
         * Executes the provided function on each property of the given object.
         *
         * @method   iterate
         * @global
         * @example
         * ```javascript
         * //["value1", 2]
         * let arr = [];
         * bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
         *   arr.push(value);
         * });
         * ```
         * @memberof bbn.fn
         * @param    {(Object|Number)} obj       The object to loop on
         * @param    {Function}        fn        The function, gets the array's element and the index as arguments
         * @param    {Boolean}         noPrivate If set to true the _private_ properties won't be included
         * @param    {Boolean}         reverse   If set to true the order of the keys will be reversed
         * @returns  {Object}
         */
        var iterate = function (obj, fn, noPrivate, reverse) {
            if (noPrivate === void 0) { noPrivate = false; }
            if (reverse === void 0) { reverse = false; }
            if (obj !== null && typeof obj === "object") {
                var iter = Object.keys(noPrivate ? (0, removePrivateProp_js_1.removePrivateProp)(obj) : obj);
                if (reverse) {
                    iter.reverse();
                }
                for (var _i = 0, iter_1 = iter; _i < iter_1.length; _i++) {
                    var prop = iter_1[_i];
                    if (fn(obj[prop], prop) === false) {
                        break;
                    }
                }
            }
            return obj;
        };
        exports.iterate = iterate;
    });
    define("fn/loop/each", ["require", "exports", "fn/type/isNumber", "fn/type/isIterable", "fn/loop/iterate"], function (require, exports, isNumber_js_1, isIterable_js_1, iterate_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.each = void 0;
        /**
         * Executes the provided function on each element of the given array.
         *
         * Returning false will stop the loop.
         *
         * @method   each
         * @global
         * @example
         * ```javascript
         * let res = 0;
         * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
         *   res += d;
         * });
         * // res = 27
         * ```
         * @example
         * ```javascript
         * let res = 0;
         * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
         *   if (res >= 20) {
         *     return false;
         *   }
         *   res += d;
         * });
         * // res = 24
         * ```
         * @memberof bbn.fn
         * @param    {*}     arr The array to loop on
         * @param    {Function}  fn  The function, gets the array's element and the index as arguments
         * @returns  {[Array, Object, void]}
         */
        var each = function (arr, fn) {
            if ((0, isNumber_js_1.isNumber)(arr) && arr > 0) {
                for (var i = 0; i < arr; i++) {
                    if (fn(i, i) === false) {
                        return;
                    }
                }
                return;
            }
            if ((0, isIterable_js_1.isIterable)(arr)) {
                for (var i = 0; i < arr.length; i++) {
                    if (fn(arr[i], i) === false) {
                        return;
                    }
                }
                return arr;
            }
            return (0, iterate_js_1.iterate)(arr, fn);
        };
        exports.each = each;
    });
    define("fn/string/correctCase", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.correctCase = void 0;
        /**
         * Converts the first character of the string to uppercase.
         *
         * @method   correctCase
         * @global
         *
         * @example
         * ```javascript
         * //"This is a test"
         * bbn.fn.correctCase("this is a test");
         * ```
         *
         * @memberof bbn.fn
         * @param    {STring} str
         * @returns  {String}
         */
        var correctCase = function (str) {
            return str.replace(/[A-z]{1}/, function (c) { return c.toUpperCase(); });
        };
        exports.correctCase = correctCase;
    });
    define("fn/browser/error", ["require", "exports", "fn/browser/log"], function (require, exports, log_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.error = void 0;
        /**
         * Throws an error.
         * @method   error
         * @global
         * @ignore
         * ``` javascript
         * bbn.fn.error('I log this error in console with a red background')
         * ```
         * @memberof bbn.fn
         * @param    {String} errorMsg
         * @returns
         */
        var error = function (errorMsg) {
            if (arguments.length > 1) {
                var args = [];
                for (var i = 1; i < arguments.length; i++) {
                    args.push(arguments[i]);
                }
                args.unshift({
                    _bbn_console_mode: 'error',
                    _bbn_console_level: 1,
                    _bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
                });
                log_js_2.log.apply(this, args);
            }
            throw new Error(errorMsg);
        };
        exports.error = error;
    });
    define("fn/type/checkType", ["require", "exports", "fn/type/isArray", "fn/loop/each", "fn/type/isFunction", "fn/type/isString", "fn/string/correctCase", "fn/browser/error", "fn/browser/log"], function (require, exports, isArray_js_1, each_js_1, isFunction_js_2, isString_js_2, correctCase_js_1, error_js_1, log_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.checkType = void 0;
        var checkType = function (value, type, msg) {
            var logs = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                logs[_i - 3] = arguments[_i];
            }
            var ok = false;
            if (!(0, isArray_js_1.isArray)(type)) {
                type = [type];
            }
            var typesList = [];
            (0, each_js_1.each)(type, function (t) {
                var _a;
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
                if ((0, isFunction_js_2.isFunction)(t)) {
                    typesList.push(t.name || ((_a = t.constructor) === null || _a === void 0 ? void 0 : _a.name) || t.toString());
                    if (value instanceof t) {
                        ok = true;
                        return false;
                    }
                }
                else if (!(0, isString_js_2.isString)(t) || !(0, isFunction_js_2.isFunction)(bbn.fn['is' + (0, correctCase_js_1.correctCase)(t)])) {
                    (0, error_js_1.error)("The type ".concat(t, " is not recognized"));
                }
                else if (bbn.fn['is' + (0, correctCase_js_1.correctCase)(t)](value)) {
                    ok = true;
                    return false;
                }
                else {
                    typesList.push(t);
                }
            });
            if (!ok) {
                (0, log_js_3.log)(['Value given', value, 'type', typeof value, 'expected', typesList.join(' or ')]);
                if (logs.length) {
                    (0, log_js_3.log)(logs);
                }
                throw new Error((msg ? msg + ' - ' : '') + bbn._('The value should be a %s', typesList.join(' ' + bbn._('or a') + ' ')));
            }
        };
        exports.checkType = checkType;
    });
    define("_", ["require", "exports", "fn/type/checkType"], function (require, exports, checkType_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports._ = void 0;
        /**
         * Translate an expression using the object bbn.lng
         *
         * @param {String} st
         * @returns {String}
         */
        var _ = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var st = args.shift();
            var res = bbn.lng[st] || st;
            if (args.length) {
                var i_1 = 0;
                return res.replace(/\%([d|s])/g, function (match, type) {
                    var tmp = args[i_1++];
                    if (!tmp) {
                        tmp = type === 'd' ? 0 : '';
                    }
                    (0, checkType_js_1.checkType)(tmp, type === 'd' ? 'number' : 'string', bbn._("The value you gave did not correspond, check the loggg"));
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
        var $ = function (selector, context) {
            if (context === null || context === void 0 ? void 0 : context.querySelectorAll) {
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
        var lng = {
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
        var vars = {
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
        var env = {
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
    define("db", ["require", "exports", "_", "fn/loop/each", "fn/loop/iterate", "fn/browser/log"], function (require, exports, __js_1, each_js_2, iterate_js_2, log_js_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.db = void 0;
        var idb = window['indexedDB'] || window['webkitIndexedDB'] || window['mozIndexedDB'] || window['OIndexedDB'] || window['msIndexedDB'];
        var dbObject = function (dbName) {
            var _this = this;
            var conn = db._connections[dbName];
            var structure = db._structures[dbName];
            this.insert = function (table, data) {
                if (!Array.isArray(data)) {
                    data = [data];
                }
                return new Promise(function (resolve) {
                    var tx = conn.transaction(table, "readwrite");
                    var store = tx.objectStore(table);
                    var res = data.length;
                    (0, each_js_2.each)(data, function (a) {
                        var request = store.put(a);
                        request.onerror = function () {
                            (0, log_js_4.log)(request.error);
                            res--;
                        };
                    });
                    tx.onabort = function () {
                        throw new Error(tx.error);
                    };
                    tx.oncomplete = function () {
                        resolve(res);
                    };
                });
            };
            this.update = function (table, data, where) {
                return new Promise(function (resolve) {
                    var tx = conn.transaction(table, "readwrite");
                    var store = tx.objectStore(table);
                    var arch = structure[table];
                    var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
                    if (!where[primary]) {
                        throw new Error((0, __js_1._)("No "));
                    }
                    var res = 1;
                    var request = store.put(data, where[primary]);
                    request.onerror = function () {
                        (0, log_js_4.log)(request.error);
                        res--;
                    };
                    tx.onabort = function () {
                        throw new Error(tx.error);
                    };
                    tx.oncomplete = function () {
                        resolve(res);
                    };
                });
            };
            this.delete = function (table, where) {
                return new Promise(function (resolve) {
                    var tx = conn.transaction(table, "readwrite");
                    var store = tx.objectStore(table);
                    var arch = structure[table];
                    var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
                    if (!where[primary]) {
                        throw new Error((0, __js_1._)("No "));
                    }
                    var res = 1;
                    var request = store.delete(where[primary]);
                    request.onerror = function () {
                        (0, log_js_4.log)(request.error);
                        res--;
                    };
                    tx.onabort = function () {
                        throw new Error(tx.error);
                    };
                    tx.oncomplete = function () {
                        resolve(res);
                    };
                });
            };
            this.selectOne = function (table, field, where, order, start, limit) {
                return new Promise(function (resolve) {
                    _this.select(table, [field], where, order, start, limit).then(function (d) {
                        var _a;
                        resolve((_a = d[field]) !== null && _a !== void 0 ? _a : undefined);
                    });
                });
            };
            this.select = function (table, fields, where, order, start, limit) {
                var tx = conn.transaction(table, "readonly");
                var store = tx.objectStore(table);
                var arch = structure[table];
                var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
                if (!where[primary]) {
                    throw new Error((0, __js_1._)("No "));
                }
                return new Promise(function (resolve) {
                    var req = store.get(where[primary]);
                    req.onsuccess = function () {
                        var obj = req.result;
                        if (fields.length) {
                            var res_1 = {};
                            (0, iterate_js_2.iterate)(obj, function (v, n) {
                                if (fields.indexOf(n) > -1) {
                                    res_1[n] = v;
                                }
                            });
                            return resolve(res_1);
                        }
                        else {
                            resolve(obj);
                        }
                    };
                });
            };
            this.selectAll = function (table, fields, where, order, start, limit) {
                var tx = conn.transaction(table, "read");
                var store = tx.objectStore(table);
                var arch = structure[table];
                var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
                if (!where[primary]) {
                    throw new Error((0, __js_1._)("No "));
                }
                return new Promise(function (resolve) {
                    var req = store.get(structure.keys.PRIMARY);
                });
            };
            this.getColumnValues = function (table, field, where, order, start, limit) {
                return new Promise(function (resolve) {
                    var tx = conn.transaction(table, "read");
                    var store = tx.objectStore(table);
                });
            };
        };
        var db = {
            _structures: {},
            /* This variable should be set to true in debugging mode only */
            _connections: {},
            /* Address of the CDN (where this file should be hosted) */
            _stores: {},
            ok: idb !== undefined,
            open: function (name) {
                return new Promise(function (resolve) {
                    if (!db._connections[name]) {
                        if (!db._structures[name]) {
                            throw new Error((0, __js_1._)("Impossible to find a structure for the database %s", name));
                        }
                        var conn_1 = idb.open(name);
                        conn_1.onupgradeneeded = function () {
                            (0, log_js_4.log)("UPGRADE NEEDED");
                            var res = conn_1.result;
                            (0, iterate_js_2.iterate)(db._structures[name], function (structure, storeName) {
                                var primary = structure.keys.PRIMARY.columns.length > 1 ? structure.keys.PRIMARY.columns : structure.keys.PRIMARY.columns[0];
                                var store = res.createObjectStore(storeName, { keyPath: primary });
                                (0, iterate_js_2.iterate)(structure.keys, function (a, n) {
                                    if (n !== 'PRIMARY') {
                                        store.createIndex(n, a.columns.length > 1 ? a.columns : a.columns[0], {
                                            unique: !!a.unique
                                        });
                                    }
                                });
                            });
                        };
                        conn_1.onsuccess = function () {
                            db._connections[name] = conn_1.result;
                            var obj = new dbObject(name);
                            resolve(obj);
                        };
                        return;
                    }
                    resolve(new dbObject(db._connections[name]));
                });
            },
            add: function (database, name, structure) {
                var _a;
                if (((_a = structure === null || structure === void 0 ? void 0 : structure.keys) === null || _a === void 0 ? void 0 : _a.PRIMARY) && (structure === null || structure === void 0 ? void 0 : structure.fields)) {
                    if (!db._structures[database]) {
                        db._structures[database] = {};
                    }
                    db._structures[database][name] = structure;
                }
                else {
                    throw new Error((0, __js_1._)("The database structure for %s is not valid (are there keys and field? Is there a primary?", name));
                }
            }
        };
        exports.db = db;
    });
    define("fn/ajax/_addLoader", ["require", "exports", "fn/string/substr"], function (require, exports, substr_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports._addLoader = void 0;
        /**
         * Creates and adds a "loader" object to the property bbn.env.loaders.
         *
         * @method   _addLoader
         * @global
         * @ignore
         * @memberof bbn.fn
         *
         * @param    {String}  requestId
         * @param    {Promise} prom
         * @param    {Object}  source
         *
         * @returns  {Number}  The timestamp (in ms)
         */
        var _addLoader = function (requestId, prom, source) {
            /** @var {Number} tst Current timestamp */
            var tst = new Date().getTime();
            /** @var {String} url The original URL (part of requestId before : and md5) */
            var url = (0, substr_js_2.substr)(requestId, 0, requestId.length - 33);
            /** @var {Object} loader The loader object */
            var loader = {
                key: requestId,
                url: url,
                loader: prom,
                source: source,
                loading: true,
                error: false,
                abort: false,
                errorMessage: false,
                success: false,
                start: tst,
            };
            // Adding the loader in bbn.env.loaders
            bbn.env.loaders.push(loader);
            // Adding an object with this loader info in bbn.env.loadersHistory
            bbn.env.loadersHistory.unshift(loader);
            /** @var {Number} idx A pointer starting at the end of  array loadersHistory */
            var idx = bbn.env.loadersHistory.length;
            // Removing elements from the loadersHistory object if their number is higher
            // than bbn.env.maxLoadersHistory
            while (idx && bbn.env.loadersHistory.length > bbn.env.maxLoadersHistory) {
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
    define("fn/object/getProperty", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getProperty = void 0;
        /**
         * Returns the value of the given property from the given object.
         *
         * Looks for the given property in the given object, accepting dot (.) separator
         * for deep property access, and returns its value if found and undefined otherwise.
         *
         * @method   getProperty
         * @global
         * @example
         * ```javascript
         * bbn.fn.getProperty({a: 1, b: 2}, 'b');
         * // 2
         * ```
         * @example
         * ```javascript
         * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.o.a');
         * // 33
         * ```
         * @example
         * ```javascript
         * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.h.a');
         * // undefined
         * ```
         * @memberof bbn.fn
         * @param    {Object} obj
         * @param    {String} prop
         * @returns  {*}      The property's value or undefined
         */
        var getProperty = function (obj, prop) {
            if (typeof obj === 'object' && typeof prop === 'string') {
                return prop.split('.').reduce(function (o, i) {
                    if (o) {
                        return o[i];
                    }
                    return undefined;
                }, obj);
            }
        };
        exports.getProperty = getProperty;
    });
    define("fn/string/removeAccents", ["require", "exports", "fn/type/isString", "fn/browser/log"], function (require, exports, isString_js_3, log_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeAccents = void 0;
        /**
         * Returns the string passed as an argument without accents.
         *
         * @method   removeAccents
         * @global
         *
         * @example
         * ```javascript
         * //"eeou"
         * bbn.fn.removeAccents("èéòù");
         * ```
         * @memberof bbn.fn
         * @param    {String} st
         * @returns  {String}
         */
        var removeAccents = function (st) {
            if (!(0, isString_js_3.isString)(st)) {
                if (st.toString) {
                    st = st.toString();
                }
                else {
                    (0, log_js_5.log)(st);
                    throw new Error(bbn._("removeAccent expects a string"));
                }
            }
            return st.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        };
        exports.removeAccents = removeAccents;
    });
    define("fn/type/isDate", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isDate = void 0;
        /**
         * Returns true if the given argument is a date object.
         * @method   isDate
         * @global
         * @example
         * ```javascript
         * let date = new Date();
         * bbn.fn.isDate(date);
         * //true
         * ```
         * @example
         * ```javascript
         * bbn.fn.isDate('16/04/2020');
         * //false
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isDate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_7 = args; _a < args_7.length; _a++) {
                var a = args_7[_a];
                if ({}.toString.apply(a) !== "[object Date]") {
                    return false;
                }
            }
            return true;
        };
        exports.isDate = isDate;
    });
    define("fn/object/_compareValues", ["require", "exports", "fn/object/getProperty", "fn/type/isString", "fn/string/removeAccents", "fn/type/isDate"], function (require, exports, getProperty_js_1, isString_js_4, removeAccents_js_1, isDate_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports._compareValues = void 0;
        /**
          * Compares the given property in the given objects and returns -1, 1, or 0 depending on their difference.
          *
          * This is only used as a sorting function by bbn.fn.order and bbn.fn.multiorder.
          *
          * @method   _compareValues
          * @global
          * @example
          * ```javascript
          * // Same value
          * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'value');
          * // 0
          * ```
          * @example
          * ```javascript
          * // First value smaller than second
          * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'year');
          * // -1
          * ```
          * @example
          * ```javascript
          * // First value greater than second
          * bbn.fn._compareValues({year: 2017, value: 2}, {year: 2016, value: 2}, 'year');
          * // 1
          * ```
          * @example
          * ```javascript
          * // First value is undefined
          * bbn.fn._compareValues({year: 2017}, {year: 2016, value: 2}, 'value');
          * // 1
          * ```
          * @memberof bbn.fn
          * @param    {Object} a    First object for comparison
          * @param    {Object} b    Second object for comparison
          * @param    {String} prop Property to compare
          * @param    {String} [dir=asc]  Direction of comparison (desc or asc by default)
          * @returns  {Number} Always either -1, 1, or 0
          */
        var _compareValues = function (a, b, prop, dir) {
            if (dir === void 0) { dir = "asc"; }
            var va = (0, getProperty_js_1.getProperty)(a, prop), vb = (0, getProperty_js_1.getProperty)(b, prop), ta = (typeof va).toLowerCase(), tb = (typeof vb).toLowerCase();
            if (dir !== "asc" && (0, isString_js_4.isString)(dir) && dir.toLowerCase() === "desc") {
                dir = "desc";
            }
            if (ta !== tb) {
                va = ta;
                vb = tb;
            }
            else {
                switch (ta) {
                    case "string":
                        va = (0, removeAccents_js_1.removeAccents)(va).toLowerCase();
                        vb = (0, removeAccents_js_1.removeAccents)(vb).toLowerCase();
                        break;
                    case "boolean":
                        va = va ? 1 : 0;
                        vb = vb ? 1 : 0;
                        break;
                    case "object":
                        if ((0, isDate_js_1.isDate)(va)) {
                            va = va.getTime();
                            vb = (0, isDate_js_1.isDate)(vb) ? vb.getTime() : 0;
                        }
                        break;
                }
            }
            if (va < vb) {
                return dir === "desc" ? 1 : -1;
            }
            if (va > vb) {
                return dir === "desc" ? -1 : 1;
            }
            return 0;
        };
        exports._compareValues = _compareValues;
    });
    define("fn/object/numProperties", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.numProperties = void 0;
        /**
          * Returns the number of properties contained in the object.
          *
          * Only takes into account the own properties - not the inherited ones - and the non _private_ ones.
          *
          * @method   numProperties
          * @global
          * @example
          * ```javascript
          * bbn.fn.numProperties({author: "Chuck Palahniuk", "title": "Fight club"});
          * // 2
          * ```
          * @example
          * ```javascript
          * bbn.fn.numProperties({username: "chuck", "password": "soap", _bbn_timestamp: 1587323193751});
          * // 2
          * @example
          * ```javascript
          * let d = new Date();
          * bbn.fn.numProperties(d);
          * // 0
          * d.myProp = 1;
          * bbn.fn.numProperties(d);
          * // 1
          * ```
          * @memberof bbn.fn
          * @param    {Object} obj The object to analyze
          * @returns  {Number} The number of properties
          */
        var numProperties = function (obj) {
            if (!obj || typeof obj !== 'object') {
                return 0;
            }
            return Object.keys(obj).length;
        };
        exports.numProperties = numProperties;
    });
    define("fn/type/isEmpty", ["require", "exports", "fn/type/isArray", "fn/object/numProperties"], function (require, exports, isArray_js_2, numProperties_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isEmpty = void 0;
        /**
         * Checks if the argument is empty or not.
         * @method   isEmpty
         * @global
         *
         * @example
         * ```javascript
         * bbn.fn.isEmpty({});
         * //true
         * ```
         * @example
         * ```javascript
         * bbn.fn.isEmpty({test : 1});
         * //false
         * ```
         * @example
         * ```javascript
         * bbn.fn.isEmpty([]);
         * //true
         * ```
         * @example
         * ```javascript
         * bbn.fn.isEmpty(['test']);
         * //false
         * ```
         * @example
         * ```javascript
         * bbn.fn.isEmpty('');
         * //true
         * ```
         * @example
         * ```javascript
         * bbn.fn.isEmpty('test');
         * //false
         * ```
         * @memberof bbn.fn
         * @param    {*} obj
         * @returns  {Boolean}
         */
        var isEmpty = function (obj) {
            if (!obj) {
                return true;
            }
            if ((0, isArray_js_2.isArray)(obj)) {
                return obj.length ? false : true;
            }
            if (typeof obj === "object") {
                if ((0, numProperties_js_1.numProperties)(obj)) {
                    return false;
                }
                return true;
            }
            return false;
        };
        exports.isEmpty = isEmpty;
    });
    define("fn/type/isNull", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isNull = void 0;
        /**
         * Returns true if the given argument is null;
         * @method   isNull
         * @global
         * @example
         * ```javascript
         * bbn.fn.isNull(myData);
         * //true
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isNull = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_8 = args; _a < args_8.length; _a++) {
                var a = args_8[_a];
                if ({}.toString.apply(a) !== "[object Null]") {
                    return false;
                }
            }
            return true;
        };
        exports.isNull = isNull;
    });
    define("fn/type/isObject", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isObject = void 0;
        /**
         * Returns true if the given argument is an object.
         * @method   isObject
         * @global
         * @example
         * ```javascript
         * bbn.fn.isObject({name: 'cami', age: 7});
         * //true
         * ```
         * @example
         * ```javascript
         * bbn.fn.isObject([{name: 'cami', age: 7}]);
         * //false
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isObject = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_9 = args; _a < args_9.length; _a++) {
                var a = args_9[_a];
                if ({}.toString.apply(a) !== "[object Object]") {
                    return false;
                }
            }
            return true;
        };
        exports.isObject = isObject;
    });
    define("fn/type/isDom", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isDom = void 0;
        /**
         * Returns true if the given argument is a dom element;
         * @method   isDom
         * @example
         * ```javascript
         * bbn.fn.isDom(document.body.childNodes[0]);
         * //true
         * ```
         * @global
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isDom = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_10 = args; _a < args_10.length; _a++) {
                var a = args_10[_a];
                if (!(a instanceof HTMLElement)) {
                    return false;
                }
            }
            return true;
        };
        exports.isDom = isDom;
    });
    define("fn/type/isCp", ["require", "exports", "fn/type/isDom"], function (require, exports, isDom_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isCp = void 0;
        var isCp = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length) {
                return false;
            }
            if (!('cp' in bbn) || !('isComponent' in bbn['cp']) || !(typeof bbn['cp'].isComponent === 'function')) {
                return false;
            }
            for (var _b = 0, args_11 = args; _b < args_11.length; _b++) {
                var a = args_11[_b];
                var res = bbn.cp.isComponent(a);
                if (!res || (0, isDom_js_1.isDom)(a) || !((_a = a.$el) === null || _a === void 0 ? void 0 : _a.bbnCid)) {
                    return false;
                }
            }
            return true;
        };
        exports.isCp = isCp;
    });
    define("fn/object/circularReplacer", ["require", "exports", "fn/type/isDom", "fn/type/isCp", "fn/browser/log"], function (require, exports, isDom_js_2, isCp_js_1, log_js_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.circularReplacer = void 0;
        /**
         * Returns a function to give to JSON.stringify in order to avoid circular values.
         *
         * @returns Function
         */
        var circularReplacer = function () {
            var visited = new WeakSet();
            return function (key, value) {
                if (typeof value === "object" && value !== null) {
                    if (visited.has(value)) {
                        return;
                    }
                    visited.add(value);
                    if (![undefined, Object, Array, null].includes(value.constructor)) {
                        if ((0, isDom_js_2.isDom)(value)) {
                            if (value.bbnId) {
                                value =
                                    "__BBN_DOM__" + value.tagName + "/" + value.bbnId + value.bbnHash;
                            }
                            else {
                                value = "__BBN_DOM__" + value.tagName + "/" + value.className;
                            }
                        }
                        else if ((0, isCp_js_1.isCp)(value)) {
                            (0, log_js_6.log)("IS CP");
                            value = "__BBN_CP__" + value.$options.name + "/" + value.$cid;
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
    define("fn/string/simpleHash1", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.simpleHash1 = void 0;
        var simpleHash1 = function (str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                var char = str.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash |= 0; // Convert to 32-bit integer
            }
            return hash;
        };
        exports.simpleHash1 = simpleHash1;
    });
    define("fn/string/simpleHash2", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.simpleHash2 = void 0;
        var simpleHash2 = function (str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                var char = str.charCodeAt(i);
                hash = char + (hash << 6) + (hash << 16) - hash;
                hash |= 0; // Convert to 32-bit integer
            }
            return hash;
        };
        exports.simpleHash2 = simpleHash2;
    });
    define("fn/string/simpleHash", ["require", "exports", "fn/string/simpleHash1", "fn/string/simpleHash2"], function (require, exports, simpleHash1_js_1, simpleHash2_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.simpleHash = void 0;
        var simpleHash = function (str) {
            var part1 = (0, simpleHash1_js_1.simpleHash1)(str).toString(16).padStart(8, '0');
            var part2 = (0, simpleHash2_js_1.simpleHash2)(str).toString(16).padStart(8, '0');
            return part1 + part2;
        };
        exports.simpleHash = simpleHash;
    });
    define("fn/string/hash", ["require", "exports", "fn/browser/log", "fn/type/isDom", "fn/type/isCp", "fn/object/circularReplacer", "fn/string/simpleHash"], function (require, exports, log_js_7, isDom_js_3, isCp_js_2, circularReplacer_js_1, simpleHash_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.hash = void 0;
        /**
         * Makes a hash out of anything
         * @param {Object|Array} obj
         * @returns {String}
         */
        var hash = function (obj) {
            //log(obj);
            var st = "__bbn__";
            for (var i in arguments) {
                if (arguments[i]) {
                    var value = arguments[i];
                    if ((0, isDom_js_3.isDom)(value)) {
                        if (value.bbnId) {
                            st +=
                                "__BBN_DOM__" + value.tagName + "/" + value.bbnId + value.bbnHash;
                        }
                        else {
                            st += "__BBN_DOM__" + value.tagName + "/" + value.className;
                        }
                    }
                    else if ((0, isCp_js_2.isCp)(value)) {
                        (0, log_js_7.log)("IS CP");
                        st += "__BBN_CP__" + value.$options.name + "/" + value.$cid;
                    }
                    else {
                        try {
                            st += JSON.stringify(arguments[i], (0, circularReplacer_js_1.circularReplacer)());
                        }
                        catch (e) {
                            st += ".";
                        }
                    }
                }
            }
            return (0, simpleHash_js_1.simpleHash)(st);
        };
        exports.hash = hash;
    });
    define("fn/type/isSame", ["require", "exports", "fn/string/hash", "fn/loop/each"], function (require, exports, hash_js_1, each_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isSame = void 0;
        /**
          * Checks whether the data contained in the given objects is identical.
          *
          * The properties starting with a non alphanumerical character and the
          * inherited ones are removed for the comparison, then the properties are
          * compared individually without the order being taken into account.
          *
          * @method   isSame
          * @global
          * @example
          * ```javascript
          * bbn.fn.isSame(
          *   {name: "Wonka", fname: "Willy"},
          *   {fname: "Willy", name: "Wonka"}
          * );
          * // true
          * ```
          * @example
          * ```javascript
          * // Doesn't take into account properties starting with non-alphanumeric characters
          * bbn.fn.isSame(
          *   {name: "Wonka", fname: "Willy", _bbn_timestamp: 1587269593987},
          *   {fname: "Willy", name: "Wonka"}
          * );
          * // true
          * ```
          * @example
          * ```javascript
          * bbn.fn.isSame(
          *   {name: "Wonka", fname: "Willy", real: false},
          *   {fname: "Willy", name: "Wonka"}
          * );
          * // false
          * ```
          * @memberof bbn.fn
          * @param    {Object} obj1
          * @param    {Object} obj2
          * @returns  {Boolean}
          */
        var isSame = function (obj1, obj2, done) {
            if (!done) {
                done = [];
            }
            if (obj1 === obj2) {
                return true;
            }
            if (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object') {
                var tmp1 = Object.keys(obj1).sort(), tmp2 = Object.keys(obj2).sort();
                // Case where the keys are different
                if ((0, hash_js_1.hash)(tmp1) !== (0, hash_js_1.hash)(tmp2)) {
                    return false;
                }
                var ok_1 = true;
                if (obj1 && typeof obj1 === 'object') {
                    if (done.includes(obj1)) {
                        return ok_1;
                    }
                    done.push(obj1);
                }
                (0, each_js_3.each)(tmp1, function (a) {
                    if (!isSame(obj1[a], obj2[a])) {
                        ok_1 = false;
                        return false;
                    }
                });
                return ok_1;
            }
            return false;
        };
        exports.isSame = isSame;
    });
    define("fn/object/compare", ["require", "exports", "fn/type/isEmpty", "fn/string/removeAccents", "fn/type/isNull", "fn/type/isObject", "fn/type/isSame"], function (require, exports, isEmpty_js_1, removeAccents_js_2, isNull_js_1, isObject_js_1, isSame_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.compare = void 0;
        /**
         * Performs a comparison between two values based on the given operator and returns a boolean.
         *
         * It is internally used by all the filtering functions; the available operators are:
         * - _===_, _=_, _equal_, _eq_, _is_, which stand for __===__
         * - _!==_, _notequal_, _neq_, _isnot_, which stand for __!==__
         * - _!=_, _different_, which stand for __!=__
         * - _contains_, _contain_, _icontains_, _icontain_
         * - _starts_, _start_
         * - _startswith_, _startsi_, _starti_, _istarts_, _istart_
         * - _endswith_, _endsi_, _endi_, _iends_, _iend_
         * - _like_
         * - _gt_, _>_, which stand for __>__
         * - _lt_, _<_, which stand for __<__
         * - _gte_, _>=_, which stand for __>=__
         * - _lte_, _<=_, which stand for __<=__
         * - _isnull_, which stands for __=== null__
         * - _isnotnull_, which stands for __!== null__
         * - _isempty_, which stands for __=== ''__
         * - _isnotempty_, which stands for __!== ''__
         *
         * The defaut operator (if none is given) is __==__ .
         *
         * @method   compare
         * @global
         * @example
         * ```javascript
         * bbn.fn.compare('foo', 'bar', 'eq');
         * // false
         * ```
         * @example
         * ```javascript
         * bbn.fn.compare('foo', 'bar', 'neq');
         * // true
         * ```
         * @example
         * ```javascript
         * bbn.fn.compare(3, 1, '>');
         * // true
         * ```
         * @example
         * ```javascript
         * bbn.fn.compare("JavaScript", "script", 'contain');
         * // true
         * ```
         * @memberof bbn.fn
         * @param    {String|Number} v1
         * @param    {String|Number} v2
         * @param    {String}        operator
         * @returns  {Boolean}       True if the values' comparison complies with the operator, false otherwise
         */
        var compare = function (v1, v2, operator) {
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
                    if ((0, isEmpty_js_1.isEmpty)(v1) || (0, isEmpty_js_1.isEmpty)(v2)) {
                        return false;
                    }
                    return (0, removeAccents_js_2.removeAccents)(v1).toLowerCase().indexOf((0, removeAccents_js_2.removeAccents)(v2).toLowerCase()) !== -1;
                case 'doesnotcontain':
                case 'donotcontain':
                    if ((0, isNull_js_1.isNull)(v1) || (0, isNull_js_1.isNull)(v2)) {
                        return true;
                    }
                    return (0, removeAccents_js_2.removeAccents)(v1.toLowerCase()).indexOf((0, removeAccents_js_2.removeAccents)(v2.toLowerCase())) === -1;
                case 'starts':
                case 'start':
                    if ((0, isNull_js_1.isNull)(v1) || (0, isNull_js_1.isNull)(v2)) {
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
                    if ((0, isNull_js_1.isNull)(v1) || (0, isNull_js_1.isNull)(v2)) {
                        return false;
                    }
                    return (0, removeAccents_js_2.removeAccents)(v1).toLowerCase().indexOf((0, removeAccents_js_2.removeAccents)(v2).toLowerCase()) === 0;
                case 'endswith':
                case 'endsi':
                case 'endi':
                case 'iends':
                case 'iend':
                    if ((0, isNull_js_1.isNull)(v1) || (0, isNull_js_1.isNull)(v2)) {
                        return false;
                    }
                    return v1.lastIndexOf(v2) === v1.length - v2.length;
                case 'like':
                    if ((0, isNull_js_1.isNull)(v1) || (0, isNull_js_1.isNull)(v2)) {
                        return false;
                    }
                    return (0, removeAccents_js_2.removeAccents)(v1).toLowerCase() === (0, removeAccents_js_2.removeAccents)(v2).toLowerCase();
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
                    if ((0, isObject_js_1.isObject)(v1, v2)) {
                        return (0, isSame_js_1.isSame)(v1, v2);
                    }
                default:
                    return v1 == v2;
            }
        };
        exports.compare = compare;
    });
    define("fn/object/compareConditions", ["require", "exports", "fn/type/isArray", "fn/loop/each", "fn/object/compare", "fn/object/getProperty"], function (require, exports, isArray_js_3, each_js_4, compare_js_1, getProperty_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.compareConditions = void 0;
        /**
         * Checks whether the given data object complies or not with the given filter.
         *
         * The filter format must be full (i.e. with the properties logic and conditions) such as
         * seen in the function bbn.fn.search and can be generated by the function bbn.fn.filterToConditions.
         *
         * @method   compareConditions
         * @global
         * @example
         * ```javascript
         * let item = {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589};
         * bbn.fn.compareConditions(item, {
         *   logic: "AND",
         *   conditions: [
         *     {
         *        field: "director",
         *        value: "Steven Spielberg"
         *     }
         *   ]
         * });
         * // true
         * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Soderberg"}));
         * // false
         * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Spielberg"}));
         * // true
         * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({year: 1980}, ">"));
         * // true
         * bbn.fn.compareConditions(item, {
         *   logic: "AND",
         *   conditions: [
         *     {
         *        field: "year",
         *        operator: "<",
         *        value: 1980
         *     }
         *   ]
         * });
         * // false
         * ```
         * @memberof bbn.fn
         * @param    {Object} data
         * @param    {Object} filter
         * @returns  {Boolean}
         */
        var compareConditions = function (data, filter) {
            if (!filter.conditions || !filter.logic || !(0, isArray_js_3.isArray)(filter.conditions)) {
                throw new Error("Error in compareConditions: the filter should an abject with conditions and logic properties and conditions should be an array of objects");
            }
            var ok = filter.logic === "AND" ? true : false;
            (0, each_js_4.each)(filter.conditions, function (a) {
                var comparator;
                if (a.conditions && (0, isArray_js_3.isArray)(a.conditions)) {
                    comparator = compareConditions(data, a);
                }
                else {
                    comparator = (0, compare_js_1.compare)((0, getProperty_js_2.getProperty)(data, a.field), a.value, a.operator);
                    if (comparator) {
                        var bits = a.field.split(".");
                        var prop = bits.pop();
                        if (bits.length) {
                            (0, each_js_4.each)(bits, function (b) { return (data = data[b]); });
                        }
                        // Case where both are undefined: value and prop which doesn't exist; they are not the same!
                        if ((0, getProperty_js_2.getProperty)(data, prop) === undefined && a.value !== undefined) {
                            comparator = false;
                        }
                    }
                }
                if (comparator) {
                    if (filter.logic === "OR") {
                        ok = true;
                        return false;
                    }
                }
                else if (filter.logic === "AND") {
                    ok = false;
                    return false;
                }
            });
            return ok;
        };
        exports.compareConditions = compareConditions;
    });
    define("fn/object/filterToConditions", ["require", "exports", "fn/type/isObject", "fn/type/isArray", "fn/loop/iterate"], function (require, exports, isObject_js_2, isArray_js_4, iterate_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.filterToConditions = void 0;
        /**
         * Converts the given object 'filter' to a valid format of condition.
         *
         * The resulting format will comply with bbn.fn.compareConditions and also with
         * bbn databases functions and complex filters applied to bbn-vue list components.
         *
         * @method   filterToConditions
         * @global
         * @example
         * ```javascript
         * bbn.fn.filterToConditions({num: 3});
         * // {
         * //   logic: "AND",
         * //   conditions: [{
         * //     field: "num",
         * //     operator: "=",
         * //     value: 3
         * //   }]
         * // }
         * ```
         * @example
         * ```javascript
         * bbn.fn.filterToConditions({num: 3}, '>');
         * // {
         * //   logic: "AND",
         * //   conditions: [{
         * //     field: "num",
         * //     operator: ">",
         * //     value: 3
         * //   }]
         * // }
         * ```
         * @memberof bbn.fn
         * @param    {Object} filter
         * @param    {String} operator
         * @returns  {Object}
         */
        var filterToConditions = function (filter, operator) {
            if (operator === void 0) { operator = "="; }
            if (!(0, isObject_js_2.isObject)(filter)) {
                throw new Error("Error in filterToCondition: filter must be an object");
            }
            if (!filter.conditions || !(0, isArray_js_4.isArray)(filter.conditions)) {
                var tmp_1 = [];
                (0, iterate_js_3.iterate)(filter, function (a, n) {
                    if ((0, isObject_js_2.isObject)(a) && typeof a.conditions === "object") {
                        tmp_1.push(filterToConditions(a));
                    }
                    else {
                        tmp_1.push({
                            field: n,
                            operator: operator,
                            value: a,
                        });
                    }
                });
                filter = {
                    conditions: tmp_1,
                };
            }
            if (!filter.logic) {
                filter.logic = "AND";
            }
            return filter;
        };
        exports.filterToConditions = filterToConditions;
    });
    define("fn/object/search", ["require", "exports", "fn/type/isIterable", "fn/object/compareConditions", "fn/object/filterToConditions", "fn/type/isObject", "fn/object/numProperties", "fn/type/isNumber"], function (require, exports, isIterable_js_2, compareConditions_js_1, filterToConditions_js_1, isObject_js_3, numProperties_js_2, isNumber_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.search = void 0;
        /**
         * Retrieves the index of the array's first element corresponding to the given filter.
         *
         * Returns -1 if the element is not found. If the second parameter is an object or function
         * for filtering as defined in bbn.fn.filter, the remaining parameters will be shifted to the
         * left, i.e. val becomes operator, and operator startFrom. And if operator is a number, its value will
         * be given to startFrom and operator will be undefined. The filter object can be complex with different
         * operators (as seen in bbn.fn.compare) and logics (AND/OR), and infinitely nested, of this form:
         * ```javascript
         * {
         *   logic: "AND",
         *   conditions: [
         *     {
         *       field: "prop1",
         *       operator: "eq",
         *       value: "value1"
         *     }, {
         *       logic: "OR",
         *       conditions: [
         *         {
         *            field: "prop2",
         *            operator: "eq",
         *            value: 1
         *         }. {
         *            field: "prop2",
         *            operator: "eq",
         *            value: 2
         *         }
         *       ]
         *     }
         *   ]
         * }
         * ```
         * This way of managing the arguments is used in all the filtering functions.
         *
         * @method   search
         * @global
         * @example
         * ```javascript
         * let ar = [
         *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
         *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
         *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
         *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
         * ];
         *
         * bbn.fn.search(ar, "id", 256);
         * // 2
         *
         * bbn.fn.search(ar, {director: "Steven Spielberg"});
         * // 0
         *
         * bbn.fn.search(ar, {year: 1975, director: "Steven Spielberg"});
         * // 3
         *
         * bbn.fn.search(ar, {director: "Steven Spielberg"}, 1);
         * // 3
         *
         * // Complex filters
         * bbn.fn.search(ar, {
         *   logic: "AND",
         *   conditions: [
         *     {
         *       field: "director",
         *       operator: "eq",
         *       value: "Steven Spielberg"
         *     }, {
         *       logic: "OR",
         *       conditions: [
         *         {
         *            field: "year",
         *            operator: "eq",
         *            value: 1974
         *         }, {
         *            field: "year",
         *            operator: "eq",
         *            value: 1975
         *         }
         *       ]
         *     }
         *   ]
         * });
         * // 3
         *
         * Simple array
         * bbn.fn.search(['a', 'b', 'c'], null, 'b');
         * // 1
         *
         * ```
         *
         * @memberof bbn.fn
         * @param    {Array}                    arr       The subject array
         * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
         * @param    {*}                        val       The value with which comparing the given property
         * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
         * @param    {Number}                   startFrom The index from which the search should start
         * @returns  {Number}                   The index if found, otherwise -1
         */
        var search = function (arr, prop, val, operator, startFrom) {
            if (val === void 0) { val = null; }
            if (operator === void 0) { operator = '='; }
            if (startFrom === void 0) { startFrom = 0; }
            if (!(0, isIterable_js_2.isIterable)(arr)) {
                throw new Error(bbn._('The first argument for a search should be iterable') + ' ' + typeof arr + ' ' + bbn._('given'));
            }
            if (!arr.length) {
                return -1;
            }
            var filter;
            var isFn = false;
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
                filter = function (a) {
                    return (0, compareConditions_js_1.compareConditions)({ value: a }, (0, filterToConditions_js_1.filterToConditions)({
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
                if ((0, isObject_js_3.isObject)(prop)) {
                    filter = prop;
                }
                else if (typeof (prop) === 'function') {
                    isFn = true;
                    filter = prop;
                }
            }
            if (isFn || ((0, isObject_js_3.isObject)(filter) && (0, numProperties_js_2.numProperties)(filter))) {
                if ((0, isNumber_js_2.isNumber)(operator)) {
                    startFrom = typeof (operator) === 'number' ? operator : 0;
                    operator = undefined;
                }
                if (!(0, isNumber_js_2.isNumber)(startFrom)) {
                    startFrom = 0;
                }
                if (typeof filter === 'function') {
                    for (var i = startFrom; i < arr.length; i++) {
                        if (filter(arr[i])) {
                            return i;
                        }
                    }
                }
                else {
                    filter = (0, filterToConditions_js_1.filterToConditions)(filter);
                    for (var i = startFrom; i < arr.length; i++) {
                        if ((0, compareConditions_js_1.compareConditions)(arr[i], filter)) {
                            return i;
                        }
                    }
                }
            }
            return -1;
        };
        exports.search = search;
    });
    define("fn/object/getRow", ["require", "exports", "fn/object/search"], function (require, exports, search_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getRow = void 0;
        /**
         * Returns the first object matching the given filter in an array of objects.
         *
         * The filtering arguments follow the same scheme as bbn.fn.search.
         *
         * @method    getRow
         * @global
         * @example
         * ```javascript
         * let ar = [
         *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
         *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
         *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
         *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
         * ];
         * bbn.fn.getRow(ar, {director: "Steven Spielberg"});
         * // {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
         * bbn.fn.getRow(ar, "director", "Steven Spielberg");
         * // Same result as the previous example
         * bbn.fn.getRow(ar, {
         *   logic: "OR",
         *   conditions: [
         *     {
         *        field: "director",
         *        value: "Richard Donner"
         *     }, {
         *        field: "director",
         *        value: "George Lucas"
         *     }
         *   ]
         * );
         * // {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
         * ```
         * @memberof bbn.fn
         * @param    {Array}                    arr       The subject array
         * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
         * @param    {*}                        val       The value with which comparing the given property
         * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
         * @returns  {Object|Boolean}           The item if found, false otherwise
         */
        var getRow = function (arr, prop, val, operator) {
            if (val === void 0) { val = null; }
            if (operator === void 0) { operator = '='; }
            var idx = (0, search_js_1.search)(arr, prop, val, operator);
            if (idx > -1) {
                return arr[idx];
            }
            return false;
        };
        exports.getRow = getRow;
    });
    define("fn/ajax/_deleteLoader", ["require", "exports", "fn/object/search", "fn/object/getRow", "fn/type/isObject"], function (require, exports, search_js_2, getRow_js_1, isObject_js_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports._deleteLoader = void 0;
        /**
         * Deletes a loader and changes its history state after the promise is fullfilled.
         *
         * @method   _deleteLoader
         * @global
         * @ignore
         * @memberof bbn.fn
         *
         * @param    {String}  requestId   The unique ID of the request sent
         * @param    {String|Object}       res     The result of the request
         * @param    {Boolean} isAbort True if the deletion comes from abortion
         *
         * @returns  {Boolean} True if the loader was found
         */
        var _deleteLoader = function (requestId, res, isAbort) {
            if (res === void 0) { res = null; }
            if (isAbort === void 0) { isAbort = false; }
            var idx = (0, search_js_2.search)(bbn.env.loaders, { key: requestId });
            if (idx > -1) {
                var loader = bbn.env.loaders.splice(idx, 1)[0];
                var history_1 = (0, getRow_js_1.getRow)(bbn.env.loadersHistory, { key: requestId, start: loader.start });
                if (history_1) {
                    history_1.loading = false;
                    history_1.duration = new Date().getTime() - loader.start;
                    if (typeof res === 'string') {
                        history_1.errorMessage = res;
                        history_1.error = !isAbort;
                        history_1.abort = isAbort;
                    }
                    else if ((0, isObject_js_4.isObject)(res)) {
                        history_1.success = true;
                    }
                }
                return true;
            }
            return false;
        };
        exports._deleteLoader = _deleteLoader;
    });
    define("fn/ajax/getLoader", ["require", "exports", "fn/object/search"], function (require, exports, search_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getLoader = void 0;
        /**
         * Finds the loader object corresponding to the given unique ID and returns it if found.
         *
         * The loader is an object representing an Ajax request, with the following properties:
         * * _key_ is the unique ID (_requestId_) of the loader
         * * _url_ is the URL called by the request
         * * _loader_ is the Promise from the Axios XHR
         * * _source_ is the source object for aborting the request
         * * _start_ is the timestamp of the moment the request was sent
         *
         * @method   getLoader
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * bbn.fn.post('my/script', {a: 1, b: 2});
         * let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
         * if (requestId) {
         *   let loader = bbn.fn.getLoader(requestId);
         *   console.log(loader);
         *   // {
         *   //    key: "my/script:af27f0e81533ae2bae3c25dea67359f6",
         *   //    url: "my/script",
         *   //    loader: {Promise},
         *   //    source: {token: {CancelToken}, cancel: {Function}},
         *   //    start: 1591804716757
         *   // }
         * }
         * ```
         *
         * @param    {String} requestId The unique ID of the request as used in bbn.env.loaders
         *
         * @returns  {null|Object} The corresponding loader Object if it exists, false otherwise
         */
        var getLoader = function (requestId) {
            var idx = (0, search_js_3.search)(bbn.env.loaders, { key: requestId });
            if (idx > -1) {
                return bbn.env.loaders[idx];
            }
            return null;
        };
        exports.getLoader = getLoader;
    });
    define("fn/ajax/abort", ["require", "exports", "fn/ajax/getLoader"], function (require, exports, getLoader_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.abort = void 0;
        /**
         * Aborts (client side) the XHR corresponding to the given ID if it still exists.
         *
         * This will throw an error if the loader can't be found.
         *
         * @method   abort
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * bbn.fn.post('my/script', {a: 1, b: 2});
         * let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
         * if (requestId) {
         *   bbn.fn.abort(requestId);
         * }
         * ```
         *
         * @param    {String} requestId An ID generated by getRequestId
         *
         * @returns  {undefined}
         */
        var abort = function (requestId) {
            var loader = (0, getLoader_js_1.getLoader)(requestId);
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
    define("fn/object/filter", ["require", "exports", "fn/type/isArray", "fn/loop/each", "fn/object/filterToConditions", "fn/object/compareConditions"], function (require, exports, isArray_js_5, each_js_5, filterToConditions_js_2, compareConditions_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.filter = void 0;
        /**
         * Returns a new array with only the data matching the given filter.
         *
         * The filtering arguments follow the same scheme as bbn.fn.search.
         *
         * @method   filter
         * @global
         * @example
         * ```javascript
         * let ar = [
         *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
         *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
         *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
         *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
         * ];
         * bbn.fn.filter(ar, {director: "Steven Spielberg"});
         * // [
         * //   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
         * //   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
         * // ]
         * bbn.fn.filter(ar, "director", "Steven Spielberg");
         * // Same result as the previous example
         * bbn.fn.filter(ar, {
         *   logic: "OR",
         *   conditions: [
         *     {
         *        field: "director",
         *        value: "Richard Donner"
         *     }, {
         *        field: "director",
         *        value: "George Lucas"
         *     }
         *   ]
         * );
         * // [
         * //   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
         * //   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
         * // ]
         * ```
         *
         * @memberof bbn.fn
         * @param    {Array}                    arr       The subject array
         * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
         * @param    {*}                        val       The value with which comparing the given property
         * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
         * @returns  {Array}                    A new filtered array
         */
        var filter = function (arr, prop, val, operator) {
            if (val === void 0) { val = null; }
            if (operator === void 0) { operator = '='; }
            if (!(0, isArray_js_5.isArray)(arr)) {
                bbn.fn.log("NOT ARRAY", arr);
                throw new Error('Error in filter: The first argument must be an array');
            }
            var cfg = {};
            var res = [];
            var isFn = typeof (prop) === 'function';
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
                    (0, each_js_5.each)(arr, function (a, i) {
                        if (prop(a, i)) {
                            res.push(a);
                        }
                    });
                }
                else {
                    cfg = (0, filterToConditions_js_2.filterToConditions)(cfg, operator);
                    if (cfg.conditions && cfg.logic) {
                        (0, each_js_5.each)(arr, function (a) {
                            if ((0, compareConditions_js_2.compareConditions)(a, cfg)) {
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
    define("fn/ajax/abortURL", ["require", "exports", "fn/loop/each", "fn/object/filter"], function (require, exports, each_js_6, filter_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.abortURL = void 0;
        /**
         * Aborts (client side) all the XHR using the given URL if it still exists.
         *
         * This will throw an error if the loader can't be found.
         *
         * @method   abortURL
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * bbn.fn.post('my/script', {a: 1, b: 2});
         * bbn.fn.post('my/script', {c: 1, d: 2});
         * bbn.fn.abortURL('my/script');
         * ```
         *
         * @param    {String} requestId An ID generated by getRequestId
         *
         * @returns  {undefined}
         */
        var abortURL = function (url) {
            (0, each_js_6.each)((0, filter_js_1.filter)(bbn.env.loaders, { url: url }), function (a) {
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
    define("fn/style/addColors", ["require", "exports", "fn/object/numProperties", "fn/loop/iterate"], function (require, exports, numProperties_js_3, iterate_js_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.addColors = void 0;
        /**
         * Adds the given color to the object bbn.var.colors in order to be able to use
         * the css classes bbn-bg-myColor for the background and bbn-myColor for the text color.
         *
         * @method   addColors
         * @global
         * @example
         * ```javascript
         * //<div class="bbn-bg-maroon">background</div> <span class="bbn-maroon">text color</span>
         * bbn.fn.addColors({maroon: '#800000'});
         * ```
         * @memberof bbn.fn
         * @param    {Object} colors
         * @returns
         */
        var addColors = function (colors) {
            if ((0, numProperties_js_3.numProperties)(colors)) {
                if (!bbn.var.colors) {
                    bbn.var.colors = {};
                }
                var element = document.createElement("style");
                document.head.appendChild(element);
                var sheet_1 = element.sheet;
                // Append style element to head
                var i_2 = 0;
                (0, iterate_js_4.iterate)(colors, function (v, n) {
                    bbn.var.colors[n] = v;
                    sheet_1.insertRule(".bbn-" +
                        n +
                        ", .bbn-color-text-" +
                        n +
                        " {color: " +
                        v +
                        " !important;}", i_2);
                    sheet_1.insertRule("svg.bbn-" +
                        n +
                        ", .bbn-" +
                        n +
                        " svg, svg.bbn-color-text-" +
                        n +
                        ", .bbn-color-text-" +
                        n +
                        " svg {fill: " +
                        v +
                        ";}", i_2);
                    sheet_1.insertRule(".bbn-bg-" +
                        n +
                        ", .bbn-color-bg-" +
                        n +
                        ", .bbn-color-background-" +
                        n +
                        " {background-color: " +
                        v +
                        " !important;}", i_2);
                    sheet_1.insertRule(".bbn-border-" +
                        n +
                        ", .bbn-color-border-" +
                        n +
                        " {border-color: " +
                        v +
                        " !important;}", i_2);
                    sheet_1.insertRule(".bbn-color-" +
                        n +
                        " {border-color: " +
                        v +
                        "; background-color: " +
                        v +
                        "; color: " +
                        v +
                        ";}", i_2);
                });
            }
        };
        exports.addColors = addColors;
    });
    define("fn/form/addInputs", ["require", "exports", "fn/loop/iterate"], function (require, exports, iterate_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.addInputs = void 0;
        /**
         * Adds the given data to the given form by inserting hidden inputs.
         *
         * @method   addInputs
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * let o = {name: "Smith", fname: "John"};
         * bbn.fn.addInputs(document.getElementById('myform'), o, 'bbn');
         * // Will write at the end of the given form:
         * // <input type="hidden" name="bbn[name]" value="Smith">
         * // <input type="hidden" name="bbn[fname]" value="John">
         *
         * ```
         *
         * @example
         * ```javascript
         * let o = {
         *   People: [
         *     {name: "Smith", fname: "John"},
         *     {name: "Smith", fname: "Eileen"}
         *   ],
         *   Dates: ['2021-08-25', '2021-09-06']
         * };
         * bbn.fn.addInputs(document.getElementById('myform'), o);
         * // Will write at the end of the given form:
         * // <input type="hidden" name="People[0][name]" value="Smith">
         * // <input type="hidden" name="People[0][fname]" value="John">
         * // <input type="hidden" name="People[1][name]" value="Smith">
         * // <input type="hidden" name="People[1][fname]" value="Eileen">
         * // <input type="hidden" name="Dates[0]" value="2021-08-25">
         * // <input type="hidden" name="Dates[1]" value="2021-09-06">
         * ```
         *
         * @param    {HTMLElement} form   The form to which the inputs should be added
         * @param    {Object}      params The data which will be added
         * @param    {String}      prefix The optional object's name of the fields in the form
         * @returns  {undefined}
         */
        var addInputs = function (form, params, prefix) {
            if (params === void 0) { params = null; }
            if (prefix === void 0) { prefix = ''; }
            if (form && form.tagName === 'FORM') {
                var appendToForm_1 = function (name, val) {
                    var input = document.createElement('input');
                    input.setAttribute('type', 'hidden');
                    input.setAttribute('name', name);
                    input.setAttribute('value', val);
                    form.appendChild(input);
                };
                params = JSON.parse(JSON.stringify(params || {}));
                prefix = prefix || '';
                if (params) {
                    (0, iterate_js_5.iterate)(params, function (param, key) {
                        var name = prefix ? "".concat(prefix, "[").concat(key, "]") : key;
                        if (param instanceof Date) {
                            appendToForm_1(name, param.toISOString());
                        }
                        else if (param instanceof Array) {
                            param.forEach(function (e, i) {
                                var tempName = "".concat(name, "[").concat(i, "]");
                                if (typeof e === 'object') {
                                    addInputs(form, e, tempName);
                                }
                                else {
                                    appendToForm_1(tempName, e.toString());
                                }
                            });
                        }
                        else if (typeof param === 'object' && !(param instanceof File)) {
                            addInputs(form, param, name);
                        }
                        else {
                            appendToForm_1(name, param.toString());
                        }
                    });
                }
            }
        };
        exports.addInputs = addInputs;
    });
    define("fn/style/addStyle", ["require", "exports", "fn/type/isObject", "fn/loop/iterate"], function (require, exports, isObject_js_5, iterate_js_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.addStyle = void 0;
        /**
         * @ignore
         * @method   addStyle
         * @todo     Add method description for addStyle
         * @global
         * @memberof bbn.fn
         * @param    {HTMLElement} ele
         * @param    {Object}      o
         * @returns  {*}
         */
        var addStyle = function (ele, o) {
            if ((0, isObject_js_5.isObject)(o)) {
                (0, iterate_js_6.iterate)(o, function (v, k) {
                    ele.style[k] = v;
                });
            }
        };
        exports.addStyle = addStyle;
    });
    define("fn/html/adjustSize", ["require", "exports", "fn/loop/each"], function (require, exports, each_js_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.adjustSize = void 0;
        var adjustSize = function (type, eles) {
            var max = 0, idx;
            (0, each_js_7.each)(eles, function (el) {
                el.style[type] = 'auto';
            });
            (0, each_js_7.each)(eles, function (el, i) {
                var rect = el.getBoundingClientRect(), s = rect[type] % 1 ? rect[type] - (rect[type] % 1) + 1 : rect[type];
                //s = rect[type];
                if (s > max) {
                    max = s;
                    idx = i;
                }
            });
            (0, each_js_7.each)(eles, function (el, i) {
                if (max) {
                    el.style[type] = max + 'px';
                }
            });
        };
        exports.adjustSize = adjustSize;
    });
    define("fn/html/adjustHeight", ["require", "exports", "fn/type/isIterable", "fn/html/adjustSize"], function (require, exports, isIterable_js_3, adjustSize_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.adjustHeight = void 0;
        var adjustHeight = function () {
            var args = arguments;
            if (args.length === 1 && (0, isIterable_js_3.isIterable)(args[0])) {
                args = args[0];
            }
            return (0, adjustSize_js_1.adjustSize)('height', args);
        };
        exports.adjustHeight = adjustHeight;
    });
    define("fn/html/adjustWidth", ["require", "exports", "fn/type/isIterable", "fn/html/adjustSize"], function (require, exports, isIterable_js_4, adjustSize_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.adjustWidth = void 0;
        var adjustWidth = function () {
            var args = arguments;
            if (args.length === 1 && (0, isIterable_js_4.isIterable)(args[0])) {
                args = args[0];
            }
            return (0, adjustSize_js_2.adjustSize)('width', args);
        };
        exports.adjustWidth = adjustWidth;
    });
    define("fn/string/escapeRegExp", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeRegExp = void 0;
        /**
         * Returns a string escaped.
         *
         * To escape the string by reducing the ambiguity between quotation marks and other characters used.
         *
         * @method   escapeRegExp
         * @global
         *
         * @example
         * ```javascript
         * //"this\/is\/a\/test\/string"
         * bbn.fn.escapeRegExp("this/is/a/test/string");
         * ```
         * @memberof bbn.fn
         * @param    {String} str
         * @returns  {String} string with escape
         */
        var escapeRegExp = function (str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        };
        exports.escapeRegExp = escapeRegExp;
    });
    define("fn/string/replaceAll", ["require", "exports", "fn/type/isObject", "fn/string/escapeRegExp"], function (require, exports, isObject_js_6, escapeRegExp_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.replaceAll = void 0;
        /**
         * Looks for and replaces parts of string with what we want.
         *
         * With the first argument you define what to replace,
         * the second argument with what you have to replace instead and the third argument is the string to be replaced.
         *
         * @method   replaceAll
         * @global
         *
         * @example
         * ```javascript
         * bbn.fn.replaceAll('day', 'night', 'Today is a beautiful day');
         * //"Tonight is a beautiful night"
         * ```
         * @memberof bbn.fn
         * @param    {String} find
         * @param    {String} replace
         * @param    {String|RegExp} str
         * @param    {String} flags
         * @returns  {String}
         */
        var replaceAll = function (find, replace, str, flags) {
            if (flags === void 0) { flags = ""; }
            return str
                .toString()
                .replace((0, isObject_js_6.isObject)(find) ? find : new RegExp((0, escapeRegExp_js_1.escapeRegExp)(find), "g" + flags), replace);
        };
        exports.replaceAll = replaceAll;
    });
    define("fn/string/md5", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.md5 = void 0;
        /**
         * Converts and returns the argument passed in a string in md5 format.
         *
         * This is a formatted version of popular md5 implementation
         * Original copyright (c) Paul Johnston & Greg Holt.
         *
         *
         * @method   md5
         * @global
         *
         * @example
         * ```javascript
         * //"486eb65274adb86441072afa1e2289f3"
         * bbn.fn.md5("this is a test string");
         * ```
         *
         * @memberof bbn.fn
         * @param    {Mixed} st
         * @returns  {String} in md5 format
         */
        var md5 = function (st) {
            var hc = "0123456789abcdef";
            function rh(n) {
                var j, s = "";
                for (j = 0; j <= 3; j++)
                    s +=
                        hc.charAt((n >> (j * 8 + 4)) & 0x0f) + hc.charAt((n >> (j * 8)) & 0x0f);
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
    define("fn/ajax/getRequestId", ["require", "exports", "fn/loop/iterate", "fn/string/md5"], function (require, exports, iterate_js_7, md5_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getRequestId = void 0;
        /**
         * Returns a unique ID for a "loader" based on the URL, the data keys and the datatype.
         *
         * The routing functions don't allow to send the same request at the same moment,
         * therefore a unique ID is generated to identify them, based on the URL,
         * the keys of the data sent, and the expected returned data type.
         *
         * @method   getRequestId
         * @global
         *
         * @example
         * ```javascript
         * // The URL is the first part of the key
         * bbn.fn.getRequestId('my/location', {a: 1, b: 2});
         * // my/location:af27f0e81533ae2bae3c25dea67359f6
         * bbn.fn.getRequestId('my/other/location', {a: 1, b: 2});
         * // my/other/location:af27f0e81533ae2bae3c25dea67359f6
         * ```
         *
         * @example
         * ```javascript
         * // A change of value will not change the requestId
         * bbn.fn.getRequestId('my/location', {a: 1, b: 3});
         * // my/location:af27f0e81533ae2bae3c25dea67359f6
         * // A change of key will
         * bbn.fn.getRequestId('my/location', {a: 1, c: 3});
         * // my/location:fde97ca7c6c998c911f4ab481a136d5f
         * ```
         *
         * @example
         * ```javascript
         * // Same with nested object
         * bbn.fn.getRequestId('my/location', {data: {a: 1, b: 3}});
         * // my/location:a7a58435275054106c4e4c9fb0cea5e5
         * bbn.fn.getRequestId('my/location', {data: {a: 1, b: 2}});
         * // my/location:a7a58435275054106c4e4c9fb0cea5e5
         * bbn.fn.getRequestId('my/location', {data: {a: 1, c: 3}});
         * // my/location:730da481e30d421afbadf1f1282dabb7
         * ```
         *
         * @memberof bbn.fn
         *
         * @param    {String} url      The URL used by the request
         * @param    {Object} data     The data sent to the URL
         * @param    {String} datatype The type of data requested (JSON by default)
         *
         * @returns  {String} The unique ID
         */
        var getRequestId = function (url, data, datatype) {
            var d = {};
            if (data) {
                (0, iterate_js_7.iterate)(data, function (a, n) {
                    if (n.indexOf('_bbn') === -1) {
                        d[n] = a;
                    }
                });
            }
            return url + ':' + (0, md5_js_1.md5)((datatype || 'json') + JSON.stringify(d));
        };
        exports.getRequestId = getRequestId;
    });
    define("fn/object/extend", ["require", "exports", "fn/loop/iterate", "fn/type/isArray", "fn/loop/each", "fn/type/isObject"], function (require, exports, iterate_js_8, isArray_js_6, each_js_8, isObject_js_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.extend = void 0;
        /**
         * Merges the contents of two or more objects together into the first object.
         *
         * A boolean true argument can be done to operate a deep extend. In this case,
         * the content of properties or subproperties arrays and objects will also be merged.
         *
         * @method   extend
         * @global
         * @example
         * ```javascript
         * bbn.fn.extend(
         *   {prop1: 10, prop2: 20},
         *   {prop1: 11, prop3: 21},
         *   {prop2: 22, prop4: false},
         *   {prop5: false, prop3: 45}
         * );
         * // {prop1: 11, prop2: 22, prop3: 45, prop4: false, prop5: false}
         * ```
         * @example
         * ```javascript
         * bbn.fn.extend(
         *   {
         *     prop1: [3, 5, 6],
         *     prop2: {
         *       subprop1: 87,
         *       subprop2: 100
         *     }
         *   }, {
         *     prop1: 11,
         *     prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
         *   }, {
         *     prop2: {
         *       subprop1: 90,
         *       subprop3: 25
         *     },
         *     prop4: false
         *   }, {
         *     prop5: false,
         *     prop3: [8, 45, {anotherProperty: false, andAnother: true}]
         *   }
         * );
         * // {
         * //   prop1: 11,
         * //   prop2: {subprop1: 90, subprop3: 25},
         * //   prop3: [8, 45, {anotherProperty: false, andAnother: true}],
         * //   prop4: false,
         * //   prop5: false
         * // }
         * ```
         * @example
         * ```javascript
         * // Deep
         * bbn.fn.extend(
         *   true,
         *   {
         *     prop1: [3, 5, 6],
         *     prop2: {
         *       subprop1: 87,
         *       subprop2: 100
         *     }
         *   }, {
         *     prop1: 11,
         *     prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
         *   }, {
         *     prop2: {
         *       subprop1: 90,
         *       subprop3: 25
         *     },
         *     prop4: false
         *   }, {
         *     prop5: false,
         *     prop3: [8, 45, {anotherProperty: false, andAnother: true}]
         *   }
         * );
         * // {
         * //   prop1: 11,
         * //   prop2: {subprop1: 90, subprop3: 25},
         * //   prop3: [8, 45, {aProperty: 1, anotherProperty: false, andAnother: true}, 26],
         * //   prop4: false,
         * //   prop5: false
         * // }
         * ```
         * @memberof bbn.fn
         * @returns  {Object} The first object argument, merged with the other objects given
         */
        var extend = function () {
            var originalArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                originalArgs[_i] = arguments[_i];
            }
            var deep = false;
            var args = [];
            for (var i = 0; i < originalArgs.length; i++) {
                if (originalArgs[i] === true) {
                    deep = true;
                }
                else if (!originalArgs[i]) {
                    continue;
                }
                else if (typeof originalArgs[i] !== "object") {
                    throw new Error(bbn._("Error in extend: all arguments should be object, you have given ") + typeof originalArgs[i]);
                }
                else {
                    args.push(originalArgs[i]);
                }
            }
            if (!args.length) {
                throw new Error("No argument given");
            }
            var out = args[0];
            for (var i = 1; i < args.length; i++) {
                (0, iterate_js_8.iterate)(args[i], function (a, key) {
                    if (deep) {
                        if ((0, isArray_js_6.isArray)(a)) {
                            out[key] = (0, isArray_js_6.isArray)(out[key]) ? out[key] : [];
                            (0, each_js_8.each)(a, function (b, i) {
                                if (b && typeof b === "object") {
                                    var tmp = out[key][i];
                                    if ((0, isArray_js_6.isArray)(b)) {
                                        if (!(0, isArray_js_6.isArray)(tmp)) {
                                            tmp = [];
                                        }
                                    }
                                    else if (!(0, isObject_js_7.isObject)(tmp)) {
                                        tmp = {};
                                    }
                                    out[key][i] = extend(true, tmp, b);
                                }
                                else {
                                    out[key][i] = b;
                                }
                            });
                        }
                        else if ((0, isObject_js_7.isObject)(a)) {
                            out[key] = extend(true, out[key] && typeof out[key] === "object"
                                ? out[key]
                                : Object.create(Object.getPrototypeOf(a)), a);
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
                    Object.defineProperty(out, "__bbnNoData", {
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
    define("fn/ajax/ajax", ["require", "exports", "fn/type/isObject", "fn/string/replaceAll", "fn/ajax/getRequestId", "fn/ajax/getLoader", "fn/object/extend", "fn/object/numProperties", "fn/ajax/_deleteLoader", "fn/type/isFunction", "fn/ajax/_addLoader"], function (require, exports, isObject_js_8, replaceAll_js_1, getRequestId_js_1, getLoader_js_2, extend_js_1, numProperties_js_4, _deleteLoader_js_1, isFunction_js_3, _addLoader_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.ajax = void 0;
        /**
         * Creates an XHR object and returns the Promise.
         *
         * Checks the URL, makes an ID, creates a loader, sets the general callbacks,
         * makes a POST if data is given a GET otherwise (GET data should be added
         * directly in the URL), and returns the Promise.
         *
         * @method   ajax
         * @global
         * @memberof bbn.fn
         * @example
         * ```javascript
         * // Promise
         * bbn.fn.ajax(
         *   'my/location',
         *   'json',
         *   {id: 7},
         *   d => {
         *     console.log(d);
         *     alert("Success!");
         *   },
         *   err => {
         *     console.log(err);
         *     alert("Failure!");
         *   },
         *   () => {
         *     alert("Request aborted!");
         *   }
         * )
         * ```
         *
         * @example
         * ```javascript
         * // Promise
         * bbn.fn.ajax('my/location')
         *   .then(
         *     d => {
         *       console.log(d);
         *       alert("Success!");
         *     }
         *   )
         *   .catch(
         *     err => {
         *     }
         *   )
         * ```
         *
         * @param    {String}   url      The URL to be requested by XHR
         * @param    {String}   datatype The type of data expected
         * @param    {Object}   data     The data to send through POST
         * @param    {Function} success  The function to execute if the request goes well (200)
         * @param    {Function} failure  The function to execute if the request goes bad
         * @param    {Function} abort    The function to execute if the request is aborted
         *
         * @returns  {Promise}  The Promise created by the generated XHR.
         */
        var ajax = function (url, datatype, data, success, failure, abort) {
            if (datatype === void 0) { datatype = null; }
            if (data === void 0) { data = null; }
            if (success === void 0) { success = null; }
            if (failure === void 0) { failure = null; }
            if (abort === void 0) { abort = null; }
            if (arguments.length === 1 && url && typeof url === "object" && url.url) {
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
            if (url && typeof url === "string") {
                if (url.indexOf("://") === -1) {
                    // Prevent protocol mismatch by Axios
                    url = (0, replaceAll_js_1.replaceAll)("//", "/", url);
                }
                if (!datatype) {
                    datatype = "json";
                }
                var requestId_1 = (0, getRequestId_js_1.getRequestId)(url, data, datatype);
                var loaderObj = (0, getLoader_js_2.getLoader)(requestId_1);
                //log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
                if (loaderObj === null || loaderObj === void 0 ? void 0 : loaderObj.loader) {
                    return loaderObj.loader;
                }
                if (bbn.env.token) {
                    (0, extend_js_1.extend)(data || {}, { _bbn_token: bbn.env.token });
                }
                var cancelToken = axios.CancelToken;
                var source = cancelToken.source();
                var options = {
                    responseType: datatype,
                    cancelToken: source.token,
                };
                if (datatype === "text") {
                    options['headers'] = {
                        accept: "text/javascript",
                        "Content-Type": "text/javascript",
                    };
                }
                var args = [url];
                if ((0, isObject_js_8.isObject)(data) && (0, numProperties_js_4.numProperties)(data) > 0) {
                    args.push(data);
                }
                args.push(options);
                var axiosMethod = args.length === 2 ? "get" : "post";
                var loader_1 = axios[axiosMethod]
                    .apply(null, args)
                    .then(function (res) {
                    (0, _deleteLoader_js_1._deleteLoader)(requestId_1, res);
                    bbn.fn.defaultEndLoadingFunction(url, tst_1, data, res);
                    switch (res.status) {
                        case 200:
                            if ((0, isFunction_js_3.isFunction)(success)) {
                                success(res.data, res.headers);
                            }
                            break;
                        default:
                            bbn.fn.defaultAjaxErrorFunction(loader_1, res);
                    }
                    return res;
                })
                    .catch(function (err) {
                    var isAbort = axios.isCancel(err);
                    (0, _deleteLoader_js_1._deleteLoader)(requestId_1, err.message || err.response.data, isAbort);
                    bbn.fn.defaultEndLoadingFunction(url, tst_1, data, err);
                    if (isAbort) {
                        var ok = 1;
                        if ((0, isFunction_js_3.isFunction)(abort)) {
                            ok = abort(err.message, url);
                        }
                        if (ok) {
                            bbn.fn.defaultAjaxAbortFunction(err.message, url);
                        }
                    }
                    else {
                        var ok = 1;
                        if ((0, isFunction_js_3.isFunction)(failure)) {
                            ok = failure(err.request, err);
                        }
                        if (ok) {
                            bbn.fn.defaultAjaxErrorFunction(err.request, err.response ? err.response.data : "", err.response ? err.response.status : err);
                        }
                    }
                });
                var tst_1 = (0, _addLoader_js_1._addLoader)(requestId_1, loader_1, source);
                bbn.fn.defaultStartLoadingFunction(url, tst_1, data, requestId_1);
                return loader_1;
            }
        };
        exports.ajax = ajax;
    });
    define("fn/misc/analyzeFunction", ["require", "exports", "fn/string/md5", "fn/browser/log"], function (require, exports, md5_js_2, log_js_8) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.analyzeFunction = void 0;
        /**
         * Analyzes the given function and extracts details about its structure.
         *
         * @function analyzeFunction
         * @param {Function} fn - The function to analyze.
         * @returns {Object} An object containing details about the function.
         * @throws {Error} When unexpected syntax is encountered while parsing.
         */
        var analyzeFunction = function (fn) {
            var all = typeof fn === "function" ? fn.toString() : fn;
            if (typeof all !== "string") {
                throw Error("Unexpected type " + typeof fn + " while parsing function");
            }
            (0, log_js_8.log)("INSIDE ANALYZE FUNCTION", all);
            var exp = "";
            var isArrow = false;
            var isAsync = false;
            var hasFunction = false;
            var name = "";
            var parOpened = 0;
            var parClosed = 0;
            var args = [];
            var currentArg = {};
            var body;
            var currentQuote = "";
            var escapable = ['"', "'", "`"];
            var isEscaped = false;
            var settingDefault = false;
            var isComment = false;
            var isCommentLine = false;
            var isDestructuring = false;
            for (var i = 0; i < all.length; i++) {
                // Handle string literals
                if (!isComment && all[i] === "/" && all[i + 1] === "*") {
                    isComment = true;
                    exp = "";
                }
                else if (all[i] === "*" && all[i + 1] === "/") {
                    isComment = false;
                }
                else if (!isCommentLine && all[i] === "/" && all[i + 1] === "/") {
                    isCommentLine = true;
                    exp = "";
                }
                else if (all[i] === "\n") {
                    isCommentLine = false;
                }
                else if (isComment || isCommentLine) {
                    continue;
                }
                else if (all[i] === currentQuote && !isEscaped && currentQuote) {
                    currentQuote = "";
                    exp += all[i];
                }
                else if (currentQuote) {
                    isEscaped = all[i] === "\\" && !isEscaped;
                    exp += all[i];
                }
                else if (escapable.includes(all[i]) && !isEscaped) {
                    currentQuote = all[i];
                    exp += all[i];
                }
                else if (all[i] === "(") {
                    parOpened++;
                    if (exp.trim() !== "") {
                        if (exp.trim() === "function") {
                            hasFunction = true;
                        }
                        else if (exp.trim() !== "async") {
                            name = exp.trim();
                        }
                        exp = "";
                    }
                }
                else if (all[i] === ")") {
                    if (parOpened === parClosed + 1) {
                        if (settingDefault) {
                            currentArg["default"] = exp.trim();
                            settingDefault = false;
                        }
                        else if (exp) {
                            currentArg["name"] = exp.trim();
                        }
                        if (currentArg["name"] || currentArg["default"]) {
                            args.push(currentArg);
                            currentArg = {};
                        }
                        exp = "";
                    }
                    parClosed++;
                }
                else if (all[i] === "=" && all[i + 1] === ">") {
                    if (exp.trim() !== "" && parOpened === parClosed) {
                        currentArg["name"] = exp.trim();
                        args.push(currentArg);
                        currentArg = {};
                        exp = "";
                    }
                    isArrow = true;
                    i++;
                    continue;
                }
                else if (all[i] === "=" && parOpened > parClosed && !settingDefault) {
                    currentArg["name"] = exp.trim();
                    exp = "";
                    settingDefault = true;
                }
                else if (all[i] === ",") {
                    if (isDestructuring) {
                        exp += all[i];
                    }
                    else if (parOpened > parClosed) {
                        if (settingDefault) {
                            currentArg["default"] = exp.trim();
                            settingDefault = false;
                        }
                        else if (exp) {
                            currentArg["name"] = exp.trim();
                        }
                        if (currentArg["name"] || currentArg["default"]) {
                            args.push(currentArg);
                            currentArg = {};
                        }
                        exp = "";
                    }
                    else {
                        throw Error("Unexpected ',' while parsing function");
                    }
                }
                else if (all[i] === "{" || all[i] === "}") {
                    if (parOpened === parClosed) {
                        body = all.substring(i).trim();
                        break;
                    }
                    else {
                        if (parOpened > parClosed) {
                            if (all[i] === "{" && !isDestructuring) {
                                isDestructuring = true;
                                exp = all[i];
                            }
                            else if (all[i] === "}" && isDestructuring) {
                                isDestructuring = false;
                                exp += all[i];
                            }
                        }
                        else {
                            exp = "";
                        }
                    }
                }
                else if (isArrow) {
                    body = all.substring(all.indexOf("=>") + 2).trim();
                    break;
                }
                else if (all[i] === " ") {
                    if (exp.trim() !== "") {
                        if (exp.trim() === "async") {
                            isAsync = true;
                        }
                        exp = "";
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
                    throw Error("Unexpected end of function while parsing function");
                }
            }
            var argString = args
                .map(function (arg) { return arg.name + (arg.default ? " = " + arg.default : ""); })
                .join(", ");
            var hash = (0, md5_js_2.md5)(body + (name ? "-" + name : "") + (argString ? "-" + argString : ""));
            return {
                body: body,
                args: args,
                argString: argString,
                isArrow: isArrow,
                hasFunction: hasFunction,
                name: name,
                isAsync: isAsync,
                hash: hash,
            };
        };
        exports.analyzeFunction = analyzeFunction;
    });
    define("fn/style/animateCss", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.animateCss = void 0;
        /**
         * @ignore
         * @method   animateCss
         * @todo     Add method description for animateCss
         * @global
         * @memberof bbn.fn
         * @param    {HTMLElement} ele
         * @param    {String}      animationName
         * @param    {Function}    callback
         * @returns  {*}
         */
        var animateCss = function (ele, animationName, callback) {
            var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            /*$(ele).addClass('animated ' + animationName).one(animationEnd, function(){
                  if ( typeof callback == 'function' ){ // make sure the callback is a function
                    callback.call(this); // brings the scope to the callback
                  }
                  $(this).removeClass('animated ' + animationName);
                })*/
            ele.classList.add("animated");
            ele.classList.add(animationName);
            ele.addEventListener(animationEnd, function animationEndHandler(e) {
                e.target.removeEventListener(e.type, animationEndHandler);
                if (typeof callback == "function") {
                    // make sure the callback is a function
                    callback.call(this); // brings the scope to the callback
                }
                e.target.classList.remove(animationName);
            });
        };
        exports.animateCss = animateCss;
    });
    define("fn/convert/arrayBuffer2String", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.arrayBuffer2String = void 0;
        var arrayBuffer2String = function (buf) {
            return String.fromCharCode.apply(null, new Uint16Array(buf));
        };
        exports.arrayBuffer2String = arrayBuffer2String;
    });
    define("fn/object/arrayFromProp", ["require", "exports", "fn/loop/each", "fn/object/getProperty"], function (require, exports, each_js_9, getProperty_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.arrayFromProp = void 0;
        /**
         * Creates and returns a new array made of the given property's values from the given array of objects.
         *
         * The returned array will always have the same length of the given array, even if the property is not found.
         *
         * @method   arrayFromProp
         * @global
         * @example
         * ```javascript
         * bbn.fn.arrayFromProp([
         *   {movie: "Brazil", year: 1985},
         *   {movie: "Donnie Darko", year: 2001},
         *   {movie: "Barry Lindon", year: 1976}
         * ], "year");
         * // [1985, 2001, 1976]
         * ```
         * @example
         * ```javascript
         * bbn.fn.arrayFromProp([
         *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
         *   {pupil: "Jacques Rivette"},
         *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}},
         *   {pupil: "Nicole Garcia", grade: {year: "B", month: "B"}}
         * ], "grade.month");
         * // ["A", undefined, "D", "B"]
         * ```
         * @memberof bbn.fn
         * @param    {Array}  arr
         * @param    {String} prop
         * @returns  {Array}  The new array
         */
        var arrayFromProp = function (arr, prop) {
            var r = [];
            (0, each_js_9.each)(arr, function (a, i) {
                r.push((0, getProperty_js_3.getProperty)(a, prop));
            });
            return r;
        };
        exports.arrayFromProp = arrayFromProp;
    });
    define("fn/object/autoExtend", ["require", "exports", "fn/object/extend"], function (require, exports, extend_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.autoExtend = void 0;
        /**
         * Extends the bbn object by passing the namespace and the object it will merge with.
         *
         * This function is a self-centric shortcut for adding functions or proerties
         * to the bbn object itself.
         *
         * @method   autoExtend
         * @global
         * @example
         * ```javascript
         * bbn.fn.autoExtend("fn", {myOwnFunction: () => "Result of my own function"});
         * bbn.fn.myOwnFunction();
         * // Result of my own function
         * ```
         * @example
         * ```javascript
         * bbn.fn.autoExtend("env", {serverLanguage: "php"});
         * bbn.env.sercerLanguage
         * // php
         * ```
         * @example
         * ```javascript
         * bbn.fn.autoExtend("myProject", {name: "My Project"});
         * bbn.myProject.name
         * // Project
         * ```
         * @memberof bbn.fn
         * @param    {String}    namespace The bbn property, existing or not, in which the object will be merged
         * @param    {Object}    obj       The object to merge
         * @returns  {undefined} No return value
         */
        var autoExtend = function (namespace, obj) {
            if (!bbn[namespace]) {
                bbn[namespace] = {};
                //$.extend(true, bbn[namespace], obj);
                (0, extend_js_2.extend)(bbn[namespace], obj);
            }
            else {
                // $.extend(true, bbn[namespace], obj);
                (0, extend_js_2.extend)(bbn[namespace], obj);
            }
        };
        exports.autoExtend = autoExtend;
    });
    define("fn/string/baseName", ["require", "exports", "fn/type/isString", "fn/string/substr"], function (require, exports, isString_js_5, substr_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.baseName = void 0;
        /**
         * Returns the name of the element indicated by path given to it as an argument.
         *
         * @method   baseName
         * @global
         *
         * @example
         * ```javascript
         * // "file.png"
         * bbn.fn.baseName('folder/other_folder/file.png');
         * ```
         * @example
         * ```javascript
         * // "file"
         * bbn.fn.baseName('folder/other_folder/file.png', '.png');
         * ```
         *
         * @memberof bbn.fn
         * @param    {String} path   The path from which the basename must be extracted
         * @param    {String} suffix An optional suffix that will be removed from the basename
         * @returns  {String} The basename of path
         */
        var baseName = function (path, suffix) {
            if (path && (0, isString_js_5.isString)(path)) {
                var bits = path.split("/");
                var res = bits.pop();
                if (!suffix) {
                    return res;
                }
                var len = suffix.length;
                if (res && (0, substr_js_3.substr)(res, -len) === suffix) {
                    return (0, substr_js_3.substr)(res, 0, res.length - len);
                }
            }
            return "";
        };
        exports.baseName = baseName;
    });
    define("fn/string/br2nl", ["require", "exports", "fn/string/replaceAll"], function (require, exports, replaceAll_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.br2nl = void 0;
        /**
         * Replaces the html <br> tag with new line characters '\ n' if present in the string.
         *
         * @method   br2nl
         * @global
         *
         * @example
         * ```javascript
         * //"hello
         * //world!"
         * bbn.fn.br2nl('hello <br> world!')
         * ```
         *
         * @memberof bbn.fn
         * @param    string st
         * @returns  {String}
         */
        var br2nl = function (st) {
            return (0, replaceAll_js_2.replaceAll)("<br />", "\n", (0, replaceAll_js_2.replaceAll)("<br/>", "\n", (0, replaceAll_js_2.replaceAll)("<br>", "\n", st)));
        };
        exports.br2nl = br2nl;
    });
    define("fn/datetime/date", ["require", "exports", "fn/type/isNumber", "fn/string/substr", "fn/type/isDate"], function (require, exports, isNumber_js_3, substr_js_4, isDate_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.date = void 0;
        /**
         * Returns a date object from the given argument.
         *
         * @method   date
         * @global
         *
         * @example
         * ``` javascript
         * //Mon Feb 11 2019 12:00:00 GMT+0100 (Central European Standard Time)
         * bbn.fn.date('2019/02/11')
         * ```
         *
         * @memberof bbn.fn
         * @param    {String|Number} v
         * @returns  {date}
         */
        var date = function (v) {
            var d = false, t = typeof v;
            if (v === undefined) {
                return new Date();
            }
            if (t === 'number' || ((0, isNumber_js_3.isNumber)(v) && v !== '')) {
                if (v < 10000000000) {
                    v = v * 1000;
                }
                return new Date(v);
            }
            if (t === 'string') {
                if (v.length === 10) {
                    return new Date(parseInt((0, substr_js_4.substr)(v, 0, 4)), parseInt((0, substr_js_4.substr)(v, 5, 2)) - 1, parseInt((0, substr_js_4.substr)(v, 8, 2)), 12);
                }
                else if (v.length === 19) {
                    return new Date(parseInt((0, substr_js_4.substr)(v, 0, 4)), parseInt((0, substr_js_4.substr)(v, 5, 2)) - 1, parseInt((0, substr_js_4.substr)(v, 8, 2)), parseInt((0, substr_js_4.substr)(v, 11, 2)), parseInt((0, substr_js_4.substr)(v, 14, 2)), parseInt((0, substr_js_4.substr)(v, 17, 2)));
                }
            }
            else if ((0, isDate_js_2.isDate)(v)) {
                return v;
            }
            return d;
        };
        exports.date = date;
    });
    define("fn/datetime/fdatetime", ["require", "exports", "fn/datetime/date", "fn/type/isDate", "fn/type/isString"], function (require, exports, date_js_1, isDate_js_3, isString_js_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fdatetime = void 0;
        /**
         * @method   fdatetime
         * @todo     Add method description for fdatetime
         * @global
         * @memberof bbn.fn
         * @returns  {*}
         */
        var fdatetime = function (d, wrong_result) {
            if (wrong_result === void 0) { wrong_result = false; }
            var r = (0, date_js_1.date)(d);
            if (!(0, isDate_js_3.isDate)(r)) {
                return wrong_result && (0, isString_js_6.isString)(wrong_result) ? wrong_result : '';
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
    define("fn/datetime/fdate", ["require", "exports", "fn/datetime/fdatetime", "fn/datetime/date", "fn/type/isDate", "fn/type/isString"], function (require, exports, fdatetime_js_1, date_js_2, isDate_js_4, isString_js_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fdate = void 0;
        /**
         * @method   fdate
         * @todo     Add method description for fdate
         * @global
         * @memberof bbn.fn
         * @param    {String|Date} d
         * @param    {String}      wrong_result
         * @returns
         */
        var fdate = function (d, wrong_result) {
            if (wrong_result === void 0) { wrong_result = false; }
            // Retro compatibility
            if (wrong_result === true) {
                return (0, fdatetime_js_1.fdatetime)(d);
            }
            var r = (0, date_js_2.date)(d);
            if (!(0, isDate_js_4.isDate)(r)) {
                return wrong_result && (0, isString_js_7.isString)(wrong_result) ? wrong_result : '';
            }
            if (undefined !== dayjs) {
                return dayjs(r).format('L');
            }
            return r.toLocaleDateString();
        };
        exports.fdate = fdate;
    });
    define("fn/datetime/calendar", ["require", "exports", "dayjs", "dayjs/plugin/calendar.js", "fn/datetime/fdate", "fn/datetime/date", "fn/type/isDate", "fn/type/isString"], function (require, exports, dayjs_1, calendar_js_1, fdate_js_1, date_js_3, isDate_js_5, isString_js_8) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.calendar = void 0;
        var bbn = {
            _: function (st) { return st; }
        };
        dayjs_1.default.extend(calendar_js_1.default);
        /**
         * Returns a date relative to the current day.
         *
         * @method   calendar
         * @global
         *
         * @example
         * ``` javascript
         * //"2020-04-16 16:15:23"
         * let date = new Date();
         * bbn.fn.dateSQL(date,false);
         * ```
         *
         * @memberof bbn.fn
         * @param    {Date|String} d
         * @param    {String | Boolean} wrong_result Whether or not include the time in the date
         * @returns  {String}
         */
        var calendar = function (d, wrong_result) {
            if (wrong_result === void 0) { wrong_result = false; }
            if (undefined === dayjs_1.default) {
                return (0, fdate_js_1.fdate)(d, wrong_result);
            }
            var r = (0, date_js_3.date)(d);
            if (!(0, isDate_js_5.isDate)(r)) {
                return wrong_result && (0, isString_js_8.isString)(wrong_result) ? wrong_result : '';
            }
            return (0, dayjs_1.default)(r).calendar(null, {
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
    define("fn/ajax/callback", ["require", "exports", "fn/browser/error", "fn/type/isFunction", "fn/browser/log"], function (require, exports, error_js_2, isFunction_js_4, log_js_9) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.callback = void 0;
        /**
         * Executes a serie of predefined actions once an Ajax request has been done.
         *
         * Used to treat all the requests functions results, it expects at least url and res to be defined;
         * The following properties from the object res have direct effects:
         * - __url__ {String}: if not given it will be automatically defined by the url parameter;
         *   __the given URL will be passed to location.href (without reloading)__
         * - __prescript__ {String}: if defined it will attempt to evaluate the code contained in the property
         * - __content__ {String}: if defined and ele is defined too, the string will be inserted as content in the element
         * - __script__ {String}: if defined it will be evaluated, executed, and its result will be returned
         * - __data__ {Object}:
         * - __postscript__ {String}: if defined it will be evaluated and executed
         * - __error__ {String}: if defined it will be trigger bbn.fn.defaultAlertFunction
         *
         * If fn is defined it will be executed after prescript, otherwise it will be bbn.fn.defaultLinkFunction.
         *
         * The rest of the function comes executed if either of these results is not empty.
         *
         * If fn2 is defined it will be executed after script, otherwise it will be bbn.fn.defaultPostLinkFunction.
         *
         * Although not private this function should only be used internally.
         *
         * @method   callback
         * @todo     Add method description for callback
         * @global
         * @memberof bbn.fn
         *
         * @param    {String}      url The URL that has been called
         * @param    {Object}      res The object returned by the request
         * @param    {Function}    fn  A first callback function to execute
         * @param    {Function}    fn2 A second callback function to execute
         * @param    {HTMLElement} ele A DOM element where the content will be inserted
         *
         * @returns  {*} The result of the main callback function: res.script, fn, or bbn.fn.defaultLinkFunction
         */
        var callback = function (url, res, fn, fn2, ele) {
            if (res === void 0) { res = null; }
            if (fn === void 0) { fn = null; }
            if (fn2 === void 0) { fn2 = null; }
            if (ele === void 0) { ele = null; }
            var tmp = false;
            if (res) {
                tmp = true;
                var t = typeof res;
                var isObj = t.toLowerCase() === 'object';
                var errTitle = void 0;
                if (isObj && res.prescript) {
                    /* var ok can be changed to false in prescript execution */
                    try {
                        eval(res.prescript);
                    }
                    catch (e) {
                        (0, error_js_2.error)(e.message || '');
                    }
                }
                if (isObj && res.url === undefined) {
                    res.url = url;
                }
                /* Case where a callback is defined */
                if (fn && (0, isFunction_js_4.isFunction)(fn)) {
                    tmp = fn(res, ele);
                }
                else {
                    tmp = bbn.fn.defaultLinkFunction(res, ele);
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
                        tmp = (function (data, ele) {
                            var r = null;
                            try {
                                r = eval(res.script);
                                if ((0, isFunction_js_4.isFunction)(r)) {
                                    r = r(data, ele);
                                }
                            }
                            catch (e) {
                                (0, log_js_9.log)(e, res);
                                (0, error_js_2.error)((0, isFunction_js_4.isFunction)(e.getMessage) ? e.getMessage() : null);
                            }
                            return r;
                        })(res.data ? res.data : {}, ele ? ele : false);
                    }
                }
                /* Case where a callback is defined */
                if (tmp && fn2 && (0, isFunction_js_4.isFunction)(fn2)) {
                    fn2(res);
                }
                else if (isObj && bbn.fn.defaultPostLinkFunction) {
                    bbn.fn.defaultPostLinkFunction(res, ele);
                }
                if (tmp && isObj && res.postscript) {
                    eval(res.postscript);
                }
                if (isObj && res.error) {
                    errTitle = res.errorTitle || bbn.lng.server_response;
                    bbn.fn.defaultAlertFunction(res.error, errTitle);
                }
            }
            else {
                bbn.fn.defaultAlertFunction(bbn.lng.errorText, bbn.lng.error);
            }
            return tmp;
        };
        exports.callback = callback;
    });
    define("fn/string/camelize", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.camelize = void 0;
        /**
         * Returns the string passed as an argument in camelize mode.
         *
         * A string can be separated for example by a underscore, a dash or space;
         * so the camelize function will automatically convert them to a single string.
         *
         * @method   camelize
         * @global
         *
         * @example
         * ```javascript
         * //"thisIsATest"
         * bbn.fn.camelize("this_is-a test");
         * ```
         * @memberof bbn.fn
         * @param    {String} str
         * @returns  {String}
         */
        var camelize = function (str) {
            return str.replace(/^([A-Z])|[\s-](\w)/g, function (match, p1, p2, offset) {
                if (p2) {
                    return p2.toUpperCase();
                }
                return p1.toLowerCase();
            });
        };
        exports.camelize = camelize;
    });
    define("fn/string/camelToCss", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.camelToCss = void 0;
        /**
         * Returns the string passed as an argument in camelize mode for css.
         *
         * @method   camelToCss
         * @global
         *
         * @example
         * ```javascript
         * //"this-is-a-test"
         * bbn.fn.camelToCss("thisIsATest");
         * ```
         *
         * @memberof bbn.fn
         * @param   {String} str
         * @returns {String}
         */
        var camelToCss = function (str) {
            return str
                .replace(/([A-Z])/g, function (st) {
                return "-" + st.toLowerCase();
            })
                .replace("/^./", function (st) {
                return st.toLowerCase();
            });
        };
        exports.camelToCss = camelToCss;
    });
    define("fn/convert/canvasToImage", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.canvasToImage = void 0;
        /**
         * Returns a canvas in a HTML element img
         * @method   canvasToImage
         * @global
         * ``` javascript
         * //<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAgCAYAAABO6BuSAAAUzUlEQVRYRz2ZWXBc95Xef/f27Xtv7w000AsaADdwh0iKlETRtrbYpi3ZsZNUJaOZcs2MPQ95SSaVrSqVqrykUqmkKp4lNfMwM/Ikk1lijxyrrLEkW5QtS6LMVQt3guAGEGiggUbv611T54+xu6rJJtG493/O+b7vfOdc7RuxUmhGoxiageYF6B5E0dFCndD30cKAqGXg+z66pWOnEnRHPYpTBV7+1m+hj2X5P//7L+jeqRBrjUj1QoqRNLrvE8XCwyCMRhgRMHJHRAiIYxJDJ4K8Qhz5GWBkEhC3WFlbYVdhGqfeJuVHsQPUdzU0PM3CsyJ4tklogE2A6zpomkY0ZhOJ6nhaSBjRiVombuCqu/zypf3PL/yTMBKJoPsa/sjBH3rgBwQjF9d16TRbGJbBYNij2WsT6iFDd8gLp7/Ar3/zN/GSMVpbLb73R6/QWVylGMQY1hpMmuOMHBcHjT4OHpCIJcjEEliBRtAf4DsOqWSGdr/HyAwZRaA56hOPx0noUZIYxAYhtgemrxNqOkHE+FXAkgVTCwlch1CPqMJEDANfRwVsmFGCwCMMQ/UOggDtR//6P4a6rqP7EDgumgdaCHg+nuOqyvphQK/XoTPsEUvY1DsNTn/5y+w8uAd9PKO+f/uDy7z//TcZrdSwHQ2n45BIp3ElYF8C1ojqEXAc/N6QGBFSsTgjb8Sm28C0UoxPFbDTGY7Mz3Pr8qe0KxtMECPmhBiehh6CF4ngRyO4UR1NA9330AMfLRJVAUuQEqwe3f4ssW0H620H/Np/+E+hwEEPQgIvwAx1LIE4xt9nRyMMfQICvMAlOZaiUq3w+S9+ga1+m5nD++i02+QzBRZ++iFnX38bYwROb0TUjrHV6+GGPm4YbCfS8dAdh1hgYBkRuqMBVirGrkP7OXj0KOUds8QnClx6/U0+fPMM8UFIwgXLEwpohJoEbBAYusJ5OmKhE4D8qQUEoYaPJMBAi0DMToAWCEkVqrXv/5f/HIZBgDdycEceJjp21CSiRQh9D0KNqGmgR3Vanaa6SavT4uXf+HXabp9qr0EymSQVmhST41z78BKfXviUfL5IbWuLmX1zdAd9esOBuu5kKosVQm2pwtLSQ1zdZ+7wQeYOHSBXKJJIJakuV1i+vcjP/t8bUOuRcMB2NSIBBBoEuo6no3ib0AzMiIFhmEQimqq0YUYwTVv9WxKhS24ExbqO9vZ3/vhXAXuOCI1U2EYHfNdTMBTOur5DvVUnYuhKGL74pdMMQ5fYWBJDkrFeRxv6dDebvP3jM3z80RXFpcT4OC4BumEwOZZlZ2GKQnacWKDjuyP2zB8gVyqgm1Fc31fJ21qvkcLi0jvv0bhbwR4FRPoefn/E0BkxkLfr4PshfndEzDAxDEFkgE+oPkej23CWZAiktVBTXNXO/fCvBGiEfoAWaOoLZsRUwY5GI9zhSAmWF3pKZS0rSiwZozhVUhCPxqNAQC41xvK9hwollco6r73+JnrMZBh4dIcDBSdLbt4dYnge+6d3Mj9/iGe++CxO4NF3XFw/JJMZI5fIovVd7l25QT6awRz66AMfdzBkNBhuB+06eJ5HMPQx9CiO49BsNmk3mgyHQ/UzeacSSXwRz6HLyBmgXfjxdxWHJQMiChHNUH8PekP6vY66kG2bZLMZVeXBaEgqlSCejpPPT7CyusRseUrdtFarce4XF1l8+JBWr8+Z994lm5+gVt/Ctm1mSmVioQ6DIY8fOMwLzz9DOpdR7SU7llO867UH7JiaZfHGAr2NJtlIDNuPIJgT9ClYahqBgiuM+h521FKf+/2+SoigU4mVD51Oh2F/QLfVpdtuoV1977VQSi6V6Xe6DPtD1ZaEE9GIQSqVYqu+iWWZmKYhlFZipkU1ds6WWVpcIJtJEYsnGToe12/eYml1lbfefYfKxiaT5RJ3794nk0kxv28fq/cesnuqzKkTT1IuFnj+hc8qfnt+oEROojcjUT4+9zFxw8bWTEbtHk5/SMKyFVRFQwS6k/kCth0nYpjYpqUq22q0MXSdRCwOfkjMklRp+I7PcNRHu3X270LJQrvdVYFKr5Q+GCGiILGy/IioGaFQyBONRhgMBmzUqgShx7HHDnPrysdkUkl27Znj+u0F7j5cYml1hffPn1OGQoLodLt02k12l6fZXF2jPDnJP//m72CbOsXCBPv375Wz0ZF2ZafYXK/x0zM/wx0GtBttVbVBt690NhLRGbkOZsykWCpTmpkhm82qt7TRfqdPzLaZyOSwLIt0LKXi8F1ftVjt5s9fD4Xsnucr3gYBGJquVE4CfLS0jB0zyWTSCtry3WvXr7C4uMDeXTthNGRu107agwEeIWubNWrNOj95910erVbYtXs316/f4qknj7F8/z4bK22+8qXPUMwXmD+wl3w+zdHHDrO50WCr0aGQn+LDDy/w8/fOMhx4tNpdwhDava6CbBhKe/QV2jK5cdK5HIVCgVK+QDKeIJPKMF2aojRZVAFLe5UieW6AaZpo1376WigwsaKWykCvN8AZDIlEosRiMfXlmGUqJTYM6YQBZ8++zwcffMBMKc9sqcBnnz6llDhi2bz2xt9R3rGDv/6b7zI1M836+jr1zRqF/ARWJMLqoxVeeO4ZJsbHmCpOUi7lsE2DtUoVy0pQzM/w6g9+yK3bi3T6DoOhCKON4/r0hj3FX1/6ujdSajzyHdLpNKlkkuJkkaOH5jl04DCTuQlipo1kq9PuEYaa6gDatTOvhYL9AE0Ji23FFeal0mI4JKvZdBLD0BkM+wz7PS5eOs+1K1fZN7ebmVJBZS4/VeLR2hrvnn2fr339H/PK//pzXnjh83zvr/6G9UqFbDrF/n1zrK2s8OJLX1Ktbv7QfvxRF2c0UM46m5nAGYX86I23qTc6rKxv0h6MlH/3xVCEHrGYhR7RGI0GBL67rSeapooUtxMc3n+A/XsPsHNmlumpGZLJFMPeUImY6JH2yVuvho4nBlvfhkDEVBeIx5MqI5IM35VM9+iJyumw/PABN2/eZHwsQ7O+Qahr9EdDDDtGIptmLJtT6BAH9nDxHjeuXuPpkycZz2a4fuMqJ04c560zb/HM506yY7ZILGqQScq1ely9coubN+8ycAPuL6+gW3GMmMXI93B9D9uMoimP6WHo0l1cdC2kudVkNPDJpVMU8nkeP/I4zz/7HIVCCV8cpGkrbdI++ckPQjEFsVgCGSL6/aEKMplIMTGZU9Vr1bfo9Tu4oyF2zKJR2+TcuXOsr1dYfLDIY0eOELUtJosldbBLlz7iX/3L32Xt0Qp/9Ad/yEyxyOPHjnHyySdY31hjbWMND5/sWBJNG5FOxDF1m5WlClc/uclmrcX9BxVagyH56WmVSMd1GTgDQt9lNOyj+yHZVBycIVZEo91s4zkOlljNEOYPPcbXvvaP2Lf3AJZlq/iEutrt998KhbsSWCKVUdXt9Xo4jqcSoIge+IonoszOcMDa2hpn33+P24t32HfoIENnwLPPP8dGrcathZu4jsOTxx9nZnqaP/79P1SW8tf+6T9jc3OTO3cX+fjKp6zXqszuKLN3bppkPIahmYg1a9S7rK3Xef1HP8OwDYrlaWKppDqLJz6g16XbbCirWMiNYRIgtnrU6xONbLenRm2LwmSRF09/ic997lmS6SyJRBIEEa2Fj8J6va4a99hYTl242W4pVRNIi/GIaDqLi4vq8+H5g7TbbS5fvkyvP2R65y4uXrxIt9fkt377G3zw/jtU1h6xd88Ojswf5s9feYW9e+b4F7/7b/n3/+bfMbtjN49Wqzx18hTtTp0zP/4hG9VVchNFDh6Yp9bscOHSp6xX60TtuDrXxMSEsrSa7yF+Y9CRXhsyO1NWVROtkYDFLI1nsmpIEed49OhRXn75ZaamZ2i1WtjxGNryuXfCsYmcqkK1tkm1WlXeM5lMKx4K0UXMpFdvbW2RiKdIZ5IsPXzE5Y8/otntK5v5ve/+Nb434Pf+x3+lUnnID77/f/nqV19irVJhfGyCVrPLu++dpVSeZdfO/cw/doQb16+xvnqXpQf36fT6YJjUWwOqtTrdvoMfhOr+YxKEjKmeg21EwHOI6JCTCtuWapUDCbjbYyKXU/7fGY7Ys2cPzz33HEcfP6aQO5RFQe36xbDT66ov6EZEZUsatTiUTCaj/LRAfnx8XGW71+6RTMZZXl7he99/leT4OOXpaXxvyBs/+iE6Hom4RbddZ3aHwDXBoD/i6vUbvPTSV/nGb36Tsx+c50//7DtSBp55+rhS3Ga7w/0Hy9y5v0RPWpEps7LP5OSkMhW4PsNeC1M2G4amAhZfn8qkt1V6OKLbbpNNZ1TxBv0++Xxe/e6LL75IuVym1++jrV07H969e1cZ71KpxEy5rMYpxWsjquArcJYqT5VLWEZUXURucufuPaqNBoVSnlKxwO3bN3nt1b/lyNFDpONxqtU1njh+gm9/+/dJplN02l1qjSarK5uUZ6Z47tnPsGdmmnKpgGHafPTpVd58+6fcf7iMJ23IC5mZmVHnipkW7WadUa+j5mgruu2lJ/J54smEssH1Wo3A89UAJDoiVJAYTp8+zfHjx4lEDbR7l95TKx5Z50im43aMsbExJf29dkcNDQJzuYD4YbmYwFtdOBGj57ps1mrEbJPp6Wnu3l5QQ0Wv2ebPXvkThRCp0te//nX+8i//guXVClNTU+zYuZOt2gajTpt0Mkk8maa2VefarTtUN2tiY8TpKk3ZvXMXhckc7VaTerWKGY2QTgq/A/KlIrlcjlx2TInpxnpV7eIMPUK5NKViOHDgAE888QTjkxNoGwtXQk32QkGAMxopOMu/pbfJa/H2bXbt2kXm781H3LLpdsUsjEiPj3Hv0RJvvPUmhw/O89RTTymxiOpRxnbv5jv/7b/Tbjf51re+xdbWJucvn+fpp59Sq5dqdZ12s8Wo0+Hm1WvcvfeApnjuXp92t0+7M6DR7qvlXblcpDxVwh0OVEtMJWJM5sYVyrLjY6THsspabmxssHTvvmqrMjzsnN2BFoRKi0TABNZar/IgrG6sq1aUsC2VUTEZooYiGJ7rKOUT87+6+khdIJGMKZNixmx67ohzly4y6A7UiPjFz59GDzVMw+Lq1asc2DtHPBFTM7S4tcraMpc/vry9PgoCwqHL5fMXuHHzNgPHQfYyoSzqvEB1gdFwqDy96Imhge+MKBUmKRWK+IGHZdsqcEGR0G91aXnbR8QTzM7MMOz1VWv9zNOntgMOO5shAulen3pjS01M2WwaSyAjA2UY0tiosrb6iGZ9SyVkYnJcCUOj22R5vcLySkVNKeJXT544ydGjx+g1trePWuirRJVmpjhz5i26gxatVlOZiFwmzfpShWqlqtqGBCzDgidjXSyGYdnq8M1mXe2zbFk+2Ca7ZncwVSoquggOBXGiK0LLzY0Nta4SzZGkeK6rIP8PX/oKs7OzaJWFa2p4ENFynCGtZoODB/eTjMXxA1e5q/PnfsHlyxe5t7igLlooTBI1DLWY002dTm9A3IozMZHHH/k4jsvhvfM888wz6jD9QZeLF89z4+ZVIrIgMba3iBPZMfqNLtlURvXTlco6D5YeokeiqivIcCDDhwQmBxfOCrV2795NPpfbnn9bbeUPpMpCR9EXYaMacTVNBSsLgFMnn+bUqVNoreV7ykvLaChZXVp6oMy5cHVyMkejucUf/N63SaWTLC0tqSoL36dnpkgkk0TjJlHTVmCYKkzR2GoogVtdXlXzqQig3LzRrLG5tYFs4gSiYlEnx3OkrQS+G6hD15tS/ZY6R0ZaESjz8+DBA2qbVfUdz3OIx2IUiwVy2XGVDBFVme7Gx7Mq+XLmfC7P3NxutW4SJ3f8+BPs2zeH5m9WQ1mgjXpdtpoNlpeXGRvLKCsp20rJ8Hf+9E+IJ2zeeecdZmbK3Lt3Tz0xmD96RJmRQqmo1P3Q/oNsVjewTJOl+w+UgdnarGFaUTzfV5WWRb4cTNrS1GSJTr2tYCj8EygLZSRJskaSxMpbLKn8rrTKVquhEimJSCYS6KGMrQYj12cw6BG1bHV90YJWu8Heuf0cO/oYJ0+eojhVRBs8Wg7tdErBpddqKfGaLBbQDIP6ZpWFhQUuXDyvAv/bV1/lyadOKPmXG8vgLT8X6ApfpJUZocbBQwfYqq5z48YN1itrJBIJ8sWCamuyV5bZWlAhra2+scnm+qYaQ0UIZfwTgZKAxATJZwXddoOVlRVVTRE/mX4EqhPjk+rMruuTTCdIpjJq4RiJyh4uzeOPn+Cznz3F3Nw+1X206vVroazw84UCqMCVCiij7fuu2hDeunWLO3fucOHyBSqVilrWabrOtWvXlBLi+8rXyqrm9OefVw5o7dEyn3zyEbG4pR6niOuJRi3WqpusVTdoNdt0O2IionTbHcVBCVgIKNsMgbW8hOtSWYFzo9FQkDflkYoepdtq0+8OGB8bw44l1D5aNy0iZoTdc3t54qkTHD70GHvmdim3d//BXbStGzdCWW6LaDxaWVHiJQ+hDj02T2pyUjq/PMWiX6+r/xfIN1pNVQGB4UeXLnP+Fx8SFTM/O8XXvvJlms2aspr12qY6oHBY1yPUm10ePFzh0fIKw6GHGbVJxIX/rrq/vGQakplbYKr4KvxvbOuG3P+XVlf+P2bF2VnewaFDh1Rvr7eapMayTE2XyU7kGMuNq7FVUCLUk7Nr4dp6iBFRcH7zJz9mZXVVwe/Z5/+BUsr1japyKM1WCytmq6cI3X6PMEAN2mPJNGHgs1Wt8PP3zmBHIZGMYkZ1FhZucG9xUT3uGLoeriPMN6hvdWh3+qpXxmP2r7YW4vSG/b4SNV2TFWtLwVmClTOJAZJ+WyqX2bdvH9NTUxTzZdpbddbW18lMjFM8eAA8l2Gviz0xjtPrYgpyfvkwLRw5If2+quSju3cUV4WjpfIUVizBkSeO8/DhEpP5Io7vsXjvjvK30vdaggZ0XGdE3DawTI3axiq3F67TaddJJhNqfbO2VuXC+YtUN+rkJ8sEga4CTidT8rQI1x2p3ik8llaoVjFhQG1rU/H/+IkTyg/vO3hAmQhJgKCrWlljx8wOxeFPrnxKrVHn6LFj7JjbjS+otUwsO67alax4hDL/H0xJ7BFdZf6MAAAAAElFTkSuQmCC">
         * let a = '<canvas width="60" height="32"></canvas>';
         * bbn.fn.canvasToImage(a);
         * ```
         *
         * @memberof bbn.fn
         * @param {canvas} canvas
         * @returns  {HTMLElement}
         */
        var canvasToImage = function (canvas) {
            var img = new Image();
            img.src = canvas.toDataURL('image/png');
            return img;
        };
        exports.canvasToImage = canvasToImage;
    });
    define("fn/style/center", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.center = void 0;
        /**
         * Centers the given element by giving it a position absolute.
         *
         * @method   center
         * @global
         * @example
         * ```javascript
         * //<div style="position: absolute; top: 73px; left: 0px;">Documentation</div>
         * bbn.fn.center('<div>Documentation</div>')
         * ```
         * @memberof bbn.fn
         * @param    {HTMLElement} ele
         * @returns  {HTMLElement} The dom element with the new style.
         */
        var center = function (ele) {
            //ele = $(ele);
            var parent = ele.parentNode, 
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
            ele.style.position = "absolute";
            //ele.css("top", Math.max(0, ((h - ele.outerHeight()) / 2) + parent.scrollTop()) + "px");
            ele.style.top =
                Math.max(0, (h - ele.offsetHeight) / 2 + parent.scrollTop) + "px";
            //ele.css("left", Math.max(0, ((w - ele.outerWidth()) / 2) + parent.scrollLeft()) + "px");
            ele.style.left =
                Math.max(0, (h - ele.offsetWidth) / 2 + parent.scrollLeft) + "px";
            return ele;
        };
        exports.center = center;
    });
    define("fn/object/checkPropsDetails", ["require", "exports", "fn/type/isArray", "fn/type/isObject", "fn/loop/each", "fn/string/substr"], function (require, exports, isArray_js_7, isObject_js_9, each_js_10, substr_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.checkPropsDetails = void 0;
        var checkPropsDetails = function (obj, props, checkEmpty) {
            if (checkEmpty === void 0) { checkEmpty = false; }
            var res = {
                error: false,
                result: true,
            };
            if (typeof props === "string") {
                props = [props];
            }
            if (!(0, isArray_js_7.isArray)(props)) {
                res.error = bbn._("checkProps must receive a string or an array as props argument");
            }
            if (!(0, isObject_js_9.isObject)(obj)) {
                res.error = bbn._("checkProps must receive an object as obj argument");
            }
            if (!res.error) {
                var check_1;
                (0, each_js_10.each)(props, function (varName) {
                    varName = varName.trim().split(":");
                    var type = varName[1] || false;
                    varName = varName[0];
                    if (obj[varName] === undefined) {
                        res.error = varName + " " + bbn._("is not defined");
                    }
                    else if (type) {
                        check_1 =
                            "is" +
                                (0, substr_js_5.substr)(type, 0, 1).toUpperCase() +
                                (0, substr_js_5.substr)(type, 1).toLowerCase();
                        if (bbn.fn[check_1] === undefined) {
                            res.error = type + " " + bbn._("is not a valid type");
                        }
                        else if (!bbn.fn[check_1](obj[varName])) {
                            res.error = varName + " " + bbn._("is not a") + " " + type;
                        }
                    }
                    else if (checkEmpty && !obj[varName]) {
                        res.error = varName + " " + bbn._("is empty");
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
    define("fn/object/checkProps", ["require", "exports", "fn/object/checkPropsDetails"], function (require, exports, checkPropsDetails_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.checkProps = void 0;
        var checkProps = function (obj, props, checkEmpty) {
            if (checkEmpty === void 0) { checkEmpty = false; }
            return (0, checkPropsDetails_js_1.checkPropsDetails)(obj, props, checkEmpty).result;
        };
        exports.checkProps = checkProps;
    });
    define("fn/object/checkPropsOrDie", ["require", "exports", "fn/object/checkPropsDetails"], function (require, exports, checkPropsDetails_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.checkPropsOrDie = void 0;
        var checkPropsOrDie = function (obj, props, checkEmpty) {
            if (checkEmpty === void 0) { checkEmpty = false; }
            var res = (0, checkPropsDetails_js_2.checkPropsDetails)(obj, props, checkEmpty);
            if (res.error) {
                throw new Error(res.error);
            }
            return true;
        };
        exports.checkPropsOrDie = checkPropsOrDie;
    });
    define("fn/object/clone", ["require", "exports", "fn/type/isArray", "fn/type/isObject", "fn/object/extend"], function (require, exports, isArray_js_8, isObject_js_10, extend_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.clone = void 0;
        /**
         * Creates and returns a perfect clone - but different - from the given object.
         *
         * @method   clone
         * @global
         * @example
         * ```javascript
         * let obj = {name: "Thomas"};
         * let objCopy = bbn.fn.clone(obj);
         * obj.name = "Julie";
         * // obj:     {name: "Julie"}
         * // objCopy: {name: "Thomas"}
         * ```
         * @memberof bbn.fn
         * @param    {Object} obj The source object
         * @returns  {Object} A new object
         */
        var clone = function (obj) {
            if ((0, isArray_js_8.isArray)(obj)) {
                return obj.slice().map(function (a) {
                    return typeof a === "object" ? clone(a) : a;
                });
            }
            if ((0, isObject_js_10.isObject)(obj)) {
                var o = Object.create(Object.getPrototypeOf(obj));
                return (0, extend_js_3.extend)(true, o, obj);
            }
            return obj;
        };
        exports.clone = clone;
    });
    define("fn/convert/colorToHex", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.colorToHex = void 0;
        /**
         * Returns the hex color of the given rgb or color name.
         * @method   colorToHex
         * @global
         * @example
         * ```javascript
         * //"#ff0000"
         * bbn.fn.colorToHex('red');
         * ```
         *
         * @example
         * ```javascript
         * //"#ff0000"
         * bbn.fn.colorToHex('rgb(255,0,0)');
         * ```
         * @memberof bbn.fn
         * @returns  {String}
         */
        var colorToHex = function (color) {
            var canvas = document.createElement("canvas").getContext("2d");
            canvas.fillStyle = color;
            return canvas.fillStyle;
        };
        exports.colorToHex = colorToHex;
    });
    define("fn/browser/copy", ["require", "exports", "fn/type/isObject", "fn/type/isFunction"], function (require, exports, isObject_js_11, isFunction_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.copy = void 0;
        /**
         * Copies to the clipboard the value of the given string.
         * @method   copy
         * @global
         * ``` javascript
         * let myVal = 'the value you want to copy to clipbord';
         * bbn.fn.copy(myVal);
         *
         * ```
         * @memberof bbn.fn
         * @param {String} st The string to copy.
         * @returns
         */
        var copy = function (st) {
            return new Promise(function (resolve) {
                var _a;
                if (st) {
                    if (navigator && navigator.clipboard) {
                        if (st instanceof Blob) {
                            navigator.clipboard.write([new ClipboardItem((_a = {}, _a[st.type.toString()] = st, _a))]).then(function () {
                                resolve(true);
                            });
                        }
                        else if ((0, isObject_js_11.isObject)(st) && (0, isFunction_js_5.isFunction)(st.toBlob)) {
                            st.toBlob(function (blob) {
                                var _a;
                                navigator.clipboard.write([new ClipboardItem((_a = {}, _a[blob.type.toString()] = blob, _a))]).then(function () {
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
                    var input = document.createElement('textarea');
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
    define("fn/object/count", ["require", "exports", "fn/object/filter"], function (require, exports, filter_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.count = void 0;
        /**
         * Counts the number of objects matching the given filter in the given array.
         *
         * The arguments follow the same scheme as bbn.fn.search.
         *
         * @method   count
         * @global
         * @example
         * ```javascript
         * let ar = [
         *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
         *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
         *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
         *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
         * ];
         * bbn.fn.count(ar, "id", 256);
         * // 1
         * bbn.fn.count(ar, {director: "Steven Spielberg"});
         * // 2
         * bbn.fn.search(ar, "year", 1975, ">");
         * // 3
         * // Complex filters: all the movies from Spielberg between 1974 and 1980
         * bbn.fn.search(ar, {
         *   logic: "AND",
         *   conditions: [
         *     {
         *       field: "director",
         *       operator: "eq",
         *       value: "Steven Spielberg"
         *     }, {
         *       logic: "AND",
         *       conditions: [
         *         {
         *            field: "year",
         *            operator: ">=",
         *            value: 1974
         *         }, {
         *            field: "year",
         *            operator: "<=",
         *            value: 1980
         *         }
         *       ]
         *     }
         *   ]
         * });
         * // 1
         * ```
         * @memberof bbn.fn
         * @param    {Array}                    arr       The subject array
         * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
         * @param    {*}                        val       The value with which comparing the given property
         * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
         * @returns  {Number}                   The number of items
         */
        var count = function (arr, prop, val, operator) {
            if (val === void 0) { val = null; }
            if (operator === void 0) { operator = '='; }
            return (0, filter_js_2.filter)(arr, prop, val, operator).length || 0;
        };
        exports.count = count;
    });
    define("fn/string/crc32", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.crc32 = void 0;
        /**
         * CRC32 implementation.
         */
        var crc32Table = [];
        for (var i = 0; i < 256; i++) {
            var c = i;
            for (var j = 0; j < 8; j++) {
                c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
            }
            crc32Table.push(c);
        }
        var crc32 = function (str) {
            var crc = 0 ^ -1;
            for (var i = 0; i < str.length; i++) {
                var charCode = str.charCodeAt(i);
                crc = (crc >>> 8) ^ crc32Table[(crc ^ charCode) & 0xff];
            }
            return (crc ^ -1) >>> 0; // Make sure the result is a 32-bit positive integer
        };
        exports.crc32 = crc32;
    });
    define("fn/object/createObject", ["require", "exports", "fn/object/extend"], function (require, exports, extend_js_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.createObject = void 0;
        var createObject = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var obj = Object.create(null);
            if (args.length) {
                extend_js_4.extend.apply(void 0, __spreadArray([obj], args, false));
            }
            return obj;
        };
        exports.createObject = createObject;
    });
    define("fn/style/cssExists", ["require", "exports", "fn/string/escapeRegExp"], function (require, exports, escapeRegExp_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.cssExists = void 0;
        /**
         * not used
         * @ignore
         * @method   cssExists
         * @todo     Add method description for cssExists
         * @global
         * @memberof bbn.fn
         * @param    {String} f
         * @returns
         */
        var cssExists = function (f) {
            var ok;
            var rules;
            var css = document.styleSheets;
            for (var sx = 0; sx < css.length; sx++) {
                ok = 1;
                try {
                    rules = css[sx].rules || css[sx].cssRules;
                }
                catch (e) {
                    ok = false;
                    if (e.name !== "SecurityError") {
                        throw e;
                    }
                }
                if (ok) {
                    //log(rules);
                    for (var cx = 0; cx < rules.length; cx++) {
                        //log(rules[cx].selectorText);
                        if (new RegExp("(^|\\s)" + (0, escapeRegExp_js_2.escapeRegExp)(f) + "(\\{|\\s)", "g").test(rules[cx].selectorText)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        exports.cssExists = cssExists;
    });
    define("fn/datetime/dateSQL", ["require", "exports", "fn/datetime/date", "dayjs"], function (require, exports, date_js_4, dayjs_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.dateSQL = void 0;
        /**
         * Returns a date with SQL format.
         *
         * @method   dateSQL
         * @global
         *
         * @example
         * ``` javascript
         * //"2020-04-16 16:15:23"
         * let date = new Date();
         * bbn.fn.dateSQL(date,false);
         * ```
         *
         * @memberof bbn.fn
         * @param    {Date|String} v
         * @param    {Boolean}     dayOnly Whether or not include the time in the date
         * @returns  {String}
         */
        var dateSQL = function (v, dayOnly) {
            var value = (0, date_js_4.date)(v);
            if (value) {
                return (0, dayjs_2.default)(value).format('YYYY-MM-DD' + (dayOnly ? '' : ' HH:mm:ss'));
            }
        };
        exports.dateSQL = dateSQL;
    });
    define("fn/datetime/daysInMonth", ["require", "exports", "fn/datetime/date"], function (require, exports, date_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.daysInMonth = void 0;
        /**
         * Returns the number of days of the month given in the date.
         * @method   daysInMonth
         * @global
         *
         * @example
         * ``` javascript
         * //30
         * bbn.fn.daysInMonth(new Date());
         * ```
         *
         * @memberof bbn.fn
         * @param    {String|Date} v
         * @returns  {Number}
         */
        var daysInMonth = function (v) {
            var d = (0, date_js_5.date)(v);
            if (d) {
                return dayjs(d).daysInMonth();
            }
            return false;
        };
        exports.daysInMonth = daysInMonth;
    });
    define("fn/object/deepPath", ["require", "exports", "fn/object/search", "fn/loop/each", "fn/type/isArray"], function (require, exports, search_js_4, each_js_11, isArray_js_9) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.deepPath = void 0;
        /**
         * Retrieves all elements of a hierarchical array corresponding to the filter.
         *
         * The arguments follow the same scheme as bbn.fn.search.
         *
         * @method   findAll
         * @global
         * @example
         * ```javascript
         * let ar = [
         *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
         *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
         *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
         *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
         * ];
         * bbn.fn.count(ar, "id", 256);
         * // 1
         * bbn.fn.count(ar, {director: "Steven Spielberg"});
         * // 2
         * bbn.fn.search(ar, "year", 1975, ">");
         * // 3
         * // Complex filters: all the movies from Spielberg between 1974 and 1980
         * bbn.fn.search(ar, {
         *   logic: "AND",
         *   conditions: [
         *     {
         *       field: "director",
         *       operator: "eq",
         *       value: "Steven Spielberg"
         *     }, {
         *       logic: "AND",
         *       conditions: [
         *         {
         *            field: "year",
         *            operator: ">=",
         *            value: 1974
         *         }, {
         *            field: "year",
         *            operator: "<=",
         *            value: 1980
         *         }
         *       ]
         *     }
         *   ]
         * });
         * // 1
         * ```
         * @memberof bbn.fn
         * @todo Do the doc!
         * @param    {Array}                    arr       The subject array
         * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
         * @param    {*}                        val       The value with which comparing the given property
         * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
         * @returns  {Number}                   The number of items
         */
        var deepPath = function (arr, filter, deepProperty, res) {
            if (res === void 0) { res = []; }
            var idx;
            var start = 0;
            if ((idx = (0, search_js_4.search)(arr, filter, start)) > -1) {
                res.push(idx);
                return res;
            }
            (0, each_js_11.each)(arr, function (it, i) {
                if ((0, isArray_js_9.isArray)(it[deepProperty])) {
                    var r = res.slice();
                    r.push(i);
                    var tmp = deepPath(it[deepProperty], filter, deepProperty, r);
                    if (tmp !== false) {
                        return tmp;
                    }
                }
            });
            return false;
        };
        exports.deepPath = deepPath;
    });
    define("fn/default/defaultAjaxAbortFunction", ["require", "exports", "fn/browser/log"], function (require, exports, log_js_10) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultAjaxAbortFunction = void 0;
        var defaultAjaxAbortFunction = function (message, url) {
            if (url === void 0) { url = ""; }
            (0, log_js_10.log)(message);
        };
        exports.defaultAjaxAbortFunction = defaultAjaxAbortFunction;
    });
    define("fn/default/defaultAjaxErrorFunction", ["require", "exports", "fn/browser/log"], function (require, exports, log_js_11) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultAjaxErrorFunction = void 0;
        var defaultAjaxErrorFunction = function (jqXHR, textStatus, errorThrown) {
            if (textStatus === void 0) { textStatus = null; }
            if (errorThrown === void 0) { errorThrown = null; }
            (0, log_js_11.log)(textStatus, errorThrown);
        };
        exports.defaultAjaxErrorFunction = defaultAjaxErrorFunction;
    });
    define("fn/default/defaultAlertFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultAlertFunction = void 0;
        var defaultAlertFunction = function (msg, title) {
            if (title === void 0) { title = null; }
            /** @todo */
            alert(msg);
        };
        exports.defaultAlertFunction = defaultAlertFunction;
    });
    define("fn/default/defaultConfirmFunction", ["require", "exports", "fn/type/isFunction"], function (require, exports, isFunction_js_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultConfirmFunction = void 0;
        var defaultConfirmFunction = function (text, yesFn, noFn) {
            if (noFn === void 0) { noFn = null; }
            var ok = 0;
            if (confirm(text)) {
                if ((0, isFunction_js_6.isFunction)(yesFn)) {
                    yesFn();
                    ok = 1;
                }
            }
            if (!ok && (0, isFunction_js_6.isFunction)(noFn)) {
                noFn();
            }
        };
        exports.defaultConfirmFunction = defaultConfirmFunction;
    });
    define("fn/default/defaultEndLoadingFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultEndLoadingFunction = void 0;
        var defaultEndLoadingFunction = function (url, timestamp, data, res) {
            if (data === void 0) { data = null; }
            if (res === void 0) { res = null; }
            return true;
        };
        exports.defaultEndLoadingFunction = defaultEndLoadingFunction;
    });
    define("fn/default/defaultErrorFunction", ["require", "exports", "fn/browser/log"], function (require, exports, log_js_12) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultErrorFunction = void 0;
        var defaultErrorFunction = function (message) {
            (0, log_js_12.log)(message);
        };
        exports.defaultErrorFunction = defaultErrorFunction;
    });
    define("fn/default/defaultHistoryFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultHistoryFunction = void 0;
        var defaultHistoryFunction = function (obj) {
            return true;
        };
        exports.defaultHistoryFunction = defaultHistoryFunction;
    });
    define("fn/default/defaultLinkFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultLinkFunction = void 0;
        var defaultLinkFunction = function (responseObj, ele) {
            return true;
        };
        exports.defaultLinkFunction = defaultLinkFunction;
    });
    define("fn/default/defaultPostLinkFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultPostLinkFunction = void 0;
        var defaultPostLinkFunction = function (r, ele) {
            if (ele === void 0) { ele = null; }
            return true;
        };
        exports.defaultPostLinkFunction = defaultPostLinkFunction;
    });
    define("fn/default/defaultPreLinkFunction", ["require", "exports", "fn/browser/log"], function (require, exports, log_js_13) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultPreLinkFunction = void 0;
        var defaultPreLinkFunction = function (url, force, ele) {
            if (force === void 0) { force = false; }
            if (ele === void 0) { ele = null; }
            (0, log_js_13.log)("defaultPreLinkFunction", url, force, ele);
            return true;
        };
        exports.defaultPreLinkFunction = defaultPreLinkFunction;
    });
    define("fn/default/defaultResizeFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultResizeFunction = void 0;
        var defaultResizeFunction = function () {
            return true;
        };
        exports.defaultResizeFunction = defaultResizeFunction;
    });
    define("fn/default/defaultStartLoadingFunction", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.defaultStartLoadingFunction = void 0;
        var defaultStartLoadingFunction = function (url, tst, data, requestId) {
            if (data === void 0) { data = null; }
            if (requestId === void 0) { requestId = null; }
            return true;
        };
        exports.defaultStartLoadingFunction = defaultStartLoadingFunction;
    });
    define("fn/object/deleteProp", ["require", "exports", "fn/type/checkType"], function (require, exports, checkType_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.deleteProp = void 0;
        /**
         * Gets the given property from the given object
         * @param {Object} obj
         * @param {String} prop
         * @returns
         */
        var deleteProp = function (obj, prop) {
            (0, checkType_js_2.checkType)(obj, "object", bbn._("The obj must be an object in setProp"));
            (0, checkType_js_2.checkType)(prop, "string", bbn._("The prop must be a string in setProp"));
            delete obj[prop];
        };
        exports.deleteProp = deleteProp;
    });
    define("fn/type/isValue", ["require", "exports", "fn/type/isNull"], function (require, exports, isNull_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isValue = void 0;
        /**
         * Returns true if the given argument is not null or type object or array.
         * @method   isValue
         * @deprecated
         * @see bbn.fn.isPrimitive
         * @example
         * ```javascript
         * bbn.fn.isValue('myString');
         * //true
         * ```
         * @example
         * ```javascript
         * bbn.fn.isValue(6);
         * //true
         * ```
         * @example
         * ```javascript
         * bbn.fn.isValue([80,10,22]);
         * //false
         * ```
         * @global
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isValue = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_12 = args; _a < args_12.length; _a++) {
                var a = args_12[_a];
                if (typeof a === "object" && !(0, isNull_js_2.isNull)(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isValue = isValue;
    });
    define("fn/object/diffObj", ["require", "exports", "fn/type/isDate", "fn/object/createObject", "fn/type/isFunction", "fn/type/isValue", "fn/type/isDom", "fn/object/numProperties"], function (require, exports, isDate_js_6, createObject_js_1, isFunction_js_7, isValue_js_1, isDom_js_4, numProperties_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.diffObj = void 0;
        var diffObjProcessed = [];
        /**
          * Returns an object describing the differences for transforming the first given object into the second.
          *
          * The returned data will use the objects properties as keys. If unchanged is set to true, all the
          * properties will be returned, otherwise only the different ones. Each of these keys will have the
          * following properties:
          * - type: can be _modified_, _created_, _deleted_, and if unchanged is set to true _unchanged_
          * - data: the first object's property's value, or the second if type is _created_
          * - newData: the second object's property's value in case of type _updated_
          *
          * @method   diffObj
          * @global
          * @example
          * ```javascript
          * bbn.fn.diffObj(
          *   {
          *     name: "Thomas",
          *     age: 45
          *   }, {
          *     name: "Eva",
          *     sex: "Female",
          *     retired: false
          *   }
          * );
          * // {
          * //   name: {
          * //     type: "updated",
          * //     data: "Thomas",
          * //     newData: "Eva"
          * //   },
          * //   age: {
          * //     type: "deleted",
          * //     data: 45
          * //   },
          * //   sex: {
          * //     type: "created",
          * //     data: "Female"
          * //   },
          * //   retired: {
          * //     type: "created",
          * //     data: false
          * //   }
          * // }
          * ```
          * @example
          * ```javascript
          * bbn.fn.diffObj(
          *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
          *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}}
          * );
          * // {
          * //   "pupil": {
          * //     "type": "updated",
          * //     "data": "Agnes Varda",
          * //     "newData": "Luc Besson"
          * //   },
          * //   "grade": {
          * //     "year": {
          * //       "type": "updated",
          * //       "data": "B",
          * //       "newData": "C"
          * //     },
          * //     "month": {
          * //       "type": "updated",
          * //       "data": "A",
          * //       "newData": "D"
          * //     }
          * //   }
          * // }
          * ```
          * @memberof bbn.fn
          * @param    {Object}  obj1
          * @param    {Object}  obj2
          * @param    {String}  unchanged
          * @param    {Boolean} notRoot
          * @returns  {Object}
          */
        var diffObj = function (obj1, obj2, unchanged, notRoot) {
            if (unchanged === void 0) { unchanged = false; }
            if (notRoot === void 0) { notRoot = false; }
            if (!notRoot) {
                diffObjProcessed = [];
            }
            var VALUE_CREATED = 'created', VALUE_UPDATED = 'updated', VALUE_DELETED = 'deleted', VALUE_UNCHANGED = 'unchanged', _compareValues = function (value1, value2) {
                if (value1 === value2) {
                    return VALUE_UNCHANGED;
                }
                if ((0, isDate_js_6.isDate)(value1) && (0, isDate_js_6.isDate)(value2) && value1.getTime() === value2.getTime()) {
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
            var diff = (0, createObject_js_1.createObject)();
            if (!(0, isFunction_js_7.isFunction)(obj1) && !(0, isFunction_js_7.isFunction)(obj2)) {
                if ((0, isValue_js_1.isValue)(obj1) || (0, isValue_js_1.isValue)(obj2)) {
                    var res = _compareValues(obj1, obj2);
                    if (unchanged || res !== VALUE_UNCHANGED) {
                        var ret = (0, createObject_js_1.createObject)();
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
                if ((0, isDom_js_4.isDom)(obj1) || (0, isDom_js_4.isDom)(obj2)) {
                    return false;
                }
                if (diffObjProcessed.includes(obj1) || diffObjProcessed.includes(obj2)) {
                    //error(bbn._("Can't compare objects because they contain circular references"));
                    return false;
                }
                diffObjProcessed.push(obj1, obj2);
                for (var key in obj1) {
                    if ((0, isFunction_js_7.isFunction)(obj1[key])) {
                        continue;
                    }
                    var value2 = undefined;
                    if ('undefined' != typeof obj2[key]) {
                        value2 = obj2[key];
                    }
                    var res = diffObj(obj1[key], value2, unchanged, true);
                    if (res) {
                        diff[key] = res;
                    }
                }
                for (var key in obj2) {
                    if ((0, isFunction_js_7.isFunction)(obj2[key]) || 'undefined' != typeof obj1[key]) {
                        continue;
                    }
                    var res = diffObj(undefined, obj2[key], unchanged, true);
                    if (res) {
                        diff[key] = res;
                    }
                }
            }
            return !notRoot || unchanged || (0, numProperties_js_5.numProperties)(diff) ? diff : false;
        };
        exports.diffObj = diffObj;
    });
    define("fn/string/dirName", ["require", "exports", "fn/type/isString", "fn/string/substr"], function (require, exports, isString_js_9, substr_js_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.dirName = void 0;
        /**
         * Returns the path of the folder containing the last hierarchical element of the path.
         *
         * @method   dirName
         * @global
         *
         * @example
         * ```javascript
         * //"folder/other_folder"
         * bbn.fn.dirName('folder/other_folder/file');
         * ```
         * @memberof bbn.fn
         * @param    {String} path
         * @returns  {String} path of the folder
         */
        var dirName = function (path) {
            if ((0, isString_js_9.isString)(path) && path) {
                while ((0, substr_js_6.substr)(path, path.length - 1) === "/") {
                    path = (0, substr_js_6.substr)(path, 0, path.length - 1);
                }
                var pos = path.lastIndexOf("/");
                if (pos > 0) {
                    return (0, substr_js_6.substr)(path, 0, pos);
                }
                if (pos === 0) {
                    return "/";
                }
            }
            return "";
        };
        exports.dirName = dirName;
    });
    define("fn/type/isBlob", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isBlob = void 0;
        /**
         * @method   isBlob
         * @todo     Add method description for isFunction
         * @global
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isBlob = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_13 = args; _a < args_13.length; _a++) {
                var a = args_13[_a];
                if ({}.toString.apply(a) !== "[object Blob]") {
                    return false;
                }
            }
            return true;
        };
        exports.isBlob = isBlob;
    });
    define("fn/string/fileExt", ["require", "exports", "fn/type/isString"], function (require, exports, isString_js_10) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fileExt = void 0;
        /**
         * Gets the extension from a file's name.
         *
         * The extension is returned in lower case; if the filename has no extension
         * or is not valid it will return an empty string.
         *
         * @method   fileExt
         * @global
         *
         * @example
         * ```javascript
         * // "txt"
         * bbn.fn.fileExt('my_file.txt')
         * ```
         *
         * @example
         * ```javascript
         * // "txt"
         * bbn.fn.fileExt('MY_FILE.TXT')
         * ```
         *
         * @example
         * ```javascript
         * // ""
         * bbn.fn.fileExt('MY_FILE')
         * ```
         *
         * @example
         * ```javascript
         * // ""
         * bbn.fn.fileExt('.MY_FILE')
         * ```
         *
         * @param   {String} filename
         * @returns {String} The file's extension
         */
        var fileExt = function (filename) {
            if (filename && (0, isString_js_10.isString)(filename)) {
                var bits = filename.split(".");
                if (bits[0] && bits.length > 1) {
                    return bits[bits.length - 1].toLowerCase();
                }
            }
            return "";
        };
        exports.fileExt = fileExt;
    });
    define("fn/type/isCanvas", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isCanvas = void 0;
        /**
         * Returns true if the given argumen is a Canvas.
         *
         * @method   isCanvas
         * @global
         * @example
         * ```javascript
         * let myCanvas = document.createElement('canvas');
         * bbn.fn.isCanvas(myCanvas);
         * //true
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isCanvas = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_14 = args; _a < args_14.length; _a++) {
                var a = args_14[_a];
                if (!(a instanceof HTMLCanvasElement)) {
                    return false;
                }
            }
            return true;
        };
        exports.isCanvas = isCanvas;
    });
    define("fn/ajax/downloadContent", ["require", "exports", "fn/type/isCanvas", "fn/type/isObject", "fn/type/isString", "fn/browser/log"], function (require, exports, isCanvas_js_1, isObject_js_12, isString_js_11, log_js_14) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.downloadContent = void 0;
        /**
         * Downloads a file with given filename from the given content.
         *
         * Creates a link putting in href a URL Object Blob made of the given content,
         * which can be a canvas, a file or a blob object, or just a string.
         *
         * @method   downloadContent
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * // Download from a string
         * bbn.fn.downloadContent('myTextFile.txt', 'Just a string\nThat we can save directly in a file', 'text/plain');
         *
         * // Download from a file
         * let file = new File(["foo"], "foo.txt", {type: "text/plain"});
         * bbn.fn.downloadContent('foo.txt', file);
         * ```
         *
         * @param    {String}                        filename The name for the downloaded file
         * @param    {HTMLCanvasElement|File|String} content  A Canvas, a File object or a String
         * @param    {String}                        type     The type of file to be made
         *
         * @returns  {undefined}
         */
        var downloadContent = function (filename, content, type) {
            if (type === void 0) { type = null; }
            if ((0, isCanvas_js_1.isCanvas)(content)) {
                content.toBlob(function (blob) {
                    // blob ready, download it
                    var a = document.createElement('a');
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
                type = (0, isObject_js_12.isObject)(content) && content.type ? content.type : 'octet/stream';
            }
            else if (type.indexOf('/') === -1) {
                type = 'text/' + type;
            }
            var a = window.document.createElement('a');
            a.className = 'bbn-no';
            var src = null;
            if ((0, isString_js_11.isString)(content)) {
                src = new Blob([content], { type: type });
            }
            else {
                try {
                    src = content;
                }
                catch (e) {
                    (0, log_js_14.log)(e);
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
    define("fn/ajax/download", ["require", "exports", "fn/ajax/ajax", "fn/string/substr", "fn/string/baseName", "fn/type/isBlob", "fn/string/fileExt", "fn/ajax/downloadContent"], function (require, exports, ajax_js_1, substr_js_7, baseName_js_1, isBlob_js_1, fileExt_js_1, downloadContent_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.download = void 0;
        /**
         * Downloads a file with given filename from a URL.
         *
         * Gets the file's content as Blob through XHR, then sends it to bbn.fn.downloadContent.
         * __Attention__ The CORS policy applies
         *
         * @method   download
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * // Forcing the download of an image
         * bbn.fn.download('/bbn/js-title-black.png');
         *
         * // Forcing the download of a PDF
         * bbn.fn.download('/files/my-document.pdf');
         *
         * // Changing the name as it is downloaded
         * bbn.fn.download('/files/f4b1092d71aefd96458feaa71d170f69.pdf', 'myDocument_' + bbn.fn.dateSQL() + '.pdf');
         * ```
         *
         * @param    {String} url      The URL from which the file will be requested
         * @param    {String} filename The name for the downloaded file (otherwise it will take the basename of the url)
         * @param    {Object} params   A data object to send with the request
         *
         * @returns  {undefined}
         */
        var download = function (url, filename, params) {
            if (filename === void 0) { filename = ''; }
            if (params === void 0) { params = null; }
            // We can intervert the arguments
            if (filename && typeof filename === "object") {
                params = filename;
                filename = "";
            }
            return (0, ajax_js_1.ajax)(url, "blob", params || { _bbn_download: 1 }, function (d, headers) {
                if (!filename) {
                    var prop = "content-disposition";
                    var cd = "attachment; filename=";
                    if ((headers === null || headers === void 0 ? void 0 : headers[prop]) && headers[prop].indexOf(cd) === 0) {
                        filename = (0, substr_js_7.substr)(headers[prop], cd.length + 1, headers[prop].length - cd.length - 2);
                    }
                    else {
                        filename = (0, baseName_js_1.baseName)(url);
                    }
                }
                if ((0, isBlob_js_1.isBlob)(d)) {
                    var extension = (0, fileExt_js_1.fileExt)(filename);
                    var htmlExtensions = ["php", "html"];
                    if (typeof filename === "string" &&
                        (("type" in d && d.type !== "text/html") ||
                            htmlExtensions.includes(extension))) {
                        (0, downloadContent_js_1.downloadContent)(filename, d);
                        return;
                    }
                }
            }, function (e) {
                bbn.fn.defaultAjaxErrorFunction(e);
            });
        };
        exports.download = download;
    });
    define("fn/browser/eraseCookie", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.eraseCookie = void 0;
        /**
         * Erase the cookie corresponding to the given name;
         *
         * @method   eraseCookie
         * @global
         * @example
         * ``` javascript
         * // 'en'
         * bbn.fn.erase('lang');
         * ```
         * @memberof bbn.fn
         * @returns  {*}
         */
        var eraseCookie = function (name) {
            document.cookie = name + '=; Max-Age=-99999999;';
        };
        exports.eraseCookie = eraseCookie;
    });
    define("fn/string/escapeDquotes", ["require", "exports", "fn/type/isString"], function (require, exports, isString_js_12) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeDquotes = void 0;
        var escapeDquotes = function (str) {
            if (!(0, isString_js_12.isString)(str)) {
                return str;
            }
            return str.replace(/"/g, '\\"');
        };
        exports.escapeDquotes = escapeDquotes;
    });
    define("fn/string/escapeSquotes", ["require", "exports", "fn/type/isString"], function (require, exports, isString_js_13) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeSquotes = void 0;
        var escapeSquotes = function (str) {
            if (!(0, isString_js_13.isString)(str)) {
                return str;
            }
            return str.replace(/'/g, "\\'");
        };
        exports.escapeSquotes = escapeSquotes;
    });
    define("fn/string/escapeTicks", ["require", "exports", "fn/type/isString"], function (require, exports, isString_js_14) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeTicks = void 0;
        var escapeTicks = function (str) {
            if (!(0, isString_js_14.isString)(str)) {
                return str;
            }
            return str.replace(/`/g, '\\`');
        };
        exports.escapeTicks = escapeTicks;
    });
    define("fn/string/escapeUrl", ["require", "exports", "fn/loop/each", "fn/string/dirName", "fn/string/baseName", "fn/type/isString"], function (require, exports, each_js_12, dirName_js_1, baseName_js_2, isString_js_15) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeUrl = void 0;
        /**
         * Escapes a URL or a file path, optionally adding parameters (get type, to append to the URL without the first separator).
         *
         * @param {*} url
         * @param {*} params
         * @returns
         */
        var escapeUrl = function (url, params) {
            var st = "";
            if (url.match("^(http|https)://")) {
                st += "http";
                url = url.substring(4);
                if (url.substr(0, 1) === "s") {
                    st += "s";
                    url = url.substring(1);
                }
                st += "://";
                url = url.substring(3);
            }
            (0, each_js_12.each)((0, dirName_js_1.dirName)(url).split("/"), function (a) {
                st += encodeURIComponent(a) + "/";
            });
            var base = (0, baseName_js_2.baseName)(url);
            var sep = "?";
            var existingParams = "";
            if (base.indexOf(sep)) {
                var tmp = base.split("?");
                sep = "&";
                existingParams = "?" + tmp[1];
                base = tmp[0];
            }
            if (params && (0, isString_js_15.isString)(params)) {
                if (params.match("^(\\&|\\?)")) {
                    params = params.substring(1);
                }
                params = sep + params;
            }
            else {
                params = "";
            }
            return st + encodeURIComponent(base) + existingParams + params;
        };
        exports.escapeUrl = escapeUrl;
    });
    define("fn/object/extendOut", ["require", "exports", "fn/type/isObject"], function (require, exports, isObject_js_13) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.extendOut = void 0;
        /**
         * Returns a new object made of the properties from all the given objects.
         *
         * Compared to bbn.fn.extend this still treats the arguments from left to right
         * but without overwriting existing properties, and returning a new object.
         *
         * @method   extendOut
         * @global
         * @example
         * ```javascript
         * //{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
         * bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
         * ```
         * @memberof bbn.fn
         * @returns  {Object}
         */
        var extendOut = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var r = null;
            for (var _a = 0, args_15 = args; _a < args_15.length; _a++) {
                var a = args_15[_a];
                if (!(0, isObject_js_13.isObject)(a)) {
                    throw new Error("Each argument for extendOut must be an object, " + typeof a + " given");
                }
                if (r === null) {
                    r = a;
                }
                else {
                    for (var n in a) {
                        if ((0, isObject_js_13.isObject)(r[n], a[n])) {
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
    define("fn/form/fieldValue", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fieldValue = void 0;
        /**
         * Returns the value of a form's input, differenciating between checkboxes, radio and other inputs.
         *
         * @method   fieldValue
         * @global
         * @memberof bbn.fn
         * @param    {HTMLElement} field The input element
         *
         * @returns  {Mixed}       The value
         */
        var fieldValue = function (field) {
            var v;
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
    define("fn/object/findAll", ["require", "exports", "fn/object/search", "fn/loop/each", "fn/type/isArray"], function (require, exports, search_js_5, each_js_13, isArray_js_10) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.findAll = void 0;
        /**
         * Retrieves all elements of a hierarchical array corresponding to the filter.
         *
         * The arguments follow the same scheme as bbn.fn.search.
         *
         * @method   findAll
         * @global
         * @example
         * ```javascript
         * let ar = [
         *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
         *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
         *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
         *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
         * ];
         * bbn.fn.count(ar, "id", 256);
         * // 1
         * bbn.fn.count(ar, {director: "Steven Spielberg"});
         * // 2
         * bbn.fn.search(ar, "year", 1975, ">");
         * // 3
         * // Complex filters: all the movies from Spielberg between 1974 and 1980
         * bbn.fn.search(ar, {
         *   logic: "AND",
         *   conditions: [
         *     {
         *       field: "director",
         *       operator: "eq",
         *       value: "Steven Spielberg"
         *     }, {
         *       logic: "AND",
         *       conditions: [
         *         {
         *            field: "year",
         *            operator: ">=",
         *            value: 1974
         *         }, {
         *            field: "year",
         *            operator: "<=",
         *            value: 1980
         *         }
         *       ]
         *     }
         *   ]
         * });
         * // 1
         * ```
         * @memberof bbn.fn
         * @todo Do the doc!
         * @param    {Array}                    arr       The subject array
         * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
         * @param    {*}                        val       The value with which comparing the given property
         * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
         * @returns  {Number}                   The number of items
         */
        var findAll = function (arr, filter, deepProperty, res) {
            if (res === void 0) { res = []; }
            var idx;
            var start = 0;
            while ((idx = (0, search_js_5.search)(arr, filter, start)) > -1) {
                res.push(arr[idx]);
                start = idx + 1;
            }
            (0, each_js_13.each)(arr, function (it) {
                if ((0, isArray_js_10.isArray)(it[deepProperty])) {
                    findAll(it[deepProperty], filter, deepProperty, res);
                }
            });
            return res;
        };
        exports.findAll = findAll;
    });
    define("fn/loop/fori", ["require", "exports", "fn/type/isArray", "fn/type/isNumber"], function (require, exports, isArray_js_11, isNumber_js_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fori = void 0;
        /**
         * Executes the provided function on each element of the given array.
         *
         * A minimum and a maximum value can be provided, within the boundaries of the
         * array's indexes. Returning false will stop the loop.
         *
         * @method   fori
         * @global
         * @example
         * ```javascript
         * let res = 0;
         * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
         *   res += d;
         * }, 3);
         * // res = 24
         * ```
         * @example
         * ```javascript
         * let res = 0;
         * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
         *   if (res >= 20) {
         *     return false;
         *   }
         *   res += d;
         * }, 4, 1);
         * // res = 20
         * ```
         * @memberof bbn.fn
         * @param    {Array}     arr The array to loop on
         * @param    {Function}  fn  The function, gets the array's element and the index as arguments
         * @param    {Number}    max The index to which the loop will stop
         * @param    {Number}    min The index at which the loop will start
         * @returns  {undefined}
         */
        var fori = function (arr, fn, max, min) {
            if (max === void 0) { max = arr.length - 1; }
            if (min === void 0) { min = 0; }
            if ((0, isArray_js_11.isArray)(arr)) {
                var realMax = arr.length - 1;
                if (!(0, isNumber_js_4.isNumber)(max) || !(0 < max && max <= realMax)) {
                    max = realMax;
                }
                if (!(0, isNumber_js_4.isNumber)(min) || !(0 <= min && min < realMax) || min > max) {
                    min = 0;
                }
                for (var i = min; i <= max; i++) {
                    if (fn(arr[i], i) === false) {
                        return;
                    }
                }
            }
        };
        exports.fori = fori;
    });
    define("fn/loop/forir", ["require", "exports", "fn/type/isArray", "fn/type/isNumber"], function (require, exports, isArray_js_12, isNumber_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.forir = void 0;
        /**
         * Executes the provided function on each element of the given array, going backward.
         *
         * A maximum and a minimum value can be provided, within the boundaries of the
         * array's indexes. Returning false will stop the loop.
         *
         * @method   forir
         * @global
         * @example
         * ```javascript
         * let res = 0;
         * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
         *   res += d;
         * }, 4, 2);
         * // res = 16
         * ```
         * @example
         * ```javascript
         * let res = 0;
         * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
         *   if (res >= 20) {
         *     return false;
         *   }
         *   res += d;
         * });
         * // res = 23
         * ```
         * @memberof bbn.fn
         * @param    {Array}     arr The array to loop on
         * @param    {Function}  fn  The function, gets the array's element and the index as arguments
         * @param    {Number}    max The index to which the loop will stop
         * @param    {Number}    min The index at which the loop will start
         * @returns  {undefined}
         */
        var forir = function (arr, fn, max, min) {
            if (max === void 0) { max = arr.length - 1; }
            if (min === void 0) { min = 0; }
            if ((0, isArray_js_12.isArray)(arr)) {
                var realMax = arr.length - 1;
                if (!(0, isNumber_js_5.isNumber)(max) || !(0 < max && max <= realMax)) {
                    max = realMax;
                }
                if (!(0, isNumber_js_5.isNumber)(min) || !(0 <= min && min < realMax) || min > max) {
                    min = 0;
                }
                for (var i = max; i >= min; i--) {
                    if (fn(arr[i], i) === false) {
                        return;
                    }
                }
            }
        };
        exports.forir = forir;
    });
    define("fn/string/format", ["require", "exports", "fn/type/checkType"], function (require, exports, checkType_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.format = void 0;
        var format = function (str) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length) {
                var i_3 = 0;
                return str.replace(/\%([d|s])/g, function (match, type) {
                    var tmp = args[i_3++];
                    (0, checkType_js_3.checkType)(tmp, type === 'd' ? 'number' : 'string', bbn._("The value doesn't correspond to the format"));
                    return tmp;
                });
            }
            return str;
        };
        exports.format = format;
    });
    define("fn/string/formatBytes", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.formatBytes = void 0;
        /**
         * Formats the value given in bytes.
         * @method   formatBytes
         * @global
         * @example
         * //"52.23 MB"
         * ``` javascript
         * bbn.fn.formatBytes(54764654);
         * ```
         * @memberof bbn.fn
         * @returns  {String}
         */
        var formatBytes = function (bytes, decimals) {
            if (decimals === void 0) { decimals = 2; }
            if (!bytes) {
                return '0 B';
            }
            var k = 1024, s = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals < 0 ? 0 : decimals)) + ' ' + s[i];
        };
        exports.formatBytes = formatBytes;
    });
    define("fn/datetime/formatDate", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.formatDate = void 0;
        var formatDate = function (date, format) {
            return dayjs(date).format(format);
        };
        exports.formatDate = formatDate;
    });
    define("fn/string/formatSize", ["require", "exports", "fn/type/isNumber", "fn/type/isString"], function (require, exports, isNumber_js_6, isString_js_16) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.formatSize = void 0;
        var formatSize = function (st, noValid) {
            if ((0, isNumber_js_6.isNumber)(st)) {
                return st + 'px';
            }
            if ((0, isString_js_16.isString)(st)) {
                return st;
            }
            return noValid ? false : 'auto';
        };
        exports.formatSize = formatSize;
    });
    define("fn/form/formdata", ["require", "exports", "fn/loop/each", "fn/form/fieldValue", "fn/string/replaceAll", "fn/string/substr"], function (require, exports, each_js_14, fieldValue_js_1, replaceAll_js_3, substr_js_8) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.formdata = void 0;
        /**
         * Returns all the data contained in a form as a single object.
         *
         * @method   formdata
         * @global
         * @memberof bbn.fn
         * @fires    {*}
         *
         * @example
         * ```javascript
         * // <form id="myform">
         * // <input type="hidden" name="bbn[name]" value="Smith">
         * // <input type="hidden" name="bbn[fname]" value="John">
         * // </form>
         * bbn.fn.formdata(document.getElementById('myform'));
         * // {name: "Smith", fname: "John"};
         *
         * ```
         *
         * @example
         * ```javascript
         * // <form id="myform">
         * // <input type="hidden" name="People[0][name]" value="Smith">
         * // <input type="hidden" name="People[0][fname]" value="John">
         * // <input type="hidden" name="People[1][name]" value="Smith">
         * // <input type="hidden" name="People[1][fname]" value="Eileen">
         * // <input type="hidden" name="Dates[0]" value="2021-08-25">
         * // <input type="hidden" name="Dates[1]" value="2021-09-06">
         * // </form>
         * bbn.fn.formdata(document.getElementById('myform'));
         * // {
         * //   People: [
         * //     {name: "Smith", fname: "John"},
         * //     {name: "Smith", fname: "Eileen"}
         * //   ],
         * //   Dates: ['2021-08-25', '2021-09-06']
         * // }
         * ```
         *
         * @param    {HTMLElementL} form
         *
         * @returns  {Object}
         */
        var formdata = function (form) {
            var $inputs = form.querySelectorAll('input[name],select[name],textarea[name],button[name]');
            var res = {};
            var n;
            var v;
            (0, each_js_14.each)($inputs, function (input, i) {
                v = (0, fieldValue_js_1.fieldValue)(input);
                if (v !== undefined && !input.disabled) {
                    var name_1 = input.name;
                    if (name_1.indexOf('[]') === -1 &&
                        name_1.indexOf('[') > -1 &&
                        name_1.indexOf(']') > -1 &&
                        name_1.lastIndexOf(']') === name_1.length - 1) {
                        name_1 = (0, replaceAll_js_3.replaceAll)('][', '.', name_1);
                        name_1 = (0, replaceAll_js_3.replaceAll)('[', '.', name_1);
                        name_1 = (0, replaceAll_js_3.replaceAll)(']', '', name_1);
                    }
                    if (name_1.length > 2 && name_1.indexOf('[]') === name_1.length - 2) {
                        n = (0, substr_js_8.substr)(name_1, 0, name_1.length - 2);
                        if (res[n] === undefined) {
                            res[n] = [];
                        }
                        res[n].push(v);
                    }
                    else if (name_1.indexOf('.') > -1) {
                        var tmp = void 0, parts = name_1.split('.');
                        tmp = res;
                        for (var i_4 = 0; i_4 < parts.length; i_4++) {
                            if (res[parts[i_4]] === undefined) {
                                if (i_4 < parts.length - 1) {
                                    tmp[parts[i_4]] = {};
                                }
                                else {
                                    tmp[parts[i_4]] = v;
                                }
                            }
                            tmp = tmp[parts[i_4]];
                        }
                    }
                    else {
                        res[name_1] = v;
                    }
                }
            });
            // return num_changes ? res : false;
            return res;
        };
        exports.formdata = formdata;
    });
    define("fn/convert/fromXml", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fromXml = void 0;
        /**
         * Parses XML and returns an object.
         *
         * Picked from https://stackoverflow.com/questions/4200913/xml-to-javascript-object
         *
         * @memberof bbn.fn
         * @param   {String} xml       The XML to be parsed
         * @param   {Array}  arrayTags An array of tag names which should always be returned as array (even if single)
         * @returns {Object}
         */
        var fromXml = function (xml, arrayTags) {
            var dom = null;
            if (window.DOMParser)
                dom = new DOMParser().parseFromString(xml, "text/xml");
            else if (window["ActiveXObject"]) {
                dom = new window["ActiveXObject"]("Microsoft.XMLDOM");
                dom.async = false;
                if (!dom.loadXML(xml))
                    throw dom.parseError.reason + " " + dom.parseError.srcText;
            }
            else
                throw new Error("cannot parse xml string!");
            function parseNode(xmlNode, result) {
                if (xmlNode.nodeName == "#text") {
                    var v = xmlNode.nodeValue;
                    if (v.trim())
                        result["#text"] = v;
                    return;
                }
                var jsonNode = {}, existing = result[xmlNode.nodeName];
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
                    for (var _i = 0, _a = xmlNode.attributes; _i < _a.length; _i++) {
                        var attribute = _a[_i];
                        jsonNode[attribute.nodeName] = attribute.nodeValue;
                    }
                for (var _b = 0, _c = xmlNode.childNodes; _b < _c.length; _b++) {
                    var node = _c[_b];
                    parseNode(node, jsonNode);
                }
            }
            var result = {};
            for (var _i = 0, _a = dom.childNodes; _i < _a.length; _i++) {
                var node = _a[_i];
                parseNode(node, result);
            }
            return result;
        };
        exports.fromXml = fromXml;
    });
    define("fn/datetime/ftime", ["require", "exports", "fn/datetime/date", "fn/type/isDate", "fn/type/isString"], function (require, exports, date_js_6, isDate_js_7, isString_js_17) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.ftime = void 0;
        /**
         * @method   ftime
         * @todo     Add method description for ftime
         * @global
         * @memberof bbn.fn
         * @returns  {*}
         */
        var ftime = function (d, wrong_result) {
            var r = (0, date_js_6.date)(d);
            if (!(0, isDate_js_7.isDate)(r)) {
                return wrong_result && (0, isString_js_17.isString)(wrong_result) ? wrong_result : '';
            }
            if (undefined !== dayjs) {
                return dayjs(r).calendar();
            }
            return r.toLocaleDateString();
        };
        exports.ftime = ftime;
    });
    /**
     * Removes duplicate values from an array.
     *
     * Takes an input array and returns a new array without duplicate values.
     *
     * @method   unique
     * @global
     * @example
     * ```javascript
     * bbn.fn.unique(["a", "b", "a", "b", "a", "b", "c", "c", "d"]);
     * // ["a", "b", "c", "d"]
     * ```
     * @memberof bbn.fn
     * @param    {Array} arr
     * @returns  {Array}
     */
    define("fn/object/unique", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.unique = void 0;
        var unique = function (arr) {
            return arr.filter(function (el, index, ar) {
                return index === ar.indexOf(el);
            });
        };
        exports.unique = unique;
    });
    define("fn/html/getAllTags", ["require", "exports", "fn/object/unique"], function (require, exports, unique_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getAllTags = void 0;
        /**
         * Gets all the tag names present in the DOM
         * @returns array
         */
        var getAllTags = function () {
            return (0, unique_js_1.unique)(Array.prototype.map.apply(document.all, [function (a) { return a.tagName.toLowerCase(); }]));
        };
        exports.getAllTags = getAllTags;
    });
    define("fn/html/getAncestors", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getAncestors = void 0;
        var getAncestors = function (ele, selector) {
            if (selector === void 0) { selector = null; }
            var r = [];
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
    define("fn/html/getAttributes", ["require", "exports", "fn/browser/error"], function (require, exports, error_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getAttributes = void 0;
        /**
         * Check if the property contain sizing
         * @return {Boolean}
         */
        var getAttributes = function (ele) {
            if (!ele.getAttributeNames) {
                (0, error_js_3.error)('The element is not a proper HTML Element');
            }
            var res = Object.create(null);
            ele.getAttributeNames().forEach(function (name) {
                res[name] = ele.getAttribute(name);
            });
            return res;
        };
        exports.getAttributes = getAttributes;
    });
    define("fn/browser/getBrowserName", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getBrowserName = void 0;
        /**
         * Gets the browser's name
         * @method getBrowserName
         * @global
         * @memberof bbn.fn
         * @returns {String}
         */
        var getBrowserName = function () {
            var userAgent = navigator.userAgent.toLowerCase();
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
    define("fn/browser/getBrowserVersion", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getBrowserVersion = void 0;
        /**
         * Gets the browser's version
         * @method getBrowserVersion
         * @global
         * @memberof bbn.fn
         * @returns {String}
         */
        var getBrowserVersion = function () {
            var userAgent = navigator.userAgent.toLowerCase();
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
    define("fn/browser/getCookie", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getCookie = void 0;
        /**
         * If it exsists returns the cookie corresponding to the given name.
         *
         * @method   getCookie
         * @example
         * ``` javascript
         * // 'en'
         * bbn.fn.getCookie('lang');
         * ```
         * @global
         * @memberof bbn.fn
         * @param    {String} name
         * @returns
         */
        var getCookie = function (name) {
            var nameEqual = name + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEqual) == 0) {
                    var st = c.substring(nameEqual.length, c.length);
                    if (st) {
                        return JSON.parse(unescape(st)).value;
                    }
                }
            }
            return null;
        };
        exports.getCookie = getCookie;
    });
    define("fn/style/getCssVar", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getCssVar = void 0;
        /**
         * Gets a CSS variable value
         * @param {String*} varname
         * @returns
         */
        var getCssVar = function (varname) {
            if (varname.indexOf("--") !== 0) {
                varname = "--" + varname;
            }
            return getComputedStyle(document.documentElement).getPropertyValue(varname);
        };
        exports.getCssVar = getCssVar;
    });
    define("fn/datetime/getDay", ["require", "exports", "fn/datetime/date"], function (require, exports, date_js_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getDay = void 0;
        /**
         * @method   getDay
         * @ignore
         * @todo     Add method description for getDay
         * @global
         * @memberof bbn.fn
         * @param    {String|Date} v
         * @returns
         */
        var getDay = function (v) {
            var biss = 1972;
            var d = (0, date_js_7.date)(v);
            if (d) {
                var t = d.getTime(), y = d.getYear(), m = d.getMonth(), days = (y - 1970) * 365;
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
    define("fn/browser/getDeviceType", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getDeviceType = void 0;
        /**
         * Returns the current device type.
         * @method   getDeviceType
         * @global
         * @example
         * ``` javascript
         * bbn.fn.getDeviceType();
         * // mobile
         * ```
         * @memberof bbn.fn
         * @returns  {String}
         */
        var getDeviceType = function () {
            var userAgent = navigator.userAgent.toLowerCase();
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
    define("fn/html/getHTMLOfSelection", ["require", "exports", "fn/browser/log"], function (require, exports, log_js_15) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getHTMLOfSelection = void 0;
        var getHTMLOfSelection = function () {
            var range;
            var selection = window.getSelection();
            if (selection.rangeCount > 0) {
                range = selection.getRangeAt(0);
                (0, log_js_15.log)('RANGE', range);
                var clonedSelection = range.cloneContents();
                (0, log_js_15.log)('clonedSelection', clonedSelection);
                var div = document.createElement('div');
                div.appendChild(clonedSelection);
                return div.innerHTML;
            }
            else {
                return '';
            }
        };
        exports.getHTMLOfSelection = getHTMLOfSelection;
    });
    define("fn/browser/getEventData", ["require", "exports", "fn/html/getHTMLOfSelection", "fn/loop/each"], function (require, exports, getHTMLOfSelection_js_1, each_js_15) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getEventData = void 0;
        /**
         * Returns a promise having the event's data as argument.
         * @method   getEventData
         * @global
         * @example
         * ``` javascript
         * let type = e.type;
         *   bbn.fn.getEventData(e).then((data) => {
         *     bbn.fn.log("DATA FROM " + type, data);
         *   });
         * ```
         * @memberof bbn.fn
         * @returns  {Promise}
         */
        var getEventData = function (e) {
            var dt = e.dataTransfer || e.clipboardData;
            var t = dt.getData('Text');
            var res = { raw: t, files: [], str: [] };
            var p = new Promise(function (ok, err) {
                var done = !(dt instanceof DataTransfer);
                if (!t && e.type === 'copy') {
                    var sel = window.getSelection();
                    res.raw = sel.toString();
                    var html = (0, getHTMLOfSelection_js_1.getHTMLOfSelection)();
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
                    var strings_1 = [];
                    var num_1 = dt.items.length;
                    (0, each_js_15.each)(dt.items, function (item, idx) {
                        var kind = item.kind;
                        var type = item.type;
                        if (kind === 'file') {
                            var cp = dt.files[idx];
                            if (!type && cp.name) {
                                var bits = cp.name.split('.');
                                type = bits[bits.length - 1];
                            }
                            var name_2 = cp ? cp.name : bbn._('untitled');
                            var size = cp ? cp.size : null;
                            var lastModified = cp ? cp.lastModified : null;
                            var blob = item.getAsFile();
                            if (blob) {
                                done = true;
                                num_1--;
                                res.files.push({
                                    type: type,
                                    data: blob,
                                    name: name_2,
                                    size: size,
                                    mdate: lastModified,
                                });
                                strings_1.push(name_2);
                                if (!num_1) {
                                    if (!res.raw) {
                                        res.raw = strings_1.join(', ');
                                    }
                                    ok(res);
                                }
                            }
                            else {
                                bbn.fn.defaultErrorFunction(bbn._('Impossible to read the file') + ' ' + name_2);
                            }
                        }
                        else {
                            done = true;
                            item.getAsString(function (data) {
                                num_1--;
                                res.str.push({
                                    type: type,
                                    data: data,
                                });
                                if (type === 'text/plain') {
                                    strings_1.push(name);
                                }
                                if (!num_1) {
                                    if (!res.raw) {
                                        res.raw = strings_1.join(', ');
                                    }
                                    ok(res);
                                }
                            });
                        }
                    });
                }
                if (!done) {
                    setTimeout(function () {
                        ok(res);
                    });
                }
            });
            return p;
        };
        exports.getEventData = getEventData;
    });
    define("fn/object/getField", ["require", "exports", "fn/object/getRow"], function (require, exports, getRow_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getField = void 0;
        /**
          * Returns the value of the given field (property) from the first object matching the given filter in an array of objects.
          *
          * The filtering arguments follow the same scheme as bbn.fn.search.
          *
          * @method   getField
          * @global
          * @example
          * ```javascript
          * let ar = [
          *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
          *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
          *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
          *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
          * ];
          * bbn.fn.getField(ar, "name", {id: 256});
          * // Star wars
          * bbn.fn.getField(ar, "name", "id", 689);
          * // Goonies
          * ```
          * @memberof bbn.fn
          * @param    {Array}                    arr       The subject array
          * @param    {String}                   field     The property from which the value is returned
          * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
          * @param    {*}                        val       The value with which comparing the given property
          * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
          * @returns  {*}
          */
        var getField = function (arr, field, prop, val, operator) {
            if (prop === void 0) { prop = ''; }
            if (val === void 0) { val = null; }
            if (operator === void 0) { operator = '='; }
            var r;
            if (field && (r = (0, getRow_js_2.getRow)(arr, prop, val, operator))) {
                return r[field];
            }
            return undefined;
        };
        exports.getField = getField;
    });
    define("fn/object/getFieldValues", ["require", "exports", "fn/type/checkType", "fn/object/filter", "fn/loop/each"], function (require, exports, checkType_js_4, filter_js_3, each_js_16) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getFieldValues = void 0;
        /**
         * Returns all the unique values of the given field (property) from the first object matching the given filter in an array.
         *
         * The filtering arguments follow the same scheme as bbn.fn.search.
         *
         * @method   getFieldValues
         * @global
         * @example
         * ```javascript
         * let ar = [
         *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
         *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
         *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
         *   {name: "Barry Lindon", director: "Stanley Kubrick", year: 1975, id: 802}
         * ];
         * bbn.fn.getFieldValues(ar, "director");
         * // ["Steven Spielberg", "George Lucas", "Stanley Kubrick"]
         * bbn.fn.getFieldValues(ar, "name", {year: 1975});
         * // ["Jaws", "Barry Lindon"]
         * ```
         * @memberof bbn.fn
         * @param    {Array}                    arr       The subject array
         * @param    {String}                   field     The property from which the values are returned
         * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
         * @param    {*}                        val       The value with which comparing the given property
         * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
         * @returns  {*}
         */
        var getFieldValues = function (arr, field, prop, val, operator) {
            (0, checkType_js_4.checkType)(field, 'string');
            if (prop) {
                arr = (0, filter_js_3.filter)(arr, prop, val, operator);
            }
            var res = [];
            (0, each_js_16.each)(arr, function (a) { return (res.indexOf(a[field]) === -1 ? res.push(a[field]) : null); });
            return res;
        };
        exports.getFieldValues = getFieldValues;
    });
    define("fn/string/removeHtmlComments", ["require", "exports", "fn/type/isString"], function (require, exports, isString_js_18) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeHtmlComments = void 0;
        var removeHtmlComments = function (str) {
            if (!(0, isString_js_18.isString)(str)) {
                return str;
            }
            return str.replace(/<!--[\s\S]*?-->/g, '');
        };
        exports.removeHtmlComments = removeHtmlComments;
    });
    define("fn/html/getHtml", ["require", "exports", "fn/string/removeHtmlComments"], function (require, exports, removeHtmlComments_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getHtml = void 0;
        var getHtml = function (ele, stripComments) {
            if (stripComments === void 0) { stripComments = false; }
            var st = ele.innerHTML();
            if (stripComments) {
                st = (0, removeHtmlComments_js_1.removeHtmlComments)(st);
            }
            return st.trim();
        };
        exports.getHtml = getHtml;
    });
    define("fn/html/getPath", ["require", "exports", "fn/string/replaceAll"], function (require, exports, replaceAll_js_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getPath = void 0;
        /**
         * @method   getPath
         * @todo     Add method description for getPath
         * @global
         * @ignore
         * @memberof bbn.fn
         * @returns  {*}
         */
        var getPath = function (element) {
            var path, 
            //node = $(element),
            node = element, done = 0;
            var _loop_1 = function () {
                //let realNode = node[0],
                var realNode = node, name_3 = realNode.localName;
                if (!name_3)
                    return "break";
                if (realNode === document.body)
                    return "break";
                if (realNode.id) {
                    return { value: '#' + realNode.id };
                }
                if (!done) {
                    if (realNode.className && realNode.className !== ' ') {
                        name_3 += '.' + (0, replaceAll_js_4.replaceAll)(' ', '.', (0, replaceAll_js_4.replaceAll)('  ', ' ', realNode.className));
                    }
                    done = 1;
                }
                //var parent = node.parent(),
                var parent_1 = node.parentNode, 
                //sameTagSiblings = parent.children(name);
                sameTagSiblings = parent_1.children.filter(function (val) {
                    return val.tagName === name_3;
                });
                if (sameTagSiblings.length > 1) {
                    //var allSiblings = parent.children(),
                    var allSiblings = parent_1.children, 
                    //index = allSiblings.index(realNode) + 1;
                    index = allSiblings.indexOf(realNode) + 1;
                    if (index > 1) {
                        name_3 += ':nth-child(' + index + ')';
                    }
                }
                path = name_3 + (path ? '>' + path : '');
                node = parent_1;
            };
            while (node.length) {
                var state_1 = _loop_1();
                if (typeof state_1 === "object")
                    return state_1.value;
                if (state_1 === "break")
                    break;
            }
            return path;
        };
        exports.getPath = getPath;
    });
    define("fn/object/getProp", ["require", "exports", "fn/type/checkType"], function (require, exports, checkType_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getProp = void 0;
        /**
         * Gets the given property from the given object
         * @param {Object} obj
         * @param {String} prop
         * @returns
         */
        var getProp = function (obj, prop) {
            (0, checkType_js_5.checkType)(obj, "object", bbn._("The obj must be an object in setProp"));
            (0, checkType_js_5.checkType)(prop, "string", bbn._("The prop must be a string in setProp"));
            return obj[prop];
        };
        exports.getProp = getProp;
    });
    define("fn/style/getScrollBarSize", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getScrollBarSize = void 0;
        var getScrollBarSize = function () {
            if (bbn.env.scrollBarSize === undefined) {
                var outer = document.createElement('div');
                outer.style.visibility = 'hidden';
                outer.style.width = '100px';
                if ('msOverflowStyle' in outer.style) {
                    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
                }
                document.body.appendChild(outer);
                var widthNoScroll = outer.offsetWidth;
                // force scrollbars
                outer.style.overflow = 'scroll';
                // add innerdiv
                var inner = document.createElement('div');
                inner.style.width = '100%';
                outer.appendChild(inner);
                var widthWithScroll = inner.offsetWidth;
                // remove divs
                outer.parentNode.removeChild(outer);
                var sz = widthNoScroll - widthWithScroll;
                bbn.env.scrollBarSize = sz ? sz + 1 : 0;
            }
            return bbn.env.scrollBarSize;
        };
        exports.getScrollBarSize = getScrollBarSize;
    });
    define("fn/html/getText", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getText = void 0;
        var getText = function (ele) {
            return ele.innerText().trim();
        };
        exports.getText = getText;
    });
    define("fn/misc/getTimeoff", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getTimeoff = void 0;
        /**
         * Returns the length of time the window has not been focused in seconds.
         * @method   getTimeoff
         * @global
         * @example
         * ``` javascript
         * bbn.fn.getTimeoff();
         * // 0
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var getTimeoff = function () {
            if (!bbn.env.isFocused) {
                return Math.round(new Date().getTime() / 1000 - bbn.env.timeoff);
            }
            return 0;
        };
        exports.getTimeoff = getTimeoff;
    });
    define("fn/browser/happy", ["require", "exports", "fn/browser/log"], function (require, exports, log_js_16) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.happy = void 0;
        /**
         * Logs the given argument in the browser's console highlighting it with a green background.
         * @method   happy
         * @global
         * @example
         * ``` javascript
         * bbn.fn.happy('I want to log the success of my function');
         * ```
         * @memberof bbn.fn
         * @param    {...any} args
         * @returns
         */
        var happy = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args.unshift({
                _bbn_console_level: 3,
                _bbn_console_style: 'color: white; background: green; font-size: 18px;',
            });
            log_js_16.log.apply(this, args);
            return this;
        };
        exports.happy = happy;
    });
    define("fn/convert/hex2rgb", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.hex2rgb = void 0;
        /**
         * Convert an hexadecimmal string to RGB.
         *
         * Converts a string that expresses a color in hexadecimal format into an object with
         * the properties that define the color and the corresponding value.
         *
         * @method   hex2rgb
         * @global
         *
         * @example
         * ```javascript
         * //{r:255, g:0, b:0}
         * bbn.fn.hex2rgb("#FF0000");
         * ```
         *
         * @memberof bbn.fn
         * @returns  {*}
         */
        var hex2rgb = function (hex) {
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
    define("fn/browser/history", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.history = void 0;
        var history = function () {
            return window.history || false;
        };
        exports.history = history;
    });
    define("fn/html/html2text", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.html2text = void 0;
        /**
         * Convert text in html format to plain text.
         *
         * @method   html2text
         * @global
         *
         * @example
         * ```javascript
         * //"Hello world!"
         * bbn.fn.html2text("<div><p>Hello <b>world!</b></p></div>");
         * ```
         * @memberof bbn.fn
         * @param    {String} st
         * @returns {String}
         */
        var html2text = function (st) {
            var $test = document.createElement("div");
            $test.innerHTML = st;
            st = $test.innerText;
            return st;
        };
        exports.html2text = html2text;
    });
    define("fn/convert/imageToCanvas", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.imageToCanvas = void 0;
        /**
         * Draws the given html image nto a canvas.
         * @method   imageToCanvas
         * @example
         * ``` javascript
         * //<canvas width="60" height="32"></canvas>
         * bbn.fn.imageToCanvas('<img src="path/myImage.png">');
         * ```
         * @global
         * @memberof bbn.fn
         * @param {HTMLElement} img
         * @returns {HTMLCanvasElement}
         */
        var imageToCanvas = function (img) {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.getContext('2d').drawImage(img, 0, 0);
            return canvas;
        };
        exports.imageToCanvas = imageToCanvas;
    });
    define("fn/convert/imgToBase64", ["require", "exports", "fn/convert/imageToCanvas"], function (require, exports, imageToCanvas_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.imgToBase64 = void 0;
        var imgToBase64 = function (img, type) {
            if (type === void 0) { type = 'image/png'; }
            var canvas = (0, imageToCanvas_js_1.imageToCanvas)(img);
            return canvas.toDataURL(type);
        };
        exports.imgToBase64 = imgToBase64;
    });
    define("fn/browser/info", ["require", "exports", "fn/browser/log"], function (require, exports, log_js_17) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.info = void 0;
        /**
         * Logs the given argument in the browser's console highlighting it with a blue background.
         * @method   info
         * @global
         * @memberof bbn.fn
         * @param    {...any} args
         * @returns  {*}
         */
        var info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args.unshift({
                //_bbn_console_mode: "info",
                _bbn_console_level: 4,
                _bbn_console_style: 'color: #EEE; background: blue; font-size: 12px;',
            });
            log_js_17.log.apply(this, args);
            return this;
        };
        exports.info = info;
    });
    define("fn/ajax/treatAjaxArguments", ["require", "exports", "fn/type/isObject", "fn/type/isFunction", "fn/string/substr", "fn/object/numProperties"], function (require, exports, isObject_js_14, isFunction_js_8, substr_js_9, numProperties_js_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.treatAjaxArguments = void 0;
        /**
         * Transforms unordered arguments into a configuratiuon object for Ajax shortcut functions.
         *
         * The final object will have the following arguments: url, obj, datatype, force, successFn,
         * errorFn, abortFn, e, and ele; The rules are:
         * * The first string found is the URL
         * * The second string found is the datatype
         * * The first function is successFn
         * * The second function is errorFn
         * * The third function is abortFn
         * * A boolean true is force
         * * An Event is e
         * * An HTML element is ele
         *
         * If no object is given the _bbn property will be added in order to always post something
         * and let the bbn server scripts know if a whole DOM is requested or a JSON answer
         *
         * @method   treatAjaxArguments
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * bbn.fn.treatAjaxArguments(['my/script', 'json', {a:1, b:2}, () => bbn.fn.log('Hi'), () => bbn.fn.log('Bye'), () => bbn.fn.log('Argh'), true])
         * // {
         * //   "url": "my/script",
         * //   "datatype": "json",
         * //   "obj": {
         * //     "a": 1,
         * //     "b": 2
         * //   },
         * //   "successFn": () => bbn.fn.log('Hi'),
         * //   "errorFn": () => bbn.fn.log('Bye'),
         * //   "abortFn": () => bbn.fn.log('Argh'),
         * //   "force": true
         * // }
         *
         * bbn.fn.treatAjaxArguments(['my/script?id=1'])
         * // {
         * //   "url": "my/script?id=1",
         * //   "obj": {
         * //     "_bbn": "public"
         * //   },
         * //   "datatype": "json"
         * // }
         * ```
         *
         * @param    {*}      args
         *
         * @returns  {Object} The configuration object
         */
        var treatAjaxArguments = function (args) {
            var cfg = {};
            var t;
            var i;
            if ((0, isObject_js_14.isObject)(args[0]) && args.length === 1) {
                return args[0];
            }
            for (i = 0; i < args.length; i++) {
                t = typeof args[i];
                t = t.toLowerCase();
                /* Callbacks */
                if ((0, isFunction_js_8.isFunction)(args[i])) {
                    if (cfg["errorFn"] && !cfg["abortFn"]) {
                        cfg["abortFn"] = args[i];
                    }
                    if (cfg["successFn"] && !cfg["errorFn"]) {
                        cfg["errorFn"] = args[i];
                    }
                    else if (!cfg["successFn"]) {
                        cfg["successFn"] = args[i];
                    }
                }
                else if (args[i] === 1 || args[i] === true) {
                    /* Force */
                    cfg["force"] = true;
                }
                else if (t === "string") {
                    if (!cfg["url"]) {
                        /* Hash */
                        if (args[i].indexOf("#") === 0 ||
                            args[i].indexOf(bbn.env.root + "#") === 0) {
                            cfg["url"] = (0, substr_js_9.substr)(args[i], bbn.env.root.length);
                        }
                        else {
                            /* Link */
                            cfg["url"] = args[i];
                            if (cfg["url"].indexOf(bbn.env.root) === 0) {
                                cfg["url"] = (0, substr_js_9.substr)(cfg["url"], bbn.env.root.length);
                            }
                        }
                    }
                    else {
                        /* Ajax datatype */
                        cfg["datatype"] = args[i];
                    }
                }
                else if (args[i] && t === "object") {
                    /* Event */
                    if (args[i] instanceof Event) {
                        cfg["e"] = args[i];
                    }
                    else if (!cfg["ele"] && args[i].nodeType === 1) {
                        /* HTML Element */
                        cfg["ele"] = args[i];
                    }
                    else if (t.toLowerCase() === "object") {
                        /* An object to post */
                        cfg["obj"] = args[i];
                    }
                }
            }
            if (!cfg["url"] && (0, numProperties_js_6.numProperties)(cfg)) {
                cfg["url"] = bbn.env.path;
            }
            if (cfg["obj"] === undefined) {
                cfg["obj"] = { _bbn: "public" };
            }
            if (!cfg["datatype"]) {
                cfg["datatype"] = "json";
            }
            return cfg;
        };
        exports.treatAjaxArguments = treatAjaxArguments;
    });
    define("fn/ajax/setNavigationVars", ["require", "exports", "fn/string/substr", "fn/object/filter", "fn/object/extend", "fn/html/html2text"], function (require, exports, substr_js_10, filter_js_4, extend_js_5, html2text_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setNavigationVars = void 0;
        /**
         * Changes the URL and the associated variables and updates the history.
         *
         * @method   setNavigationVars
         * @todo     Add method description for setNavigationVars
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * // Changing URL
         * bbn.fn.setNavigationVars('my/page', 'My page');
         * // Replacing the previous state
         * bbn.fn.setNavigationVars('my/page/deeper', 'My deeper page', null, true);
         * ```
         *
         * @param    {String}  url   The URL which will become the location.href
         * @param    {String}  title The title corresponding to the given URL
         * @param    {Object}  data  The data if any
         * @param    {Boolean} repl  If true the history state object will replace the current one, will be added otherwise
         *
         * @returns  {void}
         */
        var setNavigationVars = function (url, title, data, repl) {
            if (data === void 0) { data = null; }
            if (repl === void 0) { repl = false; }
            // Current path becomes old path
            bbn.env.old_path = bbn.env.path;
            // URL includes the domain
            bbn.env.url = ['https:/', 'http://'].includes((0, substr_js_10.substr)(url, 0, 7)) ? url : bbn.env.root + url;
            // Path does not
            bbn.env.path = (0, substr_js_10.substr)(bbn.env.url, bbn.env.root.length);
            // Params will include each part of the URL
            bbn.env.params = (0, filter_js_4.filter)(bbn.env.path.split('/'), function (v) {
                return v !== '';
            });
            // Managing history
            var h = window.history;
            if (h) {
                // Current state
                var state = h.state;
                // Future state
                var obj = {
                    url: bbn.env.path,
                    old_path: bbn.env.old_path || null,
                    data: data || {},
                    reload: false
                };
                // If same URL we replace
                if (state && state.url === bbn.env.path) {
                    if (state.data) {
                        (0, extend_js_5.extend)(obj.data, state.data);
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
                    title = (0, html2text_js_1.html2text)(title);
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
    define("fn/ajax/link", ["require", "exports", "fn/ajax/treatAjaxArguments", "fn/ajax/getLoader", "fn/ajax/ajax", "fn/browser/log", "fn/object/extend", "fn/type/isObject", "fn/ajax/callback", "fn/ajax/setNavigationVars"], function (require, exports, treatAjaxArguments_js_1, getLoader_js_3, ajax_js_2, log_js_18, extend_js_6, isObject_js_15, callback_js_1, setNavigationVars_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.link = void 0;
        /**
         * Follows a link and if needed by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.
         *
         * Once bbn has been initiated this function will be triggered every time a link is clicked.
         * It accepts the same arguments as seen in treatAjaxArguments but will tipically just be called with a URL,
         * the defaultLinkURL functions being in charge of loading the content
         *
         * @method   link
         * @todo     Manage anchors + returned data unclear
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * // Will open in a new window/tab
         * bbn.fn.link('https://nytimes.com');
         * // Will send an Ajax request
         * bbn.fn.link('my/page');
         * // Will open your default email program
         * bbn.fn.link('mailto:postmaster@test.com');
         * ```
         *
         * @returns
         */
        var link = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var cfg = (0, treatAjaxArguments_js_1.treatAjaxArguments)(args);
            var ok = 1;
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
                setTimeout(function () {
                    bbn.env.ignoreUnload = false;
                }, 0);
                return false;
            }
            if ((0, getLoader_js_3.getLoader)(cfg.url)) {
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
                else if (bbn.fn.defaultPreLinkFunction) {
                    var tmp = bbn.fn.defaultPreLinkFunction(cfg.url, cfg.force, cfg.ele);
                    if (tmp.data !== undefined) {
                        (0, extend_js_6.extend)(cfg.obj, tmp.data);
                        ok = 1;
                    }
                }
                if (ok) {
                    if (ok !== 1 && typeof ok === 'string') {
                        cfg.url = ok;
                    }
                    /** todo Do we keep obj in the unique string or do we make that only one concurrent connection to the same address can occur at the same time? */
                    var errSt_1 = bbn._('The Ajax call to') + ' ' + cfg.url + ' ';
                    return (0, ajax_js_2.ajax)(cfg.url, cfg.datatype, cfg.obj, function (res) {
                        if (!res) {
                            (0, log_js_18.log)(errSt_1 + bbn._('returned no answer'));
                        }
                        if ((0, isObject_js_15.isObject)(res)) {
                            // If there's nothing in the result, just an empty object, the callback stops here and the URL is not changed
                            if (Object.keys(res).length === 0) {
                                (0, log_js_18.log)(errSt_1 + bbn._('returned an empty object'));
                            }
                            if (res.new_url) {
                                res.old_path = cfg.url;
                                cfg.url = res.new_url;
                            }
                            else if (res.url && cfg.url !== res.url) {
                                res.old_path = cfg.url;
                            }
                        }
                        if ((0, callback_js_1.callback)(cfg.url, res, cfg.successFn, null, cfg.ele) && res.noNav === undefined) {
                            // This solution is not very clean (we can't shorten a URL)
                            if (bbn.env.path.indexOf(cfg.url) !== 0) {
                                (0, setNavigationVars_js_1.setNavigationVars)(cfg.url, (res.title ? res.title + ' - ' : '') + bbn.env.siteTitle);
                            }
                        }
                    }, cfg.errorFn || null);
                }
            }
            return true;
        };
        exports.link = link;
    });
    define("fn/ajax/post", ["require", "exports", "fn/ajax/treatAjaxArguments", "fn/ajax/ajax", "fn/ajax/callback"], function (require, exports, treatAjaxArguments_js_2, ajax_js_3, callback_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.post = void 0;
        /**
         * Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.
         *
         * URL is the only mandatory argument (see treatAjaxArguments for the arguments).
         *
         * @method   post
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * bbn.fn.post('logout').then(() => {
         *   document.location.reload();
         * });
         * // With data
         * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}).then((d) => {
         *  if (d && d.success) {
         *    alert('Welcome!');
         *  }
         * });
         * // With the callback as argument
         * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}, (d) => {
         *  if (d && d.success) {
         *    alert('Welcome!');
         *  }
         * }, (err) => {
         *   bbn.fn.log(err);
         *   mySpecialErrorFunction(err);
         * });
         * ```
         *
         * @returns  {undefined|Promise}
         */
        var post = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var cfg = (0, treatAjaxArguments_js_2.treatAjaxArguments)(args);
            if (cfg.url) {
                return (0, ajax_js_3.ajax)(cfg.url, cfg.datatype, cfg.obj, function (res) {
                    (0, callback_js_2.callback)(cfg.url, res, cfg.successFn, null, cfg.ele);
                }, cfg.errorFn, cfg.abortFn);
            }
        };
        exports.post = post;
    });
    define("fn/form/submit", ["require", "exports", "fn/form/formdata", "fn/ajax/post"], function (require, exports, formdata_js_1, post_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.submit = void 0;
        /**
         * Submit a form's data through an Ajax request.
         *
         * It will also prevent the event if given, and execute the given callback,
         * or look for one in the data-script attribute.
         *
         * @method   submit
         * @global
         * @memberof bbn.fn
         * @fires    {*}
         * @fires    {*}
         *
         * @param    {HTMLElement} form The form to submit
         * @param    {Event}       e    The optional submit event - which will be prevented
         * @param    {Function}    fn   An optional callback function
         *
         * @returns  {*}
         */
        var submit = function (form, e, fn) {
            var url = form.getAttribute('action') || bbn.env.path;
            var data;
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
                data = (0, formdata_js_1.formdata)(form);
                if (data) {
                    //$form.attr("action", null);
                    form.setAttribute('action', null);
                    //$form.data("bbnSubmit", 1);
                    if (!fn) {
                        fn = form.getAttribute('data-script') ? eval(form.getAttribute('data-script')) : null;
                    }
                    if (fn) {
                        (0, post_js_1.post)(url, data, fn);
                    }
                    else {
                        (0, post_js_1.post)(url, data);
                    }
                }
            }
        };
        exports.submit = submit;
    });
    define("fn/style/resize", ["require", "exports", "fn/style/getCssVar", "fn/loop/each"], function (require, exports, getCssVar_js_1, each_js_17) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.resize = void 0;
        var resize = function () {
            var diffW = bbn.env.width !== window.innerWidth;
            var diffH = bbn.env.height !== window.innerHeight;
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
                var smallWidth = parseInt((0, getCssVar_js_1.getCssVar)('mobile-limit')) || 650;
                var newCls_1 = 'bbn-screen-' + (bbn.env.width < smallWidth ? 'small' : 'regular');
                var classes_1 = (document.body.className || '').split(' ');
                var done_1 = false;
                (0, each_js_17.each)(classes_1, function (cls, idx) {
                    var bits = cls.split('-');
                    if (bits.length === 3 && cls.indexOf('bbn-screen-') === 0) {
                        done_1 = true;
                        if (cls !== newCls_1) {
                            classes_1.splice(idx, 1, newCls_1);
                        }
                        return false;
                    }
                });
                if (!done_1) {
                    classes_1.push(newCls_1);
                }
                bbn.fn.defaultResizeFunction();
                document.body.className = classes_1.join(' ');
            }
        };
        exports.resize = resize;
    });
    define("fn/browser/isMobileDevice", ["require", "exports", "fn/browser/getDeviceType"], function (require, exports, getDeviceType_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isMobileDevice = void 0;
        var isMobileDevice = function () {
            return (0, getDeviceType_js_1.getDeviceType)() === 'mobile';
        };
        exports.isMobileDevice = isMobileDevice;
    });
    define("fn/browser/isTabletDevice", ["require", "exports", "fn/browser/getDeviceType"], function (require, exports, getDeviceType_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isTabletDevice = void 0;
        /**
          * Returns true if the current device type is a tablet.
          * @method   isTabletDevice
          * @global
          * @example
          * ``` javascript
          * bbn.fn.isTabletDevice();
          * // false
          * ```
          * @memberof bbn.fn
          * @returns  {Boolean}
          */
        var isTabletDevice = function () {
            return (0, getDeviceType_js_2.getDeviceType)() === 'tablet';
        };
        exports.isTabletDevice = isTabletDevice;
    });
    define("fn/browser/isMobile", ["require", "exports", "fn/browser/isMobileDevice", "fn/browser/isTabletDevice"], function (require, exports, isMobileDevice_js_1, isTabletDevice_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isMobile = void 0;
        /**
         * Returns true if the current browser is on a mobile device (smartphone or tablet).
         * @method   isMobile
         * @global
         * @example
         * ``` javascript
         * bbn.fn.isMobile();
         * // false
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isMobile = function () {
            return (0, isMobileDevice_js_1.isMobileDevice)() || (0, isTabletDevice_js_1.isTabletDevice)();
        };
        exports.isMobile = isMobile;
    });
    define("fn/init", ["require", "exports", "fn/string/substr", "fn/loop/each", "fn/object/extend", "fn/style/addColors", "fn/ajax/link", "fn/form/submit", "fn/style/resize", "fn/browser/isMobile", "fn/browser/isTabletDevice", "fn/type/isFunction", "fn/browser/log"], function (require, exports, substr_js_11, each_js_18, extend_js_7, addColors_js_1, link_js_1, submit_js_1, resize_js_1, isMobile_js_1, isTabletDevice_js_2, isFunction_js_9, log_js_19) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.init = void 0;
        /**
         * Initializes the library bbn basing on the given configuration object.
         * - Gives to the environment the dimension of the window.innerWidth and window.innerHeight
         * - Defines the server's path (difference between the host and the current dir)
         * - Adds the colors contained in bbn.var.colors to define the css classes for background and colors.
         * - Adds the event listener to the document
         * - Activates the history
         * @method   init
         * @global
         * @memberof bbn.fn
         * @param    {Object} cfg
         * @returns
         */
        var init = function (cfg, force) {
            var parts;
            if (!bbn.env.isInit || force) {
                bbn.env.root =
                    document.baseURI.length > 0 ? document.baseURI : bbn.env.host;
                if (bbn.env.root.length && (0, substr_js_11.substr)(bbn.env.root, -1) !== "/") {
                    bbn.env.root += "/";
                }
                if (!bbn.env.isInit && typeof dayjs !== "undefined") {
                    (0, each_js_18.each)([
                        "advancedFormat",
                        "arraySupport",
                        "badMutable",
                        "buddhistEra",
                        "calendar",
                        "customParseFormat",
                        "dayOfYear",
                        "devHelper",
                        "duration",
                        "isBetween",
                        "isLeapYear",
                        "isSameOrAfter",
                        "isSameOrBefore",
                        "isToday",
                        "isTomorrow",
                        "isYesterday",
                        "isoWeek",
                        "isoWeeksInYear",
                        "localeData",
                        "localizedFormat",
                        "minMax",
                        "objectSupport",
                        "pluralGetSet",
                        "quarterOfYear",
                        "relativeTime",
                        "timezone",
                        "toArray",
                        "toObject",
                        "updateLocale",
                        "utc",
                        "weekOfYear",
                        "weekYear",
                        "weekday",
                    ], function (plugin) {
                        if (window["dayjs_plugin_" + plugin]) {
                            dayjs.extend(window["dayjs_plugin_" + plugin]);
                        }
                    });
                }
                /* The server's path (difference between the host and the current dir */
                if (typeof cfg === "object") {
                    (0, extend_js_7.extend)(true, bbn, cfg);
                }
                bbn.env.path = (0, substr_js_11.substr)(bbn.env.url, bbn.env.root.length);
                parts = bbn.env.path.split("/");
                //$.each(parts, function(i, v){
                (0, each_js_18.each)(parts, function (v, i) {
                    v = decodeURI(v.trim());
                    if (v !== "") {
                        bbn.env.params.push(v);
                    }
                });
                if (bbn.var.colors) {
                    (0, addColors_js_1.addColors)(bbn.var.colors);
                }
                if (bbn.env.lang && undefined !== dayjs) {
                    dayjs.locale(bbn.env.lang);
                }
                window.onfocus = function () {
                    bbn.env.isFocused = true;
                };
                window.onblur = function () {
                    bbn.env.isFocused = false;
                    bbn.env.timeoff = Math.round(new Date().getTime() / 1000);
                };
                document.addEventListener("focusin", function (e) {
                    if (e.target instanceof HTMLElement &&
                        !e.target.classList.contains("bbn-no")) {
                        bbn.env.focused = e.target;
                    }
                    bbn.env.last_focus = new Date().getTime();
                });
                document.addEventListener("click", function (e) {
                    bbn.env.last_focus = new Date().getTime();
                    if (bbn.env.nav !== "ajax") {
                        return;
                    }
                    var target = e.target;
                    if (target instanceof HTMLElement && target.tagName !== "A") {
                        var p = target;
                        while (p && p.tagName !== "A") {
                            if (p.tagName === "BODY") {
                                break;
                            }
                            p = p.parentElement;
                        }
                        if (p && p.tagName === "A") {
                            target = p;
                        }
                        else {
                            target = null;
                        }
                    }
                    if (target instanceof HTMLElement &&
                        target.hasAttribute("href") &&
                        !target.hasAttribute("target") &&
                        !target.classList.contains("bbn-no")) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, link_js_1.link)(target.getAttribute("href"));
                        return false;
                    }
                });
                (0, each_js_18.each)(document.querySelectorAll("form:not(.bbn-no), form:not(.bbn-form)"), function (ele) {
                    ele.addEventListener("submit", function (e) {
                        (0, submit_js_1.submit)(ele, e);
                    });
                });
                window.addEventListener("hashchange", function () {
                    bbn.env.hashChanged = new Date().getTime();
                }, false);
                window.addEventListener("resize", function () {
                    (0, resize_js_1.resize)();
                });
                window.addEventListener("orientationchange", function () {
                    (0, resize_js_1.resize)();
                });
                (0, resize_js_1.resize)();
                if ((0, isMobile_js_1.isMobile)()) {
                    document.body.classList.add("bbn-mobile");
                    if ((0, isTabletDevice_js_2.isTabletDevice)()) {
                        document.body.classList.add("bbn-tablet");
                    }
                }
                if (window.history) {
                    window.onpopstate = function (e) {
                        var h = window.history;
                        if (!bbn.env.historyDisabled && h) {
                            //e.preventDefault();
                            if (bbn.fn.defaultHistoryFunction(h.state)) {
                                var state = h.state;
                                if (state) {
                                    //link(substr(state.url, bbn.env.root.length), $.extend({title: state.title}, state.data));
                                    (0, link_js_1.link)(state.url, (0, extend_js_7.extend)({ title: state.title || bbn.env.siteTitle }, state.data || {}));
                                }
                                else if (state && state.data && (0, isFunction_js_9.isFunction)(state.data.script)) {
                                    state.data.script();
                                }
                            }
                        }
                    };
                }
                bbn.env.isInit = true;
                document.dispatchEvent(new Event("bbninit"));
                if (bbn.env.logging) {
                    (0, log_js_19.log)("Logging in bbn is enabled");
                }
            }
        };
        exports.init = init;
    });
    define("fn/browser/isActiveInterface", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isActiveInterface = void 0;
        /**
         * Tells if the interface is beeing active for the past x seconds.
         * @method   isActiveInterface
         * @global
         * @example
         * // true
         * ``` javascript
         * bbn.fn.isActiveInterface(54764654);
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isActiveInterface = function (secs) {
            if (secs === void 0) { secs = 600; }
            if (!bbn.env.last_focus) {
                return false;
            }
            var t = new Date().getTime();
            return t - bbn.env.last_focus < secs * 1000;
        };
        exports.isActiveInterface = isActiveInterface;
    });
    define("fn/type/isBoolean", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isBoolean = void 0;
        /**
         * Returns true if the given argument is a boolean
         * @method   isBoolean
         * @global
         * @example
         * ```javascript
         * const sb = true;
         * bbn.fn.isBoolean(sb); // true
         * const sb = 1;
         * bbn.fn.isBoolean(sb); // false
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isBoolean = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_16 = args; _a < args_16.length; _a++) {
                var a = args_16[_a];
                if (![true, false].includes(a)) {
                    return false;
                }
            }
            return true;
        };
        exports.isBoolean = isBoolean;
    });
    define("fn/type/isColor", ["require", "exports", "fn/type/isString"], function (require, exports, isString_js_19) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isColor = void 0;
        /**
         * Intended to check if the argument provided is a color.
         *
         * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
         *
         * @method   isColor
         * @global
         *
         * @example
         * ```javascript
         * bbn.fn.isColor("#FF0000")
         * //true
         * ```
         *
         * @example
         * ```javascript
         * bbn.fn.isColor("rgb 255, 0, 0");
         * //true
         * ```
         *
         * @example
         * ```javascript
         * bbn.fn.isColor("red");
         * //true
         * ```
         * @memberof bbn.fn
         * @param    {String} st
         * @returns  {Boolean}
         */
        var isColor = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            var reg = new RegExp("^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|rgba *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$", "i");
            for (var _a = 0, args_17 = args; _a < args_17.length; _a++) {
                var st = args_17[_a];
                if (!(0, isString_js_19.isString)(st)) {
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
    define("fn/type/isComment", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isComment = void 0;
        /**
         * Returns true if the given argument is a dom comment;
         * @method   isComment
         * @example
         * ```javascript
         * bbn.fn.isComment(node.childNodes[0]);
         * //true
         * ```
         * @global
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isComment = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_18 = args; _a < args_18.length; _a++) {
                var a = args_18[_a];
                if (!(a instanceof Comment)) {
                    return false;
                }
            }
            return true;
        };
        exports.isComment = isComment;
    });
    define("fn/browser/isDesktopDevice", ["require", "exports", "fn/browser/getDeviceType"], function (require, exports, getDeviceType_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isDesktopDevice = void 0;
        /**
         * Returns true if the current device type is a desktop.
         * @method   isDesktopDevice
         * @global
         * @example
         * ``` javascript
         * bbn.fn.isDesktopDevice();
         * // true
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isDesktopDevice = function () {
            return (0, getDeviceType_js_3.getDeviceType)() === 'desktop';
        };
        exports.isDesktopDevice = isDesktopDevice;
    });
    define("fn/type/isValidDimension", ["require", "exports", "fn/type/isNumber", "fn/string/substr"], function (require, exports, isNumber_js_7, substr_js_12) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isValidDimension = void 0;
        /**
         * Returns true if the given value is a valid CSS dimension string, false otherwise.
         *
         * @method   isValidDimension
         * @global
         * @memberof bbn.fn
         * @param    {String} st
         * @returns
         */
        var isValidDimension = function (st) {
            if (typeof st === "string" &&
                st.length > 0 &&
                (st.indexOf("calc") === 0 || (0, isNumber_js_7.isNumber)((0, substr_js_12.substr)(st, 0, 1)))) {
                var el = document.createElement("div");
                el.style.width = st;
                var res = !!el.style.width.length;
                el.remove();
                return res;
            }
            return false;
        };
        exports.isValidDimension = isValidDimension;
    });
    define("fn/type/isDimension", ["require", "exports", "fn/type/isValidDimension"], function (require, exports, isValidDimension_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isDimension = void 0;
        /**
         * Returns true if the given value is a valid CSS dimension string or a number, false otherwise.
         *
         * @method   isDimension
         * @global
         * @memberof bbn.fn
         * @param    {String} st
         * @returns
         */
        var isDimension = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_19 = args; _a < args_19.length; _a++) {
                var st = args_19[_a];
                if (typeof st !== "number" || st < 0) {
                    return false;
                }
                if (!(0, isValidDimension_js_1.isValidDimension)(st)) {
                    return false;
                }
            }
            return true;
        };
        exports.isDimension = isDimension;
    });
    define("fn/type/isEmail", ["require", "exports", "fn/type/isString"], function (require, exports, isString_js_20) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isEmail = void 0;
        /**
         * Intended to check if the argument provided is an e-mail address written correctly
         *
         * @method   isEmail
         * @global
         *
         * @example
         * ```javascript
         * bbn.fn.isEmail('test@testorg');
         * //false
         * ```
         *
         * @example
         * ```javascript
         * bbn.fn.isEmail('test@test.org');
         * //true
         * ```
         * @memberof bbn.fn
         * @param    {String} st
         * @returns  {Boolean}
         */
        var isEmail = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            for (var _a = 0, args_20 = args; _a < args_20.length; _a++) {
                var st = args_20[_a];
                if (!(0, isString_js_20.isString)(st)) {
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
    define("fn/type/isEvent", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isEvent = void 0;
        /**
         * Returns true if the given argument is an event.
         * @method   isEvent
         * @global
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isEvent = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_21 = args; _a < args_21.length; _a++) {
                var a = args_21[_a];
                if (!(a instanceof Event)) {
                    return false;
                }
            }
            return true;
        };
        exports.isEvent = isEvent;
    });
    define("fn/browser/isFocused", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isFocused = void 0;
        /**
         * Checks whether the given elemet is focused or not.
         *
         * @method   isFocused
         * @global
         * @example
         * ``` javascript
         * bbn.fn.isFocused(document.getElementById('input_name'));
         * // false
         * bbn.fn.isFocused(bbn.sel('.container'));
         * // true
         * ```
         * @memberof bbn.fn
         *
         * @param {Element} ele     The element to be checked for focus
         * @param {Boolean} contain If true will check if the focused element is contained in the given element
         *
         * @returns  {Boolean} True if focused
         */
        var isFocused = function (ele, contain) {
            if (contain === void 0) { contain = false; }
            return ele === document.activeElement || (contain && ele.contains && ele.contains(document.activeElement));
        };
        exports.isFocused = isFocused;
    });
    define("fn/type/isIP", ["require", "exports", "fn/type/isString"], function (require, exports, isString_js_21) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isIP = void 0;
        var isIP = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_22 = args; _a < args_22.length; _a++) {
                var st = args_22[_a];
                if (!(0, isString_js_21.isString)(st) || !bbn.var.regexp.ip.test(st)) {
                    return false;
                }
            }
            return true;
        };
        exports.isIP = isIP;
    });
    define("fn/type/isHostname", ["require", "exports", "fn/type/isString", "fn/type/isIP"], function (require, exports, isString_js_22, isIP_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isHostname = void 0;
        var isHostname = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_23 = args; _a < args_23.length; _a++) {
                var st = args_23[_a];
                if (!(0, isString_js_22.isString)(st)) {
                    return false;
                }
                if (!(0, isIP_js_1.isIP)(st) && !bbn.var.regexp.hostname.test(st)) {
                    return false;
                }
            }
            return true;
        };
        exports.isHostname = isHostname;
    });
    define("fn/html/isInside", ["require", "exports", "fn/html/getAncestors", "fn/type/isString", "fn/loop/each"], function (require, exports, getAncestors_js_1, isString_js_23, each_js_19) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isInside = void 0;
        var isInside = function (ele, ancestor) {
            var ancestors = (0, getAncestors_js_1.getAncestors)(ele);
            if (ancestors.length) {
                if ((0, isString_js_23.isString)(ancestor)) {
                    var ok_2 = false;
                    (0, each_js_19.each)(ancestors, function (a) {
                        if (a.matches && a.matches(ancestor)) {
                            ok_2 = true;
                            return false;
                        }
                    });
                    return ok_2;
                }
                if (ancestor instanceof HTMLElement) {
                    return ancestors.indexOf(ancestor) > -1;
                }
            }
            return false;
        };
        exports.isInside = isInside;
    });
    define("fn/type/isPercent", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isPercent = void 0;
        /**
         * Returns true if the given argument is a percentage.
         * @method   isPercent
         * @global
         * @example
         * ```javascript
         * bbn.fn.isPercent('5%');
         * //true
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isPercent = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_24 = args; _a < args_24.length; _a++) {
                var a = args_24[_a];
                if (typeof a !== "string" || !a.match(/^\d+(?:\.\d+)?%$/)) {
                    return false;
                }
            }
            return true;
        };
        exports.isPercent = isPercent;
    });
    define("fn/type/isPrimitive", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isPrimitive = void 0;
        /**
         * Returns true if the given arguments are primitive;
         * @method   isPrimitive
         * @global
         * @example
         * ```javascript
         * bbn.fn.isPrimitive('myString', 6, true);
         * //true
         * bbn.fn.isPrimitive([80,10,22]);
         * //false
         * bbn.fn.isPrimitive({});
         * //false
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isPrimitive = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_25 = args; _a < args_25.length; _a++) {
                var a = args_25[_a];
                if (a !== null && (typeof a == "object" || typeof a == "function")) {
                    return false;
                }
            }
            return true;
        };
        exports.isPrimitive = isPrimitive;
    });
    define("fn/type/isPromise", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isPromise = void 0;
        /**
         * Returns true if the given argument is a promise.
         * @global
         * @example
         * ```javascript
         * bbn.fn.isPromise(bbn.fn.post('myUrl'));
         * // true
         * bbn.fn.isPromise(setTimeout(() => {}))
         * // false
         * bbn.fn.isPromise(myVueObject.$nextTick());
         * // true
         * ```
         * @method   isFunction
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isPromise = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_26 = args; _a < args_26.length; _a++) {
                var a = args_26[_a];
                if ({}.toString.apply(a) !== "[object Promise]") {
                    return false;
                }
            }
            return true;
        };
        exports.isPromise = isPromise;
    });
    define("fn/type/isPropSize", ["require", "exports", "fn/loop/each"], function (require, exports, each_js_20) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isPropSize = void 0;
        var isPropSize = function (name) {
            var isTrue = false;
            (0, each_js_20.each)(['width', 'height', 'gap', 'margin', 'padding', 'top', 'left', 'right', 'bottom'], function (a) {
                if (name.indexOf(a) !== -1) {
                    isTrue = true;
                    return false;
                }
            });
            return isTrue;
        };
        exports.isPropSize = isPropSize;
    });
    define("fn/type/isSQLDate", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isSQLDate = void 0;
        /**
         * @ignore
         * @method   isSQLDate
         * @todo     Add method description for isSQLDate
         * @global
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isSQLDate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_27 = args; _a < args_27.length; _a++) {
                var a = args_27[_a];
                if (typeof a !== "string" ||
                    !a.match(/^([1-2]\d{3})-((0\d)|(1[12]))-(([0-2]\d)|(3[01]))(?:( [0-2]\d):([0-5]\d):([0-5]\d))?$/)) {
                    return false;
                }
            }
            return true;
        };
        exports.isSQLDate = isSQLDate;
    });
    define("fn/type/isSymbol", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isSymbol = void 0;
        /**
         * Returns true if the given argument is a symbol;
         * @method   isSymbol
         * @global
         * @example
         * ```javascript
         * const sb = Symbol();
         * bbn.fn.isSymbol(sb);
         * //true
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isSymbol = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_28 = args; _a < args_28.length; _a++) {
                var a = args_28[_a];
                if ({}.toString.apply(a) !== "[object Symbol]") {
                    return false;
                }
            }
            return true;
        };
        exports.isSymbol = isSymbol;
    });
    define("fn/type/isURL", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isURL = void 0;
        var isURL = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length)
                return false;
            for (var _a = 0, args_29 = args; _a < args_29.length; _a++) {
                var str = args_29[_a];
                if (!bbn.var.regexp.url.test(str)) {
                    return false;
                }
            }
            return true;
        };
        exports.isURL = isURL;
    });
    define("fn/type/isValidName", ["require", "exports", "fn/type/isString"], function (require, exports, isString_js_24) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isValidName = void 0;
        /**
         * Returns true if the given value is a valid name for a function without checking in reserved words, false otherwise
         * @method   isValidName
         * @global
         * @example
         * ```javascript
         * bbn.fn.isValidName('$myFunc_tion')
         * // true
         * ```
         * @example
         * ```javascript
         * bbn.fn.isValidName('7Y')
         * // false
         * ```
         *
         * @example
         * ```javascript
         * bbn.fn.isValidName('function')
         * // true
         * ```
         *
         * @memberof bbn.fn
         * @param    {String} st
         * @returns {Boolean}
         */
        var isValidName = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length) {
                return false;
            }
            for (var _a = 0, args_30 = args; _a < args_30.length; _a++) {
                var arg = args_30[_a];
                if (!(0, isString_js_24.isString)(arg) || !/^[$A-Z_][0-9A-Z_$]*$/i.test(arg)) {
                    return false;
                }
            }
            return true;
        };
        exports.isValidName = isValidName;
    });
    define("fn/type/isVue", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.isVue = void 0;
        /**
         * Returns true if the given argumen is a VueJS object.
         *
         * @method   isVue
         * @global
         * @example
         * ```javascript
         * let myObj =  new Vue({});
         * bbn.fn.isVue(myObj);
         * //true
         * ```
         * @memberof bbn.fn
         * @returns  {Boolean}
         */
        var isVue = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args.length) {
                return false;
            }
            if ("vue" in bbn && window["Vue"]) {
                if ("app" in bbn.vue) {
                    for (var _b = 0, args_31 = args; _b < args_31.length; _b++) {
                        var a = args_31[_b];
                        if (!a || typeof a.render !== "function") {
                            return false;
                        }
                    }
                }
                else {
                    for (var _c = 0, args_32 = args; _c < args_32.length; _c++) {
                        var a = args_32[_c];
                        if (!(a instanceof window["Vue"])) {
                            return false;
                        }
                    }
                }
            }
            if ("cp" in bbn &&
                "isComponent" in bbn["cp"] &&
                typeof bbn["cp"].isComponent === "function") {
                return (_a = bbn.cp).isComponent.apply(_a, args);
            }
            return true;
        };
        exports.isVue = isVue;
    });
    define("fn/style/lightenDarkenHex", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.lightenDarkenHex = void 0;
        /**
         * Takes color in hex format and lightens or darkens it with the given value.
         * @method   lightenDarkenHex
         * @global
         * @example
         * ```javascript
         * //"#eccb28"
         * bbn.fn.lightenDarkenHex('#c4a300', 40);
         * ```
         *
         * @example
         * ```javascript
         * //"#9c7b00"
         * bbn.fn.lightenDarkenHex(#c4a300', -40);
         * ```
         * @memberof bbn.fn
         * @returns  {String}
         */
        var lightenDarkenHex = function (hex, amt) {
            if (hex && amt) {
                var ht = hex[0] === "#";
                hex = ht ? hex.slice(1) : hex;
                var num = parseInt(hex, 16), r = (num >> 16) + amt, b = ((num >> 8) & 0x00ff) + amt, g = (num & 0x0000ff) + amt;
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
                return (ht ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
            }
        };
        exports.lightenDarkenHex = lightenDarkenHex;
    });
    define("fn/browser/warning", ["require", "exports", "fn/browser/log"], function (require, exports, log_js_20) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.warning = void 0;
        /**
         * Logs the given argument in the browser's console highlighting it with a yellow background and red color.
         * @method   warning
         * @global
         * @example
         * ```javascript
         * bbn.fn.warning('whatever you want to log as a warning');
         * ```
         * @memberof bbn.fn
         * @param    {...any} args
         * @returns
         */
        var warning = function (message) {
            var args = ['BBN: ' + message];
            var obj = {
                _bbn_console_mode: 'warn',
                _bbn_console_level: 2,
                _bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
            };
            args.unshift(obj);
            log_js_20.log.apply(this, args);
        };
        exports.warning = warning;
    });
    define("fn/html/makeReactive", ["require", "exports", "fn/browser/log", "fn/object/createObject", "fn/type/isSymbol", "fn/type/isNumber", "fn/type/isArray", "fn/browser/warning", "fn/type/isFunction", "fn/type/isSame"], function (require, exports, log_js_21, createObject_js_2, isSymbol_js_1, isNumber_js_8, isArray_js_13, warning_js_1, isFunction_js_10, isSame_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.makeReactive = void 0;
        var makeReactive = function (obj, onSet, parent, parentProp) {
            var parentString = (parent === null || parent === void 0 ? void 0 : parent.$cid) || '';
            var prefix = '__bbn_' + (parentString ? parentString + '_' : '');
            if (obj && typeof obj === 'object' && [undefined, Object, Array].includes(obj.constructor)) {
                if (obj.__bbnIsProxy && obj.__bbnParent === parent) {
                    return obj;
                }
                if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
                    (0, log_js_21.log)(['MAKING bbn-loadbar', obj]);
                }
                if (!obj.__bbnWatchers) {
                    Reflect.defineProperty(obj, '__bbnWatchers', {
                        value: (0, createObject_js_2.createObject)(),
                        writable: true,
                        configurable: true,
                        enumerable: false,
                    });
                }
                var handler = {
                    get: function (target, key) {
                        var realValue = Reflect.get(target, key);
                        var realTarget = target.__bbnRoot || target;
                        if ((0, isSymbol_js_1.isSymbol)(key)) {
                            return Reflect.get(realTarget, key);
                        }
                        var propName = parentProp ? parentProp + '.' + key : key;
                        var hiddenKey = prefix + ((0, isNumber_js_8.isNumber)(key) ? key.toString() : key);
                        if (['fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'].includes(key) &&
                            (0, isArray_js_13.isArray)(target)) {
                            return function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                var res = realTarget[key].apply(realTarget, args);
                                (0, warning_js_1.warning)('DOING ARRAY STUFF');
                                (0, log_js_21.log)(target.__bbnParent);
                                onSet(target, 'length', parent);
                                return res;
                            };
                        }
                        if ((0, isFunction_js_10.isFunction)(realValue)) {
                            return realValue;
                        }
                        if (key === '__bbnRoot') {
                            var root = obj;
                            while (root && (root === null || root === void 0 ? void 0 : root.__bbnTarget)) {
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
                        if (key === 'length' && (0, isArray_js_13.isArray)(target.__bbnRoot || target)) {
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
                    set: function (target, key, value) {
                        if ((0, isSymbol_js_1.isSymbol)(key)) {
                            return Reflect.get(target, key, value);
                        }
                        var realTarget = target.__bbnRoot || target;
                        var propName = parentProp ? parentProp + '.' + key : key;
                        if ((0, isSymbol_js_1.isSymbol)(key)) {
                            return Reflect.get(target, key);
                        }
                        if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
                            (0, log_js_21.log)(['Setting proxy prop in ' + parent.$options.name, target, key, value]);
                        }
                        if (!(0, isSame_js_2.isSame)(realTarget[key], value)) {
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
                                    var hiddenKey = prefix + ((0, isNumber_js_8.isNumber)(key) ? key.toString() : key);
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
                                (0, log_js_21.log)([
                                    'Setting proxy prop in ' +
                                        parent.$options.name +
                                        ' ' +
                                        ((0, isNumber_js_8.isNumber)(key) ? key.toString() : key),
                                    value,
                                    target,
                                ]);
                            }
                            Reflect.set(realTarget, key, value);
                            onSet(target, key, parent);
                        }
                        return true;
                    },
                    defineProperty: function (target, key, description) {
                        var realTarget = target;
                        var propName = parentProp ? parentProp + '.' + key : key;
                        if (key === '__bbnWatchers' || (0, isSymbol_js_1.isSymbol)(key) || key.indexOf('__bbn_') === 0) {
                            Reflect.defineProperty(realTarget, key, description);
                        }
                        else {
                            var hiddenKey = prefix + ((0, isNumber_js_8.isNumber)(key) ? key.toString() : key);
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
                    deleteProperty: function (target, key) {
                        var realTarget = target;
                        if (key.indexOf('__bbn_') === 0) {
                            Reflect.deleteProperty(realTarget, key);
                        }
                        else {
                            var hiddenKey = prefix + ((0, isNumber_js_8.isNumber)(key) ? key.toString() : key);
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
    define("fn/object/map", ["require", "exports", "fn/type/isArray"], function (require, exports, isArray_js_14) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.map = void 0;
        /**
         * Returns a new array generated by the execution of a function for each item of the given array.
         *
         * The deepProp argument is the name of property which should contain a nested array on which
         * the function should also be applied recursively.
         *
         * @method   map
         * @global
         * @example
         * ```javascript
         * bbn.fn.map([1, 2, 3, 4], a => {
         *   return a + 1;
         * });
         * // [2, 3, 4, 5]
         * ```
         * @example
         * ```javascript
         * bbn.fn.map(
         *   [{
         *     name: "tools",
         *     items: [
         *       {
         *          name: "hammers"
         *       }, {
         *          name: "screwdrivers",
         *          items: [
         *            {name: "flat screwdrivers"},
         *            {name: "slotted screwdrivers"},
         *            {name: "Hex screwdrivers"},
         *          ]
         *       }
         *     ]
         *   }, {
         *     name: "Kitchenware"
         *   }],
         *   d => {
         *     d.warranty = d.name === "Hex screwdrivers" ? "10 years" : "1 year";
         *     return d;
         *   },
         *   "items"
         * );
         * // [
         * //    {
         * //       name: "tools",
         * //       warranty: "1 year",
         * //       items: [
         * //         {
         * //            name: "hammers",
         * //            warranty: "1 year",
         * //         }, {
         * //            name: "screwdrivers",
         * //            warranty: "1 year",
         * //            items: [
         * //              {name: "flat screwdrivers", warranty: "1 year"},
         * //              {name: "slotted screwdrivers", warranty: "1 year"},
         * //              {name: "Hex screwdrivers", warranty: "10 year"},
         * //            ]
         * //         }
         * //       ]
         * //    }, {
         * //       name: "Kitchenware",
         * //       warranty: "1 year"
         * //    }
         * // ]
         * ```
         * @memberof bbn.fn
         * @param    {Array}    arr
         * @param    {Function} fn
         * @param    {Boolean}  deepProp
         * @param    {Number}   level
         * @returns  {Array}
         */
        var map = function (arr, fn, deepProp, level) {
            if (level === void 0) { level = 0; }
            return arr.map(function (a, i) {
                a = fn(a, i, level);
                if (deepProp && a[deepProp] && (0, isArray_js_14.isArray)(a[deepProp])) {
                    a[deepProp] = map(a[deepProp], fn, deepProp, level + 1);
                }
                return a;
            });
        };
        exports.map = map;
    });
    define("fn/misc/money", ["require", "exports", "fn/type/isNumber"], function (require, exports, isNumber_js_9) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.money = void 0;
        /**
         * Returns the given value to money format basing on the given configuration.
         *
         * @method   money
         * @global
         *
         * @example
         * ``` javascript
         * // "5 856.0 $"
         * bbn.fn.money(5856, false, '$', false, '.' ,false, 1);
         * ```
         *
         * @memberof bbn.fn
         * @param {String|Number} val The value.
         * @param {Boolean} kilo If the value has to be rendered in kilo.
         * @param {String} currency The currency.
         * @param {String} novalue The string to return if no valid value is given.
         * @param {String} decimal The character to use separate decimals.
         * @param {String} thousands The character to use to separate thounsands.
         * @param {Number} precision The number of decimals places.
         */
        var money = function (val, kilo, currency, novalue, decimal, thousands, precision) {
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
            if (!(0, isNumber_js_9.isNumber)(precision)) {
                precision = kilo ? 3 : 0;
            }
            if ((val === 0) && (typeof precision === 'number') && (precision > 0)) {
                var res = val.toFixed(precision).replace('.', decimal);
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
            var v = val.toFixed(precision);
            var decimalPosition = 0;
            var decimalIdx = 10000;
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
    define("fn/object/move", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.move = void 0;
        /**
         * Moves an element to a different position within the given array.
         *
         * The same array is returned, with its elements reordered according to the executed movement.
         *
         * @method   move
         * @global
         * @todo     Finish doc
         * @example
         * ```javascript
         * bbbn.fn.move([
         *   {movie: "Brazil", year: 1985},
         *   {movie: "Donnie Darko", year: 2001},
         *   {movie: "Out of Africa", year: 1985}
         * ], 1, 2);
         * // [
         * //   {movie: "Brazil", year: 1985},
         * //   {movie: "Out of Africa", year: 1985},
         * //   {movie: "Donnie Darko", year: 2001}
         * // ]
         * ```
         *  @example
         * ```javascript
         * bbn.fn.move([1, 2, 3, 4], 3, 0);
         * // [4, 1, 2, 3]
         * ```
         * @memberof bbn.fn
         * @param    {Array}  arr       The array
         * @param    {Number} fromIndex The index of the element to move
         * @param    {Number} toIndex   The future index of the element
         * @returns  {Array}  The same array, with elements repositionned.
         */
        var move = function (arr, fromIndex, toIndex) {
            if (toIndex >= arr.length) {
                var k = toIndex - arr.length;
                while (k-- + 1) {
                    arr.push(undefined);
                }
            }
            arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
            return arr;
        };
        exports.move = move;
    });
    define("fn/object/multiorder", ["require", "exports", "fn/object/_compareValues"], function (require, exports, _compareValues_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.multiorder = void 0;
        /**
         * Sorts an array of objects based on a set of properties.
         *
         * The resulting array is the same object, the order is based on _compareValues function
         * applied for each given properties in orders argument.
         *
         * @method   multiorder
         * @global
         * @example
         * ```javascript
         * let ar = [
         *   {movie: "Brazil", year: 1985},
         *   {movie: "Donnie Darko", year: 2001},
         *   {movie: "Out of Africa", year: 1985},
         *   {movie: "Ran", year: 1985},
         *   {movie: "Back to the future", year: 1985},
         *   {movie: "Barry Lindon", year: 1976}
         * ];
         * bbn.fn.multiorder(ar, [
         *   {field: "year", dir: "desc"},
         *   {field: "movie", dir: "asc"}
         * ]);
         * // [
         * //   {movie: "Donnie Darko", year: 2001},
         * //   {movie: "Back to the future", year: 1985},
         * //   {movie: "Brazil", year: 1985},
         * //   {movie: "Out of Africa", year: 1985},
         * //   {movie: "Ran", year: 1985},
         * //   {movie: "Barry Lindon", year: 1976}
         * // ]
         * bbn.fn.multiorder(ar, {year: "desc", movie: "asc"});
         * // Same result with object shortcut
         * ```
         * @memberof bbn.fn
         * @param    {Array}        arr    The array to order
         * @param    {Array|Object} orders The properties and directions (asc, desc) to order by
         * @returns  {Array}        The same array (arr), ordered differently
         */
        var multiorder = function (arr, orders) {
            if (!orders) {
                return arr;
            }
            var currentOrders;
            if (!Array.isArray(orders) && typeof orders === 'object') {
                currentOrders = [];
                for (var n in orders) {
                    currentOrders.push({ field: n, dir: orders[n] });
                }
            }
            else {
                currentOrders = orders;
            }
            if (!Array.isArray(currentOrders)) {
                throw new Error('The orders argument must be an array');
            }
            var r = arr.slice();
            return r.sort(function (a, b) {
                var res;
                for (var _i = 0, currentOrders_1 = currentOrders; _i < currentOrders_1.length; _i++) {
                    var order = currentOrders_1[_i];
                    res = (0, _compareValues_js_1._compareValues)(a, b, order.field, order.dir);
                    if (res !== 0) {
                        return res;
                    }
                }
                return 0;
            });
        };
        exports.multiorder = multiorder;
    });
    define("fn/string/nl2br", ["require", "exports", "fn/string/replaceAll"], function (require, exports, replaceAll_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.nl2br = void 0;
        /**
         * Replaces all new line characters '\ n' with html tag '<br>'.
         *
         * @method   nl2br
         * @global
         *
         * @example
         * ```javascript
         * bbn.fn.nl2br('hello \n world!');
         * //"hello <br> world!"
         * ```
         * @memberof bbn.fn
         * @param    {String} st
         * @returns  {String}
         */
        var nl2br = function (st, keepNl) {
            return (0, replaceAll_js_5.replaceAll)("\n", "<br>" + (keepNl ? "\n" : ""), st);
        };
        exports.nl2br = nl2br;
    });
    define("fn/form/objectToFormData", ["require", "exports", "fn/type/isArray", "fn/loop/each", "fn/type/isObject", "fn/loop/iterate", "fn/type/isNull"], function (require, exports, isArray_js_15, each_js_21, isObject_js_16, iterate_js_9, isNull_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.objectToFormData = void 0;
        /**
         * @method   objectToFormData
         * @todo     Add method description for objectToFormData
         * @global
         * @memberof bbn.fn
         * @param    {Object|Array|File} obj
         * @param    {String}            key
         * @param    {Array}             ignoreList
         * @returns
         */
        var objectToFormData = function (obj, key, ignoreList) {
            if (key === void 0) { key = ''; }
            if (ignoreList === void 0) { ignoreList = null; }
            var formData = new FormData();
            var appendFormData = function (data, key) {
                if (key === void 0) { key = ''; }
                if (!ignoreList || ((0, isArray_js_15.isArray)(ignoreList) && !ignoreList.includes(key))) {
                    if (data instanceof File) {
                        formData.append(key, data);
                    }
                    else if ((0, isArray_js_15.isArray)(data)) {
                        (0, each_js_21.each)(data, function (v, i) {
                            appendFormData(v, key + '[' + i + ']');
                        });
                    }
                    else if ((0, isObject_js_16.isObject)(data) && Object.keys(data).length) {
                        (0, iterate_js_9.iterate)(data, function (v, i) {
                            if (i in data) {
                                appendFormData(v, !key ? i : key + '[' + i + ']');
                            }
                        });
                    }
                    else {
                        if (!(0, isNull_js_3.isNull)(data) && data !== undefined) {
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
    define("fn/object/order", ["require", "exports", "fn/object/_compareValues"], function (require, exports, _compareValues_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.order = void 0;
        /**
         * Sorts an array of objects based on the given property.
         *
         * The resulting array is the same object, the order is based on _compareValues function.
         *
         * @method   order
         * @global
         * @example
         * ```javascript
         * bbn.fn.order([
         *   {movie: "Brazil", year: 1985},
         *   {movie: "Donnie Darko", year: 2001},
         *   {movie: "Barry Lindon", year: 1976}
         * ], 'year', 'DESC')
         * // [
         * //   {movie: "Donnie Darko", year: 2001},
         * //   {movie: "Brazil", year: 1985},
         * //   {movie: "Barry Lindon", year: 1976}
         * // ]
         * ```
         * @memberof bbn.fn
         * @param    {Array}  arr       The array to order
         * @param    {String} prop      The property on which the order is based
         * @param    {String} [dir=asc] The direction of the order (desc or asc by default)
         * @returns  {Array}
         */
        var order = function (arr, prop, dir) {
            if (dir === void 0) { dir = 'asc'; }
            if (arr) {
                return arr.sort(function (a, b) {
                    return (0, _compareValues_js_2._compareValues)(a, b, prop, dir);
                });
            }
            return arr;
        };
        exports.order = order;
    });
    define("fn/html/selector", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.selector = void 0;
        /**
         * @ignore
         * @method   selector
         * @todo     Add method description for selector
         * @global
         * @memberof bbn.fn
         * @returns  {HTMLElement | undefined}
         */
        var selector = function (ele) {
            return typeof ele === "string" ? document.querySelector(ele) : ele;
        };
        exports.selector = selector;
    });
    define("fn/style/outerHeight", ["require", "exports", "fn/html/selector"], function (require, exports, selector_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.outerHeight = void 0;
        /**
         *
         * @ignore
         * @method   outerHeight
         * @todo     Add method description for outerHeight
         * @global
         * @memberof bbn.fn
         * @returns  {*}
         */
        var outerHeight = function (ele) {
            ele = (0, selector_js_1.selector)(ele);
            if (ele && "offsetHeight" in ele) {
                var styles = window.getComputedStyle(ele);
                var margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
                return Math.ceil(ele.offsetHeight + margin);
            }
        };
        exports.outerHeight = outerHeight;
    });
    define("fn/style/outerWidth", ["require", "exports", "fn/html/selector"], function (require, exports, selector_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.outerWidth = void 0;
        /**
         * @ignore
         * @method   outerWidth
         * @todo     Add method description for outerWidth
         * @global
         * @memberof bbn.fn
         * @returns  {*}
         */
        var outerWidth = function (ele) {
            ele = (0, selector_js_2.selector)(ele);
            var styles = window.getComputedStyle(ele);
            var margin = parseFloat(styles["marginLeft"]) + parseFloat(styles["marginRight"]);
            return Math.ceil(ele.offsetWidth + margin);
        };
        exports.outerWidth = outerWidth;
    });
    define("fn/misc/percent", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.percent = void 0;
        /**
         * Returns the value of the proportion giving the percentage and the total from where to be calculated.
         * @method   percent
         * @global
         *
         * @example
         * ```javascript
         * //150
         * bbn.fn.percent('15',1000);
         * ```
         *
         * @example
         * ```javascript
         * //75
         * bbn.fn.percent(15,500);
         * ```
         * @memberof bbn.fn
         * @param    {Number|String} percent
         * @param    {Number|String} cent
         * @returns  {Number}
         */
        var percent = function (percent, cent) {
            return (cent / 100) * percent;
        };
        exports.percent = percent;
    });
    define("fn/object/pickValue", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.pickValue = void 0;
        var pickValue = function (arr) {
            if (Array.isArray(arr) && arr.length) {
                return arr[Math.floor(Math.random() * arr.length)];
            }
        };
        exports.pickValue = pickValue;
    });
    define("fn/object/setProperty", ["require", "exports", "fn/loop/each"], function (require, exports, each_js_22) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setProperty = void 0;
        /**
         * Returns the value of the given property from the given object.
         *
         * Looks for the given property in the given object, accepting dot (.) separator
         * for deep property access, and returns its value if found and undefined otherwise.
         *
         * @method   getProperty
         * @global
         * @example
         * ```javascript
         * bbn.fn.getProperty({a: 1, b: 2}, 'b');
         * // 2
         * ```
         * @example
         * ```javascript
         * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.o.a');
         * // 33
         * ```
         * @example
         * ```javascript
         * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.h.a');
         * // undefined
         * ```
         * @memberof bbn.fn
         * @param    {Object} obj
         * @param    {String} prop
         * @returns  {*}      The property's value or undefined
         */
        var setProperty = function (obj, prop, value, force) {
            if (typeof obj === 'object' && typeof prop === 'string') {
                var o_1 = obj;
                var bits_1 = prop.split('.');
                (0, each_js_22.each)(bits_1, function (v, i) {
                    if (!o_1) {
                        if (!force) {
                            throw new Error(bbn._('The object is invalid'));
                        }
                        o_1 = {};
                    }
                    if (bits_1.length - 1 === i) {
                        o_1[v] = value;
                    }
                    else {
                        o_1 = o_1[v];
                    }
                });
            }
        };
        exports.setProperty = setProperty;
    });
    define("fn/ajax/postOut", ["require", "exports", "fn/object/createObject", "fn/form/addInputs", "fn/object/setProperty"], function (require, exports, createObject_js_3, addInputs_js_1, setProperty_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.postOut = void 0;
        /**
         * Posts a request in a new window.
         *
         * @method   postOut
         * @global
         * @memberof bbn.fn
         *
         * @example
         * ```javascript
         * bbn.fn.postOut('https://external-service.com/download/account-2019-06.pdf', {clientId: 547912, token: xxx});
         * ```
         *
         * @param    {String}   url     The url to which the request should be sent
         * @param    {Object}   data    The data to be sent
         * @param    {Function} success A function to execute in case of success
         * @param    {String}   target  The target attribute of the form
         *
         * @returns  {void}
         */
        var postOut = function (url, data, success, target) {
            if (success === void 0) { success = null; }
            if (target === void 0) { target = ""; }
            var form = document.body.querySelector("form#bbn-form_out");
            if (!form) {
                form = document.createElement("form");
                form.classList.add("bbn-no");
                form.setAttribute("id", "bbn-form_out");
                form.setAttribute("method", "post");
                form.setAttribute("enctype", "multipart/form-data-encoded");
                (0, setProperty_js_1.setProperty)(form, "style.display", "none");
                document.body.appendChild(form);
            }
            if (form instanceof HTMLFormElement) {
                form.innerHTML = "";
                form.setAttribute("action", url);
                form.setAttribute("target", target || "_blank");
                if (!data) {
                    data = {};
                }
                data = (0, createObject_js_3.createObject)(data);
                if (!data.bbn) {
                    data.bbn = "public";
                }
                (0, addInputs_js_1.addInputs)(form, data);
                form.submit();
                if (success) {
                    success();
                }
            }
        };
        exports.postOut = postOut;
    });
    define("fn/string/printf", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.printf = void 0;
        /**
         * @method   printf
         * @todo     Add method description for printf
         * @global
         * @memberof bbn.fn
         * @param    String format
         * @returns  {*}
         */
        var printf = function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != "undefined" ? args[number] : match;
            });
        };
        exports.printf = printf;
    });
    define("fn/string/quotes2html", ["require", "exports", "fn/string/replaceAll"], function (require, exports, replaceAll_js_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.quotes2html = void 0;
        /**
         * Replace quotes in ASCII code
         *
         * @method   quotes2html
         * @global
         *
         * @example
         * ```javascript
         * bbn.fn.quotes2html("hello 'world'!", 's');
         * // hello &#39;world&#39;!
         * ```
         *
         * @example
         * ```javascript
         * bbn.fn.quotes2html('hello "world\'s"!', 'd');
         * // hello &quot;world'sd&quot;!
         * ```
         *
         * @example
         * ```javascript
         * bbn.fn.quotes2html('hello "world\'s"!');
         * // hello &quot;world&#39;sd&quot;!
         * ```
         *
         * @memberof bbn.fn
         * @param    {String} st
         * @returns  {String}
         */
        var quotes2html = function (st, type) {
            if (!type || type.toLowerCase().indexOf("s") === 0) {
                st = (0, replaceAll_js_6.replaceAll)("'", "&#39;", st);
            }
            if (!type || type.toLowerCase().indexOf("d") === 0) {
                st = (0, replaceAll_js_6.replaceAll)('"', "&quot;", st);
            }
            return st;
        };
        exports.quotes2html = quotes2html;
    });
    define("fn/misc/randomInt", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.randomInt = void 0;
        /**
         * Returns a random integer.
         *
         * Generates and returns a random number in a range of numbers defined
         * by passed arguments a minimum and a maximum.
         *
         * @method   randomInt
         * @global
         *
         * @example
         * ```javascript
         * //56
         * bbn.fn.randomInt(1,100);
         * ```
         *
         * @memberof bbn.fn
         * @param    {Number} min
         * @param    {Number} max
         * @returns  {Number}
         */
        var randomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        exports.randomInt = randomInt;
    });
    define("fn/string/randomString", ["require", "exports", "fn/misc/randomInt"], function (require, exports, randomInt_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.randomString = void 0;
        /**
         * Returns a random String with random lenght,
         *
         * Generates a random string from the length of the random number,
         * taken from a range of numbers providing either only the minimum or also the maximum as arguments.
         *
         * @method   randomString
         * @global
         *
         * @example
         * ```javascript
         * //"U7xXO0Xb"
         * bbn.fn.randomString(3,10);
         * ```
         *
         * @example
         * ```javascript
         * //"H8F"
         * bbn.fn.randomString(3);
         * ```
         *
         * @memberof bbn.fn
         * @param    {Number} length
         * @param    {String} chars
         * @returns  {String}
         */
        var randomString = function (min, max, types) {
            var length;
            var type;
            var chars = {
                n: "0123456789",
                l: "abcdefghijklmnopqrstuvwxyz",
                u: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            };
            if (!types) {
                types = "nlu";
            }
            if (!min) {
                length = (0, randomInt_js_1.randomInt)(8, 14);
            }
            if (typeof max === "string") {
                types = "n";
                delete chars.l;
                delete chars.u;
                chars.n = max;
                if (!length) {
                    length = min;
                }
            }
            else if (typeof max === "number" && min < max) {
                length = (0, randomInt_js_1.randomInt)(min, max);
            }
            else if (min) {
                length = min;
            }
            var result = "";
            for (var i = 0; i < length; i++) {
                // Not a number for the first char
                if (i === 0) {
                    if (types !== "n") {
                        type = types.indexOf("u") === -1 ? "l" : "u";
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
    define("fn/object/removeEmpty", ["require", "exports", "fn/type/isArray", "fn/type/isObject", "fn/object/numProperties"], function (require, exports, isArray_js_16, isObject_js_17, numProperties_js_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeEmpty = void 0;
        /**
         * Returns a new array, having removed all elements deemed empty from the given array.
         *
         * Removes all the elements which are empty, i.e. false, 0, null, '', NaN, or undefined.
         *
         * @method   removeEmpty
         * @global
         * @example
         * ```javascript
         * bbn.fn.removeEmpty([{prop1: 10, prop2: 20}, '', {}, null, 1, undefined, 0, false, 25]);
         * // [{prop1: 10, prop2: 20}, 1, 25]
         * ```
         * @memberof bbn.fn
         * @param    {Array} arr
         * @returns  {Array}
         */
        var removeEmpty = function (arr) {
            var tmp = [];
            if ((0, isArray_js_16.isArray)(arr)) {
                for (var i = 0; i < arr.length; i++) {
                    var ok = false;
                    if (arr[i]) {
                        if ((0, isArray_js_16.isArray)(arr[i])) {
                            if (arr[i].length) {
                                ok = true;
                            }
                        }
                        else if ((0, isObject_js_17.isObject)(arr[i])) {
                            if ((0, numProperties_js_7.numProperties)(arr[i])) {
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
    define("fn/string/removeExtraSpaces", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeExtraSpaces = void 0;
        /**
         * Removes all group of spaces by one single space.
         * @param {String} str
         * @returns
         */
        var removeExtraSpaces = function (str) {
            return str.replace(/\s+/g, " ").trim();
        };
        exports.removeExtraSpaces = removeExtraSpaces;
    });
    define("fn/string/removeTrailingChars", ["require", "exports", "fn/string/substr"], function (require, exports, substr_js_13) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.removeTrailingChars = void 0;
        /**
         * @method   removeTrailingChars
         * @todo     Add method description for removeTrailingChars
         * @global
         * @memberof bbn.fn
         * @param    {String} st
         * @param    {String} char
         * @returns  {*}
         */
        var removeTrailingChars = function (st, char) {
            if (!char) {
                char = " ";
            }
            if (char.length) {
                while ((0, substr_js_13.substr)(st, -char.length) === char) {
                    st = (0, substr_js_13.substr)(st, 0, st.length - char.length);
                }
                while ((0, substr_js_13.substr)(st, 0, char.length) === char) {
                    st = (0, substr_js_13.substr)(st, char.length);
                }
            }
            return st;
        };
        exports.removeTrailingChars = removeTrailingChars;
    });
    define("fn/string/repeat", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.repeat = void 0;
        /**
         * Returns a string which is the repetition of the first argument for the number passed in the second argument.
         *
         * @method   repeat
         * @global
         *
         * @example
         * ```javascript
         * //"HelloHelloHello"
         * bbn.fn.repeat('Hello', 3);
         * ```
         * @memberof bbn.fn
         * @returns  {String}
         */
        var repeat = function (st, num) {
            return st.repeat(num);
        };
        exports.repeat = repeat;
    });
    define("fn/browser/replaceSelection", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.replaceSelection = void 0;
        var replaceSelection = function (html, selectInserted) {
            var sel, range, fragment;
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
                    var div = document.createElement('div');
                    var child = void 0;
                    div.innerHTML = html;
                    fragment = document.createDocumentFragment();
                    while ((child = div.firstChild)) {
                        fragment.appendChild(child);
                    }
                }
                var firstInsertedNode = fragment.firstChild;
                var lastInsertedNode = fragment.lastChild;
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
    define("fn/convert/rgb2hex", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.rgb2hex = void 0;
        /**
         * Convert an RGB string to hexadecimal.
         *
         * Passing a string with the format that defines the rgb value as an argument,
         * it will return the corresponding string in hexadecimal format.
         *
         * @method   rgb2hex
         * @global
         *
         * @example
         * ```javascript
         * //"#ff0000"
         * bbn.fn.rgb2hex("rgb(255, 0, 0)");
         * ```
         * @memberof bbn.fn
         * @param    {String} rgb
         * @returns  {String}
         */
        var rgb2hex = function (rgb) {
            rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return rgb && rgb.length === 4
                ? "#" +
                    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
                    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
                    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
                : "";
        };
        exports.rgb2hex = rgb2hex;
    });
    define("fn/loop/riterate", ["require", "exports", "fn/loop/iterate"], function (require, exports, iterate_js_10) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.riterate = void 0;
        /**
         * Executes the provided function on each property of the given object.
         *
         * @method   riterate
         * @global
         * @example
         * ```javascript
         * //["value1", 2]
         * let arr = [];
         * bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
         *   arr.push(value);
         * });
         * ```
         * @memberof bbn.fn
         * @param    {(Object|Number)} obj       The object to loop on
         * @param    {Function}        fn        The function, gets the array's element and the index as arguments
         * @param    {Boolean}         noPrivate If set to true the _private_ properties won't be included
         * @returns  {Object}
         */
        var riterate = function (obj, fn, noPrivate) {
            if (noPrivate === void 0) { noPrivate = false; }
            return (0, iterate_js_10.iterate)(obj, fn, noPrivate, true);
        };
        exports.riterate = riterate;
    });
    define("fn/misc/roundDecimal", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.roundDecimal = void 0;
        /**
         * @method   roundDecimal
         * @todo     Add method description for roundDecimal
         * @global
         * @memberof bbn.fn
         * @param    {Number} value
         * @param    {Number} decimals
         * @returns  {}
         */
        var roundDecimal = function (value, decimals) {
            return Math.round(Math.pow(Math.pow(value, decimals), -decimals));
        };
        exports.roundDecimal = roundDecimal;
    });
    define("fn/string/trim", ["require", "exports", "fn/string/substr"], function (require, exports, substr_js_14) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.trim = void 0;
        var trim = function (str, hair) {
            if (hair === void 0) { hair = ' '; }
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
                str = (0, substr_js_14.substr)(str, hair.length);
            }
            while (str.lastIndexOf(hair) === str.length - hair.length) {
                str = (0, substr_js_14.substr)(str, 0, str.length - hair.length);
            }
            return str;
        };
        exports.trim = trim;
    });
    define("fn/string/sanitize", ["require", "exports", "fn/string/removeAccents", "fn/string/trim"], function (require, exports, removeAccents_js_3, trim_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.sanitize = void 0;
        /**
         * Removes all unacceptable characters in a DOM node.
         *
         * @method   sanitize
         * @global
         *
         * @example
         * ```javascript
         * //"this_is_a_test"
         * bbn.fn.sanitize("this&is_$a^test");
         * ```
         *
         * @memberof bbn.fn
         * @returns  {String} str
         */
        var sanitize = function (str, separator) {
            if (separator === void 0) { separator = "_"; }
            var escaped = ["[", "]", "{", "}", "(", ")", "-", "+", "*", "/"];
            var exp = "[";
            for (var i = 0; i < separator.length; i++) {
                if (escaped.includes(separator[i])) {
                    exp += "\\";
                }
                exp += separator[i];
            }
            exp += "]+";
            var re = new RegExp(exp, "g");
            var res = (0, removeAccents_js_3.removeAccents)(str)
                .replace(/[^a-z0-9]/gi, separator)
                .replace(re, separator);
            return (0, trim_js_1.trim)(res, separator);
        };
        exports.sanitize = sanitize;
    });
    define("fn/browser/selectElementText", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.selectElementText = void 0;
        /**
         * Selects the content of an element.
         *
         * @method   selectElementText
         * @global
         * @example
         * ``` javascript
         * bbn.fn.selectElementText(document.getElementById('my_input_id'));
         * // false
         * bbn.fn.selectElementText(bbn.$('#my_span_id'));
         * // true
         * ```
         * @memberof bbn.fn
         *
         * @param {Element} ele The element in which the text should be selected
         * @param {Boolean} win The window object
         *
         * @returns  {Boolean} True if focused
         */
        var selectElementText = function (ele, win) {
            if (win === void 0) { win = null; }
            win = win || window;
            if (ele instanceof HTMLInputElement) {
                ele.select();
                return;
            }
            var doc = win.document;
            var sel;
            var range;
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
    define("fn/browser/setCookie", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setCookie = void 0;
        /**
         * Creates a cookie and assigns it to document.cookie.
         * @method   setCookie
         * @global
         * @example
         * ``` javascript
         * bbn.fn.setCookie('lang', 'en', 2);
         * ```
         * @memberof bbn.fn
         * @param    {String} name  The name of the cookie.
         * @param    {String} value The value of the cookie.
         * @param    {Number} days  The days before expiration of the cookie.
         * @returns
         */
        var setCookie = function (name, value, days) {
            var expires = '';
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = '; expires=' + date.toUTCString();
            }
            var st = escape(JSON.stringify({ value: value }));
            document.cookie = name + '=' + st + expires + '; path=/';
        };
        exports.setCookie = setCookie;
    });
    define("fn/style/setCssVar", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setCssVar = void 0;
        /**
         * Creates a CSS variable
         * @param {String*} varname
         * @param {String*} value
         * @returns
         */
        var setCssVar = function (varname, value) {
            if (varname.indexOf("--") !== 0) {
                varname = "--" + varname;
            }
            /** @todo To Fix */
            document.documentElement.style.setProperty(varname, value);
        };
        exports.setCssVar = setCssVar;
    });
    define("fn/object/setProp", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.setProp = void 0;
        /**
         * Sets a given property on the given object
         *
         * @param {Object} obj
         * @param {String} prop
         * @param {*} value
         * @param {Boolean} writable
         * @param {Boolean} configurable
         */
        var setProp = function (obj, prop, value, writable, configurable) {
            if (writable === void 0) { writable = true; }
            if (configurable === void 0) { configurable = true; }
            Object.defineProperty(obj, prop, {
                value: value,
                writable: writable,
                configurable: configurable,
            });
        };
        exports.setProp = setProp;
    });
    define("fn/string/shorten", ["require", "exports", "fn/type/isString", "fn/string/substr"], function (require, exports, isString_js_25, substr_js_15) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.shorten = void 0;
        /**
         * Shortens the given string after *len* characters.
         *
         * Provides an abbreviation to the string passed as the first argument,
         * deciding through the second argument the number of characters to keep and the remainder replaced
         * by what is passed as the third argument and if not given a defalut it is: '...'
         *
         * @method   shorten
         * @global
         *
         * @example
         * ```javascript
         * //"test***"
         * bbn.fn.shorten('testing', 4, '***');
         * ```
         *  @example
         * ```javascript
         * //"test..."
         * bbn.fn.shorten('testing', 4);
         * ```
         * @memberof bbn.fn
         * @param    {String} st
         * @param    {Number} len
         * @returns  {String}
         */
        var shorten = function (st, len, adj) {
            if (typeof st.toLowerCase() === "string") {
                if (!len) {
                    len = bbn.var.shortenLen;
                }
                if (adj === undefined || !(0, isString_js_25.isString)(adj)) {
                    adj = "...";
                }
                if (st.length > len) {
                    st = (0, substr_js_15.substr)(st, 0, len) + adj;
                }
            }
            return st;
        };
        exports.shorten = shorten;
    });
    define("fn/object/shortenObj", ["require", "exports", "fn/object/clone", "fn/loop/each", "fn/type/isString", "fn/string/shorten"], function (require, exports, clone_js_1, each_js_23, isString_js_26, shorten_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.shortenObj = void 0;
        /**
         * Shortens all the strings contained in the object properties or element in a array.
         *
         * Modifies directly the given object by cuttin all its too long strings, and adding ellipsis (...) in this case.
         *
         * @method   shortenObj
         * @global
         * @example
         * ```javascript
         * bbn.fn.shortenObj({
         *   title: "Once upon a time in the west",
         *   synopsis: "There's a single piece of land around Flagstone with water on it, and rail baron Morton (Gabriele Ferzetti) aims to have it, knowing the new railroad will have to stop there. He sends his henchman Frank (Henry Fonda) to scare the land's owner, McBain (Frank Wolff), but Frank kills him instead and pins it on a known bandit, Cheyenne (Jason Robards). Meanwhile, a mysterious gunslinger with a score to settle (Charles Bronson) and McBain's new wife, Jill (Claudia Cardinale), arrive in town."
         * }, 50)
         * // {
         * //   "title": "Once upon a time in the west",
         * //   "synopsis": "There's a single piece of land around Flagstone wi..."
         * // }
         * ```
         * @memberof bbn.fn
         * @param    {(Object|Array)} obj
         * @param    {Number}         [max=100]
         * @returns  {(Object|Array)} The same object, modified
         */
        var shortenObj = function (obj, max) {
            if (max === void 0) { max = 100; }
            var o = (0, clone_js_1.clone)(obj);
            (0, each_js_23.each)(o, function (a, n) {
                if ((0, isString_js_26.isString)(a) && a.length > max) {
                    o[n] = (0, shorten_js_1.shorten)(a, max);
                }
                else if (a && typeof a === "object") {
                    o[n] = shortenObj(a);
                }
            });
            return o;
        };
        exports.shortenObj = shortenObj;
    });
    define("fn/object/shuffle", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.shuffle = void 0;
        var shuffle = function (array) {
            var _a;
            var currentIndex = array.length, randomIndex;
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                // And swap it with the current element.
                _a = [array[randomIndex], array[currentIndex]], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
            }
            return array;
        };
        exports.shuffle = shuffle;
    });
    define("fn/datetime/chrono", ["require", "exports", "fn/loop/each"], function (require, exports, each_js_24) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.stopChrono = exports.startChrono = void 0;
        var _private = [];
        /**
         * Starts a timer and gives it a name.
         * @method   startChrono
         * @global
         * ``` javascript
         * bbn.fn.startChrono('myChrono');
         * ```
         * @memberof bbn.fn
         * @returns
         */
        var startChrono = function (name) {
            var now = new Date().getTime();
            var h1 = 3600 * 1000;
            if (_private.length) {
                (0, each_js_24.each)(_private, function (t, n) {
                    if (now - t > h1) {
                        delete _private[n];
                    }
                });
                now = new Date().getTime();
            }
            _private[name] = now;
        };
        exports.startChrono = startChrono;
        /**
         * @method   stopChrono
         * @global
         * @example
         * ``` javascript
         * bbn.fn.stopChrono('myChrono');
         * // 20162
         * ```
         * @memberof bbn.fn
         * @param {String} name
         * @returns  {Number}
         */
        var stopChrono = function (name) {
            if (_private[name]) {
                var now = new Date().getTime();
                var diff = now - _private[name];
                return diff;
            }
        };
        exports.stopChrono = stopChrono;
    });
    define("fn/convert/string2ArrayBuffer", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.string2ArrayBuffer = void 0;
        var string2ArrayBuffer = function (str) {
            var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
            var bufView = new Uint16Array(buf);
            for (var i = 0, strLen = str.length; i < strLen; i++) {
                bufView[i] = str.charCodeAt(i);
            }
            return buf;
        };
        exports.string2ArrayBuffer = string2ArrayBuffer;
    });
    define("fn/object/sum", ["require", "exports", "fn/loop/each", "fn/object/filter"], function (require, exports, each_js_25, filter_js_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.sum = void 0;
        /**
         * Returns the sum of the given property or function for the array's elements matching the filter.
         *
         * The filtering arguments follow the same scheme as bbn.fn.search.
         *
         * @method   sum
         * @global
         * @example
         * ```javascript
         * let invited = [
         *   {name: "Robert De Niro", attendees: 2, confirmed: true},
         *   {name: "Al Pacino", attendees: 1, confirmed: false},
         *   {name: "James Caan", attendees: 4, confirmed: false},
         *   {name: "Harvey Keitel", attendees: 5, confirmed: true}
         * ];
         * // No filter
         * bbn.fn.sum(invited, "attendees");
         * // 12
         * // Filter
         * bbn.fn.sum(invited, "attendees", {confirmed: true});
         * // 7
         * ```
         * @example
         * ```javascript
         * let cart = [
         *    {article: "Toothpaste", price: 2.50, quantity: 1},
         *    {article: "Toothbrush", price: 6, quantity: 2},
         *    {article: "Banana", price: 0.50, quantity: 3},
         *    {article: "T-shirt", price: 14, quantity: 3}
         * ];
         * bbn.fn.sum(cart, a => a.price * a.quantity);
         * // 58
         * // Only the items with a quantity equal to 3
         * bbn.fn.sum(cart, a => a.price * a.quantity, {quantity: 3});
         * // 43.5
         * ```
         * @memberof bbn.fn
         * @param    {Array}                    arr        The subject array
         * @param    {(String|Function)}        numberProp The property's name for which the value should be added to the sum, or a function returning the number.
         * @param    {(String|Object|Function)} prop       A property's name or a filter object or function
         * @param    {*}                        val        The value with which comparing the given property
         * @param    {String}                   operator   The operator to use for comparison with the value as used in bbn.fn.compare
         * @returns  {Number}                   The sum
         */
        var sum = function (arr, numberProp, prop, val, operator) {
            var r = 0;
            (0, each_js_25.each)((0, filter_js_5.filter)(arr, prop, val, operator), function (a) {
                var tmp = typeof numberProp === 'function' ? numberProp(a) : a[numberProp];
                if (tmp) {
                    r += parseFloat(tmp) || 0;
                }
            });
            return r;
        };
        exports.sum = sum;
    });
    define("fn/datetime/timestamp", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.timestamp = void 0;
        /**
         * Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().
         * @method   timestamp
         * @global
         * @example
         * ```javascript
         * //1587031047918
         * bbn.fn.timestamp();
         * ```
         * @memberof bbn.fn
         * @param    {Number} seconds
         * @returns  {Boolean}
         */
        var timestamp = function (seconds) {
            if (seconds === void 0) { seconds = false; }
            var r = new Date().getTime();
            return seconds ? Math.round(r / 1000) : r;
        };
        exports.timestamp = timestamp;
    });
    define("fn/convert/toCSV", ["require", "exports", "fn/loop/each", "fn/type/isArray", "fn/string/replaceAll"], function (require, exports, each_js_26, isArray_js_17, replaceAll_js_7) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.toCSV = void 0;
        /**
         * Returns a CSV string from the given array of arrays or objects.
         *
         * @method   toCSV
         * @global
         * @example
         * ```javascript
         * bbn.fn.toCSV([['a', 'b', 'c'], ['d', 'e', 'f']]);
         * // "a","b","c";
         * // "d","e","f"
         * ```
         * @example
         * ```javascript
         * bbn.fn.toCSV([{name: "Capuche", fname: "Marc-Antoine"}, {name: "Orfin", fname: "Louis"}]);
         * // "Capuche","Marc-Antoine";
         * // "Orfin","Louis"
         * ```
         * @memberof bbn.fn
         * @param    {Array}  arr        The array to convert
         * @param    {String} [valSep=,] The value separator character
         * @param    {String} [rowSep=;] The row separator character
         * @param    {String} [valEsc="] The string escaper character
         * @returns  {String} A CSV string
         */
        var toCSV = function (arr, valSep, rowSep, valEsc) {
            if (valSep === void 0) { valSep = ","; }
            if (rowSep === void 0) { rowSep = ""; }
            if (valEsc === void 0) { valEsc = '"'; }
            if (!valSep) {
                valSep = ",";
            }
            if (!valEsc) {
                valEsc = '"';
            }
            var csvContent = "";
            var total = arr.length;
            (0, each_js_26.each)(arr, function (a, i) {
                var num = (0, isArray_js_17.isArray)(a) ? a.length : Object.values(a).length;
                var j = 0;
                (0, each_js_26.each)(a, function (b) {
                    if (typeof b === "string") {
                        csvContent += valEsc + (0, replaceAll_js_7.replaceAll)(valEsc, "\\" + valEsc, b) + valEsc;
                    }
                    else if (b === 0) {
                        csvContent += "0";
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
                    csvContent += rowSep + "\n";
                }
            });
            return csvContent;
        };
        exports.toCSV = toCSV;
    });
    define("fn/browser/toggleFullScreen", ["require", "exports", "fn/style/resize"], function (require, exports, resize_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.toggleFullScreen = void 0;
        var toggleFullScreen = function () {
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
                (0, resize_js_2.resize)();
            }, 0);
        };
        exports.toggleFullScreen = toggleFullScreen;
    });
    define("fn/misc/translate", ["require", "exports", "fn/loop/iterate"], function (require, exports, iterate_js_11) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.translate = void 0;
        var translate = function (o, namespace) {
            var lng = namespace ? bbn.lng[namespace.indexOf('_') === 0 ? namespace : '_' + namespace] : bbn.lng;
            (0, iterate_js_11.iterate)(o, function (v, k) {
                lng[k] = v;
            });
        };
        exports.translate = translate;
    });
    define("fn/string/uniqString", ["require", "exports", "fn/type/isArray", "fn/loop/each", "fn/string/md5"], function (require, exports, isArray_js_18, each_js_27, md5_js_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.uniqString = void 0;
        /**
         * Create a unique string in md5 format.
         *
         * Converts and return all the arguments inserted in a unique string in md5 format.
         *
         * @method   uniqString
         * @global
         *
         * @example
         * ```javascript
         * //"6cb083da4d4987af9b4fa4ad8ca23bb1"
         * bbn.fn.uniqString('test',['test'],{id:1, test:2},4);
         * ```
         * @memberof bbn.fn
         * @returns  {String} The unique string in md5 format
         */
        var uniqString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var st = "";
            var _loop_2 = function () {
                if (!args[i]) {
                    st += "__bbn_empty__";
                }
                else if (typeof args[i] === "object") {
                    if ((0, isArray_js_18.isArray)(args[i])) {
                        st += JSON.stringify(args[i]);
                    }
                    else {
                        // An object with the same properties, even in different order, should produce the same answer
                        var tmp_2 = {};
                        var ks = Object.keys(args[i]).sort();
                        (0, each_js_27.each)(ks, function (k) {
                            tmp_2[k] = args[i][k];
                        });
                        st += JSON.stringify(tmp_2);
                    }
                }
                else if (typeof args[i] !== "string") {
                    st += args[i].toString();
                }
                else {
                    st += args[i];
                }
            };
            for (var i = 0; i < args.length; i++) {
                _loop_2();
            }
            return (0, md5_js_3.md5)(st);
        };
        exports.uniqString = uniqString;
    });
    define("fn/ajax/upload", ["require", "exports", "fn/form/objectToFormData", "fn/browser/log"], function (require, exports, objectToFormData_js_1, log_js_22) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.upload = void 0;
        /**
         * Uploads a file synchronously through an XHR indicating progress.
         *
         * @method   upload
         * @todo examples
         * @global
         * @memberof bbn.fn
         *
         * @param {String}   url      The URL to which the file should be uploaded
         * @param {File}     file     A File object or an array of data
         * @param {Function} success  A function to execute after success
         * @param {Function} failure  A function to execute after failure
         * @param {Function} progress A function to execute during progress
         *
         * @returns  {Promise}
         */
        var upload = function (url, file, success, failure, progress) {
            if (success === void 0) { success = null; }
            if (failure === void 0) { failure = null; }
            if (progress === void 0) { progress = null; }
            var fn = function () {
                return axios.post(url || bbn.env.path, (0, objectToFormData_js_1.objectToFormData)(file), {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: function (progressEvent) {
                        if (progress) {
                            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
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
                    .then(function (res) {
                    if (success) {
                        (0, log_js_22.log)('SUCCESS', res);
                        success(res);
                    }
                })
                    .catch(function (err) {
                    if (failure) {
                        (0, log_js_22.log)('ERROR', err);
                        failure(err);
                    }
                });
            }
        };
        exports.upload = upload;
    });
    define("fn", ["require", "exports", "fn/ajax/_addLoader", "fn/object/_compareValues", "fn/ajax/_deleteLoader", "fn/ajax/abort", "fn/ajax/abortURL", "fn/style/addColors", "fn/form/addInputs", "fn/style/addStyle", "fn/html/adjustHeight", "fn/html/adjustSize", "fn/html/adjustWidth", "fn/ajax/ajax", "fn/misc/analyzeFunction", "fn/style/animateCss", "fn/convert/arrayBuffer2String", "fn/object/arrayFromProp", "fn/object/autoExtend", "fn/string/baseName", "fn/string/br2nl", "fn/datetime/calendar", "fn/ajax/callback", "fn/string/camelize", "fn/string/camelToCss", "fn/convert/canvasToImage", "fn/style/center", "fn/object/checkProps", "fn/object/checkPropsDetails", "fn/object/checkPropsOrDie", "fn/type/checkType", "fn/object/circularReplacer", "fn/object/clone", "fn/convert/colorToHex", "fn/object/compare", "fn/object/compareConditions", "fn/browser/copy", "fn/string/correctCase", "fn/object/count", "fn/string/crc32", "fn/object/createObject", "fn/style/cssExists", "fn/datetime/date", "fn/datetime/dateSQL", "fn/datetime/daysInMonth", "fn/object/deepPath", "fn/default/defaultAjaxAbortFunction", "fn/default/defaultAjaxErrorFunction", "fn/default/defaultAlertFunction", "fn/default/defaultConfirmFunction", "fn/default/defaultEndLoadingFunction", "fn/default/defaultErrorFunction", "fn/default/defaultHistoryFunction", "fn/default/defaultLinkFunction", "fn/default/defaultPostLinkFunction", "fn/default/defaultPreLinkFunction", "fn/default/defaultResizeFunction", "fn/default/defaultStartLoadingFunction", "fn/object/deleteProp", "fn/object/diffObj", "fn/string/dirName", "fn/ajax/download", "fn/ajax/downloadContent", "fn/loop/each", "fn/browser/eraseCookie", "fn/browser/error", "fn/string/escapeDquotes", "fn/string/escapeRegExp", "fn/string/escapeSquotes", "fn/string/escapeTicks", "fn/string/escapeUrl", "fn/object/extend", "fn/object/extendOut", "fn/datetime/fdate", "fn/datetime/fdatetime", "fn/form/fieldValue", "fn/string/fileExt", "fn/object/filter", "fn/object/filterToConditions", "fn/object/findAll", "fn/loop/fori", "fn/loop/forir", "fn/string/format", "fn/string/formatBytes", "fn/datetime/formatDate", "fn/string/formatSize", "fn/form/formdata", "fn/convert/fromXml", "fn/datetime/ftime", "fn/html/getAllTags", "fn/html/getAncestors", "fn/html/getAttributes", "fn/browser/getBrowserName", "fn/browser/getBrowserVersion", "fn/browser/getCookie", "fn/style/getCssVar", "fn/datetime/getDay", "fn/browser/getDeviceType", "fn/browser/getEventData", "fn/object/getField", "fn/object/getFieldValues", "fn/html/getHtml", "fn/html/getHTMLOfSelection", "fn/ajax/getLoader", "fn/html/getPath", "fn/object/getProp", "fn/object/getProperty", "fn/ajax/getRequestId", "fn/object/getRow", "fn/style/getScrollBarSize", "fn/html/getText", "fn/misc/getTimeoff", "fn/browser/happy", "fn/string/hash", "fn/convert/hex2rgb", "fn/browser/history", "fn/html/html2text", "fn/convert/imageToCanvas", "fn/convert/imgToBase64", "fn/browser/info", "fn/init", "fn/browser/isActiveInterface", "fn/type/isArray", "fn/type/isBlob", "fn/type/isBoolean", "fn/type/isCanvas", "fn/type/isColor", "fn/type/isComment", "fn/type/isCp", "fn/type/isDate", "fn/browser/isDesktopDevice", "fn/type/isDimension", "fn/type/isDom", "fn/type/isEmail", "fn/type/isEmpty", "fn/type/isEvent", "fn/browser/isFocused", "fn/type/isFunction", "fn/type/isHostname", "fn/html/isInside", "fn/type/isInt", "fn/type/isIP", "fn/type/isIterable", "fn/browser/isMobile", "fn/browser/isMobileDevice", "fn/type/isNull", "fn/type/isNumber", "fn/type/isObject", "fn/type/isPercent", "fn/type/isPrimitive", "fn/type/isPromise", "fn/type/isPropSize", "fn/type/isSame", "fn/type/isSQLDate", "fn/type/isString", "fn/type/isSymbol", "fn/browser/isTabletDevice", "fn/type/isURL", "fn/type/isValidDimension", "fn/type/isValidName", "fn/type/isValue", "fn/type/isVue", "fn/loop/iterate", "fn/style/lightenDarkenHex", "fn/ajax/link", "fn/browser/log", "fn/html/makeReactive", "fn/object/map", "fn/string/md5", "fn/misc/money", "fn/object/move", "fn/object/multiorder", "fn/string/nl2br", "fn/object/numProperties", "fn/form/objectToFormData", "fn/object/order", "fn/style/outerHeight", "fn/style/outerWidth", "fn/misc/percent", "fn/object/pickValue", "fn/ajax/post", "fn/ajax/postOut", "fn/string/printf", "fn/string/quotes2html", "fn/misc/randomInt", "fn/string/randomString", "fn/string/removeAccents", "fn/object/removeEmpty", "fn/string/removeExtraSpaces", "fn/string/removeHtmlComments", "fn/object/removePrivateProp", "fn/string/removeTrailingChars", "fn/string/repeat", "fn/string/replaceAll", "fn/browser/replaceSelection", "fn/style/resize", "fn/convert/rgb2hex", "fn/loop/riterate", "fn/misc/roundDecimal", "fn/string/sanitize", "fn/object/search", "fn/browser/selectElementText", "fn/html/selector", "fn/browser/setCookie", "fn/style/setCssVar", "fn/ajax/setNavigationVars", "fn/object/setProp", "fn/object/setProperty", "fn/string/shorten", "fn/object/shortenObj", "fn/object/shuffle", "fn/string/simpleHash", "fn/string/simpleHash1", "fn/string/simpleHash2", "fn/datetime/chrono", "fn/convert/string2ArrayBuffer", "fn/form/submit", "fn/string/substr", "fn/object/sum", "fn/datetime/timestamp", "fn/convert/toCSV", "fn/browser/toggleFullScreen", "fn/misc/translate", "fn/ajax/treatAjaxArguments", "fn/string/trim", "fn/string/uniqString", "fn/object/unique", "fn/ajax/upload", "fn/browser/warning"], function (require, exports, _addLoader_js_2, _compareValues_js_3, _deleteLoader_js_2, abort_js_1, abortURL_js_1, addColors_js_2, addInputs_js_2, addStyle_js_1, adjustHeight_js_1, adjustSize_js_3, adjustWidth_js_1, ajax_js_4, analyzeFunction_js_1, animateCss_js_1, arrayBuffer2String_js_1, arrayFromProp_js_1, autoExtend_js_1, baseName_js_3, br2nl_js_1, calendar_js_2, callback_js_3, camelize_js_1, camelToCss_js_1, canvasToImage_js_1, center_js_1, checkProps_js_1, checkPropsDetails_js_3, checkPropsOrDie_js_1, checkType_js_6, circularReplacer_js_2, clone_js_2, colorToHex_js_1, compare_js_2, compareConditions_js_3, copy_js_1, correctCase_js_2, count_js_1, crc32_js_1, createObject_js_4, cssExists_js_1, date_js_8, dateSQL_js_1, daysInMonth_js_1, deepPath_js_1, defaultAjaxAbortFunction_js_1, defaultAjaxErrorFunction_js_1, defaultAlertFunction_js_1, defaultConfirmFunction_js_1, defaultEndLoadingFunction_js_1, defaultErrorFunction_js_1, defaultHistoryFunction_js_1, defaultLinkFunction_js_1, defaultPostLinkFunction_js_1, defaultPreLinkFunction_js_1, defaultResizeFunction_js_1, defaultStartLoadingFunction_js_1, deleteProp_js_1, diffObj_js_1, dirName_js_2, download_js_1, downloadContent_js_2, each_js_28, eraseCookie_js_1, error_js_4, escapeDquotes_js_1, escapeRegExp_js_3, escapeSquotes_js_1, escapeTicks_js_1, escapeUrl_js_1, extend_js_8, extendOut_js_1, fdate_js_2, fdatetime_js_2, fieldValue_js_2, fileExt_js_2, filter_js_6, filterToConditions_js_3, findAll_js_1, fori_js_1, forir_js_1, format_js_1, formatBytes_js_1, formatDate_js_1, formatSize_js_1, formdata_js_2, fromXml_js_1, ftime_js_1, getAllTags_js_1, getAncestors_js_2, getAttributes_js_1, getBrowserName_js_1, getBrowserVersion_js_1, getCookie_js_1, getCssVar_js_2, getDay_js_1, getDeviceType_js_4, getEventData_js_1, getField_js_1, getFieldValues_js_1, getHtml_js_1, getHTMLOfSelection_js_2, getLoader_js_4, getPath_js_1, getProp_js_1, getProperty_js_4, getRequestId_js_2, getRow_js_3, getScrollBarSize_js_1, getText_js_1, getTimeoff_js_1, happy_js_1, hash_js_2, hex2rgb_js_1, history_js_1, html2text_js_2, imageToCanvas_js_2, imgToBase64_js_1, info_js_1, init_js_1, isActiveInterface_js_1, isArray_js_19, isBlob_js_2, isBoolean_js_1, isCanvas_js_2, isColor_js_1, isComment_js_1, isCp_js_3, isDate_js_8, isDesktopDevice_js_1, isDimension_js_1, isDom_js_5, isEmail_js_1, isEmpty_js_2, isEvent_js_1, isFocused_js_1, isFunction_js_11, isHostname_js_1, isInside_js_1, isInt_js_2, isIP_js_2, isIterable_js_5, isMobile_js_2, isMobileDevice_js_2, isNull_js_4, isNumber_js_10, isObject_js_18, isPercent_js_1, isPrimitive_js_1, isPromise_js_1, isPropSize_js_1, isSame_js_3, isSQLDate_js_1, isString_js_27, isSymbol_js_2, isTabletDevice_js_3, isURL_js_1, isValidDimension_js_2, isValidName_js_1, isValue_js_2, isVue_js_1, iterate_js_12, lightenDarkenHex_js_1, link_js_2, log_js_23, makeReactive_js_1, map_js_1, md5_js_4, money_js_1, move_js_1, multiorder_js_1, nl2br_js_1, numProperties_js_8, objectToFormData_js_2, order_js_1, outerHeight_js_1, outerWidth_js_1, percent_js_1, pickValue_js_1, post_js_2, postOut_js_1, printf_js_1, quotes2html_js_1, randomInt_js_2, randomString_js_1, removeAccents_js_4, removeEmpty_js_1, removeExtraSpaces_js_1, removeHtmlComments_js_2, removePrivateProp_js_2, removeTrailingChars_js_1, repeat_js_1, replaceAll_js_8, replaceSelection_js_1, resize_js_3, rgb2hex_js_1, riterate_js_1, roundDecimal_js_1, sanitize_js_1, search_js_6, selectElementText_js_1, selector_js_3, setCookie_js_1, setCssVar_js_1, setNavigationVars_js_2, setProp_js_1, setProperty_js_2, shorten_js_2, shortenObj_js_1, shuffle_js_1, simpleHash_js_2, simpleHash1_js_2, simpleHash2_js_2, chrono_js_1, string2ArrayBuffer_js_1, submit_js_2, substr_js_16, sum_js_1, timestamp_js_1, toCSV_js_1, toggleFullScreen_js_1, translate_js_1, treatAjaxArguments_js_3, trim_js_2, uniqString_js_1, unique_js_2, upload_js_1, warning_js_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fn = void 0;
        var fn = {
            _addLoader: _addLoader_js_2._addLoader,
            _compareValues: _compareValues_js_3._compareValues,
            _deleteLoader: _deleteLoader_js_2._deleteLoader,
            abort: abort_js_1.abort,
            abortURL: abortURL_js_1.abortURL,
            addColors: addColors_js_2.addColors,
            addInputs: addInputs_js_2.addInputs,
            addStyle: addStyle_js_1.addStyle,
            adjustHeight: adjustHeight_js_1.adjustHeight,
            adjustSize: adjustSize_js_3.adjustSize,
            adjustWidth: adjustWidth_js_1.adjustWidth,
            ajax: ajax_js_4.ajax,
            analyzeFunction: analyzeFunction_js_1.analyzeFunction,
            animateCss: animateCss_js_1.animateCss,
            arrayBuffer2String: arrayBuffer2String_js_1.arrayBuffer2String,
            arrayFromProp: arrayFromProp_js_1.arrayFromProp,
            autoExtend: autoExtend_js_1.autoExtend,
            baseName: baseName_js_3.baseName,
            br2nl: br2nl_js_1.br2nl,
            calendar: calendar_js_2.calendar,
            callback: callback_js_3.callback,
            camelize: camelize_js_1.camelize,
            camelToCss: camelToCss_js_1.camelToCss,
            canvasToImage: canvasToImage_js_1.canvasToImage,
            center: center_js_1.center,
            checkProps: checkProps_js_1.checkProps,
            checkPropsDetails: checkPropsDetails_js_3.checkPropsDetails,
            checkPropsOrDie: checkPropsOrDie_js_1.checkPropsOrDie,
            checkType: checkType_js_6.checkType,
            circularReplacer: circularReplacer_js_2.circularReplacer,
            clone: clone_js_2.clone,
            colorToHex: colorToHex_js_1.colorToHex,
            compare: compare_js_2.compare,
            compareConditions: compareConditions_js_3.compareConditions,
            copy: copy_js_1.copy,
            correctCase: correctCase_js_2.correctCase,
            count: count_js_1.count,
            crc32: crc32_js_1.crc32,
            createObject: createObject_js_4.createObject,
            cssExists: cssExists_js_1.cssExists,
            date: date_js_8.date,
            dateSQL: dateSQL_js_1.dateSQL,
            daysInMonth: daysInMonth_js_1.daysInMonth,
            deepPath: deepPath_js_1.deepPath,
            defaultAjaxAbortFunction: defaultAjaxAbortFunction_js_1.defaultAjaxAbortFunction,
            defaultAjaxErrorFunction: defaultAjaxErrorFunction_js_1.defaultAjaxErrorFunction,
            defaultAlertFunction: defaultAlertFunction_js_1.defaultAlertFunction,
            defaultConfirmFunction: defaultConfirmFunction_js_1.defaultConfirmFunction,
            defaultEndLoadingFunction: defaultEndLoadingFunction_js_1.defaultEndLoadingFunction,
            defaultErrorFunction: defaultErrorFunction_js_1.defaultErrorFunction,
            defaultHistoryFunction: defaultHistoryFunction_js_1.defaultHistoryFunction,
            defaultLinkFunction: defaultLinkFunction_js_1.defaultLinkFunction,
            defaultPostLinkFunction: defaultPostLinkFunction_js_1.defaultPostLinkFunction,
            defaultPreLinkFunction: defaultPreLinkFunction_js_1.defaultPreLinkFunction,
            defaultResizeFunction: defaultResizeFunction_js_1.defaultResizeFunction,
            defaultStartLoadingFunction: defaultStartLoadingFunction_js_1.defaultStartLoadingFunction,
            deleteProp: deleteProp_js_1.deleteProp,
            diffObj: diffObj_js_1.diffObj,
            dirName: dirName_js_2.dirName,
            download: download_js_1.download,
            downloadContent: downloadContent_js_2.downloadContent,
            each: each_js_28.each,
            eraseCookie: eraseCookie_js_1.eraseCookie,
            error: error_js_4.error,
            escapeDquotes: escapeDquotes_js_1.escapeDquotes,
            escapeRegExp: escapeRegExp_js_3.escapeRegExp,
            escapeSquotes: escapeSquotes_js_1.escapeSquotes,
            escapeTicks: escapeTicks_js_1.escapeTicks,
            escapeUrl: escapeUrl_js_1.escapeUrl,
            extend: extend_js_8.extend,
            extendOut: extendOut_js_1.extendOut,
            fdate: fdate_js_2.fdate,
            fdatetime: fdatetime_js_2.fdatetime,
            fieldValue: fieldValue_js_2.fieldValue,
            fileExt: fileExt_js_2.fileExt,
            filter: filter_js_6.filter,
            filterToConditions: filterToConditions_js_3.filterToConditions,
            findAll: findAll_js_1.findAll,
            fori: fori_js_1.fori,
            forir: forir_js_1.forir,
            format: format_js_1.format,
            formatBytes: formatBytes_js_1.formatBytes,
            formatDate: formatDate_js_1.formatDate,
            formatSize: formatSize_js_1.formatSize,
            formdata: formdata_js_2.formdata,
            fromXml: fromXml_js_1.fromXml,
            ftime: ftime_js_1.ftime,
            getAllTags: getAllTags_js_1.getAllTags,
            getAncestors: getAncestors_js_2.getAncestors,
            getAttributes: getAttributes_js_1.getAttributes,
            getBrowserName: getBrowserName_js_1.getBrowserName,
            getBrowserVersion: getBrowserVersion_js_1.getBrowserVersion,
            getCookie: getCookie_js_1.getCookie,
            getCssVar: getCssVar_js_2.getCssVar,
            getDay: getDay_js_1.getDay,
            getDeviceType: getDeviceType_js_4.getDeviceType,
            getEventData: getEventData_js_1.getEventData,
            getField: getField_js_1.getField,
            getFieldValues: getFieldValues_js_1.getFieldValues,
            getHtml: getHtml_js_1.getHtml,
            getHTMLOfSelection: getHTMLOfSelection_js_2.getHTMLOfSelection,
            getLoader: getLoader_js_4.getLoader,
            getPath: getPath_js_1.getPath,
            getProp: getProp_js_1.getProp,
            getProperty: getProperty_js_4.getProperty,
            getRequestId: getRequestId_js_2.getRequestId,
            getRow: getRow_js_3.getRow,
            getScrollBarSize: getScrollBarSize_js_1.getScrollBarSize,
            getText: getText_js_1.getText,
            getTimeoff: getTimeoff_js_1.getTimeoff,
            happy: happy_js_1.happy,
            hash: hash_js_2.hash,
            hex2rgb: hex2rgb_js_1.hex2rgb,
            history: history_js_1.history,
            html2text: html2text_js_2.html2text,
            imageToCanvas: imageToCanvas_js_2.imageToCanvas,
            imgToBase64: imgToBase64_js_1.imgToBase64,
            info: info_js_1.info,
            init: init_js_1.init,
            isActiveInterface: isActiveInterface_js_1.isActiveInterface,
            isArray: isArray_js_19.isArray,
            isBlob: isBlob_js_2.isBlob,
            isBoolean: isBoolean_js_1.isBoolean,
            isCanvas: isCanvas_js_2.isCanvas,
            isColor: isColor_js_1.isColor,
            isComment: isComment_js_1.isComment,
            isCp: isCp_js_3.isCp,
            isDate: isDate_js_8.isDate,
            isDesktopDevice: isDesktopDevice_js_1.isDesktopDevice,
            isDimension: isDimension_js_1.isDimension,
            isDom: isDom_js_5.isDom,
            isEmail: isEmail_js_1.isEmail,
            isEmpty: isEmpty_js_2.isEmpty,
            isEvent: isEvent_js_1.isEvent,
            isFocused: isFocused_js_1.isFocused,
            isFunction: isFunction_js_11.isFunction,
            isHostname: isHostname_js_1.isHostname,
            isInside: isInside_js_1.isInside,
            isInt: isInt_js_2.isInt,
            isIP: isIP_js_2.isIP,
            isIterable: isIterable_js_5.isIterable,
            isMobile: isMobile_js_2.isMobile,
            isMobileDevice: isMobileDevice_js_2.isMobileDevice,
            isNull: isNull_js_4.isNull,
            isNumber: isNumber_js_10.isNumber,
            isObject: isObject_js_18.isObject,
            isPercent: isPercent_js_1.isPercent,
            isPrimitive: isPrimitive_js_1.isPrimitive,
            isPromise: isPromise_js_1.isPromise,
            isPropSize: isPropSize_js_1.isPropSize,
            isSame: isSame_js_3.isSame,
            isSQLDate: isSQLDate_js_1.isSQLDate,
            isString: isString_js_27.isString,
            isSymbol: isSymbol_js_2.isSymbol,
            isTabletDevice: isTabletDevice_js_3.isTabletDevice,
            isURL: isURL_js_1.isURL,
            isValidDimension: isValidDimension_js_2.isValidDimension,
            isValidName: isValidName_js_1.isValidName,
            isValue: isValue_js_2.isValue,
            isVue: isVue_js_1.isVue,
            iterate: iterate_js_12.iterate,
            lightenDarkenHex: lightenDarkenHex_js_1.lightenDarkenHex,
            link: link_js_2.link,
            log: log_js_23.log,
            makeReactive: makeReactive_js_1.makeReactive,
            map: map_js_1.map,
            md5: md5_js_4.md5,
            money: money_js_1.money,
            move: move_js_1.move,
            multiorder: multiorder_js_1.multiorder,
            nl2br: nl2br_js_1.nl2br,
            numProperties: numProperties_js_8.numProperties,
            objectToFormData: objectToFormData_js_2.objectToFormData,
            order: order_js_1.order,
            outerHeight: outerHeight_js_1.outerHeight,
            outerWidth: outerWidth_js_1.outerWidth,
            percent: percent_js_1.percent,
            pickValue: pickValue_js_1.pickValue,
            post: post_js_2.post,
            postOut: postOut_js_1.postOut,
            printf: printf_js_1.printf,
            quotes2html: quotes2html_js_1.quotes2html,
            randomInt: randomInt_js_2.randomInt,
            randomString: randomString_js_1.randomString,
            removeAccents: removeAccents_js_4.removeAccents,
            removeEmpty: removeEmpty_js_1.removeEmpty,
            removeExtraSpaces: removeExtraSpaces_js_1.removeExtraSpaces,
            removeHtmlComments: removeHtmlComments_js_2.removeHtmlComments,
            removePrivateProp: removePrivateProp_js_2.removePrivateProp,
            removeTrailingChars: removeTrailingChars_js_1.removeTrailingChars,
            repeat: repeat_js_1.repeat,
            replaceAll: replaceAll_js_8.replaceAll,
            replaceSelection: replaceSelection_js_1.replaceSelection,
            resize: resize_js_3.resize,
            rgb2hex: rgb2hex_js_1.rgb2hex,
            riterate: riterate_js_1.riterate,
            roundDecimal: roundDecimal_js_1.roundDecimal,
            sanitize: sanitize_js_1.sanitize,
            search: search_js_6.search,
            selectElementText: selectElementText_js_1.selectElementText,
            selector: selector_js_3.selector,
            setCookie: setCookie_js_1.setCookie,
            setCssVar: setCssVar_js_1.setCssVar,
            setNavigationVars: setNavigationVars_js_2.setNavigationVars,
            setProp: setProp_js_1.setProp,
            setProperty: setProperty_js_2.setProperty,
            shorten: shorten_js_2.shorten,
            shortenObj: shortenObj_js_1.shortenObj,
            shuffle: shuffle_js_1.shuffle,
            simpleHash: simpleHash_js_2.simpleHash,
            simpleHash1: simpleHash1_js_2.simpleHash1,
            simpleHash2: simpleHash2_js_2.simpleHash2,
            startChrono: chrono_js_1.startChrono,
            stopChrono: chrono_js_1.stopChrono,
            string2ArrayBuffer: string2ArrayBuffer_js_1.string2ArrayBuffer,
            submit: submit_js_2.submit,
            substr: substr_js_16.substr,
            sum: sum_js_1.sum,
            timestamp: timestamp_js_1.timestamp,
            toCSV: toCSV_js_1.toCSV,
            toggleFullScreen: toggleFullScreen_js_1.toggleFullScreen,
            translate: translate_js_1.translate,
            treatAjaxArguments: treatAjaxArguments_js_3.treatAjaxArguments,
            trim: trim_js_2.trim,
            uniqString: uniqString_js_1.uniqString,
            unique: unique_js_2.unique,
            upload: upload_js_1.upload,
            warning: warning_js_2.warning,
        };
        exports.fn = fn;
    });
    define("index", ["require", "exports", "_", "$", "lng", "vars", "env", "db", "fn"], function (require, exports, __js_2, __js_3, lng_js_1, vars_js_1, env_js_1, db_js_1, fn_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.bbn = void 0;
        var bbn = {
            version: "1.0.1",
            opt: {
                _cat: {}
            },
            app: {},
            _: __js_2._,
            $: __js_3.$,
            lng: lng_js_1.lng,
            var: vars_js_1.vars,
            env: env_js_1.env,
            db: db_js_1.db,
            fn: fn_js_1.fn
        };
        exports.bbn = bbn;
        window['bbn'] = bbn;
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
            var dependencies = ['exports'];
            var factory = function (exports) {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies: dependencies, factory: factory };
        }
    }
    var instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        var define = get_define(name);
        if (typeof define.factory !== 'function') {
            return define.factory;
        }
        instances[name] = {};
        var dependencies = define.dependencies.map(function (name) { return resolve(name); });
        define.factory.apply(define, dependencies);
        var exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports.default : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();