/**
 * @file   Sizing functions.
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
     * Create a unique string in md5 format.
     *
     * Converts and return all the arguments inserted in a unique string in md5 format.
     *
     * @method   uniqString
     * @global
     *
     * @example
     * ```javascript
     * //"6cb083da4d4987af9b4fa4ad8ca23bb1"
     * bbn.fn.uniqString('test',['test'],{id:1, test:2},4);
     * ```
     * @memberof bbn.fn
     * @param    {Mixed}
     * @returns  {String} The unique string in md5 format
     */
    uniqString(){
      var st = '';
      for ( var i = 0; i < arguments.length; i++ ){
        if (!arguments[i]) {
          st += '__bbn_empty__';
        }
        else if ( typeof(arguments[i]) === 'object' ){
          if (bbn.fn.isArray(arguments[i])) {
            st += JSON.stringify(arguments[i]);
          }
          else{
            // An object with the same properties, even in different order, should produce the same answer
            let tmp = {};
            let ks = Object.keys(arguments[i]).sort();
            bbn.fn.each(ks, k => {
              tmp[k] = arguments[i][k];
            });
            st += JSON.stringify(tmp);
          }
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
     * Converts and returns the argument passed in a string in md5 format
     *
     * @method   md5
     * @global
     *
     * @example
     * ```javascript
     * //"486eb65274adb86441072afa1e2289f3"
     * bbn.fn.md5("this is a test string");
     * ```
     *
     * @memberof bbn.fn
     * @param    {Mixed} st
     * @returns  {String} in md5 format
     */
    md5(st){
      if ( bbn.fn.isFunction(window.md5) ){
        return md5(st);
      }
      throw new Error("The function md5 is not defined");
    },

    /**
     * Return a string escaped.
     *
     * To escape the string by reducing the ambiguity between quotation marks and other characters used.
     *
     * @method   escapeRegExp
     * @global
     *
     * @example
     * ```javascript
     * //"this\/is\/a\/test\/string"
     * bbn.fn.escapeRegExp("this/is/a/test/string");
     * ```
     * @memberof bbn.fn
     * @param    {String} str
     * @returns  {String} string with escape
     */
    escapeRegExp(str){
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },

    /**
     * @method   roundDecimal
     * @todo     Add method description for roundDecimal
     * @global   
     * @memberof bbn.fn
     * @param    {Number} value    
     * @param    {Number} decimals 
     * @returns  {}         
     */
    roundDecimal(value, decimals){
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    },

    /**
     * Convert an RGB string to hexadecimal.
     *
     * Passing a string with the format that defines the rgb value as an argument,
     * it will return the corresponding string in hexadecimal format.
     *
     * @method   rgb2hex
     * @global
     *
     * @example
     * ```javascript
     * //"#ff0000"
     * bbn.fn.rgb2hex("rgb(255, 0, 0)");
     * ```
     * @memberof bbn.fn
     * @param    {String} rgb
     * @returns  {String}
     */
    rgb2hex(rgb){
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    },

    /**
     * Convert an hexadecimmal string to RGB.
     *
     * Converts a string that expresses a color in hexadecimal format into an object with
     * the properties that define the color and the corresponding value.
     *
     * @method   hex2rgb
     * @global
     *
     * @example
     * ```javascript
     * //{r:255, g:0, b:0}
     * bbn.fn.hex2rgb("#FF0000");
     * ```
     *
     * @memberof bbn.fn
     * @returns  {*}
     */
    hex2rgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },

    /**
     * Return the string passed as an argument in camelize mode.
     *
     * A string can be separated for example by a underscore, a dash or space;
     * so the camelize function will automatically convert them to a single string.
     *
     * @method   camelize
     * @global
     *
     * @example
     * ```javascript
     * //"thisIsATest"
     * bbn.fn.camelize("this_is-a test");
     * ```
     * @memberof bbn.fn
     * @param    {String}
     * @returns  {String}
     */
    camelize(str){
      return str.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset){
        if ( p2 ){
          return p2.toUpperCase();
        }
        return p1.toLowerCase();
      });
    },

    /**
     * Removes all unacceptable characters in a DOM node.
     *
     * @method   sanitize
     * @global
     *
     * @example
     * ```javascript
     * //"this_is_a_test"
     * bbn.fn.sanitize("this&is_$a^test");
     * ```
     *
     * @memberof bbn.fn
     * @returns  {String}
     */
    sanitize(str){
      return str.replace(/[^a-z0-9]/gi, '_').replace(/[_]+/g, '_');
    },

    /**
     * Returns the string passed as an argument in camelize mode for css.
     * 
     * @method   camelToCss
     * @global
     *
     * @example
     * ```javascript
     * //"this-is-a-test"
     * bbn.fn.camelToCss("thisIsATest");
     * ```
     *
     * @memberof bbn.fn
     * @param   {String} str
     * @returns {String}
     */
    camelToCss(str){
      return str.replace(/([A-Z])/g, function(st){
        return '-' + st.toLowerCase();
      }).replace('/^./', function(st){
        return st.toLowerCase()
      });
    },

    /**
     * Converts the first character of the string to uppercase.
     *
     * @method   correctCase
     * @global
     *
     * @example
     * ```javascript
     * //"This is a test"
     * bbn.fn.correctCase("this is a test");
     * ```
     *
     * @memberof bbn.fn
     * @param    {STring} str
     * @returns  {String}
     */
    correctCase(str){
      return str.replace(/[A-z]{1}/, c => c.toUpperCase());
    },

    /**
     * Returns a random integer.
     *
     * Generates and returns a random number in a range of numbers defined
     * by passed arguments a minimum and a maximum.
     *
     * @method   randomInt
     * @global
     *
     * @example
     * ```javascript
     * //56
     * bbn.fn.randomInt(1,100);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Number} min
     * @param    {Number} max
     * @returns  {Number}
     */
    randomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /**
     * Return a random String with random lenght,
     *
     * Generates a random string from the length of the random number,
     * taken from a range of numbers providing either only the minimum or also the maximum as arguments.
     *
     * @method   randomString
     * @global
     *
     * @example
     * ```javascript
     * //"U7xXO0Xb"
     * bbn.fn.randomString(3,10);
     * ```
     *
     * @example
     * ```javascript
     * //"H8F"
     * bbn.fn.randomString(3);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Number} length
     * @param    {String} chars
     * @returns  {String}
     */
    randomString(min, max, types){
      let length,
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
      if (bbn.fn.isString(max)) {
        types = 'n';
        chars = {
          n: max
        };
        if (!length){
          length = min;
        }
      }
      else if ( (typeof(max) === 'number') && (min < max) ){
        length = bbn.fn.randomInt(min, max);
      }
      else if ( min ){
        length = min;
      }
      let result = '';
      for ( let i = 0; i < length; i++ ){
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
     * Intended to check if the argument provided is an e-mail address written correctly
     *
     * @method   isEmail
     * @global
     *
     * @example
     * ```javascript
     * //false
     * bbn.fn.isEmail('test@testorg');
     * ```
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmail('test@test.org');
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {Boolean}
     */
    isEmail(st){
      let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(st);
    },

    /**
     * Intended to check if the argument provided is a color.
     *
     * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
     *
     * @method   isColor
     * @global
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isColor("#FF0000")
     * ```
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isColor("rgb 255, 0, 0");
     * ```
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isColor("red");
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {Boolean}
     */
    isColor(st){
      var reg = new RegExp('^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|rgba *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$', 'i');
      return reg.test(st);
    },

    /**
     * @method   isDimension
     * @todo     Add method description for isDimension
     * @global
     * @memberof bbn.fn
     * @param    {String} st
     * @returns
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
     * Checks if the argument is empty or not.
     * @method   isEmpty
     * @global
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmpty({});
     * ```
     * @example
     * ```javascript
     * //false
     * bbn.fn.isEmpty({test : 1});
     * ```
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmpty([]);
     * ```
     * @example
     * ```javascript
     * //false
     * bbn.fn.isEmpty(['test']);
     * ```
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmpty('');
     * ```
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmpty('test');
     * ```
     * @memberof bbn.fn
     * @param    {Object|Array|String}
     * @returns  {Boolean}
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
     * Returns an abbreviation to the given string.
     *
     * Provides an abbreviation to the string passed as the first argument,
     * deciding through the second argument the number of characters to keep and the remainder replaced
     * by what is passed as the third argument and if not given a defalut it is: '...'
     *
     * @method   shorten
     * @global
     *
     * @example
     * ```javascript
     * //"test***"
     * bbn.fn.shorten('testing', 4, '***');
     * ```
     *  @example
     * ```javascript
     * //"test..."
     * bbn.fn.shorten('testing', 4);
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @param    {Number} len
     * @returns  {String}
     */
    shorten(st, len, adj){
      if ( typeof(st).toLowerCase() === 'string' ){
        if ( !len ){
          len = bbn.var.shortenLen;
        }
        if ((adj === undefined) || !bbn.fn.isString(adj)) {
          adj = '...';
        }
        if ( st.length > len ){
          st = st.substr(0, len) + adj;
        }
      }
      return st;
    },

    /**
     * Looks for and replaces parts of string with what we want.
     *
     * With the first argument you define what to replace,
     * the second argument with what you have to replace instead and the third argument is the string to be replaced.
     *
     * @method   replaceAll
     * @global
     *
     * @example
     * ```javascript
     * //"Today is a beautiful day"
     * bbn.fn.replaceAll('-', ' ', 'Today-is-a-beautiful-day');
     * ```
     * @memberof bbn.fn
     * @param    {String} find
     * @param    {String} replace
     * @param    {String} str
     * @returns  {String}
     */
    replaceAll(find, replace, str){
      if ( str !== undefined ){
        return str.toString().replace(new RegExp(bbn.fn.escapeRegExp(find), 'g'), replace);
      }
      return false;
    },

    /**
     * Replace quotes in ASCII code
     *
     * @method   remove_quotes
     * @global
     *
     * @example
     * ```javascript
     * //"hello &#39;word&#39;!"
     * bbn.fn.remove_quotes("hello 'word'!");
     * ```
     * @example
     * ```javascript
     * //"hello &quot;word&quot;!"
     * bbn.fn.remove_quotes('hello "word"!');
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {String}
     */
    remove_quotes(st){
      return bbn.fn.replaceAll('"', '&quot;', bbn.fn.replaceAll("'", "&#39;", st));
    },

    /**
     * Removes the '\n' characters that define a new line.
     * @method   remove_nl
     * @global
     *
     * @example
     * ```javascript
     * //"hello word!"
     * bbn.fn.remove_nl("hello\nworld!")
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {String}
     */
    remove_nl(st){
      return bbn.fn.replaceAll("\n", " ", st);
    },

    /**
     * Returns the string given as an argument,
     * eliminating the new line characters '\ n' if contained and replaces
     * the quotes in corresponding ASCII codes.
     *
     * @method   remove_all
     * @global
     *
     * @example
     * ```javascript
     * //"hello &quot;word&quot;!"
     * bbn.fn.remove_all('hello\n"word"!');
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {String}
     */
    remove_all(st){
      return bbn.fn.remove_nl(bbn.fn.remove_quotes(st));
    },

    /**
     * Replace if new line characters '\ n' with html tag '<br>'.
     * @method   nl2br
     * @global
     *
     * @example
     * ```javascript
     * //"hello <br> word!"
     * bbn.fn.nl2br('hello \n word!');
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {String}
     */
    nl2br(st){
      return bbn.fn.replaceAll("\n", "<br>", st);
    },

    /**
     * Replaces the html <br> tag with new line characters '\ n' if present in the string.
     *
     * @method   br2nl
     * @global
     *
     * @example
     * ```javascript
     * //"hello
     * //word!"
     * bbn.fn.br2nl('hello <br> word!')
     * ```
     *
     * @memberof bbn.fn
     * @param    string st
     * @returns  {String}
     */
    br2nl(st){
      return bbn.fn.replaceAll("<br />", "\n", bbn.fn.replaceAll("<br/>", "\n", bbn.fn.replaceAll("<br>", "\n", st)));
    },

    /**
     * Convert text in html format to plain text.
     *
     * @method   html2text
     * @global
     *
     * @example
     * ```javascript
     * //"Hello world!"
     * bbn.fn.html2text("<div><p>Hello <b>world!</b></p></div>");
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns {String}
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
     * Return the string passed as an argument without accents.
     *
     * @method   removeAccents
     * @global
     *
     * @example
     * ```javascript
     * //"eeou"
     * bbn.fn.removeAccents("èéòù");
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {String}
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
     * Converts the argument passed to it into a single string.
     *
     * It's possible to give as arguments elements of different nature specifically: array, number and function. 
     * It will return the argument on string format.
     *
     * @method   stringify
     * @global
     *
     * @example
     * ```javascript
     * //"helo,world"
     * bbn.fn.stringify(["helo", "world"]);
     * ```
     *
     * @example
     * ```javascript
     * //"3"
     * bbn.fn.removeAccents("3");
     * ```
     *
     * @example
     * ```javascript
     * //"function(){alert("hello world!")}"
     * bbn.fn.stringify(function(){alert("hello world!")});
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array|Number|Function} v
     * @returns  {String}
     */
    stringify(v){
      if ( typeof v === 'String' ){
        return v;
      }
      return v.toString ? v.toString() : '';
    },

    /**
     * Returns the value of the proportion giving the percentage and the total from where to be calculated.
     * @method   percent
     * @global
     *
     * @example
     * ```javascript
     * //150
     * bbn.fn.percent('15',1000);
     * ```
     *
     * @example
     * ```javascript
     * //75
     * bbn.fn.percent(15,500);
     * ```
     * @memberof bbn.fn
     * @param    {Number|String} percent
     * @param    {Number|String} cent
     * @returns  {Number}
     */
    percent(percent, cent){
      return (cent/100) * percent;
    },

    /**
     * Return the path of the folder containing the last hierarchical element of the path.
     *
     * @method   dirName
     * @global
     *
     * @example
     * ```javascript
     * //"folder/other_folder"
     * bbn.fn.dirName('folder/other_folder/file');
     * ```
     * @memberof bbn.fn
     * @param    {String} path
     * @returns  {String} path of the folder
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
     * Return the name of the element indicated by path given to it as an argument.
     *
     * @method   baseName
     * @global
     *
     * @example
     * ```javascript
     * //"file"
     * bbn.fn.baseName('folder/other_folder/file');
     * ```
     *
     * @memberof bbn.fn
     * @param    {String} path
     * @returns  {String} name of the element in path
     */
    baseName(path){
      var bits = path.split("/");
      return bits.pop();
    },

    /**
     * @method   printf
     * @todo     Add method description for printf
     * @global   
     * @memberof bbn.fn
     * @param    format  
     * @returns  {*}    
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
     * @method   removeTrailingChars
     * @todo     Add method description for removeTrailingChars
     * @global   
     * @memberof bbn.fn
     * @param    {String} st   
     * @param    {String} char 
     * @returns  {*}      
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
     * Return the value of size for element html
     *
     * If the argument passed is a number it will return the value expressed in 'px' otherwise if string returns this ose nothing is passed it will return 'auto'.
     *
     * @method   formatSize
     * @global
     *
     *
     * @memberof bbn.fn
     * @param    {String|Number} st
     * @returns  {String}
     */
    formatSize(st){
      if ( !st ){
        return 'auto';
      }
      if ( bbn.fn.isNumber(st) ){
        return st + 'px';
      }
      return st.toString();
    },

    /**
     * Returns a string which is the repetition of the first argument for the number passed in the second argument.
     *
     * @method   repeat
     * @global
     *
     * @example
     * ```javascript
     * //"HelloHelloHello"
     * bbn.fn.repeat('Hello', 3);
     * ```
     * @memberof bbn.fn
     * @returns  {String}
     */
    repeat(st, num) {
      let res = '';
      bbn.fn.iterate(num, () => {
        res += st;
      });
      return res;
    },

  });
})(bbn);
