import React, { useState} from "react";
import styles from "./Hero.module.css";
import emailBox from "../../assets/email.svg";

const Hero = () => {
    const [emailId, setEmailId] = useState("");

    const handleChange = (e) => {
		setEmailId(e.target.value);
	};

    const handleClick = () => {
		if (!emailId) {
			alert("Please fill in the required field");
			return;
		} else {
			setEmailId("");
		}
	};

    return (
		<div className={styles.wrapper}>
			<div className={styles.leftWrapper}>
				<div className={styles.textWrapper}>
					<h1>You don’t have to Fight them Alone.</h1>
				</div>
				<div className={styles.text2Wrapper}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
						curabitur sodales conubia ut inceptos faucibus himenaeos tortor
						eget, hac massa gravida arcu interdum proin curae.
					</p>
				</div>
				<div className={styles.inputContainer}>
					<img src={emailBox} alt="emailBox" width={22} height={18} />
					<input
						type="text"
						value={emailId}
						onChange={handleChange}
						placeholder="Enter your email address"></input>
					<div className={styles.rectangleBtnContainer}>
						<button onClick={handleClick}>Let’s Talk</button>
					</div>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<div className={styles.container}></div>
			</div>
		</div>
	);


};

export default Hero;