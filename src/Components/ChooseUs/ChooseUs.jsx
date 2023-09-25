import React from "react";
import styles from "./ChooseUs.module.css";
import ChooseUsContainer from "./ChooseUsContainer";
import { chooseUsData} from "../../config/helper-config";

const ChooseUs = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h3>Why Choose us?</h3>
				</div>
				<div className={styles.boxWrapper}>
                {chooseUsData.map((each, index) => (
						<ChooseUsContainer data={each} key={index} />
					))}
				</div>
			</div>
		</>
	);
};

export default ChooseUs;