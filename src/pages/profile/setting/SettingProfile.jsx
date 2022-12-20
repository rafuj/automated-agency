import React from "react";
import { NavLink } from "react-router-dom";
import FormGroup from "../../../components/FormGroup";
import Layout, { LayoutHeader } from "../../../components/Layout";

const SettingProfile = () => {
	return (
		<Layout>
			<LayoutHeader title="Setting"></LayoutHeader>
			<div className="layout-content">
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
				<div className="row g-4">
					<div className="col-md-6">
						<div className="setting-profile-card">
							<div className="setting-profile-card-top">
								<h5 className="m-0 me-auto">Personal Information</h5>
								<button
									type="button"
									className="btn btn-outline-primary"
								>
									Discard
								</button>
								<button type="button" className="btn btn-base">
									Save
								</button>
							</div>
							<div className="row g-3">
								<div className="col-sm-6">
									<FormGroup label="Fast" type="text" />
								</div>
								<div className="col-sm-6">
									<FormGroup label="Last" type="text" />
								</div>
								<div className="col-sm-12">
									<FormGroup label="Email" type="email" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="setting-profile-card">
							<div className="setting-profile-card-top">
								<h5 className="m-0 me-auto">Password</h5>
								<button
									type="button"
									className="btn btn-outline-primary"
								>
									Discard
								</button>
								<button type="button" className="btn btn-base">
									Save
								</button>
							</div>
							<div className="row g-3">
								<div className="col-sm-12">
									<FormGroup label="Last Password" type="password" />
								</div>
								<div className="col-sm-6">
									<FormGroup label="New password" type="password" />
								</div>
								<div className="col-sm-6">
									<FormGroup
										label="Retype New password"
										type="password"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default SettingProfile;
