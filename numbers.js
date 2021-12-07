let x = 123e1;
console.log(x);

let y = 123e-4;
console.log(y);

let x1 = 0.2 + 0.1;
console.log(x1);

let x2 = "200";
let y2 = "20";

console.log(`Result= ${x2 / y2}`);
console.log(`Minus result= ${x2 - y2}`);
console.log(`Addition result= ${x2 + y2}`);

let x3 = 10;
let y3 = "Apple";
console.log(`${x3 / y3}`);
console.log(isNaN(y3));
console.log(typeof NaN);

let x4 = 50;

console.log(`Decimel = ${x4.toString(10)}`);
console.log(`Hexadecimel = ${x4.toString(16)}`);
console.log(`Octal = ${x4.toString(8)}`);
console.log(`Binary = ${x4.toString(2)}`);


// Numbers Method

let num=153;
console.log(num.toString());

let num2=453.6566;
console.log(num2.toExponential());
console.log(num2.toExponential(3));

let num3=45.5465464;
console.log(num3.toFixed(3));

let num4=9.4568;
console.log(num4.toPrecision());
console.log(num4.toPrecision(2));
console.log(num4.toPrecision(4));


console.log(num4.valueOf());

console.log(Number(10));
console.log(Number(true));
console.log(Number("10054"));
console.log(Number("10  10"));
console.log(Number('785'));
console.log(Number(56));

console.log(parseInt("10"));
console.log(parseInt("-10.545"));
console.log(parseInt("45 54"));
console.log(parseInt("years 10"));
console.log(parseInt("10 years"));


console.log(parseFloat("45.45"));
console.log(parseFloat("75 8 98"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 546464"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

// console.log(num4.MAX_VALUE);







