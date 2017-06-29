var countdownGenerator = function (x) {
  var countdownId = x + 1;
  var blastoff = 'Blast Off!'
  var gone = 'Rockets already gone, bub!'

  return function () {
    countdownId -= 1;
    var tminus = 'T-minus ' + countdownId + '...';
    if (countdownId === 0) {
      console.log(blastoff);
      return blastoff;
    } else if (countdownId < 0){
      console.log(gone)
      return gone;
    }
    console.log(tminus);
    return countdownId;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!