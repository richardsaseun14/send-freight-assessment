import React from "react";
import UkSend from "../../assets/images/uk-send.png";
import * as Unicons from "@iconscout/react-unicons";
import styles from "./AccountSelector.module.scss";
import classNames from "classnames/bind";

export const AccountSelector = ({ label, icon, className, style }) => {
	let cx = classNames.bind(styles);
	let classes = cx(className, styles.Account, "reset-sizing");
	return (
		<div className={classes} style={style}>
			<div className="d-flex flex-row align-items-center justify-content-between">
				<div className="d-flex align-items-center">
					<img height="30" src={UkSend} alt="" style={{ marginRight: "8px" }} />
					<div>
						<p className="small font-bold" style={{ marginBottom: "4px" }}>
							Mali Industries
						</p>
						<p className="small">maliindustries@gmail.com</p>
					</div>
				</div>
				<div className="dropdown">
					<Unicons.UilAngleDown size="16" />
				</div>
			</div>
		</div>
	);
};
