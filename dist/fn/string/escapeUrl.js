import { each } from '../loop/each';
import { dirName } from './dirName';
import { baseName } from './baseName';
import { isString } from '../type/isString';
/**
 * Escapes a URL or a file path, optionally adding parameters (get type, to append to the URL without the first separator).
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */
const escapeUrl = function (url, params) {
    let st = "";
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
    each(dirName(url).split("/"), (a) => {
        st += encodeURIComponent(a) + "/";
    });
    let base = baseName(url);
    let sep = "?";
    let existingParams = "";
    if (base.indexOf(sep)) {
        let tmp = base.split("?");
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
};
export { escapeUrl };
