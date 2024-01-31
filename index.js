const express = require("express");
const cors= require("cors");
require('dotenv').config()
const { connection } = require("./db");
const { axisRouter } = require("./routes/axisRouter");
const { userRouter } = require("./routes/user.routes");
const { bookRouter } = require("./routes/blog.routes");
const app = express();
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/books",bookRouter)
app.use("/user",userRouter)


app.listen(process.env.port, async() => {
  try{
    await connection
      console.log("server listening on port "+process.env.port);
  }
  catch{
console.log('Unable to connect to db');
  }
});
//https://lib-a9dj.onrender.com
