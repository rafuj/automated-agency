import React, { useState } from "react";
import { inbox_data } from "../../../assets/data/inbox_data";
import SearchForm from "../../../components/SearchForm";

const InboxSidebar = ({ activeIndex, setActiveIndex }) => {
	const [read, setRead] = useState(true);
	return (
		<div className="inbox-sidebar">
			<div className="search-bar">
				<SearchForm />
				<ul className="read-nav">
					<li
						className={read ? "active" : ""}
						onClick={() => setRead(true)}
					>
						All
					</li>
					<li
						className={!read ? "active" : ""}
						onClick={() => setRead(false)}
					>
						Unread
					</li>
				</ul>
			</div>
			<ul className="inbox-users">
				{inbox_data &&
					inbox_data.map((item, i) =>
						read ? (
							<li
								key={i}
								className={activeIndex === i ? "active" : ""}
								onClick={() => setActiveIndex(i)}
							>
								<img src={item.img} alt="" />
								<div className="content">
									<div className="d-flex justify-content-between">
										<h6 className="name">{item.name}</h6>
										<span className="date">12:03AM</span>
									</div>
									<div className="text">{item.last_msg}</div>
								</div>
							</li>
						) : (
							item.read || (
								<li
									key={i}
									className={activeIndex === i ? "active" : ""}
									onClick={() => setActiveIndex(i)}
								>
									<img src={item.img} alt="" />
									<div className="content">
										<div className="d-flex justify-content-between">
											<h6 className="name">{item.name}</h6>
											<span className="date">12:03AM</span>
										</div>
										<div className="text">{item.last_msg}</div>
									</div>
								</li>
							)
						)
					)}
			</ul>
		</div>
	);
};

export default InboxSidebar;
