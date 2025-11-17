### <a name="count"></a>bbn.fn.count(arr, prop, val, operator)

  __Counts the number of objects matching the given filter in the given array.__

  The arguments follow the same scheme as bbn.fn.search.

  * __arr__ _Array_ The subject array
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in bbn.fn.compare

  __Returns__ _Number_ The number of items

### Examples



```javascript
let ar = [
  {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
  {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
  {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
  {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
];
bbn.fn.count(ar, "id", 256);
// 1
bbn.fn.count(ar, {director: "Steven Spielberg"});
// 2
bbn.fn.search(ar, "year", 1975, ">");
// 3
// Complex filters: all the movies from Spielberg between 1974 and 1980
bbn.fn.search(ar, {
  logic: "AND",
  conditions: [
    {
      field: "director",
      operator: "eq",
      value: "Steven Spielberg"
    }, {
      logic: "AND",
      conditions: [
        {
           field: "year",
           operator: ">=",
           value: 1974
        }, {
           field: "year",
           operator: "<=",
           value: 1980
        }
      ]
    }
  ]
});
// 1
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

