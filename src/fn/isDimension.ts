import { isValidDimension } from './isValidDimension';

const isDimension = function (...args: any[]): boolean
{
  if (!args.length) return false;
  for (let st of args) {
    if ((typeof st !== 'number') || (st < 0)) {
      return false;
    }

    if (!isValidDimension(st)) {
      return false;
    }
  }

  return true;
};

export { isDimension };
