import React from "react";
import { Link } from "react-router-dom";
import empty from "../../assets/img/empty.png";
import LayoutLeadList from "./components/LayoutLeadList";
const AddNewLead = () => {
	return (
		<LayoutLeadList>
			<div className="lead-layout-content">
				<div className="text-center empty-list">
					<img src={empty} alt="" />
					<div className="txt">No, List Available!</div>
					<Link to="/leadlist/create" className="cmn-btn">
						Add New
					</Link>
				</div>
			</div>
		</LayoutLeadList>
	);
};

export default AddNewLead;
