const cars = new Map([
    ["Mustang", 5045],
    ["Ford", 564],
    ["Ferrari", 6598]
]);
cars.set("Mustang", 6542)

console.log(cars);

const fruits = new Map();

fruits.set("Apples", 600);
fruits.set("Banana", 500)
fruits.set("Guava", 800);

// fruits.delete("Apples")

console.log(fruits);

console.log(fruits.has("Banana"));


fruits.forEach(function Map(value, key) {
    console.log(key + " = " + value);
})


for (const x of fruits.entries()) {
    console.log(x);

}

const person = new Map()

person.set("Abubakar", 21);
person.set("Tayyab", 22)
person.set("Hamayun", 19);


person.forEach(function Map2(value, key) {
    console.log(key + " " + value);
})




