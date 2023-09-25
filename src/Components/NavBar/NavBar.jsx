import React from "react";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const listItem = ["Home", "Attroneys", "Practice Areas", "About Us"];

const NavBar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
               <Logo />
            </div>
            <div className={styles.listItemWrapper}>
               <ul>
                {listItem.map((itm, idx) =>(
                    <li key={idx}>{itm}</li>
                ))}
               </ul>
            </div>
            <div className={styles.btnContainer}>Contact Now</div>
        </div>
    )
}

export default NavBar;