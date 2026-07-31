import { useRef } from 'react';

export default function Form({ handleCreate }) {
	const inputRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();

		const todo = {
			text: inputRef.current.value,
		};

		inputRef.current.value = '';
		inputRef.current.focus();
		handleCreate(todo);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" ref={inputRef} />
			<button>Submit</button>
		</form>
	);
}
