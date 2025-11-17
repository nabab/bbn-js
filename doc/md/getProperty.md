### <a name="getProperty"></a>bbn.fn.getProperty(obj, props)

  __Returns the value of the given property from the given object.__

  Looks for the given property in the given object, accepting dot (.) separator 
for deep property access, and returns its value if found and undefined otherwise.

  * __obj__ _Object_ 
  * __props__ _String_ 

  __Returns__ _Mixed_ The property's value or undefined

### Examples



```javascript
bbn.fn.getProperty({a: 1, b: 2}, 'b');
// 2
```


```javascript
bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.o.a');
// 33
```


```javascript
bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.h.a');
// undefined
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

