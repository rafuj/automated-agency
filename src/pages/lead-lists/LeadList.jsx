import React from "react";
import { Link } from "react-router-dom";
import { EditIcon } from "../../icons/IconTheme";
import insta from "../../icons/img/insta.svg";
import LayoutLeadList from "./components/LayoutLeadList";
const LeadList = () => {
	return (
		<LayoutLeadList>
			<div className="lead-layout-content d-block">
				<div className="table-responsive">
					<table className="table __lead-table table-borderless">
						<thead>
							<tr className="word-nowrap">
								<th>List Name</th>
								<th>Number</th>
								<th>Status</th>
								<th>Source</th>
								<th className="text-center">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="word-nowrap">Lead 1</td>
								<td>115</td>
								<td>
									<span className="badge bg-soft-success">
										Complete
									</span>
								</td>
								<td>
									<div className="source d-flex align-items-center">
										<img src={insta} alt="" />
										<span>Instagram</span>
									</div>
								</td>
								<td className="text-center">
									<Link to="#">
										<EditIcon />
									</Link>
								</td>
							</tr>
							<tr>
								<td>Lead 1</td>
								<td>115</td>
								<td>
									<span className="badge bg-soft-secondary">
										Empty
									</span>
								</td>
								<td>
									<div className="source d-flex align-items-center">
										<img src={insta} alt="" />
										<span>Instagram</span>
									</div>
								</td>
								<td className="text-center">
									<Link to="#">
										<EditIcon />
									</Link>
								</td>
							</tr>
							<tr>
								<td className="word-nowrap">Lead 1</td>
								<td>115</td>
								<td>
									<span className="badge bg-soft-success">
										Complete
									</span>
								</td>
								<td>
									<div className="source d-flex align-items-center">
										<img src={insta} alt="" />
										<span>Instagram</span>
									</div>
								</td>
								<td className="text-center">
									<Link to="#">
										<EditIcon />
									</Link>
								</td>
							</tr>
							<tr>
								<td>Lead 1</td>
								<td>115</td>
								<td>
									<span className="badge bg-soft-danger">
										Collecting
									</span>
								</td>
								<td>
									<div className="source d-flex align-items-center">
										<img src={insta} alt="" />
										<span>Instagram</span>
									</div>
								</td>
								<td className="text-center">
									<Link to="#">
										<EditIcon />
									</Link>
								</td>
							</tr>
							<tr>
								<td className="word-nowrap">Lead 1</td>
								<td>115</td>
								<td>
									<span className="badge bg-soft-success">
										Complete
									</span>
								</td>
								<td>
									<div className="source d-flex align-items-center">
										<img src={insta} alt="" />
										<span>Instagram</span>
									</div>
								</td>
								<td className="text-center">
									<Link to="#">
										<EditIcon />
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</LayoutLeadList>
	);
};

export default LeadList;
