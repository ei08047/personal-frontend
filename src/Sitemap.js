import React from "react";
import {
  useLocation
} from "react-router-dom";
import styles from "./Sitemap.module.scss";
import { useTranslation } from 'react-i18next';


export default function Sitemap(r) {

  	const { t, i18n } = useTranslation();

	let location = useLocation();
	let p = ["root"];
	let curr = location.pathname.split("/")
	for (var i = 0; i < curr.length; i++) {
		if (curr[i]!=""){
			p.push(curr[i])
		}
	}



	let size= curr.length; 															
	return (
		<div className={styles.SSS}>
		<div className={styles.Container}>
		{
			p.map(
				(route, index) => {
					return (
						<div className={styles.Item} key={index} >
						{route}
						</div> 
						);
					
				}
			)
		}

			</div>
			<h2> {t(r.title)}</h2>
			</div>
			)
		}

