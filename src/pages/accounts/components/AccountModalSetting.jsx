import React from "react";
import FormGroup from "../../../components/FormGroup";

const AccountModalSetting = () => {
	return (
		<>
			<div className="row gy-3">
				<div className="col-6">
					<button
						type="button"
						className="cmn-btn btn-outline text-20 w-100 text-title"
					>
						Discard
					</button>
				</div>
				<div className="col-6">
					<button
						type="button"
						className="cmn-btn text-20 w-100 bg--success border--success"
					>
						Save
					</button>
				</div>
				<div className="col-sm-6">
					<FormGroup label="Login Username" className="mb-0" type="text" />
				</div>
				<div className="col-sm-6">
					<FormGroup
						label="Login Password"
						className="mb-0"
						type="password"
					/>
				</div>
			</div>
			<div className="border-botttom pt-10 mb-20"></div>
			<div className="row gy-3">
				<div className="col-sm-6 col-md-3">
					<FormGroup
						label="Email Imap Server, Email Port"
						className="mb-0"
						type="text"
					/>
				</div>
				<div className="col-sm-6 col-md-3">
					<FormGroup label="Email Address" className="mb-0" type="email" />
				</div>
				<div className="col-sm-6 col-md-3">
					<FormGroup
						label="Email Password"
						className="mb-0"
						type="password"
					/>
				</div>
				<div className="col-sm-6 col-md-3">
					<FormGroup label="Proxy" className="mb-0" type="text" />
				</div>
			</div>
		</>
	);
};

export default AccountModalSetting;
