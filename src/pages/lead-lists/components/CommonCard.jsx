import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LeftAngle } from "../../../icons/IconTheme";

const CommonCard = ({ children }) => {
	const navigate = useNavigate();
	return (
		<div className="lead-card">
			<div>
				<Link
					className="d-flex align-items-center go--back"
					to="#"
					onClick={() => navigate(-1)}
				>
					<LeftAngle />
					<span className="ms-2">Back</span>
				</Link>
			</div>
			{children}
		</div>
	);
};

export default CommonCard;
