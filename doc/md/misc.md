# misc.js

## Miscellaneous functions.

- **bbn.fn.canvasToImage(canvas)**

  __Returns a canvas in a HTML element img.__

  * __canvas__ _canvas_ 

  __Returns__ _HTMLElement_ 

- **bbn.fn.copy(st)**

  __Copies to the clipboard the value of the given string.__

  * __st__ _String_ The string to copy.

  __Returns__ _undefined_ 

- **bbn.fn.eraseCookie()**

  __Erase the cookie corresponding to the given name;.__


  __Returns__ _*_ 


``` javascript
// 'en'
bbn.fn.erase('lang');
```

- **bbn.fn.formatBytes()**

  __Formats the value given in bytes.__


  __Returns__ _String_ 


//"52.23 MB"
``` javascript
bbn.fn.formatBytes(54764654);
```

- **bbn.fn.getCookie(name)**

  __If it exsists returns the cookie corresponding to the given name.__

  * __name__ _String_ 

  __Returns__ _undefined_ 


``` javascript
// 'en'
bbn.fn.getCookie('lang');
```

- **bbn.fn.getEventData()**

  __Returns a promise having the event's data as argument.__


  __Returns__ _Promise_ 


``` javascript
let type = e.type;
  bbn.fn.getEventData(e).then((data) => {
    bbn.fn.log("DATA FROM " + type, data);
  });
```

- **bbn.fn.happy(args)**

  __Logs the given argument in the browser's console highlighting it with a green background.__

  * __args__ _...any_ 

  __Returns__ _undefined_ 


``` javascript
bbn.fn.happy('I want to log the success of my function');
```

- **bbn.fn.imageToCanvas(img)**

  __Draws the given html image nto a canvas.__

  * __img__ _HTMLElement_ 

  __Returns__ _undefined_ 


``` javascript
//<canvas width="60" height="32"></canvas>
bbn.fn.imageToCanvas('<img src="path/myImage.png">');
```

- **bbn.fn.imgToBase64(img)**

  __Returns the tag for the image in base64.__

  * __img__ _HTMLElement_ 

  __Returns__ _*_ 

- **bbn.fn.info(args)**

  __Logs the given argument in the browser's console highlighting it with a blue background.__

  * __args__ _...any_ 

  __Returns__ _*_ 

- **bbn.fn.is()**


  __Returns__ _undefined_ 

- **bbn.fn.isArray()**

  __Returns true if the given argument is array.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isArray([5,2,6]);
```

- **bbn.fn.isBlob()**


  __Returns__ _Boolean_ 

- **bbn.fn.isDate()**

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

- **bbn.fn.isDom()**

  __Returns true if the given argument is a dom element;.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isDom('<div>myDiv</div>');
```

- **bbn.fn.isMobile()**

  __Returns true if the current browser is on a mobile device.__


  __Returns__ _Boolean_ 


``` javascript
//false
bbn.fn.isMobile();
```

- **bbn.fn.isNull()**

  __Returns true if the given argument is null;.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isNull(myData);
```

- **bbn.fn.isNumber()**

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

- **bbn.fn.isObject()**

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

- **bbn.fn.isPercent()**

  __Returns true if the given argument is a percentage.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isPercent('5%');
```

- **bbn.fn.isString()**

  __Returns true if the given argument is a string;.__


  __Returns__ _Boolean_ 


```javascript
//true
bbn.fn.isString('bbn');
```

- **bbn.fn.isValue()**

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

- **bbn.fn.isVue()**

  __Returns true if the given argumen is a VueJS object.__


  __Returns__ _Boolean_ 


```javascript
//true
let myObj =  new Vue({
               //options
             });
bbn.fn.isVue(myObj);
```

- **bbn.fn.log(args)**

  __Logs the given arguments in the browser's console.__

  * __args__ _...any_ 

  __Returns__ _undefined_ 


```javascript
//'hello'
bbn.fn.log('hello');
```

- **bbn.fn.setCookie(name, value, days)**

  __Creates a cookie and assigns it to document.cookie.__

  * __name__ _String_ The name of the cookie.
  * __value__ _String_ The value of the cookie.
  * __days__ _Number_ The days before expiration of the cookie.

  __Returns__ _undefined_ 


``` javascript
bbn.fn.setCookie('lang', 'en', 2);
```

- **bbn.fn.startChrono()**

  __Starts a timer and gives it a name.__


  __Returns__ _undefined_ 

- **bbn.fn.stopChrono(name)**

  * __name__ _String_ 

  __Returns__ _Number_ 


``` javascript
//20162
bbn.fn.stopChrono('myChrono');
```

- **bbn.fn.timestamp()**

  __Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().__

  * ____ _Number_ 

  __Returns__ _Boolean_ 


```javascript
//1587031047918
bbn.fn.timestamp();
```

- **bbn.fn.warning(args)**

  __Logs the given argument in the browser's console highlighting it with a yellow background and red color.__

  * __args__ _...any_ 

  __Returns__ _undefined_ 


```javascript
bbn.fn.warning('whatever you want to log as a warning');
```