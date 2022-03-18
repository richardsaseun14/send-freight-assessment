import React from "react";
import styles from "./NavigationItem.module.scss";
import * as Unicons from "@iconscout/react-unicons";

export const NavigationItem = ({ label, icon }) => {
	const IconComponent = Unicons[icon];
	return (
		<li className={styles.NavItem}>
			<IconComponent size="16" />
			<a href="www.google.com" className="" style={{ marginLeft: "8px" }}>
				{label}
			</a>
		</li>
	);
};
