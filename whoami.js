function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

/**
 * it only returns true for prime numbers
 * this will take linear time because the worst
 * case is that a number will be prime and it will have
 * to go through all. we can assume that this will
 * be the case since the majority of numbers aren't
 * prime so O(n)
 */
