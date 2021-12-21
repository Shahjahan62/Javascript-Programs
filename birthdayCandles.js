
function birthdayCakeCandles(candles) {
  // Write your code here



  var maxi=Math.max.apply(null,candles);

  var d=candles.filter((value)=>maxi===value)

  let len=d.length;

return len ;

}

let a = birthdayCakeCandles([3, 2, 1, 3,3])

console.log(a);