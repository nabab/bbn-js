/**
 * @file   Initialization.
 * @author BBN Solutions <info@bbn.solutions>
 * @since  12/04/2020
 */

;((bbn) => {
  "use strict";

  /**
   * @var {Object} _private Misc variable for internal use
   */
  let _private = {};

  Object.assign(bbn.fn, {
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
    init(cfg, force){
      let parts;
      if ( !bbn.env.isInit || force){
        bbn.env.root = document.baseURI.length > 0 ? document.baseURI : bbn.env.host;
        if (bbn.env.root.length && (bbn.fn.substr(bbn.env.root, -1) !== '/')) {
          bbn.env.root += '/';
        }
        if (!bbn.env.isInit && (typeof dayjs !== 'undefined')) {
          bbn.fn.each([
            'advancedFormat',
            'arraySupport',
            'badMutable',
            'buddhistEra',
            'calendar',
            'customParseFormat',
            'dayOfYear',
            'devHelper',
            'duration',
            'isBetween',
            'isLeapYear',
            'isSameOrAfter',
            'isSameOrBefore',
            'isToday',
            'isTomorrow',
            'isYesterday',
            'isoWeek',
            'isoWeeksInYear',
            'localeData',
            'localizedFormat',
            'minMax',
            'objectSupport',
            'pluralGetSet',
            'quarterOfYear',
            'relativeTime',
            'timezone',
            'toArray',
            'toObject',
            'updateLocale',
            'utc',
            'weekOfYear',
            'weekYear',
            'weekday'
          ], plugin => {
            if (window['dayjs_plugin_' + plugin]) {
              dayjs.extend(window['dayjs_plugin_' + plugin]);
            }
          });
        }
        /* The server's path (difference between the host and the current dir */
        if ( typeof (cfg) === 'object' ){
         bbn.fn.extend(true, window.bbn, cfg);
        }
        bbn.env.path = bbn.fn.substr(bbn.env.url, bbn.env.root.length);
        parts = bbn.env.path.split("/");
        //$.each(parts, function(i, v){
        bbn.fn.each(parts, (v, i) => {
          v = decodeURI(v.trim());
          if ( v !== "" ){
            bbn.env.params.push(v);
          }
        });

        if ( bbn.var.colors ){
          bbn.fn.addColors(bbn.var.colors);
        }

        if ( bbn.env.lang && (undefined !== dayjs) ){
          dayjs.locale(bbn.env.lang);
        }

        window.onfocus = () => {
          bbn.env.isFocused = true;
        };
        window.onblur = () => {
          bbn.env.isFocused = false;
          bbn.env.timeoff = Math.round((new Date()).getTime() / 1000);
        };

        document.addEventListener("focusin", e => {
          if (!e.target.classList.contains('bbn-no')) {
            bbn.env.focused = e.target;
          }
          bbn.env.last_focus = (new Date()).getTime();
        });
        document.addEventListener('click', (e) => {
          bbn.env.last_focus = (new Date()).getTime();
          if (bbn.env.nav !== 'ajax') {
            return;
          }
          let target = e.target;
          if ( target.tagName !== 'A' ){
            let p = target;
            while ( p && (p.tagName !== 'A') ){
              if ( p.tagName === 'BODY' ){
                break;
              }
              p = p.parentNode;
            }
            if ( p && (p.tagName === 'A') ){
              target = p;
            }
            else{
              target = false;
            }
          }
          if (target && target.href && !target.target && !target.classList.contains('bbn-no')) {
            e.preventDefault();
            e.stopPropagation();
            bbn.fn.link(target.href);
            return false;
          }
        });
        bbn.fn.each(document.querySelectorAll("form:not(.bbn-no), form:not(.bbn-form)"), (ele, i) =>{ 
          ele.addEventListener("submit", e =>{
            bbn.fn.submit(ele, e);
          })  
        }); 


        window.addEventListener('hashchange', () => {
          bbn.env.hashChanged = (new Date()).getTime();
        }, false);
        window.addEventListener("resize", () => {
          bbn.fn.resize();
        });
        window.addEventListener("orientationchange", () => {
          bbn.fn.resize();
        });

        bbn.fn.resize();
        if (bbn.fn.isMobile()) {
          document.body.classList.add('bbn-mobile');
          if ( bbn.fn.isTabletDevice() ){
            document.body.classList.add('bbn-tablet');
          }
        }

        if (window.history) {
          window.onpopstate = function(e){
            let h = window.history;
            if (!bbn.env.historyDisabled && h) {
              //e.preventDefault();
              let state = h.state;
              if (state) {
                if (bbn.fn.defaultHistoryFunction(state)) {
                  //bbn.fn.link(bbn.fn.substr(state.url, bbn.env.root.length), $.extend({title: state.title}, state.data));
                  bbn.fn.link(state.url, bbn.fn.extend({title: state.title || bbn.env.siteTitle}, state.data || {}));
                }
                else if ( state && state.data && bbn.fn.isFunction(state.data.script) ){
                  state.data.script();
                }
              }
            }
          };
        }
        bbn.env.isInit = true;
        document.dispatchEvent(new Event('bbninit'));

        if (bbn.env.logging) {
          bbn.fn.log("Logging in bbn is enabled");
        }
      }
    },

  });
})(bbn);
