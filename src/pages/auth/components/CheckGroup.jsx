import React, { useState } from "react";

const CheckGroup = ({ text, checked, ...rest }) => {
	const [status, setStatus] = useState({ checked });
	return (
		<label className="form-check">
			<input
				type="checkbox"
				className="form-check-input"
				value={status}
				{...rest}
				onChange={(e) => setStatus(e.target.checked)}
			/>
			<span className="form-check-label">{text}</span>
		</label>
	);
};

export default CheckGroup;
