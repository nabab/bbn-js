/**
  * Returns an object describing the differences for transforming the first given object into the second.
  *
  * The returned data will use the objects properties as keys. If unchanged is set to true, all the
  * properties will be returned, otherwise only the different ones. Each of these keys will have the
  * following properties:
  * - type: can be _modified_, _created_, _deleted_, and if unchanged is set to true _unchanged_
  * - data: the first object's property's value, or the second if type is _created_
  * - newData: the second object's property's value in case of type _updated_
  *
  * @method   diffObj
  * @global
  * @example
  * ```javascript
  * bbn.fn.diffObj(
  *   {
  *     name: "Thomas",
  *     age: 45
  *   }, {
  *     name: "Eva",
  *     sex: "Female",
  *     retired: false
  *   }
  * );
  * // {
  * //   name: {
  * //     type: "updated",
  * //     data: "Thomas",
  * //     newData: "Eva"
  * //   },
  * //   age: {
  * //     type: "deleted",
  * //     data: 45
  * //   },
  * //   sex: {
  * //     type: "created",
  * //     data: "Female"
  * //   },
  * //   retired: {
  * //     type: "created",
  * //     data: false
  * //   }
  * // }
  * ```
  * @example
  * ```javascript
  * bbn.fn.diffObj(
  *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
  *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}}
  * );
  * // {
  * //   "pupil": {
  * //     "type": "updated",
  * //     "data": "Agnes Varda",
  * //     "newData": "Luc Besson"
  * //   },
  * //   "grade": {
  * //     "year": {
  * //       "type": "updated",
  * //       "data": "B",
  * //       "newData": "C"
  * //     },
  * //     "month": {
  * //       "type": "updated",
  * //       "data": "A",
  * //       "newData": "D"
  * //     }
  * //   }
  * // }
  * ```
  * @memberof bbn.fn
  * @param    {Object}  obj1
  * @param    {Object}  obj2
  * @param    {String}  unchanged
  * @param    {Boolean} notRoot
  * @returns  {Object}
  */
declare const diffObj: (obj1: object, obj2: object, unchanged?: boolean, notRoot?: boolean) => any;
export { diffObj };
