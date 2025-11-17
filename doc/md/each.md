### <a name="each"></a>bbn.fn.each(arr, fn)

  __Executes the provided function on each element of the given array.__

  Returning false will stop the loop.

  * __arr__ _Mixed_ The array to loop on
  * __fn__ _Function_ The function, gets the array's element and the index as arguments

  __Returns__ _[Array_ Object, void]}

### Examples



```javascript
let res = 0;
bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
  res += d;
});
// res = 27
```


```javascript
let res = 0;
bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
  if (res >= 20) {
    return false;
  }
  res += d;
});
// res = 24
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

