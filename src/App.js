import { useState } from "react";
import "./App.scss";
import { PageHeader, PageTabs, QuoteList, SideNavigation } from "./components";

const QUOTES = [
	{
		title: "SF-1243213",
		item: "Plain Shirts",
		from: { location: "Xiamen, China", time: "24th Feb, 2021" },
		to: { location: "Lagos, Nigeria", time: "17th Feb, 2021" },
		price: "₦ 14,000,000",
		status: "Pending",
	},
	{
		title: "SF-1243213",
		item: "Plain Shirts",
		from: { location: "Xiamen, China", time: "24th Feb, 2021" },
		to: { location: "Lagos, Nigeria", time: "17th Feb, 2021" },
		price: "₦ 14,000,000",
		status: "Ready",
	},
	{
		title: "SF-1243213",
		item: "Plain Shirts",
		from: { location: "Xiamen, China", time: "24th Feb, 2021" },
		to: { location: "Lagos, Nigeria", time: "17th Feb, 2021" },
		price: "₦ 14,000,000",
		status: "Pending",
	},
	{
		title: "SF-1243213",
		item: "Plain Shirts",
		from: { location: "Xiamen, China", time: "24th Feb, 2021" },
		to: { location: "Lagos, Nigeria", time: "17th Feb, 2021" },
		price: "₦ 14,000,000",
		status: "Booked",
	},
	{
		title: "SF-1243213",
		item: "Plain Shirts",
		from: { location: "Xiamen, China", time: "24th Feb, 2021" },
		to: { location: "Lagos, Nigeria", time: "17th Feb, 2021" },
		price: "₦ 14,000,000",
		status: "Booked",
	},
	{
		title: "SF-1243213",
		item: "Plain Shirts",
		from: { location: "Xiamen, China", time: "24th Feb, 2021" },
		to: { location: "Lagos, Nigeria", time: "17th Feb, 2021" },
		price: "₦ 14,000,000",
		status: "Booked",
	},
];

function App() {
	const [quotes, setQuotes] = useState(QUOTES);
	const [status, setstatus] = useState("all");

	const handleAll = () => {
		setstatus("all");
		// const tempQuotes = quotes.map((elem) => ({ ...elem, status: "Pending" }));
		setQuotes(QUOTES);
	};

	const handlePending = () => {
		setstatus("pending");
		const tempQuotes = quotes.map((elem) => ({ ...elem, status: "Pending" }));
		setQuotes(tempQuotes);
	};

	const handleReady = () => {
		setstatus("ready");
		const tempQuotes = quotes.map((elem) => ({ ...elem, status: "Ready" }));
		setQuotes(tempQuotes);
	};

	const handleBooked = () => {
		setstatus("booked");
		const tempQuotes = quotes.map((elem) => ({ ...elem, status: "Booked" }));
		setQuotes(tempQuotes);
	};

	return (
		<div className="">
			<SideNavigation />
			<div className="content">
				<PageHeader />
				<PageTabs
					clickPending={handlePending}
					clickReady={handleReady}
					clickAll={handleAll}
					clickBooked={handleBooked}
					state={status}
				/>
				<QuoteList quotes={quotes} />
			</div>
		</div>
	);
}

export default App;
