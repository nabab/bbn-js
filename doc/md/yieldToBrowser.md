### <a name="yieldToBrowser"></a>bbn.fn.yieldToBrowser()

  __Yields execution to the browser to allow it to process pending UI updates.__

  Uses `window.scheduler.yield()` if available, otherwise falls back to `requestAnimationFrame`.


  __Returns__ _Promise_ 

### Examples



``` javascript
await bbn.fn.yieldToBrowser();
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

