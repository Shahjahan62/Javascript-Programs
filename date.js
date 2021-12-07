const d = new Date();
console.log(d);
console.log(d.toString());
console.log(d.toUTCString());
console.log(d.toDateString());
console.log(d.toISOString());
const d1 = new Date(9, 11, 5, 12, 56, 45, 51)
console.log(d1);

const d2 = new Date("October 25, 2021 02:15:56")
console.log(d2);

const d3 = new Date(864000000)
console.log(d3);




// Date Formats


const d4 = new Date("2021")
console.log(d4);


const d5 = new Date("2021-05-25T02:12:56Z")
console.log(d5);



const d6 = new Date("2021/05/12")
console.log(d6);

const d7 = new Date("OCT 15 2021")
console.log(d7);

let msec = Date.parse("Mar 25 2021")
console.log(msec);




// Get Date Method

const time = new Date();

console.log(time.getTime());

console.log(time.getFullYear());

console.log(time.getMonth());

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[time.getMonth()]
console.log(month);

console.log(time.getDate());

console.log(time.getHours());

console.log(time.getMinutes());

console.log(time.getSeconds());

console.log(time.getMilliseconds());

console.log(time.getDay());

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(days[time.getDay()]);




// Set Date Method


const time2 = new Date();
time2.setFullYear(2020, 5, 15)

console.log(time2);

const time3 = new Date();
time3.setMonth(11)

console.log(time3);

const time4 = new Date();
time4.setDate(12)

console.log(time4);


const time5 = new Date();
time5.setHours(20)
console.log(time5);

const time6 = new Date()
time6.setMinutes(40)
console.log(time6);

const time7 = new Date()
time7.setSeconds(45)

console.log(time7.toString());


