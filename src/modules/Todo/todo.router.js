const express = require("express");
const { postTodo, getTodos } = require("./todo.controller");
const router = express.Router();

router.route('/').get(getTodos).post(postTodo)

module.exports = router;