var n = 1, sum = 0, limit = 4000000;
function fib(n){
  if(n <= 2){
    return 1;
  }
  if(n > 2 ){
    return (fib(n-1) + fib(n-2))
  }
}

while(sum <= limit){
  if(fib(n) % 2 === 0){
    sum += fib(n);
  }
  n+=1;
}
console.log(sum)
