import React from "react";
import styles from "./LandingPage.module.css";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Introduction from "../Introduction/Introduction";
import ChooseUs from "../ChooseUs/ChooseUs";
import AreaOfPractices from "../AreaOfPractice/AreaOfPractice";
import Clients from "../Client/Clients";
import OurTeam from "../OurTeam/OurTeam";
import Faq from "../FAQ/Faq";
import Newsletters from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const LandingPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.landingPage}>
                <NavBar />
                <Hero />
            </div>
            <div className={styles.contentBackground}>
                <div className={styles.contentWrapper}>
                    <Introduction />
                    <ChooseUs />
                    <AreaOfPractices />
                    <Clients />
                    <OurTeam />
                    <Faq />
                    <Newsletters />
                </div>
                <Footer />
            </div>
        </div>

    )
};

export default LandingPage;