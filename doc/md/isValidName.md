### <a name="isValidName"></a>bbn.fn.isValidName(st)

  __Returns true if the given value is a valid name for a function without checking in reserved words, false otherwise.__

  * __st__ _String_ 

  __Returns__ _Boolean_ 

### Examples



```javascript
bbn.fn.isValidName('$myFunc_tion')
// true
```


```javascript
bbn.fn.isValidName('7Y')
// false
```



```javascript
bbn.fn.isValidName('function')
// true
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

