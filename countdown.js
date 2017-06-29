var countdownGenerator = function (x) {
  var countdownId = x + 1;

  return function () {
    countdownId -= 1;
    return countdownId;
  }
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!