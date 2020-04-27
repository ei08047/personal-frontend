import React from "react";

import styles from "./PastProjects.module.scss";






function createData(summary, start,end, affiliate, budget) {
  return { summary, start,end, affiliate, budget };
}

const rows = [
  createData('Develop a webscrapping solution to get job posts from freelancing platforms and a webpage to list the results in a tabular format', "01/03/2020","19/03/2020", "affiliate1", 1000),
  createData('Develop a static website to showcase my photography portfolio', "25/03/2020","02/04/2020", "affiliate2", 200),
  createData('Develop a website for a martial arts school that automatically updates content from social media sources', "14/4/2020","20/05/2020", "affiliate3", 1500),
];

class PastProjects extends React.Component{


render(){
    return (
      <div classNme={styles.ProjectsContainer}>
		{rows.map((row) =>(
			<div className={styles.SingleProject} >
			<p>{row.summary}</p>
			<p>{row.start} to {row.end}</p>
			<p>{row.affiliate}</p>
			<p>{row.budget}</p>
			</div>
			))}
		

      </div>
  );
}

}


export default PastProjects;
