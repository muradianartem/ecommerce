import * as React from "react";
import axios from "axios";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import CategoryIcon from "@material-ui/icons/Category";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Flex from "../../../shared/components/Flex";

import styles from "./Header.styles";

interface HeaderProps extends WithStyles<typeof styles> {
  isLogged?: boolean;
}

const Header: React.FC<HeaderProps> = ({ classes, isLogged }) => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { login, password } = e.target;
    
    handleLogin(login.value, password.value);
  };

  const handleLogin = async(login: string, password: string) => {
    let message = "";

    try {
      await axios.get(`https://localhost:44368/api/users?login=${login}&password=${password}`);

      setLoggedIn(true);
      message = "You are logged in, success!"
    } catch {
      message = "you are wrong, no success!"
    }

    alert(message);
  }

  const body = (
    <form noValidate onSubmit={onSubmitForm} className={classes.paper}>
      <TextField id="login" label="Login" />
      <TextField id="password" label="Password"  />
      <Button type="submit" className={classes.submitBtn}> Submit </Button>
    </form>
  );

  
  return (
    <Grid container justify="space-between" alignItems="center" className={classes.root}>
      <Link to="/" className={classes.spaces}>
        Vlados
      </Link>
      <Flex item>
        <Flex alignItems="center" className={classes.spaces}>
          <PhoneIcon className={classes.spaces} />
          <span>+38 (066) 937 99 92</span>
        </Flex>
        <Flex alignItems="center">
          <Link to="/contacts">contacts</Link>
        </Flex>
      </Flex>
      <Flex item alignItems="center">
        <CategoryIcon className={classes.spaces} />
        <Link to="/categories">Categories</Link>
      </Flex>
      <Flex item alignItems="center">
        <ShoppingCartIcon className={classes.spaces} />
        {!isLogged && <Flex>Hello{!loggedIn && (
          <div>
            <button type="button" onClick={handleOpen}>
              Open Modal
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
        </div>
        )}</Flex>}
      </Flex>
    </Grid>
  );
};

export default withStyles(styles)(Header);
