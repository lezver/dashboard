import "./Container.scss";
import Sidebar from "../Sidebar";

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div className="container">
			<Sidebar />

			<main className="main">{children}</main>
		</div>
	);
};

export default Container;
