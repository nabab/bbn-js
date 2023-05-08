/*
 *
 *  Appui the App-UI library
 *  Copyright 2012 Thomas Nabet
 *  v 0.2
 *
 *  bbn is a window object containing elements dispatched in 3 sub-objects:
 *  - functions (f),
 *  - variables (v),
 *  - language (l)
 */
(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  }
  else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    global.bbn = factory();
    global.exports = global;
  }
}(
  this,
  () => {
    "use strict";
    /*
    if (axios) {
      axios.defaults.headers.post['Content-Type'] = 'text/json';
    }
    */
    return {
      version: "1.0.1",
      opt: {
        _cat: {}
      },
      /**
       * Translate an expression using the object bbn.lng
       * 
       * @param {String} st 
       * @returns {String}
       */
      _(st) {
        bbn.fn.checkType(st, 'string', "Undeerscore function takes strings as arguments");
        let res = bbn.lng[st] || st;
        let args = Array.prototype.slice.call(arguments, 1);
        if (args.length) {
          let i = 0;
          return res.replace(/\%([d|s])/g, (match, type) => {
            let tmp = args[i++];
            if (!tmp) {
              tmp = type === 'd' ? 0 : '';
            }

            bbn.fn.checkType(tmp, type === 'd' ? 'number' : 'string', bbn._("The value you gave did not correspond, check the loggg"));
            return tmp;
          });
        }

        return res;
      },
      $(selector, context) {
        if (context && context.querySelectorAll) {
          return context.querySelectorAll(selector);
        }
        return document.body.querySelectorAll(selector);
      },
      _popups: [],
      lng: {
        /* User-defined languages elements */
        select_unselect_all: "Select/Clear all",
        select_all: "Select all",
        search: 'Search',
        loading: 'Loading...',
        choose: 'Choose',
        error: 'Error',
        server_response: 'Server response',
        reload: 'Reload',
        errorText: 'Something went wrong',
        closeAll: "Close all",
        closeOthers: "Close others",
        pin: "Pin",
        arrange: "Arrange",
        cancel: "Cancel",
        unpin: "Unpin",
        yes: "Yes",
        no: "No",
        unknown: "Unknown",
        untitled: "Untitled",
        confirmation: "Confirmation",
        Today: "Today",
        Tomorrow: "Tomorrow",
        Yesterday: "Yesterday"
      },
      app: {
        popups: [],
      }
    };
  }
));
