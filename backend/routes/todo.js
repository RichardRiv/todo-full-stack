import express from 'express';
import {
	getTodos,
	createTodo,
	deleteTodo,
	updateTodo,
} from '../controllers/todo.js';

const router = express.Router();

// GET todos
router.get('/', getTodos);

// POST create a todo
router.post('/', createTodo);

// DELETE remove a todo
router.delete('/:id', deleteTodo);

// PUT updating a todo
router.put('/:id', updateTodo);

export default router;
