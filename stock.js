// Suppose we could access yesterday's stock prices as an array, where:
// The values are the price in dollars of Apple stock.
// A higher index indicates a later time.
// So if the stock cost $500 at 10:30am and $550 at 11:00am, then:
// stockPricesYesterday[60] = 500;
// Write an efficient function that takes stockPricesYesterday and returns
// the best profit I could have made from 1 purchase and 1 sale of 1 Apple
// stock yesterday.
// For example:
//     var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
// No "shorting"—you must buy before you sell. You may not buy and sell in
// the same time step (at least 1 minute must pass).

var yesterdayPrices = [10, 7, 5, 8, 11, 9, 3,20,20,1]

function getMaxProfit(px){
  var ary = px, pxDiff = 0;
  for(var i = 0; i < ary.length; i++){
    for(var j = ary.indexOf(ary[i]); j < ary.length; j++){
      // console.log(ary[i] + " " + ary[j]);
      if(ary[i] - ary[j] > pxDiff){
        pxDiff = ary[i]-ary[j];
      }
    }
  }
  return pxDiff
}

console.log(getMaxProfit(yesterdayPrices))
