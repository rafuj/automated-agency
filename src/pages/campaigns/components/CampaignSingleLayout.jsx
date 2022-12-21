import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout, { LayoutHeader } from "../../../components/Layout";
const CampaignSingleLayout = ({ children }) => {
	const campaignLink = [
		{
			name: "Analytics",
			link: `/campaign/1/analytics`,
		},
		{
			name: "Lead",
			link: `/campaign/1/lead`,
		},
		{
			name: "Sequence",
			link: `/campaign/1/sequence`,
		},
		{
			name: "Schedule",
			link: `/campaign/1/schedule`,
		},
		{
			name: "Option",
			link: `/campaign/1/option`,
		},
	];
	const [status, setStatus] = useState(true);
	return (
		<>
			<Layout>
				<LayoutHeader title="CAMPAIGNS1" goBack>
					<button
						className={`cmn-btn header-btn ${
							status ? "bg-base" : "bg-redish"
						}`}
						type="button"
						onClick={() => setStatus(!status)}
					>
						{status ? "Start" : "Stop"}
					</button>
				</LayoutHeader>
				<div className="layout-content">
					<div className="border-bottom mb-20">
						<ul className="setting-nav-menu">
							{campaignLink &&
								campaignLink.map(({ name, link }, i) => (
									<li key={i}>
										<NavLink to={link}>{name}</NavLink>
									</li>
								))}
						</ul>
					</div>
					{children}
				</div>
			</Layout>
		</>
	);
};

export default CampaignSingleLayout;
