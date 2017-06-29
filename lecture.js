//open/close princeiple - we want our code to be open so new ways of
//using our software will be available in the future

//call back is when you pass a function as a parameter
//to another function

//whateverWeDo is callback to tell the function what to do

//call back when you need information, I'll tell you what to do

// module.exports = waysToDsiplay;
// shows other files to use that library to use that code
// must require other files to look
// through the files to add the library
// require goes through the same directory (may have to go up and
// then down through another directory/)

//object&calbacks

var tweeps = ['@waxy', '@fzero', '@mozilla'];
tweeps.push('@wired');

function iterateArray (array, whateverWeDo) {
  for (i = 0; i < array.length; i++) {
    whateverWeDo(array[i], i);
  }
}

var displayStrategies = {
  consoleDisply: function (item) {
    console.log(item);
  },
  verticalDisplay: function (item) {
    console.log('- ', item);
  },
  numberedDisplay: function (item) {
    console.log('#' + item);
  },
  orderedDisplay: function(item, num) {
    console.log((num + 1) + '. ' + item);
  }
}



iterateArray(tweeps, displayStrategies.consoleDisply);

iterateArray(tweeps, displayStrategies.verticalDisplay);

iterateArray(tweeps, displayStrategies.orderedDisplay);



// displayStrategies.verticalDisplay(tweeps);

// displayStrategies.testVertical(tweeps);

.map() // is a call back function that requires a few paramteters
       // can produce a new array that can do basically anything




















