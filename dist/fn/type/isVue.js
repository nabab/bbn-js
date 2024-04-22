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
export default function isVue() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length) {
        return false;
    }
    if ("vue" in bbn && window["Vue"]) {
        if ("app" in bbn.vue) {
            for (var _b = 0, args_1 = args; _b < args_1.length; _b++) {
                var a = args_1[_b];
                if (!a || typeof a.render !== "function") {
                    return false;
                }
            }
        }
        else {
            for (var _c = 0, args_2 = args; _c < args_2.length; _c++) {
                var a = args_2[_c];
                if (!(a instanceof window["Vue"])) {
                    return false;
                }
            }
        }
    }
    if ("cp" in bbn &&
        "isComponent" in bbn["cp"] &&
        typeof bbn["cp"].isComponent === "function") {
        return (_a = bbn.cp).isComponent.apply(_a, args);
    }
    return true;
}
;
