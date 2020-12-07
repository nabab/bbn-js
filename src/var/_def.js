/**
 * Created by BBN on 10/02/2017.
 */
;(function(bbn){
  "use strict";

  bbn.var = {
    loggers: {
      _num: 0
    },
    /* Usable datatypes through Ajax function */
    datatypes: ['xml', 'html', 'script', 'json', 'jsonp', 'text', 'blob'],
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
      black: '#000000',
      anthracite: '#454545',
      orange: '#ff9900',
      red: '#db3340',
      green: '#00a03e',
      blue: '#6e9ecf',
      yellow: '#fdf200',
      beige: '#fdfdfd',
      white: '#ffffff',
      purple: '#a333c8',
      grey: '#d3d3d3',
      brown: '#8c6954',
      olive: '#92b06a',
      pink: '#eb65a0',
      turquoise: '#1fda9a',
      cyan: '#00c8f8',
      navy: '#354458',
      darkgrey: '#5a6a62',
      lightgrey: '#dcdcdc',
      teal: '#009688',
      indigo: '#3f51b5',
      palegreen: '#ccffcc',
      pastelgreen: '#E2EFDA',
      pastelorange: '#fff2cc',
      pastelblue: '#ddebf6',
      webblue: '#2196f3'
    },
    mockText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    regexp: {
      url: new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$', 'i'),
      ip: new RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"),
      hostname: new RegExp("^[a-z\\d]([a-z\\d\\-]{0,61}[a-z\\d])?(\\.[a-z\\d]([a-z\\d\\-]{0,61}[a-z\\d])?)*$", 'i'),
    }
  };

})(bbn);