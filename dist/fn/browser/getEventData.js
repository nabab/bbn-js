import getHTMLOfSelection from '../html/getHTMLOfSelection.js';
import each from '../loop/each.js';
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
export default function getEventData(e) {
    var dt = e.dataTransfer || e.clipboardData;
    var t = dt.getData('Text');
    var res = { raw: t, files: [], str: [] };
    var p = new Promise(function (ok, err) {
        var done = !(dt instanceof DataTransfer);
        if (!t && e.type === 'copy') {
            var sel = window.getSelection();
            res.raw = sel.toString();
            var html = getHTMLOfSelection();
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
            each(dt.items, function (item, idx) {
                var kind = item.kind;
                var type = item.type;
                if (kind === 'file') {
                    var cp = dt.files[idx];
                    if (!type && cp.name) {
                        var bits = cp.name.split('.');
                        type = bits[bits.length - 1];
                    }
                    var name_1 = cp ? cp.name : bbn._('untitled');
                    var size = cp ? cp.size : null;
                    var lastModified = cp ? cp.lastModified : null;
                    var blob = item.getAsFile();
                    if (blob) {
                        done = true;
                        num_1--;
                        res.files.push({
                            type: type,
                            data: blob,
                            name: name_1,
                            size: size,
                            mdate: lastModified,
                        });
                        strings_1.push(name_1);
                        if (!num_1) {
                            if (!res.raw) {
                                res.raw = strings_1.join(', ');
                            }
                            ok(res);
                        }
                    }
                    else {
                        bbn.fn.defaultErrorFunction(bbn._('Impossible to read the file') + ' ' + name_1);
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
}
;
