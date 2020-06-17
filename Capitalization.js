function capitalizationString(sentence) {
  sentence = sentence.split("");
  sentence[0] = sentence[0].toUpperCase();
  sentence.forEach((letter, i) => {
    if (letter == ".") {
      let count = i + 1;
      while (sentence[count] == " ") {
        count++;
      }
      sentence[count] = sentence[count].toUpperCase();
    }
  });
  sentence = sentence.join("");
  console.log(sentence);
}
capitalizationString(
  "hello world. it's a lovely day.      i should go out.          hello world"
);
