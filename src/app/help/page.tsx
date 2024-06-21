"use client";

import { usePathname } from "next/navigation";
import "./style.scss";
import { useEffect, useState } from "react";
import getList from "@/utils/getList";

const Page: React.FC = () => {
	const [help, setHelp] = useState<string | undefined>(undefined);
	const pathname = usePathname();

	useEffect(() => {
		const help = getList().find(
			({ name }) => "/" + name.toLocaleLowerCase() === pathname
		);

		setHelp(help?.name);
	}, []);

	return (
		<>
			<h1>{help}</h1>
			<div className="help">
				<h2>{help}</h2>
			</div>
		</>
	);
};

export default Page;
