import { fireEvent, render, screen } from "@testing-library/react";
import ThumbnailCard from "../Components/cards/thumbnailCard/ThumbnailCard";

describe("ThumbnailCard Component", () => {

    const url = "https://example.com/image.jpg";
    const thumbnailUrl = "https://example.com/thumbnail.jpg";
	
    it("ThumbnailCard renders correctly", () => {
        render(
            <ThumbnailCard
                thumbnailUrl={thumbnailUrl}
                url={url}
            />
        );
		const thumbnailImage = screen.getByAltText("thumbnail");
		expect(thumbnailImage).toBeInTheDocument();
		expect(thumbnailImage.src).toBe(thumbnailUrl);
	});

	it("ThumbnailCard opens modal", () => {
        render(
            <ThumbnailCard
                thumbnailUrl={thumbnailUrl}
                url={url}
            />
        );
		const thumb = screen.getByRole('figure');
		const modal = screen.queryByRole("dialog");
		expect(modal).not.toBeInTheDocument();
        fireEvent.click(thumb);
		screen.getByRole("dialog");
	});
});


