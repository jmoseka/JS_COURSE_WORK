document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const camelCase = function (text) {
  let arr = [];
  let words = [];
  let s = "";
  let secondWord = "";
  let newStr = "";
  let firstWord = "";
  text = text.trim().toLowerCase().split("\n");
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].replace("_", " ").split(" ");
    s = text[i];
    firstWord = s[0];
    secondWord = s[1];
    secondWord = secondWord.replace(secondWord[0], secondWord[0].toUpperCase());
    newStr = firstWord + secondWord;
    if (i === 0) {
      i = 1;
      console.log(`${newStr} ${"✅".repeat(i)}`);
    } else {
      console.log(`${newStr} ${"✅".repeat(i)}`);
    }
  }
  //console.log(text);

  //arr.push(text);

  //arr.push(text);
  //for (let i = 0; i < arr.length; i++) {
  // words.push(arr[i].replace("_", " "));
  //}
};

document.querySelector("button").addEventListener("click", function () {
  const listStr = document.querySelector("textarea").value;
  camelCase(listStr);
});
//a list of variable names

/*let arr = [
  "underscore_case",
  " first_name",
  "Some_Variable",
  " calculate_AGE",
  "delayed_departure",
];
camelCase(arr);*/

//const s = text.trim().toLowerCase().replace("_", " ").split(" ");
//let secondWord = s[1];
//secondWord = secondWord.replace(secondWord[0], secondWord[0].toUpperCase());
//let newStr = [];
//newStr.push(s[0]);
//newStr.push(secondWord);
//console.log(newStr.join(""));
