import { useState } from "react";
import Modal from "../../modal/Modal";
import "./style.css";
import ImageCard from './../imageCard/ImageCard';

function ThumbnailCard(props) {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<div className="thumb-flex">
				<figure className="thumb" onClick={() => setOpenModal(true)}>
					<img
						src={props.thumbnailUrl}
						alt="thumbnail"
					/>
				</figure>
			</div>
			<Modal
				isOpen={openModal}
				setModalOpen={() => setOpenModal(!openModal)}
			>
				<ImageCard url={props.url}/>
			</Modal>
		</>
	);
}

export default ThumbnailCard;
