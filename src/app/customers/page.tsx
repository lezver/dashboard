import "./style.scss";
import data from "@/data/library.json";
import Search from "@/components/Search/Search";
import ListOfCustomers from "@/components/ListOfCustomers/ListOfCustomers";
import ControlPanel from "@/components/ControlPanel/ControlPanel";

const Page: React.FC = () => {
	const { title } = data.customers;

	return (
		<>
			<h1 className="main__title">{title}</h1>
			<div className="customers">
				<Search />
				<ListOfCustomers />
				<ControlPanel />
			</div>
		</>
	);
};

export default Page;
