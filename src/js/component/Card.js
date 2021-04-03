import React from "react";

export default function Card(props) {
	return (
		<>
			<div className="d-flex  todo-card" id={props.taskIndexId}>
				<p className="flex-grow-1">{props.taskName}</p>
				<span
					className="mr-3 my-auto"
					role="button"
					data-index-id={props.taskIndexId}
					onClick={() => props.handleRemove(props.taskName)}>
					x
				</span>
			</div>
			<hr />
		</>
	);
}
