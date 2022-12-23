import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditIcon } from "../../icons/IconTheme";
import CampaignLayout from "./components/CampaignLayout";

const CampaignList = () => {
	return (
		<>
			<CampaignLayout pageTitle="Campaigns">
				<div className="lead-layout-content d-block">
					<div className="table-responsive">
						<table className="table __campaign-table table-borderless">
							<thead>
								<tr className="word-nowrap">
									<th>Campagins Name</th>
									<th>Message Sent</th>
									<th>Message Read</th>
									<th>Message Replies</th>
									<th className="text-end">Action</th>
								</tr>
							</thead>
							<tbody>
								{["", { active: true }, { active: true }, ""].map(
									(item, i) => (
										<TableRow id={i} active={item.active} key={i} />
									)
								)}
							</tbody>
						</table>
					</div>
				</div>
			</CampaignLayout>
		</>
	);
};
const TableRow = ({ id, active }) => {
	const [status, setStatus] = useState(active);

	return (
		<tr>
			<td className="word-nowrap">
				<Link to={`/campaign/1/analytics`} className="text-title">
					Campaigns 1
				</Link>
			</td>
			<td>11</td>
			<td>8</td>
			<td>5</td>
			<td className="text-end">
				<div className="d-flex align-items-center justify-content-end">
					<button
						className={`cmn-btn  me-3 ${
							status ? "" : "inactive trn-x-2"
						}`}
						type="button"
						onClick={() => setStatus(!status)}
					>
						{status ? "Start" : "Stop"}
					</button>
					<Link to={`/campaign/1/analytics`}>
						<EditIcon />
					</Link>
				</div>
			</td>
		</tr>
	);
};
export default CampaignList;
