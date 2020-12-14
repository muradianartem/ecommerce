import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import axios from "axios";

import Flex from "../../shared/components/Flex";
import Category from "../../shared/components/Category";

import styles from "./Categories.styles";

interface CategoriesProps extends WithStyles<typeof styles> {}

const Categories: React.FC<CategoriesProps> = () => {
  const [list, setList] = React.useState([]);

  const getCategories = async () => {
    const list = await axios.get("http://localhost:3001/categories");

    setList(list.data);
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <Flex>
      {list &&
        list.map(({ id, title, content, fileName }) => (
          <Category withLink key={id} id={id} title={title} content={content} fileName={fileName} link="categories" />
        ))}
    </Flex>
  );
};

export default withStyles(styles)(Categories);
