import React from "react";
import styles from "./Services.module.scss";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



function MediaCard(props) {
    console.log(props)
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={props.href} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}


class Services extends React.Component{


render(){
    return (
    <>
    		<div className={styles.ServicesContainer} > 

            <div className={styles.ServiceItem} >
                < MediaCard 
                title="website development"
                content=""
                href="#website_development"
                />
            </div>

    		<div className={styles.ServiceItem} >
			 < MediaCard 
             title="webscrapping solutions"
             content=""
             href="#web_scrapping"
             />
    		</div>
    		<div className={styles.ServiceItem} >
			 < MediaCard 
             title="smart-contract programing"
             content=""
             href="#smart_contract"
             />
    		</div>

    		</div>

<div className={styles.LearnMore}>
<div id="website_development">
  <h3>website development</h3>
</div>
<div id="web_scrapping">
<h3>webscrapping solutions</h3>
</div>
<div id="smart_contract">
<h3>smart contract programing</h3>
</div>
</div>
</>
  );
}

}


export default Services;


 