# object.js

## Object functions.

### **bbn.fn.arrayFromProp(arr, prop)**

Returns an array of the same length but filtered,.

containing only the values ​​contained in the properties of the objects present in the array.

* __arr__ _Array_ 
* __prop__ _String_ 

**Returns** _Array_ 


```javascript
//[1, 2, 3]
bbn.fn.arrayFromProp([{field :1, field2 : 2}, {field :2, field2 : 3}, {field :3, field2 : 4}],'field');
```


### **bbn.fn.autoExtend(namespace, obj)**

* __namespace__ _String_ 
* __obj__ _Object_ 

**Returns** _undefined_ 

### **bbn.fn.clone(obj)**

Returns the clone argument removing the observability.

* __obj__ _mixed_ 

**Returns** _undefined_ 


```javascript
//{field: 1}
bbn.fn.clone({field: 1});
```

### **bbn.fn.compare(v1, v2, mode)**

Performs a comparison between two values ​​passing as the third argument the type of comparison to be performed,.

using the terms.

* __v1__ _String|Number_ 
* __v2__ _String|Number_ 
* __mode__ _String_ 

**Returns** _Boolean_ 


```javascript
//false
bbn.fn.compare({field1 :1, field2 : 2}, {field3 :2, field4 : 3},'eq');
```



```javascript
//true
bbn.fn.compare({field1 :1, field2 : 2}, {field3 :2, field4 : 3},'neq');
```



```javascript
//true
bbn.fn.compare(3, 1, '>');
```


```javascript
//true
bbn.fn.compare([0,1,2,3,4], 3, 'contain');
```


### **bbn.fn.compareConditions(data, filter)**

* __data__ _Object_ 
* __filter__ _Object_ 

**Returns** _undefined_ 

### **bbn.fn.compareValues(a, b, prop, dir)**

* __a__ _Object_ 
* __b__ _Object_ 
* __prop__ _String_ 
* __dir__ _String_ 

**Returns** _undefined_ 

### **bbn.fn.count(arr, prop, val, mode)**

Count how many objects contained in the array have the same property and value.

* __arr__ _Array_ 
* __prop__ _String_ 
* __val__ _String|Number_ 
* __mode__ _String_ 

**Returns** _Number_ 


```javascript
//2
bbn.fn.count([{field1 :3, field2 : 2}, {field3 :2, field4 : 3}, {field1 :3, field4 : 4}],'field1',3);
```


### **bbn.fn.countProperties(obj)**

Returns the number of properties contained in the object.

* __obj__ _Object_ 

**Returns** _undefined_ 


```javascript
//2
bbn.fn.countProperties({field :1, field2 : 2});
```


### **bbn.fn.diffObj(obj1, obj2, unchanged, notRoot)**

* __obj1__ _Object_ 
* __obj2__ _Object_ 
* __unchanged__ _String_ 
* __notRoot__ _Boolean_ 

**Returns** _*_ 

### **bbn.fn.each(arr, fn)**

Performs an iterative loop of an array or object given to it as a first argument and as a second argument a function that accepts 2 arguments,.

value and index.

* __arr__ _Array_ 
* __fn__ _Function_ 

**Returns** _*_ 


```javascript
//4
let num = 0;
bbn.fn.each([{field1:1, field2:2},{field3:3, field4:4},{field5:5, field6:6}],(val,idx)=>{
  if ( val.field3 !== undefined ){
    num = val.field3 + idx
  }
})
```


### **bbn.fn.extend()**

returns a single element by extending two or more elements.

If at the end we pass the value true as an argument it will make the extension in depth.


**Returns** _undefined_ 


```javascript
//{field1: 1, field2: 2, field3: 3}
bbn.fn.extend({field1:1}, {field2:2}, {field3:3});
```


### **bbn.fn.extendOut()**


**Returns** _undefined_ 

### **bbn.fn.filter(arr, prop, val, mode)**

Return a filtered array, based on the function given as the second argument.

* __arr__ _Array_ 
* __prop__ _String|Object|Function_ 
* __val__ _Mixed_ 
* __mode__ _String_ 

**Returns** _Array_ 


```javascript
//[{field1 :3, field2 : 2}, {field1 :3, field2 : 4}]
bbn.fn.filter([{field1 :3, field2 : 2}, {field1 :2, field2 : 3}, {field1 :3, field2 : 4}],(obj) =>{
  return obj.field1 === 3
});
```


### **bbn.fn.filterToConditions(filter, mode)**

* __filter__ _Object_ 
* __mode__ _String_ 

**Returns** _undefined_ 

### **bbn.fn.fori(fn, arr, max, min)**

* __fn__ _Function_ 
* __arr__ _Array_ 
* __max__ _Number_ 
* __min__ _Number_ 

**Returns** _*_ 

### **bbn.fn.forir(fn, arr, max, min)**

* __fn__ _Function_ 
* __arr__ _Array_ 
* __max__ _Number_ 
* __min__ _Number_ 

**Returns** _*_ 

### **bbn.fn.getProperty(obj, prop)**

* __obj__ _Object_ 
* __prop__ _String_ 

**Returns** _*_ 

### **bbn.fn.get_field(arr, prop, val, prop2)**

Allows to take the value of an object property within an array.

It occurs by providing arguments in addition to the array from which to search for a property and the value contained in the object to which we want to take the value of another property,
defined in the last argument of the function.

* __arr__ _Array_ 
* __prop__ _String|Function_ 
* __val__ _Number|String_ 
* __prop2__ _String_ 

**Returns** _undefined_ 


```javascript
//2
bbn.fn.get_field([{field :1, field2 : 2}, {field :2, field2 : 3}, {field :3, field2 : 4}],'field', 1, 'field2');
```



```javascript
//4
bbn.fn.get_field([{field :1, field2 : 2}, {field :2, field2 : 3}, {field :3, field2 : 4}],'field', 3, 'field2');
```


### **bbn.fn.get_row(arr, prop, val)**

Returns if the object sought is contained in the array finds it.

* __arr__ _Array_ 
* __prop__ _String_ 
* __val__ _String|Number_ 

**Returns** _Object|Boolean_ 


```javascript
//{field1: 2, field2: 3}
bbn.fn.get_row([{field1 :3, field2 : 2}, {field1 :2, field2 : 3}, {field1 :3, field2 : 4}],'field1',2);  * ```
```


### **bbn.fn.isSame(obj1, obj2)**

Checks if the two objects inserted with the arguments are identical in working order.

* __obj1__ _Object_ 
* __obj2__ _Object_ 

**Returns** _Boolean_ 


```javascript
//true
bbn.fn.isSame({field :1, field2 : 2}, {field :1, field2 : 2});
```


```javascript
//false
bbn.fn.isSame({field :1, field2 : 2}, {field :1, field2 : 3});
```

### **bbn.fn.iterate(obj, fn)**

* __obj__ _Object|Number_ 
* __fn__ _Function_ 

**Returns** _*_ 

### **bbn.fn.map(arr, fn, deepProp)**

* __arr__ _Array_ 
* __fn__ _Function_ 
* __deepProp__ _Boolean_ 

**Returns** _undefined_ 

### **bbn.fn.move(arr, fromIndex, toIndex)**

* __arr__ _Array_ 
* __fromIndex__ _Number_ 
* __toIndex__ _Number_ 

**Returns** _undefined_ 

### **bbn.fn.multiorder(arr, orders)**

Returns an array of objects sorted in ascending or descending order based on the object we pass as the second parameter,.

the latter must be composed with the property of the object to which you want to order in the array and the type of order.

* __arr__ _Array_ 
* __orders__ _Array_ 

**Returns** _undefined_ 


```javascript
//[{field1: 1, field2: 2},{field5: 3, field6: 4},{field3: 2, field4: 3}]
bbn.fn.multiorder([{field1 :1, field2 : 2}, {field3 :2, field4 : 3}, {field5 :3, field6 : 4}],{field3:'desc'})
```



```javascript
//[{field3: 2, field4: 3},{field1: 1, field2: 2},{field5: 3, field6: 4}]
bbn.fn.multiorder([{field1 :1, field2 : 2}, {field3 :2, field4 : 3}, {field5 :3, field6 : 4}],{field3:'asc'})
```


### **bbn.fn.numProperties()**

Returns the number of properties contained in the object.

* ____ _Object_ 

**Returns** _Number_ 


```javascript
//2
bbn.fn.numProperties({field :1, field2 : 2});
```


### **bbn.fn.order(arr., prop., dir.)**

Return an array of objects sorted in ascending or descending order according to the property we give as the second argument.

* __arr.__ _Array_ 
* __prop.__ _String_ 
* __dir.__ _String_ 

**Returns** _Array_ 


```javascript
//[{field5:5, field6:6},{field1:1, field2:2},{field3:3, field4:4}];
bbn.fn.order([{field1:1, field2:2},{field3:3, field4:4},{field5:5, field6:6}],'field6','asc');
```


### **bbn.fn.orderLike(to_order, based_on, prop, exclude)**

* __to_order__ _Array_ 
* __based_on__ _Array_ 
* __prop__ _String_ 
* __exclude__ _Boolean_ 

**Returns** _undefined_ 

### **bbn.fn.pickValue(arr)**

* __arr__ _Array_ 

**Returns** _undefined_ 

### **bbn.fn.removeEmpty(arr)**

Returns the filtered array, removing all elements deemed empty.

* __arr__ _Array_ 

**Returns** _Array_ 


```javascript
//[{field :1, field2 : 2}, {field :2, field2 : 3}, {field :3, field2 : 4}]
bbn.fn.removeEmpty([{field :1, field2 : 2},'', {field :2, field2 : 3},'', {field :3, field2 : 4},0,false]);
```


### **bbn.fn.removePrivateProp(obj, deep)**

* __obj__ _Object_ 
* __deep__ _Boolean_ 

**Returns** _undefined_ 

### **bbn.fn.search(arr, prop, val, mode)**

Search for the element of an array of objects by providing arguments in addition to the array to search for the property and the value that contains it.

If it finds it, it returns the index where the object is positioned in the array;
if it does not find what it requested then it will return -1.

* __arr__ _Array_ 
* __prop__ _String_ 
* __val__ _String|Number_ 
* __mode__ _String_ 

**Returns** _Number_ array index of the object found, otherwise -1


```javascript
//2
bbn.fn.search([{field1 :3, field2 : 2}, {field3 :2, field4 : 3}, {field1 :3, field4 : 4}],'field4',4);
```


### **bbn.fn.shortenObj(obj, max)**

* __obj__ _*_ 
* __max__ _*_ 

**Returns** _*_ 

### **bbn.fn.sum(arr, prop, filter, mode)**

Returns the sum of the values ​​contained.

in the various objects that have the property given in the second argument.

* __arr__ _Array_ 
* __prop__ _String_ 
* __filter__ _Object|Function_ 
* __mode__ _String_ 

**Returns** _Number_ 


```javascript
//4
bbn.fn.sum([{field1:1}, {field2:2}, {field1:3}],'field1');
```



```javascript
//7
bbn.fn.sum([{field1:1}, {field2:2}, {field1:3} , {field1:6}],'field1',(v) =>{
  return v.field1 != 3
});
```


### **bbn.fn.toCSV(arr, [','], [';'], ['"'])**

* __arr__ _Array_ 
* __[',']__ _String_ 
* __[';']__ _String_ 
* __['"']__ _String_ 

**Returns** _undefined_ 

### **bbn.fn.transform(oldO, newO)**

* __oldO__ _*_ 
* __newO__ _*_ 

**Returns** _*_ 

### **bbn.fn.unique(arr)**

* __arr__ _Array_ 

**Returns** _undefined_ 