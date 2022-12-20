import React, { useState } from "react";
import { CheckIcon } from "../icons/IconTheme";

const CheckGroup = ({ text, checked, ...rest }) => {
	const [status, setStatus] = useState(checked ? true : false);
	return (
		<label className="form-check">
			<input
				type="checkbox"
				className={`form-check-input ${status ? "d-none" : ""}`}
				value={status}
				{...rest}
				onChange={(e) => setStatus(e.target.checked)}
			/>
			{status && (
				<div className="check-icon">
					<CheckIcon />
				</div>
			)}
			<span className="form-check-label">{text}</span>
		</label>
	);
};

export default CheckGroup;
