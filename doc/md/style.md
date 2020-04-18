# style.js

## Styling functions.

<a name="bbn_top"></a>[addColors](#addColors)  
[center](#center)  
[colorToHex](#colorToHex)  


- <a name="center"></a>**bbn.fn.center(ele)** [Back to top](#bbn_top)

  __Centers the given element by giving it a position absolute.__

  * __ele__ _HTMLElement_ 

  __Returns__ _HTMLElement_ The dom element with the new style.


```javascript
//<div style="position: absolute; top: 73px; left: 0px;">Documentation</div>
bbn.fn.center('<div>Documentation</div>')
```

- <a name="addColors"></a>**bbn.fn.addColors(colors)** [Back to top](#bbn_top)

  __Adds the given color to the object bbn.var.colors in order to be able to use.__

  the css classes bbn-bg-myColor for the background and bbn-myColor for the text color.

  * __colors__ _Object_ 

  __Returns__ _undefined_ 


```javascript
//<div class="bbn-bg-maroon">background</div> <span class="bbn-maroon">text color</span>
bbn.fn.addColors({maroon: '#800000'});
```

- <a name="colorToHex"></a>**bbn.fn.colorToHex()** [Back to top](#bbn_top)

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