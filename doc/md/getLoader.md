### <a name="getLoader"></a>bbn.fn.getLoader(requestId)

  __Finds the loader object corresponding to the given unique ID and returns it if found.__

  The loader is an object representing an Ajax request, with the following properties:
* _key_ is the unique ID (_requestId_) of the loader
* _url_ is the URL called by the request
* _loader_ is the Promise from the Axios XHR
* _source_ is the source object for aborting the request
* _start_ is the timestamp of the moment the request was sent.

  * __requestId__ _String_ The unique ID of the request as used in bbn.env.loaders


  __Returns__ _null|Object_ The corresponding loader Object if it exists, false otherwise

### Examples



```javascript
bbn.fn.post('my/script', {a: 1, b: 2});
let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
if (requestId) {
  let loader = bbn.fn.getLoader(requestId);
  console.log(loader);
  // {
  //    key: "my/script:af27f0e81533ae2bae3c25dea67359f6",
  //    url: "my/script",
  //    loader: {Promise},
  //    source: {token: {CancelToken}, cancel: {Function}},
  //    start: 1591804716757
  // }
}
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

