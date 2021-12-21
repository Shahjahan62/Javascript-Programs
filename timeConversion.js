
function timeConversion(s) {
  // Write your code here



     let y=s.slice(8,10)

    var z=s.slice(0,2);

    var hours=Number(z)

     if(y =="PM" && z <12){
       hours+=12;
     }else{
       hours;
     }

     let hour_24=hours.toString()

     let time=hour_24+":"+"05"+":"+"45"



  return time;


}

let x=timeConversion("01:05:45PM")


console.log(x);
