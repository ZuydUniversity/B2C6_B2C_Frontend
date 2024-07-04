import React, { useState } from "react";
import "./componentstyles/searchbar.css";

interface SearchBarProps {
	onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = event.target.value;
		setQuery(newQuery);
		onSearch(newQuery);
	};

	return (
		<div className="searchbar-outer">
			<input type="text" value={query} onChange={handleInputChange} placeholder="Search..." />
		</div>
	);
};

export default SearchBar;
