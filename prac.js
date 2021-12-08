// function add(str){

//     let y=parseInt("17");

//     let x=parseInt(str)



//     return  x+y
// }

// let x=add("102");


// console.log(x);


// function nand(str,str1){

//     if(str===str1 ){

//     return false
//     }else{

//     return true;
//     }


//     }

//     let x=nand(false,false)

//     console.log(x)

// function addWithSurcharge(a, b) {

//     let surcharge=0;

//     if (a <= 10) {
//         surcharge=surcharge+1
//     }
//     else if(a>10 && a<20){
//         surcharge=surcharge + 2;
//     }else {
//         surcharge=surcharge + 3;

//     }

//     if (b <= 10) {
//         surcharge=surcharge+1
//     }
//     else if(b>10 && b<=20) {
//         surcharge=surcharge + 2;
//     } else{
//         surcharge=surcharge + 3;

//     }

// return a +  b+ surcharge
// }

// let x=addWithSurcharge(10,20)

// console.log(x)

// function toArray(a,b){

//     return [a,b]
// }

// let x=toArray(5,6)

// console.log(x);

// function getFirstElement(a){

//     return a[0]
// }

// let x=getFirstElement([5,6])
// console.log(x);

// function setFirstElement(anArray,element){

// anArray[0]=element;
// return  anArray;

// }

// let y=setFirstElement([4,6],5)

// console.log(y);

// function getLastElement(array){

//     return array[array.length-1]

// }

// let z=getLastElement([4,9])
// console.log(z);

// function sort(array) {

//     return array.sort();
// }

// let x = sort([4, 2, 6])
// console.log(x);

// function rotate(array) {

//     array.shift()
//     array.push("a")
//     return array;
// }

// let x = rotate( ["a", "b", "c"])
// console.log(x);

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


function plusMinus(arr) {
    // Write your code here
    let leng=arr.length
    var plusNumb=0;
    var minusNumb = 0;
    var zeroNumb = 0;

    for (let i = 0; i < leng; i++) {
        if (arr[i] > 0) {

            plusNumb++;
        

        }
        else if (arr[i] < 0) {
            minusNumb++;

        }
        else if (arr[i] == 0) {
            zeroNumb++

        }


    }
   
    
    console.log((plusNumb/ leng).toFixed(6)+" ");
    console.log((minusNumb / leng).toFixed(6)+" ");
    console.log((zeroNumb / leng).toFixed(6)+" ");

}
// let a=[-4, 3, -9, 0, 4, 1]
// plusMinus(a)

let b=

plusMinus(b)



