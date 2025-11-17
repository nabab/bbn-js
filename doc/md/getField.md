### <a name="getField"></a>bbn.fn.getField(arr, field, prop, val, operator, from, backward)

  __Returns the value of the given field (property) from the first object matching the given filter in an array of objects.__

  The filtering arguments follow the same scheme as bbn.fn.search.

  * __arr__ _Array_ The subject array
  * __field__ _String_ The property from which the value is returned
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in bbn.fn.compare
  * __from__ _Number|false_ The index to start from, if false the search starts from the end
  * __backward__ _Boolean_ Searches backward

  __Returns__ _Mixed_ 

### Examples



```javascript
let ar = [
  {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
  {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
  {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
  {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
];
bbn.fn.getField(ar, "name", {id: 256});
// Star wars
bbn.fn.getField(ar, "name", "id", 689);
// Goonies
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

