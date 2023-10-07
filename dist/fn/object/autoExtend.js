import { extend } from './extend.js';
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
        extend(bbn[namespace], obj);
    }
    else {
        // $.extend(true, bbn[namespace], obj);
        extend(bbn[namespace], obj);
    }
};
export { autoExtend };
