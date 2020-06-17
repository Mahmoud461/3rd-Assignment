function validName(name) {
  console.log(name);
  name = name.split("");

  let newName = [];
  let count = 0;
  let result = "";
  for (let i = 0; i < name.length; i++) {
    while (name[i] != " " && i < name.length) {
      newName.push(name[i]);
      i++;
    }
    if (newName.length > 1) {
      count++;
      result = checkName(newName, count);

      if (result === "false") {
        return console.log("false");
      }
    }
    newName = [];
  }
  if (count <= 1) {
    return console.log("false");
  }
  console.log("true");
}

function checkName(name, count) {
  if (name[0] == name[0].toLowerCase()) {
    return "false";
  }
  if (name.length == 2) {
    if (name[1] != ".") {
      return "false";
    }
  } else {
    if (name[name.length - 1] == ".") {
      return "false";
    }
  }
  if (count == 2 && name.length >= 2 && name[1] != ".") {
    return "false";
  }
  if (count == 3 && name.length == 2 && name[1] == ".") {
    return "false";
  }
}

// validName("Herbert G. Wells");
// validName("Herbert");
// validName("Herb. George Wells");
// validName("H. George Wells");
// validName("H. G. Wells");
