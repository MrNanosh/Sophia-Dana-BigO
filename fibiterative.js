function fib(n) {
  let f = [1, 1];
  if (n <= 2) {
    if (n === 1) {
      f = [1];
    }
    return n ? f : 0;
  }
  for (let i = f.length; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f;
}
console.log(fib(7));
// Write a recursive program that prints the fibonacci sequence of a given number.
//   The fibonnaci sequence a series of numbers in which each number is the sum of the
//   two preceding numbers.
//   For example the 7th fibonacci number in a fibonaci sequence is  13.
//   The sequence looks as follows: 1 1 2 3 5 8 13.
