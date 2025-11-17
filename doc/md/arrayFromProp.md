### <a name="arrayFromProp"></a>bbn.fn.arrayFromProp(arr, prop)

  __Creates and returns a new array made of the given property's values from the given array of objects.__

  The returned array will always have the same length of the given array, even if the property is not found.

  * __arr__ _Array_ 
  * __prop__ _String_ 

  __Returns__ _Array_ The new array

### Examples



```javascript
bbn.fn.arrayFromProp([
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Barry Lindon", year: 1976}
], "year");
// [1985, 2001, 1976]
```


```javascript
bbn.fn.arrayFromProp([
  {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
  {pupil: "Jacques Rivette"},
  {pupil: "Luc Besson", grade: {year: "C", month: "D"}},
  {pupil: "Nicole Garcia", grade: {year: "B", month: "B"}}
], "grade.month");
// ["A", undefined, "D", "B"]
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

