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
var html2text = function (st) {
    var $test = document.createElement("div");
    $test.innerHTML = st;
    st = $test.innerText;
    return st;
};
export { html2text };
