console.log(Math.random());

console.log(Math.floor(Math.random() * 10));


function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min)
}

console.log(getRndInt(0, 10));