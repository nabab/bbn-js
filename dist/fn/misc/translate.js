import iterate from '../loop/iterate.js';
export default function translate(o, namespace) {
    var lng = namespace ? bbn.lng[namespace.indexOf('_') === 0 ? namespace : '_' + namespace] : bbn.lng;
    iterate(o, function (v, k) {
        lng[k] = v;
    });
}
;
