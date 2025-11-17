### <a name="post"></a>bbn.fn.post()

  __Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.__

  URL is the only mandatory argument (see treatAjaxArguments for the arguments).


  __Returns__ _undefined|Promise_ 

### Examples



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

[Back to top](#bbn_top)  <a name="bbn_top"></a>

