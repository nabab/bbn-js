import { randomInt } from '../misc/randomInt.js';
/**
 * Returns a random String with random lenght,
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
var randomString = function (min, max, types) {
    var length;
    var type;
    var chars = {
        n: "0123456789",
        l: "abcdefghijklmnopqrstuvwxyz",
        u: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };
    if (!types) {
        types = "nlu";
    }
    if (!min) {
        length = randomInt(8, 14);
    }
    if (typeof max === "string") {
        types = "n";
        delete chars.l;
        delete chars.u;
        chars.n = max;
        if (!length) {
            length = min;
        }
    }
    else if (typeof max === "number" && min < max) {
        length = randomInt(min, max);
    }
    else if (min) {
        length = min;
    }
    var result = "";
    for (var i = 0; i < length; i++) {
        // Not a number for the first char
        if (i === 0) {
            if (types !== "n") {
                type = types.indexOf("u") === -1 ? "l" : "u";
            }
        }
        else {
            type = types[Math.floor(Math.random() * types.length)];
        }
        result += chars[type][Math.floor(Math.random() * chars[type].length)];
    }
    return result;
};
export { randomString };
