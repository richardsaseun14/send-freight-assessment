import React from "react";
import styles from "./PageTabs.module.scss";

export const PageTabs = () => {
	return (
		<div className={styles.Tabs}>
			<button className="tablinks active">
				All
				<span>42</span>
			</button>
			<button className="tablinks">
				Pending <span>31</span>
			</button>
			<button className="tablinks">
				Ready <span>42</span>
			</button>
			<button className="tablinks">
				Booked <span>0</span>
			</button>
		</div>
	);
};
