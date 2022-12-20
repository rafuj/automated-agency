import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../../components/FormGroup";
import CommonCard from "./components/CommonCard";
import LayoutLeadList from "./components/LayoutLeadList";
const AddManual = () => {
	const navigate = useNavigate();
	return (
		<LayoutLeadList>
			<div className="lead-layout-content">
				<CommonCard>
					<div className="common-card-top">
						<h4 className="title">Bulk Insert Manually</h4>
						<div className="txt">Type or paste username</div>
					</div>
					<FormGroup label="Add your account here" type="text" />
					<div className="d-flex justify-content-between common-card-bottom">
						<Link
							to="#"
							className="cmn-btn btn-outline"
							onClick={() => navigate(-1)}
						>
							Back
						</Link>
						<Link to="/leadlist/source" className="cmn-btn">
							Import Accounts
						</Link>
					</div>
				</CommonCard>
			</div>
		</LayoutLeadList>
	);
};

export default AddManual;
