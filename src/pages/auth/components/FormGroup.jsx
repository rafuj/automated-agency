import React from "react";

const FormGroup = ({ label, ...rest }) => {
	return (
		<div className="form-group">
			<label className="form-label" for={label}>
				{label}
			</label>
			<input className="form-control" {...rest} />
		</div>
	);
};

export default FormGroup;
