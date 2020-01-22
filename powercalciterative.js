function calc(base, n) {
  if (n <= 0) {
    return n
      ? 'exponent should not be a negative number'
      : 1;
  }
  let result = base;
  for (let i = 1; i < n; i++) {
    result *= base;
  }
  return result;
}

// Write a function called `powerCalculator()` that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
// * `powerCalculatorRec(10,2)`  should return `100`
// * `powerCalculatorRec(10,-2)`  should return `exponent should be >= 0`
// */

console.log(
  calc(10, 2),
  calc(10, 0),
  calc(10, -2)
);
