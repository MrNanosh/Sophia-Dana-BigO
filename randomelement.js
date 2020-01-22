function findRandomElement(arr) {
  return arr[
    Math.floor(
      Math.random() * arr.length
    )
  ];
}
/**
 * O(1)
 * because it just does a single operation
 * regardless of the size of the array it
 * should always take the same amount of time
 *
 */
