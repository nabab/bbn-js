import each from '../loop/each.js';
import dirName from './dirName.js';
import baseName from './baseName.js';
import isString from '../type/isString.js';
/**
 * Escapes a URL or a file path, optionally adding parameters (get type, to append to the URL without the first separator).
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */
export default function escapeUrl(url, params) {
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
    each(dirName(url).split("/"), function (a) {
        st += encodeURIComponent(a) + "/";
    });
    var base = baseName(url);
    var sep = "?";
    var existingParams = "";
    if (base.indexOf(sep)) {
        var tmp = base.split("?");
        sep = "&";
        existingParams = "?" + tmp[1];
        base = tmp[0];
    }
    if (params && isString(params)) {
        if (params.match("^(\\&|\\?)")) {
            params = params.substring(1);
        }
        params = sep + params;
    }
    else {
        params = "";
    }
    return st + encodeURIComponent(base) + existingParams + params;
}
;
