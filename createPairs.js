function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (
      let j = i + 1;
      j < arr.length;
      j++
    ) {
      console.log(
        arr[i] + ', ' + arr[j]
      );
    }
  }
}
/**
 * this is increasing population double  for the amount
 * of items so it is polynomial
 * more or less this is O(n^2)
 */
