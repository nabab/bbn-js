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
[getField](#getField)  
[getProperty](#getProperty)  
[getRow](#getRow)  
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


### <a name="unique"></a>bbn.fn.unique(arr)

  __Removes duplicate values from an array.__

  Takes an input array and returns a new array without duplicate values.

  * __arr__ _Array_ 

  __Returns__ _Array_ 


```javascript
bbn.fn.unique(["a", "b", "a", "b", "a", "b", "c", "c", "d"]);
// ["a", "b", "c", "d"]
```
[Back to top](#bbn_top)  

### <a name="getProperty"></a>bbn.fn.getProperty(obj, prop)

  __Returns the value of the given property from the given object.__

  Looks for the given property in the given object, accepting dot (.) separator 
for deep property access, and returns its value if found and undefined otherwise.

  * __obj__ _Object_ 
  * __prop__ _String_ 

  __Returns__ _Mixed_ The property's value or undefined


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
[Back to top](#bbn_top)  

### <a name="compareValues"></a>bbn.fn.compareValues(a, b, prop, [dir=asc])

  __Compares the given property in the given objects and returns -1, 1, or 0 depending on their difference.__

  * __a__ _Object_ First object for comparison
  * __b__ _Object_ Second object for comparison
  * __prop__ _String_ Property to compare
  * __[dir=asc]__ _String_ Direction of comparison (desc or asc by default)

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
[Back to top](#bbn_top)  

### <a name="order"></a>bbn.fn.order(arr, prop, [dir=asc])

  __Sorts an array of objects based on the given property.__

  The resulting array is the same object, the order is based on compareValues function.

  * __arr__ _Array_ The array to order
  * __prop__ _String_ The property on which the order is based
  * __[dir=asc]__ _String_ The direction of the order (desc or asc by default)

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
[Back to top](#bbn_top)  

### <a name="multiorder"></a>bbn.fn.multiorder(arr, orders)

  __Sorts an array of objects based on a set of properties.__

  The resulting array is the same object, the order is based on compareValues function
applied for each given properties in orders argument.

  * __arr__ _Array_ The array to order
  * __orders__ _Array|Object_ The properties and directions (asc, desc) to order by

  __Returns__ _Array_ The same array (arr), ordered differently


```javascript
let ar = [
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Out of Africa", year: 1985},
  {movie: "Ran", year: 1985},
  {movie: "Back to the future", year: 1985},
  {movie: "Barry Lindon", year: 1976}
];
bbn.fn.multiorder(ar, [
  {field: "year", dir: "desc"},
  {field: "movie", dir: "asc"}
]);
// [
//   {movie: "Donnie Darko", year: 2001},
//   {movie: "Back to the future", year: 1985},
//   {movie: "Brazil", year: 1985},
//   {movie: "Out of Africa", year: 1985},
//   {movie: "Ran", year: 1985},
//   {movie: "Barry Lindon", year: 1976}
// ]
bbn.fn.multiorder(ar, {year: "desc", movie: "asc"});
// Same result with object shortcut
```
[Back to top](#bbn_top)  

### <a name="move"></a>bbn.fn.move(arr, fromIndex, toIndex)

  __Moves an element to a different position within the given array.__

  The same array is returned, with its elements reordered according to the executed movement.

  * __arr__ _Array_ The array
  * __fromIndex__ _Number_ The index of the element to move
  * __toIndex__ _Number_ The future index of the element

  __Returns__ _Array_ The same array, with elements repositionned.


```javascript
bbbn.fn.move([
  {movie: "Brazil", year: 1985},
  {movie: "Donnie Darko", year: 2001},
  {movie: "Out of Africa", year: 1985}
], 1, 2);
// [
//   {movie: "Brazil", year: 1985},
//   {movie: "Out of Africa", year: 1985},
//   {movie: "Donnie Darko", year: 2001}
// ]
```
 @example
```javascript
bbn.fn.move([1, 2, 3, 4], 3, 0);
// [4, 1, 2, 3]
```
[Back to top](#bbn_top)  

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
[Back to top](#bbn_top)  

### <a name="search"></a>bbn.fn.search(arr, prop, val, operator, startFrom)

  __Retrieves the index of the array's first element corresponding to the given filter.__

  Returns -1 if the element is not found. If the second parameter is an object or function 
for filtering as defined in bbn.fn.filter, the remaining parameters will be shifted to the
left, i.e. val becomes operator, and operator startFrom. And if operator is a number, its value will
be given to startFrom and operator will be undefined. The filter object can be complex with different
operators (as seen in bbn.fn.compare) and logics (AND/OR), and infinitely nested, of this form:
```javascript
{
  logic: "AND",
  conditions: [
    {
      field: "prop1",
      operator: "eq"
      value: "value1"
    }, {
      logic: "OR",
      conditions: [
        {
           field: "prop2",
           operator: "eq",
           value: 1
        }. {
           field: "prop2",
           operator: "eq",
           value: 2
        }
      ]
    }
  ]
}
```
This way of managing the arguments is used in all the filtering functions.

  * __arr__ _Array_ The subject array
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in the bbn.fn.compare
  * __startFrom__ _Number_ The index from which the search should start

  __Returns__ _Number_ The index if found, otherwise -1


```javascript
let ar = [
  {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
  {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
  {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
  {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
];
bbn.fn.search(ar, "id", 256);
// 2
bbn.fn.search(ar, {director: "Steven Spielberg"});
// 0
bbn.fn.search(ar, {year: 1975, director: "Steven Spielberg"});
// 3
bbn.fn.search(ar, {director: "Steven Spielberg"}, 1);
// 3
// Complex filters
bbn.fn.search(ar, {
  logic: "AND",
  conditions: [
    {
      field: "director",
      operator: "eq",
      value: "Steven Spielberg"
    }, {
      logic: "OR",
      conditions: [
        {
           field: "year",
           operator: "eq",
           value: 1974
        }, {
           field: "year",
           operator: "eq",
           value: 1975
        }
      ]
    }
  ]
});
// 3
```
[Back to top](#bbn_top)  

### <a name="count"></a>bbn.fn.count(arr, prop, val, operator)

  __Counts the number of objects matching the given filter in the given array.__

  The arguments follow the same scheme as bbn.fn.search.

  * __arr__ _Array_ The subject array
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in the bbn.fn.compare

  __Returns__ _Number_ 


```javascript
let ar = [
  {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
  {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
  {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
  {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
];
bbn.fn.count(ar, "id", 256);
// 1
bbn.fn.count(ar, {director: "Steven Spielberg"});
// 2
bbn.fn.search(ar, "year", 1975, ">");
// 3
// Complex filters: all the movies from Spielberg between 1974 and 1980
bbn.fn.search(ar, {
  logic: "AND",
  conditions: [
    {
      field: "director",
      operator: "eq",
      value: "Steven Spielberg"
    }, {
      logic: "AND",
      conditions: [
        {
           field: "year",
           operator: ">=",
           value: 1974
        }, {
           field: "year",
           operator: "<=",
           value: 1980
        }
      ]
    }
  ]
});
// 1
```
[Back to top](#bbn_top)  

### <a name="sum"></a>bbn.fn.sum(arr, numberProp, prop, val, operator)

  __Returns the sum of the given property for the array's elements matching the filter.__

  in the various objects that have the property given in the second argument.

  * __arr__ _Array_ The subject array
  * __numberProp__ _String_ 
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in the bbn.fn.compare

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

[Back to top](#bbn_top)  

### <a name="filter"></a>bbn.fn.filter(arr, prop, val, operator)

  __Returns a filtered array, based on the function given as the second argument.__

  * __arr__ _Array_ The subject array
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in the bbn.fn.compare

  __Returns__ _Array_ 


```javascript
//[{field1: 3, field2: 4}]
bbn.fn.filter([{field1: 1, field2: 2}, {field1: 2, field2: 3}, {field1: 3, field2: 4}], obj => {
  return obj.field1 === 3;
});
```

[Back to top](#bbn_top)  

### <a name="getRow"></a>bbn.fn.getRow(arr, prop, val, operator)

  __Returns if the object sought is contained in the array finds it.__

  * __arr__ _Array_ The subject array
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in the bbn.fn.compare

  __Returns__ _Object|Boolean_ 


```javascript
//{field1: 2, field2: 3}
bbn.fn. getRow([{field1: 1, field2: 2}, {field1: 2, field2: 3}, {field1: 3, field2: 4}], 'field1', 2);
```

[Back to top](#bbn_top)  

### <a name="getField"></a>bbn.fn.getField(arr, prop, val, operator, field)

  __Allows to take the value of an object property within an array.__

  It occurs by providing arguments in addition to the array from which to search for a property and the value contained in the object to which we want to take the value of another property,
defined in the last argument of the function.

  * __arr__ _Array_ The subject array
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in the bbn.fn.compare
  * __field__ _String_ The property from which the value is returned

  __Returns__ _undefined_ 


```javascript
//2
bbn.fn.getField([{field: 1, field2: 2}, {field: 2, field2: 3}, {field: 3, field2: 4}], 'field', 1, 'field2');
```


```javascript
//4
bbn.fn.getField([{field: 1, field2: 2}, {field :2, field2: 3}, {field:3, field2: 4}], 'field', 3, 'field2');
```
[Back to top](#bbn_top)  

### <a name="numProperties"></a>bbn.fn.numProperties(obj)

  __Returns the number of properties contained in the object.__

  Only takes into account the own properties - not the inherited ones.

  * __obj__ _Object_ The object to analyze

  __Returns__ _Number_ The number of properties


```javascript
//2
bbn.fn.numProperties({field: 1, field2: 2});
```
[Back to top](#bbn_top)  

### <a name="removePrivateProp"></a>bbn.fn.removePrivateProp(obj, deep)

  __Returns an object with the original objects' properties starting with an alphanumeric character.__

  It is presumed that external libraries, bbn variables use prefixes such as _ or $ for
naming private properties; this returns a new object purged from these properties.

  * __obj__ _Object_ The original object
  * __deep__ _Boolean_ If true the function will be reapplied on object properties

  __Returns__ _Object_ A new object without only the _public_ properties.


```javascript
bbn.fn.removePrivateProp({
  _bbn_timestamp: 1587269593987,
  name: "Wonka",
  fname: "Willy"
});
// {name: "Wonka", fname: "Willy"}
```
[Back to top](#bbn_top)  

### <a name="isSame"></a>bbn.fn.isSame(obj1, obj2)

  __Checks whether the data contained in the given objects is identical.__

  The non alphanumerical properties are removed for the comparison, and the properties are 
compared individually without the order being taken into account.

  * __obj1__ _Object_ 
  * __obj2__ _Object_ 

  __Returns__ _Boolean_ 


```javascript
bbn.fn.isSame(
  {name: "Wonka", fname: "Willy"},
  {fname: "Willy", name: "Wonka"}
);
// true
```


```javascript
// Doesn't take into account properties starting with non-alphanumeric characters
bbn.fn.isSame(
  {name: "Wonka", fname: "Willy", _bbn_timestamp: 1587269593987},
  {fname: "Willy", name: "Wonka"}
);
// true
```


```javascript
bbn.fn.isSame(
  {name: "Wonka", fname: "Willy", real: false},
  {fname: "Willy", name: "Wonka"}
);
// false
```
[Back to top](#bbn_top)  

### <a name="compareConditions"></a>bbn.fn.compareConditions(data, filter)

  __Applies the filter to the given data object.__

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

[Back to top](#bbn_top)  

### <a name="filterToConditions"></a>bbn.fn.filterToConditions(filter, operator)

  __Converts the given object 'filter' to a valid format of condition.__

  The resulting format will comply with bbn databases functions and complex filters applied to
bbn-vue list components.

  * __filter__ _Object_ 
  * __operator__ _String_ 

  __Returns__ _Object_ 


```javascript
bbn.fn.filterToConditions({value:3},'>');
//{conditions:[{field: "value", operator: ">", value: 3}], logic: "AND"}
```

[Back to top](#bbn_top)  

### <a name="extend"></a>bbn.fn.extend()

  __returns a single element by extending two or more elements.__

  If at the end we pass the value true as an argument it will make the extension in depth.


  __Returns__ _undefined_ 


```javascript
//{field1: 1, field2: 2, field3: 3}
bbn.fn.extend({field1: 1}, {field2: 2}, {field3: 3});
```

[Back to top](#bbn_top)  

### <a name="extendOut"></a>bbn.fn.extendOut()

  __Merges the contents of two or more objects together into the first object.__

  Doesn't overwrite the property if defined in the two objects given.


  __Returns__ _undefined_ 


```javascript
//{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
```

[Back to top](#bbn_top)  

### <a name="autoExtend"></a>bbn.fn.autoExtend(namespace, obj)

  __Auto extends the bbn object by passing the namespace and the object it will contain.__

  * __namespace__ _String_ 
  * __obj__ _Object_ 

  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="removeEmpty"></a>bbn.fn.removeEmpty(arr)

  __Returns the filtered array, removing all elements deemed empty.__

  * __arr__ _Array_ 

  __Returns__ _Array_ 


```javascript
//[{field: 1, field2: 2}, {field: 2, field2: 3}, {field: 3, field2 : 4}]
bbn.fn.removeEmpty([{field: 1, field2: 2}, '', {field: 2, field2: 3}, '',  {field:3, field2:  4}, 0, false]);
```

[Back to top](#bbn_top)  

### <a name="arrayFromProp"></a>bbn.fn.arrayFromProp(arr, prop)

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

[Back to top](#bbn_top)  

### <a name="pickValue"></a>bbn.fn.pickValue(arr)

  __Returns a random item from the given array.__

  * __arr__ _Array_ 

  __Returns__ _Mixed_ 


```javascript
//"field2"
bbn.fn.pickValue(['field1', 'field2', 'field3']);
```

[Back to top](#bbn_top)  

### <a name="diffObj"></a>bbn.fn.diffObj(obj1, obj2, unchanged, notRoot)

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

[Back to top](#bbn_top)  

### <a name="fori"></a>bbn.fn.fori(fn, arr, max, min)

  * __fn__ _Function_ 
  * __arr__ _Array_ 
  * __max__ _Number_ 
  * __min__ _Number_ 

  __Returns__ _Mixed_ 
[Back to top](#bbn_top)  

### <a name="forir"></a>bbn.fn.forir(fn, arr, max, min)

  * __fn__ _Function_ 
  * __arr__ _Array_ 
  * __max__ _Number_ 
  * __min__ _Number_ 

  __Returns__ _Mixed_ 
[Back to top](#bbn_top)  

### <a name="each"></a>bbn.fn.each(arr, fn)

  __Performs an iterative loop of an array or object given to it as a first argument and as a second argument a function that accepts 2 arguments,.__

  value and index.

  * __arr__ _Array_ 
  * __fn__ _Function_ 

  __Returns__ _Mixed_ 


```javascript
//4
let num = 0;
bbn.fn.each([{field1: 1, field2: 2}, {field3: 3, field4: 4}, {field5: 5, field6: 6}], (val,idx) => {
  if ( val.field3 !== undefined ){
    num = val.field3 + idx;
  }
})
```

[Back to top](#bbn_top)  

### <a name="iterate"></a>bbn.fn.iterate(obj, fn)

  __Scroll through the properties of an object by executing a function for each corresponding element.__

  * __obj__ _Object|Number_ 
  * __fn__ _Function_ 

  __Returns__ _Mixed_ 


```javascript
//["value1", 2]
let arr = [];
bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
  arr.push(value);
});
```

[Back to top](#bbn_top)  

### <a name="clone"></a>bbn.fn.clone(obj)

  __Returns the clone argument removing the observability.__

  * __obj__ _mixed_ 

  __Returns__ _undefined_ 


```javascript
//{field: 1}
bbn.fn.clone({field: 1});
```

[Back to top](#bbn_top)  

### <a name="map"></a>bbn.fn.map(arr, fn, deepProp)

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

[Back to top](#bbn_top)  

### <a name="toCSV"></a>bbn.fn.toCSV(arr, [','], [';'], ['"'])

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

[Back to top](#bbn_top)  

### <a name="shortenObj"></a>bbn.fn.shortenObj(obj, max)

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

[Back to top](#bbn_top)  