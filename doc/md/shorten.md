### <a name="shorten"></a>bbn.fn.shorten(st, len)

  __Shortens the given string after *len* characters.__

  Provides an abbreviation to the string passed as the first argument,
deciding through the second argument the number of characters to keep and the remainder replaced
by what is passed as the third argument and if not given a defalut it is: '...'.

  * __st__ _String_ 
  * __len__ _Number_ 

  __Returns__ _String_ 

### Examples



```javascript
//"test***"
bbn.fn.shorten('testing', 4, '***');
```
 @example
```javascript
//"test..."
bbn.fn.shorten('testing', 4);
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

