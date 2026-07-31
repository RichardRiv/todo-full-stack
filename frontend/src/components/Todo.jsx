export default function Todo({ todo, handleUpdate, handleDelete }) {
	return (
		<li>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => {
					handleUpdate(todo._id);
				}}
			/>
			{todo.text}
			<button onClick={() => handleDelete(todo._id)}>X</button>
		</li>
	);
}
