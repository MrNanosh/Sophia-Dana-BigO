function naiveSearch(array, item) {
  for (
    let i = 0;
    i < array.length;
    i++
  ) {
    if (array[i] === item) {
      return i;
    }
  }
}
/**
 * O(n)
 * because there is an array and you have to, potentially,
 * search through each item once to find the item you
 * are looking for.
 * So it grows in time as you have more items.
 */
