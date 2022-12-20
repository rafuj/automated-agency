import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../../components/FormGroup";
import CommonCard from "./components/CommonCard";
import LayoutLeadList from "./components/LayoutLeadList";
const AddGoogleCriteriaTwo = () => {
	const navigate = useNavigate();
	return (
		<LayoutLeadList>
			<div className="lead-layout-content">
				<CommonCard>
					<div className="common-card-top mb-20">
						<h4 className="title">Qualifying Criteria</h4>
					</div>
					<FormGroup
						label="Minimum Monthly Revenue (Currency number field)"
						type="text"
					/>
					<FormGroup
						label="Included Countries"
						data={["Pakistan", "Saudi", "UAE"]}
					/>
					<FormGroup
						label="Installed Apps"
						data={["Whatsapp", "Twitter", "Instagram"]}
					/>
					<FormGroup label="Minimum Store rank" type="text" />
					<div className="d-flex justify-content-between common-card-bottom">
						<Link
							to="#"
							className="cmn-btn btn-outline"
							onClick={() => navigate(-1)}
						>
							Back
						</Link>
						<Link to="#" className="cmn-btn">
							Next
						</Link>
					</div>
				</CommonCard>
			</div>
		</LayoutLeadList>
	);
};

export default AddGoogleCriteriaTwo;
