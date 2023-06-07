const { getDb } = require("../../../utilis/dbConfig");

module.exports.getTodos=async(req,res)=>{
    res.send("get todos");
}

module.exports.postTodo = async(req,res)=>{
    try {
        const db = getDb();
        const data = req.body;
        const result = await db.collection("todos").insertOne(data)

        res.send("Data inserted successfully")
    } catch (error) {
        
    }
}