
// function display(some){
//     console.log(some);
// }


// function first(){
//     display("Hello!")
// }

// function second() {
//     display("Goodbye!");
// }

// first();
// second();

// function sum(a,b){
//     let sum=a+b;
//     return sum;
// }
// let result=sum(10,20)

// display(result)


// function myfunction(friend,callfriend) {
//     console.log(`Hello ${friend}`);
//     callfriend()

// }

// function myfunction1() {

//     console.log("I will you callback later");

// }

// myfunction("Ahmad",myfunction1)

// function greeting(greeting,welcome) {
//     setTimeout(() => {
//         welcome()
//     }, 3000);
//     console.log(greeting);
// }

// function wlcmStudent() {
//     console.log("Welcome to the University!");
// }

// greeting("Dear student",wlcmStudent)

// function myFunction(arr,callfunc1) {
//     const mp=arr.map(hello=>{
//        return  hello * 5;
//     })
//     setTimeout(() => {
//         callfunc1();
//     }, 3000);


// console.log(mp);;

// }

// function myFunction1() {
//     console.log("This is multiplication system");
// }

// myFunction([1,2,3,4,5],myFunction1)

// function time() {
//     setInterval(() => {
//         let d=new Date()
//         console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());

//         }, 1000);
// }

// time()

function addStd(a, message1,message2) {
    setTimeout(() => {
        message2()
    }, 3000);
    setTimeout(() => {
        
        let b = a.push("Tayyab","Hamayun","Abubakar")
        console.log(a);
        
    }, 5000);
    
    setTimeout(() => {
        console.log(a);
    }, 2000);
    message1()
    

}
function beforeAdd() {
    console.log("Before adding...");
}
function afterAdd() {
    console.log("After adding...");
}

addStd(["Falak sher"],beforeAdd,afterAdd)
