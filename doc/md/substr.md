### <a name="substr"></a>bbn.fn.substr(str, from, length)

  __Basic substring function accepting both positive and negative values.__

  * __str__ _String_ 
  * __from__ _Number_ 
  * __length__ _Number_ 

  __Returns__ _String_ Result substring

### Examples



```javascript
bbn.fn.substr(bbn.fn, 'Hello', -3, -1);
// "ll"
bbn.fn.substr(bbn.fn, 'Hello', -3);
// "llo"
bbn.fn.substr(bbn.fn, 'Hello', 0, 1);
// "H"
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

