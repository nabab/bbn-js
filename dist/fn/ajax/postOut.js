import { createObject } from '../object/createObject.js';
import { addInputs } from '../form/addInputs.js';
import { setProperty } from '../object/setProperty.js';
/**
 * Posts a request in a new window.
 *
 * @method   postOut
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.postOut('https://external-service.com/download/account-2019-06.pdf', {clientId: 547912, token: xxx});
 * ```
 *
 * @param    {String}   url     The url to which the request should be sent
 * @param    {Object}   data    The data to be sent
 * @param    {Function} success A function to execute in case of success
 * @param    {String}   target  The target attribute of the form
 *
 * @returns  {void}
 */
var postOut = function (url, data, success, target) {
    if (success === void 0) { success = null; }
    if (target === void 0) { target = ""; }
    var form = document.body.querySelector("form#bbn-form_out");
    if (!form) {
        form = document.createElement("form");
        form.classList.add("bbn-no");
        form.setAttribute("id", "bbn-form_out");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data-encoded");
        setProperty(form, "style.display", "none");
        document.body.appendChild(form);
    }
    if (form instanceof HTMLFormElement) {
        form.innerHTML = "";
        form.setAttribute("action", url);
        form.setAttribute("target", target || "_blank");
        if (!data) {
            data = {};
        }
        data = createObject(data);
        if (!data.bbn) {
            data.bbn = "public";
        }
        addInputs(form, data);
        form.submit();
        if (success) {
            success();
        }
    }
};
export { postOut };
