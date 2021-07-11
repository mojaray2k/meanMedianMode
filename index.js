function getMean(array) {
  var sum = 0;

  array.forEach(num => {
    sum += num;
  });

  var mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  array.sort(function(a, b) { return a - b })
  var median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    var min1 = array[array.length / 2 - 1];
    var min2 = array[array.length / 2];
    median = (min1 + min2) / 2;
  }

  return median;
}

function getMode(array) {

}

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    medium: getMedian(array),
    mode: getMode(array)
  }
}