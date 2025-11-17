### <a name="multiorder"></a>bbn.fn.multiorder(arr, orders)

  __Sorts an array of objects based on a set of properties.__

  The resulting array is the same object, the order is based on _compareValues function
applied for each given properties in orders argument.

  * __arr__ _Array_ The array to order
  * __orders__ _Array|Object_ The properties and directions (asc, desc) to order by

  __Returns__ _Array_ The same array (arr), ordered differently

### Examples



```javascript
let ar = [
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Out of Africa", year: 1985},
  {movie: "Ran", year: 1985},
  {movie: "Back to the future", year: 1985},
  {movie: "Barry Lindon", year: 1976}
];
bbn.fn.multiorder(ar, [
  {field: "year", dir: "desc"},
  {field: "movie", dir: "asc"}
]);
// [
//   {movie: "Donnie Darko", year: 2001},
//   {movie: "Back to the future", year: 1985},
//   {movie: "Brazil", year: 1985},
//   {movie: "Out of Africa", year: 1985},
//   {movie: "Ran", year: 1985},
//   {movie: "Barry Lindon", year: 1976}
// ]
bbn.fn.multiorder(ar, {year: "desc", movie: "asc"});
// Same result with object shortcut
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

