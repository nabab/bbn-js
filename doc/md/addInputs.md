### <a name="addInputs"></a>bbn.fn.addInputs(form, params, prefix)

  __Adds the given data to the given form by inserting hidden inputs.__

  * __form__ _HTMLElement_ The form to which the inputs should be added
  * __params__ _Object_ The data which will be added
  * __prefix__ _String_ The optional object's name of the fields in the form

  __Returns__ _undefined_ 

### Examples



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

[Back to top](#bbn_top)  <a name="bbn_top"></a>

