import * as React from "react";
import { useParams } from "react-router-dom";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Paper from "@material-ui/core/Paper";

import Flex from "../../shared/components/Flex";

import styles from "./Product.styles";
import { Button } from "@material-ui/core";

interface ProductProps extends WithStyles<typeof styles> {}

interface ProductInterface {
  id: string;
  title: string;
  content: string;
  price: string;
  properties: {
    [key: string]: string;
  };
  description: string;
  fileName: string;
}

const Product: React.FC<ProductProps> = ({ classes }) => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = React.useState<ProductInterface>();
  const [img, setImg] = React.useState("");

  const getImage = async (fileName) => {
    const img = await axios.get(`http://localhost:3001/image/${fileName}`, { responseType: "arraybuffer" }).then((data) => {
      const b64Data = btoa(
        new Uint8Array(data.data).reduce((dataArray, byte) => {
          return dataArray + String.fromCharCode(byte);
        }, "")
      );
      const userAvatarData = {
        key: "userAvatar",
        value: `data:image/png;base64,${b64Data}`
      };
      return userAvatarData.value; // here we return the base64 image data to our component
    });

    setImg(img);
  };

  React.useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get<ProductInterface>(`http://localhost:3001/products/${productId}`);

      setProduct(data);
      getImage(data.fileName);
    };

    getProduct();
  }, [productId]);

  const handleBuy = () => {
    console.log("have to be checkouted");
  };

  return (
    <Flex className={classes.root}>
      {product && (
        <>
          <Grid>
            <h1>{product.title}</h1>
            <img src={img} />
          </Grid>
          <Paper elevation={3} className={classes.description}>
            <Typography className={classes.content}>{product.content}</Typography>
            <h3>characteristics:</h3>
            {Object.keys(product.properties).map((characteristic) => (
              <Flex key={characteristic} className={classes.characteresticList}>
                <Typography className={classes.characterestic}>{characteristic}</Typography>
                <Typography className={classes.characteresticValue}>{product.properties[characteristic]}</Typography>
              </Flex>
            ))}
            <Typography className={classes.price}>Price: {product.price}</Typography>
            <Button onClick={handleBuy} color="secondary">
              Buy
            </Button>
          </Paper>
        </>
      )}
    </Flex>
  );
};

export default withStyles(styles)(Product);
