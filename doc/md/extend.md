### <a name="extend"></a>bbn.fn.extend()

  __Merges the contents of two or more objects together into the first object.__

  A boolean true argument can be done to operate a deep extend. In this case,
the content of properties or subproperties arrays and objects will also be merged.


  __Returns__ _Object_ The first object argument, merged with the other objects given

### Examples



```javascript
bbn.fn.extend(
  {prop1: 10, prop2: 20},
  {prop1: 11, prop3: 21},
  {prop2: 22, prop4: false},
  {prop5: false, prop3: 45}
);
// {prop1: 11, prop2: 22, prop3: 45, prop4: false, prop5: false}
```


```javascript
bbn.fn.extend(
  {
    prop1: [3, 5, 6],
    prop2: {
      subprop1: 87,
      subprop2: 100
    }
  }, {
    prop1: 11,
    prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
  }, {
    prop2: {
      subprop1: 90,
      subprop3: 25
    },
    prop4: false
  }, {
    prop5: false,
    prop3: [8, 45, {anotherProperty: false, andAnother: true}]
  }
);
// {
//   prop1: 11,
//   prop2: {subprop1: 90, subprop3: 25},
//   prop3: [8, 45, {anotherProperty: false, andAnother: true}],
//   prop4: false,
//   prop5: false
// }
```


```javascript
// Deep
bbn.fn.extend(
  true,
  {
    prop1: [3, 5, 6],
    prop2: {
      subprop1: 87,
      subprop2: 100
    }
  }, {
    prop1: 11,
    prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
  }, {
    prop2: {
      subprop1: 90,
      subprop3: 25
    },
    prop4: false
  }, {
    prop5: false,
    prop3: [8, 45, {anotherProperty: false, andAnother: true}]
  }
);
// {
//   prop1: 11,
//   prop2: {subprop1: 90, subprop3: 25},
//   prop3: [8, 45, {aProperty: 1, anotherProperty: false, andAnother: true}, 26],
//   prop4: false,
//   prop5: false
// }
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

