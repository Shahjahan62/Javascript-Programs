
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
let a=[-4, 3, -9, 0, 4, 1]
plusMinus(a)

let b=[8,4,9,65,5,8,5]

plusMinus(b);