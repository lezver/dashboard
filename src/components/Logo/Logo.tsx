import Image from "next/image";
import logo from "../../../public/sidebar/logo.svg";
import { sidebar } from "@/data/library.json";
import "./Logo.scss";

const Logo: React.FC = () => (
	<div className="sidebar__logo">
		<Image src={logo} alt="Logo" />
		<span>
			{sidebar.logo}
			<span>{sidebar.vershon}</span>
		</span>
	</div>
);

export default Logo;
