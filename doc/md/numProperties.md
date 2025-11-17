### <a name="numProperties"></a>bbn.fn.numProperties(obj)

  __Returns the number of properties contained in the object.__

  Only takes into account the own properties - not the inherited ones - and the non _private_ ones.

  * __obj__ _Object_ The object to analyze

  __Returns__ _Number_ The number of properties

### Examples



```javascript
bbn.fn.numProperties({author: "Chuck Palahniuk", "title": "Fight club"});
// 2
```


```javascript
bbn.fn.numProperties({username: "chuck", "password": "soap", _bbn_timestamp: 1587323193751});
// 2


```javascript
let d = new Date();
bbn.fn.numProperties(d);
// 0
d.myProp = 1;
bbn.fn.numProperties(d);
// 1
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

