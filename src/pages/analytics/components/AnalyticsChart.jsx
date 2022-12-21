import React from "react";
import ReactApexChart from "react-apexcharts";

const AnalyticsChart = ({ series, options }) => {
	return (
		<>
			<div className="bg-section chart-card">
				<ReactApexChart
					series={series}
					options={options}
					type="line"
					height={362}
				/>
			</div>
		</>
	);
};

export default AnalyticsChart;
