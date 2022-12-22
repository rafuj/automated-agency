import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout, { LayoutHeader } from "../../components/Layout";
import SearchForm from "../../components/SearchForm";
import { Close, FilterIcon } from "../../icons/IconTheme";

const Accounts = ({ children }) => {
	const [filterOpen, setFilterOpen] = useState(false);
	return (
		<Layout>
			<LayoutHeader title="Accounts">
				<div className="d-flex align-items-center header-search-filter-wrapper">
					<label
						className="d-md-none d-block m-0"
						onClick={() => setFilterOpen(true)}
						htmlFor="search-input"
					>
						<FilterIcon />
					</label>
					<div
						className={`header-search-filter ${
							filterOpen ? "active" : ""
						}`}
					>
						<SearchForm filter />
						<span
							className="close d-md-none"
							onClick={() => setFilterOpen(false)}
						>
							<Close />
						</span>
					</div>
					<Link to="#" className="cmn-btn">
						Add New
					</Link>
				</div>
			</LayoutHeader>
			{children}
		</Layout>
	);
};

export default Accounts;
