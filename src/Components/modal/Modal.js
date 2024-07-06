import React from "react";
import "./style.css";

export default function Modal({ isOpen, children, setModalOpen }) {
	if (isOpen) {
		return (
			<div className="modal" role="dialog">
				<div className="modal-content">
					<button onClick={setModalOpen}>
						<i className="fa-solid fa-rectangle-xmark" aria-label="close"></i>
					</button>
					<div>{children}</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
