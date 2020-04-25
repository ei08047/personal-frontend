import React from "react";
import Fab from '@material-ui/core/Fab';
import styles from "./WalletManager.module.scss";

class WalletManager extends React.Component{


render(){
    return (
      <div >
      { (typeof window.ethereum !== 'undefined')?
      <Fab
          variant="extended"
          size="medium"
          aria-label="add"
          className={styles.Clickable}
        >           Connect metamask wallet
        </Fab>

      : <Fab
          variant="extended"
          size="medium"
          aria-label="add"
          className={styles.Clickable}
        >           New to cripto?
        </Fab> }
      </div>
  );
}

}


export default WalletManager;
