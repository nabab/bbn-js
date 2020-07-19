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
const axios = require("axios");
const env = require('./env/_def');
const functions = require('./fn/index');
const variables = require('./var/index');

function createBbn() {
  "use strict";
  if (axios) {
    axios.defaults.headers.post['Content-Type'] = 'text/json';
  }
  const lng = {
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
  };
  return {
    version: "0.2",
    opt: {
      _cat: {}
    },
    _(st, namespace) {
      if (namespace && functions.isString(namespace)) {
        if (namespace.indexOf('_') !== 0) {
          namespace = '_' + namespace;
        }
        if (lng[namespace]) {
          return lng[namespace][st] || st;
        }
      }
      return lng[st] || st;
    },
    $(selector, context) {
      if (context && context.querySelectorAll) {
        return context.querySelectorAll(selector)
      }
      return document.body.querySelectorAll(selector)
    },
    _popups: [],
    lng: lng,
    app: {
      popups: [],
    },
    fn: functions,
    env: env,
    var: variables
  };
}

module.exports = createBbn();