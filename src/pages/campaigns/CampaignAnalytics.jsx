import React from "react";
import AnalyticsChart from "../analytics/components/AnalyticsChart";
import CampaignSingleLayout from "./components/CampaignSingleLayout";
const data = [
	{
		name: "leads",
		value: "100",
	},
	{
		name: "completed",
		value: "67",
	},
	{
		name: "sent",
		value: "100",
	},
	{
		name: "seen",
		value: "53",
	},
	{
		name: "replied",
		value: "34",
		reply_rate: "70%",
	},
];
const CampaignAnalytics = ({ id }) => {
	const series = [
		{
			name: "Campaign Lead",
			data: [30, 40, 25, 55, 25, 35, 55, 42, 28],
		},
	];

	const options = {
		chart: {
			height: 350,
			type: "line",
			zoom: {
				enabled: false,
			},
			toolbar: {
				show: false,
			},
			dropShadow: {
				enabled: true,
				top: 0,
				left: 0,
				blur: 5,
				color: ["#6390F5", "#F563A9", "#5FDA40"],
				opacity: 0.5,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: [4, 4, 4],
			curve: "smooth",
		},
		colors: ["#6390F5", "#F563A9", "#5FDA40"],
		legend: {
			tooltipHoverFormatter: function (val, opts) {
				return (
					val +
					" - " +
					opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
					""
				);
			},
		},

		markers: {
			size: 0,
			hover: {
				sizeOffset: 6,
			},
		},
		xaxis: {
			categories: [
				"JAN",
				"FEB",
				"MAR",
				"APR",
				"MAY",
				"JUN",
				"JUL",
				"AUG",
				"SEP",
				"OCT",
				"NOV",
				"DEC",
			],
		},
		tooltip: {
			y: [
				{
					title: {
						formatter: function (val) {
							return val + " (mins)";
						},
					},
				},
				{
					title: {
						formatter: function (val) {
							return val + " per session";
						},
					},
				},
				{
					title: {
						formatter: function (val) {
							return val;
						},
					},
				},
			],
		},
		grid: {
			borderColor: "#eff2f1",
		},
	};
	return (
		<CampaignSingleLayout>
			<div className="analytics-card-wrapper-2">
				{data && data.map((item, i) => <AnalyticsCard key={i} {...item} />)}
			</div>
			<div className="mt-4">
				<AnalyticsChart series={series} options={options} />
			</div>
		</CampaignSingleLayout>
	);
};

const AnalyticsCard = ({ name, value, reply_rate }) => {
	return (
		<>
			<div className="analytics-card-2">
				<h6 className="name">{name}</h6>
				<div className="d-flex justify-content-between align-items-center">
					<h2 className="value">{value}</h2>
					{reply_rate && (
						<span className="badge bg--success">{reply_rate}</span>
					)}
				</div>
			</div>
		</>
	);
};

export default CampaignAnalytics;
