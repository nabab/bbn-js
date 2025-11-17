### <a name="isWritable"></a>bbn.fn.isWritable(obj, Object})

  __Returns the value of the given field (property) from the first object matching the given filter in an array of objects.__

  The filtering arguments follow the same scheme as bbn.fn.search.

  * __obj__ _Object_ The subject object
  * __Object}__ _keyo_ key The property from which the value is returned

  __Returns__ _Boolean_ 

### Examples



```javascript
class Foo {
  readonly a = 1
  b = 2
}
const foo = new Foo();
bbn.fn.isWritable(foo, 'a');
// false
bbn.fn.isWritable(foo, 'b');
// true
```



```javascript
class Zoo {
  get a () { return 1; }
  b = 2
}
const zoo = new Zoo();
bbn.fn.isWritable(zoo, 'a');
// false
bbn.fn.isWritable(zoo, 'b');
// true
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

