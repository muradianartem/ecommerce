import * as React from "react";
import { useParams } from "react-router-dom";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Flex from "../../shared/components/Flex";

import styles from "./Product.styles";
import { Button } from "@material-ui/core";

interface ProductProps extends WithStyles<typeof styles> {}

interface Product {
  id: string;
  name: string;
  characteristics: {
    [key: string]: any;
  };
  description: string;
  img: string;
}

const Product: React.FC<ProductProps> = ({ classes }) => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = React.useState<Product>();

  React.useEffect(() => {
    console.log("getProductId", productId);
  }, []);

  const handleBuy = () => {

  };

  return (
    <Flex className={classes.root}>
      {product && (
        <>
          <Grid>
            <h1>{product.name}</h1>
            <img src={product.img} />
          </Grid>
          <Grid>
            <h3>characteristics</h3>
            {Object.keys(product.characteristics).map((characteristic) => (
              <>
                <Typography>{characteristic}</Typography>
                <Typography>{product.characteristics[characteristic]}</Typography>
              </>
            ))}
            <Button onClick={handleBuy}>Buy</Button>
          </Grid>
        </>
      )}
    </Flex>
  );
};

export default withStyles(styles)(Product);
