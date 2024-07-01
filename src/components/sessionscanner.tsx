import React, { useState } from "react";
import "./componentstyles/sessionscanner.css";

const Scanner: React.FC = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const images = ["Images/diddy.png", "Images/femur.jpg", "Images/longen.jpeg"];

	const totalImages = images.length;

	const goToPreviousImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
	};

	const goToNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
	};

	return (
		<section className="scanner-container">
			<div className="scanner-card">
				<h1 className="scanner-title">Scanner</h1>
				<div className="scanner-preview" role="img" aria-label="Scanner preview area">
					<img src={images[currentImageIndex]} alt={`Scanner preview ${currentImageIndex}`} />
				</div>
				<h2 className="aspect-title">Aspect</h2>
				<div className="button-scanner-container">
					<button className="left-icon-scanner" onClick={goToPreviousImage}>
						<img src="Icons/left.svg" alt="Left icon" />
					</button>
					<button className="right-icon-scanner" onClick={goToNextImage}>
						<img src="Icons/right.svg" alt="Right icon" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Scanner;
