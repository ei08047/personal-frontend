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

	if (nextProps.t("contact.label") != this.state.contactLabel){
		this.setState({contactLabel:nextProps.t("contact.label")});
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
              <Link to="/"><span>Landing</span> </Link>
            </li>
            <li>
              <Link to="/services"><span>services</span> </Link>
            </li>
            <li
            onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            <Link to="/affiliates"> <span> Affiliates </span></Link>
            {this.state.hover &&  
              (<ul className={styles.Dropdown1}>
                <li>
                  <Link to="/affiliates/leaderboard"> <span>leaderboard</span></Link>
                </li>
              <li onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2}>
                <Link to="/affiliates/projects">
                <span>projects</span>
                </Link>
            </li>
          </ul>) }
          </li>
          <li>
          <Link to="/contact"> <span> {this.state.contactLabel} </span> </Link>
          </li>
                            <li>
                <Link to="/auth">
                <span>Login/register</span>
                </Link>
                  </li>
          </ul>
        </div>
        </>
  );
}

}

 export default withTranslation()(Navbar);

