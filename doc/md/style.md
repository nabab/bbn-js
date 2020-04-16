# style.js

## Styling functions.

- **bbn.fn.addColors(colors)**

  __Adds the given color to the object bbn.var.colors in order to be able to use.__

  the css classes bbn-bg-myColor for the background and bbn-myColor for the text color.

  * __colors__ _Object_ 

  __Returns__ _undefined_ 


```javascript
bbn.fn.addColors({maroon: '#800000'});
```

- **bbn.fn.addStyle(ele, o)**

  __not used.__

  * __ele__ _HTMLElement_ 
  * __o__ _Object_ 

  __Returns__ _*_ 

- **bbn.fn.animateCss(ele, animationName, callback)**

  __not used.__

  * __ele__ _HTMLElement_ 
  * __animationName__ _String_ 
  * __callback__ _Function_ 

  __Returns__ _*_ 

- **bbn.fn.center(ele)**

  __Centers the given element by giving it a position absolute.__

  * __ele__ _HTMLElement_ 

  __Returns__ _HTMLElement_ The dom element with the new style.


```javascript
//<div style="position: absolute; top: 73px; left: 0px;">Documentation</div>
bbn.fn.center('<div>Documentation</div>')
```

- **bbn.fn.colorToHex()**

  __Returns the hex color of the given rgb or color name.__


  __Returns__ _String_ 


```javascript
//"#ff0000"
bbn.fn.colorToHex('red');
```



```javascript
//"#ff0000"
bbn.fn.colorToHex('rgb(255,0,0)');
```

- **bbn.fn.cssExists(f)**

  __not used.__

  * __f__ _String_ 

  __Returns__ _undefined_ 

- **bbn.fn.outerHeight()**

  __not used.__


  __Returns__ _*_ 

- **bbn.fn.outerWidth()**

  __not used.__


  __Returns__ _*_ 

- **bbn.fn.selector()**

  __not used.__


  __Returns__ _*_ 