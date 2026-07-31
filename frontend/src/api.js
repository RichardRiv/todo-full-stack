const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getTodos() {
	try {
		const res = await fetch(`${BASE_URL}/api/todos`);
		const data = await res.json();
		console.log(data);
		return data;
	} catch (e) {
		console.log(e);
	}
}

export async function createTodo(todo) {
	try {
		const res = await fetch(`${BASE_URL}/api/todos`, {
			method: 'POST',
			body: JSON.stringify(todo),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const newTodo = await res.json();
		console.log(newTodo);
		return newTodo;
	} catch (e) {
		console.log(e);
	}
}

export async function deleteTodo(id) {
	try {
		const response = await fetch(`${BASE_URL}/api/todos/${id}`, {
			method: 'DELETE',
		});

		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}

export async function updateTodo(todos, id) {
	const todo = todos.find((todo) => todo._id == id);
	todo.completed = !todo.completed;

	try {
		const res = await fetch(`${BASE_URL}/api/todos/${id}`, {
			method: 'PUT',
			body: JSON.stringify(todo),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}
