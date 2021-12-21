
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  var firstApple = apples.map(result => {
    return a + result;
  })
  var firstOranges = oranges.map((rslt) => {
    return b + rslt;
  })

  var appleFalls = firstApple.filter(app => {

    let a = app >= 7 && app <= 11

    return a
  })
  var orangeFalls = firstOranges.filter(ora => {

    let b = ora >= 7 && ora <= 11

    return b
  })


  return appleFalls.length + '\n' + orangeFalls.length;

}

let a = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])

console.log(a);