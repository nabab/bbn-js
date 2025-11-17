import each from '../loop/each.js';
export default function adjustSize(type, eles) {
    let max = 0, idx;
    each(eles, (el) => {
        el.style[type] = 'auto';
    });
    each(eles, (el, i) => {
        let rect = el.getBoundingClientRect(), s = rect[type] % 1 ? rect[type] - (rect[type] % 1) + 1 : rect[type];
        //s = rect[type];
        if (s > max) {
            max = s;
            idx = i;
        }
    });
    each(eles, (el, i) => {
        if (max) {
            el.style[type] = max + 'px';
        }
    });
}
;
