/**
 * Minimal "move i -> j" plan to transform src into dst.
 * One allowed op: arr.splice(to, 0, arr.splice(from, 1)[0])
 * Assumes: same length, same set of UNIQUE primitive values.
 *
 * @method   getSortingMoves
 * @global
 *  @example
 * ```javascript
 * const a = ['a','b','c','d','e'];
 * const b = ['b','a','e','c','d'];
 * const plan = bbn.fn.getSortingMoves(a, b);
 * console.log(plan);
 * // [{from:0, to:1, value: "a"}, {from:4, to:2, value: "e"}]
 * ```
 * @memberof bbn.fn
 * @param    {Array}  src       The array
 * @param    {Array}  dst         The index of the element to move
 * @returns  {Array}  The same array, with elements repositionned.
 */
// LIS indices on `pos` (strictly increasing)
const lisIndices = (arr: Array<any>) => {
  const n = arr.length, tails = [], prev = Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    let x = arr[i], lo = 0, hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[tails[mid]] < x) lo = mid + 1; else hi = mid;
    }
    if (lo > 0) prev[i] = tails[lo - 1];
    tails[lo] = i;
  }
  const res = [];
  for (let k = tails.length ? tails[tails.length - 1] : -1; k !== -1; k = prev[k]) res.push(k);
  return res.reverse();
};

export default function getSortingMoves(src: Array<any>, dst: Array<any>): Array<any>
{
  if (src.length !== dst.length) throw new Error("Lengths must match.");
  // Validate same unique set
  const setDst = new Set(dst);
  if (setDst.size !== dst.length) throw new Error("dst has duplicates.");
  const setSrc = new Set(src);
  if (setSrc.size !== src.length) throw new Error("src has duplicates.");
  if (src.length !== setDst.size || Array.from(setSrc).some(v => !setDst.has(v))) {
    throw new Error("Arrays must contain the same unique values.");
  }

  // Map each value to its index in dst
  const posInDst = new Map(dst.map((v, i) => [v, i]));
  // Convert src into positions-in-dst
  const pos = src.map(v => posInDst.get(v));


  const lisIdx = lisIndices(pos);
  const keepSet = new Set(lisIdx.map(i => src[i])); // values we won't move

  // Next kept anchor to the right for each dst index
  const nextKeptAfter = Array(dst.length).fill(-1);
  for (let i = dst.length - 2; i >= 0; i--) {
    nextKeptAfter[i] = nextKeptAfter[i + 1];
    if (keepSet.has(dst[i + 1])) nextKeptAfter[i] = i + 1;
  }

  // Simulate moves on a working copy
  const work = src.slice();
  const indexOf = new Map(work.map((v, i) => [v, i]));
  const moves = [];

  for (let i = 0; i < dst.length; i++) {
    const v = dst[i];
    if (keepSet.has(v)) continue; // leave in place

    const from: number | undefined = indexOf.get(v);
    if (from === undefined) {
      throw new Error("Inconsistent state");
    }

    const j = nextKeptAfter[i];
    const to: number | undefined = (j !== -1) ? indexOf.get(dst[j]) : work.length;
    if (to === undefined) {
      throw new Error("Inconsistent state");
    }

    const adjustedTo = from < to ? to - 1 : to;
    if (from !== adjustedTo) {
      const [moved] = work.splice(from, 1);
      work.splice(adjustedTo, 0, moved);
      moves.push({ from, to: adjustedTo, value: v });

      // refresh indices (simple & reliable)
      indexOf.clear();
      for (let p = 0; p < work.length; p++) indexOf.set(work[p], p);
    }
  }

  return moves;
};

