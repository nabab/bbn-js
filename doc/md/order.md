### <a name="order"></a>bbn.fn.order(arr, prop, dir)

  __Sorts an array of objects based on the given property.__

  The resulting array is the same object, the order is based on _compareValues function.

  * __arr__ _Array_ The array to order
  * __prop__ _String_ The property on which the order is based
  * __[dir=asc]__ _String_ The direction of the order (desc or asc by default)

  __Returns__ _Array_ 

### Examples



```javascript
bbn.fn.order([
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Barry Lindon", year: 1976}
], 'year', 'DESC')
// [
//   {movie: "Donnie Darko", year: 2001},
//   {movie: "Brazil", year: 1985},
//   {movie: "Barry Lindon", year: 1976}
// ]
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

