function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(
        result[i - 2] + result[i - 3]
      );
    }
  }
  return result;
}
/**
 *  it is doing one operation for every integer
 * until the number is reached. so this grows linearly
 * as numbers increase which is O(n)
 */
