### <a name="shortenObj"></a>bbn.fn.shortenObj(obj, max)

  __Shortens all the strings contained in the object properties or element in a array.__

  Modifies directly the given object by cuttin all its too long strings, and adding ellipsis (...) in this case.

  * __obj__ _(Object|Array)_ 
  * __[max=100]__ _Number_ 

  __Returns__ _(Object|Array)_ The same object, modified

### Examples



```javascript
bbn.fn.shortenObj({
  title: "Once upon a time in the west",
  synopsis: "There's a single piece of land around Flagstone with water on it, and rail baron Morton (Gabriele Ferzetti) aims to have it, knowing the new railroad will have to stop there. He sends his henchman Frank (Henry Fonda) to scare the land's owner, McBain (Frank Wolff), but Frank kills him instead and pins it on a known bandit, Cheyenne (Jason Robards). Meanwhile, a mysterious gunslinger with a score to settle (Charles Bronson) and McBain's new wife, Jill (Claudia Cardinale), arrive in town."
}, 50)
// {
//   "title": "Once upon a time in the west",
//   "synopsis": "There's a single piece of land around Flagstone wi..."
// }
```
[Back to top](#bbn_top)  <a name="bbn_top"></a>

