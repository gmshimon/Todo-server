const { ObjectId } = require("mongodb");
const { getDb } = require("../../../utilis/dbConfig");

module.exports.getTodos = async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection("todos").find().toArray();

    if (result.length == 0) {
      return res.status(400).json({ success: false, error: "No data" });
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const db = getDb();
    const id = req.params.id;
    const result = await db
      .collection("todos")
      .deleteOne({ _id: new ObjectId(id) });

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {}
};

module.exports.updateTodo = async (req, res) => {
  try {
    const db = getDb();
    const id = req.params.id;
    const body = req.body;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const updateDoc = {
        $set:body
    }
    console.log(updateDoc);
    const result = await db
      .collection("todos")
      .updateOne(filter, updateDoc,options);

      res.status(200).json({
        success: true,
        message: "Updated successfully",
      })
  } catch (err) {}
};

module.exports.postTodo = async (req, res) => {
  try {
    const db = getDb();
    const data = req.body;
    const result = await db.collection("todos").insertOne(data);

    res.status(200).json({
      status: true,
      message: "data saved successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};
