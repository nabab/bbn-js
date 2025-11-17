### <a name="compare"></a>bbn.fn.compare(v1, v2, operator)

  __Performs a comparison between two values based on the given operator and returns a boolean.__

  It is internally used by all the filtering functions; the available operators are:  
- _===_, _=_, _equal_, _eq_, _is_, which stand for __===__  
- _!==_, _notequal_, _neq_, _isnot_, which stand for __!==__
- _!=_, _different_, which stand for __!=__
- _contains_, _contain_, _icontains_, _icontain_
- _starts_, _start_
- _startswith_, _startsi_, _starti_, _istarts_, _istart_
- _endswith_, _endsi_, _endi_, _iends_, _iend_
- _like_
- _gt_, _>_, which stand for __>__
- _lt_, _<_, which stand for __<__
- _gte_, _>=_, which stand for __>=__
- _lte_, _<=_, which stand for __<=__
- _isnull_, which stands for __=== null__
- _isnotnull_, which stands for __!== null__
- _isempty_, which stands for __=== ''__
- _isnotempty_, which stands for __!== ''__  

The defaut operator (if none is given) is __==__ .

  * __v1__ _String|Number_ 
  * __v2__ _String|Number_ 
  * __operator__ _String_ 

  __Returns__ _Boolean_ True if the values' comparison complies with the operator, false otherwise

### Examples



```javascript
bbn.fn.compare('foo', 'bar', 'eq');
// false
```


```javascript
bbn.fn.compare('foo', 'bar', 'neq');
// true
```


```javascript
bbn.fn.compare(3, 1, '>');
// true
```


```javascript
bbn.fn.compare("JavaScript", "script", 'contain');
// true
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

