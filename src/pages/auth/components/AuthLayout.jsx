import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../icons/IconTheme";

const AuthLayout = ({ text1, text2, link, children }) => {
	return (
		<>
			<div className="auth-header">
				<div className="container">
					<div className="d-flex justify-content-between">
						<Link className="logo" to="/">
							<Logo />
						</Link>
						<div>
							{text1}
							<Link to={link} className="link">
								{text2}
							</Link>{" "}
						</div>
					</div>
				</div>
			</div>
			<div className="container py-5">{children}</div>
		</>
	);
};

export default AuthLayout;
