const express = require("express");
const cors = require("cors");
const { connectToServer } = require("./utilis/dbConfig");
const app = express();
const todosRouter = require('./src/modules/Todo/todo.router');
const port = process.env.PORT || 5000;
//middleware
app.use(cors());
app.use(express.json());
connectToServer((err)=>{
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    })  
    console.log(err);
})


app.use('/api/v1/todos',todosRouter);



app.get("/", (req, res) => {
    res.send("Hello World");
});
  