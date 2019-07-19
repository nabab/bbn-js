/**
 * Created by BBN on 10/02/2017.
 */
;(function(bbn){
  "use strict";

  Object.assign(bbn.fn, {

    /**     STRINGS     */

    /**
     * 
     * Generates a string MD5 based on the given arguments (optional).
     *
     * ```javascript
     * var myObject =  {age: 39, name: "thomas", surname: "smith"};
     * bbn.fn.uniqString(myObject);
     * // (string) "5b8735f15accb2f50859b1515674a83f"
     *
     * bbn.fn.uniqString('myString');
     * //(string) "91c65b6feeb5a6ad66b30e2ebd9405e1"
     * ```
     * @method uniqString
     * @param {Mixed}
     * @return {String}
     */
    uniqString(){
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
     * Generates a string MD5 based on the given arguments (optional).
     * 
     * ```javascript
     * bbn.fn.md5('myString');
     * // (string) "91c65b6feeb5a6ad66b30e2ebd9405e1"
     * ```
     * @method md5
     * @param {Mixed} st
     * @return {String}
     */
    md5(st){
      if ( bbn.fn.isFunction(window.md5) ){
        return md5(st);
      }
      throw new Error("The function md5 is not defined");
    },

    /**
     * Escapes special characters contained in a regular expression.
     *
     * ```javascript
     * bbn.fn.escapeRegExp('/^[a-z0-9_-]{3,16}$/');
     * // (string) "\/\^\[a\-z0\-9_\-\]\{3,16\}\$\/"
     * ```
     * @method escapeRegExp
     * @param {String} str
     * @return {XML|void|string}
     */
    escapeRegExp(str){
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },

    /**
     * Rounds decimal values.
     *
     * ```javascript
     * bbn.fn.roundDecimal(2.4496564,1);
     * //(float) 2.4
     * bbn.fn.roundDecimal(2.4496564,3);
     * //2.45
     * ```
     *
     * @method roundDecimal
     * @param {Number} value The value to round
     * @param {Number} decimals The number of decimals
     * @return {Number}
     */
    roundDecimal(value, decimals){
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    },

    /**
     * Converts rgb color into hex color.
     *
     * ```javascript
     * bbn.fn.rgb2hex('rgb(5,4,6)');
     * //(string) "#050406"
     * ```
     * @method rgb2hex
     * @param {String} rgb
     * @return {String}
     */
    rgb2hex(rgb){
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    },

    /**
     * @method camelize
     * @param {String}
     * @return {XML|void|string}
     */
    camelize(str){
      return str.replace('/^([A-Z])|[\\s-_](\\w)/g', function(match, p1, p2, offset){
        if ( p2 ){
          return p2.toUpperCase();
        }
        return p1.toLowerCase();
      });
    },

    /**
     * @method camelToCss
     * @todo
     * @param str
     * @return {XML|string}
     */
    camelToCss(str){
      return str.replace('/([A-Z])/g', function(st){
        return '-' + st.toLowerCase();
      }).replace('/^./', function(st){
        return st.toLowerCase()
      });
    },

    /**
     * Returns a random integer between min and max.
     *
     * ```javascript
     * bbn.fn.randomInt(5,10);
     * //(int) 9
     * ```
     * @method randomInt
     * @param {Number} min
     * @param {Number} max
     * @return {Number}
     */
    // @return {integer} a random int between min and max
    randomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /**
     * Returns a random string using the given characters.
     * 
     * ```javascript
     * bbn.fn.randomString(19,'aeiouy');
     * //(string) "euyueiiuiyioiyyouuu"
     * ```
     * @method randomString
     * @param {Number} length of the string to return
     * @param {String} chars Characters used in the string
     * @return {String}
     */
    randomString(min, max, types){
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
    /**
     * Return true if the given string is an email address.
     * @method isEmail
     * @param {String} st 
     * @return {Boolean}
     */
    isEmail(st){
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(st);
    },

    /**
     *
     * Return true if the given string is a color.
     * 
     * ```javascript
     * bbn.fn.isColor('black');
     * //(bool) true
     * bbn.fn.isColor('#000080');
     * //(bool) true
     * ```
     * @method isColor
     * @param {String} st
     * @return {Boolean}
     */
    isColor(st){
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
     * @method isDimension
     * @param {String} st The value to check
     * @return {Boolean}
     */
    isDimension(st){
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
     * @method isEmpty
     * @param {Object}
     * @return {Boolean}
     */
    isEmpty(obj){
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
     * @method shorten
     * @param {String} st The string to shorten
     * @param {Number} len The number of characters to take from the string
     * @return {String}
     */
    shorten(st, len){
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
     * Replace all substrings occurrences from a string.
     *
     * ```javascript
     * bbn.fn.replaceAll('mr','mister','mr john');
     * "mister john"
     * ```
     * @method replaceAll
     * @param {String} find The substring to find
     * @param {String} replace The substring to replace
     * @param {String} str The string
     * @return {String}
     */
    replaceAll(find, replace, str){
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
     * @method replace
     * @param {String} st
     * @return {String}
     */
    remove_quotes(st){
      return bbn.fn.replaceAll('"', '&quot;', bbn.fn.replaceAll("'", "&#39;", st));
    },

    /**
     * Replace all the \n in the given string with empty spaces.
     * 
     * ```javascript
     * bbn.fn.remove_nl('Where\nare\nyou?');
     * // (string) "Where are you?"
     * ```
     *
     * @method remove_nl
     * @param {String} st
     * @return {String}
     */
    remove_nl(st){
      return bbn.fn.replaceAll("\n", " ", st);
    },

    /**
     * Removes \n and quotes from a given string.
     * 
     * ```javascript
     * bbn.fn.remove_all("john's\ncat");
     * // (string) "john&#39;s cat"
     * ```
     * @method remove_all
     * @param {String} st
     * @return {String}
     */
    remove_all(st){
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
     * @method nl2br
     * @param {String} st
     * @return {String}
     */
    nl2br(st){
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
     * @method br2nl
     * @param string st
     * @return string
     */
    br2nl(st){
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
     * @method html2text
     * @param {String} st
     * @return {String}
     */
    html2text(st){
      /*var $test = $('<div/>').html(bbn.fn.br2nl(st)).appendTo(document.body);
      st = $test.text();
      $test.remove();
      */
      let $test = document.createElement('div');
      document.body.appendChild($test);
      $test.innerHTML = bbn.fn.br2nl(st);
      st = $test.textContent;
      document.body.removeChild($test);
      return st;
    },

    /**
     * Removes accents from a given string.
     *
     * ```javascript
     * bbn.fn.removeAccents('résumé');
     * // (string) 'resume'
     * ```
     * @method removeAccents
     * @param {String} st
     * @return {String}
     */
    removeAccents(st){
      var m = bbn.var.defaultDiacriticsRemovalMap;
      st = bbn.fn.stringify(st);
      for(var i=0; i < m.length; i++ ){
        st = st.replace(m[i].letters, m[i].base);
      }
      return st;
    },
    /**
     * Converts the given value into a string.
     * @method stringify
     * @param {Array|Number|Function} v
     * @return {String} 
     */
    stringify(v){
      if ( typeof v === 'String' ){
        return v;
      }
      return v.toString ? v.toString() : '';
    },

    /**
     * Calculs a percentage on a given total.
     * @method percent
     * @param {Number|String} percent The percentage to calcul
     * @param {Number|String} cent The total on which to apply the given percentage
     * @return {number}
     */
    percent(percent, cent){
      return (cent/100) * percent;
    },

    /** 
     * Returns the parent directory of the given path.
     * @method dirName
     * @param {String} path 
     * @return {String}
     */
    dirName(path){
      var bits = path.split("/");
      if ( bits.length < 2 ){
        return false;
      }
      bits.pop();
      return bits.join("/");
    },

    /** 
     * Returns the basename of a file or a directory.
     * @method baseName
     * @param {String} path 
     * @return {String}
     */
    baseName(path){
      var bits = path.split("/");
      return bits.pop();
    },
    /**
     * @method printf
     * @param format 
     */
    printf(format){
      var args = Array.prototype.slice.call(arguments, 1);
      return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
          ;
      });
    },
    /**
     * @method removeTrailingChars
     * 
     * @param {String} st 
     * @param {String} char 
     */
    removeTrailingChars(st, char){
      if ( !char ){
        char = ' ';
      }
      if ( char.length ){
        while ( st.substr(-char.length) === char ){
          st = st.substr(0, st.length - char.length);
        }
        while ( st.substr(0, char.length) === char ){
          st = st.substr(char.length);
        }
      }
      return st;
    },
    /**
     * Returns a size in px of the given argument.
     * @method formatSize
     * @param {String|Number} st 
     * @return {String}
     */
    formatSize(st){
      if ( !st ){
        return 'auto';
      }
      if ( bbn.fn.isNumber(st) ){
        return st + 'px';
      }
      return st.toString();
    }

  })

})(bbn);