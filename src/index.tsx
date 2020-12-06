import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";

import store from "./redux/store";
import App from "./App";
import theme from "./theme";

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory}>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
