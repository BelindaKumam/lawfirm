import React from "react";
import styles from "./OurTeam.module.css";
import { teamData } from "../../config/helper-config";
import { Box, Grid } from "@mui/material";

const OurTeam = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.teamHeader}>
					<h3>Our Team</h3>
				</div>

				<div className={styles.teamContainer}>
					<Box sx={{ flexGrow: 1 }}>
						<Grid
							container
							spacing={{ xs: 2, md: 3 }}
							columns={{ xs: 4, sm: 8, md: 12 }}>
							{teamData.map((each, index) => (
								<Grid item xs={2} sm={4} md={4} key={index}>
									<div className={styles.grid}>
										<div className={styles.imgContainer}>
											<img src={each.image} alt="team-Member" />
										</div>
										<div className={styles.textWrapper}>
											<h5>{each.name}</h5>
											<p>{each.cases} Cases</p>
										</div>
									</div>
								</Grid>
							))}
						</Grid>
					</Box>
				</div>
			</div>
		</>
	);
};

export default OurTeam;
