import { fireEvent, render, screen } from "@testing-library/react";
import ThumbnailCard from "../Components/cards/thumbnailCard/ThumbnailCard";

describe("ThumbnailCard Component", () => {
	const url = "https://example.com/image.jpg";
	const thumbnailUrl = "https://example.com/thumbnail.jpg";
	const component = () => render(
		<ThumbnailCard
			thumbnailUrl={thumbnailUrl}
			url={url}
		/>
	);

	it("ThumbnailCard renders correctly", () => {
		component();
		const thumbnailImage = screen.getByAltText("thumbnail");
		expect(thumbnailImage).toBeInTheDocument();
		expect(thumbnailImage.src).toBe(thumbnailUrl);
	});

	it("ThumbnailCard opens modal", () => {
		component()
		const thumb = screen.getByRole("figure");
		const modal = screen.queryByRole("dialog");
		expect(modal).not.toBeInTheDocument();
		fireEvent.click(thumb);
		screen.getByRole("dialog");
	});

	it("ThumbnailCard closes modal", () => {
		component();
		const thumb = screen.getByRole("figure");
		const modal = screen.queryByRole("dialog");
		expect(modal).not.toBeInTheDocument();
		fireEvent.click(thumb);
		screen.getByRole("dialog");
		fireEvent.click(screen.getByLabelText("close"));
		expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
	});
});
