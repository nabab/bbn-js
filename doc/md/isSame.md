### <a name="isSame"></a>bbn.fn.isSame(obj1, obj2)

  __Checks whether the data contained in the given objects is identical.__

  The properties starting with a non alphanumerical character and the 
inherited ones are removed for the comparison, then the properties are 
compared individually without the order being taken into account.

  * __obj1__ _Object_ 
  * __obj2__ _Object_ 

  __Returns__ _Boolean_ 

### Examples



```javascript
bbn.fn.isSame(
  {name: "Wonka", fname: "Willy"},
  {fname: "Willy", name: "Wonka"}
);
// true
```


```javascript
// Doesn't take into account properties starting with non-alphanumeric characters
bbn.fn.isSame(
  {name: "Wonka", fname: "Willy", _bbn_timestamp: 1587269593987},
  {fname: "Willy", name: "Wonka"}
);
// true
```


```javascript
bbn.fn.isSame(
  {name: "Wonka", fname: "Willy", real: false},
  {fname: "Willy", name: "Wonka"}
);
// false
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

