"use client";

import { useEffect, useState } from "react";
import "./style.scss";
import { usePathname } from "next/navigation";
import getList from "@/utils/getList";

const Page: React.FC = () => {
	const [promote, setPromote] = useState<string | undefined>(undefined);

	const pathname = usePathname();

	useEffect(() => {
		const promote = getList().find(
			({ name }) => "/" + name.toLocaleLowerCase() === pathname
		);

		setPromote(promote?.name);
	}, []);

	return (
		<>
			<h1>{promote}</h1>
			<div className="promote">
				<h2>{promote}</h2>
			</div>
		</>
	);
};

export default Page;
