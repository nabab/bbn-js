### <a name="selectElementText"></a>bbn.fn.selectElementText(ele, win)

  __Selects the content of an element.__

  * __ele__ _Element_ The element in which the text should be selected
  * __win__ _Boolean_ The window object


  __Returns__ _Boolean_ True if focused

### Examples



``` javascript
bbn.fn.selectElementText(document.getElementById('my_input_id'));
// false
bbn.fn.selectElementText(bbn.$('#my_span_id'));
// true
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

