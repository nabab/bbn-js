# ajax.js

## Routing and Navigation

### bbn.fn.abort()


**Returns** _undefined_ 

### bbn.fn.ajax(url, datatype, data, success, failure, abort)

* __url__ _String_ 
* __datatype__ _String_ 
* __data__ _Object_ 
* __success__ _Function_ 
* __failure__ _Function_ 
* __abort__ _Function_ 

**Returns** _undefined_ 

### bbn.fn.callback(url, res, fn, fn2, ele)

* __url__ _String_ 
* __res__ _Object_ 
* __fn__ _Function_ 
* __fn2__ _Function_ 
* __ele__ _HTMLElement_ 

**Returns** _undefined_ 

### bbn.fn.download(filename, text, type)

* __filename__ _String_ 
* __text__ _String_ 
* __type__ _String_ 

**Returns** _undefined_ 

### bbn.fn.getIdURL(url, data, datatype)

Returns a unique ID for a "loader" based on the URL, the data keys and the datatype.
The routing functions don't allow to send the same request at the same moment,
therefore a unique ID is generated to identify them, based on the URL,
the keys of the data sent, and the expected returned data type.
* __url__ _String_ 
* __data__ _Object_ The data sent to the URL
* __datatype__ _String_ The type of data requested (JSON by default)

**Returns** _String_ The unique ID


```javascript
// my/location:59990af62ba3ebdd54a4ebecafc2faa1
bbn.fn.getIdURL('my/location', {id: 1, test: 2});
```


```javascript
// my/other/location:59990af62ba3ebdd54a4ebecafc2faa1
bbn.fn.getIdURL('my/other/location', {id: 1, test: 2});
```


```javascript
// my/location:ec60cdf5001208a1fc5fbae05ac94a55
bbn.fn.getIdURL('my/location', {data: {a: 1, b: 2}});
```

### bbn.fn.getLoader(idURL)

Finds the XHR corresponding to the given unique ID and returns it if found.
* __idURL__ _String_ The unique ID of the request as used in bbn.env.loaders

**Returns** _Promise_ 

### bbn.fn.getParam()

* ____ _Object_ 

**Returns** _undefined_ 

### bbn.fn.link()


**Returns** _undefined_ 

### bbn.fn.post()


**Returns** _undefined_ 

### bbn.fn.setNavigationVars(url, title, data, repl)

* __url__ _String_ 
* __title__ _String_ 
* __data__ _Object_ 
* __repl__ _Boolean_ 

**Returns** _undefined_ 

### bbn.fn.setParam()


**Returns** _undefined_ 

### bbn.fn.treat_vars(args)

* __args__ _Mixed_ 

**Returns** _undefined_ 

### bbn.fn.upload()


**Returns** _undefined_ 

### bbn.fn.window()


**Returns** _undefined_ 