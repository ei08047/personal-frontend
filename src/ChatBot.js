import React from "react";
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import styles from "./ChatBot.module.scss";

class ChatBot extends React.Component{

constructor(props){
	super(props);
	  this.state = {
		expanded: false,
  }
  this.expand = this.expand.bind(this);

}


expand(){
	this.setState({expanded: !this.state.expanded})
}

render(){
    return (
    	<div >
    	{this.state.expanded && 
    		<div className={styles.Expanded}> 
<p>How many pages does your website require? </p>
    	<input type="text" value="answer"/>
<p>From 1(easiest) to 5(hardest), how complex is the design you wish to implement? </p>
    	<input type="text" value="answer"/>
    	<p>Does your website requires a Register/login logic? </p>
    	<input type="text" value="answer"/>
    	<p> Do you wish to have Posts/comments on the website? </p>
    	<input type="text" value="answer"/>
    	<p> Do you wish users to subscribe to your newsletter? </p>
    	<input type="text" value="answer"/>
    	</div>}
		
      <div 
		className={styles.Popup}
		onClick={this.expand}
		>
		<Fab
          variant="extended"
          size="medium"
          aria-label="add"
          className={styles.Margin}
        >
{
	this.state.expanded ?
	<NavigationIcon className={styles.rotatedIcon} /> :
	<NavigationIcon className={styles.extendedIcon} />
}
          Get a Quote
        </Fab>
      </div>
      </div>
  );
}

}


export default ChatBot;
