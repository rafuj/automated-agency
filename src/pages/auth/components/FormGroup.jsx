import React from "react";

const FormGroup = ({ label, ...rest }) => {
	return (
		<div className="form-group">
			<label className="form-label" for={label}>
				{label}
			</label>
			<input className="form-control" id={label} {...rest} />
		</div>
	);
};

export default FormGroup;
