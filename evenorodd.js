function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else return false;
}
/**
 * O(1) - if you feed one value since there is
 * no growth
 * but O(n) - if you were able to use it in an for loop
 * since it would grow proportionally to the number
 * of values you are testing
 */
