import { checkPropsDetails } from './checkPropsDetails' ;

const checkPropsOrDie = function (
  obj: object,
  props: string | string[],
  checkEmpty: boolean = false
) {
  let res = checkPropsDetails(obj, props, checkEmpty);
  if (res.error) {
    throw new Error(res.error);
  }
  return true;
};

export { checkPropsOrDie };
