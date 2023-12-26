import "./style.css"
function ThumbnailCard(props) {
	return (
		<>
        <div className="flex">
			<figure>
				<img
					src={props.thumbnailUrl}
					alt="thumbnail"
				/>
			</figure>
        </div>
		</>
	);
}

export default ThumbnailCard;
