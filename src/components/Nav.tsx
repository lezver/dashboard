import { aside } from "@/data/library.json";

const Nav: React.FC = () => {
	return (
		<nav className="aside__nav">
			<ul>
				{aside.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
