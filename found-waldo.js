function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + ".");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
