import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/img/users/1.png";
import img2 from "../../assets/img/users/2.png";
import img3 from "../../assets/img/users/3.png";
import img4 from "../../assets/img/users/4.png";
import SearchForm from "../../components/SearchForm";
import { CheckIcon2 } from "../../icons/IconTheme";
import insta from "../../icons/img/insta.svg";
import CampaignSingleLayout from "./components/CampaignSingleLayout";
const data = [
	{
		img: img1,
		title: "Arlene McCoy",
	},
	{
		img: img2,
		title: "Leslie Alexander",
	},
	{
		img: img3,
		title: "Jerome Bell",
	},
	{
		img: img4,
		title: "Darrell Steward",
	},
];
const CampaignLead = () => {
	return (
		<CampaignSingleLayout>
			<div className="__gap-15px d-flex flex-wrap justify-content-between mb-20">
				<SearchForm filter />
				<button className="cmn-btn" type="button">
					Import
				</button>
			</div>

			<div className="table-responsive">
				<table className="table __lead-table table-borderless">
					<thead>
						<tr className="word-nowrap">
							<th className="ps-4">Name</th>
							<th className="ps-2">Username</th>
							<th className="text-center ps-2">Organaization</th>
							<th className="text-center">Completed</th>
							<th className="text-end pe-4">Open</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, i) => (
							<TableRow {...item} key={i} />
						))}
					</tbody>
				</table>
			</div>
		</CampaignSingleLayout>
	);
};
const TableRow = ({ title, img }) => {
	return (
		<tr>
			<td className="word-nowrap">
				<div className="table-author d-flex align-items-center">
					<img src={img} alt="" />
					<span className="ps-3 flex-grow-1">{title}</span>
				</div>
			</td>
			<td>demo@kitkat.com</td>
			<td>
				<div className="source d-flex align-items-center justify-content-center">
					<img src={insta} alt="" />
					<span>Instagram</span>
				</div>
			</td>
			<td className="text-center">
				<CheckIcon2 />
			</td>
			<td className="text-end">
				<Link
					to="#"
					className="cmn-btn btn-sm rounded-10 border-base btn-outline"
				>
					Open
				</Link>
			</td>
		</tr>
	);
};
export default CampaignLead;
