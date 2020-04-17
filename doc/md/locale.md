# locale.js

## Locale functions.

- **bbn.fn.date(v)**

  __Returns a date object from the given argument.__

  * __v__ _String|Number_ 

  __Returns__ _date_ 


``` javascript
//Mon Feb 11 2019 12:00:00 GMT+0100 (Central European Standard Time)
bbn.fn.date('2019/02/11')
```


- **bbn.fn.dateSQL(v, dayOnly)**

  __Returns a date with SQL format.__

  * __v__ _Date|String_ 
  * __dayOnly__ _Boolean_ Whether or not include the time in the date

  __Returns__ _String_ 


``` javascript
//"2020-04-16 16:15:23"
let date = new Date();
bbn.fn.dateSQL(date,false);
```


- **bbn.fn.daysInMonth(v)**

  __Returns the number of days of the month given in the date.__

  * __v__ _String|Date_ 

  __Returns__ _Number_ 


``` javascript
//30
bbn.fn.daysInMonth(new Date());
```


- **bbn.fn.fdate(d, )**

  * __d__ _String|Date_ 
  * ____ _rong_resul_ 

  __Returns__ _undefined_ 

- **bbn.fn.fdatetime()**


  __Returns__ _*_ 

- **bbn.fn.ftime()**


  __Returns__ _*_ 

- **bbn.fn.money(val, kilo, currency, novalue, decimal, thousands, precision)**

  __Returns the given value to money format basing on the given configuration.__

  * __val__ _String|Number_ The value.
  * __kilo__ _Boolean_ If the value has to be rendered in kilo.
  * __currency__ _String_ The currency.
  * __novalue__ _String_ The string to return if no valid value is given.
  * __decimal__ _String_ The character to use separate decimals.
  * __thousands__ _String_ The character to use to separate thounsands.
  * __precision__ _Number_ The number of decimals places.

  __Returns__ _undefined_ 


``` javascript
// "5 856.0 $"
bbn.fn.money(5856, false, '$', false, '.' ,false, 1);
```
