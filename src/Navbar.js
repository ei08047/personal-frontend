import React from "react";
import { FaAlignRight } from 'react-icons/fa'
import {
  Link
} from "react-router-dom";

import styles from "./Navbar.module.scss";

import { withTranslation } from 'react-i18next';



class Navbar extends React.Component{

constructor(props) {
  super(props);
  console.log(this.props);
  this.state = {
    hover: false,
    hover2: false,
    toggle:true,
    open:true,
    contactLabel:props.t("contact.label"),
    aboutmeLabel:props.t("aboutme.label"),
    leaderboardLabel:props.t("leaderboard.label"),
    pastprojectsLabel:props.t("pastprojects.label"),
    affiliatesLabel:props.t("affiliates.label"),
    servicesLabel:props.t("services.label"),
    loginregisterLabel:props.t("login/register.label"),
  }
  this.toggleHover = this.toggleHover.bind(this);
  this.toggleHover2 = this.toggleHover2.bind(this);
  this.expandMenu = this.expandMenu.bind(this);
}

expandMenu()  {
    console.log(this.state.toggle)
    this.setState({toggle:!this.state.toggle})
}

toggleHover() {
  this.setState({hover: !this.state.hover})
}

toggleHover2() {
  this.setState({hover2: !this.state.hover2})
}

componentWillUpdate(nextProps, nextState) {
  //console.log("Navbar componentWillUpdate")
  if(nextProps.open != this.state.open){
      //console.log(nextProps);
    this.setState({open:nextProps.open});
  }

	if (
    nextProps.t("contact.label") != this.state.contactLabel || 
    nextProps.t("leaderboard.label") != this.state.leaderboardLabel ||
    nextProps.t("pastprojects.label") != this.state.pastprojectsLabel ||
    nextProps.t("affiliates.label") != this.state.affiliatesLabel ||
    nextProps.t("services.label") != this.state.servicesLabel ||
    nextProps.t("aboutme.label") != this.state.aboutmeLabel ||
    nextProps.t("login/register.label") != this.state.loginregisterLabel
    ){
		this.setState({contactLabel:nextProps.t("contact.label")});
    this.setState({leaderboardLabel:nextProps.t("leaderboard.label")});
    this.setState({pastprojectsLabel:nextProps.t("pastprojects.label")});
    this.setState({affiliatesLabel:nextProps.t("affiliates.label")});
    this.setState({servicesLabel:nextProps.t("services.label")});
    this.setState({aboutmeLabel:nextProps.t("aboutme.label")});
    this.setState({loginregisterLabel:nextProps.t("login/register.label")});
	}
}

render(){
    return (
    	<>
        <div className={this.props.fixed ? styles.Navbar : [styles.Navbar, styles.Fixed].join(" ")}>
            <button className={styles.ExpandButton} onClick={this.expandMenu}>
                <FaAlignRight />
            </button>
          <ul className={this.state.toggle ? styles.ShowNav : styles.HideNav}>
            <li>
              <Link to="/"><span>{this.state.aboutmeLabel}</span> </Link>
            </li>
            <li>
              <Link to="/services"><span>{this.state.servicesLabel}</span> </Link>
            </li>
            <li>
              <Link to="/projects"><span>{this.state.pastprojectsLabel}</span> </Link>
            </li>
            <li
            onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            <Link to="/affiliates"> <span> {this.state.affiliatesLabel} </span></Link>
            {this.state.hover &&  
              (<ul className={styles.Dropdown1}>
                <li>
                  <Link to="/affiliates/leaderboard"> <span>{this.state.leaderboardLabel}</span></Link>
                </li>
          </ul>) }
          </li>
          <li>
          <Link to="/contact"> <span> {this.state.contactLabel} </span> </Link>
          </li>
                            <li>
                <Link to="/auth">
                <span>{this.state.loginregisterLabel}</span>
                </Link>
                  </li>
          </ul>
        </div>
        </>
  );
}

}

 export default withTranslation()(Navbar);

