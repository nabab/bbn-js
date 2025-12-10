/**
 * Uploads a file in the browser and deal with its content.
 *
 * @method   getFileContent
 * @todo examples
 * @global
 * @memberof bbn.fn
 *
 * @returns  {Promise}
 */
export default function getFileContent() {
    let type = '';
    let treatAs = 'text';
    let success;
    let failure;
    let progress;
    bbn.fn.each(arguments, (arg) => {
        if (typeof arg === 'string') {
            if (['binary', 'text'].includes(arg.toLowerCase())) {
                treatAs = arg.toLowerCase();
            }
            else if (!type) {
                type = arg;
                if (type === 'image') {
                    type = "image/*";
                }
            }
        }
        else if (bbn.fn.isFunction(arg)) {
            if (!success) {
                success = arg;
            }
            else if (!failure) {
                failure = arg;
            }
            else if (!progress) {
                progress = arg;
            }
        }
    });
    let input = document.createElement("input");
    input.type = "file";
    if (type) {
        input.setAttribute("accept", type);
    }
    input.onchange = function (event) {
        var _a;
        const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        const reader = new FileReader();
        if (treatAs === 'binary') {
            reader.readAsArrayBuffer(file);
        }
        else {
            reader.readAsText(file, `UTF-8`);
        }
        reader.onload = function ({ target }) {
            if (success) {
                success(target === null || target === void 0 ? void 0 : target.result);
            }
        };
        reader.onerror = function () {
            if (failure) {
                failure(`error reading file`);
            }
        };
    };
    input.click();
}
;
