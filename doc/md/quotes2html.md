### <a name="quotes2html"></a>bbn.fn.quotes2html(st)

  __Replace quotes in ASCII code.__

  * __st__ _String_ 

  __Returns__ _String_ 

### Examples



```javascript
bbn.fn.quotes2html("hello 'world'!", 's');
// hello &#39;world&#39;!
```



```javascript
bbn.fn.quotes2html('hello "world\'s"!', 'd');
// hello &quot;world'sd&quot;!
```



```javascript
bbn.fn.quotes2html('hello "world\'s"!');
// hello &quot;world&#39;sd&quot;!
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

