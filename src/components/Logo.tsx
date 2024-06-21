import Image from "next/image";
import logoSvg from "../../public/logo.svg";
import { logo, vershon } from "@/data/library.json";

const Logo: React.FC = () => {
	return (
		<div className="aside__logo">
			<Image src={logoSvg} alt="Logo" />
			<span>
				{logo}
				<span>{vershon}</span>
			</span>
		</div>
	);
};

export default Logo;
