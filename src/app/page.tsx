import getList from "@/utils/getList";
import "./globals.scss";

const Page: React.FC = () => (
	<>
		<h1>{getList()[0].name}</h1>
		<div className="dashboard">
			<h2>{getList()[0].name}</h2>
		</div>
	</>
);

export default Page;
