import React from "react";
import PropTypes from "prop-types";

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

Card.propTypes = {
	taskIndexId: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.oneOf([null, undefined]),
		PropTypes.string
	]),
	taskName: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.oneOf([null, undefined])
	]),
	handleRemove: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.string,
		PropTypes.oneOf([null, undefined])
	])
};
