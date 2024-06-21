import Logo from "./Logo";
import Nav from "./Nav";
import User from "./User";

const Sidebar: React.FC = () => {
	return (
		<aside className="aside">
			<Logo />
			<Nav />
			<User />
		</aside>
	);
};

export default Sidebar;
