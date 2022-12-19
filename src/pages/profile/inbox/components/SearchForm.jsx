import React from "react";
import { SearchIcon } from "../../../../icons/IconTheme";

const SearchForm = () => {
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
				/>
			</div>
		</form>
	);
};

export default SearchForm;
