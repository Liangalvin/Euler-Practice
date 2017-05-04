// Given an even number ( greater than 2 ),
// return two prime numbers whose sum will be equal to given number.
// Example: Input : 4
//          Output: 2 + 2 = 4
// If [a, b] is one solution with a <= b,
// and [c,d] is another solution with c <= d, then
// [a, b] < [c, d]
// If a < c OR a==c AND b < d.

// console.log(primeNum(29));
function primeSum(int){
  var ary = [];

  for(var i = 3; i <= int; i+=2){
    var primes = []
    var num1 = (primeNum(i) != false)?i:false;
    var num2 = primeNum(int - num1)? primeNum(int-num1):false;
    if(num1 != false && num2 != false){
      return [num1, num2]
    }
  }

  function primeNum(num){
    for(var i = 3; i <= Math.sqrt(num); i++){
      if(num % i == 0){
        return false;
      }
    }
    return num;
  }
}
console.log(primeSum(12))
