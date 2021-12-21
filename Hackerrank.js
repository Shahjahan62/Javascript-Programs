






















































































function kangaroo(x1, v1, x2, v2) {
  // Write your code here


  var kang = kangaroo.forEach(function (value ) {

    var firstKang = x1 + v1;
    var secKang = x2 + v2

    if (firstKang === secKang) {
      console.log("YES");
    } 
    else {
      console.log("NO");
    }
  })

  return kang

}

let a = 0;
let b = 3;
let c = 4
let d = 2
let fun = kangaroo([a, b, c, d])

console.log(fun);



