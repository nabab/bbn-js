### <a name="fori"></a>bbn.fn.fori(arr, fn, max, min)

  __Executes the provided function on each element of the given array.__

  A minimum and a maximum value can be provided, within the boundaries of the
array's indexes. Returning false will stop the loop.

  * __arr__ _Array_ The array to loop on
  * __fn__ _Function_ The function, gets the array's element and the index as arguments
  * __max__ _Number_ The index to which the loop will stop
  * __min__ _Number_ The index at which the loop will start

  __Returns__ _undefined_ 

### Examples



```javascript
let res = 0;
bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
  res += d;
}, 3);
// res = 24
```


```javascript
let res = 0;
bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
  if (res >= 20) {
    return false;
  }
  res += d;
}, 4, 1);
// res = 20
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

