import { log } from "../browser/log.js";

const defaultErrorFunction = function (message) {
	log(message);
};

export { defaultErrorFunction };
