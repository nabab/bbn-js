import { log } from './log';

const defaultErrorFunction = function (message) {
	log(message);
};

export { defaultErrorFunction };
