function reversedBinaryInteger(number) {
  number = number.toString(2);
  number = number.split("");
  console.log(number);
  let newNumber = [];
  for (let i = 0; i < number.length; i++) {
    newNumber[i] = number[number.length - i - 1];
  }
  newNumber = newNumber.join("");
  newNumber = parseInt(newNumber, 2);
  console.log(newNumber);
}
// reversedBinaryInteger(25);
