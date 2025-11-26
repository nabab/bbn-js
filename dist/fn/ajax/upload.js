import objectToFormData from '../form/objectToFormData.js';
import log from '../browser/log.js';
import com from '../../com.js';
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
export default function upload(url, file, success = null, failure = null, progress = null) {
    const fn = () => {
        return com.run('post', url || bbn.env.path, {
            data: objectToFormData(file),
            headers: {},
            onUploadProgress(progressEvent) {
                if (progress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
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
            .then((res) => {
            if (success) {
                log('SUCCESS', res);
                success(res);
            }
        })
            .catch((err) => {
            if (failure) {
                log('ERROR', err);
                failure(err);
            }
        });
    }
}
;
