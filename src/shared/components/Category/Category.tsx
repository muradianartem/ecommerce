import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import MuiCardHeader from "@material-ui/core/CardHeader";
import MuiCardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MuiCardMedia from "@material-ui/core/CardMedia";
import { useHistory, useLocation } from "react-router-dom";

import styles from "./Category.styles";

interface CategoryProps extends WithStyles<typeof styles> {
  id: string;
  title: string;
  content: string;
  img: string;
  link: string;
  withlocation?: boolean;
}

const Category: React.FC<CategoryProps> = ({ title, content, classes, img, id, link, withlocation }) => {
  const history = useHistory();
  const location = useLocation();

  const handleChooseCategory = () => {
    const newLink = withlocation ? `${location.pathname}/${link}/${id}` : `/${link}/${id}`;

    history.push(newLink);
  };

  return (
    <MuiCard raised className={classes.root} onClick={handleChooseCategory}>
      <MuiCardHeader title={title} />
      <MuiCardMedia className={classes.media} image={img} title={title} />
      <MuiCardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </MuiCardContent>
    </MuiCard>
  );
};

export default withStyles(styles)(Category);
