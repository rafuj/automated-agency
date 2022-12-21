import React from "react";
import { NavLink } from "react-router-dom";

const SettingNavMenu = () => {
	return (
		<div className="border-bottom mb-20">
			<ul className="setting-nav-menu">
				<li>
					<NavLink to="/profile/setting/plans">Plans</NavLink>
				</li>
				<li>
					<NavLink to="/profile/setting/billing">Billing</NavLink>
				</li>
				<li>
					<NavLink to="/profile/setting/profile">Profile</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SettingNavMenu;
