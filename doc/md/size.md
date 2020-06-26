# size.js

## Size and resizing.

<a name="bbn_top"></a>[bbn.fn.__adjustHeight__](#adjustHeight)  
Adjusts the height of the element(s) given as argument.  
[bbn.fn.__adjustSize__](#adjustSize)  
Adjusts the size of the given elements.  
[bbn.fn.__adjustWidth__](#adjustWidth)  
Adjusts the width of the element(s) given as argument.  
[bbn.fn.__getScrollBarSize__](#getScrollBarSize)  
Retutns the size of the scrollbar realative to the current environment.  
[bbn.fn.__toggleFullScreen__](#toggleFullScreen)  
Toggles the fullscreen mode.  


### <a name="toggleFullScreen"></a>bbn.fn.toggleFullScreen()

  __Toggles the fullscreen mode.__


  __Returns__ _undefined_ 


```javascript
// Straight forward isn't it?
bbn.fn.toggleFullScreen();
```
[Back to top](#bbn_top)  

### <a name="getScrollBarSize"></a>bbn.fn.getScrollBarSize()

  __Retutns the size of the scrollbar realative to the current environment.__


  __Returns__ _Number_ 


```javascript
bbn.fn.getScrollBarSize();
// 16
```
[Back to top](#bbn_top)  

### <a name="adjustSize"></a>bbn.fn.adjustSize(type, eles)

  __Adjusts the size of the given elements.__

  * __type__ _String_ The dimension to adjust
  * __eles__ _Array_ The elements to adjust for the dimension


  __Returns__ _undefined_ 


```html
<div class="container">
  <div style="float: left; width: 25%; background-color: red">
    This is a random text
  </div>
  <div style="float: left; width: 25%; background-color: blue">
    This is a random text bla bla bla bla bla bla bla bla bla bla bla bla
  </div>
  <div style="float: left; width: 25%; background-color: green">
    This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  </div>
  <div style="float: left; width: 25%; background-color: yellow">
    This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  </div>
</div>
<script>
bbn.fn.adjustSize('height', document.body.querySelectorAll('.container > div'));
</script>
```

[Back to top](#bbn_top)  

### <a name="adjustHeight"></a>bbn.fn.adjustHeight()

  __Adjusts the height of the element(s) given as argument.__


  __Returns__ _undefined_ 


```html
<div class="container">
  <div style="float: left; width: 25%; background-color: red">
    This is a random text
  </div>
  <div style="float: left; width: 25%; background-color: blue">
    This is a random text bla bla bla bla bla bla bla bla bla bla bla bla
  </div>
  <div style="float: left; width: 25%; background-color: green">
    This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  </div>
  <div style="float: left; width: 25%; background-color: yellow">
    This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  </div>
</div>
<script>
bbn.fn.adjustHeight(document.body.querySelectorAll('.container > div'));
</script>
```

[Back to top](#bbn_top)  

### <a name="adjustWidth"></a>bbn.fn.adjustWidth()

  __Adjusts the width of the element(s) given as argument.__


  __Returns__ _undefined_ 


```html
<div class="container">
  <div style="float: left; background-color: red">
    This is a random text
  </div>
  <div style="float: left; background-color: blue">
    This is a random text bla bla bla bla bla bla bla bla bla bla bla bla
  </div>
  <div style="float: left; background-color: green">
    This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  </div>
  <div style="float: left; background-color: yellow">
    This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  </div>
</div>
<script>
bbn.fn.adjustWidth(document.body.querySelectorAll('.container > div'));
</script>
```

[Back to top](#bbn_top)  