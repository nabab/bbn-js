# form.js

## Forms and data.

<a name="bbn_top"></a>[bbn.fn.__addInputs__](#addInputs)  
Adds the given data to the given form by inserting hidden inputs.  
[bbn.fn.__fieldValue__](#fieldValue)  
Returns the value of a form's input, differenciating between checkboxes, radio and other inputs.  
[bbn.fn.__formdata__](#formdata)  
Returns all the data contained in a form as a single object.  
[bbn.fn.__objectToFormData__](#objectToFormData)  
  
[bbn.fn.__submit__](#submit)  
Submit a form's data through an Ajax request.  


### <a name="addInputs"></a>bbn.fn.addInputs(form, params, prefix)

  __Adds the given data to the given form by inserting hidden inputs.__

  * __form__ _HTMLElement_ The form to which the inputs should be added
  * __params__ _Object_ The data which will be added
  * __prefix__ _String_ The optional object's name of the fields in the form

  __Returns__ _undefined_ 


```javascript
let o = {name: "Smith", fname: "John"};
bbn.fn.addInputs(document.getElementById('myform'), o, 'bbn');
// Will write at the end of the given form:
// <input type="hidden" name="bbn[name]" value="Smith">
// <input type="hidden" name="bbn[fname]" value="John">

```



```javascript
let o = {
  People: [
    {name: "Smith", fname: "John"},
    {name: "Smith", fname: "Eileen"}
  ],
  Dates: ['2021-08-25', '2021-09-06']
};
bbn.fn.addInputs(document.getElementById('myform'), o);
// Will write at the end of the given form:
// <input type="hidden" name="People[0][name]" value="Smith">
// <input type="hidden" name="People[0][fname]" value="John">
// <input type="hidden" name="People[1][name]" value="Smith">
// <input type="hidden" name="People[1][fname]" value="Eileen">
// <input type="hidden" name="Dates[0]" value="2021-08-25">
// <input type="hidden" name="Dates[1]" value="2021-09-06">
```

[Back to top](#bbn_top)  

### <a name="submit"></a>bbn.fn.submit(form, e, fn)

  __Submit a form's data through an Ajax request.__

  It will also prevent the event if given, and execute the given callback, 
or look for one in the data-script attribute.

  Fires {*}
  Fires {*}

  * __form__ _HTMLElement_ The form to submit
  * __e__ _Event_ The optional submit event - which will be prevented
  * __fn__ _Function_ An optional callback function


  __Returns__ _Mixed_ 
[Back to top](#bbn_top)  

### <a name="fieldValue"></a>bbn.fn.fieldValue(field)

  __Returns the value of a form's input, differenciating between checkboxes, radio and other inputs.__

  * __field__ _HTMLElement_ The input element


  __Returns__ _Mixed_ The value
[Back to top](#bbn_top)  

### <a name="formdata"></a>bbn.fn.formdata(form)

  __Returns all the data contained in a form as a single object.__

  Fires {*}

  * __form__ _HTMLElement_ 


  __Returns__ _Object_ 


```javascript
// <form id="myform">
// <input type="hidden" name="bbn[name]" value="Smith">
// <input type="hidden" name="bbn[fname]" value="John">
// </form>
bbn.fn.formdata(document.getElementById('myform'));
// {name: "Smith", fname: "John"};

```



```javascript
// <form id="myform">
// <input type="hidden" name="People[0][name]" value="Smith">
// <input type="hidden" name="People[0][fname]" value="John">
// <input type="hidden" name="People[1][name]" value="Smith">
// <input type="hidden" name="People[1][fname]" value="Eileen">
// <input type="hidden" name="Dates[0]" value="2021-08-25">
// <input type="hidden" name="Dates[1]" value="2021-09-06">
// </form>
bbn.fn.formdata(document.getElementById('myform'));
// {
//   People: [
//     {name: "Smith", fname: "John"},
//     {name: "Smith", fname: "Eileen"}
//   ],
//   Dates: ['2021-08-25', '2021-09-06']
// }
```

[Back to top](#bbn_top)  

### <a name="objectToFormData"></a>bbn.fn.objectToFormData(obj, key, ignoreList)

  * __obj__ _Object|Array|File_ 
  * __key__ _String_ 
  * __ignoreList__ _Array_ 

  __Returns__ _undefined_ 
[Back to top](#bbn_top)  