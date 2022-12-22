import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { sidebar_menu } from "../assets/data/sidebar_menu";
import author_img from "../assets/img/author.png";
import { useGlobalContext } from "../context/context";
import {
	Bar,
	Close,
	Cog,
	LeftAngle,
	LogoWhite,
	SignOutIcon,
} from "../icons/IconTheme";
const Layout = ({ children }) => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();
	const navigate = useNavigate();
	return (
		<main className="main">
			<aside className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
				<div className="sidebar-logo">
					<Link to="#">
						<LogoWhite />
					</Link>
					<div className="close-icon d-lg-none" onClick={closeSidebar}>
						<Close />
					</div>
				</div>
				<div className="sidebar-author">
					<div className="img">
						<img src={author_img} alt="" />
					</div>
					<h6 className="name">Murad Hossain</h6>
					<div className="username">muraddc0@gmail.com</div>
				</div>
				<ul className="sidebar-menu">
					{sidebar_menu &&
						sidebar_menu.map(({ icon, link, text }, i) => (
							<li key={i}>
								<NavLink to={link} onClick={closeSidebar}>
									{icon} <span>{text}</span>
								</NavLink>
							</li>
						))}
				</ul>
				<div className="sidebar-bottom-btns">
					<div onClick={() => navigate("/setting/plans")} className="w-50">
						<NavLink to="/setting" className="bottom-btn w-100">
							<Cog />
						</NavLink>
					</div>
					<button className="bottom-btn">
						<SignOutIcon />
					</button>
				</div>
			</aside>
			<article className="article">{children}</article>
			<div
				className={`overlay d-lg-none ${isSidebarOpen ? "active" : ""}`}
				onClick={closeSidebar}
			></div>
		</main>
	);
};

export const LayoutHeader = ({ title, goBack, children }) => {
	const { openSidebar } = useGlobalContext();
	const navigate = useNavigate();
	return (
		<header className="article-header container-fluid d-flex justify-content-between align-items-center">
			{goBack ? (
				<h4
					className="title text-base text-uppercase m-0 me-auto cursor-pointer"
					onClick={() => navigate(-1)}
				>
					<LeftAngle /> {title}
				</h4>
			) : (
				<h4 className="title text-base text-uppercase m-0 me-auto">
					{title}
				</h4>
			)}
			<div>{children}</div>
			<div className="d-lg-none ms-3" onClick={openSidebar}>
				<Bar />
			</div>
		</header>
	);
};
export default Layout;
