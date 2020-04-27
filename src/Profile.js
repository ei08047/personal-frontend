import React from "react";

import styles from "./Profile.module.scss";
import { withTranslation } from 'react-i18next';



class Profile extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      usernmame: '',
      usernameLabel:props.t("username"),
      password: '',
      password_label:props.t("auth.password"),
      email :'',
      emailLabel:props.t("contact.email"),
      referralCode:'',
      referralCodeLabel:props.t("referralCode"),
      ethereumAddress:'',
      ethereumAddressLabel:props.t("ethereumAddress"),
      submit_label:props.t("submit"),
      submit_disabled:true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
      if(this.state.usernameOremail!='' && this.state.password!=''){
    this.setState({submit_disabled:false})
  }else {
    this.setState({submit_disabled:true})
  }
  }

  handleSubmit (event) {
    event.preventDefault();
  }

render(){
    return (
      <div className={styles.Container} >
      <form  onSubmit={this.handleSubmit}>
        
        <div className={styles.Control}>
        <label>
          {this.state.usernameLabel}:
        </label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </div>

        <div className={styles.Control}>
        <label>
          {this.state.emailLabel}:
        </label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>

        <div className={styles.Control}>
        <label>
          {this.state.password_label}:
        </label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>

        <div className={styles.Control}>
        <label>
          {this.state.ethereumAddressLabel}:
        </label>
        <input type="text" name="ethereumAddress" value={this.state.ethereumAddress} onChange={this.handleChange} />
        </div>

        <div className={styles.Control}>
        <label>
          {this.state.referralCodeLabel}:
        </label>
        <input type="text" name="referralCode" value={this.state.referralCode} onChange={this.handleChange} />
        </div>



      <div className={styles.Control}>
          <input type="submit" value={this.state.submit_label} disabled={this.state.submit_disabled}/>
      </div>

      </form>
      </div>
  );
}

}


export default withTranslation()(Profile);
