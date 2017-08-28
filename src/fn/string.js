/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     STRINGS     */

    /**
     * Generates a string MD5 based on the given arguments
     *
     * ```javascript
     * var myObject =  {age: 39, name: "thomas", surname: "smith"};
     * bbn.fn.uniqString(myObject);
     * // (string) "5b8735f15accb2f50859b1515674a83f"
     *
     * bbn.fn.uniqString('myString');
     * //(string) "91c65b6feeb5a6ad66b30e2ebd9405e1"
     * ```
     * @param mixed
     * @returns string
     */
    uniqString: function(){
      var st = '';
      for ( var i = 0; i < arguments.length; i++ ){
        if ( typeof(arguments[i]) === 'object' ){
          st += JSON.stringify(arguments[i]);
        }
        else if ( typeof(arguments[i]) !== 'string' ){
          st += arguments[i].toString();
        }
        else{
          st += arguments[i];
        }
      }
      return md5(st);
    },

    /**
     * Generates a string MD5 based on the given arguments
     *
     * ```javascript
     * bbn.fn.md5('myString');
     * // (string) "91c65b6feeb5a6ad66b30e2ebd9405e1"
     * ```
     *
     * @param mixed st
     * @returns string
     */
    md5: function(st){
      if ( $.isFunction(window.md5) ){
        return md5(st);
      }
      throw new Error("The function md5 is not defined");
    },

    /**
     * Escapes special characters contained in a regular expression
     *
     * ```javascript
     * bbn.fn.escapeRegExp('/^[a-z0-9_-]{3,16}$/');
     * // (string) "\/\^\[a\-z0\-9_\-\]\{3,16\}\$\/"
     * ```
     * @param string str
     * @returns {XML|void|string}
     */
    escapeRegExp: function(str){
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },

    /**
     * Rounds decimal values
     *
     * ```javascript
     * bbn.fn.roundDecimal(2.4496564,1);
     * //(float) 2.4
     * bbn.fn.roundDecimal(2.4496564,3);
     * //2.45
     * ```
     *
     * @param float value The value to round
     * @param int decimals The number of decimals
     * @returns {number}
     */
    roundDecimal: function(value, decimals){
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    },

    /**
     * Converts rgb color into hex color.
     *
     * ```javascript
     * bbn.fn.rgb2hex('rgb(5,4,6)');
     * //(string) "#050406"
     * ```
     *
     * @param rgb
     * @returns {string}
     */
    rgb2hex: function(rgb){
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    },

    /**
     * @todo
     * @param str
     * @returns {XML|void|string}
     */
    camelize: function(str){
      return str.replace('/^([A-Z])|[\\s-_](\\w)/g', function(match, p1, p2, offset){
        if ( p2 ){
          return p2.toUpperCase();
        }
        return p1.toLowerCase();
      });
    },

    /**
     * @todo
     * @param str
     * @returns {XML|string}
     */
    camelToCss: function(str){
      return str.replace('/([A-Z])/g', function(st){
        return '-' + st.toLowerCase();
      }).replace('/^./', function(st){
        return st.toLowerCase()
      });
    },

    /**
     * Returns a random int between min and max
     *
     * ```javascript
     * bbn.fn.randomInt(5,10);
     * //(int) 9
     * ```
     *
     * @param number min
     * @param number max
     * @returns {number}
     */
    // @return {integer} a random int between min and max
    randomInt: function(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /**
     * Returns a random string using the given characters.
     *
     * ```javascript
     * bbn.fn.randomString(19,'aeiouy');
     * //(string) "euyueiiuiyioiyyouuu"
     * ```
     *
     * @param int length of the string to return
     * @param string chars Characters used in the string
     * @returns {string}
     */
    randomString: function(min, max, types){
      var length,
          type,
          chars = {
            n: '0123456789',
            l: 'abcdefghijklmnopqrstuvwxyz',
            u: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
          };
      if ( !types ){
        types = 'nlu';
      }
      if ( !min ){
        length = bbn.fn.randomInt(8, 14);
      }
      if ( (typeof(max) === 'number') && (min < max) ){
        length = bbn.fn.randomInt(min, max);
      }
      else if ( min ){
        length = min;
      }
      var result = '';
      for ( var i = 0; i < length; i++ ){
        // Not a number for the first char
        if ( i === 0 ){
          if ( types !== 'n' ){
            type = types.indexOf('u') === -1 ? 'l' : 'u';
          }
        }
        else{
          type = types[Math.floor(Math.random() * types.length)];
        }
        result += chars[type][Math.floor(Math.random() * chars[type].length)];
      }
      return result;
    },

    isEmail: function(st){
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(st);
    },

    /** @todo example with rgba colors
     *
     * Return true if the given string is a color.
     *
     * ```javascript
     * bbn.fn.isColor('black');
     * //(bool) true
     * bbn.fn.isColor('#000080');
     * //(bool) true
     * ```
     *
     * @param st
     * @returns boolean
     */
    isColor: function(st){
      var reg = new RegExp('^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|rgba *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$', 'i');
      return reg.test(st);
    },

    /**
     * Checks if the given param is a dimension.
     *
     * ```javascript
     * bbn.fn.isDimension('12px');
     * // (bool) true
     * bbn.fn.isDimension('12vw');
     * // (bool) true
     * ```
     *
     * @param string st The value to check
     * @returns boolean
     */
    isDimension: function(st){
      if ( typeof(st) === 'number' ){
        return 1;
      }
      if ( (typeof(st) === 'string') &&
        (st.length > 0) && (
        (st.indexOf('calc') === 0 ) ||
        (!isNaN(st.substr(0,1))) ) ){
        var el = document.createElement('div'),
            style = el.style;
        style.width = st;
        return !!style.width.length;
      }
      return false;

    },

    /**
     * Checks if the given object is empty.
     *
     * ```javascript
     * var myObj = {};
     * bbn.fn.isEmpty(myObj);
     * //(bool) true
     * var myObject = {age: 39, name: "thomas", surname: "smith"};
     * bbn.fn.isEmpty(myObject);
     * //(bool) false
     * ```
     * @param obj
     * @returns {boolean}
     */
    isEmpty: function(obj){
      if ( !obj ){
        return true;
      }
      if ( Array.isArray(obj) ){
        return obj.length ? false : true;
      }
      if ( typeof(obj) === 'object' ){
        for(var prop in obj ){
          return false;
        }
        return true;
      }
      return false;
    },

    /**
     * Shortens the string at the given length.
     *
     * ```javascript
     * bbn.fn.shorten('javascript', 5);
     * // (string) "javas..."
     * ```
     *
     * @param string st The string to shorten
     * @param int len The number of characters to take from the string
     * @returns string
     */
    shorten: function(st, len){
      if ( typeof(st).toLowerCase() === 'string' ){
        if ( !len ){
          len = bbn.var.shortenLen;
        }
        if ( st.length > len ){
          st = st.substr(0, len) + '...';
        }
      }
      return st;
    },

    // see http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
    /**
     * Replace all substrings occurrences from a string
     *
     * ```javascript
     * bbn.fn.replaceAll('mr','mister','mr john');
     * "mister john"
     * ```
     *
     * @param string find The substring to find
     * @param replace The substring to replace
     * @param str The string
     * @returns string
     */
    replaceAll: function(find, replace, str){
      if ( str !== undefined ){
        return str.toString().replace(new RegExp(bbn.fn.escapeRegExp(find), 'g'), replace);
      }
      return false;
    },

    /**
     * Removes quotes from a string.
     *
     * ```javascript
     * bbn.fn.remove_quotes("john's cat");
     * //(string) "john&#39;s cat"
     * bbn.fn.remove_quotes('The shop is called "GardenFlowers"');
     * // "The shop is called &quot;GardenFlowers&quot;"
     * ```
     *
     * @param string st
     * @returns string
     */
    remove_quotes: function(st){
      return bbn.fn.replaceAll('"', '&quot;', bbn.fn.replaceAll("'", "&#39;", st));
    },

    /**
     * Replace all the \n in the given string with " ".
     *
     * ```javascript
     * bbn.fn.remove_nl('Where\nare\nyou?');
     * // (string) "Where are you?"
     * ```
     *
     * @param string st
     * @returns string
     */
    remove_nl: function(st){
      return bbn.fn.replaceAll("\n", " ", st);
    },

    /**
     * Removes \n and quotes from a given string.
     *
     * ```javascript
     * bbn.fn.remove_all("john's\ncat");
     * // (string) "john&#39;s cat"
     * ```
     * @param string st
     * @returns string
     */
    remove_all: function(st){
      return bbn.fn.remove_nl(bbn.fn.remove_quotes(st));
    },

    /**
     * In a string replaces \n with <br>.
     *
     * ```javascript
     * bbn.fn.br2nl('Where\nare\nyou?');
     * /* (string)  "Where
     *               are
     *               you?"
     * ```
     *
     * @param string st
     * @returns string
     */
    nl2br: function(st){
      return bbn.fn.replaceAll("\n", "<br>", st);
    },

    /**
     * Replaces <br>, <br />, <br/> with \n.
     *
     * ```javascript
     * bbn.fn.br2nl('Where <br/> are<br />you?<br />');
     * /* (string) Where
     *             are
     *             you?
     * ```
     *
     * @param string st
     * @returns string
     */
    br2nl: function(st){
      return bbn.fn.replaceAll("<br />", "\n", bbn.fn.replaceAll("<br/>", "\n", bbn.fn.replaceAll("<br>", "\n", st)));
    },

    /**
     * Returns only text from html code.
     *
     * ```javascript
     * bbn.fn.html2text("<div><h1>This is a very simple HTML document</h1><h1>It only has two <br> paragraphs</h1></div>");
     * /* (string) "This is a very simple HTML documentIt only has two
     *              paragraphs"
     * ```
     *
     * @param string st
     * @returns string
     */
    html2text: function(st){
      var $test = $('<div/>').html(bbn.fn.br2nl(st)).appendTo(document.body);
      st = $test.text();
      $test.remove();
      return st;
    },

    /**
     * Removes accents from a given string.
     *
     * ```javascript
     * bbn.fn.removeAccents('résumé');
     * // (string) 'resume'
     * ```
     *
     * @param string st
     * @returns string
     */
    removeAccents: function(st){
      var m = bbn.var.defaultDiacriticsRemovalMap;
      for(var i=0; i < m.length; i++ ){
        st = st.replace(m[i].letters, m[i].base);
      }
      return st;
    },

    /**
     * Returns a value based on a percentage and the 100% value
     * @param percent
     * @param cent
     * @returns {number}
     */
    percent: function(percent, cent){
      return (cent/100) * percent;
    },

    /** Returns the parent directory from a path */
    dirName: function(path){
      var bits = path.split("/");
      if ( bits.length < 2 ){
        return false;
      }
      bits.pop();
      return bits.join("/");
    },

    /** Returns the basename of a file or a dir out of a path */
    baseName: function(path){
      var bits = path.split("/");
      return bits.pop();
    },

    printf: function(format){
      var args = Array.prototype.slice.call(arguments, 1);
      return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
          ;
      });
    }

  })

})(jQuery, bbn);