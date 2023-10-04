import { isString } from './isString';

const isEmail = function (...args: any[]): boolean
{
  if (!args.length) return false;

  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  for (let st of args) {
    if (!isString(st)) {
      return false;
    }
    
    if (!regex.test(st)) {
      return false;
    }
  }

  return true;
};

export { isEmail };
