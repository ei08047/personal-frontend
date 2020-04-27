import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "./Leaderboard.module.scss";
import Countdown from "./Countdown.js";
import { StylesProvider } from '@material-ui/core/styles';




function createData(username, numClients, numProjects, commissionsEarned, total) {
  return { username, numClients, numProjects,commissionsEarned, total };
}

const rows = [
  createData('Frozen yoghurt', 1, 6,120, 2400),
  createData('Ice cream sandwich', 2, 4,90, 1800),
  createData('Eclair', 0, 0,0, 0),
  createData('Cupcake', 0, 0,0, 0),
  createData('Gingerbread', 0, 0,0, 0),
];

export default function Leaderboard() {

  return (
  	<>
  	<div className={styles.TopComponent} >
  		<div className={styles.LeftComponent} >
			<div className={styles.platformInfo}>
				<span className={styles.platformInfoItem}>Clients: 8</span>
				<span className={styles.platformInfoItem}>Projects: 8</span>
				<span className={styles.platformInfoItem}>Money received: 4200</span>
			</div>
			<div className={styles.AffiliateInfo} >
				<span className={styles.platformInfoItem} >Affiliates: 5</span>
				<span className={styles.platformInfoItem}>commissions distributed: 210</span>
			</div>
		</div>

		<div className={styles.LeaderboardInfo}>
			<div className={styles.PrizeInfo}>
				<div className={styles.PrizeInfoItem}>
					<img src={process.env.PUBLIC_URL + '/iconmonstr-trophy-17-32-gold.png'} alt="first prize"/> 
					<span> 168$</span>
				</div>
				<div className={styles.PrizeInfoItem}>
					<img src={process.env.PUBLIC_URL + '/iconmonstr-trophy-17-32-silver.png'} alt="first prize"/>
					<span> 84$</span>
				</div>
				<div className={styles.PrizeInfoItem}>
					<img src={process.env.PUBLIC_URL + '/iconmonstr-trophy-17-32-bronze.png'} alt="first prize"/> 
					<span> 42$</span>
				</div>
			</div>
			<Countdown  />
		</div>
	</div>

<StylesProvider injectFirst>
    <TableContainer component={Paper}>
      <Table className={styles.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.cell} >Affiliate</TableCell>
            <TableCell className={styles.cell} align="right">Number of Clients</TableCell>
            <TableCell className={styles.cell} align="right">Number of Projects</TableCell>
            <TableCell className={styles.cell} align="right">Comissions Earned</TableCell>
            <TableCell className={styles.cell} align="right">Total($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.username}>
              <TableCell className={styles.cell} component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell className={styles.cell} align="right">{row.numClients}</TableCell>
              <TableCell className={styles.cell} align="right">{row.numProjects}</TableCell>
              <TableCell className={styles.cell} align="right">{row.commissionsEarned}</TableCell>
              <TableCell className={styles.cell} align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </StylesProvider>
    </>

  );
}

