import buildLocaleFromIntl from "./functions/buildLocaleFromIntl.js";
import extend from "../../fn/object/extend.js";
const locales = {};
extend(locales, buildLocaleFromIntl());
export default locales;
