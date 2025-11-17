### <a name="getSortingMoves"></a>bbn.fn.getSortingMoves(src, dst)

  __Minimal "move i -> j" plan to transform src into dst.__

  One allowed op: arr.splice(to, 0, arr.splice(from, 1)[0])
Assumes: same length, same set of UNIQUE primitive values.

  * __src__ _Array_ The array
  * __dst__ _Array_ The index of the element to move

  __Returns__ _Array_ The same array, with elements repositionned.
[Back to top](#bbn_top)  <a name="bbn_top"></a>

