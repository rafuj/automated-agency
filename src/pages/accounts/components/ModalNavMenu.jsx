import React from "react";
import { Link } from "react-router-dom";

const ModalNavMenu = ({ dataStatus, setDataStatus }) => {
	return (
		<div className="border-bottom mb-20">
			<ul className="setting-nav-menu">
				<li>
					<Link
						className={dataStatus === "warmup" ? "active" : ""}
						to="#"
						onClick={() => setDataStatus("warmup")}
					>
						Warmup
					</Link>
				</li>
				<li>
					<Link
						className={dataStatus === "profile" ? "active" : ""}
						to="#"
						onClick={() => setDataStatus("profile")}
					>
						Profile
					</Link>
				</li>
				<li>
					<Link
						className={dataStatus === "setting" ? "active" : ""}
						to="#"
						onClick={() => setDataStatus("setting")}
					>
						Setting
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ModalNavMenu;
