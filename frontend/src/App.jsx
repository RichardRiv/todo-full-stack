import { useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from './api';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default function App() {
	const [todos, setTodos] = useState([]);

	async function getData() {
		const data = await getTodos();
		setTodos(data);
	}

	useEffect(() => {
		getData();
	}, []);

	async function handleCreate(todo) {
		await createTodo(todo);
		getData();

		//Alternative
		// setTodos([...todos, newTodo]);
	}

	async function handleDelete(id) {
		await deleteTodo(id);
		getData();
	}

	async function handleUpdate(id) {
		await updateTodo(todos, id);
		getData();
	}

	return (
		<div>
			<Header />
			<Form handleCreate={handleCreate} />
			<TodoList
				todos={todos}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
			/>
		</div>
	);
}
