"use client";

import { useState } from "react";
import Logo from "../Logo";
import Nav from "../Nav";
import User from "../User";
import "./Sidebar.scss";
import data from "@/data/library.json";

const Sidebar: React.FC = () => {
	const { menu } = data.sidebar;
	const [isHidden, setIsHidden] = useState<boolean>(false);

	const changeHidden = (): void => {
		setIsHidden(isHidden ? false : true);

		if (isHidden) {
			document.body.classList.remove("is-hidden");
		} else {
			document.body.classList.add("is-hidden");
		}
	};

	return (
		<aside className="sidebar">
			<button className="sidebar__menu" type="button" onClick={changeHidden}>
				{menu}
			</button>
			<Logo />
			<div
				className={`sidebar__block ${
					isHidden ? "sidebar__active" : "sidebar__inactive"
				}`}
			>
				<Nav setIsHidden={setIsHidden} />
				<User />
			</div>
		</aside>
	);
};

export default Sidebar;
