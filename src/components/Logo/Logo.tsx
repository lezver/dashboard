import Image from "next/image";
import logo from "../../../public/sidebar/logo.svg";
import data from "@/data/library.json";
import "./Logo.scss";

const Logo: React.FC = () => (
	<div className="sidebar__logo">
		<Image src={logo} alt="Logo" />
		<span>
			{data.sidebar.logo}
			<span>{data.sidebar.vershon}</span>
		</span>
	</div>
);

export default Logo;
