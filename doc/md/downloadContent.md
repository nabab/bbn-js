### <a name="downloadContent"></a>bbn.fn.downloadContent(filename, content, type)

  __Downloads a file with given filename from the given content.__

  Creates a link putting in href a URL Object Blob made of the given content,
which can be a canvas, a file or a blob object, or just a string.

  * __filename__ _String_ The name for the downloaded file
  * __content__ _HTMLCanvasElement|File|String_ A Canvas, a File object or a String
  * __type__ _String_ The type of file to be made


  __Returns__ _undefined_ 

### Examples



```javascript
// Download from a string
bbn.fn.downloadContent('myTextFile.txt', 'Just a string\nThat we can save directly in a file', 'text/plain');

// Download from a file
let file = new File(["foo"], "foo.txt", {type: "text/plain"});
bbn.fn.downloadContent('foo.txt', file);
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

