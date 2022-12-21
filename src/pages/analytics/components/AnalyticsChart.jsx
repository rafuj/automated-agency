import React from "react";
import ReactApexChart from "react-apexcharts";

const AnalyticsChart = () => {
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
				"01 Jan",
				"02 Jan",
				"03 Jan",
				"04 Jan",
				"05 Jan",
				"06 Jan",
				"07 Jan",
				"08 Jan",
				"09 Jan",
				"10 Jan",
				"11 Jan",
				"12 Jan",
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
			borderColor: "var(--border)",
		},
	};

	return (
		<>
			<ReactApexChart
				series={series}
				options={options}
				type="line"
				height={392}
			/>
		</>
	);
};

export default AnalyticsChart;
