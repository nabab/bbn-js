import { isFunction } from '../type/isFunction';

const defaultPreLinkFunction = function (url: string, force?: boolean, ele?: HTMLElement): any
{
	return 1;
};

export { defaultPreLinkFunction };
