import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import MuiCardHeader from "@material-ui/core/CardHeader";
import MuiCardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MuiCardMedia from "@material-ui/core/CardMedia";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import styles from "./Category.styles";

interface CategoryProps extends WithStyles<typeof styles> {
  id: string;
  title: string;
  content: string;
  fileName: string;
  link: string;
  withlocation?: boolean;
}

const Category: React.FC<CategoryProps> = ({ title, content, classes, fileName, id, link, withlocation }) => {
  const history = useHistory();
  const location = useLocation();
  const [img, setImg] = React.useState('');

  const getImage = async () => {
    const img = await axios.get(`http://localhost:3001/image/${fileName}`, {responseType: 'arraybuffer'}).then((data) => {
      const b64Data = btoa(
          new Uint8Array(data.data).reduce(
              (dataArray, byte) => {
                  return dataArray + String.fromCharCode(byte);
              }, 
              ''
          )
      );
      const userAvatarData = {
          key: 'userAvatar',
          value: `data:image/png;base64,${b64Data}`
      };
      return userAvatarData.value; // here we return the base64 image data to our component
  });

    setImg(img);
  }

  React.useEffect(() => {
    getImage();
  }, []);

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
