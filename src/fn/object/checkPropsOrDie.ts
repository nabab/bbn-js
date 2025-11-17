import checkPropsDetails from './checkPropsDetails.js'  ;

export default function checkPropsOrDie(
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
