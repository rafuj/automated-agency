import React from "react";
import Chart from "../../../components/Chart";
const data = [
	"27 New Conversations started",
	"500 Total Messages Sent",
	"20 Comments made",
	"70 Posts Liked",
	"5 Posts Shared",
	"2 Stories posted",
];
const chart__data = {
	label: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	dataSet: [12, 12, 12, 20, 12, 12, 12],
};
const AccountModalWarmup = () => {
	return (
		<>
			<div className="row gy-3">
				<div className="col-6">
					<button
						type="button"
						className="cmn-btn btn-outline bg--redish text-20 w-100 text-title"
					>
						Disable
					</button>
				</div>
				<div className="col-6">
					<button
						type="button"
						className="cmn-btn text-20 w-100 bg--success border--success"
					>
						Enable
					</button>
				</div>
			</div>
			<div className="warmup-wrapper">
				<div className="warmup-wrapper-info">
					<h6 className="title">Summary - last week</h6>
					<ul className="info">
						{data &&
							data.map((item, i) => (
								<li key={i}>
									<svg width={5} viewBox="0 0 5 5" fill="none">
										<circle
											cx="2.5"
											cy="2.5"
											r="2.5"
											fill="#5FDA40"
										/>
									</svg>

									<span>{item}</span>
								</li>
							))}
					</ul>
				</div>
				<div className="chart-wrapper">
					<h6 className="title">Warmup emails sent</h6>
					<Chart data={chart__data} />
				</div>
			</div>
		</>
	);
};

export default AccountModalWarmup;
