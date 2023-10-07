/**
 * Gets the browser's version
 * @method getBrowserVersion
 * @global
 * @memberof bbn.fn
 * @returns {String}
 */
var getBrowserVersion = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    switch (true) {
        case userAgent.includes('edge/'):
            return userAgent.split('edge/')[1].split(' ')[0];
        case userAgent.includes('edg/'):
            return userAgent.split('edg/')[1].split(' ')[0];
        case userAgent.includes('opr/') && !!window['opr']:
            return userAgent.split('opr/')[1].split(' ')[0];
        case userAgent.includes('chrome/') && !!window['chrome']:
            return userAgent.split('chrome/')[1].split(' ')[0];
        case userAgent.includes('trident/'):
            return userAgent.split('trident/')[1].split(' ')[0];
        case userAgent.includes('firefox/'):
            return userAgent.split('firefox/')[1].split(' ')[0];
        case userAgent.includes('safari/'):
            return userAgent.split('version/')[1].split(' ')[0];
        default:
            return '';
    }
};
export { getBrowserVersion };
