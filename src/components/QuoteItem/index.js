import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import styles from "./QuoteItem.module.scss";

export const QuoteItem = ({ label, icon, className, style }) => {
	return (
		<>
			<div className={styles.Quote}>
				<div className="title">
					<div className="d-flex align-items-center mb-6">
						<Unicons.UilShip className="mr-2" color="#81868C" />
						<p className="font-bold text-primary">SF-1243213</p>
						<span className="my-6">•</span>
						<p className="small text-gray">Plain Shirts</p>
					</div>
					<button className={styles.ImportButton}>IMPORT</button>
				</div>
				<div className="to-location">
					<p className="font-bold mb-16">Xiamen, China</p>
					<p className="small text-gray">Ready: 24th Feb, 2021</p>
				</div>
				<Unicons.UilArrowRight color="#81868C" />
				<div className="from-location">
					<p className="font-bold mb-16">Lagos, Nigeria</p>
					<p className="small text-gray">Expires: 17th Feb, 2021</p>
				</div>
				<p className="font-bold">₦ 14,000,000</p>
				<p className="small font-bold text-gray">Booked</p>
			</div>
			<hr
				style={{ margin: "24px 0", backgroundColor: "#81868c", opacity: 0.1 }}
			/>
		</>
	);
};
