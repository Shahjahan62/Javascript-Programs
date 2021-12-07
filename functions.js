function myFunction(a, b) {

   return a * b;
}

console.log(myFunction(4, 5));
console.log(myFunction(5, 6));

function function1(x, y, z) {
   if (x == y & y == z)
      return true;
   else
      return false;
}

console.log(function1(5, 5, 5));

function function2() {
   console.log({
      Name: "Abubakar",
      rollNo: 25,
      skill: "Back-End Dev"
   });

}
function function3() {
   return {
      Name: "Tayyab",
      rollNo: 18,
      skill: "Front-End Dev"
   }
}

function function4() {
   let x1 = 4;
   let y1 = 10;
   console.log(x1 * y1);
}

(function2());
console.log(function3());
(function4());




function function5(celsius) {
   return (celsius * 9 / 5) + 32;
}

console.log(function5(38));

function function6(kilometers) {
   return kilometers * 1.6;
}

console.log("Miles to Kilometers:" + function6(100));


function function7(fahrenheit) {
   return (5 / 9) * (fahrenheit - 32);

}
console.log(function7(98.6));


function function8(R1,R2){
   let sum;
   return sum=R1+R2;
}

console.log(function8(8,8));




function ageFind(age){

if (age<=15){
   return "You are Kid";
}else if (age>15 & age<=35){
   return "You are young";
}
else if (age>=35 & age <=50){
   return "You going to be old"
}
else {
   return "Now you are old";
}
}
let func=ageFind(25);
console.log(func);