/**
 * Creates and returns a new array made of the given property's values from the given array of objects.
 *
 * The returned array will always have the same length of the given array, even if the property is not found.
 *
 * @method   arrayFromProp
 * @global
 * @example
 * ```javascript
 * bbn.fn.arrayFromProp([
 *   {movie: "Brazil", year: 1985},
 *   {movie: "Donnie Darko", year: 2001},
 *   {movie: "Barry Lindon", year: 1976}
 * ], "year");
 * // [1985, 2001, 1976]
 * ```
 * @example
 * ```javascript
 * bbn.fn.arrayFromProp([
 *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
 *   {pupil: "Jacques Rivette"},
 *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}},
 *   {pupil: "Nicole Garcia", grade: {year: "B", month: "B"}}
 * ], "grade.month");
 * // ["A", undefined, "D", "B"]
 * ```
 * @memberof bbn.fn
 * @param    {Array}  arr
 * @param    {String} prop
 * @returns  {Array}  The new array
 */
declare const arrayFromProp: (arr: any, prop: any) => any[];
export { arrayFromProp };
