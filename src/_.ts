import checkType from './fn/type/checkType.js'  
/**
 * Translate an expression using the object bbn.lng
 * 
 * @param {String} st 
 * @param  {...String | Number} args
 * @returns {String}
 */
export default function _(st: string, ...args: Array<string | number>): string {
  let res: string = bbn.lng[st] || st;
  if (args.length) {
    let i = 0;
    return res.replace(/\%([d|s])/g, (match: string, type: string) => {
      let tmp: any = args[i++];
      if (!tmp) {
        tmp = type === 'd' ? 0 : '';
      }

      const curType = typeof tmp;
      if ((type === 'd') && (curType !== 'number')) {
        tmp = parseFloat(tmp);
        if (isNaN(tmp)) {
          tmp = 0;
        }
      }
      else if ((type === 's') && (curType !== 'string')) {
        tmp = '' + tmp;
      }

      return tmp;
    });
  }

  return res;
};

