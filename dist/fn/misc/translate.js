import iterate from '../loop/iterate.js';
export default function translate(o, namespace) {
    let lng = namespace ? bbn.lng[namespace.indexOf('_') === 0 ? namespace : '_' + namespace] : bbn.lng;
    iterate(o, (v, k) => {
        lng[k] = v;
    });
}
;
