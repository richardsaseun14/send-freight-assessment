import "./App.scss";
import { PageHeader, PageTabs, QuoteList, SideNavigation } from "./components";

function App() {
	return (
		<div className="">
			<SideNavigation />
			<div className="content">
				<PageHeader />
				<PageTabs />
				<QuoteList />
			</div>
		</div>
	);
}

export default App;
