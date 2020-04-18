# object.js

## Objects and arrays operations.

[arrayFromProp](#arrayFromProp)
[autoExtend](#autoExtend)
[clone](#clone)
[compare](#compare)
[compareConditions](#compareConditions)
[compareValues](#compareValues)
[count](#count)
[countProperties](#countProperties)
[diffObj](#diffObj)
[each](#each)
[extend](#extend)
[extendOut](#extendOut)
[filter](#filter)
[filterToConditions](#filterToConditions)
[fori](#fori)
[forir](#forir)
[getProperty](#getProperty)
[get_field](#get_field)
[get_row](#get_row)
[isSame](#isSame)
[iterate](#iterate)
[map](#map)
[move](#move)
[multiorder](#multiorder)
[numProperties](#numProperties)
[order](#order)
[orderLike](#orderLike)
[pickValue](#pickValue)
[removeEmpty](#removeEmpty)
[removePrivateProp](#removePrivateProp)
[search](#search)
[shortenObj](#shortenObj)
[sum](#sum)
[toCSV](#toCSV)
[unique](#unique)


- <a name="order"></a>**bbn.fn.order(arr., prop., dir.)**

  __Returns an array of objects sorted in ascending or descending order according to the property we give as the second argument.__

  * __arr.__ _Array_ 
  * __prop.__ _String_ 
  * __dir.__ _String_ 

  __Returns__ _Array_ 


```javascript
// [
//   {movie: "Donnie Darko", year: 2001},
//   {movie: "Brazil", year: 1985},
//   {movie: "Barry Lindon", year: 1976}
// ]
bbn.fn.order([
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Barry Lindon", year: 1976}
], 'year', 'DESC')
```


- <a name="compareValues"></a>**bbn.fn.compareValues(a, b, prop, dir)**

  __Compares the given objects on a given property and returns -1, 1, or 0 depending on their difference.__

  * __a__ _Object_ 
  * __b__ _Object_ 
  * __prop__ _String_ 
  * __dir__ _String_ 

  __Returns__ _Number_ 


```javascript
// Same value
// 0
bbn.fn.compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'value');
```



```javascript
// First value smaller than second
// -1
bbn.fn.compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'year');
```



```javascript
// First value greater than second
// 1
bbn.fn.compareValues({year: 2017, value: 2}, {year: 2016, value: 2}, 'year');
```



```javascript
// First value is undefined
// 1
bbn.fn.compareValues({year: 2017}, {year: 2016, value: 2}, 'value');
```

- <a name="unique"></a>**bbn.fn.unique(arr)**

  __Returns an array containing the unique values in the given array.__

  * __arr__ _Array_ 

  __Returns__ _Array_ 


```javascript
// ["a", "b", "c", "d"]
bbn.fn.unique(["a", "b", "a", "b", "a", "b", "c", "c", "d"]);
```


- <a name="getProperty"></a>**bbn.fn.getProperty(obj, prop)**

  __Returns the value that contains the property of the object passed as an argument.__

  * __obj__ _Object_ 
  * __prop__ _String_ 

  __Returns__ _*_ 


```javascript
//1
bbn.fn.getProperty({field: 1, field2: 2}, 'field');
```


- <a name="multiorder"></a>**bbn.fn.multiorder(arr, orders)**

  __Returns an array of objects sorted in ascending or descending order based on the object we pass as the second parameter,.__

  the latter must be composed with the property of the object to which you want to order in the array and the type of order.

  * __arr__ _Array_ 
  * __orders__ _Array_ 

  __Returns__ _undefined_ 


```javascript
//[{field1: 1, field2: 2}, {field5: 5, field6: 6}, {field3: 3, field4: 4}]
bbn.fn.multiorder([{field1: 1, field2: 2}, {field3: 3, field4: 4}, {field5: 5, field6: 6}], {field3: 'desc'});
```



```javascript
//[{field3: 3, field4: 4}, {field1: 1, field2: 2}, {field5: 5, field6: 6}]
bbn.fn.multiorder([{field1: 1, field2: 2}, {field3: 3, field4: 4}, {field5: 5, field6: 6}], {field3: 'asc'});
```


- <a name="orderLike"></a>**bbn.fn.orderLike(to_order, based_on, prop, exclude)**

  * __to_order__ _Array_ 
  * __based_on__ _Array_ 
  * __prop__ _String_ 
  * __exclude__ _Boolean_ 

  __Returns__ _undefined_ 

- <a name="move"></a>**bbn.fn.move(arr, fromIndex, toIndex)**

  __Allows the movement of the elements of an array.__

  All of this is possible by giving the array you want to reorder as the first argument,
the node you want to move and the third is where you want to position it.

  * __arr__ _Array_ 
  * __fromIndex__ _Number_ 
  * __toIndex__ _Number_ 

  __Returns__ _Array_ 


```javascript
//['field1', 'field3', 'field2', 'field4']
bbbn.fn.move(['field1', 'field2', 'field3', 'field4'], 1, 2);
```

 @example
```javascript
//['field4', 'field1', 'field2', 'field3"]
bbn.fn.move(['field1', 'field2','field3', 'field4'], 3, 0);
```


- <a name="compare"></a>**bbn.fn.compare(v1, v2, mode)**

  __Performs a comparison between two values ​​passing as the third argument the type of comparison to be performed,.__

  using the terms.

  * __v1__ _String|Number_ 
  * __v2__ _String|Number_ 
  * __mode__ _String_ 

  __Returns__ _Boolean_ 


```javascript
//false
bbn.fn.compare('field1', 'field2', 'eq');
```



```javascript
//true
bbn.fn.compare('field1', 'field2', 'neq');
```



```javascript
//true
bbn.fn.compare(3, 1, '>');
```



```javascript
//true
bbn.fn.compare(123, 3, 'contain');
```


- <a name="search"></a>**bbn.fn.search(arr, prop, val, mode)**

  __Search for the element of an array of objects by providing arguments in addition to the array to search for the property and the value that contains it.__

  If it finds it, it returns the index where the object is positioned in the array;
if it does not find what it requested then it will return -1.

  * __arr__ _Array_ 
  * __prop__ _String_ 
  * __val__ _String|Number_ 
  * __mode__ _String_ 

  __Returns__ _Number_ array index of the object found, otherwise -1


```javascript
//2
bbn.fn.search([{field1: 1, field2: 2}, {field3: 3, field4 : 4}, {field5: 5, field6: 6}], 'field5', 5);
```


- <a name="count"></a>**bbn.fn.count(arr, prop, val, mode)**

  __Count how many objects contained in the array have the same property and value.__

  * __arr__ _Array_ 
  * __prop__ _String_ 
  * __val__ _String|Number_ 
  * __mode__ _String_ 

  __Returns__ _Number_ 


```javascript
//1
bbn.fn.count([{field1: 3, field2: 2}, {field3: 3, field4: 4}, {field1: 3, field4: 4}], 'field1', 3);
```


- <a name="sum"></a>**bbn.fn.sum(arr, prop, filter, mode)**

  __Returns the sum of the values ​​contained.__

  in the various objects that have the property given in the second argument.

  * __arr__ _Array_ 
  * __prop__ _String_ 
  * __filter__ _Object|Function_ 
  * __mode__ _String_ 

  __Returns__ _Number_ 


```javascript
//4
bbn.fn.sum([{field1: 1}, {field2: 2}, {field1: 3}], 'field1');
```



```javascript
//7
bbn.fn.sum([{field1: 1}, {field2: 2}, {field1: 3}, {field1: 6}], 'field1', v => {
  return v.field1 != 3;
});
```


- <a name="compareConditions"></a>**bbn.fn.compareConditions(data, filter)**

  __Apply the conditions defined in the filter by querying the specified data object.__

  * __data__ _Object_ 
  * __filter__ _Object_ 

  __Returns__ _undefined_ 


```javascript
//true
bbn.fn.compareConditions({field1: 5, field2: 'value2'}, {
 conditions: [{field: 'field1', operator: '<=', value: 8}],
 logic:'AND'
});
```


- <a name="filterToConditions"></a>**bbn.fn.filterToConditions(filter, mode)**

  __Converts the given object 'filter' to a valid format of condition.__

  * __filter__ _Object_ 
  * __mode__ _String_ 

  __Returns__ _Object_ 


```javascript
//{conditions:[{field: "value", operator: ">", value: 3}], logic: "AND"}
bbn.fn.filterToConditions({value:3},'>');
```


- <a name="filter"></a>**bbn.fn.filter(arr, prop, val, mode)**

  __Returns a filtered array, based on the function given as the second argument.__

  * __arr__ _Array_ 
  * __prop__ _String|Object|Function_ 
  * __val__ _Mixed_ 
  * __mode__ _String_ 

  __Returns__ _Array_ 


```javascript
//[{field1: 3, field2: 4}]
bbn.fn.filter([{field1: 1, field2: 2}, {field1: 2, field2: 3}, {field1: 3, field2: 4}], obj => {
  return obj.field1 === 3;
});
```


- <a name="get_row"></a>**bbn.fn.get_row(arr, prop, val)**

  __Returns if the object sought is contained in the array finds it.__

  * __arr__ _Array_ 
  * __prop__ _String_ 
  * __val__ _String|Number_ 

  __Returns__ _Object|Boolean_ 


```javascript
//{field1: 2, field2: 3}
bbn.fn.get_row([{field1: 1, field2: 2}, {field1: 2, field2: 3}, {field1: 3, field2: 4}], 'field1', 2);
```


- <a name="get_field"></a>**bbn.fn.get_field(arr, prop, val, prop2)**

  __Allows to take the value of an object property within an array.__

  It occurs by providing arguments in addition to the array from which to search for a property and the value contained in the object to which we want to take the value of another property,
defined in the last argument of the function.

  * __arr__ _Array_ 
  * __prop__ _String|Function_ 
  * __val__ _Number|String_ 
  * __prop2__ _String_ 

  __Returns__ _undefined_ 


```javascript
//2
bbn.fn.get_field([{field: 1, field2: 2}, {field: 2, field2: 3}, {field: 3, field2: 4}], 'field', 1, 'field2');
```



```javascript
//4
bbn.fn.get_field([{field: 1, field2: 2}, {field :2, field2: 3}, {field:3, field2: 4}], 'field', 3, 'field2');
```


- <a name="countProperties"></a>**bbn.fn.countProperties(obj)**

  __Returns the number of properties contained in the object.__

  * __obj__ _Object_ 

  __Returns__ _undefined_ 


```javascript
//2
bbn.fn.countProperties({field:1, field2: 2});
```


- <a name="numProperties"></a>**bbn.fn.numProperties()**

  __Returns the number of properties contained in the object.__

  * ____ _Object_ 

  __Returns__ _Number_ 


```javascript
//2
bbn.fn.numProperties({field: 1, field2: 2});
```


- <a name="removePrivateProp"></a>**bbn.fn.removePrivateProp(obj, deep)**

  __Removes private properties from the given object.__

  * __obj__ _Object_ 
  * __deep__ _Boolean_ 

  __Returns__ _undefined_ 


```javascript
//{field:1, field1:'value1'}
bbn.fn.removePrivateProp({field: 1, field1: 'value1', _field2: 'value2'});
```


- <a name="isSame"></a>**bbn.fn.isSame(obj1, obj2)**

  __Checks if the two objects inserted with the arguments are identical in working order.__

  * __obj1__ _Object_ 
  * __obj2__ _Object_ 

  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isSame({field: 1, field2: 2}, {field: 1, field2: 2});
```


```javascript
//false
bbn.fn.isSame({field: 1, field2: 2}, {field: 1, field2: 3});
```

- <a name="extend"></a>**bbn.fn.extend()**

  __returns a single element by extending two or more elements.__

  If at the end we pass the value true as an argument it will make the extension in depth.


  __Returns__ _undefined_ 


```javascript
//{field1: 1, field2: 2, field3: 3}
bbn.fn.extend({field1: 1}, {field2: 2}, {field3: 3});
```


- <a name="extendOut"></a>**bbn.fn.extendOut()**

  __Merges the contents of two or more objects together into the first object.__

  Doesn't overwrite the property if defined in the two objects given.


  __Returns__ _undefined_ 


```javascript
//{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
```


- <a name="autoExtend"></a>**bbn.fn.autoExtend(namespace, obj)**

  __Auto extends the bbn object by passing the namespace and the object it will contain.__

  * __namespace__ _String_ 
  * __obj__ _Object_ 

  __Returns__ _undefined_ 

- <a name="removeEmpty"></a>**bbn.fn.removeEmpty(arr)**

  __Returns the filtered array, removing all elements deemed empty.__

  * __arr__ _Array_ 

  __Returns__ _Array_ 


```javascript
//[{field: 1, field2: 2}, {field: 2, field2: 3}, {field: 3, field2 : 4}]
bbn.fn.removeEmpty([{field: 1, field2: 2}, '', {field: 2, field2: 3}, '',  {field:3, field2:  4}, 0, false]);
```


- <a name="arrayFromProp"></a>**bbn.fn.arrayFromProp(arr, prop)**

  __Returns an array of the same size made of the given property's values.__

  * __arr__ _Array_ 
  * __prop__ _String_ 

  __Returns__ _Array_ 


```javascript
// [1985, 2001, 1976]
bbn.fn.arrayFromProp([
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Barry Lindon", year: 1976}
], 'year');
```


- <a name="pickValue"></a>**bbn.fn.pickValue(arr)**

  __Returns a random item from the given array.__

  * __arr__ _Array_ 

  __Returns__ _*_ 


```javascript
//"field2"
bbn.fn.pickValue(['field1', 'field2', 'field3']);
```


- <a name="diffObj"></a>**bbn.fn.diffObj(obj1, obj2, unchanged, notRoot)**

  __Returns an object containing the differences between the given objects.__

  * __obj1__ _Object_ 
  * __obj2__ _Object_ 
  * __unchanged__ _String_ 
  * __notRoot__ _Boolean_ 

  __Returns__ _Object_ 


```javascript
//{field2: {type: 'updated', data: 2, newData: 3}, field3: {type: 'created', data: false}}
bbn.fn.diffObj({field: 'value1', field2: 2}, {field: 'value1', field2: 3, field3: false});
```



```javascript
//{field: {type: 'unchanged', data: 'value1', newData: 'value1'}, field2: {type: 'updated', data: 2, newData: 3}, field3: {type: 'created', data: false}}
bbn.fn.diffObj({field: 'value1', field2: 2}, {field: 'value1', field2: 3, field3: false}, 'unchanged');
```


- <a name="fori"></a>**bbn.fn.fori(fn, arr, max, min)**

  * __fn__ _Function_ 
  * __arr__ _Array_ 
  * __max__ _Number_ 
  * __min__ _Number_ 

  __Returns__ _*_ 

- <a name="forir"></a>**bbn.fn.forir(fn, arr, max, min)**

  * __fn__ _Function_ 
  * __arr__ _Array_ 
  * __max__ _Number_ 
  * __min__ _Number_ 

  __Returns__ _*_ 

- <a name="each"></a>**bbn.fn.each(arr, fn)**

  __Performs an iterative loop of an array or object given to it as a first argument and as a second argument a function that accepts 2 arguments,.__

  value and index.

  * __arr__ _Array_ 
  * __fn__ _Function_ 

  __Returns__ _*_ 


```javascript
//4
let num = 0;
bbn.fn.each([{field1: 1, field2: 2}, {field3: 3, field4: 4}, {field5: 5, field6: 6}], (val,idx) => {
  if ( val.field3 !== undefined ){
    num = val.field3 + idx;
  }
})
```


- <a name="iterate"></a>**bbn.fn.iterate(obj, fn)**

  __Scroll through the properties of an object by executing a function for each corresponding element.__

  * __obj__ _Object|Number_ 
  * __fn__ _Function_ 

  __Returns__ _*_ 


```javascript
//["value1", 2]
let arr = [];
bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
  arr.push(value);
});
```


- <a name="clone"></a>**bbn.fn.clone(obj)**

  __Returns the clone argument removing the observability.__

  * __obj__ _mixed_ 

  __Returns__ _undefined_ 


```javascript
//{field: 1}
bbn.fn.clone({field: 1});
```


- <a name="map"></a>**bbn.fn.map(arr, fn, deepProp)**

  __Returns a new array generated by the execution of a function for each item of the given array.__

  * __arr__ _Array_ 
  * __fn__ _Function_ 
  * __deepProp__ _Boolean_ 

  __Returns__ _Array_ 


```javascript
//[2, 3, 4, 5]
bbn.fn.map([1, 2, 3, 4], a => {
  return a++;
  return a;
});
```


- <a name="toCSV"></a>**bbn.fn.toCSV(arr, [','], [';'], ['"'])**

  __Returns a string exportable into a csv from the given array.__

  * __arr__ _Array_ 
  * __[',']__ _String_ 
  * __[';']__ _String_ 
  * __['"']__ _String_ 

  __Returns__ _String_ 


```javascript
// ""a","b","c"";
bbn.fn.toCSV([['a', 'b', 'c']]);
```


- <a name="shortenObj"></a>**bbn.fn.shortenObj(obj, max)**

  __Allows the abbreviation of all the strings contained in the object properties or element in a array.__

  * __obj__ _Object|Array_ 
  * __max__ _Number_ 

  __Returns__ _Object|Array_ 


```javascript
//{field: "v...", field2: 2, field3: "v...", field4: 4, field5: 5}
bbn.fn.shortenObj({field: 'value1', field2: 2, field3: 'value3', field4: 4, field5: 5}, 1);
```



```javascript
//["va...", 2, "va...", 4, 5]
bbn.fn.shortenObj(['value1', 2, 'value3', 4, 5], 2);
```
