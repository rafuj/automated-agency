import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/img/author.png";
import Layout, { LayoutHeader } from "../../../components/Layout";
import { Cog, GroupTeam, SignOutIcon } from "../../../icons/IconTheme";
const Inbox = () => {
	return (
		<>
			<Layout>
				<LayoutHeader title="Inbox">
					<div className="layout-header">
						<Link className="__dropdown" to="#">
							<img src={img} alt="img" />
							<div>{"muraddc0@gmail.com".substring(0, 10) + "..."}</div>
							<h6>(20)</h6>
						</Link>
						<ul className="__dropdown-menu">
							<li>
								<Link to="#">
									<GroupTeam /> <span>Profile</span>
								</Link>
							</li>
							<li>
								<Link to="#">
									<Cog /> <span>Setting</span>
								</Link>
							</li>
							<li>
								<Link to="#">
									<SignOutIcon />
									<span> Logout</span>
								</Link>
							</li>
						</ul>
					</div>
				</LayoutHeader>
			</Layout>
		</>
	);
};

export default Inbox;
