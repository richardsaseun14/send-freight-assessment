import React from "react";
import { Pagination } from "../Pagination";
import { QuoteItem } from "../QuoteItem";
import styles from "./QuoteList.module.scss";

export const QuoteList = ({ label, icon, className, style }) => {
	return (
		<div className={styles.Quotes}>
			<QuoteItem />
			<QuoteItem />
			<QuoteItem />
			<QuoteItem />
			<QuoteItem />
			<QuoteItem />
			<Pagination />
		</div>
	);
};
