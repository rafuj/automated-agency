import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../../components/FormGroup";
import CommonCard from "./components/CommonCard";
import LayoutLeadList from "./components/LayoutLeadList";
const CreateLead = () => {
	const navigate = useNavigate();
	return (
		<LayoutLeadList>
			<div className="lead-layout-content">
				<CommonCard>
					<div className="common-card-top">
						<h4 className="title">Let's Create a new Lead List</h4>
						<div className="txt">What would you like to name it?</div>
					</div>
					<FormGroup label="Please Enter a name" type="text" />
					<div className="d-flex justify-content-between common-card-bottom">
						<Link
							to="#"
							className="cmn-btn btn-outline"
							onClick={() => navigate(-1)}
						>
							Back
						</Link>
						<Link to="/leadlist/source" className="cmn-btn">
							Next
						</Link>
					</div>
				</CommonCard>
			</div>
		</LayoutLeadList>
	);
};

export default CreateLead;
