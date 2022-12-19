import React from "react";
import { inbox_data } from "../../../../assets/data/inbox_data";
import { ImageIcon, LinkIcon, SentIcon } from "../../../../icons/IconTheme";

const InboxChatting = ({ activeIndex }) => {
	const { img, name } = inbox_data[activeIndex];
	return (
		<div className="inbox-chatting">
			<div className="messages-top">
				<div className="open-user">
					<img src={img} alt="" />
					<h5 className="name">{name}</h5>
				</div>
			</div>
			<ul className="msg-area">
				<Message
					incoming
					msg="Fiction-writing also has modes: action, exposition,
						description, dialogue, summary, and transition.[4] Author
						Peter Selgin refers to methods, including action, dialogue,
						thoughts, summary, scenes, and description.[5] Currently,
						there is no consensus within the writing community regarding
						the number and composition of fiction-writing modes and their
						uses."
				/>
				<Message
					msg="Fiction-writing also has modes: action, exposition,
						description, dialogue, summary, and transition"
				/>
				<Message
					incoming
					msg="Fiction-writing also has modes: action, exposition,
						description, dialogue, summary, and transition.[4] Author
						Peter Selgin refers to methods, including action, dialogue,
						thoughts, summary, scenes, and description.[5] Currently,
						there is no consensus within the writing community regarding
						the number and composition of fiction-writing modes and their
						uses."
				/>
				<Message
					msg="Fiction-writing also has modes: action, exposition,
						description, dialogue, summary, and transition"
				/>
				<Message
					incoming
					msg="Fiction-writing also has modes: action, exposition,
						description, dialogue, summary, and transition.[4] Author
						Peter Selgin refers to methods, including action, dialogue,
						thoughts, summary, scenes, and description.[5] Currently,
						there is no consensus within the writing community regarding
						the number and composition of fiction-writing modes and their
						uses."
				/>
				<Message
					msg="Fiction-writing also has modes: action, exposition,
						description, dialogue, summary, and transition"
				/>
				<Message
					incoming
					msg="Fiction-writing also has modes: action, exposition,
						description, dialogue, summary, and transition.[4] Author
						Peter Selgin refers to methods, including action, dialogue,
						thoughts, summary, scenes, and description.[5] Currently,
						there is no consensus within the writing community regarding
						the number and composition of fiction-writing modes and their
						uses."
				/>
				<Message
					msg="Fiction-writing also has modes: action, exposition,
						description, dialogue, summary, and transition"
				/>
			</ul>
			<form>
				<div className="chatting-form">
					<div className="__chatting-form-group">
						<input
							type="text"
							placeholder="Type here.."
							className="form-control"
						/>
						<div className="btn-grp">
							<label className="btn">
								<ImageIcon />
								<input
									type="file"
									accept=".jpeg, .png, .jpg, .webp, .svg"
									className="d-none"
								/>
							</label>
							<label className="btn">
								<LinkIcon />
								<input type="file" className="d-none" />
							</label>
							<button type="submit" className="btn">
								<SentIcon />
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

const Message = ({ incoming, msg }) => {
	return (
		<>
			{incoming ? (
				<li className="incoming-msg">
					<div className="msg">{msg}</div>
					<div className="date">Saturday 12:03 AM, 3 Dec 2022</div>
				</li>
			) : (
				<li className="outgoing-msg ms-auto">
					<div className="msg">{msg}</div>
					<div className="date">Saturday 12:03 AM, 3 Dec 2022</div>
				</li>
			)}
		</>
	);
};

export default InboxChatting;
