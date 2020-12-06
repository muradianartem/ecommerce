import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import styles from "./Contact.styles";

interface ContactProps extends WithStyles<typeof styles> {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <h4>+38 (099) 937 99 92</h4>
    </>
  );
};

export default withStyles(styles)(Contact);
