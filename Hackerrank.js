
// let numbers=[1, 2, 3, 4, 10, 11];

// function simpleArraySum(ar) {
//     // Write your code here

//     let total = 0;
//     for (let i in ar) {
//         total += ar[i];
//     }
//     return total;

// }
// let sum = simpleArraySum(numbers)

// console.log(sum)










//     function compareTriplets(a, b) {
//    // Write your code here

//     var ap = 0
//     var bp = 0
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             ap = ap + 1;
//         }
//         if (a[i] == b[i]) {

//         }
//         if (a[i] < b[i]) {
//             bp = bp +1;
//         };
//     }

//     let x = [ap, bp];


//     return x
// }

// let x = compareTriplets([5, 6, 7], [3, 6, 10]);

// console.log(x);










// function aVeryBigSum(ar) {
//     // Write your code here
//      var sum=0;
//     for(let i=0;i<ar.length;i++){
//         sum+=ar[i]
//     }

//     return sum;


// }

// let x=aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005])

// console.log(x)











// function plusMinus(arr) {
//     // Write your code here
//     let leng=arr.length
//     var plusNumb=0;
//     var minusNumb = 0;
//     var zeroNumb = 0;

//     for (let i = 0; i < leng; i++) {
//         if (arr[i] > 0) {

//             plusNumb++;


//         }
//         else if (arr[i] < 0) {
//             minusNumb++;

//         }
//         else if (arr[i] == 0) {
//             zeroNumb++

//         }


//     }


//     console.log((plusNumb/ leng).toFixed(6)+" ");
//     console.log((minusNumb / leng).toFixed(6)+" ");
//     console.log((zeroNumb / leng).toFixed(6)+" ");

// }
// let a=[-4, 3, -9, 0, 4, 1]
// plusMinus(a)

// let b=[8,4,9,65,5,8,5]

// plusMinus(b);








// function miniMaxSum(arr) {
//   // Write your code here
//   let len = arr.length;
//   var mini = 0;
//   var max = 0;
//   var c=Math.max.apply(null,arr)
//   var d=  Math.min.apply(null,arr)


//   for (let i = 0; i < len; i++) {

//     if (arr[i] > d) {
//       max += arr[i]
//     }
//     if (arr[i] < c ) {
//       mini += arr[i]
//     }

//   }
//   let x = mini + " " + max
//   console.log(x);

// }

// let a = [1, 2, 3, 4, 5]

// miniMaxSum(a);

// let b = [7, 69, 2, 221, 8974]

// miniMaxSum(b);










// function timeConversion(s) {
//   // Write your code here



//      let y=s.slice(8,10)

//     var z=s.slice(0,2);

//     var hours=Number(z)

//      if(y =="PM" && z <12){
//        hours+=12;
//      }else{
//        hours;
//      }

//      let hour_24=hours.toString()

//      let time=hour_24+":"+"05"+":"+"45"



//   return time;


// }

// let x=timeConversion("01:05:45PM")


// console.log(x);










// function gradingStudents(grades) {
//   //Write your code here

//     const rndGrades = grades.map(grds => {
//       if (grds >= 38 && grds % 5 >= 3) {
//         while (grds % 5 != 0) {
//           grds++
//         }
//       }
//       return grds
//     })
//     return rndGrades;
//   }


// let a = gradingStudents([4, 73, 67, 38, 33])

// console.log(a)










// function birthdayCakeCandles(candles) {
//   // Write your code here



//   var maxi=Math.max.apply(null,candles);

//   var d=candles.filter((value)=>maxi===value)

//   let len=d.length;

// return len ;

// }

// let a = birthdayCakeCandles([3, 2, 1, 3,3])

// console.log(a);










// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here

//   var firstApple = apples.map(result => {
//     return a + result;
//   })
//   var firstOranges = oranges.map((rslt) => {
//     return b + rslt;
//   })

//   var appleFalls = firstApple.filter(app => {

//     let a = app >= 7 && app <= 11

//     return a
//   })
//   var orangeFalls = firstOranges.filter(ora => {

//     let b = ora >= 7 && ora <= 11

//     return b
//   })


//   return appleFalls.length + '\n' + orangeFalls.length;

// }

// let a = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])

// console.log(a);








function kangaroo(x1, v1, x2, v2) {
  // Write your code here


  var kang = kangaroo.forEach(function (value) {

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



