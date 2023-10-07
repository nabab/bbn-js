import { isFunction } from "../type/isFunction";

const defaultConfirmFunction = function (
  text,
  yesFn,
  noFn = null
) {
  let ok = 0;
  if (confirm(text)) {
    if (isFunction(yesFn)) {
      yesFn();
      ok = 1;
    }
  }
  if (!ok && isFunction(noFn)) {
    noFn();
  }
};

export { defaultConfirmFunction };
