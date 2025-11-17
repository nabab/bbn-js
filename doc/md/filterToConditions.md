### <a name="filterToConditions"></a>bbn.fn.filterToConditions(filter, operator)

  __Converts the given object 'filter' to a valid format of condition.__

  The resulting format will comply with bbn.fn.compareConditions and also with
bbn databases functions and complex filters applied to bbn-vue list components.

  * __filter__ _Object_ 
  * __operator__ _String_ 

  __Returns__ _Object_ 

### Examples



```javascript
bbn.fn.filterToConditions({num: 3});
// {
//   logic: "AND",
//   conditions: [{
//     field: "num",
//     operator: "=",
//     value: 3
//   }]
// }
```


```javascript
bbn.fn.filterToConditions({num: 3}, '>');
// {
//   logic: "AND",
//   conditions: [{
//     field: "num",
//     operator: ">",
//     value: 3
//   }]
// }
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

