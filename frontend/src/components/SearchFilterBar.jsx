import { useState } from "react";
import PropTypes from "prop-types";

const SearchFilterBar = ({ onSearch, onSort, onGroupByBrand, sortConfig }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = () => {
		onSearch(searchTerm);
	};

	const handleSortClick = (field) => {
		// Toggle between: null -> asc -> desc -> null
		const currentOrder = sortConfig[field];
		const nextOrder = !currentOrder ? "asc" : currentOrder === "asc" ? "desc" : null;
		onSort(field, nextOrder);
	};

	return (
		<div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-md mb-1 md:mb-6 w-full">
			{/* Search Bar */}
			<div className="flex items-center w-full md:w-2/3 md:me-10 justify-center">
				<input
					type="text"
					placeholder="Search products..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-md"
				/>
				<button
					onClick={handleSearch}
					className="ml-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-blue-700"
				>
					Search
				</button>
			</div>

			{/* Filter & Toggle Buttons */}
			<div className="flex space-x-3 mt-3 md:mt-0 text-xs text-nowrap">
				{/* Sort by Price Button */}
				<button
					onClick={() => handleSortClick("price")}
					className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-800"
				>
					Price {sortConfig.price === "asc" ? "⬆️" : sortConfig.price === "desc" ? "⬇️" : ""}
				</button>

				{/* Sort by Name Button */}
				<button
					onClick={() => handleSortClick("name")}
					className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-800"
				>
					Name {sortConfig.name === "asc" ? "⬆️" : sortConfig.name === "desc" ? "⬇️" : ""}
				</button>

				{/* Group by Brand Toggle */}
				<button
					onClick={() => onGroupByBrand(true)}
					className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-800"
				>
					Group by Brand
				</button>
			</div>
		</div>
	);
};

SearchFilterBar.propTypes = {
	onSearch: PropTypes.func.isRequired,
	onSort: PropTypes.func.isRequired,
	onGroupByBrand: PropTypes.func.isRequired,
	sortConfig: PropTypes.shape({
		price: PropTypes.oneOf([null, "asc", "desc"]),
		name: PropTypes.oneOf([null, "asc", "desc"]),
	}).isRequired,
};

export default SearchFilterBar;
