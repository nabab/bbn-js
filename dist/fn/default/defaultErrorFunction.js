import { log } from '../browser/log';
const defaultErrorFunction = function (message) {
    log(message);
};
export { defaultErrorFunction };
