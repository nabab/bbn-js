### <a name="setNavigationVars"></a>bbn.fn.setNavigationVars(url, title, data, repl)

  __Changes the URL and the associated variables and updates the history.__

  * __url__ _String_ The URL which will become the location.href
  * __title__ _String_ The title corresponding to the given URL
  * __data__ _Object_ The data if any
  * __repl__ _Boolean_ If true the history state object will replace the current one, will be added otherwise


  __Returns__ _void_ 

### Examples



```javascript
// Changing URL
bbn.fn.setNavigationVars('my/page', 'My page');
// Replacing the previous state
bbn.fn.setNavigationVars('my/page/deeper', 'My deeper page', null, true);
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

