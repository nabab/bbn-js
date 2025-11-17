### <a name="removeEmpty"></a>bbn.fn.removeEmpty(arr)

  __Returns a new array, having removed all elements deemed empty from the given array.__

  Removes all the elements which are empty, i.e. false, 0, null, '', NaN, or undefined.

  * __arr__ _Array_ 

  __Returns__ _Array_ 

### Examples



```javascript
bbn.fn.removeEmpty([{prop1: 10, prop2: 20}, '', {}, null, 1, undefined, 0, false, 25]);
// [{prop1: 10, prop2: 20}, 1, 25]
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

