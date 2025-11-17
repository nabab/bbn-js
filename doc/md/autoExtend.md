### <a name="autoExtend"></a>bbn.fn.autoExtend(namespace, obj)

  __Extends the bbn object by passing the namespace and the object it will merge with.__

  This function is a self-centric shortcut for adding functions or proerties
to the bbn object itself.

  * __namespace__ _String_ The bbn property, existing or not, in which the object will be merged
  * __obj__ _Object_ The object to merge

  __Returns__ _undefined_ No return value

### Examples



```javascript
bbn.fn.autoExtend("fn", {myOwnFunction: () => "Result of my own function"});
bbn.fn.myOwnFunction();
// Result of my own function
```


```javascript
bbn.fn.autoExtend("env", {serverLanguage: "php"});
bbn.env.sercerLanguage
// php
```


```javascript
bbn.fn.autoExtend("myProject", {name: "My Project"});
bbn.myProject.name
// Project
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

