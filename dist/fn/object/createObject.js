import extend from './extend.js';
// Args because of typescript doing errors
export default function createObject() {
    var originalArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        originalArgs[_i] = arguments[_i];
    }
    var args = Array.from(arguments);
    var obj = Object.create(null);
    if (args.length) {
        args.unshift(obj);
        extend.apply(obj, args);
    }
    return obj;
}
;
