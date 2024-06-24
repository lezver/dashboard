import "./style.scss";
import data from "@/data/library.json";

const ListOfCustomers: React.FC = () => {
	const { table } = data.customers;
	return (
		<table className="customers__table">
			<thead>
				<tr>
					<th>Customer Name</th>
					<th>Company</th>
					<th>Phone Number</th>
					<th>Email</th>
					<th>Country</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{table.map((item, index) => (
					<tr key={index}>
						<td>{item.name}</td>
						<td>{item.company}</td>
						<td>{item.phone}</td>
						<td>{item.email}</td>
						<td>{item.country}</td>
						<td>
							<span className={item.status.toLocaleLowerCase()}>
								{item.status}
							</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ListOfCustomers;
