/**
 * Returns true if the given argumen is a VueJS object.
 *
 * @method   isVue
 * @global
 * @example
 * ```javascript
 * let myObj =  new Vue({});
 * bbn.fn.isVue(myObj);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isVue(...args: any[]): boolean {
  if (!args.length) {
    return false;
  }

  if ("vue" in bbn && window["Vue"]) {
    if ("app" in bbn.vue) {
      for (let a of args) {
        if (!a || typeof a.render !== "function") {
          return false;
        }
      }
    } else {
      for (let a of args) {
        if (!(a instanceof window["Vue"])) {
          return false;
        }
      }
    }
  }

  if (
    "cp" in bbn &&
    "isComponent" in bbn["cp"] &&
    typeof bbn["cp"].isComponent === "function"
  ) {
    return bbn.cp.isComponent(...args);
  }

  return true;
};
