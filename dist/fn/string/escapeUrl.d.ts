/**
 * Escapes a URL or a file path, optionally adding parameters (get type, to append to the URL without the first separator).
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */
declare const escapeUrl: (url: any, params: any) => string;
export { escapeUrl };
