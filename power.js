// Given a positive integer which fits in a 32 bit signed integer,
// find if it can be expressed as A^P where P > 1 and A > 0.
// A and P both should be integers.
//
// Example
// Input : 4
// Output : True
// as 2^2 = 4.

// function isPower(int){
//   var output;
//   for(var base = 2; base <= Math.sqrt(int); base++){
//     for(var power = 0; power <= Math.sqrt(int); power++){
//       var pow = Math.pow(base,power)
//       console.log(base, power)
//       if(pow == int){
//         return true
//       }
//     }
//   }
//   return false
// }

function isPower(val){
  if(val == 1){return val}
  if(val ==2){return 0}
  var base = 2, power = 0, result = false;
  while(result == false){
    if(Math.pow(base,power) == val && base < val){
      result = 1;
    }
    else if(Math.pow(base,power) < val){
      power++;
      if(Math.pow(base,power) > val){
        base++;
        power = 0;
      }
    }
    else{
      result = 0;
      break
    }
  }
  //console.log(base,power)
  //console.log(result)
  return result;
}

// console.log(isPower(2));
console.log(isPower(4));
console.log(isPower(16808));
console.log(isPower(536870912));
console.log(isPower(1024000000));
