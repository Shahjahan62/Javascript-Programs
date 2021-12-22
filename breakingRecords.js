function breakingRecords(scores) {
    // Write your code here
    
    var a=scores.filter((value)=>{
        let high= scores[0]>value 
        
         return high;
    })
    var b=scores.filter(value=>{
        let low=scores[0]<value
        
        return low;
    })
    // let e=a.sort()
    // let c=Math.max.apply(null,a)
    // let d=a.push(c)
    let e=a.filter((value,index)=>{
        return a.indexOf(value)===index;
    })
    
    return e.length+"\n"+b.length;

}

let a=breakingRecords([10,5,20,4,5,2,25,1])

console.log(a);
