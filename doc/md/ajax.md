### <a name="ajax"></a>bbn.fn.ajax(url, datatype, data, success, failure, abort)

  __Creates an XHR object and returns the Promise.__

  Checks the URL, makes an ID, creates a loader, sets the general callbacks,
makes a POST if data is given a GET otherwise (GET data should be added
directly in the URL), and returns the Promise.

  * __url__ _String_ The URL to be requested by XHR
  * __datatype__ _String_ The type of data expected
  * __data__ _Object_ The data to send through POST
  * __success__ _Function_ The function to execute if the request goes well (200)
  * __failure__ _Function_ The function to execute if the request goes bad
  * __abort__ _Function_ The function to execute if the request is aborted


  __Returns__ _Promise_ The Promise created by the generated XHR.

### Examples



```javascript
// Promise
bbn.fn.ajax(
  'my/location',
  'json',
  {id: 7},
  d => {
    console.log(d);
    alert("Success!");
  },
  err => {
    console.log(err);
    alert("Failure!");
  },
  () => {
    alert("Request aborted!");
  }
)
```



```javascript
// Promise
bbn.fn.ajax('my/location')
  .then(
    d => {
      console.log(d);
      alert("Success!");
    }
  )
  .catch(
    err => {
    }
  )
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

