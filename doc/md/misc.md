# misc.js

## Miscellaneous functions.

<a name="bbn_top"></a>[bbn.fn.__canvasToImage__](#canvasToImage)  
Returns a canvas in a HTML element img  
[bbn.fn.__copy__](#copy)  
Copies to the clipboard the value of the given string.  
[bbn.fn.__eraseCookie__](#eraseCookie)  
Erase the cookie corresponding to the given name;  
[bbn.fn.__formatBytes__](#formatBytes)  
Formats the value given in bytes.  
[bbn.fn.__getCookie__](#getCookie)  
If it exsists returns the cookie corresponding to the given name.  
[bbn.fn.__getDeviceType__](#getDeviceType)  
Returns the current device type.  
[bbn.fn.__getEventData__](#getEventData)  
Returns a promise having the event's data as argument.  
[bbn.fn.__getTimeoff__](#getTimeoff)  
Returns the length of time the window has not been focused in seconds.  
[bbn.fn.__happy__](#happy)  
Logs the given argument in the browser's console highlighting it with a green background.  
[bbn.fn.__imageToCanvas__](#imageToCanvas)  
Draws the given html image nto a canvas.  
[bbn.fn.__imgToBase64__](#imgToBase64)  
Returns the tag for the image in base64  
[bbn.fn.__info__](#info)  
Logs the given argument in the browser's console highlighting it with a blue background.  
[bbn.fn.__isActiveInterface__](#isActiveInterface)  
Tells if the interface is beeing active for the past x seconds.  
[bbn.fn.__isDesktopDevice__](#isDesktopDevice)  
Returns true if the current device type is a desktop.  
[bbn.fn.__isFocused__](#isFocused)  
Checks whether the given elemet is focused or not.  
[bbn.fn.__isMobile__](#isMobile)  
Returns true if the current browser is on a mobile device (smartphone or tablet).  
[bbn.fn.__isMobileDevice__](#isMobileDevice)  
Returns true if the current device type is a mobile.  
[bbn.fn.__isTabletDevice__](#isTabletDevice)  
Returns true if the current device type is a tablet.  
[bbn.fn.__log__](#log)  
Logs the given arguments in the browser's console.  
[bbn.fn.__selectElementText__](#selectElementText)  
Selects the content of an element.  
[bbn.fn.__setCookie__](#setCookie)  
Creates a cookie and assigns it to document.cookie.  
[bbn.fn.__startChrono__](#startChrono)  
Starts a timer and gives it a name.  
[bbn.fn.__stopChrono__](#stopChrono)  
  
[bbn.fn.__timestamp__](#timestamp)  
Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().  
[bbn.fn.__warning__](#warning)  
Logs the given argument in the browser's console highlighting it with a yellow background and red color.  


### <a name="timestamp"></a>bbn.fn.timestamp(seconds)

  __Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().__

  * __seconds__ _Number_ 

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

### <a name="isActiveInterface"></a>bbn.fn.isActiveInterface()

  __Tells if the interface is beeing active for the past x seconds.__


  __Returns__ _Boolean_ 


// true
``` javascript
bbn.fn.isActiveInterface(54764654);
```
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
bbn.fn.stopChrono('myChrono');
// 20162
```
[Back to top](#bbn_top)  

### <a name="getDeviceType"></a>bbn.fn.getDeviceType()

  __Returns the current device type.__


  __Returns__ _String_ 


``` javascript
bbn.fn.getDeviceType();
// mobile
```
[Back to top](#bbn_top)  

### <a name="isMobileDevice"></a>bbn.fn.isMobileDevice()

  __Returns true if the current device type is a mobile.__


  __Returns__ _Boolean_ 


``` javascript
bbn.fn.isMobileDevice();
// false
```
[Back to top](#bbn_top)  

### <a name="isTabletDevice"></a>bbn.fn.isTabletDevice()

  __Returns true if the current device type is a tablet.__


  __Returns__ _Boolean_ 


``` javascript
bbn.fn.isTabletDevice();
// false
```
[Back to top](#bbn_top)  

### <a name="isDesktopDevice"></a>bbn.fn.isDesktopDevice()

  __Returns true if the current device type is a desktop.__


  __Returns__ _Boolean_ 


``` javascript
bbn.fn.isDesktopDevice();
// true
```
[Back to top](#bbn_top)  

### <a name="isMobile"></a>bbn.fn.isMobile()

  __Returns true if the current browser is on a mobile device (smartphone or tablet).__


  __Returns__ _Boolean_ 


``` javascript
bbn.fn.isMobile();
// false
```
[Back to top](#bbn_top)  

### <a name="getTimeoff"></a>bbn.fn.getTimeoff()

  __Returns the length of time the window has not been focused in seconds.__


  __Returns__ _Boolean_ 


``` javascript
bbn.fn.getTimeoff();
// 0
```
[Back to top](#bbn_top)  

### <a name="isFocused"></a>bbn.fn.isFocused(ele, contain)

  __Checks whether the given elemet is focused or not.__

  * __ele__ _Element_ The element to be checked for focus
  * __contain__ _Boolean_ If true will check if the focused element is contained in the given element


  __Returns__ _Boolean_ True if focused


``` javascript
bbn.fn.isFocused(document.getElementById('input_name'));
// false
bbn.fn.isFocused(bbn.sel('.container'));
// true
```
[Back to top](#bbn_top)  

### <a name="selectElementText"></a>bbn.fn.selectElementText(ele, win)

  __Selects the content of an element.__

  * __ele__ _Element_ The element in which the text should be selected
  * __win__ _Boolean_ The window object


  __Returns__ _Boolean_ True if focused


``` javascript
bbn.fn.selectElementText(document.getElementById('my_input_id'));
// false
bbn.fn.selectElementText(bbn.$('#my_span_id'));
// true
```
[Back to top](#bbn_top)  