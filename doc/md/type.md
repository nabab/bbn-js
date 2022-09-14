# type.js

## Type check functions.

<a name="bbn_top"></a>[bbn.fn.__isArray__](#isArray)  
Returns true if the given argument is array.  
[bbn.fn.__isBlob__](#isBlob)  
  
[bbn.fn.__isCanvas__](#isCanvas)  
Returns true if the given argumen is a Canvas.  
[bbn.fn.__isColor__](#isColor)  
Intended to check if the argument provided is a color.  
[bbn.fn.__isDate__](#isDate)  
Returns true if the given argument is a date object.  
[bbn.fn.__isDimension__](#isDimension)  
Returns true if the given value is a valid CSS dimension string or a number, false otherwise.  
[bbn.fn.__isDom__](#isDom)  
Returns true if the given argument is a dom element;  
[bbn.fn.__isEmail__](#isEmail)  
Intended to check if the argument provided is an e-mail address written correctly  
[bbn.fn.__isEmpty__](#isEmpty)  
Checks if the argument is empty or not.  
[bbn.fn.__isEvent__](#isEvent)  
Returns true if the given argument is an event.  
[bbn.fn.__isInt__](#isInt)  
Returns true if the given argument is an integer  
[bbn.fn.__isIterable__](#isIterable)  
Returns true if the given object can be iterated as an array (numerically).  
[bbn.fn.__isNull__](#isNull)  
Returns true if the given argument is null;  
[bbn.fn.__isNumber__](#isNumber)  
Returns true if the given argument is a number  
[bbn.fn.__isObject__](#isObject)  
Returns true if the given argument is an object.  
[bbn.fn.__isPercent__](#isPercent)  
Returns true if the given argument is a percentage.  
[bbn.fn.__isString__](#isString)  
Returns true if the given argument is a string;  
[bbn.fn.__isValidDimension__](#isValidDimension)  
Returns true if the given value is a valid CSS dimension string, false otherwise.  
[bbn.fn.__isValue__](#isValue)  
Returns true if the given argument is not null or type object or array.  
[bbn.fn.__isVue__](#isVue)  
Returns true if the given argumen is a VueJS object.  


### <a name="isEmail"></a>bbn.fn.isEmail(st)

  __Intended to check if the argument provided is an e-mail address written correctly.__

  * __st__ _String_ 

  __Returns__ _Boolean_ 


```javascript
//false
bbn.fn.isEmail('test@testorg');
```



```javascript
//true
bbn.fn.isEmail('test@test.org');
```
[Back to top](#bbn_top)  

### <a name="isColor"></a>bbn.fn.isColor(st)

  __Intended to check if the argument provided is a color.__

  It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.

  * __st__ _String_ 

  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isColor("#FF0000")
```



```javascript
//true
bbn.fn.isColor("rgb 255, 0, 0");
```



```javascript
//true
bbn.fn.isColor("red");
```
[Back to top](#bbn_top)  

### <a name="isIterable"></a>bbn.fn.isIterable(st)

  __Returns true if the given object can be iterated as an array (numerically).__

  It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.

  * __st__ _String_ 


  __Returns__ _Boolean_ 


```javascript
// true
bbn.fn.isIterable([1, 2])
// false
bbn.fn.isIterable({a: 1, b: 2})
// false
bbn.fn.isIterable(25)
// true
bbn.fn.isIterable(document.body.querySelectorAll('.container > div'))
```

[Back to top](#bbn_top)  

### <a name="isDimension"></a>bbn.fn.isDimension(st)

  __Returns true if the given value is a valid CSS dimension string or a number, false otherwise.__

  * __st__ _String_ 

  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="isValidDimension"></a>bbn.fn.isValidDimension(st)

  __Returns true if the given value is a valid CSS dimension string, false otherwise.__

  * __st__ _String_ 

  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="isEmpty"></a>bbn.fn.isEmpty(obj)

  __Checks if the argument is empty or not.__

  * __obj__ _Mixed_ 

  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isEmpty({});
```


```javascript
//false
bbn.fn.isEmpty({test : 1});
```


```javascript
//true
bbn.fn.isEmpty([]);
```


```javascript
//false
bbn.fn.isEmpty(['test']);
```


```javascript
//true
bbn.fn.isEmpty('');
```


```javascript
//true
bbn.fn.isEmpty('test');
```
[Back to top](#bbn_top)  

### <a name="isBlob"></a>bbn.fn.isBlob()


  __Returns__ _Boolean_ 
[Back to top](#bbn_top)  

### <a name="isNumber"></a>bbn.fn.isNumber()

  __Returns true if the given argument is a number.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isNumber(5);
```


```javascript
//true
bbn.fn.isNumber(0.5);
```
[Back to top](#bbn_top)  

### <a name="isInt"></a>bbn.fn.isInt()

  __Returns true if the given argument is an integer.__


  __Returns__ _Boolean_ 


```javascript
bbn.fn.isInt(5);
// true
bbn.fn.isInt(0.5);
// false
bbn.fn.isInt("hello");
// false
```
[Back to top](#bbn_top)  

### <a name="isString"></a>bbn.fn.isString()

  __Returns true if the given argument is a string;.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isString('bbn');
```
[Back to top](#bbn_top)  

### <a name="isArray"></a>bbn.fn.isArray()

  __Returns true if the given argument is array.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isArray([5,2,6]);
```
[Back to top](#bbn_top)  

### <a name="isDate"></a>bbn.fn.isDate()

  __Returns true if the given argument is a date object.__


  __Returns__ _Boolean_ 


```javascript
//true
let date = new Date();
bbn.fn.isDate(date);
```


```javascript
//false
bbn.fn.isDate('16/04/2020');
```
[Back to top](#bbn_top)  

### <a name="isObject"></a>bbn.fn.isObject()

  __Returns true if the given argument is an object.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isObject({name: 'cami', age: 7});
```


```javascript
//false
bbn.fn.isObject([{name: 'cami', age: 7}]);
```
[Back to top](#bbn_top)  

### <a name="isEvent"></a>bbn.fn.isEvent()

  __Returns true if the given argument is an event.__


  __Returns__ _Boolean_ 
[Back to top](#bbn_top)  

### <a name="isNull"></a>bbn.fn.isNull()

  __Returns true if the given argument is null;.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isNull(myData);
```
[Back to top](#bbn_top)  

### <a name="isValue"></a>bbn.fn.isValue()

  __Returns true if the given argument is not null or type object or array.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isValue('myString');
```


```javascript
//true
bbn.fn.isValue(6);
```


```javascript
//false
bbn.fn.isValue([80,10,22]);
```
[Back to top](#bbn_top)  

### <a name="isDom"></a>bbn.fn.isDom()

  __Returns true if the given argument is a dom element;.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isDom('<div>myDiv</div>');
```
[Back to top](#bbn_top)  

### <a name="isCanvas"></a>bbn.fn.isCanvas()

  __Returns true if the given argumen is a Canvas.__


  __Returns__ _Boolean_ 


```javascript
//true
let myCanvas = document.createElement('canvas');
bbn.fn.isCanvas(myCanvas);
```
[Back to top](#bbn_top)  

### <a name="isVue"></a>bbn.fn.isVue()

  __Returns true if the given argumen is a VueJS object.__


  __Returns__ _Boolean_ 


```javascript
//true
let myObj =  new Vue({
               //options
             });
bbn.fn.isVue(myObj);
```
[Back to top](#bbn_top)  

### <a name="isPercent"></a>bbn.fn.isPercent()

  __Returns true if the given argument is a percentage.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isPercent('5%');
```
[Back to top](#bbn_top)  