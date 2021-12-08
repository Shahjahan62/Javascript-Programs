
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





// let text;
// let text1;
// let text2;


// if (a[0] > b[0]) {
//     text = [1, 1]
// }
// if (a[1] = b[1]) {
//     text1 = [1, 0]
// }
// if (a[2] < b[2]) {
//     text2 = [0, 1]
// };

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


function miniMaxSum(arr) {
  // Write your code here
  let len = arr.length;
  var mini = 0;
  var max = 0;


  for (let i = 0; i < len; i++) {

    if (arr[i] > arr[0]) {
      max += arr[i]
    }
    if (arr[i] < arr[4]) {
      mini += arr[i]
    }

  }
  let x = mini + " " + max
  console.log(x);



}

let a = [1, 2, 3, 4, 5]

miniMaxSum(a);

let b = [7, 69, 2, 221, 8974]

miniMaxSum(b);