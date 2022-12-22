import React, { useState } from "react";
import FormGroup from "../../components/FormGroup";
import { Trash } from "../../icons/IconTheme";
import CampaignSingleLayout from "./components/CampaignSingleLayout";
const data = [
	{
		day: "Sun",
		active: false,
	},
	{
		day: "Mon",
		active: false,
	},
	{
		day: "Tue",
		active: true,
	},
	{
		day: "Wed",
		active: true,
	},
	{
		day: "Thu",
		active: false,
	},
	{
		day: "Fri",
		active: false,
	},
	{
		day: "Sat",
		active: false,
	},
];
const CampaignSchedule = () => {
	return (
		<CampaignSingleLayout>
			<div className="row g-4">
				<div className="col-md-6">
					<div className="schedule-form-card">
						<FormGroup label="Name" type="text" />
						<div className="form-group">
							<label className="form-label">Days</label>
							<div className="schedule-days">
								{data.map((item, i) => (
									<CheckItem {...item} key={i} />
								))}
							</div>
						</div>
						<FormGroup className="mb-0" label="Time" type="text" />
						{/* <FormGroup label="Time" type="time" /> */}
					</div>
				</div>
				<div className="col-md-6">
					<ul className="schedule-list">
						{[
							{ title: "schedule1" },
							{ title: "schedule2" },
							{ title: "schedule3" },
						].map((item, i) => (
							<ScheduleListItem {...item} key={i} />
						))}
					</ul>
				</div>
			</div>
		</CampaignSingleLayout>
	);
};
const CheckItem = ({ day, active }) => {
	const [status, setStatus] = useState(active);
	return (
		<label className={status ? "checked" : ""}>
			{day}
			<input
				type="checkbox"
				name="schedule-day"
				className="d-none"
				checked={status}
				onChange={(e) => setStatus(e.target.checked)}
			/>
		</label>
	);
};
const ScheduleListItem = ({ title }) => {
	const [status, setStatus] = useState(true);
	return (
		status && (
			<li>
				<span>{title}</span>
				<span className="cursor-pointer" onClick={() => setStatus(!status)}>
					<Trash />
				</span>
			</li>
		)
	);
};
export default CampaignSchedule;
