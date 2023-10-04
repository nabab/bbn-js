import { isFunction } from './isFunction';

const defaultPreLinkFunction = function (url: string, force?: boolean, ele?: HTMLElement): string
{
	return url;
};

export { defaultPreLinkFunction };
