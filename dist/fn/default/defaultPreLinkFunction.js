import { log } from "../browser/log.js";
const defaultPreLinkFunction = function (url, force = false, ele = null) {
    log("defaultPreLinkFunction", url, force, ele);
    return true;
};
export { defaultPreLinkFunction };
