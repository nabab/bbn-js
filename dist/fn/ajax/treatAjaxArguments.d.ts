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
declare const treatAjaxArguments: (args: any) => any;
export { treatAjaxArguments };
