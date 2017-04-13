function divisible(num, div){
  var counter = 0;
  for(var i = 1; i <= div ; i++ ){
    if(num % i == 0){
      counter++;
      if (counter == div){
        return num;
      }
    }
    else {
      return false;
    }
  }
}

function treeFind(num){
  var found = false, counter = 1;
  while(found == false){
    if(divisible(counter, num) == false){
      counter++;
    }
    else{
      return counter;
    }
  }
}


//console.log(divisible(2520, 10))
console.log(treeFind(20));
