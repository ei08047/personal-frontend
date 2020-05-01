import React from "react";

import styles from "./Blog.module.scss";
import MiniPost from "./MiniPost.js";


function createData(title, intro ,content, images) {
  return { title, intro,content };
}

const rows = [
    createData('Historical background of crypto currencies ', "Bitcoin inception ocorred sometime in early 2009, eleven years later more than 7000 crypto currencies fight for their share in this space. In this post, i will provide you with some insights that will help you understand the evolution of this eco-system", "BlogUrl"),
  	createData('Getting started with crypto currencies', "In this post, i will provide some explanation on how to buy your first crypto currency. I'll explain the different types of crypto currencies under different vectors, compare the top vendors and will provide some usefull tips on when and what to buy. Nothing in here is financial advice except this: Always exercise your own due diligence.", "posturl"),
    createData('Picking a Wallet', "Not your keys, not your money! In this post i'll explain you the advantages of wallets, give you several options and how they compare to each others.","url"),
    createData('Using crypto currencies', "Crypto currencies have multiple purposes, but in the end it always goes down to one thing:  Money! In this post i'll go through some ways you can got to increase your holdings and how to spend them in goods, services or just switch them to your local currency.", "url"),
];



class Blog extends React.Component{


render(){
    return (
      <div 
		className={styles.Blog}>
		{rows.map((row) =>(
			<MiniPost title={row.title} intro={row.intro} />
			))}
      </div>
  );
}

}


export default Blog;
