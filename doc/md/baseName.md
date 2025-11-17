### <a name="baseName"></a>bbn.fn.baseName(path, suffix)

  __Returns the name of the element indicated by path given to it as an argument.__

  * __path__ _String_ The path from which the basename must be extracted
  * __suffix__ _String_ An optional suffix that will be removed from the basename

  __Returns__ _String_ The basename of path

### Examples



```javascript
// "file.png"
bbn.fn.baseName('folder/other_folder/file.png');
```


```javascript
// "file"
bbn.fn.baseName('folder/other_folder/file.png', '.png');
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

