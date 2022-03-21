import "./App.scss";
import {
	PageHeader,
	Pagination,
	QuoteItem,
	SideNavigation,
} from "./components";

function App() {
	return (
		<div className="">
			<SideNavigation />
			<div className="content">
				<PageHeader />
				<QuoteItem />
				<QuoteItem />
				<QuoteItem />
				<QuoteItem />
				<QuoteItem />
				<QuoteItem />
				<QuoteItem />
				<Pagination />
			</div>
		</div>
	);
}

export default App;
