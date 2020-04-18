# object.js

## Objects and arrays operations.

<a name="bbn_top"></a>[arrayFromProp](#arrayFromProp)  
[autoExtend](#autoExtend)  
[clone](#clone)  
[compare](#compare)  
[compareConditions](#compareConditions)  
[compareValues](#compareValues)  
[count](#count)  
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
[pickValue](#pickValue)  
[removeEmpty](#removeEmpty)  
[removePrivateProp](#removePrivateProp)  
[search](#search)  
[shortenObj](#shortenObj)  
[sum](#sum)  
[toCSV](#toCSV)  
[unique](#unique)  


- <a name="unique"></a>**bbn.fn.unique(arr)** [Back to top](#bbn_top)

  __Removes duplicate values from an array.__

  Takes an input array and returns a new array without duplicate values.
*.

  * __arr__ _Array_ 

  __Returns__ _Array_ 


```javascript
bbn.fn.unique(["a", "b", "a", "b", "a", "b", "c", "c", "d"]);
// ["a", "b", "c", "d"]
```

- <a name="getProperty"></a>**bbn.fn.getProperty(obj, prop)** [Back to top](#bbn_top)

  __Returns the value of the given property from the given object.__

  Looks for the given property in the given object, accepting dot (.) separator 
for deep property access, and returns its value if found and undefined otherwise.
*.

  * __obj__ _Object_ 
  * __prop__ _String_ 

  __Returns__ _*_ The property's value or undefined


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

- <a name="compareValues"></a>**bbn.fn.compareValues(a, b, prop, dir)** [Back to top](#bbn_top)

  __Compares the given property in the given objects and returns -1, 1, or 0 depending on their difference.__

  *.

  * __a__ _Object_ First object for comparison
  * __b__ _Object_ Second object for comparison
  * __prop__ _String_ Property to compare
  * __dir__ _String_ Direction of comparison (desc or asc by default)

  __Returns__ _Number_ Always either -1, 1, or 0


```javascript
// Same value
bbn.fn.compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'value');
// 0
```


```javascript
// First value smaller than second
bbn.fn.compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'year');
// -1
```


```javascript
// First value greater than second
bbn.fn.compareValues({year: 2017, value: 2}, {year: 2016, value: 2}, 'year');
// 1
```


```javascript
// First value is undefined
bbn.fn.compareValues({year: 2017}, {year: 2016, value: 2}, 'value');
// 1
```

- <a name="order"></a>**bbn.fn.order(arr, prop, dir)** [Back to top](#bbn_top)

  __Sorts an array of objects based on the given property.__

  The resulting array is the same object, the order is based on compareValues function.

  * __arr__ _Array_ The array to order
  * __prop__ _String_ The property on which the order is based
  * __dir__ _String_ The direction of the order (desc or asc by default)

  __Returns__ _Array_ 


```javascript
bbn.fn.order([
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Barry Lindon", year: 1976}
], 'year', 'DESC')
// [
//   {movie: "Donnie Darko", year: 2001},
//   {movie: "Brazil", year: 1985},
//   {movie: "Barry Lindon", year: 1976}
// ]
```

- <a name="multiorder"></a>**bbn.fn.multiorder(arr, orders)** [Back to top](#bbn_top)

  __Sorts an array of objects based on a set of properties.__

  The resulting array is the same object, the order is based on compareValues function
applied for each given properties in orders argument.
*.

  * __arr__ _Array_ 
  * __orders__ _Array_ 

  __Returns__ _undefined_ 


```javascript
bbn.fn.multiorder([
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Out of Africa", year: 1985},
  {movie: "Ran", year: 1985},
  {movie: "Back to the future", year: 1985},
  {movie: "Barry Lindon", year: 1976}
], {
  year: "desc",
  movie: "asc"
});
// [
//   {movie: "Donnie Darko", year: 2001},
//   {movie: "Back to the future", year: 1985},
//   {movie: "Brazil", year: 1985},
//   {movie: "Out of Africa", year: 1985},
//   {movie: "Ran", year: 1985},
//   {movie: "Barry Lindon", year: 1976}
// ]
```

- <a name="move"></a>**bbn.fn.move(arr, fromIndex, toIndex)** [Back to top](#bbn_top)

  __Moves an element of an array to a different position.__

  *
The same array is returned, with its elements reordered according to the executed movement.
*.

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
bbn.fn.move(['field1', 'field2','field3', 'field4'], 3, 0);
// ['field4', 'field1', 'field2', 'field3"]
```

- <a name="compare"></a>**bbn.fn.compare(v1, v2, mode)** [Back to top](#bbn_top)

  __Performs a comparison between two values based on the given operator and returns a boolean.__

  It is internally used by all the filtering functions; the available operators are:  
  1. *===*, *=*, *equal*, *eq*, *is*, which stand for **===**  
  1. *!==*, *notequal*, *neq*, *isnot*, which stand for **!==**
  1. *!=*, *different*, which stand for **!=**
  1. *contains*, *contain*, *icontains*, *icontain*
  1. *starts*, *start*
  1. *startswith*, *startsi*, *starti*, *istarts*, *istart*
  1. *endswith*, *endsi*, *endi*, *iends*, *iend*
  1. *like*
  1. *gt*, *>*, which stand for **>**
  1. *lt*, *<*, which stand for **<**
  1. *gte*, *>=*, which stand for **>=**
  1. *lte*, *<=*, which stand for **<=**
  1. *isnull*, which stands for **=== null**
  1. *isnotnull*, which stands for **!== null**
  1. *isempty*, which stands for **=== ''**
  1. *isnotempty*, which stands for **!== ''**  
The defaut operator (if none is given) is **\==\** .
*.

  * __v1__ _String|Number_ 
  * __v2__ _String|Number_ 
  * __mode__ _String_ 

  __Returns__ _Boolean_ True if the values' comparisaon comply with the operator, false otherwise


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

- <a name="search"></a>**bbn.fn.search(arr, prop, val, mode)** [Back to top](#bbn_top)

  __Retrieves the index of the array's first element corresponding to the given filter.__

  *
If it finds it, it returns the index where the object is positioned in the array;
if it does not find what it requested then it will return -1.
*.

  * __arr__ _Array_ 
  * __prop__ _String_ 
  * __val__ _String|Number_ 
  * __mode__ _String_ 

  __Returns__ _Number_ array index of the object found, otherwise -1


```javascript
//2
bbn.fn.search([{field1: 1, field2: 2}, {field3: 3, field4 : 4}, {field5: 5, field6: 6}], 'field5', 5);
```
*

- <a name="count"></a>**bbn.fn.count(arr, prop, val, mode)** [Back to top](#bbn_top)

  __Counts how many objects contained in the array correspond to the given filter.__

  The second argument can be a string and in this case it will look for all the elements
with the property which has the value equal to val; but it can also be an object with a 
whole filter as defined in bbn.fn.filter.
*.

  * __arr__ _Array_ 
  * __prop__ _String|Object_ 
  * __val__ _String|Number_ 
  * __mode__ _String_ 

  __Returns__ _Number_ 


```javascript
bbn.fn.count([{field1: 3, field2: 2}, {field3: 3, field4: 4}, {field1: 3, field4: 4}], 'field1', 3);
```

- <a name="sum"></a>**bbn.fn.sum(arr, prop, filter, mode)** [Back to top](#bbn_top)

  __Returns the sum of the values ​​contained.__

  in the various objects that have the property given in the second argument.
*.

  * __arr__ _Array_ 
  * __prop__ _String_ 
  * __filter__ _Object|Function_ 
  * __mode__ _String_ 

  __Returns__ _Number_ 


```javascript
//4
bbn.fn.sum([{field1: 1}, {field2: 2}, {field1: 3}], 'field1');
```
*


```javascript
//7
bbn.fn.sum([{field1: 1}, {field2: 2}, {field1: 3}, {field1: 6}], 'field1', v => {
  return v.field1 != 3;
});
```
*

- <a name="filter"></a>**bbn.fn.filter(arr, prop, val, mode)** [Back to top](#bbn_top)

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
*

- <a name="get_row"></a>**bbn.fn.get_row(arr, prop, val)** [Back to top](#bbn_top)

  __Returns if the object sought is contained in the array finds it.__

  *.

  * __arr__ _Array_ 
  * __prop__ _String_ 
  * __val__ _String|Number_ 

  __Returns__ _Object|Boolean_ 


```javascript
//{field1: 2, field2: 3}
bbn.fn.get_row([{field1: 1, field2: 2}, {field1: 2, field2: 3}, {field1: 3, field2: 4}], 'field1', 2);
```
*

- <a name="get_field"></a>**bbn.fn.get_field(arr, prop, val, field)** [Back to top](#bbn_top)

  __Allows to take the value of an object property within an array.__

  *
It occurs by providing arguments in addition to the array from which to search for a property and the value contained in the object to which we want to take the value of another property,
defined in the last argument of the function.
*.

  * __arr__ _Array_ The source array
  * __prop__ _String|Object_ The property to check against or a filter object.
  * __val__ _*_ The value of the property to check (if prop is a string)
  * __field__ _String_ The property from which the value is returned

  __Returns__ _undefined_ 


```javascript
//2
bbn.fn.get_field([{field: 1, field2: 2}, {field: 2, field2: 3}, {field: 3, field2: 4}], 'field', 1, 'field2');
```


```javascript
//4
bbn.fn.get_field([{field: 1, field2: 2}, {field :2, field2: 3}, {field:3, field2: 4}], 'field', 3, 'field2');
```

- <a name="numProperties"></a>**bbn.fn.numProperties(obj)** [Back to top](#bbn_top)

  __Returns the number of properties contained in the object.__

  Only takes into account the own properties - not the inherited ones.
*.

  * __obj__ _Object_ The object to analyze

  __Returns__ _Number_ The number of properties


```javascript
//2
bbn.fn.numProperties({field: 1, field2: 2});
```

- <a name="removePrivateProp"></a>**bbn.fn.removePrivateProp(obj, deep)** [Back to top](#bbn_top)

  __Removes private properties from the given object.__

  * __obj__ _Object_ 
  * __deep__ _Boolean_ 

  __Returns__ _undefined_ 


```javascript
//{field:1, field1:'value1'}
bbn.fn.removePrivateProp({field: 1, field1: 'value1', _field2: 'value2'});
```
*

- <a name="isSame"></a>**bbn.fn.isSame(obj1, obj2)** [Back to top](#bbn_top)

  __Checks if the two objects inserted with the arguments are identical in working order.__

  *.

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

- <a name="compareConditions"></a>**bbn.fn.compareConditions(data, filter)** [Back to top](#bbn_top)

  __Apply the conditions defined in the filter by querying the specified data object.__

  *.

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
*

- <a name="filterToConditions"></a>**bbn.fn.filterToConditions(filter, mode)** [Back to top](#bbn_top)

  __Converts the given object 'filter' to a valid format of condition.__

  The resulting format will comply with bbn databases functions and complex filters applied to
bbn-vue list components.
*.

  * __filter__ _Object_ 
  * __mode__ _String_ 

  __Returns__ _Object_ 


```javascript
bbn.fn.filterToConditions({value:3},'>');
//{conditions:[{field: "value", operator: ">", value: 3}], logic: "AND"}
```
*

- <a name="extend"></a>**bbn.fn.extend()** [Back to top](#bbn_top)

  __returns a single element by extending two or more elements.__

  If at the end we pass the value true as an argument it will make the extension in depth
*.


  __Returns__ _undefined_ 


```javascript
//{field1: 1, field2: 2, field3: 3}
bbn.fn.extend({field1: 1}, {field2: 2}, {field3: 3});
```
*

- <a name="extendOut"></a>**bbn.fn.extendOut()** [Back to top](#bbn_top)

  __Merges the contents of two or more objects together into the first object.__

  Doesn't overwrite the property if defined in the two objects given.
*.


  __Returns__ _undefined_ 


```javascript
//{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
```
*

- <a name="autoExtend"></a>**bbn.fn.autoExtend(namespace, obj)** [Back to top](#bbn_top)

  __Auto extends the bbn object by passing the namespace and the object it will contain.__

  * __namespace__ _String_ 
  * __obj__ _Object_ 

  __Returns__ _undefined_ 

- <a name="removeEmpty"></a>**bbn.fn.removeEmpty(arr)** [Back to top](#bbn_top)

  __Returns the filtered array, removing all elements deemed empty.__

  *.

  * __arr__ _Array_ 

  __Returns__ _Array_ 


```javascript
//[{field: 1, field2: 2}, {field: 2, field2: 3}, {field: 3, field2 : 4}]
bbn.fn.removeEmpty([{field: 1, field2: 2}, '', {field: 2, field2: 3}, '',  {field:3, field2:  4}, 0, false]);
```
*

- <a name="arrayFromProp"></a>**bbn.fn.arrayFromProp(arr, prop)** [Back to top](#bbn_top)

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
*

- <a name="pickValue"></a>**bbn.fn.pickValue(arr)** [Back to top](#bbn_top)

  __Returns a random item from the given array.__

  * __arr__ _Array_ 

  __Returns__ _*_ 


```javascript
//"field2"
bbn.fn.pickValue(['field1', 'field2', 'field3']);
```
*

- <a name="diffObj"></a>**bbn.fn.diffObj(obj1, obj2, unchanged, notRoot)** [Back to top](#bbn_top)

  __Returns an object containing the differences between the given objects.__

  *.

  * __obj1__ _Object_ 
  * __obj2__ _Object_ 
  * __unchanged__ _String_ 
  * __notRoot__ _Boolean_ 

  __Returns__ _Object_ 


```javascript
//{field2: {type: 'updated', data: 2, newData: 3}, field3: {type: 'created', data: false}}
bbn.fn.diffObj({field: 'value1', field2: 2}, {field: 'value1', field2: 3, field3: false});
```
*


```javascript
//{field: {type: 'unchanged', data: 'value1', newData: 'value1'}, field2: {type: 'updated', data: 2, newData: 3}, field3: {type: 'created', data: false}}
bbn.fn.diffObj({field: 'value1', field2: 2}, {field: 'value1', field2: 3, field3: false}, 'unchanged');
```
*

- <a name="fori"></a>**bbn.fn.fori(fn, arr, max, min)** [Back to top](#bbn_top)

  * __fn__ _Function_ 
  * __arr__ _Array_ 
  * __max__ _Number_ 
  * __min__ _Number_ 

  __Returns__ _*_ 

- <a name="forir"></a>**bbn.fn.forir(fn, arr, max, min)** [Back to top](#bbn_top)

  * __fn__ _Function_ 
  * __arr__ _Array_ 
  * __max__ _Number_ 
  * __min__ _Number_ 

  __Returns__ _*_ 

- <a name="each"></a>**bbn.fn.each(arr, fn)** [Back to top](#bbn_top)

  __Performs an iterative loop of an array or object given to it as a first argument and as a second argument a function that accepts 2 arguments,.__

  value and index.
*.

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
*

- <a name="iterate"></a>**bbn.fn.iterate(obj, fn)** [Back to top](#bbn_top)

  __Scroll through the properties of an object by executing a function for each corresponding element.__

  *.

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
*

- <a name="clone"></a>**bbn.fn.clone(obj)** [Back to top](#bbn_top)

  __Returns the clone argument removing the observability.__

  *.

  * __obj__ _mixed_ 

  __Returns__ _undefined_ 


```javascript
//{field: 1}
bbn.fn.clone({field: 1});
```
*

- <a name="map"></a>**bbn.fn.map(arr, fn, deepProp)** [Back to top](#bbn_top)

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
*

- <a name="toCSV"></a>**bbn.fn.toCSV(arr, [','], [';'], ['"'])** [Back to top](#bbn_top)

  __Returns a string exportable into a csv from the given array.__

  *.

  * __arr__ _Array_ 
  * __[',']__ _String_ 
  * __[';']__ _String_ 
  * __['"']__ _String_ 

  __Returns__ _String_ 


```javascript
// ""a","b","c"";
bbn.fn.toCSV([['a', 'b', 'c']]);
```
*

- <a name="shortenObj"></a>**bbn.fn.shortenObj(obj, max)** [Back to top](#bbn_top)

  __Allows the abbreviation of all the strings contained in the object properties or element in a array.__

  *.

  * __obj__ _Object|Array_ 
  * __max__ _Number_ 

  __Returns__ _Object|Array_ 


```javascript
//{field: "v...", field2: 2, field3: "v...", field4: 4, field5: 5}
bbn.fn.shortenObj({field: 'value1', field2: 2, field3: 'value3', field4: 4, field5: 5}, 1);
```
*


```javascript
//["va...", 2, "va...", 4, 5]
bbn.fn.shortenObj(['value1', 2, 'value3', 4, 5], 2);
```
*