import React from "react";
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import styles from "./Register.module.scss";
import { withTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));


class Register extends React.Component{
  
constructor(props) {
    super(props);
    this.state = {
      username: '',
      email:'',
      password: '',
      confirmPassword:'',
      username_label:props.t("auth.username"),
      email_label:props.t("auth.email"),
      password_label:props.t("auth.password"),
      confirm_password_label:props.t("auth.confirm_password"),
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


  componentWillUpdate(nextProps, nextState) {

  if (nextProps.t("auth.usernameOrEmail") != this.state.usernameOrEmail_label){
    this.setState({
      usernameOrEmail_label:nextProps.t("auth.usernameOrEmail"),
      password_label:nextProps.t("auth.password"),
      submit_label:nextProps.t("submit")
    });
  }
}

  render() {
    return (
      <div className={styles.Container}>
      <form  onSubmit={this.handleSubmit}>
        
        <div className={styles.Control}>
        <label>
          {this.state.username_label}:
        </label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </div>

        <div className={styles.Control}>
        <label>
          {this.state.email_label}:
        </label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>

        <div className={styles.Control}>
        <label>
          {this.state.password_label}:
        </label>
        <input type="email" name="email" value={this.state.password} onChange={this.handleChange} />
        </div>

        <div className={styles.Control}>
        <label>
          {this.state.confirm_password_label}:
        </label>
        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
        </div>

        <div className={styles.Control}>
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        </div>

      <div className={styles.Control}>
          <input type="submit" value={this.state.submit_label} disabled={this.state.submit_disabled}/>
      </div>

      </form>


      </div>
    );
  }

}


export default withTranslation()(Register);
