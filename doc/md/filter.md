### <a name="filter"></a>bbn.fn.filter(arr, prop, val, operator)

  __Returns a new array with only the data matching the given filter.__

  The filtering arguments follow the same scheme as bbn.fn.search.

  * __arr__ _Array_ The subject array
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in bbn.fn.compare

  __Returns__ _Array_ A new filtered array

### Examples



```javascript
let ar = [
  {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
  {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
  {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
  {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
];
bbn.fn.filter(ar, {director: "Steven Spielberg"});
// [
//   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
//   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
// ]
bbn.fn.filter(ar, "director", "Steven Spielberg");
// Same result as the previous example
bbn.fn.filter(ar, {
  logic: "OR",
  conditions: [
    {
       field: "director",
       value: "Richard Donner"
    }, {
       field: "director",
       value: "George Lucas"
    }
  ]
);
// [
//   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
//   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
// ]
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

