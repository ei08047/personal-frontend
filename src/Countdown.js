import React from "react";

import styles from "./Countdown.module.scss";




class Countdown extends React.Component{


render(){

	// Set the date we're counting down to
	var countDownDate = new Date("Apr 24, 2021 00:00:00").getTime();
  // Get today's date and time
  var now = new Date().getTime();
  console.log(now);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  console.log(days)




    return (
      <div 
		className={styles.countdownContainer}>
		
		      <div><span>{days} days until reset </span>
</div>


      </div>
  );
}

}


export default Countdown;
