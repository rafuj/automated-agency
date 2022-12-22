import React from "react";
import FormGroup from "../../components/FormGroup";
import CampaignSingleLayout from "./components/CampaignSingleLayout";

const CampaignOption = () => {
	return (
		<CampaignSingleLayout>
			<div className="row">
				<div className="col-sm-6">
					<FormGroup label="Accounts to use" type="text" />
				</div>
				<div className="col-sm-6">
					<FormGroup label="Daily Message Limit" type="text" />
				</div>
				<div className="col-sm-12 pt-2">
					<div className="d-flex flex-wrap justify-content-center save-btn-grp">
						<button className="cmn-btn btn-outline">Save</button>
						<button className="cmn-btn">Launch</button>
					</div>
				</div>
			</div>
		</CampaignSingleLayout>
	);
};

export default CampaignOption;
