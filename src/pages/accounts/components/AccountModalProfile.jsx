import React from "react";
import { Link } from "react-router-dom";
import post_img from "../../../assets/img/profile-img.png";
import img from "../../../assets/img/user1.png";
import img2 from "../../../assets/img/users/3.png";
import FormGroup from "../../../components/FormGroup";
import {
	BookMarkIcon,
	CommentsIcon,
	HeartIcon,
	Plus,
	TelegramIcon,
} from "../../../icons/IconTheme";
const AccountModalProfile = () => {
	return (
		<>
			<div className="row">
				<div className="col-6">
					<button
						type="button"
						className="cmn-btn btn-outline text-20 w-100 text-title"
					>
						Discard
					</button>
				</div>
				<div className="col-6">
					<button
						type="button"
						className="cmn-btn text-20 w-100 bg--success border--success"
					>
						Save
					</button>
				</div>
			</div>
			<div className="profile-data-grp">
				<img src={img} className="img" alt="" />
				<div className="form-fields">
					<div className="row">
						<div className="col-sm-4">
							<FormGroup
								label="Username"
								className="mb-12"
								type="text"
							/>
						</div>
						<div className="col-sm-4">
							<FormGroup
								label="First Name"
								className="mb-12"
								type="text"
							/>
						</div>
						<div className="col-sm-4">
							<FormGroup
								label="Last Name"
								className="mb-12"
								type="text"
							/>
						</div>
						<div className="col-12">
							<FormGroup label="Bio" className="mb-0" type="text" />
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex flex-wrap align-items-center justify-content-between g--2 mb-20">
				<h5 className="feed-title m-0">Feed</h5>
				<Link to="#" className="cmn-btn btn-outline bg--success feed-btn">
					<Plus /> Post
				</Link>
			</div>
			<div className="feed-author mb-20 d-flex align-items-center">
				<img src={img2} alt="" />
				<span>username.murad .</span>
				<small>13 h</small>
			</div>
			<img src={post_img} alt="" className="banner-img w-100" />
			<div className="d-flex react--icons">
				<Link to="#">
					<HeartIcon />
				</Link>
				<Link to="#">
					<CommentsIcon />
				</Link>
				<Link to="#">
					<TelegramIcon />
				</Link>
				<Link to="#" className="ms-auto">
					<BookMarkIcon />
				</Link>
			</div>
		</>
	);
};

export default AccountModalProfile;
