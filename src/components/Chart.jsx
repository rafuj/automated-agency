import React from "react";

const Chart = ({ data }) => {
	const { dataSet, label } = data;
	const maxValue = Math.max(...dataSet);
	const total = Math.ceil(dataSet.reduce((a, b) => a + b, 0));
	return (
		<div className="chart">
			<div className="yaxis">
				<div>
					<span>{maxValue}</span>
					<span className="border"></span>
				</div>
				<div>
					<span>{Math.round((maxValue * 3) / 4)}</span>
					<span className="border"></span>
				</div>
				<div>
					<span>{Math.round((maxValue * 2) / 4)}</span>
					<span className="border"></span>
				</div>
				<div>
					<span>{Math.round((maxValue * 1) / 4)}</span>
					<span className="border"></span>
				</div>
				<div>
					<span>0</span>
					<div className="border">
						<div className="xaxis">
							<div className="xaxis-data-bars">
								{dataSet &&
									dataSet.map((item, i) => (
										<span
											className={`item ${
												item === maxValue ? "active" : ""
											}`}
											key={i}
											style={{
												height: (dataSet[i] / maxValue) * 100 + "%",
											}}
										>
											<span className="value">{item}</span>
											<span className="bar"></span>
										</span>
									))}
							</div>
							<div className="xaxis-data">
								{label &&
									label.map((item, i) => (
										<span className="item" key={i}>
											{item}
										</span>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chart;
