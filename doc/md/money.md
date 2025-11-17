### <a name="money"></a>bbn.fn.money(val, kilo, currency, novalue, decimal, thousands, precision)

  __Returns the given value to money format basing on the given configuration.__

  * __val__ _String|Number_ The value.
  * __kilo__ _Boolean_ If the value has to be rendered in kilo.
  * __currency__ _String_ The currency.
  * __novalue__ _String_ The string to return if no valid value is given.
  * __decimal__ _String_ The character to use separate decimals.
  * __thousands__ _String_ The character to use to separate thounsands.
  * __precision__ _Number_ The number of decimals places.

  __Returns__ _undefined_ 

### Examples



``` javascript
// "5 856.0 $"
bbn.fn.money(5856, false, '$', false, '.' ,false, 1); 
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

