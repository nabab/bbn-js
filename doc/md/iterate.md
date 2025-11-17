### <a name="iterate"></a>bbn.fn.iterate(obj, fn, noPrivate, reverse)

  __Executes the provided function on each property of the given object.__

  * __obj__ _(Object|Number)_ The object to loop on
  * __fn__ _Function_ The function, gets the array's element and the index as arguments
  * __noPrivate__ _Boolean_ If set to true the _private_ properties won't be included
  * __reverse__ _Boolean_ If set to true the order of the keys will be reversed

  __Returns__ _Object_ 

### Examples



```javascript
//["value1", 2]
let arr = [];
bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
  arr.push(value);
});
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

