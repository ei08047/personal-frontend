import React from "react";
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from "./Contact.module.scss";
import { withTranslation } from 'react-i18next';


function SubmitSucceful(){

}

function SubmitFail(){

}

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
<Popover 
  anchorReference="anchorPosition"
  anchorPosition={{ top: 400, left: 300 }}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
>
  The content of the Popover.
</Popover>
  );
}

class Contact extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      username: '',
      name_label:props.t("contact.name"),
      email: '',
      subject:'',
      subject_label:props.t("contact.subject"),
      email_label:props.t("contact.email"),
      message:'',
      message_label:props.t("contact.message"),
      submit_label:props.t("contact.submit"),
      submit_disabled:true,
      sent:false,
      sentStatus:false,
    };

       this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
      if(this.state.message!='' && this.state.username!='' && this.state.email!='' && this.state.subject!=''){
    this.setState({submit_disabled:false})
  }else {
    this.setState({submit_disabled:true})
  }
  }

  handleSubmit (event) {
    event.preventDefault();
  const templateId = 'webdevinquiry';
  this.sendFeedback(templateId, {
    message_html: this.state.message,
     from_name: this.state.username,
      from_email: this.state.email,
       subject:this.state.subject
     })
  }

  sendFeedback (templateId, variables) {
  window.emailjs.send(
    'default_service', templateId,
    variables
    ).then(res => {
      console.log('Email successfully sent!')
      this.setState({sent:true});
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.log('Oh well, you failed. Here some thoughts on the error that occured:', err))
  this.setState({sent:true});
  }

  componentWillUpdate(nextProps, nextState) {

  if (nextProps.t("contact.name") != this.state.name_label){
    this.setState({
      name_label:nextProps.t("contact.name"),
      subject_label:nextProps.t("contact.subject"),
      email_label:nextProps.t("contact.email"),
      message_label:nextProps.t("contact.message"),
      submit_label:nextProps.t("contact.submit")
    });
  }
}

  render() {
    return (
      <div className={styles.Container}>
      <h2>Contact me</h2>

      <form  onSubmit={this.handleSubmit}>
        
        <div className={styles.Control}>
        <label>
          {this.state.name_label}:
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
          {this.state.subject_label}:
        </label>
        <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
        </div>

        <div className={styles.Control}>
        <label>
          {this.state.message_label}:
        </label>
        <textarea value={this.state.message} name="message" onChange={this.handleChange} />
        </div>

<div className={styles.Control}>
      <input type="submit" value={this.state.submit_label} disabled={this.state.submit_disabled}/>
</div>

      </form>
      {
        this.state.sent && <SimplePopover />
      }
      <div> 
      phone number
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
(+351) 916942074

</div>
  <div className={styles.OtherContacts}>
      <div> 
        email 
        josemcf89@gmail.com
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"/>
        </svg>
      </div>
      <div> 
      messenger
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"/></svg>
      </div>
</div>
      </div>
    );
  }

}


export default withTranslation()(Contact);
