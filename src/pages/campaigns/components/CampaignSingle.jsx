import React from "react";
import { NavLink } from "react-router-dom";
import CampaignLayout from "./CampaignLayout";
const CampaignSingle = ({ pageTitle, children }) => {
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
	return (
		<>
			<CampaignLayout pageTitle={pageTitle} goBack>
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
			</CampaignLayout>
		</>
	);
};

export default CampaignSingle;
