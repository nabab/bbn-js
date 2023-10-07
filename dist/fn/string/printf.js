/**
 * @method   printf
 * @todo     Add method description for printf
 * @global
 * @memberof bbn.fn
 * @param    String format
 * @returns  {*}
 */
var printf = function (format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
    });
};
export { printf };
