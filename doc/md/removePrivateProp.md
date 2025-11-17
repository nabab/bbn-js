### <a name="removePrivateProp"></a>bbn.fn.removePrivateProp(obj, deep)

  __Returns an object with the original objects' properties starting with an alphanumeric character.__

  It is presumed that external libraries, bbn variables use prefixes such as _ or $ for
naming private properties; this returns a new object purged from these properties.

  * __obj__ _Object_ The original object
  * __deep__ _Boolean_ If true the function will be reapplied on object properties

  __Returns__ _Object_ A new object without only the _public_ properties.

### Examples



```javascript
bbn.fn.removePrivateProp({
  _bbn_timestamp: 1587269593987,
  name: "Wonka",
  fname: "Willy"
});
// {name: "Wonka", fname: "Willy"}
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

