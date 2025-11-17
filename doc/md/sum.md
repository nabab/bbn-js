### <a name="sum"></a>bbn.fn.sum(arr, numberProp, prop, val, operator)

  __Returns the sum of the given property or function for the array's elements matching the filter.__

  The filtering arguments follow the same scheme as bbn.fn.search.

  * __arr__ _Array_ The subject array
  * __numberProp__ _(String|Function)_ The property's name for which the value should be added to the sum, or a function returning the number.
  * __prop__ _(String|Object|Function)_ A property's name or a filter object or function
  * __val__ _Mixed_ The value with which comparing the given property
  * __operator__ _String_ The operator to use for comparison with the value as used in bbn.fn.compare

  __Returns__ _Number_ The sum

### Examples



```javascript
let invited = [
  {name: "Robert De Niro", attendees: 2, confirmed: true},
  {name: "Al Pacino", attendees: 1, confirmed: false},
  {name: "James Caan", attendees: 4, confirmed: false},
  {name: "Harvey Keitel", attendees: 5, confirmed: true}
];
// No filter
bbn.fn.sum(invited, "attendees");
// 12
// Filter
bbn.fn.sum(invited, "attendees", {confirmed: true});
// 7
```


```javascript
let cart = [
   {article: "Toothpaste", price: 2.50, quantity: 1},
   {article: "Toothbrush", price: 6, quantity: 2},
   {article: "Banana", price: 0.50, quantity: 3},
   {article: "T-shirt", price: 14, quantity: 3}
];
bbn.fn.sum(cart, a => a.price * a.quantity);
// 58
// Only the items with a quantity equal to 3
bbn.fn.sum(cart, a => a.price * a.quantity, {quantity: 3});
// 43.5
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

