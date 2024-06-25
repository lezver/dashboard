import "./customers.scss";
import data from "@/data/library.json";
import Search from "@/components/Search";
import ListOfCustomers from "@/components/ListOfCustomers";
import ControlPanel from "@/components/ControlPanel";

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
