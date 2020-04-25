import React from "react";

import styles from "./Footer.module.scss";
import ChatBot from "./ChatBot.js";



class Footer extends React.Component{


render(){
    return (
      <div 
		className={styles.Footer}>
		
		      <div><footer>&copy; Copyright 2020 José Ferreira</footer>
</div>
<ChatBot/>

      </div>
  );
}

}


export default Footer;
