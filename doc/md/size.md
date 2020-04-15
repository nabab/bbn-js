# size.js

## Sizing functions.

### **bbn.fn.adjustHeight()**

Adjusts the height of the element(s) given as argument.


**Returns** _undefined_ 

### **bbn.fn.adjustSize(type, eles)**

Adjusts the size of the given elements.

* __type__ _String_ The dimension to adjust
* __eles__ _Array_ The elements to adjust for the dimension

**Returns** _undefined_ 

### **bbn.fn.adjustWidth()**

Adjusts the width of the element(s) given as argument.


**Returns** _undefined_ 

### **bbn.fn.calculateHeight(element)**

Returns the height of the given dom element and force the repaint of the element to trigger animations.

* __element__ _HTMLElement_ 

**Returns** _String_ The height of the element with its unit of measure.


```javascript
// "17.5px"
bbn.fn.calculateHeight(<p>Javascript documentation</p>);
```

### **bbn.fn.getScrollBarSize()**

Retutns the size of the scrollbar realative to the current environment.


**Returns** _Number_ 

### **bbn.fn.resize()**

Resizes the environment by assigning it the effective height and width of the window.


**Returns** _undefined_ 

### **bbn.fn.toggle_full_screen()**

Toggles the fullscreen mode.


**Returns** _undefined_ 