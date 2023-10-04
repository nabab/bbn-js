import { replaceAll } from './replaceAll';

const br2nl = function (st) {
	return replaceAll('<br />', '\n', replaceAll('<br/>', '\n', replaceAll('<br>', '\n', st)));
};

export { br2nl };
