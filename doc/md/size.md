# size.js

## Sizing functions.

- **bbn.fn.adjustHeight()**

  __Adjusts the height of the element(s) given as argument.__


  __Returns__ _undefined_ 


```javascript
bbn.fn.adjustHeight(['<div><span>Adjusting height</span></div>']);
```

- **bbn.fn.adjustSize(type, eles)**

  __Adjusts the size of the given elements.__

  * __type__ _String_ The dimension to adjust
  * __eles__ _Array_ The elements to adjust for the dimension

  __Returns__ _undefined_ 


```javascript
bbn.fn.adjustSize('height', ['<div><span>Adjusting height</span></div>']);
```

- **bbn.fn.adjustWidth()**

  __Adjusts the width of the element(s) given as argument.__


  __Returns__ _undefined_ 


```javascript
bbn.fn.adjustWidth('<div><span>Adjusting width</span></div>');
```

- **bbn.fn.calculateHeight(element)**

  __Returns the height of the given dom element and force the repaint of the element to trigger animations.__

  * __element__ _HTMLElement_ 

  __Returns__ _String_ The height of the element with its unit of measure.


```javascript
// "17.5px"
bbn.fn.calculateHeight(<p>Javascript documentation</p>);
```

- **bbn.fn.getScrollBarSize()**

  __Retutns the size of the scrollbar realative to the current environment.__


  __Returns__ _Number_ 


```javascript
bbn.fn.getScrollBarSize();
```

- **bbn.fn.toggle_full_screen()**

  __Toggles the fullscreen mode.__


  __Returns__ _undefined_ 


```javascript
bbn.fn.toggle_full_screen();
```