function oddishOrEvenish(number) {
  number = number.toString();
  number = number.split("");
  let counter = 0;
  number.forEach((element) => {
    element = parseInt(element);
    counter = counter + parseInt(element);
  });
  let reminder = counter % 2;
  if (reminder == 0) {
    console.log("Evenish");
  } else {
    console.log("Oddish");
  }
}
// oddishOrEvenish(1211);
