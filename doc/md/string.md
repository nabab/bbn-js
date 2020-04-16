# string.js

## Sizing functions.

### **bbn.fn.baseName(path)**

Return the name of the element indicated by path given to it as an argument.

* __path__ _String_ 

**Returns** _String_ name of the element in path


```javascript
//"file"
bbn.fn.baseName('folder/other_folder/file');
```


### **bbn.fn.br2nl(st)**

Replaces the html <br> tag with new line characters '\ n' if present in the string.

* __st__ _trin_ 

**Returns** _String_ 


```javascript
//"hello
//word!"
bbn.fn.br2nl('hello <br> word!')
```


### **bbn.fn.camelToCss(str)**

Returns the string passed as an argument in camelize mode for css.

* __str__ _String_ 

**Returns** _String_ 


```javascript
//"this-is-a-test"
bbn.fn.camelToCss("thisIsATest");
```


### **bbn.fn.camelize()**

Return the string passed as an argument in camelize mode.

A string can be separated for example by a underscore, a dash or space;
so the camelize function will automatically convert them to a single string.

* ____ _String_ 

**Returns** _String_ 


```javascript
//"thisIsATest"
bbn.fn.camelize("this_is-a test");
```

### **bbn.fn.correctCase(str)**

Converts the first character of the string to uppercase.

* __str__ _STring_ 

**Returns** _String_ 


```javascript
//"This is a test"
bbn.fn.correctCase("this is a test");
```


### **bbn.fn.dirName(path)**

Return the path of the folder containing the last hierarchical element of the path.

* __path__ _String_ 

**Returns** _String_ path of the folder


```javascript
//"folder/other_folder"
bbn.fn.dirName('folder/other_folder/file');
```

### **bbn.fn.escapeRegExp(str)**

Return a string escaped.

To escape the string by reducing the ambiguity between quotation marks and other characters used.

* __str__ _String_ 

**Returns** _String_ string with escape


```javascript
//"this\/is\/a\/test\/string"
bbn.fn.escapeRegExp("this/is/a/test/string");
```

### **bbn.fn.fileExt(filename)**

Gets the extension from a file's name.

The extension is returned in lower case; if the filename has no extension
or is not valid it will return an empty string.

* __filename__ _String_ 

**Returns** _String_ The file's extension


```javascript
// "txt"
bbn.fn.fileExt('my_file.txt')
```



```javascript
// "txt"
bbn.fn.fileExt('MY_FILE.TXT')
```



```javascript
// ""
bbn.fn.fileExt('MY_FILE')
```



```javascript
// ""
bbn.fn.fileExt('.MY_FILE')
```


### **bbn.fn.formatSize(st)**

Return the value of size for element html.

If the argument passed is a number it will return the value expressed in 'px' otherwise if string returns this ose nothing is passed it will return 'auto'.

* __st__ _String|Number_ 

**Returns** _String_ 

### **bbn.fn.hex2rgb()**

Convert an hexadecimmal string to RGB.

Converts a string that expresses a color in hexadecimal format into an object with
the properties that define the color and the corresponding value.


**Returns** _*_ 


```javascript
//{r:255, g:0, b:0}
bbn.fn.hex2rgb("#FF0000");
```


### **bbn.fn.html2text(st)**

Convert text in html format to plain text.

* __st__ _String_ 

**Returns** _String_ 


```javascript
//"Hello world!"
bbn.fn.html2text("<div><p>Hello <b>world!</b></p></div>");
```

### **bbn.fn.isColor(st)**

Intended to check if the argument provided is a color.

It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.

* __st__ _String_ 

**Returns** _Boolean_ 


```javascript
//true
bbn.fn.isColor("#FF0000")
```



```javascript
//true
bbn.fn.isColor("rgb 255, 0, 0");
```



```javascript
//true
bbn.fn.isColor("red");
```

### **bbn.fn.isDimension(st)**

* __st__ _String_ 

**Returns** _undefined_ 

### **bbn.fn.isEmail(st)**

Intended to check if the argument provided is an e-mail address written correctly.

* __st__ _String_ 

**Returns** _Boolean_ 


```javascript
//false
bbn.fn.isEmail('test@testorg');
```



```javascript
//true
bbn.fn.isEmail('test@test.org');
```

### **bbn.fn.isEmpty()**

Checks if the argument is empty or not.

* ____ _Object|Array|String_ 

**Returns** _Boolean_ 


```javascript
//true
bbn.fn.isEmpty({});
```


```javascript
//false
bbn.fn.isEmpty({test : 1});
```


```javascript
//true
bbn.fn.isEmpty([]);
```


```javascript
//false
bbn.fn.isEmpty(['test']);
```


```javascript
//true
bbn.fn.isEmpty('');
```


```javascript
//true
bbn.fn.isEmpty('test');
```

### **bbn.fn.md5(st)**

Converts and returns the argument passed in a string in md5 format.

* __st__ _Mixed_ 

**Returns** _String_ in md5 format


```javascript
//"486eb65274adb86441072afa1e2289f3"
bbn.fn.md5("this is a test string");
```


### **bbn.fn.nl2br(st)**

Replace if new line characters '\ n' with html tag '<br>'.

* __st__ _String_ 

**Returns** _String_ 


```javascript
//"hello <br> word!"
bbn.fn.nl2br('hello \n word!');
```

### **bbn.fn.percent(percent, cent)**

Returns the value of the proportion giving the percentage and the total from where to be calculated.

* __percent__ _Number|String_ 
* __cent__ _Number|String_ 

**Returns** _Number_ 


```javascript
//150
bbn.fn.percent('15',1000);
```



```javascript
//75
bbn.fn.percent(15,500);
```

### **bbn.fn.printf()**

* ____ _orma_ 

**Returns** _*_ 

### **bbn.fn.randomInt(min, max)**

Returns a random integer.

Generates and returns a random number in a range of numbers defined
by passed arguments a minimum and a maximum.

* __min__ _Number_ 
* __max__ _Number_ 

**Returns** _Number_ 


```javascript
//56
bbn.fn.randomInt(1,100);
```


### **bbn.fn.randomString(length, chars)**

Return a random String with random lenght,.

Generates a random string from the length of the random number,
taken from a range of numbers providing either only the minimum or also the maximum as arguments.

* __length__ _Number_ 
* __chars__ _String_ 

**Returns** _String_ 


```javascript
//"U7xXO0Xb"
bbn.fn.randomString(3,10);
```



```javascript
//"H8F"
bbn.fn.randomString(3);
```


### **bbn.fn.removeAccents(st)**

Return the string passed as an argument without accents.

* __st__ _String_ 

**Returns** _String_ 


```javascript
//"eeou"
bbn.fn.removeAccents("èéòù");
```

### **bbn.fn.removeTrailingChars(st, char)**

* __st__ _String_ 
* __char__ _String_ 

**Returns** _*_ 

### **bbn.fn.remove_all(st)**

Returns the string given as an argument,.

eliminating the new line characters '\ n' if contained and replaces
the quotes in corresponding ASCII codes.

* __st__ _String_ 

**Returns** _String_ 


```javascript
//"hello &quot;word&quot;!"
bbn.fn.remove_all('hello\n"word"!');
```

### **bbn.fn.remove_nl(st)**

Removes the '\n' characters that define a new line.

* __st__ _String_ 

**Returns** _String_ 


```javascript
//"hello word!"
bbn.fn.remove_nl("hello\nworld!")
```

### **bbn.fn.remove_quotes(st)**

Replace quotes in ASCII code.

* __st__ _String_ 

**Returns** _String_ 


```javascript
//"hello &#39;word&#39;!"
bbn.fn.remove_quotes("hello 'word'!");
```


```javascript
//"hello &quot;word&quot;!"
bbn.fn.remove_quotes('hello "word"!');
```

### **bbn.fn.repeat()**

Returns a string which is the repetition of the first argument for the number passed in the second argument.


**Returns** _String_ 


```javascript
//"HelloHelloHello"
bbn.fn.repeat('Hello', 3);
```

### **bbn.fn.replaceAll(find, replace, str)**

Looks for and replaces parts of string with what we want.

With the first argument you define what to replace,
the second argument with what you have to replace instead and the third argument is the string to be replaced.

* __find__ _String_ 
* __replace__ _String_ 
* __str__ _String_ 

**Returns** _String_ 


```javascript
//"Today is a beautiful day"
bbn.fn.replaceAll('-', ' ', 'Today-is-a-beautiful-day');
```

### **bbn.fn.rgb2hex(rgb)**

Convert an RGB string to hexadecimal.

Passing a string with the format that defines the rgb value as an argument,
it will return the corresponding string in hexadecimal format.

* __rgb__ _String_ 

**Returns** _String_ 


```javascript
//"#ff0000"
bbn.fn.rgb2hex("rgb(255, 0, 0)");
```

### **bbn.fn.roundDecimal(value, decimals)**

* __value__ _Number_ 
* __decimals__ _Number_ 

**Returns** __ 

### **bbn.fn.sanitize()**

Removes all unacceptable characters in a DOM node.


**Returns** _String_ 


```javascript
//"this_is_a_test"
bbn.fn.sanitize("this&is_$a^test");
```


### **bbn.fn.shorten(st, len)**

Returns an abbreviation to the given string.

Provides an abbreviation to the string passed as the first argument,
deciding through the second argument the number of characters to keep and the remainder replaced
by what is passed as the third argument and if not given a defalut it is: '...'.

* __st__ _String_ 
* __len__ _Number_ 

**Returns** _String_ 


```javascript
//"test***"
bbn.fn.shorten('testing', 4, '***');
```
 @example
```javascript
//"test..."
bbn.fn.shorten('testing', 4);
```

### **bbn.fn.stringify(v)**

Converts the argument passed to it into a single string.

It's possible to give as arguments elements of different nature specifically: array, number and function.
It will return the argument on string format.

* __v__ _Array|Number|Function_ 

**Returns** _String_ 


```javascript
//"helo,world"
bbn.fn.stringify(["helo", "world"]);
```



```javascript
//"3"
bbn.fn.removeAccents("3");
```



```javascript
//"function(){alert("hello world!")}"
bbn.fn.stringify(function(){alert("hello world!")});
```


### **bbn.fn.uniqString()**

Create a unique string in md5 format.

Converts and return all the arguments inserted in a unique string in md5 format.

* ____ _Mixed_ 

**Returns** _String_ The unique string in md5 format


```javascript
//"6cb083da4d4987af9b4fa4ad8ca23bb1"
bbn.fn.uniqString('test',['test'],{id:1, test:2},4);
```