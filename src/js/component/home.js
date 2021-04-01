import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import card from "./card";

export function Home() {
	return (
		<div className="App bg-light row d-flex justify-content-center">
			{/* Titulo */}
			<div className="col-12 bg-light">
				<h1>Todos</h1>
			</div>
			{/* contenedor de los todos */}
			<div className="shadow p-3 mb-5 bg-white rounded col-10 mt-3">
				{/* Input donde escribir los todo */}
				<div className="form-group">
					<input type="text" className="form-control" />
				</div>
				{/* Componente Contenedor que lista todos los todos creados */}
				<div className="col-8">{/* Cada tarea o todo */}f</div>
				{/* Contador de Tasks o todos */}
				<div className="d-flex justify-content-start">
					<p> item left</p>
				</div>
			</div>
		</div>
	);
}
