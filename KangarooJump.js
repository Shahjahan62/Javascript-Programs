
function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    if ((x1 < x2 && v1 <= v2) || (x1 > x2 && v1 >= v2)) {
        return "NO"
    }
    else {
        if (x1 < x2) {
            while (x1 < x2 && x1 != x2) {
                x1 += v1
                x2 += v2
            }
        }
        else {
            while (x2 < x1 && x1 != x2) {
                x1 += v1
                v1 += x2
            }
        }
        if (x1 === x2) {
            return "YES"
        }
        else {
            return "NO"
        }
    }






}


let fun = kangaroo(0,3,4,2)

console.log(fun);





// var firstKang = x1 + v1;
// var secKang = x2 + v2


//   if (firstKang === secKang) {
//     return "YES"
//   } 
//   else if(firstKang !==secKang){
//     return  "NO";
//   }






