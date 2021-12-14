// // const myPromise = new Promise(function (myResolve, myReject) {
// //     setTimeout(() => {
// //         myResolve("Welcome to university")
// //         myReject("Your code produce error");
// //     }, 3000);
// // });

// // myPromise.then(function (value) {
// //     console.log(value);
// // }, function (error) {
// //     console.log(error);
// // }
// // )

// // console.log(myPromise);


// // const myPromise2=new Promise(function (Resolve,Reject){
// //     let x=0;

// //     if (x===0){
// //         Resolve("Your code is running")
// //     }
// //     else{
// //         Reject("There is error in your code")
// //     }
// // })

// // myPromise2.then(function (value){
// //     return value;
// // },
// // function (error){
// //     return error;
// // }
// // );



// // console.log(myPromise2);

// const myPromise3=new Promise(function (Resolve,Reject){
//     let burger="eat";

//     if (burger==="eat"){
//         Resolve("I will give you burger")
//     }
//     else{
//         Reject("I will not give you")
//     }
// });

// myPromise3.then(function (value){
//     return value;
// },
// function (error){
//     return error;
// }
// )


// console.log(myPromise3);



// let str="This is a pen";

// let x=str.includes("Is");

// let y=str.split(" ")
// console.log(y);

// console.log(y.keys());

// // for(let x of y.keys()){
// //     console.log(x);
// // }

// let f=y.find(Find)

// function Find(value){
//     return value =="a"
// }

// console.log(f);
1

// console.log(x);

// let z=str.slice(0,7);
// let a=str.slice(8)

// console.log(z);
// console.log(a);


function promise(a,b) {
    return new Promise(function (resolve, reject) {
        console.log("please wait...");
        var c=a*b;
        setTimeout(() => {
            if (c==10) {
                resolve("Your code is succeeded")

            } else {
                reject("Your code is rejected")

            }
        }, 3000);

    })
}

promise(5,5).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})
