import { substr } from './string/substr.js';
import { each } from './loop/each.js';
import { extend } from './object/extend.js';
import { addColors } from './style/addColors.js';
import { link } from './ajax/link.js';
import { submit } from './form/submit.js';
import { resize } from './style/resize.js';
import { isMobile } from './browser/isMobile.js';
import { isTabletDevice } from './browser/isTabletDevice.js';
import { isFunction } from './type/isFunction.js';
import { log } from './browser/log.js';
/**
 * Initializes the library bbn basing on the given configuration object.
 * - Gives to the environment the dimension of the window.innerWidth and window.innerHeight
 * - Defines the server's path (difference between the host and the current dir)
 * - Adds the colors contained in bbn.var.colors to define the css classes for background and colors.
 * - Adds the event listener to the document
 * - Activates the history
 * @method   init
 * @global
 * @memberof bbn.fn
 * @param    {Object} cfg
 * @returns
 */
var init = function (cfg, force) {
    var parts;
    if (!bbn.env.isInit || force) {
        bbn.env.root =
            document.baseURI.length > 0 ? document.baseURI : bbn.env.host;
        if (bbn.env.root.length && substr(bbn.env.root, -1) !== "/") {
            bbn.env.root += "/";
        }
        if (!bbn.env.isInit && typeof dayjs !== "undefined") {
            each([
                "advancedFormat",
                "arraySupport",
                "badMutable",
                "buddhistEra",
                "calendar",
                "customParseFormat",
                "dayOfYear",
                "devHelper",
                "duration",
                "isBetween",
                "isLeapYear",
                "isSameOrAfter",
                "isSameOrBefore",
                "isToday",
                "isTomorrow",
                "isYesterday",
                "isoWeek",
                "isoWeeksInYear",
                "localeData",
                "localizedFormat",
                "minMax",
                "objectSupport",
                "pluralGetSet",
                "quarterOfYear",
                "relativeTime",
                "timezone",
                "toArray",
                "toObject",
                "updateLocale",
                "utc",
                "weekOfYear",
                "weekYear",
                "weekday",
            ], function (plugin) {
                if (window["dayjs_plugin_" + plugin]) {
                    dayjs.extend(window["dayjs_plugin_" + plugin]);
                }
            });
        }
        /* The server's path (difference between the host and the current dir */
        if (typeof cfg === "object") {
            extend(true, bbn, cfg);
        }
        bbn.env.path = substr(bbn.env.url, bbn.env.root.length);
        parts = bbn.env.path.split("/");
        //$.each(parts, function(i, v){
        each(parts, function (v, i) {
            v = decodeURI(v.trim());
            if (v !== "") {
                bbn.env.params.push(v);
            }
        });
        if (bbn.var.colors) {
            addColors(bbn.var.colors);
        }
        if (bbn.env.lang && undefined !== dayjs) {
            dayjs.locale(bbn.env.lang);
        }
        window.onfocus = function () {
            bbn.env.isFocused = true;
        };
        window.onblur = function () {
            bbn.env.isFocused = false;
            bbn.env.timeoff = Math.round(new Date().getTime() / 1000);
        };
        document.addEventListener("focusin", function (e) {
            if (e.target instanceof HTMLElement &&
                !e.target.classList.contains("bbn-no")) {
                bbn.env.focused = e.target;
            }
            bbn.env.last_focus = new Date().getTime();
        });
        document.addEventListener("click", function (e) {
            bbn.env.last_focus = new Date().getTime();
            if (bbn.env.nav !== "ajax") {
                return;
            }
            var target = e.target;
            if (target instanceof HTMLElement && target.tagName !== "A") {
                var p = target;
                while (p && p.tagName !== "A") {
                    if (p.tagName === "BODY") {
                        break;
                    }
                    p = p.parentElement;
                }
                if (p && p.tagName === "A") {
                    target = p;
                }
                else {
                    target = null;
                }
            }
            if (target instanceof HTMLElement &&
                target.hasAttribute("href") &&
                !target.hasAttribute("target") &&
                !target.classList.contains("bbn-no")) {
                e.preventDefault();
                e.stopPropagation();
                link(target.getAttribute("href"));
                return false;
            }
        });
        each(document.querySelectorAll("form:not(.bbn-no), form:not(.bbn-form)"), function (ele) {
            ele.addEventListener("submit", function (e) {
                submit(ele, e);
            });
        });
        window.addEventListener("hashchange", function () {
            bbn.env.hashChanged = new Date().getTime();
        }, false);
        window.addEventListener("resize", function () {
            resize();
        });
        window.addEventListener("orientationchange", function () {
            resize();
        });
        resize();
        if (isMobile()) {
            document.body.classList.add("bbn-mobile");
            if (isTabletDevice()) {
                document.body.classList.add("bbn-tablet");
            }
        }
        if (window.history) {
            window.onpopstate = function (e) {
                var h = window.history;
                if (!bbn.env.historyDisabled && h) {
                    //e.preventDefault();
                    if (bbn.fn.defaultHistoryFunction(h.state)) {
                        var state = h.state;
                        if (state) {
                            //link(substr(state.url, bbn.env.root.length), $.extend({title: state.title}, state.data));
                            link(state.url, extend({ title: state.title || bbn.env.siteTitle }, state.data || {}));
                        }
                        else if (state && state.data && isFunction(state.data.script)) {
                            state.data.script();
                        }
                    }
                }
            };
        }
        bbn.env.isInit = true;
        document.dispatchEvent(new Event("bbninit"));
        if (bbn.env.logging) {
            log("Logging in bbn is enabled");
        }
    }
};
export { init };
