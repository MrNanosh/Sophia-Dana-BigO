function split(str, delim) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === delim) {
      //skip

      if (
        result[result.length - 1] !== ''
      ) {
        result[result.length] = '';
      }
    } else {
      if (!result[0]) {
        result[result.length] = '';
      }
      result[result.length - 1] +=
        str[i];
    }
  }
  return result;
}

console.log(split('bannanas', 'n'));

// String Splitter
// Split a string based upon a separator (similar to String.prototype.split).
// Input: '1/21/2018'
// Output: 1212018 OR ["1", "21", "2018"]
// */
