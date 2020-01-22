function toh(
  n,
  dest,
  temp,
  src = initsrc(n)
) {
  if (n === 0) {
    printstate(src, temp, dest);
    return;
  }
  if (
    src[src.length - 1] >
    dest[dest.length - 1]
  ) {
    move(src, temp);

    printstate(src, temp, dest);

    return toh(
      temp.length,
      dest,
      temp,
      src
    );
  }
  if (n === 1) {
    move(src, dest);

    printstate(src, temp, dest);

    return toh(n, dest, temp, src);
  } else {
    move(src, temp);
    move(src, dest);
    move(temp, dest);
    printstate(src, temp, dest);
    return toh(n, dest, temp, src);
  }
}

function move(src, dest) {
  dest.push(src.pop());
  print(src, dest);
  return { src: src, dest: dest };
}

function initsrc(n) {
  return [...Array(n).keys()]
    .map(x => x + 1)
    .reverse();
}
function printstate(one, two, three) {
  console.log([one, two, three]);
}

function print(src, dest) {
  console.log(
    `${src.length ? src : 'empty'} to ${
      dest.length ? dest : 'empty'
    }`
  );
}

toh(3, [], []);

// console.log(src, n);
// let srcanddest = move(src, dest);
// let { src, dest } = srcanddest;
// let { src, dest } = move(src, dest);
