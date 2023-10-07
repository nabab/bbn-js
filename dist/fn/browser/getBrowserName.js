/**
 * Gets the browser's name
 * @method getBrowserName
 * @global
 * @memberof bbn.fn
 * @returns {String}
 */
var getBrowserName = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    switch (true) {
        case userAgent.includes('edge'):
        case userAgent.includes('edg/'):
            return 'Edge';
        case userAgent.includes('opr') && !!window['opr']:
            return 'Opera';
        case userAgent.includes('chrome') && !!window['chrome']:
            return 'Chrome';
        case userAgent.includes('trident'):
            return 'Internet Explorer';
        case userAgent.includes('firefox'):
            return 'Firefox';
        case userAgent.includes('safari'):
            return 'Safari';
        default:
            return 'Other';
    }
};
export { getBrowserName };
