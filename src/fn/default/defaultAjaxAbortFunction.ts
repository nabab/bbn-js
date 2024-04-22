import log from '../browser/log.js'  ;

export default function defaultAjaxAbortFunction(message, url = "") {
  log(message);
};
