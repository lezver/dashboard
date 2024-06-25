import "./ControlPanel.scss";
import data from "@/data/library.json";
import arrow from "../../../public/customers/arrow.svg";
import Image from "next/image";

const ControlPanel: React.FC = () => {
	const { info, numbers, alt } = data.customers.controlPanel;

	const marckupOfControls = (list: any[]) =>
		list.map((item: number | string, index: number) => {
			switch (item) {
				case 1:
					return (
						<li key={index}>
							<button type="button" className="active">
								{item}
							</button>
						</li>
					);

				case "...":
					return <li key={index}>{item}</li>;

				default:
					return (
						<li key={index}>
							<button type="button">{item}</button>
						</li>
					);
			}
		});

	return (
		<div className="customers__control-panel">
			<p>{info}</p>
			<ul>
				<li>
					<button>
						<Image src={arrow} alt={alt} />
					</button>
				</li>
				{marckupOfControls(numbers)}
				<li>
					<button>
						<Image src={arrow} alt={alt} />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ControlPanel;
