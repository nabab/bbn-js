import { isNumber } from '../type/isNumber.js';
/**
 * Returns the given value to money format basing on the given configuration.
 *
 * @method   money
 * @global
 *
 * @example
 * ``` javascript
 * // "5 856.0 $"
 * bbn.fn.money(5856, false, '$', false, '.' ,false, 1);
 * ```
 *
 * @memberof bbn.fn
 * @param {String|Number} val The value.
 * @param {Boolean} kilo If the value has to be rendered in kilo.
 * @param {String} currency The currency.
 * @param {String} novalue The string to return if no valid value is given.
 * @param {String} decimal The character to use separate decimals.
 * @param {String} thousands The character to use to separate thounsands.
 * @param {Number} precision The number of decimals places.
 */
var money = function (val, kilo, currency, novalue, decimal, thousands, precision) {
    /*
    money(val, kilo){
      let decimal = ',',
          currency = '€',
          thousands = ' ';
      if ( (isNaN(val) || !val) ){
        return '-';
      }
      if ( isNaN(val) || !val ){
        return 0;
      }
      if ( kilo && val ){
        val = val / 1000;
        if ( currency ){
          currency = 'K' + currency;
        }
      }
      return parseFloat(val).toFixed(0).replace(/./g, function(c, i, a) {
        if ( c === '.' ){
          return decimal;
        }
        return i && ((a.length - i) % 3 === 0) ? thousands + c : c;
      }) + ( currency ? ' ' + currency : '');
    },

       */
    if (!decimal) {
        decimal =
            decimal === undefined && bbn.env.money && bbn.env.money.decimal !== undefined ? bbn.env.money.decimal : '.';
    }
    if (!currency) {
        currency =
            currency === undefined && bbn.env.money && bbn.env.money.currency !== undefined
                ? bbn.env.money.currency
                : '';
    }
    if (!thousands) {
        thousands =
            thousands === undefined && bbn.env.money && bbn.env.money.thousands !== undefined
                ? bbn.env.money.thousands
                : ' ';
    }
    if (!precision) {
        precision =
            precision === undefined && bbn.env.money && bbn.env.money.precision !== undefined
                ? bbn.env.money.precision
                : 0;
    }
    if (!kilo) {
        kilo = kilo === undefined && bbn.env.money && bbn.env.money.kilo !== undefined ? bbn.env.money.kilo : false;
    }
    if (!novalue) {
        novalue =
            novalue === undefined && bbn.env.money && bbn.env.money.novalue !== undefined
                ? bbn.env.money.novalue
                : false;
    }
    if (!isNumber(precision)) {
        precision = kilo ? 3 : 0;
    }
    if ((val === 0) && (typeof precision === 'number') && (precision > 0)) {
        var res = val.toFixed(precision).replace('.', decimal);
        if (currency) {
            res += ' ' + (kilo ? 'K' + currency : currency);
        }
        return res;
    }
    if ((isNaN(val) || !val) && novalue) {
        return novalue;
    }
    if (isNaN(val) || !val) {
        return 0 + (currency ? ' ' + currency : '');
    }
    if (kilo && val) {
        val = val / 1000;
        if (currency) {
            currency = 'K' + currency;
        }
    }
    var v = val.toFixed(precision);
    var decimalPosition = 0;
    var decimalIdx = 10000;
    if (v) {
        decimalIdx = v.indexOf('.');
        if (decimalIdx <= 0) {
            decimalIdx = 10000;
        }
        else {
            decimalPosition = v.length - decimalIdx;
        }
    }
    return (v.replace(/./g, function (c, i, a) {
        if (c === '.') {
            return decimal;
        }
        return i && (a.length - i - decimalPosition) % 3 === 0 && i < decimalIdx ? thousands + c : c;
    }) + (currency ? ' ' + currency : ''));
};
export { money };
