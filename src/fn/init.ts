import substr from './string/substr.js'  ;
import each from './loop/each.js'  ;
import extend from './object/extend.js'  ;
import addColors from './style/addColors.js'  ;
import link from './ajax/link.js'  ;
import submit from './form/submit.js'  ;
import resize from './style/resize.js'  ;
import isMobile from './browser/isMobile.js'  ;
import isTabletDevice from './browser/isTabletDevice.js'  ;
import isFunction from './type/isFunction.js'  ;
import log from './browser/log.js'  ;
import timestamp from './datetime/timestamp.js'  ;

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
export default function init(cfg, force) {
  let parts;
  if (!bbn.env.isInit) {
    bbn.env.root =
      document.baseURI.length > 0 ? document.baseURI : bbn.env.host;
    if (bbn.env.root.length && substr(bbn.env.root, -1) !== "/") {
      bbn.env.root += "/";
    }
    /* The server's path (difference between the host and the current dir */
    if (typeof cfg === "object") {
      extend(true, bbn, cfg);
    }
    bbn.env.path = substr(bbn.env.url, bbn.env.root.length);
    parts = bbn.env.path.split("/");
    //$.each(parts, function(i, v){
    each(parts, (v, i) => {
      v = decodeURI(v.trim());
      if (v !== "") {
        bbn.env.params.push(v);
      }
    });

    if (bbn.var.colors) {
      addColors(bbn.var.colors);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && bbn.env.isFocused) {
        bbn.env.isFocused = false;
      }
      else if (!document.hidden && !bbn.env.isFocused) {
        bbn.env.isFocused = true;
      }
    });

    document.addEventListener("focusin", (e: Event) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.classList.contains("bbn-no")
      ) {
        bbn.env.focused = e.target;
      }
      bbn.env.last_focus = timestamp();
    });

    document.addEventListener("click", (e) => {
      bbn.env.last_focus = timestamp();
      if (bbn.env.nav !== "ajax") {
        return;
      }
      let target = e.target;
      if (target instanceof HTMLElement && target.tagName !== "A") {
        let p = target;
        while (p && p.tagName !== "A") {
          if (p.tagName === "BODY") {
            break;
          }
          p = p.parentElement;
        }
        if (p && p.tagName === "A") {
          target = p;
        } else {
          target = null;
        }
      }
      if (
        target instanceof HTMLElement &&
        target.hasAttribute("href") &&
        !target.hasAttribute("target") &&
        !target.classList.contains("bbn-no")
      ) {
        e.preventDefault();
        e.stopPropagation();
        link(target.getAttribute("href"));
        return false;
      }
    });
    each(
      document.querySelectorAll("form:not(.bbn-no), form:not(.bbn-form)"),
      (ele: HTMLFormElement) => {
        ele.addEventListener("submit", (e) => {
          submit(ele, e);
        });
      }
    );

    window.addEventListener(
      "hashchange",
      () => {
        bbn.env.hashChanged = new Date().getTime();
      },
      false
    );
    window.addEventListener("resize", () => {
      resize();
    });
    window.addEventListener("orientationchange", () => {
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
        let h = window.history;
        if (!bbn.env.historyDisabled && h) {
          //e.preventDefault();
          if (bbn.fn.defaultHistoryFunction(h.state)) {
            let state = h.state;
            if (state) {
              //link(substr(state.url, bbn.env.root.length), $.extend({title: state.title}, state.data));
              link(
                state.url,
                extend(
                  { title: state.title || bbn.env.siteTitle },
                  state.data || {}
                )
              );
            } else if (state && state.data && isFunction(state.data.script)) {
              state.data.script();
            }
          }
        }
      };
    }

    window.addEventListener('online', () => {
      bbn.env.online = true
    });
    window.addEventListener('offline', () => {
      bbn.env.online = false
    });

    bbn.env.isInit = true;
    document.dispatchEvent(new Event("bbninit"));

    if (bbn.env.logging) {
      log("Logging in bbn is enabled");
    }
  }
};
