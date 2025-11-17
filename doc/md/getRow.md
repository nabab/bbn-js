### <a name="getRow"></a>bbn.fn.getRow(arr, prop, val, operator, from, backward, notFound)

  __Returns the first object matching the given filter in an array of objects.__

  The filtering arguments follow the same scheme as bbn.fn.search.

  * __arr__ _Array_ The subject array
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _Number|false|String_ The operator to use for comparison with the value as used in bbn.fn.compare
  * __from__ _Number|Boolean_ The index to start from, if false the search starts from the end
  * __backward__ _Mixed_ Searches backward
  * __notFound__ _Mixed_ Value to return when not found

  __Returns__ _Mixed_ The item if found, false otherwise

### Examples



```javascript
let ar = [
  {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
  {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
  {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
  {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
];
bbn.fn.getRow(ar, {director: "Steven Spielberg"});
// {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
bbn.fn.getRow(ar, "director", "Steven Spielberg");
// Same result as the previous example
bbn.fn.getRow(ar, {
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
// {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

