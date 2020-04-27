import React from "react";

import styles from "./Blog.module.scss";
import MiniPost from "./MiniPost.js";


function createData(title, intro ,content, images) {
  return { title, intro,content };
}

const rows = [
    createData('Historical background of crypto currencies ', "In this post, i will provide you with some insights that will help you understand the evolution of this eco-system", "BlogUrl"),
  	createData('How to buy your first crypto currency', "introduction", "BlogUrl"),
  	createData('Getting started with crypto currencies', "In this post, i will provide some explanation on how to buy your first crypto currency.I'll explain the different types of crypto currencies under different vectors, compare the top vendors and will provide some usefull tips on when and what to buy. Nothing in here is financial advice except this: Always exercise your due diligence ", "posturl"),
    createData('Picking a Wallet', "intro", "Not your keys, not your money! In this post i'll explain you the advantages of wallets and give you several options"),
    createData('Using crypto currencies', "intro", "BlogUrl"),
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
