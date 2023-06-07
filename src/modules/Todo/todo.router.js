const express = require("express");
const { postTodo, getTodos, deleteTodo, updateTodo } = require("./todo.controller");
const router = express.Router();

router.route('/').get(getTodos).post(postTodo)
router.route('/:id').get(deleteTodo).put(updateTodo)

module.exports = router;