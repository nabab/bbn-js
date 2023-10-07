import { log } from '../browser/log';

const defaultPreLinkFunction = function (url: string, force?: boolean, ele?: HTMLElement): any
{
	log("defaultPreLinkFunction", url, force, ele);
	return true;
};

export { defaultPreLinkFunction };
