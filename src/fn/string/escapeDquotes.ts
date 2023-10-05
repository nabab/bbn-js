import { isString } from "../type/isString";

const escapeDquotes = function (str) {
  if (!isString(str)) {
    return str;
  }

  return str.replace(/"/g, '\\"');
};

export { escapeDquotes };