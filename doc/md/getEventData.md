### <a name="getEventData"></a>bbn.fn.getEventData()

  __Returns a promise having the event's data as argument.__


  __Returns__ _Promise_ 

### Examples



``` javascript
let type = e.type;
  bbn.fn.getEventData(e).then((data) => {
    bbn.fn.log("DATA FROM " + type, data);
  });
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

