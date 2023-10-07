//import { log } from './log.js'  ;
import { escapeRegExp } from '../string/escapeRegExp.js';
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
                if (new RegExp("(^|\\s)" + escapeRegExp(f) + "(\\{|\\s)", "g").test(rules[cx].selectorText)) {
                    return true;
                }
            }
        }
    }
    return false;
};
export { cssExists };
