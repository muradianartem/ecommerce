import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import Flex from "../../shared/components/Flex";
import Category from "../../shared/components/Category";

import styles from "./ListItems.styles";

interface ListItemsProps extends WithStyles<typeof styles> {}

const ListItems: React.FC<ListItemsProps> = () => {
  const [list, setList] = React.useState([]);
  const location = useLocation();

  const getProducts = async () => {
    const list = await axios.get(`http://localhost:3001${location.pathname}/products`);

    setList(list.data);
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <Flex>
      {list &&
        list.map(({ id, title, content, fileName }) => (
          <Category key={id} id={id} title={title} content={content} fileName={fileName} />
        ))}
    </Flex>
  );
};

export default withStyles(styles)(ListItems);
