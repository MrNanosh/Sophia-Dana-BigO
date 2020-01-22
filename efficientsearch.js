function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor(
      (minIndex + maxIndex) / 2
    );
    currentElement =
      array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}
/**
 * O(log n)
 * this is logarithmic because assuming that it is sorted
 * you don't see a major increase in time as the array
 * gets really large. This is due to the nature
 * of updating the range of the search for every loop through
 *
 */
