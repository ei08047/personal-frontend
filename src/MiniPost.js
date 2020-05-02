import React from "react";

import styles from "./MiniPost.module.scss";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StylesProvider } from '@material-ui/core/styles';




class MiniPost extends React.Component{


render(){


    return (
    <StylesProvider injectFirst>
      <div 
		className={styles.Post}>
    <Card className={styles.root}>
      <CardContent className={styles.content}>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          {this.props.title}
        </Typography>
        <Typography  className={styles.intro} component="p">
          {this.props.intro}
        </Typography>
      </CardContent>
      <CardActions className={styles.MiniPostFooter}>
        <Button >Learn More</Button>
      </CardActions >
    </Card>
      </div>
      </StylesProvider>
  );
}

}

export default MiniPost;
