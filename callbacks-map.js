var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  var emptyArray = [];
  for (var i of words) {
    emptyArray.push(callback(i))
  }
  console.log(emptyArray);
}

map (words, function (word) {
  return word.length;
})