import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/author.png";
import Layout, { LayoutHeader } from "../../components/Layout";
import { Cog, GroupTeam, IconDown, SignOutIcon } from "../../icons/IconTheme";
import InboxChatting from "./components/InboxChatting";
import InboxSidebar from "./components/InboxSidebar";
const Inbox = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<>
			<Layout>
				<LayoutHeader title="Inbox">
					<div className="layout-header">
						<Link className="__dropdown" to="#">
							<img src={img} alt="img" />
							<div>{"muraddc0@gmail.com".substring(0, 10) + "..."}</div>
							<h6>(20)</h6>

							<div className="right-icon">
								<IconDown />
							</div>
						</Link>
						<ul className="__dropdown-menu">
							<li>
								<Link to="/setting/profile">
									<GroupTeam /> <span>Profile</span>
								</Link>
							</li>
							<li>
								<Link to="/setting/plans">
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
				<div className="inbox-article">
					{/* Inbox Sidebar */}
					<InboxSidebar
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
					/>
					{/* Inbox Chatting*/}
					<InboxChatting activeIndex={activeIndex} />
				</div>
			</Layout>
		</>
	);
};

export default Inbox;
