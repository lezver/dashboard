"use client";

import { useEffect, useState } from "react";
import "./income.scss";
import { usePathname } from "next/navigation";
import getList from "@/utils/getList";

const Page: React.FC = () => {
	const [income, setIncome] = useState<string | undefined>(undefined);
	const pathname = usePathname();

	useEffect(() => {
		const income = getList().find(
			({ name }) => "/" + name.toLocaleLowerCase() === pathname
		);

		setIncome(income?.name);
	}, []);

	return (
		<>
			<h1>{income}</h1>
			<div className="income">
				<h2>{income}</h2>
			</div>
		</>
	);
};

export default Page;
