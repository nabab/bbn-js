import { objectToFormData } from '../form/objectToFormData.js';
import { log } from '../browser/log.js';
/**
 * Uploads a file synchronously through an XHR indicating progress.
 *
 * @method   upload
 * @todo examples
 * @global
 * @memberof bbn.fn
 *
 * @param {String}   url      The URL to which the file should be uploaded
 * @param {File}     file     A File object or an array of data
 * @param {Function} success  A function to execute after success
 * @param {Function} failure  A function to execute after failure
 * @param {Function} progress A function to execute during progress
 *
 * @returns  {Promise}
 */
var upload = function (url, file, success, failure, progress) {
    if (success === void 0) { success = null; }
    if (failure === void 0) { failure = null; }
    if (progress === void 0) { progress = null; }
    var fn = function () {
        return axios.post(url || bbn.env.path, objectToFormData(file), {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: function (progressEvent) {
                if (progress) {
                    var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    progress(percentCompleted, progressEvent.loaded, progressEvent.total);
                }
            },
        });
    };
    if (!success && !failure) {
        return fn();
    }
    else {
        return fn()
            .then(function (res) {
            if (success) {
                log('SUCCESS', res);
                success(res);
            }
        })
            .catch(function (err) {
            if (failure) {
                log('ERROR', err);
                failure(err);
            }
        });
    }
};
export { upload };
