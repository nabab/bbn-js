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
export default function submit(form: HTMLFormElement, e?: Event, fn?: Function): void;
