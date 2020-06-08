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
Downloads a file with given filename from its content.  
[bbn.fn.__getLoader__](#getLoader)  
Finds the loader corresponding to the given unique ID and returns it if found.  
[bbn.fn.__link__](#link)  
Follows a link by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.  
[bbn.fn.__post__](#post)  
Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.  
[bbn.fn.__post_out__](#post_out)  
Posts a request in a new window.  
[bbn.fn.__setNavigationVars__](#setNavigationVars)  
  
[bbn.fn.__treat_vars__](#treat_vars)  
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

### <a name="treat_vars"></a>bbn.fn.treat_vars(args)

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
* An HTML element is ele.

  * __args__ _Mixed_ 


  __Returns__ _Object_ The configuration object
[Back to top](#bbn_top)  

### <a name="post"></a>bbn.fn.post()

  __Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.__

  URL is the only mandatory argument (see treat_vars for the arguments).


  __Returns__ _undefined|Promise_ 
[Back to top](#bbn_top)  

### <a name="link"></a>bbn.fn.link()

  __Follows a link by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.__

  Once bbn has been initiated this function will be triggered every time a link is clicked 
(see treat_vars for the arguments).


  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="callback"></a>bbn.fn.callback(url, res, fn, fn2, ele)

  __Executes a serie of predefined actions once an Ajax request has been done.__

  Used to treat all the requests functions results, it expects at least url and res to be defined;
The following properties from the object res have direct effects:
- url {String}: if not given it will be automatically defined by the url parameter; 
  *important:* the given URL will be passed to location.href (without reloading)
- prescript {String}: if defined it will attempt to evaluate the code contained in the property
- content {String}: if defined and ele is defined too, the string will be inserted as content in the element
- script {String}: if defined it will be evaluated and executed
- data {Object}:
If fn is defined it will be executed after prescript, otherwise it will be bbn.fn.defaultLinkFunction.
If the first callback returns a non-empty result.

  * __url__ _String_ The URL that has been called
  * __res__ _Object_ The object returned by the request
  * __fn__ _Function_ A first callback function to execute
  * __fn2__ _Function_ A second callback function to execute
  * __ele__ _HTMLElement_ A DOM element where the content will be inserted


  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="setNavigationVars"></a>bbn.fn.setNavigationVars(url, title, data, repl)

  * __url__ _String_ The URL which will become the location.href
  * __title__ _String_ The title corresponding to the given URL
  * __data__ _Object_ The data if any
  * __repl__ _Boolean_ If true the history state object will replace the current one, will be added otherwise


  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="post_out"></a>bbn.fn.post_out(url, data, success, target)

  __Posts a request in a new window.__

  * __url__ _String_ The url to which the request should be sent
  * __data__ _Object_ The data to be sent
  * __success__ _Function_ A function to execute in case of success
  * __target__ _String_ The target attribute of the form


  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="abort"></a>bbn.fn.abort(idURL)

  __Aborts (client side) the XHR corresponding to the given ID if it still exists.__

  This will throw an error if the loader can't be found.

  * __idURL__ _String_ An ID generated by getIdURL


  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="downloadContent"></a>bbn.fn.downloadContent(filename, content, type)

  __Downloads a file with given filename from its content.__

  Creates a link putting in href a URL Object Blob made of the given content.

  * __filename__ _String_ 
  * __content__ _String_ 
  * __type__ _String_ 


  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="download"></a>bbn.fn.download(url, filename, params)

  __Downloads a file with given filename from a URL.__

  Gets the file's content as Blob through XHR, then sends it to bbn.fn.downloadContent.

  * __url__ _String_ 
  * __filename__ _String_ 
  * __params__ _Object_ 


  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="upload"></a>bbn.fn.upload(url, file, success, failure, progress)

  __Uploads a file synchronously through an XHR indicating progress.__

  * __url__ _String_ 
  * __file__ _File_ 
  * __success__ _Function_ 
  * __failure__ _Function_ 
  * __progress__ _Function_ 


  __Returns__ _Promise_ 
[Back to top](#bbn_top)  

### <a name="getLoader"></a>bbn.fn.getLoader(idURL)

  __Finds the loader corresponding to the given unique ID and returns it if found.__

  The loader is an object representing an Ajax request, with the following properties:
* _key_ is the unique ID of the loader based on a compbination of URl and parameters sent
* _url_ is the URL called by the request
* _loader_ is the Promise from the Axios XHR
* _source_ is the data posted by the request
* _start_ is the timestamp of the moment the request was sent.

  * __idURL__ _String_ The unique ID of the request as used in bbn.env.loaders


  __Returns__ _false|Promise_ The corresponding Promise if it exists


```javascript

```

[Back to top](#bbn_top)  