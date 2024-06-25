"use client";

import { useEffect, useState } from "react";
import "./product.scss";
import { usePathname } from "next/navigation";
import getList from "@/utils/getList";

const Page: React.FC = () => {
	const [product, setProduct] = useState<string | undefined>(undefined);
	const pathname = usePathname();

	useEffect(() => {
		const product = getList().find(
			({ name }) => "/" + name.toLocaleLowerCase() === pathname
		);

		setProduct(product?.name);
	}, []);

	return (
		<>
			<h1>{product}</h1>
			<div className="product">
				<h2>{product}</h2>
			</div>
		</>
	);
};

export default Page;
