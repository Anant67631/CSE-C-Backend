const fscalback = require('fs');
const read =()=> {
    fscalback.readFile("./data.txt","utf-8",(error,data)=>{
        if (error){
            console.error(error,message);
        }
        else {console.log(data);}
    });
}
read();
console.log("first");
console.log("second");
console.log("third");
console.log("fourth");