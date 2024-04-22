import isObject from '../type/isObject.js';
import isFunction from '../type/isFunction.js';
import substr from '../string/substr.js';
import numProperties from '../object/numProperties.js';
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
export default function treatAjaxArguments(args) {
    var cfg = {};
    var t;
    var i;
    if (isObject(args[0]) && args.length === 1) {
        return args[0];
    }
    for (i = 0; i < args.length; i++) {
        t = typeof args[i];
        t = t.toLowerCase();
        /* Callbacks */
        if (isFunction(args[i])) {
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
                    cfg["url"] = substr(args[i], bbn.env.root.length);
                }
                else {
                    /* Link */
                    cfg["url"] = args[i];
                    if (cfg["url"].indexOf(bbn.env.root) === 0) {
                        cfg["url"] = substr(cfg["url"], bbn.env.root.length);
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
    if (!cfg["url"] && numProperties(cfg)) {
        cfg["url"] = bbn.env.path;
    }
    if (cfg["obj"] === undefined) {
        cfg["obj"] = { _bbn: "public" };
    }
    if (!cfg["datatype"]) {
        cfg["datatype"] = "json";
    }
    return cfg;
}
;
