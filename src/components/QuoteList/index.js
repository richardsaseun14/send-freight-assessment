import React from "react";
import { Pagination } from "../Pagination";
import { QuoteItem } from "../QuoteItem";
import styles from "./QuoteList.module.scss";

export const QuoteList = ({ quotes }) => {
	return (
		<div className={styles.Quotes}>
			{quotes.map((item, index) => (
				<QuoteItem key={index} quote={item}></QuoteItem>
			))}
			<Pagination />
		</div>
	);
};
