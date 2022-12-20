import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../../components/FormGroup";
import CommonCard from "./components/CommonCard";
import LayoutLeadList from "./components/LayoutLeadList";
const AddGoogle = () => {
	const navigate = useNavigate();
	return (
		<LayoutLeadList>
			<div className="lead-layout-content">
				<CommonCard>
					<div className="common-card-top">
						<h4 className="title">Google Search</h4>
					</div>
					<FormGroup
						label="Search Method"
						data={["facebook", "twitter", "linkedin"]}
					/>
					<FormGroup label="Search term" type="text" />
					<FormGroup label="Number of leads to collect" type="text" />
					<div className="d-flex justify-content-between common-card-bottom">
						<Link
							to="#"
							className="cmn-btn btn-outline"
							onClick={() => navigate(-1)}
						>
							Back
						</Link>
						<Link to="/leadlist/add-google-criteria" className="cmn-btn">
							Next
						</Link>
					</div>
				</CommonCard>
			</div>
		</LayoutLeadList>
	);
};

export default AddGoogle;
