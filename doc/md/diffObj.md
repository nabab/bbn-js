### <a name="diffObj"></a>bbn.fn.diffObj(obj1, obj2, unchanged, notRoot)

  __Returns an object describing the differences for transforming the first given object into the second.__

  The returned data will use the objects properties as keys. If unchanged is set to true, all the 
properties will be returned, otherwise only the different ones. Each of these keys will have the 
following properties: 
- type: can be _modified_, _created_, _deleted_, and if unchanged is set to true _unchanged_
- data: the first object's property's value, or the second if type is _created_
- newData: the second object's property's value in case of type _updated_.

  * __obj1__ _Object_ 
  * __obj2__ _Object_ 
  * __unchanged__ _String_ 
  * __notRoot__ _Boolean_ 

  __Returns__ _Object_ 

### Examples



```javascript
bbn.fn.diffObj(
  {
    name: "Thomas", 
    age: 45
  }, {
    name: "Eva",
    sex: "Female",
    retired: false
  }
);
// {
//   name: {
//     type: "updated",
//     data: "Thomas",
//     newData: "Eva"
//   },
//   age: {
//     type: "deleted",
//     data: 45
//   },
//   sex: {
//     type: "created",
//     data: "Female"
//   },
//   retired: {
//     type: "created",
//     data: false
//   }
// }
```


```javascript
bbn.fn.diffObj(
  {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
  {pupil: "Luc Besson", grade: {year: "C", month: "D"}}
);
// {
//   "pupil": {
//     "type": "updated",
//     "data": "Agnes Varda",
//     "newData": "Luc Besson"
//   },
//   "grade": {
//     "year": {
//       "type": "updated",
//       "data": "B",
//       "newData": "C"
//     },
//     "month": {
//       "type": "updated",
//       "data": "A",
//       "newData": "D"
//     }
//   }
// }
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

