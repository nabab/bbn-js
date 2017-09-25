/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  bbn.var = {
    loggers: {
      _num: 0
    },
    /* Usable datatypes through jQuery Ajax function */
    datatypes: ['xml', 'html', 'script', 'json', 'jsonp', 'text'],
    /* The default value used by the function shorten */
    shortenLen: 30,
    /* Categorizing keyboard map */
    keys: {
      upDown: [33, 34, 35, 36, 38, 40],
      leftRight: [36, 35, 37, 39],
      dels: [8, 46, 45],
      confirm: [13, 9],
      alt: [20, 16, 17, 18, 144],
      numbers: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105]
    },
    comparators: [">=", "<=", ">", "<", "="],
    operators: ["+", "-", "/", "*"]
  };

})(jQuery, bbn);