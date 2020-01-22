function wutdafact(numbah) {
  let dafact = 1;
  for (let i = numbah; i > 0; i--) {
    dafact *= i;
  }

  return dafact;
}

// Write a recursive program that finds the factorial of a given number.
// The factorial of a number can be found by multiplying that number by each number
// between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
console.log(wutdafact(5));
