import React from "react";

import styles from "./Options.module.scss";
import LanguageSelector from "./LanguageSelector";
import DarkMode from "./DarkMode";
import WalletManager from "./WalletManager";

class Options extends React.Component{


render(){
    return (
      <div 
		className={styles.InlineContainer}>
		<div className={styles.LanguageSelector} > <LanguageSelector /> </div>
		<div className={styles.DarkMode} > <DarkMode /> </div>
      </div>
  );
}

}


export default Options;
