const person = {
    fname: "Rana",
    lname: "Abubakar",
    Department: "BS-IT",
    Institute: "University of gujrat"

}
let text = "";

for (let x in person) {
    text += person[x] + "  "
}

console.log(text);


const numbers = [5, 65, 45, 1, 46, 446, 4656]

for (let y in numbers) {
    console.log(numbers[y]);
}

// const arr=[45,6,54,12,54,5]

// arr.forEach(function myFunction(value){
//     console.log(value);
// })



