import React, { useState } from "react";
import { plan } from "../../../assets/data/plan";
import Layout, { LayoutHeader } from "../../../components/Layout";
import { Check } from "../../../icons/IconTheme";
import SettingNavMenu from "./components/SettingNavMenu";

const SettingPlan = () => {
	const [planDuration, setPlanDuration] = useState("monthly");

	return (
		<Layout>
			<LayoutHeader title="Setting"></LayoutHeader>
			<div className="layout-content">
				<SettingNavMenu />
				<div className="mb-20 text-center">
					<ul className="filter-btn">
						<li
							className={planDuration === "monthly" ? "active" : ""}
							onClick={() => setPlanDuration("monthly")}
						>
							Monthly
						</li>
						<li
							className={planDuration === "annual" ? "active" : ""}
							onClick={() => setPlanDuration("annual")}
						>
							Annual
						</li>
					</ul>
					<div className="plans-wrapper">
						{plan &&
							plan.map((item, i) => (
								<Plan {...item} planDuration={planDuration} key={i} />
							))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default SettingPlan;
const Plan = ({
	title,
	monthly_price,
	annual_price,
	subtext,
	details,
	planDuration,
}) => {
	return (
		<>
			<div className="plan-item">
				<div className="plan-inner">
					<div className="d-flex justify-content-between mb-10">
						<h3 className="title">{title}</h3>
						<h4 className="text-redish price">
							{planDuration === "monthly" ? monthly_price : annual_price}
							{planDuration === "monthly" ? (
								<sub>/Month</sub>
							) : (
								<sub>/Annual</sub>
							)}
						</h4>
					</div>
					<div className="subtxt">{subtext}</div>
					<ul className="details-info">
						{details &&
							details.map((item, i) => (
								<li key={i}>
									<Check /> <span>{item}</span>
								</li>
							))}
					</ul>
				</div>
				<button className="btn btn-outline-primary" type="button">
					Update
				</button>
			</div>
		</>
	);
};
