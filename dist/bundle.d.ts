declare module "fn/type/isArray" {
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
    const isArray: (...args: any[]) => boolean;
    export { isArray };
}
declare module "fn/type/isNumber" {
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
    const isNumber: (...args: any[]) => boolean;
    export { isNumber };
}
declare module "fn/type/isIterable" {
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
    const isIterable: (...args: any[]) => boolean;
    export { isIterable };
}
declare module "fn/type/isString" {
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
    const isString: (...args: any[]) => boolean;
    export { isString };
}
declare module "fn/type/isInt" {
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
    const isInt: (...args: any[]) => boolean;
    export { isInt };
}
declare module "fn/type/isFunction" {
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
    const isFunction: (...args: any[]) => boolean;
    export { isFunction };
}
declare module "fn/browser/log" {
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
    const log: (...args: any[]) => any;
    export { log };
}
declare module "fn/string/substr" {
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
    const substr: (str: string, from: number, length?: number) => string;
    export { substr };
}
declare module "fn/object/removePrivateProp" {
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
    const removePrivateProp: (obj: object, deep?: boolean) => any;
    export { removePrivateProp };
}
declare module "fn/loop/iterate" {
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
    const iterate: (obj: any, fn: any, noPrivate?: boolean, reverse?: boolean) => any;
    export { iterate };
}
declare module "fn/loop/each" {
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
    const each: (arr: any, fn: any) => any;
    export { each };
}
declare module "fn/string/correctCase" {
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
    const correctCase: (str: any) => any;
    export { correctCase };
}
declare module "fn/browser/error" {
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
    const error: (errorMsg: any) => never;
    export { error };
}
declare module "fn/type/checkType" {
    const checkType: (value: any, type: object | string, msg?: string, ...logs: any[]) => void;
    export { checkType };
}
declare module "_" {
    /**
     * Translate an expression using the object bbn.lng
     *
     * @param {String} st
     * @returns {String}
     */
    const _: (...args: any[]) => string;
    export { _ };
}
declare module "$" {
    const $: (selector: any, context: any) => any;
    export { $ };
}
declare module "lng" {
    const lng: {
        select_unselect_all: string;
        select_all: string;
        search: string;
        loading: string;
        choose: string;
        error: string;
        server_response: string;
        reload: string;
        errorText: string;
        closeAll: string;
        closeOthers: string;
        pin: string;
        arrange: string;
        cancel: string;
        unpin: string;
        yes: string;
        no: string;
        unknown: string;
        untitled: string;
        confirmation: string;
        Today: string;
        Tomorrow: string;
        Yesterday: string;
    };
    export { lng };
}
declare module "vars" {
    const vars: {
        loggers: {
            _num: number;
        };
        datatypes: string[];
        shortenLen: number;
        keys: {
            upDown: number[];
            leftRight: number[];
            dels: number[];
            confirm: number[];
            alt: number[];
            numbers: number[];
            numsigns: number[];
        };
        comparators: string[];
        operators: string[];
        tags: string[];
        colors: {
            darkgrey: string;
            black: string;
            anthracite: string;
            grey: string;
            white: string;
            beige: string;
            lightgrey: string;
            pastelblue: string;
            cyan: string;
            blue: string;
            indigo: string;
            navy: string;
            webblue: string;
            teal: string;
            turquoise: string;
            pastelgreen: string;
            palegreen: string;
            green: string;
            olive: string;
            pastelorange: string;
            yellow: string;
            orange: string;
            pink: string;
            purple: string;
            red: string;
            brown: string;
        };
        reserved: string[];
        mockText: string;
        regexp: {
            url: RegExp;
            ip: RegExp;
            hostname: RegExp;
        };
    };
    export { vars };
}
declare module "env" {
    const env: {
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
    export { env };
}
declare module "db" {
    interface Db {
        _structures: object;
        _connections: object;
        _stores: object;
        ok: boolean;
        open(name: string): Promise<object>;
        add(db: string, name: string, structure: object): void;
    }
    const db: Db;
    export { db };
}
declare module "fn/ajax/_addLoader" {
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
    const _addLoader: (requestId: any, prom: any, source: any) => number;
    export { _addLoader };
}
declare module "fn/object/getProperty" {
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
    const getProperty: (obj: any, prop: any) => any;
    export { getProperty };
}
declare module "fn/string/removeAccents" {
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
    const removeAccents: (st: string) => string;
    export { removeAccents };
}
declare module "fn/type/isDate" {
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
    const isDate: (...args: any[]) => boolean;
    export { isDate };
}
declare module "fn/object/_compareValues" {
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
    const _compareValues: (a: any, b: any, prop: any, dir?: string) => 0 | 1 | -1;
    export { _compareValues };
}
declare module "fn/object/numProperties" {
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
    const numProperties: (obj: object) => number;
    export { numProperties };
}
declare module "fn/type/isEmpty" {
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
    const isEmpty: (obj: any) => boolean;
    export { isEmpty };
}
declare module "fn/type/isNull" {
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
    const isNull: (...args: any[]) => boolean;
    export { isNull };
}
declare module "fn/type/isObject" {
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
    const isObject: (...args: any[]) => boolean;
    export { isObject };
}
declare module "fn/type/isDom" {
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
    const isDom: (...args: any[]) => boolean;
    export { isDom };
}
declare module "fn/type/isCp" {
    const isCp: (...args: any[]) => boolean;
    export { isCp };
}
declare module "fn/object/circularReplacer" {
    /**
     * Returns a function to give to JSON.stringify in order to avoid circular values.
     *
     * @returns Function
     */
    const circularReplacer: () => (key: any, value: any) => any;
    export { circularReplacer };
}
declare module "fn/string/simpleHash1" {
    const simpleHash1: (str: string) => number;
    export { simpleHash1 };
}
declare module "fn/string/simpleHash2" {
    const simpleHash2: (str: string) => number;
    export { simpleHash2 };
}
declare module "fn/string/simpleHash" {
    const simpleHash: (str: any) => string;
    export { simpleHash };
}
declare module "fn/string/hash" {
    /**
     * Makes a hash out of anything
     * @param {Object|Array} obj
     * @returns {String}
     */
    const hash: (obj: any) => string;
    export { hash };
}
declare module "fn/type/isSame" {
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
    const isSame: (obj1: any, obj2: any, done?: any[]) => boolean;
    export { isSame };
}
declare module "fn/object/compare" {
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
    const compare: (v1: any, v2: any, operator: any) => boolean;
    export { compare };
}
declare module "fn/object/compareConditions" {
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
    const compareConditions: (data: any, filter: any) => boolean;
    export { compareConditions };
}
declare module "fn/object/filterToConditions" {
    interface Condition {
        field: string;
        operator?: string;
        value?: any;
    }
    interface Filter {
        conditions?: Condition[];
        logic?: string;
    }
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
    const filterToConditions: (filter: any, operator?: string) => Filter;
    export { Filter, filterToConditions };
}
declare module "fn/object/search" {
    import { Filter } from "fn/object/filterToConditions";
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
    const search: (arr: any[], prop: string | object | Filter | ((a: any, i: string | number | symbol) => boolean), val?: any, operator?: number | string, startFrom?: number) => number;
    export { search };
}
declare module "fn/object/getRow" {
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
    const getRow: (arr: any[], prop: object | string, val?: any, operator?: string) => any | false;
    export { getRow };
}
declare module "fn/ajax/_deleteLoader" {
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
    const _deleteLoader: (requestId: any, res?: any, isAbort?: boolean) => boolean;
    export { _deleteLoader };
}
declare module "fn/ajax/getLoader" {
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
    const getLoader: (requestId: any) => BbnLoader;
    export { getLoader };
}
declare module "fn/ajax/abort" {
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
    const abort: (requestId: any) => void;
    export { abort };
}
declare module "fn/object/filter" {
    import { Filter } from "fn/object/filterToConditions";
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
    const filter: (arr: any[], prop: string | object | Filter | ((a: any, i: string | number | symbol) => boolean), val?: any, operator?: string) => any[];
    export { filter };
}
declare module "fn/ajax/abortURL" {
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
    const abortURL: (url: any) => void;
    export { abortURL };
}
declare module "fn/style/addColors" {
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
    const addColors: (colors: object) => void;
    export { addColors };
}
declare module "fn/form/addInputs" {
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
    const addInputs: (form: any, params?: any, prefix?: string) => void;
    export { addInputs };
}
declare module "fn/style/addStyle" {
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
    const addStyle: (ele: any, o: any) => void;
    export { addStyle };
}
declare module "fn/html/adjustSize" {
    const adjustSize: (type: any, eles: any) => void;
    export { adjustSize };
}
declare module "fn/html/adjustHeight" {
    const adjustHeight: () => void;
    export { adjustHeight };
}
declare module "fn/html/adjustWidth" {
    const adjustWidth: () => void;
    export { adjustWidth };
}
declare module "fn/string/escapeRegExp" {
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
    const escapeRegExp: (str: any) => any;
    export { escapeRegExp };
}
declare module "fn/string/replaceAll" {
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
    const replaceAll: (find: string, replace: string, str: string, flags?: string) => string;
    export { replaceAll };
}
declare module "fn/string/md5" {
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
    const md5: (st: any) => string;
    export { md5 };
}
declare module "fn/ajax/getRequestId" {
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
    const getRequestId: (url: any, data: any, datatype: any) => string;
    export { getRequestId };
}
declare module "fn/object/extend" {
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
    const extend: (...originalArgs: (boolean | object)[]) => any;
    export { extend };
}
declare module "fn/ajax/ajax" {
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
    const ajax: (url: any, datatype?: any, data?: any, success?: any, failure?: any, abort?: any) => any;
    export { ajax };
}
declare module "fn/misc/analyzeFunction" {
    /**
     * Analyzes the given function and extracts details about its structure.
     *
     * @function analyzeFunction
     * @param {Function} fn - The function to analyze.
     * @returns {Object} An object containing details about the function.
     * @throws {Error} When unexpected syntax is encountered while parsing.
     */
    const analyzeFunction: (fn: any) => {
        body: any;
        args: any[];
        argString: string;
        isArrow: boolean;
        hasFunction: boolean;
        name: any;
        isAsync: boolean;
        hash: string;
    };
    export { analyzeFunction };
}
declare module "fn/style/animateCss" {
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
    const animateCss: (ele: any, animationName: any, callback: any) => void;
    export { animateCss };
}
declare module "fn/convert/arrayBuffer2String" {
    const arrayBuffer2String: (buf: any) => any;
    export { arrayBuffer2String };
}
declare module "fn/object/arrayFromProp" {
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
    const arrayFromProp: (arr: any, prop: any) => any[];
    export { arrayFromProp };
}
declare module "fn/object/autoExtend" {
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
    const autoExtend: (namespace: any, obj: any) => void;
    export { autoExtend };
}
declare module "fn/string/baseName" {
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
    const baseName: (path: string, suffix?: string) => string;
    export { baseName };
}
declare module "fn/string/br2nl" {
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
    const br2nl: (st: any) => string;
    export { br2nl };
}
declare module "fn/datetime/date" {
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
    const date: (v: any) => any;
    export { date };
}
declare module "fn/datetime/fdatetime" {
    /**
     * @method   fdatetime
     * @todo     Add method description for fdatetime
     * @global
     * @memberof bbn.fn
     * @returns  {*}
     */
    const fdatetime: (d: any, wrong_result?: boolean) => any;
    export { fdatetime };
}
declare module "fn/datetime/fdate" {
    /**
     * @method   fdate
     * @todo     Add method description for fdate
     * @global
     * @memberof bbn.fn
     * @param    {String|Date} d
     * @param    {String}      wrong_result
     * @returns
     */
    const fdate: (d: any, wrong_result?: boolean) => any;
    export { fdate };
}
declare module "fn/datetime/calendar" {
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
     * @param    {Date|String} d
     * @param    {String | false} wrong_result Whether or not include the time in the date
     * @returns  {String}
     */
    const calendar: (d: any, wrong_result?: boolean) => any;
    export { calendar };
}
declare module "fn/ajax/callback" {
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
    const callback: (url: any, res?: any, fn?: any, fn2?: any, ele?: any) => boolean;
    export { callback };
}
declare module "fn/string/camelize" {
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
    const camelize: (str: any) => any;
    export { camelize };
}
declare module "fn/string/camelToCss" {
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
    const camelToCss: (str: any) => any;
    export { camelToCss };
}
declare module "fn/convert/canvasToImage" {
    /**
     * Returns a canvas in a HTML element img
     * @method   canvasToImage
     * @global
     * ``` javascript
     * //<img src="data:image/png;base64,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">
     * let a = '<canvas width="60" height="32"></canvas>';
     * bbn.fn.canvasToImage(a);
     * ```
     *
     * @memberof bbn.fn
     * @param {canvas} canvas
     * @returns  {HTMLElement}
     */
    const canvasToImage: (canvas: any) => HTMLImageElement;
    export { canvasToImage };
}
declare module "fn/style/center" {
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
    const center: (ele: any) => any;
    export { center };
}
declare module "fn/object/checkPropsDetails" {
    const checkPropsDetails: (obj: object, props: string | string[], checkEmpty?: boolean) => BbnResError;
    export { checkPropsDetails };
}
declare module "fn/object/checkProps" {
    const checkProps: (obj: object, props: string | string[], checkEmpty?: boolean) => boolean;
    export { checkProps };
}
declare module "fn/object/checkPropsOrDie" {
    const checkPropsOrDie: (obj: object, props: string | string[], checkEmpty?: boolean) => boolean;
    export { checkPropsOrDie };
}
declare module "fn/object/clone" {
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
    const clone: (obj: any) => any;
    export { clone };
}
declare module "fn/convert/colorToHex" {
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
    const colorToHex: (color: any) => string | CanvasGradient | CanvasPattern;
    export { colorToHex };
}
declare module "fn/browser/copy" {
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
    const copy: (st: any) => Promise<unknown>;
    export { copy };
}
declare module "fn/object/count" {
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
    const count: (arr: any[], prop: object | string, val?: any, operator?: string) => number;
    export { count };
}
declare module "fn/string/crc32" {
    const crc32: (str: any) => number;
    export { crc32 };
}
declare module "fn/object/createObject" {
    const createObject: (...args: any[]) => any;
    export { createObject };
}
declare module "fn/style/cssExists" {
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
    const cssExists: (f: any) => boolean;
    export { cssExists };
}
declare module "fn/datetime/dateSQL" {
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
    const dateSQL: (v: any, dayOnly: any) => any;
    export { dateSQL };
}
declare module "fn/datetime/daysInMonth" {
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
    const daysInMonth: (v: any) => number | false;
    export { daysInMonth };
}
declare module "fn/object/deepPath" {
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
    const deepPath: (arr: any[], filter: object, deepProperty: string, res?: any[]) => false | any[];
    export { deepPath };
}
declare module "fn/default/defaultAjaxAbortFunction" {
    const defaultAjaxAbortFunction: (message: any, url?: string) => void;
    export { defaultAjaxAbortFunction };
}
declare module "fn/default/defaultAjaxErrorFunction" {
    const defaultAjaxErrorFunction: (jqXHR: any, textStatus?: any, errorThrown?: any) => void;
    export { defaultAjaxErrorFunction };
}
declare module "fn/default/defaultAlertFunction" {
    const defaultAlertFunction: (msg: any, title?: any) => void;
    export { defaultAlertFunction };
}
declare module "fn/default/defaultConfirmFunction" {
    const defaultConfirmFunction: (text: any, yesFn: any, noFn?: any) => void;
    export { defaultConfirmFunction };
}
declare module "fn/default/defaultEndLoadingFunction" {
    const defaultEndLoadingFunction: (url: any, timestamp: any, data?: any, res?: any) => boolean;
    export { defaultEndLoadingFunction };
}
declare module "fn/default/defaultErrorFunction" {
    const defaultErrorFunction: (message: any) => void;
    export { defaultErrorFunction };
}
declare module "fn/default/defaultHistoryFunction" {
    const defaultHistoryFunction: (obj: any) => boolean;
    export { defaultHistoryFunction };
}
declare module "fn/default/defaultLinkFunction" {
    const defaultLinkFunction: (responseObj: any, ele: any) => boolean;
    export { defaultLinkFunction };
}
declare module "fn/default/defaultPostLinkFunction" {
    const defaultPostLinkFunction: (r: any, ele?: any) => boolean;
    export { defaultPostLinkFunction };
}
declare module "fn/default/defaultPreLinkFunction" {
    const defaultPreLinkFunction: (url: any, force?: boolean, ele?: any) => boolean;
    export { defaultPreLinkFunction };
}
declare module "fn/default/defaultResizeFunction" {
    const defaultResizeFunction: () => boolean;
    export { defaultResizeFunction };
}
declare module "fn/default/defaultStartLoadingFunction" {
    const defaultStartLoadingFunction: (url: any, tst: any, data?: any, requestId?: any) => boolean;
    export { defaultStartLoadingFunction };
}
declare module "fn/object/deleteProp" {
    /**
     * Gets the given property from the given object
     * @param {Object} obj
     * @param {String} prop
     * @returns
     */
    const deleteProp: (obj: object, prop: string) => void;
    export { deleteProp };
}
declare module "fn/type/isValue" {
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
    const isValue: (...args: any[]) => boolean;
    export { isValue };
}
declare module "fn/object/diffObj" {
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
    const diffObj: (obj1: object, obj2: object, unchanged?: boolean, notRoot?: boolean) => any;
    export { diffObj };
}
declare module "fn/string/dirName" {
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
    const dirName: (path: any) => string;
    export { dirName };
}
declare module "fn/type/isBlob" {
    /**
     * @method   isBlob
     * @todo     Add method description for isFunction
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    const isBlob: (...args: any[]) => boolean;
    export { isBlob };
}
declare module "fn/string/fileExt" {
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
    const fileExt: (filename: any) => any;
    export { fileExt };
}
declare module "fn/type/isCanvas" {
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
    const isCanvas: (...args: any[]) => boolean;
    export { isCanvas };
}
declare module "fn/ajax/downloadContent" {
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
    const downloadContent: (filename: any, content: any, type?: any) => void;
    export { downloadContent };
}
declare module "fn/ajax/download" {
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
    const download: (url: any, filename?: string, params?: any) => any;
    export { download };
}
declare module "fn/browser/eraseCookie" {
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
    const eraseCookie: (name: any) => void;
    export { eraseCookie };
}
declare module "fn/string/escapeDquotes" {
    const escapeDquotes: (str: any) => any;
    export { escapeDquotes };
}
declare module "fn/string/escapeSquotes" {
    const escapeSquotes: (str: any) => any;
    export { escapeSquotes };
}
declare module "fn/string/escapeTicks" {
    const escapeTicks: (str: any) => any;
    export { escapeTicks };
}
declare module "fn/string/escapeUrl" {
    /**
     * Escapes a URL or a file path, optionally adding parameters (get type, to append to the URL without the first separator).
     *
     * @param {*} url
     * @param {*} params
     * @returns
     */
    const escapeUrl: (url: any, params: any) => string;
    export { escapeUrl };
}
declare module "fn/object/extendOut" {
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
    const extendOut: (...args: object[]) => any;
    export { extendOut };
}
declare module "fn/form/fieldValue" {
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
    const fieldValue: (field: any) => any;
    export { fieldValue };
}
declare module "fn/object/findAll" {
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
    const findAll: (arr: any, filter: any, deepProperty: any, res?: any[]) => any[];
    export { findAll };
}
declare module "fn/loop/fori" {
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
    const fori: (arr: any, fn: any, max?: number, min?: number) => void;
    export { fori };
}
declare module "fn/loop/forir" {
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
    const forir: (arr: any, fn: any, max?: number, min?: number) => void;
    export { forir };
}
declare module "fn/string/format" {
    const format: (str: any) => any;
    export { format };
}
declare module "fn/string/formatBytes" {
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
    const formatBytes: (bytes: any, decimals?: number) => string;
    export { formatBytes };
}
declare module "fn/datetime/formatDate" {
    const formatDate: (date: any, format: any) => string;
    export { formatDate };
}
declare module "fn/string/formatSize" {
    const formatSize: (st: any, noValid: any) => any;
    export { formatSize };
}
declare module "fn/form/formdata" {
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
    const formdata: (form: any) => {};
    export { formdata };
}
declare module "fn/convert/fromXml" {
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
    const fromXml: (xml: any, arrayTags: any) => {};
    export { fromXml };
}
declare module "fn/datetime/ftime" {
    /**
     * @method   ftime
     * @todo     Add method description for ftime
     * @global
     * @memberof bbn.fn
     * @returns  {*}
     */
    const ftime: (d: any, wrong_result: any) => any;
    export { ftime };
}
declare module "fn/object/unique" {
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
    const unique: (arr: any[]) => any[];
    export { unique };
}
declare module "fn/html/getAllTags" {
    /**
     * Gets all the tag names present in the DOM
     * @returns array
     */
    const getAllTags: () => any[];
    export { getAllTags };
}
declare module "fn/html/getAncestors" {
    const getAncestors: (ele: any, selector?: any) => any[];
    export { getAncestors };
}
declare module "fn/html/getAttributes" {
    /**
     * Check if the property contain sizing
     * @return {Boolean}
     */
    const getAttributes: (ele: any) => any;
    export { getAttributes };
}
declare module "fn/browser/getBrowserName" {
    /**
     * Gets the browser's name
     * @method getBrowserName
     * @global
     * @memberof bbn.fn
     * @returns {String}
     */
    const getBrowserName: () => "Edge" | "Opera" | "Chrome" | "Internet Explorer" | "Firefox" | "Safari" | "Other";
    export { getBrowserName };
}
declare module "fn/browser/getBrowserVersion" {
    /**
     * Gets the browser's version
     * @method getBrowserVersion
     * @global
     * @memberof bbn.fn
     * @returns {String}
     */
    const getBrowserVersion: () => string;
    export { getBrowserVersion };
}
declare module "fn/browser/getCookie" {
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
    const getCookie: (name: any) => any;
    export { getCookie };
}
declare module "fn/style/getCssVar" {
    /**
     * Gets a CSS variable value
     * @param {String*} varname
     * @returns
     */
    const getCssVar: (varname: any) => string;
    export { getCssVar };
}
declare module "fn/datetime/getDay" {
    /**
     * @method   getDay
     * @ignore
     * @todo     Add method description for getDay
     * @global
     * @memberof bbn.fn
     * @param    {String|Date} v
     * @returns
     */
    const getDay: (v: any) => number | false;
    export { getDay };
}
declare module "fn/browser/getDeviceType" {
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
    const getDeviceType: () => "mobile" | "tablet" | "desktop";
    export { getDeviceType };
}
declare module "fn/html/getHTMLOfSelection" {
    const getHTMLOfSelection: () => string;
    export { getHTMLOfSelection };
}
declare module "fn/browser/getEventData" {
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
    const getEventData: (e: any) => Promise<unknown>;
    export { getEventData };
}
declare module "fn/object/getField" {
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
    const getField: (arr: any[], field: string, prop?: object | string, val?: any, operator?: string) => any;
    export { getField };
}
declare module "fn/object/getFieldValues" {
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
    const getFieldValues: (arr: object[], field: string, prop: any, val: any, operator: any) => any[];
    export { getFieldValues };
}
declare module "fn/string/removeHtmlComments" {
    const removeHtmlComments: (str: string) => string;
    export { removeHtmlComments };
}
declare module "fn/html/getHtml" {
    const getHtml: (ele: any, stripComments?: boolean) => any;
    export { getHtml };
}
declare module "fn/html/getPath" {
    /**
     * @method   getPath
     * @todo     Add method description for getPath
     * @global
     * @ignore
     * @memberof bbn.fn
     * @returns  {*}
     */
    const getPath: (element: any) => any;
    export { getPath };
}
declare module "fn/object/getProp" {
    /**
     * Gets the given property from the given object
     * @param {Object} obj
     * @param {String} prop
     * @returns
     */
    const getProp: (obj: any, prop: any) => any;
    export { getProp };
}
declare module "fn/style/getScrollBarSize" {
    const getScrollBarSize: () => number;
    export { getScrollBarSize };
}
declare module "fn/html/getText" {
    const getText: (ele: any) => any;
    export { getText };
}
declare module "fn/misc/getTimeoff" {
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
    const getTimeoff: () => number;
    export { getTimeoff };
}
declare module "fn/browser/happy" {
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
    const happy: (...args: any[]) => any;
    export { happy };
}
declare module "fn/convert/hex2rgb" {
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
    const hex2rgb: (hex: any) => {
        r: number;
        g: number;
        b: number;
    };
    export { hex2rgb };
}
declare module "fn/browser/history" {
    const history: () => false | History;
    export { history };
}
declare module "fn/html/html2text" {
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
    const html2text: (st: any) => any;
    export { html2text };
}
declare module "fn/convert/imageToCanvas" {
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
    const imageToCanvas: (img: any) => HTMLCanvasElement;
    export { imageToCanvas };
}
declare module "fn/convert/imgToBase64" {
    const imgToBase64: (img: any, type?: string) => string;
    export { imgToBase64 };
}
declare module "fn/browser/info" {
    /**
     * Logs the given argument in the browser's console highlighting it with a blue background.
     * @method   info
     * @global
     * @memberof bbn.fn
     * @param    {...any} args
     * @returns  {*}
     */
    const info: (...args: any[]) => any;
    export { info };
}
declare module "fn/ajax/treatAjaxArguments" {
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
    const treatAjaxArguments: (args: any) => any;
    export { treatAjaxArguments };
}
declare module "fn/ajax/setNavigationVars" {
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
    const setNavigationVars: (url: any, title: any, data?: any, repl?: boolean) => void;
    export { setNavigationVars };
}
declare module "fn/ajax/link" {
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
    const link: (...args: any[]) => any;
    export { link };
}
declare module "fn/ajax/post" {
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
    const post: (...args: any[]) => any;
    export { post };
}
declare module "fn/form/submit" {
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
    const submit: (form: HTMLFormElement, e?: Event, fn?: Function) => void;
    export { submit };
}
declare module "fn/style/resize" {
    const resize: () => void;
    export { resize };
}
declare module "fn/browser/isMobileDevice" {
    const isMobileDevice: () => boolean;
    export { isMobileDevice };
}
declare module "fn/browser/isTabletDevice" {
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
    const isTabletDevice: () => boolean;
    export { isTabletDevice };
}
declare module "fn/browser/isMobile" {
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
    const isMobile: () => boolean;
    export { isMobile };
}
declare module "fn/init" {
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
    const init: (cfg: any, force: any) => void;
    export { init };
}
declare module "fn/browser/isActiveInterface" {
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
    const isActiveInterface: (secs?: number) => boolean;
    export { isActiveInterface };
}
declare module "fn/type/isBoolean" {
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
    const isBoolean: (...args: any[]) => boolean;
    export { isBoolean };
}
declare module "fn/type/isColor" {
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
    const isColor: (...args: any[]) => boolean;
    export { isColor };
}
declare module "fn/type/isComment" {
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
    const isComment: (...args: any[]) => boolean;
    export { isComment };
}
declare module "fn/browser/isDesktopDevice" {
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
    const isDesktopDevice: () => boolean;
    export { isDesktopDevice };
}
declare module "fn/type/isValidDimension" {
    /**
     * Returns true if the given value is a valid CSS dimension string, false otherwise.
     *
     * @method   isValidDimension
     * @global
     * @memberof bbn.fn
     * @param    {String} st
     * @returns
     */
    const isValidDimension: (st: any) => boolean;
    export { isValidDimension };
}
declare module "fn/type/isDimension" {
    /**
     * Returns true if the given value is a valid CSS dimension string or a number, false otherwise.
     *
     * @method   isDimension
     * @global
     * @memberof bbn.fn
     * @param    {String} st
     * @returns
     */
    const isDimension: (...args: any[]) => boolean;
    export { isDimension };
}
declare module "fn/type/isEmail" {
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
    const isEmail: (...args: any[]) => boolean;
    export { isEmail };
}
declare module "fn/type/isEvent" {
    /**
     * Returns true if the given argument is an event.
     * @method   isEvent
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    const isEvent: (...args: any[]) => boolean;
    export { isEvent };
}
declare module "fn/browser/isFocused" {
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
    const isFocused: (ele: any, contain?: boolean) => boolean;
    export { isFocused };
}
declare module "fn/type/isIP" {
    const isIP: (...args: any[]) => boolean;
    export { isIP };
}
declare module "fn/type/isHostname" {
    const isHostname: (...args: any[]) => boolean;
    export { isHostname };
}
declare module "fn/html/isInside" {
    const isInside: (ele: any, ancestor: any) => boolean;
    export { isInside };
}
declare module "fn/type/isPercent" {
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
    const isPercent: (...args: any[]) => boolean;
    export { isPercent };
}
declare module "fn/type/isPrimitive" {
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
    const isPrimitive: (...args: any[]) => boolean;
    export { isPrimitive };
}
declare module "fn/type/isPromise" {
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
    const isPromise: (...args: any[]) => boolean;
    export { isPromise };
}
declare module "fn/type/isPropSize" {
    const isPropSize: (name: any) => boolean;
    export { isPropSize };
}
declare module "fn/type/isSQLDate" {
    /**
     * @ignore
     * @method   isSQLDate
     * @todo     Add method description for isSQLDate
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    const isSQLDate: (...args: any[]) => boolean;
    export { isSQLDate };
}
declare module "fn/type/isSymbol" {
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
    const isSymbol: (...args: any[]) => boolean;
    export { isSymbol };
}
declare module "fn/type/isURL" {
    const isURL: (...args: any[]) => boolean;
    export { isURL };
}
declare module "fn/type/isValidName" {
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
    const isValidName: (...args: any[]) => boolean;
    export { isValidName };
}
declare module "fn/type/isVue" {
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
    const isVue: (...args: any[]) => boolean;
    export { isVue };
}
declare module "fn/style/lightenDarkenHex" {
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
    const lightenDarkenHex: (hex: any, amt: any) => string;
    export { lightenDarkenHex };
}
declare module "fn/browser/warning" {
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
    const warning: (message: any) => void;
    export { warning };
}
declare module "fn/html/makeReactive" {
    const makeReactive: (obj: any, onSet: any, parent: any, parentProp: any) => any;
    export { makeReactive };
}
declare module "fn/object/map" {
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
    const map: (arr: any, fn: any, deepProp: any, level?: number) => any;
    export { map };
}
declare module "fn/misc/money" {
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
    const money: (val: number, kilo?: boolean, currency?: string, novalue?: string | false, decimal?: string, thousands?: string, precision?: number) => string;
    export { money };
}
declare module "fn/object/move" {
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
    const move: (arr: any[], fromIndex: number, toIndex: number) => any[];
    export { move };
}
declare module "fn/object/multiorder" {
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
    const multiorder: (arr: object[], orders: any) => object[];
    export { multiorder };
}
declare module "fn/string/nl2br" {
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
    const nl2br: (st: any, keepNl: any) => string;
    export { nl2br };
}
declare module "fn/form/objectToFormData" {
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
    const objectToFormData: (obj: any, key?: string, ignoreList?: any) => FormData;
    export { objectToFormData };
}
declare module "fn/object/order" {
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
    const order: (arr: any, prop: any, dir?: string) => any;
    export { order };
}
declare module "fn/html/selector" {
    /**
     * @ignore
     * @method   selector
     * @todo     Add method description for selector
     * @global
     * @memberof bbn.fn
     * @returns  {HTMLElement | undefined}
     */
    const selector: (ele: any) => any;
    export { selector };
}
declare module "fn/style/outerHeight" {
    /**
     *
     * @ignore
     * @method   outerHeight
     * @todo     Add method description for outerHeight
     * @global
     * @memberof bbn.fn
     * @returns  {*}
     */
    const outerHeight: (ele: HTMLElement) => number | false;
    export { outerHeight };
}
declare module "fn/style/outerWidth" {
    /**
     * @ignore
     * @method   outerWidth
     * @todo     Add method description for outerWidth
     * @global
     * @memberof bbn.fn
     * @returns  {*}
     */
    const outerWidth: (ele: HTMLElement) => number | false;
    export { outerWidth };
}
declare module "fn/misc/percent" {
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
    const percent: (percent: any, cent: any) => number;
    export { percent };
}
declare module "fn/object/pickValue" {
    const pickValue: (arr: any[]) => any;
    export { pickValue };
}
declare module "fn/object/setProperty" {
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
    const setProperty: (obj: object, prop: string, value: any, force?: boolean) => void;
    export { setProperty };
}
declare module "fn/ajax/postOut" {
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
    const postOut: (url: any, data: any, success?: any, target?: string) => void;
    export { postOut };
}
declare module "fn/string/printf" {
    /**
     * @method   printf
     * @todo     Add method description for printf
     * @global
     * @memberof bbn.fn
     * @param    String format
     * @returns  {*}
     */
    const printf: (format: any) => any;
    export { printf };
}
declare module "fn/string/quotes2html" {
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
    const quotes2html: (st: string, type?: string) => string;
    export { quotes2html };
}
declare module "fn/misc/randomInt" {
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
    const randomInt: (min: number, max: number) => number;
    export { randomInt };
}
declare module "fn/string/randomString" {
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
    const randomString: (min?: number, max?: string | number, types?: string) => string;
    export { randomString };
}
declare module "fn/object/removeEmpty" {
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
    const removeEmpty: (arr: any[]) => any[];
    export { removeEmpty };
}
declare module "fn/string/removeExtraSpaces" {
    /**
     * Removes all group of spaces by one single space.
     * @param {String} str
     * @returns
     */
    const removeExtraSpaces: (str: string) => string;
    export { removeExtraSpaces };
}
declare module "fn/string/removeTrailingChars" {
    /**
     * @method   removeTrailingChars
     * @todo     Add method description for removeTrailingChars
     * @global
     * @memberof bbn.fn
     * @param    {String} st
     * @param    {String} char
     * @returns  {*}
     */
    const removeTrailingChars: (st: string, char?: string) => string;
    export { removeTrailingChars };
}
declare module "fn/string/repeat" {
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
    const repeat: (st: string, num: number) => string;
    export { repeat };
}
declare module "fn/browser/replaceSelection" {
    const replaceSelection: (html: any, selectInserted: any) => void;
    export { replaceSelection };
}
declare module "fn/convert/rgb2hex" {
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
    const rgb2hex: (rgb: any) => string;
    export { rgb2hex };
}
declare module "fn/loop/riterate" {
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
    const riterate: (obj: any, fn: any, noPrivate?: boolean) => any;
    export { riterate };
}
declare module "fn/misc/roundDecimal" {
    /**
     * @method   roundDecimal
     * @todo     Add method description for roundDecimal
     * @global
     * @memberof bbn.fn
     * @param    {Number} value
     * @param    {Number} decimals
     * @returns  {}
     */
    const roundDecimal: (value: number, decimals: number) => number;
    export { roundDecimal };
}
declare module "fn/string/trim" {
    const trim: (str: any, hair?: string) => any;
    export { trim };
}
declare module "fn/string/sanitize" {
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
    const sanitize: (str: any, separator?: string) => any;
    export { sanitize };
}
declare module "fn/browser/selectElementText" {
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
    const selectElementText: (ele: any, win?: any) => void;
    export { selectElementText };
}
declare module "fn/browser/setCookie" {
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
    const setCookie: (name: any, value: any, days: any) => void;
    export { setCookie };
}
declare module "fn/style/setCssVar" {
    /**
     * Creates a CSS variable
     * @param {String*} varname
     * @param {String*} value
     * @returns
     */
    const setCssVar: (varname: any, value: any) => void;
    export { setCssVar };
}
declare module "fn/object/setProp" {
    /**
     * Sets a given property on the given object
     *
     * @param {Object} obj
     * @param {String} prop
     * @param {*} value
     * @param {Boolean} writable
     * @param {Boolean} configurable
     */
    const setProp: (obj: object, prop: string, value: any, writable?: boolean, configurable?: boolean) => void;
    export { setProp };
}
declare module "fn/string/shorten" {
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
    const shorten: (st: string, len?: number, adj?: string) => string;
    export { shorten };
}
declare module "fn/object/shortenObj" {
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
    const shortenObj: (obj: any, max?: number) => object;
    export { shortenObj };
}
declare module "fn/object/shuffle" {
    const shuffle: (array: any[]) => any[];
    export { shuffle };
}
declare module "fn/datetime/chrono" {
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
    const startChrono: (name: any) => void;
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
    const stopChrono: (name: any) => number;
    export { startChrono, stopChrono };
}
declare module "fn/convert/string2ArrayBuffer" {
    const string2ArrayBuffer: (str: string) => ArrayBuffer;
    export { string2ArrayBuffer };
}
declare module "fn/object/sum" {
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
    const sum: (arr: object[], numberProp: string | ((a: any) => any), prop: object | string, val?: any, operator?: string) => number;
    export { sum };
}
declare module "fn/datetime/timestamp" {
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
    const timestamp: (seconds?: boolean) => number;
    export { timestamp };
}
declare module "fn/convert/toCSV" {
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
    const toCSV: (arr: any, valSep?: string, rowSep?: string, valEsc?: string) => string;
    export { toCSV };
}
declare module "fn/browser/toggleFullScreen" {
    const toggleFullScreen: () => void;
    export { toggleFullScreen };
}
declare module "fn/misc/translate" {
    const translate: (o: object, namespace?: string) => void;
    export { translate };
}
declare module "fn/string/uniqString" {
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
    const uniqString: (...args: any[]) => string;
    export { uniqString };
}
declare module "fn/ajax/upload" {
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
    const upload: (url: any, file: any, success?: any, failure?: any, progress?: any) => any;
    export { upload };
}
declare module "fn" {
    const fn: {
        _addLoader: (requestId: any, prom: any, source: any) => number;
        _compareValues: (a: any, b: any, prop: any, dir?: string) => 0 | 1 | -1;
        _deleteLoader: (requestId: any, res?: any, isAbort?: boolean) => boolean;
        abort: (requestId: any) => void;
        abortURL: (url: any) => void;
        addColors: (colors: object) => void;
        addInputs: (form: any, params?: any, prefix?: string) => void;
        addStyle: (ele: any, o: any) => void;
        adjustHeight: () => void;
        adjustSize: (type: any, eles: any) => void;
        adjustWidth: () => void;
        ajax: (url: any, datatype?: any, data?: any, success?: any, failure?: any, abort?: any) => any;
        analyzeFunction: (fn: any) => {
            body: any;
            args: any[];
            argString: string;
            isArrow: boolean;
            hasFunction: boolean;
            name: any;
            isAsync: boolean;
            hash: string;
        };
        animateCss: (ele: any, animationName: any, callback: any) => void;
        arrayBuffer2String: (buf: any) => any;
        arrayFromProp: (arr: any, prop: any) => any[];
        autoExtend: (namespace: any, obj: any) => void;
        baseName: (path: string, suffix?: string) => string;
        br2nl: (st: any) => string;
        calendar: (d: any, wrong_result?: boolean) => any;
        callback: (url: any, res?: any, fn?: any, fn2?: any, ele?: any) => boolean;
        camelize: (str: any) => any;
        camelToCss: (str: any) => any;
        canvasToImage: (canvas: any) => HTMLImageElement;
        center: (ele: any) => any;
        checkProps: (obj: object, props: string | string[], checkEmpty?: boolean) => boolean;
        checkPropsDetails: (obj: object, props: string | string[], checkEmpty?: boolean) => BbnResError;
        checkPropsOrDie: (obj: object, props: string | string[], checkEmpty?: boolean) => boolean;
        checkType: (value: any, type: string | object, msg?: string, ...logs: any[]) => void;
        circularReplacer: () => (key: any, value: any) => any;
        clone: (obj: any) => any;
        colorToHex: (color: any) => string | CanvasGradient | CanvasPattern;
        compare: (v1: any, v2: any, operator: any) => boolean;
        compareConditions: (data: any, filter: any) => boolean;
        copy: (st: any) => Promise<unknown>;
        correctCase: (str: any) => any;
        count: (arr: any[], prop: string | object, val?: any, operator?: string) => number;
        crc32: (str: any) => number;
        createObject: (...args: any[]) => any;
        cssExists: (f: any) => boolean;
        date: (v: any) => any;
        dateSQL: (v: any, dayOnly: any) => any;
        daysInMonth: (v: any) => number | false;
        deepPath: (arr: any[], filter: object, deepProperty: string, res?: any[]) => false | any[];
        defaultAjaxAbortFunction: (message: any, url?: string) => void;
        defaultAjaxErrorFunction: (jqXHR: any, textStatus?: any, errorThrown?: any) => void;
        defaultAlertFunction: (msg: any, title?: any) => void;
        defaultConfirmFunction: (text: any, yesFn: any, noFn?: any) => void;
        defaultEndLoadingFunction: (url: any, timestamp: any, data?: any, res?: any) => boolean;
        defaultErrorFunction: (message: any) => void;
        defaultHistoryFunction: (obj: any) => boolean;
        defaultLinkFunction: (responseObj: any, ele: any) => boolean;
        defaultPostLinkFunction: (r: any, ele?: any) => boolean;
        defaultPreLinkFunction: (url: any, force?: boolean, ele?: any) => boolean;
        defaultResizeFunction: () => boolean;
        defaultStartLoadingFunction: (url: any, tst: any, data?: any, requestId?: any) => boolean;
        deleteProp: (obj: object, prop: string) => void;
        diffObj: (obj1: object, obj2: object, unchanged?: boolean, notRoot?: boolean) => any;
        dirName: (path: any) => string;
        download: (url: any, filename?: string, params?: any) => any;
        downloadContent: (filename: any, content: any, type?: any) => void;
        each: (arr: any, fn: any) => any;
        eraseCookie: (name: any) => void;
        error: (errorMsg: any) => never;
        escapeDquotes: (str: any) => any;
        escapeRegExp: (str: any) => any;
        escapeSquotes: (str: any) => any;
        escapeTicks: (str: any) => any;
        escapeUrl: (url: any, params: any) => string;
        extend: (...originalArgs: (boolean | object)[]) => any;
        extendOut: (...args: object[]) => any;
        fdate: (d: any, wrong_result?: boolean) => any;
        fdatetime: (d: any, wrong_result?: boolean) => any;
        fieldValue: (field: any) => any;
        fileExt: (filename: any) => any;
        filter: (arr: any[], prop: string | object | import("fn/object/filterToConditions").Filter | ((a: any, i: string | number | symbol) => boolean), val?: any, operator?: string) => any[];
        filterToConditions: (filter: any, operator?: string) => import("fn/object/filterToConditions").Filter;
        findAll: (arr: any, filter: any, deepProperty: any, res?: any[]) => any[];
        fori: (arr: any, fn: any, max?: number, min?: number) => void;
        forir: (arr: any, fn: any, max?: number, min?: number) => void;
        format: (str: any) => any;
        formatBytes: (bytes: any, decimals?: number) => string;
        formatDate: (date: any, format: any) => string;
        formatSize: (st: any, noValid: any) => any;
        formdata: (form: any) => {};
        fromXml: (xml: any, arrayTags: any) => {};
        ftime: (d: any, wrong_result: any) => any;
        getAllTags: () => any[];
        getAncestors: (ele: any, selector?: any) => any[];
        getAttributes: (ele: any) => any;
        getBrowserName: () => "Edge" | "Opera" | "Chrome" | "Internet Explorer" | "Firefox" | "Safari" | "Other";
        getBrowserVersion: () => string;
        getCookie: (name: any) => any;
        getCssVar: (varname: any) => string;
        getDay: (v: any) => number | false;
        getDeviceType: () => "mobile" | "tablet" | "desktop";
        getEventData: (e: any) => Promise<unknown>;
        getField: (arr: any[], field: string, prop?: string | object, val?: any, operator?: string) => any;
        getFieldValues: (arr: object[], field: string, prop: any, val: any, operator: any) => any[];
        getHtml: (ele: any, stripComments?: boolean) => any;
        getHTMLOfSelection: () => string;
        getLoader: (requestId: any) => BbnLoader;
        getPath: (element: any) => any;
        getProp: (obj: any, prop: any) => any;
        getProperty: (obj: any, prop: any) => any;
        getRequestId: (url: any, data: any, datatype: any) => string;
        getRow: (arr: any[], prop: string | object, val?: any, operator?: string) => any;
        getScrollBarSize: () => number;
        getText: (ele: any) => any;
        getTimeoff: () => number;
        happy: (...args: any[]) => any;
        hash: (obj: any) => string;
        hex2rgb: (hex: any) => {
            r: number;
            g: number;
            b: number;
        };
        history: () => false | History;
        html2text: (st: any) => any;
        imageToCanvas: (img: any) => HTMLCanvasElement;
        imgToBase64: (img: any, type?: string) => string;
        info: (...args: any[]) => any;
        init: (cfg: any, force: any) => void;
        isActiveInterface: (secs?: number) => boolean;
        isArray: (...args: any[]) => boolean;
        isBlob: (...args: any[]) => boolean;
        isBoolean: (...args: any[]) => boolean;
        isCanvas: (...args: any[]) => boolean;
        isColor: (...args: any[]) => boolean;
        isComment: (...args: any[]) => boolean;
        isCp: (...args: any[]) => boolean;
        isDate: (...args: any[]) => boolean;
        isDesktopDevice: () => boolean;
        isDimension: (...args: any[]) => boolean;
        isDom: (...args: any[]) => boolean;
        isEmail: (...args: any[]) => boolean;
        isEmpty: (obj: any) => boolean;
        isEvent: (...args: any[]) => boolean;
        isFocused: (ele: any, contain?: boolean) => boolean;
        isFunction: (...args: any[]) => boolean;
        isHostname: (...args: any[]) => boolean;
        isInside: (ele: any, ancestor: any) => boolean;
        isInt: (...args: any[]) => boolean;
        isIP: (...args: any[]) => boolean;
        isIterable: (...args: any[]) => boolean;
        isMobile: () => boolean;
        isMobileDevice: () => boolean;
        isNull: (...args: any[]) => boolean;
        isNumber: (...args: any[]) => boolean;
        isObject: (...args: any[]) => boolean;
        isPercent: (...args: any[]) => boolean;
        isPrimitive: (...args: any[]) => boolean;
        isPromise: (...args: any[]) => boolean;
        isPropSize: (name: any) => boolean;
        isSame: (obj1: any, obj2: any, done?: any[]) => boolean;
        isSQLDate: (...args: any[]) => boolean;
        isString: (...args: any[]) => boolean;
        isSymbol: (...args: any[]) => boolean;
        isTabletDevice: () => boolean;
        isURL: (...args: any[]) => boolean;
        isValidDimension: (st: any) => boolean;
        isValidName: (...args: any[]) => boolean;
        isValue: (...args: any[]) => boolean;
        isVue: (...args: any[]) => boolean;
        iterate: (obj: any, fn: any, noPrivate?: boolean, reverse?: boolean) => any;
        lightenDarkenHex: (hex: any, amt: any) => string;
        link: (...args: any[]) => any;
        log: (...args: any[]) => any;
        makeReactive: (obj: any, onSet: any, parent: any, parentProp: any) => any;
        map: (arr: any, fn: any, deepProp: any, level?: number) => any;
        md5: (st: any) => string;
        money: (val: number, kilo?: boolean, currency?: string, novalue?: string | false, decimal?: string, thousands?: string, precision?: number) => string;
        move: (arr: any[], fromIndex: number, toIndex: number) => any[];
        multiorder: (arr: object[], orders: any) => object[];
        nl2br: (st: any, keepNl: any) => string;
        numProperties: (obj: object) => number;
        objectToFormData: (obj: any, key?: string, ignoreList?: any) => FormData;
        order: (arr: any, prop: any, dir?: string) => any;
        outerHeight: (ele: HTMLElement) => number | false;
        outerWidth: (ele: HTMLElement) => number | false;
        percent: (percent: any, cent: any) => number;
        pickValue: (arr: any[]) => any;
        post: (...args: any[]) => any;
        postOut: (url: any, data: any, success?: any, target?: string) => void;
        printf: (format: any) => any;
        quotes2html: (st: string, type?: string) => string;
        randomInt: (min: number, max: number) => number;
        randomString: (min?: number, max?: string | number, types?: string) => string;
        removeAccents: (st: string) => string;
        removeEmpty: (arr: any[]) => any[];
        removeExtraSpaces: (str: string) => string;
        removeHtmlComments: (str: string) => string;
        removePrivateProp: (obj: object, deep?: boolean) => any;
        removeTrailingChars: (st: string, char?: string) => string;
        repeat: (st: string, num: number) => string;
        replaceAll: (find: string, replace: string, str: string, flags?: string) => string;
        replaceSelection: (html: any, selectInserted: any) => void;
        resize: () => void;
        rgb2hex: (rgb: any) => string;
        riterate: (obj: any, fn: any, noPrivate?: boolean) => any;
        roundDecimal: (value: number, decimals: number) => number;
        sanitize: (str: any, separator?: string) => any;
        search: (arr: any[], prop: string | object | import("fn/object/filterToConditions").Filter | ((a: any, i: string | number | symbol) => boolean), val?: any, operator?: string | number, startFrom?: number) => number;
        selectElementText: (ele: any, win?: any) => void;
        selector: (ele: any) => any;
        setCookie: (name: any, value: any, days: any) => void;
        setCssVar: (varname: any, value: any) => void;
        setNavigationVars: (url: any, title: any, data?: any, repl?: boolean) => void;
        setProp: (obj: object, prop: string, value: any, writable?: boolean, configurable?: boolean) => void;
        setProperty: (obj: object, prop: string, value: any, force?: boolean) => void;
        shorten: (st: string, len?: number, adj?: string) => string;
        shortenObj: (obj: any, max?: number) => object;
        shuffle: (array: any[]) => any[];
        simpleHash: (str: any) => string;
        simpleHash1: (str: string) => number;
        simpleHash2: (str: string) => number;
        startChrono: (name: any) => void;
        stopChrono: (name: any) => number;
        string2ArrayBuffer: (str: string) => ArrayBuffer;
        submit: (form: HTMLFormElement, e?: Event, fn?: Function) => void;
        substr: (str: string, from: number, length?: number) => string;
        sum: (arr: object[], numberProp: string | ((a: any) => any), prop: string | object, val?: any, operator?: string) => number;
        timestamp: (seconds?: boolean) => number;
        toCSV: (arr: any, valSep?: string, rowSep?: string, valEsc?: string) => string;
        toggleFullScreen: () => void;
        translate: (o: object, namespace?: string) => void;
        treatAjaxArguments: (args: any) => any;
        trim: (str: any, hair?: string) => any;
        uniqString: (...args: any[]) => string;
        unique: (arr: any[]) => any[];
        upload: (url: any, file: any, success?: any, failure?: any, progress?: any) => any;
        warning: (message: any) => void;
    };
    export { fn };
}
declare module "index" {
    const bbn: Bbn;
    export { bbn };
}
