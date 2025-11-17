### <a name="fileExt"></a>bbn.fn.fileExt(filename)

  __Gets the extension from a file's name.__

  The extension is returned in lower case; if the filename has no extension
or is not valid it will return an empty string.

  * __filename__ _String_ 

  __Returns__ _String_ The file's extension

### Examples



```javascript
// "txt"
bbn.fn.fileExt('my_file.txt')
```



```javascript
// "txt"
bbn.fn.fileExt('MY_FILE.TXT')
```



```javascript
// ""
bbn.fn.fileExt('MY_FILE')
```



```javascript
// ""
bbn.fn.fileExt('.MY_FILE')
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

