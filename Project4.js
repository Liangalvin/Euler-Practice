function isPali(num){
  var pali = "", numStr = num.toString();
  for(var i = numStr.length; i >= 0; i--){
    //console.log(numStr.charAt(i));
    pali += numStr.charAt(i);
  }
  if(num == parseInt(pali)){
    return pali;
  }
  else {
    return false;
  }
}
// console.log(isPali(10001));

function findPali(){
  var mult1, mult2, pali=[];
  for(var i = 999; i >= 100; i--){
    for(var j = 999; j >= 100; j--){
      //console.log(i*j);
      if( i*j == isPali(i*j)){
        pali.push(i*j);
      }
    }
  }
  return Math.max.apply(Math, pali);
}

console.log(findPali());
