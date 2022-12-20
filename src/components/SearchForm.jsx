import React from "react";
import { FilterIcon, SearchIcon } from "../icons/IconTheme";

const SearchForm = ({ filter }) => {
	return (
		<form>
			<div className="input--group position-relative">
				<div className="icon">
					<SearchIcon />
				</div>
				<input
					type="text"
					placeholder="Search"
					className="form-control __form-control"
					id="search-input"
				/>
				{filter && (
					<button type="submit" className="right-icon">
						<FilterIcon />
					</button>
				)}
			</div>
		</form>
	);
};

export default SearchForm;
