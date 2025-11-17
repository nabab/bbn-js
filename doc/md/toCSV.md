### <a name="toCSV"></a>bbn.fn.toCSV(arr, valSep, rowSep, valEsc)

  __Returns a CSV string from the given array of arrays or objects.__

  * __arr__ _Array_ The array to convert
  * __[valSep=,]__ _String_ The value separator character
  * __[rowSep=;]__ _String_ The row separator character
  * __[valEsc="]__ _String_ The string escaper character

  __Returns__ _String_ A CSV string

### Examples



```javascript
bbn.fn.toCSV([['a', 'b', 'c'], ['d', 'e', 'f']]);
// "a","b","c";
// "d","e","f"
```


```javascript
bbn.fn.toCSV([{name: "Capuche", fname: "Marc-Antoine"}, {name: "Orfin", fname: "Louis"}]);
// "Capuche","Marc-Antoine";
// "Orfin","Louis"
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

