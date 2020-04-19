# string.js

## Sizing functions.

<a name="bbn_top"></a>[baseName](#baseName)  
[br2nl](#br2nl)  
[camelToCss](#camelToCss)  
[camelize](#camelize)  
[correctCase](#correctCase)  
[dirName](#dirName)  
[escapeRegExp](#escapeRegExp)  
[fileExt](#fileExt)  
[formatSize](#formatSize)  
[hex2rgb](#hex2rgb)  
[html2text](#html2text)  
[isColor](#isColor)  
[isDimension](#isDimension)  
[isEmail](#isEmail)  
[isEmpty](#isEmpty)  
[md5](#md5)  
[nl2br](#nl2br)  
[percent](#percent)  
[printf](#printf)  
[randomInt](#randomInt)  
[randomString](#randomString)  
[removeAccents](#removeAccents)  
[removeTrailingChars](#removeTrailingChars)  
[remove_all](#remove_all)  
[remove_nl](#remove_nl)  
[remove_quotes](#remove_quotes)  
[repeat](#repeat)  
[replaceAll](#replaceAll)  
[rgb2hex](#rgb2hex)  
[roundDecimal](#roundDecimal)  
[sanitize](#sanitize)  
[shorten](#shorten)  
[stringify](#stringify)  
[uniqString](#uniqString)  


### <a name="fileExt"></a>bbn.fn.fileExt(filename)

  __Gets the extension from a file's name.__

  The extension is returned in lower case; if the filename has no extension
or is not valid it will return an empty string.

  * __filename__ _String_ 

  __Returns__ _String_ The file's extension


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

[Back to top](#bbn_top)  

### <a name="uniqString"></a>bbn.fn.uniqString()

  __Create a unique string in md5 format.__

  Converts and return all the arguments inserted in a unique string in md5 format.

  * ____ _Mixed_ 

  __Returns__ _String_ The unique string in md5 format


```javascript
//"6cb083da4d4987af9b4fa4ad8ca23bb1"
bbn.fn.uniqString('test',['test'],{id:1, test:2},4);
```
[Back to top](#bbn_top)  

### <a name="md5"></a>bbn.fn.md5(st)

  __Converts and returns the argument passed in a string in md5 format.__

  * __st__ _Mixed_ 

  __Returns__ _String_ in md5 format


```javascript
//"486eb65274adb86441072afa1e2289f3"
bbn.fn.md5("this is a test string");
```

[Back to top](#bbn_top)  

### <a name="escapeRegExp"></a>bbn.fn.escapeRegExp(str)

  __Returns a string escaped.__

  To escape the string by reducing the ambiguity between quotation marks and other characters used.

  * __str__ _String_ 

  __Returns__ _String_ string with escape


```javascript
//"this\/is\/a\/test\/string"
bbn.fn.escapeRegExp("this/is/a/test/string");
```
[Back to top](#bbn_top)  

### <a name="roundDecimal"></a>bbn.fn.roundDecimal(value, decimals)

  * __value__ _Number_ 
  * __decimals__ _Number_ 

  __Returns__ __ 
[Back to top](#bbn_top)  

### <a name="rgb2hex"></a>bbn.fn.rgb2hex(rgb)

  __Convert an RGB string to hexadecimal.__

  Passing a string with the format that defines the rgb value as an argument,
it will return the corresponding string in hexadecimal format.

  * __rgb__ _String_ 

  __Returns__ _String_ 


```javascript
//"#ff0000"
bbn.fn.rgb2hex("rgb(255, 0, 0)");
```
[Back to top](#bbn_top)  

### <a name="hex2rgb"></a>bbn.fn.hex2rgb()

  __Convert an hexadecimmal string to RGB.__

  Converts a string that expresses a color in hexadecimal format into an object with
the properties that define the color and the corresponding value.


  __Returns__ _Mixed_ 


```javascript
//{r:255, g:0, b:0}
bbn.fn.hex2rgb("#FF0000");
```

[Back to top](#bbn_top)  

### <a name="camelize"></a>bbn.fn.camelize()

  __Returns the string passed as an argument in camelize mode.__

  A string can be separated for example by a underscore, a dash or space;
so the camelize function will automatically convert them to a single string.

  * ____ _String_ 

  __Returns__ _String_ 


```javascript
//"thisIsATest"
bbn.fn.camelize("this_is-a test");
```
[Back to top](#bbn_top)  

### <a name="sanitize"></a>bbn.fn.sanitize()

  __Removes all unacceptable characters in a DOM node.__


  __Returns__ _String_ 


```javascript
//"this_is_a_test"
bbn.fn.sanitize("this&is_$a^test");
```

[Back to top](#bbn_top)  

### <a name="camelToCss"></a>bbn.fn.camelToCss(str)

  __Returns the string passed as an argument in camelize mode for css.__

  * __str__ _String_ 

  __Returns__ _String_ 


```javascript
//"this-is-a-test"
bbn.fn.camelToCss("thisIsATest");
```

[Back to top](#bbn_top)  

### <a name="correctCase"></a>bbn.fn.correctCase(str)

  __Converts the first character of the string to uppercase.__

  * __str__ _STring_ 

  __Returns__ _String_ 


```javascript
//"This is a test"
bbn.fn.correctCase("this is a test");
```

[Back to top](#bbn_top)  

### <a name="randomInt"></a>bbn.fn.randomInt(min, max)

  __Returns a random integer.__

  Generates and returns a random number in a range of numbers defined
by passed arguments a minimum and a maximum.

  * __min__ _Number_ 
  * __max__ _Number_ 

  __Returns__ _Number_ 


```javascript
//56
bbn.fn.randomInt(1,100);
```

[Back to top](#bbn_top)  

### <a name="randomString"></a>bbn.fn.randomString(length, chars)

  __Returns a random String with random lenght,.__

  Generates a random string from the length of the random number,
taken from a range of numbers providing either only the minimum or also the maximum as arguments.

  * __length__ _Number_ 
  * __chars__ _String_ 

  __Returns__ _String_ 


```javascript
//"U7xXO0Xb"
bbn.fn.randomString(3,10);
```



```javascript
//"H8F"
bbn.fn.randomString(3);
```

[Back to top](#bbn_top)  

### <a name="isEmail"></a>bbn.fn.isEmail(st)

  __Intended to check if the argument provided is an e-mail address written correctly.__

  * __st__ _String_ 

  __Returns__ _Boolean_ 


```javascript
//false
bbn.fn.isEmail('test@testorg');
```



```javascript
//true
bbn.fn.isEmail('test@test.org');
```
[Back to top](#bbn_top)  

### <a name="isColor"></a>bbn.fn.isColor(st)

  __Intended to check if the argument provided is a color.__

  It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.

  * __st__ _String_ 

  __Returns__ _Boolean_ 


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
[Back to top](#bbn_top)  

### <a name="isDimension"></a>bbn.fn.isDimension(st)

  * __st__ _String_ 

  __Returns__ _undefined_ 
[Back to top](#bbn_top)  

### <a name="isEmpty"></a>bbn.fn.isEmpty()

  __Checks if the argument is empty or not.__

  * ____ _Object|Array|String_ 

  __Returns__ _Boolean_ 


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
[Back to top](#bbn_top)  

### <a name="shorten"></a>bbn.fn.shorten(st, len)

  __Returns an abbreviation to the given string.__

  Provides an abbreviation to the string passed as the first argument,
deciding through the second argument the number of characters to keep and the remainder replaced
by what is passed as the third argument and if not given a defalut it is: '...'.

  * __st__ _String_ 
  * __len__ _Number_ 

  __Returns__ _String_ 


```javascript
//"test***"
bbn.fn.shorten('testing', 4, '***');
```
 @example
```javascript
//"test..."
bbn.fn.shorten('testing', 4);
```
[Back to top](#bbn_top)  

### <a name="replaceAll"></a>bbn.fn.replaceAll(find, replace, str)

  __Looks for and replaces parts of string with what we want.__

  With the first argument you define what to replace,
the second argument with what you have to replace instead and the third argument is the string to be replaced.

  * __find__ _String_ 
  * __replace__ _String_ 
  * __str__ _String_ 

  __Returns__ _String_ 


```javascript
//"Today is a beautiful day"
bbn.fn.replaceAll('-', ' ', 'Today-is-a-beautiful-day');
```
[Back to top](#bbn_top)  

### <a name="remove_quotes"></a>bbn.fn.remove_quotes(st)

  __Replace quotes in ASCII code.__

  * __st__ _String_ 

  __Returns__ _String_ 


```javascript
//"hello &#39;word&#39;!"
bbn.fn.remove_quotes("hello 'word'!");
```


```javascript
//"hello &quot;word&quot;!"
bbn.fn.remove_quotes('hello "word"!');
```
[Back to top](#bbn_top)  

### <a name="remove_nl"></a>bbn.fn.remove_nl(st)

  __Removes the '\n' characters that define a new line.__

  * __st__ _String_ 

  __Returns__ _String_ 


```javascript
//"hello word!"
bbn.fn.remove_nl("hello\nworld!")
```
[Back to top](#bbn_top)  

### <a name="remove_all"></a>bbn.fn.remove_all(st)

  __Returns the string given as an argument,.__

  eliminating the new line characters '\ n' if contained and replaces
the quotes in corresponding ASCII codes.

  * __st__ _String_ 

  __Returns__ _String_ 


```javascript
//"hello &quot;word&quot;!"
bbn.fn.remove_all('hello\n"word"!');
```
[Back to top](#bbn_top)  

### <a name="nl2br"></a>bbn.fn.nl2br(st)

  __Replace if new line characters '\ n' with html tag '<br>'.__

  * __st__ _String_ 

  __Returns__ _String_ 


```javascript
//"hello <br> word!"
bbn.fn.nl2br('hello \n word!');
```
[Back to top](#bbn_top)  

### <a name="br2nl"></a>bbn.fn.br2nl(st)

  __Replaces the html <br> tag with new line characters '\ n' if present in the string.__

  * __st__ _trin_ 

  __Returns__ _String_ 


```javascript
//"hello
//word!"
bbn.fn.br2nl('hello <br> word!')
```

[Back to top](#bbn_top)  

### <a name="html2text"></a>bbn.fn.html2text(st)

  __Convert text in html format to plain text.__

  * __st__ _String_ 

  __Returns__ _String_ 


```javascript
//"Hello world!"
bbn.fn.html2text("<div><p>Hello <b>world!</b></p></div>");
```
[Back to top](#bbn_top)  

### <a name="removeAccents"></a>bbn.fn.removeAccents(st)

  __Returns the string passed as an argument without accents.__

  * __st__ _String_ 

  __Returns__ _String_ 


```javascript
//"eeou"
bbn.fn.removeAccents("èéòù");
```
[Back to top](#bbn_top)  

### <a name="stringify"></a>bbn.fn.stringify(v)

  __Converts the argument passed to it into a single string.__

  It's possible to give as arguments elements of different nature specifically: array, number and function. 
It will return the argument on string format.

  * __v__ _Array|Number|Function_ 

  __Returns__ _String_ 


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

[Back to top](#bbn_top)  

### <a name="percent"></a>bbn.fn.percent(percent, cent)

  __Returns the value of the proportion giving the percentage and the total from where to be calculated.__

  * __percent__ _Number|String_ 
  * __cent__ _Number|String_ 

  __Returns__ _Number_ 


```javascript
//150
bbn.fn.percent('15',1000);
```



```javascript
//75
bbn.fn.percent(15,500);
```
[Back to top](#bbn_top)  

### <a name="dirName"></a>bbn.fn.dirName(path)

  __Returns the path of the folder containing the last hierarchical element of the path.__

  * __path__ _String_ 

  __Returns__ _String_ path of the folder


```javascript
//"folder/other_folder"
bbn.fn.dirName('folder/other_folder/file');
```
[Back to top](#bbn_top)  

### <a name="baseName"></a>bbn.fn.baseName(path, suffix)

  __Returns the name of the element indicated by path given to it as an argument.__

  * __path__ _String_ The path from which the basename must be extracted
  * __suffix__ _String_ An optional suffix that will be removed from the basename

  __Returns__ _String_ The basename of path


```javascript
// "file.png"
bbn.fn.baseName('folder/other_folder/file.png');
```


```javascript
// "file"
bbn.fn.baseName('folder/other_folder/file.png', '.png');
```

[Back to top](#bbn_top)  

### <a name="printf"></a>bbn.fn.printf()

  * ____ _orma_ 

  __Returns__ _Mixed_ 
[Back to top](#bbn_top)  

### <a name="removeTrailingChars"></a>bbn.fn.removeTrailingChars(st, char)

  * __st__ _String_ 
  * __char__ _String_ 

  __Returns__ _Mixed_ 
[Back to top](#bbn_top)  

### <a name="formatSize"></a>bbn.fn.formatSize(st)

  __Returns the value of size for element html.__

  If the argument passed is a number it will return the value expressed in 'px' otherwise if string returns this ose nothing is passed it will return 'auto'.

  * __st__ _String|Number_ 

  __Returns__ _String_ 
[Back to top](#bbn_top)  

### <a name="repeat"></a>bbn.fn.repeat()

  __Returns a string which is the repetition of the first argument for the number passed in the second argument.__


  __Returns__ _String_ 


```javascript
//"HelloHelloHello"
bbn.fn.repeat('Hello', 3);
```
[Back to top](#bbn_top)  