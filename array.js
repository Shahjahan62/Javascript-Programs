const arr = [];
arr[0] = "Audi";
arr[1] = "Ford";
console.log(arr);

const car = new Array("Volkswagon", "Buggati", "Tesla")
car[3] = "Marcedes";
car[4] = "Royles ryco"
car.push("Toyota")
console.log(car);
console.log(car.length);
console.log(car[car.length - 1]);

let text = " ";

for (let i = 0; i < car.length; i++) {
    text += "=" + car[i] + "\n";
}

console.log(text);

car.forEach(function myFunction(value) {
    text += value + "\n";
})

console.log(text);

console.log(Array.isArray(car));
console.log(car instanceof Array);





// Array Methods



const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits.join("|"));
console.log(fruits.pop());
console.log(fruits.push("Guava"));
console.log(fruits.shift());
console.log(fruits.unshift("Pomegranates"));

const std = ["Banana", "Mango", "Apple", "Guava"]
std[std.length] = "Kiwi"
console.log(std);

const std1 = ["Banana", "Mango", "Apple", "Guava"]

console.log(std1.splice(1, 2, "Lemon", "Kiwi"));
console.log(std1);
console.log(std1.splice(0, 3));
console.log(std1);


const teachers = ["ahmad", "sikandar", "iqbal"]
const students = ["abubakar", "tayyab", "usama", "hamayun"]
console.log(teachers.concat(students, std1));
console.log(students.slice(1));
console.log(students.slice(1, 2));
console.log(students);





//Array Sort


let person = ["Abuabakar", "Tayyab", "Usama", "Hamayun"]
console.log(person.sort());

console.log(person.reverse());

let numbers = [45, 65, 2, 4, 8, 65]
function A(a, b) {
    return a - b;
}
console.log(numbers.sort(A))

const arr1 = [45, 65, 52, 56, 86, 6];

function arrayMax(array) {
    return Math.max.apply(null, array)
}

console.log(arrayMax(arr1));



const arr2 = [456, 65, 5, 12, 8, 5, 65]

function arrayMin(array) {
    return Math.min.apply(null, array)
}

console.log(arrayMin(arr2));


const arr3 = [
    { name: "Volvo", year: 2021 },
    { name: "Saab", year: 2015 },
    { name: "BMW ", year: 2018 }
]

arr3.sort(function arrSort(a, b) {
    return a.year - b.year;
})

console.log(arr3);






// Array Iteration


const array1 = [43, 65, 58, 4, 6, 878]
let text1 = "";
array1.forEach(function myFunction1(value, index, array) {
    return text1 += value + "\n";
})

console.log(text1);


const array2 = [56, 65, 56, 2, 5, 6, 8];
const array3 = array2.map(myFunction2);

function myFunction2(value, index, array) {
    return value * 2;
}

console.log(array3);


const array4 = [65, 5, 4, 6, 8, 10, 11]
const array5 = array4.map(myFunction3)


function myFunction3(value) {
    return value + 6;
}

console.log(array5);


const array6 = ["Lemon", "Onion", "Orange", "Flower"];
const array7 = array6.map(myFunction4)

function myFunction4(value) {
    return value + " Juice"
}

console.log(array7);



const nums = [45, 65, 2, 5, 89, 42, 8, 20]
const over20 = nums.filter(Filter)


function Filter(value, index, array) {
    return value >= 20;
}
console.log(over20);

const nums1 = ["Apple", "Banana", "Mango", "Guava"]
const fav = nums1.filter(FilterFruits)

function FilterFruits(value, index, array) {
    return value;
}

console.log(fav);


const nums2 = [45, 6, 56, 6, 65, 45]
let sum = nums2.reduce(ReduceAdd, 100)

function ReduceAdd(value, total) {
    return value += total;
}
    
console.log(sum);


const nums3 = [54, 65, 5, 5, 44, 14]
let subt = nums3.reduce(ReduceFun1, 100)

function ReduceFun1(total, value) {
    return total - value;
}

console.log(subt);

const num4 = [56, 5, 45, 98, 6]
let sum1 = num4.reduceRight(ReduceAdd1)

function ReduceAdd1(total, value) {
    return total - value;
}

console.log(sum1);




const nums5 = [54, 65, 85, 5, 6, 20, 45, 64];
let over30 = nums5.every(EveryVal)

function EveryVal(value) {
    return value > 30;
}

console.log(over30);


const num6 = [54, 65, 5, 45, 65, 45]
let over25 = num6.some(SomeVal)

function SomeVal(value) {
    return value > 25;
}

console.log(over25);


const fruits1 = ["Apple", "Banana", "Mango", "Kiwi"]
let position = fruits1.indexOf("Banana") + 1;

console.log(position);



const fruits2 = ["Apple", "Banana", "Mango", "Apple", "Kiwi"]
const position2 = fruits2.lastIndexOf("Apple") + 1;
console.log(position2);

console.log(fruits2.includes("Kiwi"));


const numbers1 = [45, 5, 65, 5, 45, 84978, 8]
let over18 = numbers1.find(FindFun)

function FindFun(value) {
    return value > 18;
}

console.log(over18);


const numbers2 = [4, 5, 65, 5, 45, 84978, 8]
let over19 = numbers2.findIndex(FindFun1)

function FindFun1(value) {
    return value > 19;
}

console.log(over19);

const myArr = Array.from("ABBSKJDHHLHFF")
console.log(myArr);


const fruits3 = ["Apple", "Banana", "Mango", "Apple", "Kiwi", "Grapes"]

let text2 = "";
for (let x of fruits3.keys()) {
    text2 += x + "\n"
}

console.log(text2);