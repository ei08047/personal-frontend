import React from "react";
import { withTranslation } from 'react-i18next';
import styles from "./Header.module.scss";
import Options from './Options';

class Header extends React.Component{

	constructor(props){
		super(props);
		this.state= {
			isCollapsed:this.props.isCollapsed,
			winScroll:0
		}
	}

	componentDidMount() {
  window.addEventListener('scroll', this.listenToScroll);
      const height = this.divElement.clientHeight;
    this.setState({ height });
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.listenToScroll)
}

static getDerivedStateFromProps(props, state){
	if(props.isCollapsed != state.isCollapsed){
		return {isCollapsed:props.isCollapsed}
	} else {
		return null
	}

}


listenToScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  let control = false;

  if(winScroll > 150){
  	
  	if(!this.state.isCollapsed){
  		this.props.toggleDropdown();
  	}
  } else {

  	if(this.state.isCollapsed){
		this.props.toggleDropdown();
	}

  }
  this.setState({
    winScroll:winScroll
  })
}

	render(){
		   return  <>
		    	<Options />
      <div 
		className={styles.Header}
		ref={ (divElement) => { this.divElement = divElement } }
		>
		      <p>{this.props.t('welcome.label')}</p>
      </div>
      </>

	}

};


export default withTranslation()(Header);
/*




*/