import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import CategoryIcon from "@material-ui/icons/Category";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

import Flex from "../../../shared/components/Flex";

import styles from "./Header.styles";

interface HeaderProps extends WithStyles<typeof styles> {
  isLogged?: boolean;
}

const Header: React.FC<HeaderProps> = ({ classes, isLogged }) => {
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
        {!isLogged && <Flex>Hello, sign in</Flex>}
      </Flex>
    </Grid>
  );
};

export default withStyles(styles)(Header);
