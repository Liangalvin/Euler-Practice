// Given an array of integers, every element appears twice except for one.
// Find that single one.
// Note: Your algorithm should have a linear runtime complexity.
// Could you implement it without using extra memory?
// Example Input : [1 2 2 3 1] Output : 3

function singleInt(arr){
  var log = {}, result;
  for(var i = 0; i < arr.length; i++){
    var key = arr[i];
    var counter = (key in log) ? log[key]++ : log[key] = 1;
  }
  for(key in log){
    if(log[key] === 1){
      result = key;
    }
  }
  return result;
}

console.log(singleInt([1, 2, 2, 3, 1, 4, 5, 4, 3]));
