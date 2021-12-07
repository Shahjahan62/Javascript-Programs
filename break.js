
for (let i = 0; i < 10; i++) {
    if (i === 5) { break; }
    console.log(i);

}

for (let j = 0; j < 10; j++) {
    if (j === 4) { continue; }
    console.log(j);
}

const array = ["BMW", "Volvo", "Audi", "Ferrari"]

cars: {
    console.log(array[0]);
    console.log(array[1]);
   break cars;
    console.log(array[2]);
    console.log(array[3]);
}