import { useState } from "react";

const SearchFilterBar = ({ onSearch, onSort, onGroupByBrand }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isAscending, setIsAscending] = useState(true);
	const [groupByBrand, setGroupByBrand] = useState(false);

	const handleSearch = () => {
		onSearch(searchTerm);
	};

	const handleSortToggle = () => {
		setIsAscending(!isAscending);
		onSort(isAscending ? "desc" : "asc");
	};

	const handleGroupByBrandToggle = () => {
		setGroupByBrand(!groupByBrand);
		onGroupByBrand(!groupByBrand);
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
					onClick={handleSortToggle}
					className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-800"
				>
					Price ({isAscending ? "⬆️ Asc" : "⬇️ Desc"})
				</button>

				{/* Group by Brand Toggle */}
				<button
					onClick={handleGroupByBrandToggle}
					className={`px-3 py-2 rounded-md ${
						groupByBrand ? "bg-blue-600 text-white" : "bg-gray-700 text-white hover:bg-gray-800"
					}`}
				>
					{groupByBrand ? "Ungroup by Brand" : "Group by Brand"}
				</button>
			</div>
		</div>
	);
};

export default SearchFilterBar;
