function reverse(str) {
  let reversed = '';
  for (
    let i = str.length - 1;
    i >= 0;
    i--
  ) {
    reversed += str[i];
  }
  return reversed;
}

// Write a program that reverses a string. Take a string as input,
// reverse the string, and return the new string.

console.log(reverse('reverse'));
