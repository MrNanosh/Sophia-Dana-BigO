function areYouHere(arr1, arr2) {
  for (
    let i = 0;
    i < arr1.length;
    i++
  ) {
    const el1 = arr1[i];
    for (
      let j = 0;
      j < arr2.length;
      j++
    ) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
/**
 * O(n^2)
 * the poorest run times are when arrays are equal in size.
 * this is a nested loop and loops will take n time
 * each for the amount of data. nested loops redundantly
 * go through the data so therefore it is n^2
 */
