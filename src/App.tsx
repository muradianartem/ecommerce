import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { withRouter, RouteComponentProps, Switch, Route, Redirect } from "react-router-dom";

import Categories from "./modules/Categories";
import ListItems from "./modules/ListItems";
import Product from "./modules/Product";
import Contact from "./modules/Contact";
import Header from "./modules/components/Header";

import styles from "./App.styles";

export interface AppProps extends WithStyles<typeof styles>, RouteComponentProps {}

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/category/:categoryId" component={ListItems} />
        <Route exact path="/category/:categoryId/product/:productId" component={Product} />
        <Route exact path="/contacts" component={Contact} />
        <Redirect to="/categories" />
      </Switch>
    </>
  );
};

export default withStyles(styles)(withRouter(App));
