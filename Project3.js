function isPrime(num) {
  for(var i = 3; i < Math.sqrt(num); i+=2){
    if(num % i == 0){
      //console.log(num%i);
      return false
    }
  }
  return num;
}

function largestPrime(num){
  var primeNum = 1;
  for(var i = 3; i < Math.sqrt(num); i+=2){
    if(isPrime(i) && num % i == 0){
      primeNum = i;
    }
  }
  //return primeNum;
    if(primeNum == 1){
      return num;
    }
    else {
      return primeNum;
    }
}
//console.log(isPrime(11));
console.log(largestPrime(103));
//console.log(largestPrime(77777777777));
console.log(largestPrime(600851475143));
