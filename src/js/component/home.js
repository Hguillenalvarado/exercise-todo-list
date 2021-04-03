import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./Card.js";

export default function App() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);

	//Metodo para controlar el evento ENTER en el input y disparar la actualizacion del estado
	const handleKeyPress = event => {
		if (event.key === "Enter" && todo !== "") {
			// se crea el array con los datos del estado ya guardado mas el nuevo todo a agregar usando destructuring
			const todosArr = [...todoList, todo];
			//setamos el array en el estado total de Todos
			setTodoList(todosArr);
			//Limpiamos el estado de Todo para que el input se limpie
			setTodo("");
		} else {
			//TASk: agregar este mensaje de error en un Estado y mostrarlo sobre el Inpur cuando aplique.
			alert("Ingrese un valor");
		}
	};

	const handleClickRemove = targetElement => {
		const todoFinal = todoList.filter(item => item !== targetElement);
		setTodoList(todoFinal);
	};

	return (
		<div className="App bg-light row d-flex justify-content-center">
			{/* Titulo */}
			<div className="col-12 bg-primary">
				<h1>Todos</h1>
			</div>
			{/* contenedor de los todos */}
			<div className="shadow p-3 mb-5 bg-white rounded col-10 mt-3">
				{/* Input donde escribir los todo */}
				<div className="form-group">
					<input
						value={todo}
						id="todo-input"
						type="text"
						className="form-control"
						onChange={event => {
							setTodo(event.target.value);
						}}
						onKeyPress={handleKeyPress}
						placeholder="Please type a todo"
					/>
				</div>
				{/* Componente Contenedor que lista todos los todos creados */}
				<div className="col-8">
					{/* Cada tarea o todo */}
					{todoList.length > 0 &&
						todoList.map((item, idx) => {
							return (
								<Card
									key={idx}
									taskName={item}
									taskIndexId={idx}
									handleRemove={handleClickRemove}
								/>
							);
						})}
				</div>
				{/* Contador de Tasks o todos */}
				<div className="d-flex justify-content-start">
					<p
						className={`text-capitalize ${todoList.length === 0 &&
							`text-danger`}`}>
						{todoList.length} item left
					</p>
				</div>
			</div>
			{/* Testing Sombras */}
			<div className="col-12 ml-5">
				<div className="shadow p-3 bg-white rounded col-10 mt-3"></div>
				<div className="shadow p-3 bg-white rounded col-10 mt-3"></div>
			</div>
		</div>
	);
}
