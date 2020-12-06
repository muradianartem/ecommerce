import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import Flex from "../../shared/components/Flex";
import Category from "../../shared/components/Category";

import styles from "./ListItems.styles";

interface ListItemsProps extends WithStyles<typeof styles> {}

const ListItems: React.FC<ListItemsProps> = () => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    setList([
      {
        id: "1",
        title: "MacBook",
        content: "The best MacBook Pro 15",
        img: "src/shared/icons/macbook.jpg"
      },
      {
        id: "2",
        title: "MacBook",
        content: "The best MacBook Pro 15",
        img: "src/shared/icons/macbook.jpg"
      },
      {
        id: "3",
        title: "MacBook",
        content: "The best MacBook Pro 15",
        img: "src/shared/icons/macbook.jpg"
      },
      {
        id: "4",
        title: "MacBook",
        content: "The best MacBook Pro 15",
        img: "src/shared/icons/macbook.jpg"
      },
      {
        id: "5",
        title: "MacBook",
        content: "The best MacBook Pro 15",
        img: "src/shared/icons/macbook.jpg"
      },
      {
        id: "6",
        title: "MacBook",
        content: "The best MacBook Pro 15",
        img: "src/shared/icons/macbook.jpg"
      },
      {
        id: "7",
        title: "MacBook",
        content: "The best MacBook Pro 15",
        img: "src/shared/icons/macbook.jpg"
      }
    ]);
  }, []);

  return (
    <Flex>
      {list &&
        list.map(({ id, title, content, img }) => (
          <Category withlocation key={id} id={id} title={title} content={content} img={img} link="product" />
        ))}
    </Flex>
  );
};

export default withStyles(styles)(ListItems);
