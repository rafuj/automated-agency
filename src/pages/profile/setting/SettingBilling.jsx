import React from "react";
import { NavLink } from "react-router-dom";
import Layout, { LayoutHeader } from "../../../components/Layout";
import { DownLoadIcon } from "../../../icons/IconTheme";

const SettingBilling = () => {
	return (
		<Layout>
			<LayoutHeader title="Setting"></LayoutHeader>
			<div className="layout-content">
				<div className="border-bottom mb-20">
					<ul className="setting-nav-menu">
						<li>
							<NavLink to="/profile/setting/plans">Plans</NavLink>
						</li>
						<li>
							<NavLink to="/profile/setting/billing">Billing</NavLink>
						</li>
						<li>
							<NavLink to="/profile/setting/profile">Profile</NavLink>
						</li>
					</ul>
				</div>
				<div className="row g-4">
					<div className="col-md-6">
						<div className="billing-payment-card bg-section">
							<div className="pe-4 w-0 flex-grow-1">
								<h6>Payment Method</h6>
								<ul>
									<li>Card Information : Visa ending 6457</li>
									<li>Name on card : Murad Hossain</li>
								</ul>
							</div>
							<button className="btn btn-outline-primary">
								Update Card
							</button>
						</div>
					</div>
					<div className="col-md-6">
						<div className="bg-section __billing-table">
							<table className="table">
								<thead>
									<tr>
										<th>Plan</th>
										<th className="text-center">Cost</th>
										<th className="text-center">Invoice</th>
									</tr>
								</thead>
								<tbody>
									{["", "", "", "", "", "", ""].map((item, i) => (
										<tr key={i}>
											<td>
												<div className="table-date">
													<h6>Sat Nov 21 2022</h6>
													<span>
														1 hypergroth plan (at $64.00/ month)
													</span>
												</div>
											</td>
											<td>
												<div className="text-center text-redish">
													$64
												</div>
											</td>
											<td>
												<div className="text-center">
													<DownLoadIcon />
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default SettingBilling;
