const {readFile,writeFile} = require("fs");
// const { resolve } = require("path");
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        return console.log(err);
    }
   const first = result;
    readFile('./content/write.txt','utf8',(err,result)=>{
        if(err){
            return  console.log(err);
        }
       const second = result;
        writeFile("./content/write2.txt","here we write the second2 file",(err,result)=>{
            if(err){
                return console.log(err);
            }
            console.log(result)
        })
    })
})
// console.log("hello");

