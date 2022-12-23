import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CloseCircle } from "../../../icons/IconTheme";
import ModalNavMenu from "./ModalNavMenu";

const AccountModal = ({ popup, closePopup }) => {
	const [dataStatus, setDataStatus] = useState("warmup");
	return (
		<Modal show={true} size="xl" centered className="__account-modal">
			<Modal.Body>
				<div className="__header">
					<div className="d-flex justify-content-between align-items-center mb-30">
						<h4 className="main-title m-0">Setting</h4>
						<div onClick={closePopup()} className="cursor-pointer">
							<CloseCircle />
						</div>
					</div>
				</div>
				<ModalNavMenu
					dataStatus={dataStatus}
					setDataStatus={setDataStatus}
				/>
				<div className="__body"></div>
			</Modal.Body>
		</Modal>
	);
};

export default AccountModal;
