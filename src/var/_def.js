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
      numbers: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
      numsigns: [109, 110, 189, 190]
    },
    comparators: [">=", "<=", ">", "<", "="],
    operators: ["+", "-", "/", "*"],
    colors: {
      black: '#454545',
      orange: '#FF9900',
      red: '#DB3340',
      green: '#00A03E',
      blue: '#6E9ECF',
      yellow: '#FDF200',
      white: '#FDFDFD',
      purple: '#A333C8',
      grey: '#D3D3D3',
      brown: '#8C6954',
      olive: '#92B06A',
      pink: '#EB65A0',
      turquoise: '#1FDA9A',
      cyan: '#00C8F8',
      navy: '#354458',
      darkgrey: '#5A6A62',
      lightgrey: '#DCDCDC',
      teal: '#009688',
      indigo: '#3F51B5',
      palegreen: '#CCFFCC',
      pastelgreen: '#E2EFDA',
      pastelorange: '#FFF2CC',
      pastelblue: '#DDEBF6',
      webblue: '#2196F3'
    }
  };

})(jQuery, bbn);