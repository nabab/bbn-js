# size.js

## Sizing functions.

 - [adjustHeight](#adjustHeight)
 - [adjustSize](#adjustSize)
 - [adjustWidth](#adjustWidth)
 - [calculateHeight](#calculateHeight)
 - [getScrollBarSize](#getScrollBarSize)
 - [toggleFullScreen](#toggleFullScreen)


- <a name="toggleFullScreen"></a>**bbn.fn.toggleFullScreen()**

  __Toggles the fullscreen mode.__


  __Returns__ _undefined_ 


```javascript
bbn.fn.toggle_full_screen();
```

- <a name="getScrollBarSize"></a>**bbn.fn.getScrollBarSize()**

  __Retutns the size of the scrollbar realative to the current environment.__


  __Returns__ _Number_ 


```javascript
bbn.fn.getScrollBarSize();
```

- <a name="adjustSize"></a>**bbn.fn.adjustSize(type, eles)**

  __Adjusts the size of the given elements.__

  * __type__ _String_ The dimension to adjust
  * __eles__ _Array_ The elements to adjust for the dimension

  __Returns__ _undefined_ 


```javascript
bbn.fn.adjustSize('height', ['<div><span>Adjusting height</span></div>']);
```

- <a name="adjustHeight"></a>**bbn.fn.adjustHeight()**

  __Adjusts the height of the element(s) given as argument.__


  __Returns__ _undefined_ 


```javascript
bbn.fn.adjustHeight(['<div><span>Adjusting height</span></div>']);
```

- <a name="adjustWidth"></a>**bbn.fn.adjustWidth()**

  __Adjusts the width of the element(s) given as argument.__


  __Returns__ _undefined_ 


```javascript
bbn.fn.adjustWidth('<div><span>Adjusting width</span></div>');
```

- <a name="calculateHeight"></a>**bbn.fn.calculateHeight(element)**

  __Returns the height of the given dom element and force the repaint of the element to trigger animations.__

  * __element__ _HTMLElement_ 

  __Returns__ _String_ The height of the element with its unit of measure.


```javascript
// "17.5px"
bbn.fn.calculateHeight(<p>Javascript documentation</p>);
```