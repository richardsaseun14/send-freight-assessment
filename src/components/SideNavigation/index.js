import React from "react";
import { NavigationItem } from "../NavigationItem";
import styles from "./SideNavigation.module.scss";
import Logo from "../../assets/images/logo-send.png";
import { AccountSelector } from "../AccountSelector";

const mainLinks = [
	{ label: "Dashboard", icon: "UilEstate" },
	{ label: "Quotes", icon: "UilFileAlt" },
	{ label: "Bookings", icon: "UilBookAlt" },
	{ label: "Shipments", icon: "UilShip" },
	{ label: "Trade Finance", icon: "UilWallet" },
];

const otherLinks = [
	{ label: "Billings", icon: "UilCreditCard" },
	{ label: "Products", icon: "UilTagAlt" },
	{ label: "Fixed Rates", icon: "UilBalanceScale" },
	{ label: "Network", icon: "UilUser" },
	{ label: "Reports", icon: "UilFolderOpen" },
];

const miscLinks = [
	{ label: "Notifications", icon: "UilBell" },
	{ label: "Settings", icon: "UilSetting" },
	{ label: "Support", icon: "UilHeadphonesAlt" },
];

export const SideNavigation = () => {
	return (
		<div className={styles.SideNav}>
			<img src={Logo} className={styles.Logo} alt="" />
			<ul className="flex-grow-1 w-100">
				{mainLinks.map(({ label, icon }) => (
					<NavigationItem label={label} icon={icon} />
				))}
				<hr
					style={{ margin: "15px 0", backgroundColor: "#81868c", opacity: 0.1 }}
				/>
				{otherLinks.map(({ label, icon }) => (
					<NavigationItem label={label} icon={icon} />
				))}
			</ul>

			<ul className=" w-100">
				{miscLinks.map(({ label, icon }, index) => (
					<NavigationItem key={index} label={label} icon={icon} />
				))}
				<AccountSelector className="w-100" style={{ marginTop: "30px" }} />
			</ul>
		</div>
	);
};
