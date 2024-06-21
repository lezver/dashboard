import Logo from "../Logo";
import Nav from "../Nav";
import User from "../User";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
	return (
		<aside className="sidebar">
			<Logo />
			<Nav />
			<User />
		</aside>
	);
};

export default Sidebar;
