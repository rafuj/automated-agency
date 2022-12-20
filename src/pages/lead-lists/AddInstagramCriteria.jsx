import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckGroup from "../../components/CheckGroup";
import FormGroup from "../../components/FormGroup";
import CommonCard from "./components/CommonCard";
import LayoutLeadList from "./components/LayoutLeadList";
const AddInstagramCriteria = () => {
	const navigate = useNavigate();
	return (
		<LayoutLeadList>
			<div className="lead-layout-content">
				<CommonCard>
					<div
						className="common-card-top mb-20"
						style={{ marginTop: "-20px" }}
					>
						<h4 className="title">Qualifying Criteria</h4>
					</div>
					<FormGroup
						label="Minimum number of followers (Numeric Value)"
						type="text"
					/>
					<FormGroup
						label="Maximum number of followers (Numeric Value)"
						type="text"
					/>
					<FormGroup label="Min number of posts (optional)" type="text" />
					<FormGroup label="Number of Leads to Collect" type="text" />
					<FormGroup label="Hashtags" type="text" />
					<FormGroup label="Users to get followers from" type="text" />
					<CheckGroup text="Has Email" checked={true} />
					<CheckGroup text="Has link in bio" checked={true} />
					<div className="d-flex justify-content-between common-card-bottom mt-3">
						<Link
							to="#"
							className="cmn-btn btn-outline"
							onClick={() => navigate(-1)}
						>
							Back
						</Link>
						<Link
							to="/leadlist/add-instagram-criteria"
							className="cmn-btn"
						>
							Next
						</Link>
					</div>
				</CommonCard>
			</div>
		</LayoutLeadList>
	);
};

export default AddInstagramCriteria;
