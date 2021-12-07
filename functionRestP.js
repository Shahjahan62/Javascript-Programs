function sum(...argu){
    let sum=0;
    for (let arg of argu)
    {
        sum+=arg
    }
    return sum;
}

let x=sum(5,5,5,5,5);

console.log(x);

const person={
    name:'Abubakar',
    department:"BS-IT"
}
let id=Symbol("id")
person[id]=456564;

console.log(person[id]);


const fruits=["Apples","Guava","Banana","Lemon"]

for(let x of fruits.keys()){
    console.log(x);
}
