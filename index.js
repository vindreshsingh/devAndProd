const express=require("express");
const PORT= process.env.port;
const app=express();


console.log(PORT);
app.listen(PORT,(err)=>
{
    if(err){
        console.log("error")
    }
    console.log(`Server start on port ${PORT}`)
})
;