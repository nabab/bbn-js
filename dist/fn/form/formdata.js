import each from '../loop/each.js';
import fieldValue from './fieldValue.js';
import replaceAll from '../string/replaceAll.js';
import substr from '../string/substr.js';
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
export default function formdata(form) {
    var $inputs = form.querySelectorAll('input[name],select[name],textarea[name],button[name]');
    var res = {};
    var n;
    var v;
    each($inputs, function (input, i) {
        v = fieldValue(input);
        if (v !== undefined && !input.disabled) {
            var name_1 = input.name;
            if (name_1.indexOf('[]') === -1 &&
                name_1.indexOf('[') > -1 &&
                name_1.indexOf(']') > -1 &&
                name_1.lastIndexOf(']') === name_1.length - 1) {
                name_1 = replaceAll('][', '.', name_1);
                name_1 = replaceAll('[', '.', name_1);
                name_1 = replaceAll(']', '', name_1);
            }
            if (name_1.length > 2 && name_1.indexOf('[]') === name_1.length - 2) {
                n = substr(name_1, 0, name_1.length - 2);
                if (res[n] === undefined) {
                    res[n] = [];
                }
                res[n].push(v);
            }
            else if (name_1.indexOf('.') > -1) {
                var tmp = void 0, parts = name_1.split('.');
                tmp = res;
                for (var i_1 = 0; i_1 < parts.length; i_1++) {
                    if (res[parts[i_1]] === undefined) {
                        if (i_1 < parts.length - 1) {
                            tmp[parts[i_1]] = {};
                        }
                        else {
                            tmp[parts[i_1]] = v;
                        }
                    }
                    tmp = tmp[parts[i_1]];
                }
            }
            else {
                res[name_1] = v;
            }
        }
    });
    // return num_changes ? res : false;
    return res;
}
;
