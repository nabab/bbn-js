### <a name="isDataURL"></a>bbn.fn.isDataURL()

  __Returns true if the given argument is a date object.__


  __Returns__ _Boolean_ 

### Examples



```javascript
console.log(isDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...")); // true
console.log(isDataURL("data:text/plain,HelloWorld"));                      // true
console.log(isDataURL("https://example.com/image.png"));                   // false
console.log(isDataURL("data:,Hello%2C%20World!"));                         // true
console.log(isDataURL("data:image/png;xyz,"));                             // false
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

