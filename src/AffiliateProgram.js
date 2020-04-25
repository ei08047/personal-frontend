import React from "react";

import styles from "./AffiliateProgram.module.scss";



class AffiliateProgram extends React.Component{


render(){
    return (
      <div className={styles.MainContainer}>

      			<span className={styles.text1} >
		      As a freelancer, a big part of the struggle is to actually land clients, for that reason i've launched an affiliate program.
		      It consists as following: 
 			</span>
 			
			<ul>
			<li>you regist yourself in the platform providing an email and an Ethreum address.</li>
			<li>Once the registration is completed you'll unlock a referal code, available in your profile page.</li>
			<li>Share the platform with possible clients.</li>
			<li>For each concluded project from your clients you'll get 5% of the budget.</li>
			<li>Affiliates will compete in a leaderboard that refreshes every year, top 3 will earn a percentage of total earnings (4%/2%/1%)</li>
			</ul>
      		
      		<span>All prizes will be paid in DAI crypto currency.
	      	For transparency purposes, all contracts landed will be posted including some information about them:
	      	</span>

	      	<ul>
	      	<li>project summary </li>
	      	<li>period </li>
			<li>affiliate</li>
			<li>budget</li>
			<li>payment method</li>
			<li>transaction (if applicable)</li>
			<li>client contact (if allowed)</li>
			<li>payment method</li>
			<li>link to the project or smart contract address(if applicable)</li>
	      	</ul>

      </div>
  );
}

}


export default AffiliateProgram;
