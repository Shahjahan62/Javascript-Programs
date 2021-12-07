let text = "This is some text!";
console.log(text.length);

let text1 = "This is the \"Javascript\" "
console.log(text1);

let text2 = "This is javascript  \b code"
console.log(text2);
let text3 = "This is javascript  \f code"
console.log(text3);
let text4 = "This is javascript  \n code"
console.log(text4);
let text5 = "This is javascript  \r code"
console.log(text5);
let text6 = "This is javascript  \t code"
console.log(text6);
let text7 = "This is javascript  \v code"
console.log(text7);

//String Method starts here

let str = "This is some text extract from js";
console.log(str.slice(5));

let str1 = "This is some text extract from js";
console.log(str1.slice(-12, -5));

let str2 = "This is javascript. and some text from javascript ";
console.log(str2.substr(5, 13));

console.log(str2.substr(6));
console.log(str2.substr(-4));

console.log(str2.replace("This", "That"));
console.log(str2.replace(/JAVASCRIPT/i, "Python"));
console.log(str2.replace(/javascript/g, "JAVA"));

console.log(str2.toUpperCase());

console.log(str2.toLowerCase());

console.log(str1.concat(" ", str2));


console.log(str1.trim());

let str3 = "     This is the new code      ";

console.log(str3.trim());

let str4 = "5";
console.log(str4.padStart(0, 5));
console.log(str4.padEnd(4, 4));


let str5 = "This is new string";
console.log(str5.charAt(3));

console.log(str5.charCodeAt(2));

let char = str5[0]
console.log(char);

console.log(str5.split(" , "));
console.log(str5.split(" "));
console.log(str5.split("|"));



// String Search Method

let txt="Javascript has very wide uses in technology";
console.log(txt.indexOf("has"));
console.log(txt.indexOf("uses"));

let txt2="Python is very popular language in IT.Python has wide uses";
console.log(txt2.lastIndexOf(/Python/i));
console.log(txt2.indexOf("Python",0));

console.log(txt2.lastIndexOf("Python",0));

console.log(txt2.search("popular"));


let txt3="Javascript is a famous programming languages.Javascript is used in web devs.SCRIPT LANGUAGES";

console.log(txt3.match(/script/gi));

console.log(txt3.includes("Javascript",20));


console.log(txt3.startsWith("famous",16));

console.log(txt3.endsWith("LANGUAGES"));


//String Template Literals


let txt4=`The quick
"brown" fox
jumps over
the lazy "dog"`;

console.log(txt4);


let firstName="Rana";
let lastName="Abubakar";
console.log(`Welcome ${firstName} ${lastName}`);


let firstVal=55;
let secVal=45;
let result=firstVal+secVal;

console.log(`The Result is ${result}`);

console.log(`The new result will be ${firstVal+secVal}`);