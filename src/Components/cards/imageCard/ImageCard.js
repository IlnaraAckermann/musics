import "./style.css"
function ImageCard(props) {
	return (
		<>
        <div className="img-flex">
			<figure className="figure-image-card">
				<img className="img-imageCard"
					src={props.url}
					alt="imagem"
				/>
			</figure>
        </div>
		</>
	);
}

export default ImageCard;
