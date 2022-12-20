import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckGroup from "../../components/CheckGroup";
import CommonCard from "./components/CommonCard";
import LayoutLeadList from "./components/LayoutLeadList";
const AddInstagram = () => {
	const navigate = useNavigate();
	return (
		<LayoutLeadList>
			<div className="lead-layout-content">
				<CommonCard>
					<div className="common-card-top mb-20">
						<h4 className="title">Collect leads from</h4>
					</div>
					<div
						style={{ maxWidth: "180px" }}
						className="mx-auto mb-xl-5 pb-4 pt-xl-3"
					>
						<CheckGroup text="Hashtags" checked={true} />
						<CheckGroup text="Suggestion" checked={true} />
						<CheckGroup text="User Followers" checked={true} />
					</div>
					<div className="d-flex justify-content-between common-card-bottom">
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

export default AddInstagram;
