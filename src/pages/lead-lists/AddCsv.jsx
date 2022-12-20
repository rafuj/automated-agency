import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Upload } from "../../icons/IconTheme";
import CommonCard from "./components/CommonCard";
import LayoutLeadList from "./components/LayoutLeadList";
const AddCsv = () => {
	const navigate = useNavigate();
	return (
		<LayoutLeadList>
			<div className="lead-layout-content">
				<CommonCard>
					<div className="common-card-top mb-20">
						<h4 className="title">Upload CSV File</h4>
					</div>
					<label className="csv--label text-center">
						<Upload />
						<div className="mt-3">Click to Upload</div>
						<input type="file" className="d-none" />
					</label>
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

export default AddCsv;
