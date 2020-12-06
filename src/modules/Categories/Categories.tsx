import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import Flex from "../../shared/components/Flex";
import Category from "../../shared/components/Category";

import styles from "./Categories.styles";

interface CategoriesProps extends WithStyles<typeof styles> {}

const Categories: React.FC<CategoriesProps> = () => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    setList([
      {
        id: "1",
        title: "Computer",
        content: "Choose the best laptop you ever can",
        img: "src/shared/icons/laptop.jpg"
      },
      {
        id: "2",
        title: "Computer",
        content: "Choose the best laptop you ever can",
        img: "src/shared/icons/laptop.jpg"
      },
      {
        id: "3",
        title: "Computer",
        content: "Choose the best laptop you ever can",
        img: "src/shared/icons/laptop.jpg"
      },
      {
        id: "4",
        title: "Computer",
        content: "Choose the best laptop you ever can",
        img: "src/shared/icons/laptop.jpg"
      },
      {
        id: "5",
        title: "Computer",
        content: "Choose the best laptop you ever can",
        img: "src/shared/icons/laptop.jpg"
      },
      {
        id: "6",
        title: "Computer",
        content: "Choose the best laptop you ever can",
        img: "src/shared/icons/laptop.jpg"
      },
      {
        id: "7",
        title: "Computer",
        content: "Choose the best laptop you ever can",
        img: "src/shared/icons/laptop.jpg"
      }
    ]);
  }, []);

  return (
    <Flex>
      {list &&
        list.map(({ id, title, content, img }) => <Category key={id} id={id} title={title} content={content} img={img} link="category" />)}
    </Flex>
  );
};

export default withStyles(styles)(Categories);
