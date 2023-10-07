import { getCssVar } from './getCssVar.js';
import { each } from '../loop/each.js';
var resize = function () {
    var diffW = bbn.env.width !== window.innerWidth;
    var diffH = bbn.env.height !== window.innerHeight;
    if (diffW || diffH) {
        if (diffW) {
            bbn.env.width =
                window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
            document.documentElement.style.setProperty('--vw', bbn.env.width * 0.01 + 'px');
        }
        if (diffH) {
            bbn.env.height =
                window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
            document.documentElement.style.setProperty('--vh', bbn.env.height * 0.01 + 'px');
        }
        var smallWidth = parseInt(getCssVar('mobile-limit')) || 650;
        var newCls_1 = 'bbn-screen-' + (bbn.env.width < smallWidth ? 'small' : 'regular');
        var classes_1 = (document.body.className || '').split(' ');
        var done_1 = false;
        each(classes_1, function (cls, idx) {
            var bits = cls.split('-');
            if (bits.length === 3 && cls.indexOf('bbn-screen-') === 0) {
                done_1 = true;
                if (cls !== newCls_1) {
                    classes_1.splice(idx, 1, newCls_1);
                }
                return false;
            }
        });
        if (!done_1) {
            classes_1.push(newCls_1);
        }
        bbn.fn.defaultResizeFunction();
        document.body.className = classes_1.join(' ');
    }
};
export { resize };
