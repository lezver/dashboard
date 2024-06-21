import Image from "next/image";
import userJpg from "../../public/user.jpg";

const User: React.FC = () => {
	return (
		<div className="aside__user">
			<Image src={userJpg} width={42} height={42} alt="user" />
			<div>
				<p>Evano</p>
				<span>Project Manager</span>
			</div>
		</div>
	);
};

export default User;
