function triangle(num) {
  let triangle = 0;
  for (let i = 1; i <= num; i++) {
    triangle += i;
  }
  return triangle;
}

console.log(triangle(1));
