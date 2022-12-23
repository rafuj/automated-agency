import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CloseCircle } from "../../../icons/IconTheme";
import AccountModalProfile from "./AccountModalProfile";
import AccountModalSetting from "./AccountModalSetting";
import AccountModalWarmup from "./AccountModalWarmup";
import ModalNavMenu from "./ModalNavMenu";

const AccountModal = ({ popup, closePopup }) => {
	const [dataStatus, setDataStatus] = useState("warmup");
	return (
		<Modal show={true} size="xl" centered className="__account-modal">
			<Modal.Body>
				<div className="__header">
					<div className="d-flex justify-content-between align-items-center">
						<h4 className="main-title m-0">Settings</h4>
						<div
							onClick={closePopup()}
							className="cursor-pointer close--icon"
						>
							<CloseCircle />
						</div>
					</div>
				</div>
				<ModalNavMenu
					dataStatus={dataStatus}
					setDataStatus={setDataStatus}
				/>
				<div className="__body">
					{dataStatus === "warmup" && <AccountModalWarmup />}
					{dataStatus === "profile" && <AccountModalProfile />}
					{dataStatus === "setting" && <AccountModalSetting />}
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default AccountModal;
