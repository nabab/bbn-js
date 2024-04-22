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
export default function upload(url: any, file: any, success?: any, failure?: any, progress?: any): any;
