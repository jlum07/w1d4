var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });

function higherWord(wArr, action) {

  var rArray = [];

  wArr.forEach((word) => {
    rArray.push(action(word));
  });

  return rArray;

}

function wordLength(word) {
  return word.length;
}

function wordUpper(word) {
  return word.toUpperCase();
}

function wordReverse(word) {
  return word.split('').reverse().join('');
}

console.log(higherWord(words, wordLength));

console.log(higherWord(words, wordUpper));

console.log(higherWord(words, wordReverse));
