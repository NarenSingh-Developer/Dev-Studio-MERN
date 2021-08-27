const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
require("./db/conn");
const usermessage = require("./model/schema");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}))


app.post("/contact" , async(req,res)=>{
    const {name, phone, textarea} = req.body;

      try{
          const detail = new usermessage({name, phone, textarea})
          await detail.save();
          res.status(200);
      }catch(err){
          console.log(err);
      }
})
app.listen(PORT, ()=>{
    console.log(`server is running port no ${PORT}`);
})