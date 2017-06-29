var words = ["ground", "control", "to", "major", "tom", 'david', 'bowie'];

function map(array, callback) {
  var arrayOfLengths = [];
  for (var i of words) {
    arrayOfLengths.push(callback(i))
  }
  return arrayOfLengths;
}

var showLengths = map (words, function (word) {
  return word.length;
})

console.log(showLengths);