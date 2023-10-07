import { iterate } from '../loop/iterate';
const translate = function (o, namespace) {
    let lng = namespace ? bbn.lng[namespace.indexOf('_') === 0 ? namespace : '_' + namespace] : bbn.lng;
    iterate(o, (v, k) => {
        lng[k] = v;
    });
};
export { translate };
