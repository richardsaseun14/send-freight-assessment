import React from "react";
import styles from "./Pagination.module.scss";

export const Pagination = ({ label, icon, className, style }) => {
	return (
		<div className={styles.Pagination}>
			<p className="text-gray" style={{ marginRight: "20px" }}>
				Showing 1-6 of 75 results
			</p>
			<a className={styles.Active} href="/">
				1
			</a>
			<a href="/">2</a>
			<a href="/">3</a>
			<a href="/">...</a>
			<a href="/">10</a>
			<input type="number"></input>
		</div>
	);
};
