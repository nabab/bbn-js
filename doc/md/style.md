# style.js

## Styling functions.

### **bbn.fn.addColors(colors)**

Adds the given color to the object bbn.var.colors in order to be able to use.

the css classes bbn-bg-myColor for the background and bbn-myColor for the text color.

Fires bbn.fn.numProperties
Fires document.createElement
Fires document.head.appendChild
* __colors__ _Object_ 

**Returns** _undefined_ 


```javascript
bbn.fn.addColors({maroon: '#800000'});
```

### **bbn.fn.addStyle(ele, o)**

not used.

* __ele__ _HTMLElement_ 
* __o__ _Object_ 

**Returns** _*_ 

### **bbn.fn.animateCss(ele, animationName, callback)**

not used.

* __ele__ _HTMLElement_ 
* __animationName__ _String_ 
* __callback__ _Function_ 

**Returns** _*_ 

### **bbn.fn.center(ele)**

Centers the given element by giving it a position absolute.

* __ele__ _HTMLElement_ 

**Returns** _HTMLElement_ The dom element with the new style.


```javascript
//<div style="position: absolute; top: 73px; left: 0px;">Documentation</div>
bbn.fn.center('<div>Documentation</div>')
```

### **bbn.fn.colorToHex()**

Returns the hex color of the given rgb or color name.


**Returns** _*_ 


```javascript
//"#ff0000"
bbn.fn.colorToHex('red');
```



```javascript
//"#ff0000"
bbn.fn.colorToHex('rgb(255,0,0)');
```

### **bbn.fn.cssExists(f)**

not used.

* __f__ _String_ 

**Returns** _undefined_ 

### **bbn.fn.outerHeight()**

not used.


**Returns** _*_ 

### **bbn.fn.outerWidth()**

not used.


**Returns** _*_ 

### **bbn.fn.selector()**

not used.


**Returns** _*_ 