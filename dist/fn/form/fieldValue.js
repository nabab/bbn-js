/**
 * Returns the value of a form's input, differenciating between checkboxes, radio and other inputs.
 *
 * @method   fieldValue
 * @global
 * @memberof bbn.fn
 * @param    {HTMLElement} field The input element
 *
 * @returns  {Mixed}       The value
 */
var fieldValue = function (field) {
    var v;
    if (field.type === 'checkbox') {
        if (field.checked) {
            v = field.value;
            if (!v) {
                v = 1;
            }
        }
        else {
            v = 0;
        }
    }
    else if (field.type === 'radio') {
        if (field.checked) {
            v = field.value;
        }
    }
    else {
        v = field.value;
    }
    return v;
};
export { fieldValue };
