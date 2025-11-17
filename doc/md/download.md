### <a name="download"></a>bbn.fn.download(url, filename, params)

  __Downloads a file with given filename from a URL.__

  Gets the file's content as Blob through XHR, then sends it to bbn.fn.downloadContent.
__Attention__ The CORS policy applies.

  * __url__ _String_ The URL from which the file will be requested
  * __filename__ _String_ The name for the downloaded file (otherwise it will take the basename of the url)
  * __params__ _Object_ A data object to send with the request


  __Returns__ _undefined_ 

### Examples



```javascript
// Forcing the download of an image
bbn.fn.download('/bbn/js-title-black.png');

// Forcing the download of a PDF
bbn.fn.download('/files/my-document.pdf');

// Changing the name as it is downloaded
bbn.fn.download('/files/f4b1092d71aefd96458feaa71d170f69.pdf', 'myDocument_' + bbn.fn.dateSQL() + '.pdf');
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

