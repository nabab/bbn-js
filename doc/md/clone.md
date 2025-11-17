### <a name="clone"></a>bbn.fn.clone(obj)

  __Creates and returns a perfect clone - but different - from the given object.__

  * __obj__ _Object_ The source object

  __Returns__ _Object_ A new object

### Examples



```javascript
let obj = {name: "Thomas"};
let objCopy = bbn.fn.clone(obj);
obj.name = "Julie";
// obj:     {name: "Julie"}
// objCopy: {name: "Thomas"}
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

