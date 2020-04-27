import React from "react";

import styles from "./MiniPost.module.scss";


import { withStyles,makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StylesProvider } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor:"black",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



class MiniPost extends React.Component{


render(){
const { classes } = this.props;
	  const bull = <span className={classes.bullet}>•</span>;

    return (
    <StylesProvider injectFirst>
      <div 
		className={styles.Post}>
    <Card className={styles.root}>
      <CardContent>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          {this.props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          intro
        </Typography>
        <Typography variant="body2" component="p">
          {this.props.intro}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </div>
      </StylesProvider>
  );
}

}

export default withStyles(useStyles) (MiniPost);
