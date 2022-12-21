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
	const series = [
		{
			name: "Message sent",
			data: [30, 40, 25, 55, 25, 35, 55, 42, 28],
		},
		{
			name: "Message Open",
			data: [25, 35, 20, 50, 20, 30, 50, 37, 23],
		},
		{
			name: "Message Replay",
			data: [20, 30, 15, 45, 15, 25, 45, 32, 18],
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
					<AnalyticsChart series={series} options={options} />
				</div>
			</div>
		</Layout>
	);
};

export default Analytics;
