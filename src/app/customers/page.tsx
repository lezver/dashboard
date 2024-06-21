import "./style.scss";

const Page: React.FC = () => {
	return (
		<>
			<h1 className="main__title"></h1>
			<div className="customers">
				<div className="customers__search">
					<div>
						<h2>All Customers</h2>
						<p>Active Members</p>
					</div>
					<label>
						<img src="./img/search.png " alt="search" />
						<input type="text" placeholder="Search" />
					</label>
				</div>
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
						<tr>
							<td>Jane Cooper</td>
							<td>Microsoft</td>
							<td>(225) 555-0118</td>
							<td>jane@microsoft.com</td>
							<td>United States</td>
							<td>Active</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Page;
