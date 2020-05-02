import React from 'react';
import { useTranslation } from 'react-i18next'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import styles from "./LanguageSelector.module.scss";
import { StylesProvider } from '@material-ui/core/styles';


export default function LanguageSelector() {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = React.useState('en');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value)
    console.log()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <StylesProvider injectFirst>
    <div className={styles.LanguageSelector} >
      <Button className={styles.SelectButton} onClick={handleOpen}>
      </Button>
      <FormControl >
        <Select

          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={language}
          onChange={handleChange}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"pt"}>Português</MenuItem>
          <MenuItem value={"ch"}>中文</MenuItem>
        </Select>
      </FormControl>
    </div>
    </StylesProvider>
  );
}