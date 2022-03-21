import React from "react";
import Button from "../Button";
import styles from "./PageHeader.module.scss";

export const PageHeader = () => {
	return (
		<div className={styles.PageHeader}>
			<h2>Quotes</h2>
			<Button />
		</div>
	);
};
