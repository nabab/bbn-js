### <a name="formdata"></a>bbn.fn.formdata(form)

  __Returns all the data contained in a form as a single object.__

  Fires {*}

  * __form__ _HTMLElementL_ 


  __Returns__ _Object_ 

### Examples



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

[Back to top](#bbn_top)  <a name="bbn_top"></a>

