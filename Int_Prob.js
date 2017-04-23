// Problem: Given a sequence of nonnegative integers A and an integer T,
// return whether there is a *continuous sequence* of A that sums up to
// exactly T
// Example: [23, 5, 4, 7, 2, 11], 20.
// Return True because 7 + 2 + 11 = 20
// [1, 3, 5, 23, 2], 8. Return True because 3 + 5 = 8
// [1, 3, 5, 23, 2],7 Return False because no sequence in this array adds up to 7
// Note: We are looking for an O(N) solution. There is an obvious O(N^2) solution
// which is a good starting point but is not the final solution we are looking for.
// It’s important for the code to be as efficient as possible.

function seqSum(arr, total){
  var found = false, tempArr = arr, i = 0, length = tempArr.length, sum = 0;

  while(found == false){
    if(sum == total){
      found = true;
      return found;
    }
    else if(sum != total){
      if(i < tempArr.length){
        sum += tempArr[i];
        i++;
      }
      else if (tempArr.length == 0){
        return found;
      }
      else if(i == tempArr.length){
        tempArr.shift();
        seqSum(tempArr, total)
      }
    }
  }

}

console.log(seqSum([1,2,3,4,5],22))
