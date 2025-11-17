### <a name="isFocused"></a>bbn.fn.isFocused(ele, contain)

  __Checks whether the given elemet is focused or not.__

  * __ele__ _Element_ The element to be checked for focus
  * __contain__ _Boolean_ If true will check if the focused element is contained in the given element


  __Returns__ _Boolean_ True if focused

### Examples



``` javascript
bbn.fn.isFocused(document.getElementById('input_name'));
// false
bbn.fn.isFocused(bbn.sel('.container'));
// true
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

