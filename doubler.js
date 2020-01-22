function doubleArrayValues(array) {
  for (
    let i = 0;
    i < array.length;
    i++
  ) {
    array[i] *= 2;
  }
  return array;
}

/**
 * O(n)
 * because it only loops through the data once
 * so it will grow proportionately to the data
 */
