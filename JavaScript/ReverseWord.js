//Method 1. without any pre-define Function

var sentence = "the quick brown fox jumped over the lazy dog ";
var revStr = "";
var ans = "";
for (let i = 0; i < sentence.length; i++) {
  if (!(sentence[i] == " ")) {
    revStr += sentence[i];
  } else {
    let str = "";
    for (let j = 0; j < revStr.length; j++) {
      str += revStr[revStr.length - 1 - j];
    }
    ans += str + " ";
    revStr = "";
  }
}
console.log(ans);

// Method 2. with function

const revserSentence = (str) => {
  const arr = str.split(" ");
  const fans = arr.map((s) => {
    return s.split("").reverse().join("");
  });
  return fans.join(" ");
};
console.log(revserSentence(sentence));
