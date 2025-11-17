import log from '../browser/log.js';
export default function defaultPreLinkFunction(url, force = false, ele = null) {
    log("defaultPreLinkFunction", url, force, ele);
    return true;
}
;
