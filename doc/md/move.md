### <a name="move"></a>bbn.fn.move(arr, fromIndex, toIndex)

  __Moves an element to a different position within the given array.__

  The same array is returned, with its elements reordered according to the executed movement.

  * __arr__ _Array_ The array
  * __fromIndex__ _Number_ The index of the element to move
  * __toIndex__ _Number_ The future index of the element

  __Returns__ _Array_ The same array, with elements repositionned.

### Examples



```javascript
bbn.fn.move([
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Out of Africa", year: 1985}
], 1, 2);
// [
//   {movie: "Brazil", year: 1985},
//   {movie: "Out of Africa", year: 1985},
//   {movie: "Donnie Darko", year: 2001}
// ]
```
 @example
```javascript
bbn.fn.move([1, 2, 3, 4], 3, 0);
// [4, 1, 2, 3]
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

