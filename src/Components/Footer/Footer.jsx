import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { footerListIcon, footerListItem } from "../../config/helper-config";

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.firstRowWrapper}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={styles.listItemWrapper}>
					<ul>
						{footerListItem.map((each, index) => (
							<li key={index}>{each}</li>
						))}
					</ul>
				</div>
				<div className={styles.iconWrapper}>
					<ul className={styles.listContainer}>
						{footerListIcon.map((eachIcon, index) => (
							<li key={index}>
								<img src={eachIcon} alt="Icon" width={30} height={30} />
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.websiteDetail}>
				<p>© 2020 Acme. All right reserved.</p>
				<p>Privacy Policy</p>
				<p>Terms of Service</p>
			</div>
		</div>
	);
};

export default Footer;

