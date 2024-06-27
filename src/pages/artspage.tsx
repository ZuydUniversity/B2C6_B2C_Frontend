import React from "react";
import "./styles/stylesheetarts.css";
import Sidebar from "../components/sidebar";

const ArtsPage: React.FC = () => {
	return (
		<div className="arts-page">
			{/* <h1 id="title">Artsen Page</h1> wordt gebruikt voor een rendercheck */}
			<h1 id="title">Artsen Page</h1>
			<p>Dit is een pagina voor de artsen, hier kun je zien welke artsen er zijn.</p>
		</div>
	);
};

export default ArtsPage;
