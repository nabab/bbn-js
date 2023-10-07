import { formdata } from './formdata.js';
import { post } from '../ajax/post.js';
/**
 * Submit a form's data through an Ajax request.
 *
 * It will also prevent the event if given, and execute the given callback,
 * or look for one in the data-script attribute.
 *
 * @method   submit
 * @global
 * @memberof bbn.fn
 * @fires    {*}
 * @fires    {*}
 *
 * @param    {HTMLElement} form The form to submit
 * @param    {Event}       e    The optional submit event - which will be prevented
 * @param    {Function}    fn   An optional callback function
 *
 * @returns  {*}
 */
var submit = function (form, e, fn) {
    var url = form.getAttribute('action') || bbn.env.path;
    var data;
    if (url === '') {
        url = '.';
    }
    //if ( (typeof(url) === 'string') && (url.indexOf("http") !== 0 || url.indexOf(window.document.location.hostname) !== -1) && !form.is("[target]") ){
    if (typeof url === 'string' &&
        (url.indexOf('http') !== 0 || url.indexOf(window.document.location.hostname) !== -1) &&
        !form.getAttribute('target')) {
        if (e) {
            e.preventDefault();
        }
        data = formdata(form);
        if (data) {
            //$form.attr("action", null);
            form.setAttribute('action', null);
            //$form.data("bbnSubmit", 1);
            if (!fn) {
                fn = form.getAttribute('data-script') ? eval(form.getAttribute('data-script')) : null;
            }
            if (fn) {
                post(url, data, fn);
            }
            else {
                post(url, data);
            }
        }
    }
};
export { submit };
