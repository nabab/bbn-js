### <a name="isIterable"></a>bbn.fn.isIterable(st)

  __Returns true if the given object can be iterated as an array (numerically).__

  It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.

  * __st__ _String_ 


  __Returns__ _Boolean_ 

### Examples



```javascript
bbn.fn.isIterable([1, 2])
// true
bbn.fn.isIterable({a: 1, b: 2})
// false
bbn.fn.isIterable(25)
// false
bbn.fn.isIterable(document.body.querySelectorAll('.container > div'))
// true
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

