"use client";
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
import { listType, picturesType } from "@/typesOrInterface/types";
import getList from "@/utils/getList";

enum Tags {
	A = "A",
	Img = "IMG",
	Span = "SPAN",
}

interface NavProps {
	setIsHidden: (bool: boolean) => void;
}

const Nav: React.FC<NavProps> = ({ setIsHidden }) => {
	const [list, setList] = useState<any[]>([]);
	const pathname = usePathname();

	useEffect(() => {
		const list: listType[] = getList();
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

	const switchOff = ({ target }: any) => {
		(target.nodeName === Tags.A ||
			target.nodeName === Tags.Span ||
			target.nodeName === Tags.Img) &&
			setIsHidden(false);

		document.body.classList.remove("is-hidden");
	};

	return (
		<nav className="sidebar__nav" onClick={switchOff}>
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
