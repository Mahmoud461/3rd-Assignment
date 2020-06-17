function sevenBoom(array) {
  console.log(array);
  array = array.join("");
  array = array.split("");
  let count = 0;
  array.forEach((element) => {
    if (element == 7) {
      count++;
      console.log("Boom!");
    }
  });
  if (count == 0) {
    console.log("there is no 7 in the array");
  }
}
// sevenBoom([1, 2, 3, 4, 5, 6]);
// sevenBoom([2, 55, 60, 97, 86]);
