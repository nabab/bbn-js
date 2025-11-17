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
[Back to top](#bbn_top)  <a name="bbn_top"></a>

