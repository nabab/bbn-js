import { isString } from './isString';

const isColor = function (...args: any[]): boolean
{
  if (!args.length) return false;

  var reg = new RegExp(
    '^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|rgba *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$',
    'i'
  );

  for (let st of args) {
    if (!isString(st)) {
      return false;
    }

    if (!reg.test(st)) {
      return false;
    }
  }

  return true;
};

export { isColor };
