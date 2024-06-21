import Image from "next/image";
import userJpg from "../../../public/sidebar/user.jpg";
import data from "@/data/library.json";
import "./User.scss";

const User: React.FC = () => (
	<div className="sidebar__user">
		<Image src={userJpg} width={42} height={42} alt="user" />
		<div>
			<p>{data.sidebar.user.name}</p>
			<span>{data.sidebar.user.position}</span>
		</div>
	</div>
);

export default User;
