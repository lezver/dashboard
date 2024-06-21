"use client";
import { sidebar } from "@/data/library.json";
import Image from "next/image";
import Link from "next/link";
import "./Nav.scss";
import { usePathname } from "next/navigation";
import cube from "../../../public/sidebar/cube.svg";
import discont from "../../../public/sidebar/discont.svg";
import icon from "../../../public/sidebar/icon.svg";
import key from "../../../public/sidebar/key.svg";
import question from "../../../public/sidebar/question.svg";
import wallet from "../../../public/sidebar/wallet.svg";
import arrow from "../../../public/sidebar/arrow.svg";
import { useEffect, useState } from "react";

type listType = {
	name: string;
	arrowAlt: string;
	alt: string;
};

type picturesType = {
	cube?: {
		src: string;
		width: number;
		height: number;
		blurHeight: number;
		blurWidth: number;
	};
	discont?: {
		src: string;
		width: number;
		height: number;
		blurHeight: number;
		blurWidth: number;
	};
	icon?: {
		src: string;
		width: number;
		height: number;
		blurHeight: number;
		blurWidth: number;
	};
	key?: {
		src: string;
		width: number;
		height: number;
		blurHeight: number;
		blurWidth: number;
	};
	wallet?: {
		src: string;
		width: number;
		height: number;
		blurHeight: number;
		blurWidth: number;
	};
	question?: {
		src: string;
		width: number;
		height: number;
		blurHeight: number;
		blurWidth: number;
	};
};

const Nav: React.FC = () => {
	const [list, setList] = useState<any[]>([]);
	const pathname = usePathname();

	useEffect(() => {
		const list: listType[] = sidebar.list;
		const arrOfPictures: picturesType[] = [];
		arrOfPictures.push(
			{ discont },
			{ icon },
			{ key },
			{ cube },
			{ question },
			{ wallet }
		);

		list.forEach((newItem: any) =>
			arrOfPictures.forEach((i: any) => {
				if (Object.keys(i)[0] === newItem.alt) newItem.img = i[newItem.alt];
			})
		);

		setList(list);
	}, []);

	return (
		<nav className="sidebar__nav">
			<ul>
				{list.map((item, index) =>
					index === 0 ? (
						<li key={index}>
							<Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
								<Image
									src={item.img}
									alt={item.alt}
									className={`${pathname === "/" ? "active" : ""}`}
								/>
								<span>{item.name}</span>
							</Link>
						</li>
					) : (
						<li key={index}>
							<Link
								href={item.name.toLocaleLowerCase()}
								className={`${
									pathname === "/" + item.name.toLocaleLowerCase()
										? "active"
										: ""
								}`}
							>
								<Image
									src={item.img}
									alt={item.alt}
									className={`${
										pathname === "/" + item.name.toLocaleLowerCase()
											? "active"
											: ""
									}`}
								/>
								<span>{item.name}</span>
								<Image
									src={arrow}
									alt={item.arrowAlt}
									className={`${
										pathname === "/" + item.name.toLocaleLowerCase()
											? "active"
											: ""
									}`}
								/>
							</Link>
						</li>
					)
				)}
			</ul>
		</nav>
	);
};

export default Nav;