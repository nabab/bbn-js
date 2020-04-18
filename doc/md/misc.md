# misc.js

## Miscellaneous functions.

<a name="bbn_top"></a>[canvasToImage](#canvasToImage)  
[copy](#copy)  
[eraseCookie](#eraseCookie)  
[formatBytes](#formatBytes)  
[getCookie](#getCookie)  
[getEventData](#getEventData)  
[happy](#happy)  
[imageToCanvas](#imageToCanvas)  
[imgToBase64](#imgToBase64)  
[info](#info)  
[is](#is)  
[isArray](#isArray)  
[isBlob](#isBlob)  
[isDate](#isDate)  
[isDom](#isDom)  
[isMobile](#isMobile)  
[isNull](#isNull)  
[isNumber](#isNumber)  
[isObject](#isObject)  
[isPercent](#isPercent)  
[isString](#isString)  
[isValue](#isValue)  
[isVue](#isVue)  
[log](#log)  
[setCookie](#setCookie)  
[startChrono](#startChrono)  
[stopChrono](#stopChrono)  
[timestamp](#timestamp)  
[warning](#warning)  


- <a name="is"></a>**bbn.fn.is()** [Back to top](#bbn_top)


  __Returns__ _undefined_ 

- <a name="isBlob"></a>**bbn.fn.isBlob()** [Back to top](#bbn_top)


  __Returns__ _Boolean_ 

- <a name="isNumber"></a>**bbn.fn.isNumber()** [Back to top](#bbn_top)

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

- <a name="isString"></a>**bbn.fn.isString()** [Back to top](#bbn_top)

  __Returns true if the given argument is a string;.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isString('bbn');
```

- <a name="isArray"></a>**bbn.fn.isArray()** [Back to top](#bbn_top)

  __Returns true if the given argument is array.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isArray([5,2,6]);
```

- <a name="isDate"></a>**bbn.fn.isDate()** [Back to top](#bbn_top)

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

- <a name="isObject"></a>**bbn.fn.isObject()** [Back to top](#bbn_top)

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

- <a name="isNull"></a>**bbn.fn.isNull()** [Back to top](#bbn_top)

  __Returns true if the given argument is null;.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isNull(myData);
```

- <a name="isValue"></a>**bbn.fn.isValue()** [Back to top](#bbn_top)

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

- <a name="isDom"></a>**bbn.fn.isDom()** [Back to top](#bbn_top)

  __Returns true if the given argument is a dom element;.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isDom('<div>myDiv</div>');
```

- <a name="isVue"></a>**bbn.fn.isVue()** [Back to top](#bbn_top)

  __Returns true if the given argumen is a VueJS object.__


  __Returns__ _Boolean_ 


```javascript
//true
let myObj =  new Vue({
               //options
             });
bbn.fn.isVue(myObj);
```

- <a name="isPercent"></a>**bbn.fn.isPercent()** [Back to top](#bbn_top)

  __Returns true if the given argument is a percentage.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isPercent('5%');
```

- <a name="timestamp"></a>**bbn.fn.timestamp()** [Back to top](#bbn_top)

  __Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().__

  * ____ _Number_ 

  __Returns__ _Boolean_ 


```javascript
//1587031047918
bbn.fn.timestamp();
```

- <a name="log"></a>**bbn.fn.log(args)** [Back to top](#bbn_top)

  __Logs the given arguments in the browser's console.__

  * __args__ _...any_ 

  __Returns__ _undefined_ 


```javascript
//'hello'
bbn.fn.log('hello');
```

- <a name="warning"></a>**bbn.fn.warning(args)** [Back to top](#bbn_top)

  __Logs the given argument in the browser's console highlighting it with a yellow background and red color.__

  * __args__ _...any_ 

  __Returns__ _undefined_ 


```javascript
bbn.fn.warning('whatever you want to log as a warning');
```

- <a name="happy"></a>**bbn.fn.happy(args)** [Back to top](#bbn_top)

  __Logs the given argument in the browser's console highlighting it with a green background.__

  * __args__ _...any_ 

  __Returns__ _undefined_ 


``` javascript
bbn.fn.happy('I want to log the success of my function');
```

- <a name="info"></a>**bbn.fn.info(args)** [Back to top](#bbn_top)

  __Logs the given argument in the browser's console highlighting it with a blue background.__

  * __args__ _...any_ 

  __Returns__ _*_ 

- <a name="setCookie"></a>**bbn.fn.setCookie(name, value, days)** [Back to top](#bbn_top)

  __Creates a cookie and assigns it to document.cookie.__

  * __name__ _String_ The name of the cookie.
  * __value__ _String_ The value of the cookie.
  * __days__ _Number_ The days before expiration of the cookie.

  __Returns__ _undefined_ 


``` javascript
bbn.fn.setCookie('lang', 'en', 2);
```

- <a name="getCookie"></a>**bbn.fn.getCookie(name)** [Back to top](#bbn_top)

  __If it exsists returns the cookie corresponding to the given name.__

  * __name__ _String_ 

  __Returns__ _undefined_ 


``` javascript
// 'en'
bbn.fn.getCookie('lang');
```

- <a name="eraseCookie"></a>**bbn.fn.eraseCookie()** [Back to top](#bbn_top)

  __Erase the cookie corresponding to the given name;.__


  __Returns__ _*_ 


``` javascript
// 'en'
bbn.fn.erase('lang');
```

- <a name="getEventData"></a>**bbn.fn.getEventData()** [Back to top](#bbn_top)

  __Returns a promise having the event's data as argument.__


  __Returns__ _Promise_ 


``` javascript
let type = e.type;
  bbn.fn.getEventData(e).then((data) => {
    bbn.fn.log("DATA FROM " + type, data);
  });
```

- <a name="copy"></a>**bbn.fn.copy(st)** [Back to top](#bbn_top)

  __Copies to the clipboard the value of the given string.__

  * __st__ _String_ The string to copy.

  __Returns__ _undefined_ 

- <a name="imageToCanvas"></a>**bbn.fn.imageToCanvas(img)** [Back to top](#bbn_top)

  __Draws the given html image nto a canvas.__

  * __img__ _HTMLElement_ 

  __Returns__ _undefined_ 


``` javascript
//<canvas width="60" height="32"></canvas>
bbn.fn.imageToCanvas('<img src="path/myImage.png">');
```

- <a name="canvasToImage"></a>**bbn.fn.canvasToImage(canvas)** [Back to top](#bbn_top)

  __Returns a canvas in a HTML element img.__

  * __canvas__ _canvas_ 

  __Returns__ _HTMLElement_ 

- <a name="imgToBase64"></a>**bbn.fn.imgToBase64(img)** [Back to top](#bbn_top)

  __Returns the tag for the image in base64.__

  * __img__ _HTMLElement_ 

  __Returns__ _*_ 

- <a name="formatBytes"></a>**bbn.fn.formatBytes()** [Back to top](#bbn_top)

  __Formats the value given in bytes.__


  __Returns__ _String_ 


//"52.23 MB"
``` javascript
bbn.fn.formatBytes(54764654);
```

- <a name="startChrono"></a>**bbn.fn.startChrono()** [Back to top](#bbn_top)

  __Starts a timer and gives it a name.__


  __Returns__ _undefined_ 

- <a name="stopChrono"></a>**bbn.fn.stopChrono(name)** [Back to top](#bbn_top)

  * __name__ _String_ 

  __Returns__ _Number_ 


``` javascript
//20162
bbn.fn.stopChrono('myChrono');
```

- <a name="isMobile"></a>**bbn.fn.isMobile()** [Back to top](#bbn_top)

  __Returns true if the current browser is on a mobile device.__


  __Returns__ _Boolean_ 


``` javascript
//false
bbn.fn.isMobile();
```