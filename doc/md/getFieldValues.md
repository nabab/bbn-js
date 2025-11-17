### <a name="getFieldValues"></a>bbn.fn.getFieldValues(arr, field, prop, val, operator)

  __Returns all the unique values of the given field (property) from the first object matching the given filter in an array.__

  The filtering arguments follow the same scheme as bbn.fn.search.

  * __arr__ _Array_ The subject array
  * __field__ _String_ The property from which the values are returned
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in bbn.fn.compare

  __Returns__ _Mixed_ 

### Examples



```javascript
let ar = [
  {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
  {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
  {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
  {name: "Barry Lindon", director: "Stanley Kubrick", year: 1975, id: 802}
];
bbn.fn.getFieldValues(ar, "director");
// ["Steven Spielberg", "George Lucas", "Stanley Kubrick"]
bbn.fn.getFieldValues(ar, "name", {year: 1975});
// ["Jaws", "Barry Lindon"]
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

