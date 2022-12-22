import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import empty from "../../assets/img/empty.png";
import FormGroup from "../../components/FormGroup";
// import { Close } from "../../icons/IconTheme";
import CommonCard from "../lead-lists/components/CommonCard";
import CampaignLayout from "./components/CampaignLayout";
const AddNewCampaign = () => {
	const [popup, setPopup] = useState(false);
	const [popupTwo, setPopupTwo] = useState(false);
	const closePopup = () => {
		setPopup(false);
		setPopupTwo(false);
	};
	const toggleFirstPopup = () => {
		setPopup(!popup);
		setPopupTwo(!popupTwo);
	};
	return (
		<CampaignLayout>
			<div className="lead-layout-content">
				<div className="text-center empty-list">
					<img src={empty} alt="" />
					<div className="txt">No, List Available!</div>
					<Link
						to="#"
						className="cmn-btn"
						onClick={() => setPopup(!popup)}
					>
						Add New
					</Link>
				</div>
			</div>
			<AddNewPopup
				popup={popup}
				setPopup={setPopup}
				closePopup={closePopup}
				toggleFirstPopup={toggleFirstPopup}
			/>
			<AddNewPopupTwo
				popup={popupTwo}
				setPopup={setPopupTwo}
				closePopup={closePopup}
				toggleFirstPopup={toggleFirstPopup}
			/>
		</CampaignLayout>
	);
};

const AddNewPopup = ({ popup, setPopup, closePopup, toggleFirstPopup }) => {
	return (
		<Modal show={popup} size="xl" centered className="__common-modal">
			<Modal.Body>
				{/* <div className="modal-close" onClick={() => setPopup(!popup)}>
					<Close />
				</div> */}
				<CommonCard setPopup={setPopup}>
					<div className="common-card-top">
						<h4 className="title">Let's Create a New Campagin</h4>
						<div className="txt">What would you like to name it?</div>
					</div>
					<FormGroup label="Campaign Name" type="text" />
					<div className="d-flex justify-content-between common-card-bottom">
						<Link
							to="#"
							className="cmn-btn btn-outline"
							onClick={closePopup}
						>
							Back
						</Link>
						<Link to="#" className="cmn-btn" onClick={toggleFirstPopup}>
							Next
						</Link>
					</div>
				</CommonCard>
			</Modal.Body>
		</Modal>
	);
};

const AddNewPopupTwo = ({ popup, setPopup, closePopup, toggleFirstPopup }) => {
	return (
		<Modal show={popup} size="xl" centered className="__common-modal">
			<Modal.Body>
				{/* <div className="modal-close" onClick={() => setPopup(!popup)}>
					<Close />
				</div> */}
				<CommonCard setPopup={setPopup}>
					<div className="common-card-top">
						<h4 className="title">Please select a lead list</h4>
					</div>
					<FormGroup
						label="Lead List"
						type="text"
						className="mb-1 control--border"
					/>
					<div className="text-center">
						<Link to="#" className="text-base">
							Create new list
						</Link>
					</div>
					<div className="d-flex justify-content-between common-card-bottom">
						<Link
							to="#"
							className="cmn-btn btn-outline"
							onClick={toggleFirstPopup}
						>
							Back
						</Link>
						<Link to="#" className="cmn-btn">
							Next
						</Link>
					</div>
				</CommonCard>
			</Modal.Body>
		</Modal>
	);
};

export default AddNewCampaign;
