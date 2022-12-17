import React from "react";
import { Link, NavLink } from "react-router-dom";
import { sidebar_menu } from "../assets/data/sidebar_menu";
import author_img from "../assets/img/author.png";
import { Cog, LogoWhite, SignOutIcon } from "../icons/IconTheme";
const Layout = ({ children }) => {
	return (
		<main className="main">
			<aside className="sidebar">
				<div className="sidebar-logo">
					<Link to="#">
						<LogoWhite />
					</Link>
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
								<NavLink to={link}>
									{icon} <span>{text}</span>
								</NavLink>
							</li>
						))}
				</ul>
				<div className="sidebar-bottom-btns">
					<button>
						<Cog />
					</button>
					<button>
						<SignOutIcon />
					</button>
				</div>
			</aside>
			<article className="article">{children}</article>
		</main>
	);
};

export default Layout;
