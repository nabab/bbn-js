import isIterable from '../type/isIterable.js';
import adjustSize from './adjustSize.js';
export default function adjustHeight() {
    var args = arguments;
    if (args.length === 1 && isIterable(args[0])) {
        args = args[0];
    }
    return adjustSize('height', args);
}
;
