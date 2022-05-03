import { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  TextField,
} from "@mui/material";

const Product = ({ product, handleAddCart, ...props }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Grid item xs={4}>
      <Card elevation={5} component="div">
        <CardMedia
          component="img"
          height="180"
          image={require(`../assets/img/${product.id}.jpg`)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <TextField
            size="small"
            label="Quantity"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={quantity}
            onChange={(e) => {
              if (e.target.value >= 1) {
                setQuantity(e.target.value);
              }
            }}
          />
          <Button
            sx={{ ml: 1 }}
            color="primary"
            variant="outlined"
            align="right"
            onClick={() => handleAddCart(product, quantity)}
          >
            ADD
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
