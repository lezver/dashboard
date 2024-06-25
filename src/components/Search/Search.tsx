import Image from "next/image";
import "./Search.scss";
import data from "@/data/library.json";
import searchIcon from "../../../public/customers/search.svg";

const Search: React.FC = () => {
	const { customersHead } = data.customers;
	return (
		<ul className="customers__search">
			<li>
				<h2>{customersHead.title}</h2>
				<p>{customersHead.active}</p>
			</li>
			<li>
				<button>
					<Image src={searchIcon} alt={customersHead.search} />
				</button>
				<label>
					<input type="text" placeholder="Search" />
				</label>
			</li>
		</ul>
	);
};

export default Search;
