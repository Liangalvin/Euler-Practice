function multiples(num){
  var sum = 0;
  for(var int = 0; int < num; int++){
    if(int%3==0){
      sum += int;
    }
    else if (int%5 == 0){
      sum += int;
    }
  }
  return(sum);
}
console.log(multiples(1000));
