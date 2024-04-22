import isArray from '../type/isArray.js';
import isObject from '../type/isObject.js';
import each from '../loop/each.js';
import substr from '../string/substr.js';
export default function checkPropsDetails(obj, props, checkEmpty) {
    if (checkEmpty === void 0) { checkEmpty = false; }
    var res = {
        error: false,
        result: true,
    };
    if (typeof props === "string") {
        props = [props];
    }
    if (!isArray(props)) {
        res.error = bbn._("checkProps must receive a string or an array as props argument");
    }
    if (!isObject(obj)) {
        res.error = bbn._("checkProps must receive an object as obj argument");
    }
    if (!res.error) {
        var check_1;
        each(props, function (varName) {
            varName = varName.trim().split(":");
            var type = varName[1] || false;
            varName = varName[0];
            if (obj[varName] === undefined) {
                res.error = varName + " " + bbn._("is not defined");
            }
            else if (type) {
                check_1 =
                    "is" +
                        substr(type, 0, 1).toUpperCase() +
                        substr(type, 1).toLowerCase();
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
}
;
