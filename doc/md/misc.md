# misc.js

## Miscellaneous functions.

<a name="bbn_top"></a>[bbn.fn.arrayBuffer2String](#arrayBuffer2String)  
  
[bbn.fn.canvasToImage](#canvasToImage)  
Returns a canvas in a HTML element img  
[bbn.fn.copy](#copy)  
Copies to the clipboard the value of the given string.  
[bbn.fn.eraseCookie](#eraseCookie)  
Erase the cookie corresponding to the given name;  
[bbn.fn.error](#error)  
Logs the given argument in the browser's console highlighting it with a red background.  
[bbn.fn.formatBytes](#formatBytes)  
Formats the value given in bytes.  
[bbn.fn.getCookie](#getCookie)  
If it exsists returns the cookie corresponding to the given name.  
[bbn.fn.getEventData](#getEventData)  
Returns a promise having the event's data as argument.  
[bbn.fn.getHTMLOfSelection](#getHTMLOfSelection)  
  
[bbn.fn.getPath](#getPath)  
  
[bbn.fn.happy](#happy)  
Logs the given argument in the browser's console highlighting it with a green background.  
[bbn.fn.imageToCanvas](#imageToCanvas)  
Draws the given html image nto a canvas.  
[bbn.fn.imgToBase64](#imgToBase64)  
Returns the tag for the image in base64  
[bbn.fn.info](#info)  
Logs the given argument in the browser's console highlighting it with a blue background.  
[bbn.fn.is](#is)  
  
[bbn.fn.isArray](#isArray)  
Returns true if the given argument is array.  
[bbn.fn.isBlob](#isBlob)  
  
[bbn.fn.isDate](#isDate)  
Returns true if the given argument is a date object.  
[bbn.fn.isDom](#isDom)  
Returns true if the given argument is a dom element;  
[bbn.fn.isMobile](#isMobile)  
Returns true if the current browser is on a mobile device.  
[bbn.fn.isNull](#isNull)  
Returns true if the given argument is null;  
[bbn.fn.isNumber](#isNumber)  
Returns true if the given argument is a number  
[bbn.fn.isObject](#isObject)  
Returns true if the given argument is an object.  
[bbn.fn.isPercent](#isPercent)  
Returns true if the given argument is a percentage.  
[bbn.fn.isString](#isString)  
Returns true if the given argument is a string;  
[bbn.fn.isURL](#isURL)  
  
[bbn.fn.isValue](#isValue)  
Returns true if the given argument is not null or type object or array.  
[bbn.fn.isVue](#isVue)  
Returns true if the given argumen is a VueJS object.  
[bbn.fn.log](#log)  
Logs the given arguments in the browser's console.  
[bbn.fn.setCookie](#setCookie)  
Creates a cookie and assigns it to document.cookie.  
[bbn.fn.startChrono](#startChrono)  
Starts a timer and gives it a name.  
[bbn.fn.stat](#stat)  
  
[bbn.fn.stopChrono](#stopChrono)  
  
[bbn.fn.string2ArrayBuffer](#string2ArrayBuffer)  
  
[bbn.fn.timestamp](#timestamp)  
Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().  
[bbn.fn.warning](#warning)  
Logs the given argument in the browser's console highlighting it with a yellow background and red color.  


### <a name="is"></a>bbn.fn.is()


  __Returns__ _undefined_ 
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


[Back to top](#bbn_top)  

### <a name="timestamp"></a>bbn.fn.timestamp()

  __Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().__

  * ____ _Number_ 

  __Returns__ _Boolean_ 


```javascript
//1587031047918
bbn.fn.timestamp();
```
[Back to top](#bbn_top)  

### <a name="log"></a>bbn.fn.log(args)

  __Logs the given arguments in the browser's console.__

  * __args__ _...any_ 

  __Returns__ _undefined_ 


```javascript
//'hello'
bbn.fn.log('hello');
```  
[Back to top](#bbn_top)  

### <a name="warning"></a>bbn.fn.warning(args)

  __Logs the given argument in the browser's console highlighting it with a yellow background and red color.__

  * __args__ _...any_ 

  __Returns__ _undefined_ 


```javascript 
bbn.fn.warning('whatever you want to log as a warning');
```
[Back to top](#bbn_top)  


[Back to top](#bbn_top)  

### <a name="happy"></a>bbn.fn.happy(args)

  __Logs the given argument in the browser's console highlighting it with a green background.__

  * __args__ _...any_ 

  __Returns__ _undefined_ 


``` javascript
bbn.fn.happy('I want to log the success of my function');
```
[Back to top](#bbn_top)  

### <a name="info"></a>bbn.fn.info(args)

  __Logs the given argument in the browser's console highlighting it with a blue background.__

  * __args__ _...any_ 

  __Returns__ _Mixed_ 
[Back to top](#bbn_top)  


[Back to top](#bbn_top)  


[Back to top](#bbn_top)  

### <a name="setCookie"></a>bbn.fn.setCookie(name, value, days)

  __Creates a cookie and assigns it to document.cookie.__

  * __name__ _String_ The name of the cookie.
  * __value__ _String_ The value of the cookie.
  * __days__ _Number_ The days before expiration of the cookie.

  __Returns__ _undefined_ 


``` javascript
bbn.fn.setCookie('lang', 'en', 2);
```
[Back to top](#bbn_top)  

### <a name="getCookie"></a>bbn.fn.getCookie(name)

  __If it exsists returns the cookie corresponding to the given name.__

  * __name__ _String_ 

  __Returns__ _undefined_ 


``` javascript
// 'en'
bbn.fn.getCookie('lang');
``` 
[Back to top](#bbn_top)  

### <a name="eraseCookie"></a>bbn.fn.eraseCookie()

  __Erase the cookie corresponding to the given name;.__


  __Returns__ _Mixed_ 


``` javascript
// 'en'
bbn.fn.erase('lang');
``` 
[Back to top](#bbn_top)  

### <a name="getEventData"></a>bbn.fn.getEventData()

  __Returns a promise having the event's data as argument.__


  __Returns__ _Promise_ 


``` javascript
let type = e.type;
  bbn.fn.getEventData(e).then((data) => {
    bbn.fn.log("DATA FROM " + type, data);
  });
```
[Back to top](#bbn_top)  


[Back to top](#bbn_top)  


[Back to top](#bbn_top)  


[Back to top](#bbn_top)  

### <a name="copy"></a>bbn.fn.copy(st)

  __Copies to the clipboard the value of the given string.__

  * __st__ _String_ The string to copy.

  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="imageToCanvas"></a>bbn.fn.imageToCanvas(img)

  __Draws the given html image nto a canvas.__

  * __img__ _HTMLElement_ 

  __Returns__ _undefined_ 


``` javascript
//<canvas width="60" height="32"></canvas>
bbn.fn.imageToCanvas('<img src="path/myImage.png">');
```
[Back to top](#bbn_top)  

### <a name="canvasToImage"></a>bbn.fn.canvasToImage(canvas)

  __Returns a canvas in a HTML element img.__

  * __canvas__ _canvas_ 

  __Returns__ _HTMLElement_ 
[Back to top](#bbn_top)  

### <a name="imgToBase64"></a>bbn.fn.imgToBase64(img)

  __Returns the tag for the image in base64.__

  * __img__ _HTMLElement_ 

  __Returns__ _Mixed_ 
[Back to top](#bbn_top)  

### <a name="formatBytes"></a>bbn.fn.formatBytes()

  __Formats the value given in bytes.__


  __Returns__ _String_ 


//"52.23 MB"
``` javascript
bbn.fn.formatBytes(54764654);
```
[Back to top](#bbn_top)  

### <a name="startChrono"></a>bbn.fn.startChrono()

  __Starts a timer and gives it a name.__


  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="stopChrono"></a>bbn.fn.stopChrono(name)

  * __name__ _String_ 

  __Returns__ _Number_ 


``` javascript
//20162
bbn.fn.stopChrono('myChrono');
```
[Back to top](#bbn_top)  

### <a name="isMobile"></a>bbn.fn.isMobile()

  __Returns true if the current browser is on a mobile device.__


  __Returns__ _Boolean_ 


``` javascript
//false
bbn.fn.isMobile();
```
[Back to top](#bbn_top)  