# size.js

## Sizing functions.

### **bbn.fn.adjustHeight()**

Adjusts the height of the element(s) given as arguments.

Fires bbn.fn.adjustSize

**Returns** _undefined_ 

### **bbn.fn.adjustSize(type, eles)**

Adjusts the size of the given elements.

* __type__ _String_ The dimension to adjust
* __eles__ _Array_ The elements to adjust for the dimension

**Returns** _undefined_ 

### **bbn.fn.adjustWidth()**

Adjusts the width of the element(s) given as arguments.

Fires bbn.fn.adjustSize

**Returns** _undefined_ 

### **bbn.fn.calculateHeight(element)**

Returns the height of the given element and force the repaint of the element to trigger animations.

* __element__ _HTMLElement_ 

**Returns** _String_ The height of the element with its unit of measure.

### **bbn.fn.getScrollBarSize()**

Retutns the size of the scrollbar realative to the current environment.


**Returns** _Number_ 

### **bbn.fn.getScrollParent(node)**

* __node__ _HTMLElement_ 

**Returns** _undefined_ 

### **bbn.fn.resize()**

Resizes the environment by assigning it the effective height and width of the window.

Fires bbn.fn.defaultResizeFunction

**Returns** _undefined_ 

### **bbn.fn.toggle_full_screen()**

Toggles the fullscreen mode.

Fires window.document.mozCancelFullScreen
Fires window.document.documentElement.mozRequestFullScreen
Fires window.document.webkitCancelFullScreen
Fires window.document.documentElement.webkitRequestFullScreen
Fires window.document.msExitFullscreen
Fires window.document.documentElement.msRequestFullScreen
Fires window.document.exitFullscreen
Fires window.document.documentElement.requestFullscreen
Fires setTimeout
Fires bbn.fn.resize

**Returns** _undefined_ 