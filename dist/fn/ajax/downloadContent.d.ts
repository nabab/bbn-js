/**
 * Downloads a file with given filename from the given content.
 *
 * Creates a link putting in href a URL Object Blob made of the given content,
 * which can be a canvas, a file or a blob object, or just a string.
 *
 * @method   downloadContent
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Download from a string
 * bbn.fn.downloadContent('myTextFile.txt', 'Just a string\nThat we can save directly in a file', 'text/plain');
 *
 * // Download from a file
 * let file = new File(["foo"], "foo.txt", {type: "text/plain"});
 * bbn.fn.downloadContent('foo.txt', file);
 * ```
 *
 * @param    {String}                        filename The name for the downloaded file
 * @param    {HTMLCanvasElement|File|String} content  A Canvas, a File object or a String
 * @param    {String}                        type     The type of file to be made
 *
 * @returns  {undefined}
 */
export default function downloadContent(filename: any, content: any, type?: any): void;
