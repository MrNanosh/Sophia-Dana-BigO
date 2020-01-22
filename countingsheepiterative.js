const countSheep = function(sheep) {
  for (let i = sheep; i > 0; i--) {
    console.log(
      `${i}: Another sheep jump over the fence`
    );
  }

  console.log(
    `All sheep jumped over the fence`
  );
};
countSheep(9);
// 3: Another sheep jump over the fence
// 2: Another sheep jump over the fence
// 1: Another sheep jump over the fence
// All sheep jumped over the fence
