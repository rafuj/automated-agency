import React from "react";
import { Link } from "react-router-dom";
import FormGroup from "../../components/FormGroup";
import Layout, { LayoutHeader } from "../../components/Layout";
import AnalyticsChart from "./components/AnalyticsChart";
import {
	MessageIcon,
	OpenEnvelop,
	ReplyIcon,
} from "./components/AnalyticsIcon";
const data = [
	{
		icon: <MessageIcon />,
		title: "Message sent",
		value: "100",
	},
	{
		icon: <OpenEnvelop />,
		title: "Open rate",
		value: "70%",
		sub_text: "70 Opened",
	},
	{
		icon: <ReplyIcon />,
		title: "Replay rate",
		value: "40%",
		sub_text: "28 Replay",
	},
];
const Analytics = () => {
	return (
		<Layout>
			<LayoutHeader title="Analytics">
				<div className="analytics-header-btn">
					<Link to="#" className="cmn-btn btn-outline">
						Filter
					</Link>
					<FormGroup
						data={["Data Range", "This Year", "This Month", "This Week"]}
					/>
				</div>
			</LayoutHeader>
			<div className="layout-content">
				<div className="row g-3 g-sm-4 g-md-3 g-xl-4">
					{data &&
						data.map(({ icon, title, value, sub_text }, i) => (
							<div className="col-md-4" key={i}>
								<div className="analytics-card">
									<div className="icon">{icon}</div>
									<div className="content">
										<h5 className="name">{title}</h5>
										<h2 className="value">{value}</h2>
										{sub_text && (
											<span className="subtext">{sub_text}</span>
										)}
									</div>
								</div>
							</div>
						))}
				</div>
				<div className="mt-4 pt-4">
					<AnalyticsChart />
				</div>
			</div>
		</Layout>
	);
};

export default Analytics;
