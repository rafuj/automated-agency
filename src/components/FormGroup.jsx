import React from "react";
import { IconDown } from "../icons/IconTheme";

const FormGroup = ({ label, data, ...rest }) => {
	return (
		<div className="form-group">
			{label && (
				<label className="form-label" htmlFor={label}>
					{label}
				</label>
			)}
			{data ? (
				<div className="select-item">
					<select {...rest} className="form-control">
						{data.map((item, i) => (
							<option value={item} key={i}>
								{item}
							</option>
						))}
					</select>
					<div className="right-icon">
						<IconDown />
					</div>
				</div>
			) : (
				<input className="form-control" id={label && label} {...rest} />
			)}
		</div>
	);
};

export default FormGroup;
