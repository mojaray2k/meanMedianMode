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
  var modeObj = {};

  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  var maxFreqquency = 0;
  var modes = [];
  for(var num in modeObj){
    if(modeObj[num] > maxFreqquency) {
      modes = [ num ];
      maxFreqquency = modeObj[num];
    }
    else if(modeObj[num] === maxFreqquency) modes.push(num);
  }

  if(modes.length === Object.keys(modeObj).length) modes = [];

  return modes;
}

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    medium: getMedian(array),
    mode: getMode(array)
  }
}

// meanMedianMode([1,2,3,4,5,4,6,1])
// => { mean: 3.25, medium: 3.5, mode: [ '1', '4' ] }

meanMedianMode([9,10,23,10,23,9])
// => { mean: 14, medium: 10, mode: [] }