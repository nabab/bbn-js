
import { log } from '../browser/log';


const defaultAjaxAbortFunction = function(message: string, url: string = '') {
  log(message);
};

export {defaultAjaxAbortFunction}
