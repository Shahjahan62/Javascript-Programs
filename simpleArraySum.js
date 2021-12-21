
let numbers=[1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
    // Write your code here

    let total = 0;
    for (let i in ar) {
        total += ar[i];
    }
    return total;

}
let sum = simpleArraySum(numbers)

console.log(sum)