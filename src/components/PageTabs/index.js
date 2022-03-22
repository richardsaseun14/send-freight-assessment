import React from "react";
import styles from "./PageTabs.module.scss";
import classNames from "classnames";

export const PageTabs = ({
	clickAll,
	clickPending,
	clickReady,
	clickBooked,
	state,
}) => {
	return (
		<div className={styles.Tabs}>
			<div
				className={classNames({ "tab-active": state === "all" })}
				onClick={clickAll}
			>
				All
				<span>42</span>
			</div>
			<div
				className={classNames({ "tab-active": state === "pending" })}
				onClick={clickPending}
			>
				Pending <span>31</span>
			</div>
			<div
				className={classNames({ "tab-active": state === "ready" })}
				onClick={clickReady}
			>
				Ready <span>42</span>
			</div>
			<div
				className={classNames({ "tab-active": state === "booked" })}
				onClick={clickBooked}
			>
				Booked <span>0</span>
			</div>
		</div>
	);
};
