import {checkType} from './fn/type/checkType'
/**
 * Translate an expression using the object bbn.lng
 * 
 * @param {String} st 
 * @returns {String}
 */
const _ = (...args) => {
  let st: string = args.shift();
  let res: string = bbn.lng[st] || st;
  if (args.length) {
    let i = 0;
    return res.replace(/\%([d|s])/g, (match: string, type: string) => {
      let tmp: any = args[i++];
      if (!tmp) {
        tmp = type === 'd' ? 0 : '';
      }

      checkType(tmp, type === 'd' ? 'number' : 'string', bbn._("The value you gave did not correspond, check the loggg"));
      return tmp;
    });
  }

  return res;
};

export {_};

