function countIdenticalArrays(arrays) {
  let count = 0;
  arrays.forEach((element, i) => {
    arrays[i] = element.join("");
  });
  for (let i = 0; i < arrays.length; i++) {
    for (let n = i + 1; n < arrays.length; n++) {
      if (arrays[i] == arrays[n]) {
        count++;
      }
    }
  }
  if (count == 1) {
    count++;
  }
  console.log(count);
}
// countIdenticalArrays([
//   [0, 0, 0],
//   [0, 1, 2],
//   [0, 0, 0],
//   [0, 0, 0],
// ]);
