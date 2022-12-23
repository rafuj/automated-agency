import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/img/users/1.png";
import img2 from "../../assets/img/users/2.png";
import img3 from "../../assets/img/users/3.png";
import img4 from "../../assets/img/users/4.png";
import Layout, { LayoutHeader } from "../../components/Layout";
import SearchForm from "../../components/SearchForm";
import {
	Close,
	Cog,
	FilterIcon,
	Promotion,
	Rocket,
} from "../../icons/IconTheme";
import AccountModal from "./components/AccountModal";
const data = [
	{
		img: img1,
		active: false,
		title: "Arlene McCoy",
	},
	{
		img: img2,
		active: true,
		title: "Leslie Alexander",
	},
	{
		img: img3,
		active: true,
		title: "Jerome Bell",
	},
	{
		img: img4,
		active: false,
		title: "Darrell Steward",
	},
	{
		img: img1,
		active: false,
		title: "Arlene McCoy",
	},
	{
		img: img2,
		active: true,
		title: "Leslie Alexander",
	},
	{
		img: img3,
		active: true,
		title: "Jerome Bell",
	},
];
const Accounts = () => {
	const [filterOpen, setFilterOpen] = useState(false);
	const [popup, setPopup] = useState(false);
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
			<div className="layout-content">
				<div className="table-responsive">
					<table className="table __account-table table-borderless">
						<tbody>
							{data.map((item, i) => (
								<TableRow
									{...item}
									key={i}
									setPopup={setPopup}
									popup={popup}
								/>
							))}
						</tbody>
					</table>
				</div>
				<AccountModal popup={popup} setPopup={setPopup} />
			</div>
		</Layout>
	);
};

const TableRow = ({ title, img, active, setPopup, popup }) => {
	const [status, setStatus] = useState(active);
	return (
		<tr>
			<td className="word-nowrap">
				<div className="table-author-2 d-flex align-items-center">
					<img src={img} alt="" />
					<span className="ps-3 flex-grow-1">{title}</span>
				</div>
			</td>
			<td>
				<div className="d-flex align-items-center g--2">
					<Promotion />
					<span>10</span>
				</div>
			</td>
			<td>
				<div className="d-flex align-items-center g--2">
					<Rocket />
					<span>06</span>
				</div>
			</td>
			<td className="text-center">
				<button
					className={`cmn-btn rounded-8 ${status ? "" : "inactive"}`}
					type="button"
					onClick={() => setStatus(!status)}
				>
					{status ? "Start" : "Stop"}
				</button>
			</td>
			<td className="text-end">
				<Link to="#" className="fill-text" onClick={() => setPopup(!popup)}>
					<Cog />
				</Link>
			</td>
		</tr>
	);
};
export default Accounts;
