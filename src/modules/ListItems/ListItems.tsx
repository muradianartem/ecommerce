import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

import Flex from "../../shared/components/Flex";
import Category from "../../shared/components/Category";

import styles from "./ListItems.styles";
import Checkbox from "@material-ui/core/Checkbox";

interface ListItemsProps extends WithStyles<typeof styles> {}

interface Attributes {
  [key: string]: Array<any>;
}

const ListItems: React.FC<ListItemsProps> = ({ classes }) => {
  const [list, setList] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [attributes, setAttributes] = React.useState<Attributes>(null);
  const location = useLocation();
  const history = useHistory();

  const getProducts = async () => {
    const list = await axios.get(`http://localhost:3001${location.pathname}/products?${query}`);

    setList(list.data);
  };

  const getAttributes = async () => {
    const attributes = await axios.get(`http://localhost:3001${location.pathname}/attributes`);

    setAttributes(attributes.data);
  };

  const handleAddAttribute = async (attribute) => {
    let result = [];

    if (query) {
      const queryString = query.split("&");
      result = queryString.filter((qury) => qury !== attribute);
      if (result.length === queryString.length) {
        result.push(attribute);
      }
    } else {
      result.push(attribute);
    }

    setQuery(result.join("&"));
  };

  React.useEffect(() => {
    history.push({
      pathname: location.pathname,
      search: `?${query}`
    });

    getProducts();
  }, [query]);

  React.useEffect(() => {
    getProducts();
    getAttributes();
  }, []);

  return (
    <Flex className={classes.root}>
      <Flex>
        {attributes &&
          Object.keys(attributes).map((attribute) => (
            <div key={attribute}>
              <div className={classes.attrTitle}>{attribute}</div>
              <div>
                {attributes[attribute].map((value) => (
                  <div className={classes.attributeItem} key={value}>
                    <Checkbox disableRipple size="small" onChange={() => handleAddAttribute(`${attribute}=${value}`)} />
                    {value}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </Flex>
      <Flex>
        {list &&
          list.map(({ id, title, content, fileName }) => <Category key={id} id={id} title={title} content={content} fileName={fileName} />)}
      </Flex>
    </Flex>
  );
};

export default withStyles(styles)(ListItems);
