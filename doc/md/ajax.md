# ajax.js

## Routing and navigation.

These functions are meant to be used in a configured BBN environment,
i.e. a single page application where callback functions are already defined
and bbn has been initiated through bbn.fn.init.


<a name="bbn_top"></a>[bbn.fn.__abort__](#abort)  
Aborts (client side) the XHR corresponding to the given ID if it still exists.  
[bbn.fn.__ajax__](#ajax)  
Creates an XHR object and returns the Promise.  
[bbn.fn.__callback__](#callback)  
Executes a serie of predefined actions once an Ajax request has been done.  
[bbn.fn.__download__](#download)  
Downloads a file with given filename from a URL.  
[bbn.fn.__downloadContent__](#downloadContent)  
Downloads a file with given filename from the given content.  
[bbn.fn.__getLoader__](#getLoader)  
Finds the loader object corresponding to the given unique ID and returns it if found.  
[bbn.fn.__getRequestId__](#getRequestId)  
Returns a unique ID for a "loader" based on the URL, the data keys and the datatype.  
[bbn.fn.__link__](#link)  
Follows a link and if needed by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.  
[bbn.fn.__post__](#post)  
Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.  
[bbn.fn.__postOut__](#postOut)  
Posts a request in a new window.  
[bbn.fn.__setNavigationVars__](#setNavigationVars)  
Changes the URL and the associated variables and updates the history.  
[bbn.fn.__treatAjaxArguments__](#treatAjaxArguments)  
Transforms unordered arguments into a configuratiuon object for Ajax shortcut functions.  
[bbn.fn.__upload__](#upload)  
Uploads a file synchronously through an XHR indicating progress.  


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

[Back to top](#bbn_top)  

### <a name="treatAjaxArguments"></a>bbn.fn.treatAjaxArguments(args)

  __Transforms unordered arguments into a configuratiuon object for Ajax shortcut functions.__

  The final object will have the following arguments: url, obj, datatype, force, successFn,
errorFn, abortFn, e, and ele; The rules are:
* The first string found is the URL
* The second string found is the datatype
* The first function is successFn
* The second function is errorFn
* The third function is abortFn
* A boolean true is force
* An Event is e
* An HTML element is ele

If no object is given the _bbn property will be added in order to always post something 
and let the bbn server scripts know if a whole DOM is requested or a JSON answer.

  * __args__ _Mixed_ 


  __Returns__ _Object_ The configuration object


```javascript
bbn.fn.treatAjaxArguments(['my/script', 'json', {a:1, b:2}, () => bbn.fn.log('Hi'), () => bbn.fn.log('Bye'), () => bbn.fn.log('Argh'), true])
// {
//   "url": "my/script",
//   "datatype": "json",
//   "obj": {
//     "a": 1,
//     "b": 2
//   },
//   "successFn": () => bbn.fn.log('Hi'),
//   "errorFn": () => bbn.fn.log('Bye'),
//   "abortFn": () => bbn.fn.log('Argh'),
//   "force": true
// }

bbn.fn.treatAjaxArguments(['my/script?id=1'])
// {
//   "url": "my/script?id=1",
//   "obj": {
//     "_bbn": "public"
//   },
//   "datatype": "json"
// }
```

[Back to top](#bbn_top)  

### <a name="post"></a>bbn.fn.post()

  __Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.__

  URL is the only mandatory argument (see treatAjaxArguments for the arguments).


  __Returns__ _undefined|Promise_ 


```javascript
bbn.fn.post('logout').then(() => {
  document.location.reload();
});
// With data
bbn.fn.post('login', {user: 'tn', pass: 'xxx'}).then((d) => {
 if (d && d.success) {
   alert('Welcome!');
 }
});
// With the callback as argument
bbn.fn.post('login', {user: 'tn', pass: 'xxx'}, (d) => {
 if (d && d.success) {
   alert('Welcome!');
 }
}, (err) => {
  bbn.fn.log(err);
  mySpecialErrorFunction(err);
});
```

[Back to top](#bbn_top)  

### <a name="link"></a>bbn.fn.link()

  __Follows a link and if needed by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.__

  Once bbn has been initiated this function will be triggered every time a link is clicked.  
It accepts the same arguments as seen in treatAjaxArguments but will tipically just be called with a URL,
the defaultLinkURL functions being in charge of loading the content.


  __Returns__ _undefined_ 


```javascript
// Will open in a new window/tab
bbn.fn.link('https://nytimes.com');
// Will send an Ajax request
bbn.fn.link('my/page');
// Will open your default email program
bbn.fn.link('mailto:postmaster@test.com');
```

[Back to top](#bbn_top)  

### <a name="callback"></a>bbn.fn.callback(url, res, fn, fn2, ele)

  __Executes a serie of predefined actions once an Ajax request has been done.__

  Used to treat all the requests functions results, it expects at least url and res to be defined;
The following properties from the object res have direct effects:
- __url__ {String}: if not given it will be automatically defined by the url parameter;  
  __the given URL will be passed to location.href (without reloading)__
- __prescript__ {String}: if defined it will attempt to evaluate the code contained in the property
- __content__ {String}: if defined and ele is defined too, the string will be inserted as content in the element
- __script__ {String}: if defined it will be evaluated, executed, and its result will be returned
- __data__ {Object}:
- __postscript__ {String}: if defined it will be evaluated and executed
- __error__ {String}: if defined it will be trigger bbn.fn.defaultAlertFunction  

If fn is defined it will be executed after prescript, otherwise it will be bbn.fn.defaultLinkFunction.  

The rest of the function comes executed if either of these results is not empty.  

If fn2 is defined it will be executed after script, otherwise it will be bbn.fn.defaultPostLinkFunction.

Although not private this function should only be used internally.

  * __url__ _String_ The URL that has been called
  * __res__ _Object_ The object returned by the request
  * __fn__ _Function_ A first callback function to execute
  * __fn2__ _Function_ A second callback function to execute
  * __ele__ _HTMLElement_ A DOM element where the content will be inserted


  __Returns__ _Mixed_ The result of the main callback function: res.script, fn, or bbn.fn.defaultLinkFunction
[Back to top](#bbn_top)  

### <a name="setNavigationVars"></a>bbn.fn.setNavigationVars(url, title, data, repl)

  __Changes the URL and the associated variables and updates the history.__

  * __url__ _String_ The URL which will become the location.href
  * __title__ _String_ The title corresponding to the given URL
  * __data__ _Object_ The data if any
  * __repl__ _Boolean_ If true the history state object will replace the current one, will be added otherwise


  __Returns__ _undefined_ 


```javascript
// Changing URL
bbn.fn.setNavigationVars('my/page', 'My page');
// Replacing the previous state
bbn.fn.setNavigationVars('my/page/deeper', 'My deeper page', null, true);
```

[Back to top](#bbn_top)  

### <a name="postOut"></a>bbn.fn.postOut(url, data, success, target)

  __Posts a request in a new window.__

  * __url__ _String_ The url to which the request should be sent
  * __data__ _Object_ The data to be sent
  * __success__ _Function_ A function to execute in case of success
  * __target__ _String_ The target attribute of the form


  __Returns__ _undefined_ 


```javascript
bbn.fn.postOut('https://external-service.com/download/account-2019-06.pdf', {clientId: 547912, token: xxx});
```

[Back to top](#bbn_top)  

### <a name="abort"></a>bbn.fn.abort(requestId)

  __Aborts (client side) the XHR corresponding to the given ID if it still exists.__

  This will throw an error if the loader can't be found.

  * __requestId__ _String_ An ID generated by getRequestId


  __Returns__ _undefined_ 


```javascript
bbn.fn.post('my/script', {a: 1, b: 2});
let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
if (requestId) {
  bbn.fn.abort(requestId);
}
```

[Back to top](#bbn_top)  

### <a name="downloadContent"></a>bbn.fn.downloadContent(filename, content, type)

  __Downloads a file with given filename from the given content.__

  Creates a link putting in href a URL Object Blob made of the given content,
which can be a canvas, a file or a blob object, or just a string.

  * __filename__ _String_ The name for the downloaded file
  * __content__ _HTMLCanvasElement|File|String_ A Canvas, a File object or a String
  * __type__ _String_ The type of file to be made


  __Returns__ _undefined_ 


```javascript
// Download from a string
bbn.fn.downloadContent('myTextFile.txt', 'Just a string\nThat we can save directly in a file', 'text/plain');

// Download from a file
let file = new File(["foo"], "foo.txt", {type: "text/plain"});
bbn.fn.downloadContent('foo.txt', file);
```

[Back to top](#bbn_top)  

### <a name="download"></a>bbn.fn.download(url, filename, params)

  __Downloads a file with given filename from a URL.__

  Gets the file's content as Blob through XHR, then sends it to bbn.fn.downloadContent.  
__Attention__ The CORS policy applies.

  * __url__ _String_ The URL from which the file will be requested
  * __filename__ _String_ The name for the downloaded file (otherwise it will take the basename of the url)
  * __params__ _Object_ A data object to send with the request


  __Returns__ _undefined_ 


```javascript
// Forcing the download of an image
bbn.fn.download('/bbn/js-title-black.png');

// Forcing the download of a PDF
bbn.fn.download('/files/my-document.pdf');

// Changing the name as it is downloaded
bbn.fn.download('/files/f4b1092d71aefd96458feaa71d170f69.pdf', 'myDocument_' + bbn.fn.dateSQL() + '.pdf');
```

[Back to top](#bbn_top)  

### <a name="upload"></a>bbn.fn.upload(url, file, success, failure, progress)

  __Uploads a file synchronously through an XHR indicating progress.__

  * __url__ _String_ The URL to which the file should be uploaded
  * __file__ _File_ A File object or an array of data
  * __success__ _Function_ A function to execute after success
  * __failure__ _Function_ A function to execute after failure
  * __progress__ _Function_ A function to execute during progress


  __Returns__ _Promise_ 
[Back to top](#bbn_top)  

### <a name="getLoader"></a>bbn.fn.getLoader(requestId)

  __Finds the loader object corresponding to the given unique ID and returns it if found.__

  The loader is an object representing an Ajax request, with the following properties:
* _key_ is the unique ID (_requestId_) of the loader
* _url_ is the URL called by the request
* _loader_ is the Promise from the Axios XHR
* _source_ is the source object for aborting the request
* _start_ is the timestamp of the moment the request was sent.

  * __requestId__ _String_ The unique ID of the request as used in bbn.env.loaders


  __Returns__ _false|Object_ The corresponding loader Object if it exists, false otherwise


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

[Back to top](#bbn_top)  

### <a name="getRequestId"></a>bbn.fn.getRequestId(url, data, datatype)

  __Returns a unique ID for a "loader" based on the URL, the data keys and the datatype.__

  The routing functions don't allow to send the same request at the same moment,
therefore a unique ID is generated to identify them, based on the URL,
the keys of the data sent, and the expected returned data type.

  * __url__ _String_ The URL used by the request
  * __data__ _Object_ The data sent to the URL
  * __datatype__ _String_ The type of data requested (JSON by default)


  __Returns__ _String_ The unique ID


```javascript
// The URL is the first part of the key
bbn.fn.getRequestId('my/location', {a: 1, b: 2});
// my/location:af27f0e81533ae2bae3c25dea67359f6
bbn.fn.getRequestId('my/other/location', {a: 1, b: 2});
// my/other/location:af27f0e81533ae2bae3c25dea67359f6
```



```javascript
// A change of value will not change the requestId
bbn.fn.getRequestId('my/location', {a: 1, b: 3});
// my/location:af27f0e81533ae2bae3c25dea67359f6
// A change of key will
bbn.fn.getRequestId('my/location', {a: 1, c: 3});
// my/location:fde97ca7c6c998c911f4ab481a136d5f
```



```javascript
// Same with nested object
bbn.fn.getRequestId('my/location', {data: {a: 1, b: 3}});
// my/location:a7a58435275054106c4e4c9fb0cea5e5
bbn.fn.getRequestId('my/location', {data: {a: 1, b: 2}});
// my/location:a7a58435275054106c4e4c9fb0cea5e5
bbn.fn.getRequestId('my/location', {data: {a: 1, c: 3}});
// my/location:730da481e30d421afbadf1f1282dabb7
```

[Back to top](#bbn_top)  