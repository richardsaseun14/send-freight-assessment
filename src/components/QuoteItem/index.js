import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import styles from "./QuoteItem.module.scss";
import classNames from "classnames";

export const QuoteItem = ({ quote }) => {
	const quoteClasses = classNames(
		"small",
		"font-bold",
		{
			"text-gray": quote.status === "Booked",
		},
		{
			"text-ready": quote.status === "Ready",
		},
		{
			"text-pending": quote.status === "Pending",
		}
	);
	return (
		<>
			<div className={styles.Quote}>
				<div className="title">
					<div className="d-flex align-items-center mb-6">
						<Unicons.UilShip className="mr-2" color="#81868C" />
						<p className="font-bold text-primary">{quote.title}</p>
						<span className="my-6">•</span>
						<p className="small text-gray">{quote.item}</p>
					</div>
					<button className={styles.ImportButton}>IMPORT</button>
				</div>
				<div className="from-location">
					<p className="font-bold mb-16">{quote.from.location}</p>
					<p className="small text-gray">Ready: {quote.from.time}</p>
				</div>
				<Unicons.UilArrowRight color="#81868C" />
				<div className="to-location">
					<p className="font-bold mb-16">{quote.to.location}</p>
					<p className="small text-gray">Expires:{quote.to.time}</p>
				</div>
				<p className="font-bold">{quote.price}</p>
				<p className={quoteClasses}>{quote.status}</p>
			</div>
			<hr
				style={{ margin: "24px 0", backgroundColor: "#81868c", opacity: 0.1 }}
			/>
		</>
	);
};
