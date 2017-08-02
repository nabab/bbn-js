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
;(function($, window){
  "use strict";

  window.bbn = {
    version: "0.2",
    opt: {
      _cat: {}
    },
    _: function(a){
      return a;
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
      confirmation: "Confirmation"
    },
    app: {
      popups: [],
    },
  };

})(jQuery, window);
