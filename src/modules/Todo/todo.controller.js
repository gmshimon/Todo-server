const { getDb } = require("../../../utilis/dbConfig");

module.exports.getTodos=async(req,res)=>{
    res.send("get todos");
}

module.exports.postTodo = async(req,res)=>{
    try {
        const db = getDb();
        const data = req.body;
        const result = await db.collection("todos").insertOne(data)

        res.status(200).json({
            status:true,
            message:"data saved successfully"
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:error.message
        })
    }
}