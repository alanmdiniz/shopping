import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts } from "../features/Products/ProductService";
import { cartAdd } from "../features/Cart/CartSlice";
import Product from "./Product";
import { Typography, Grid } from "@mui/material";

const ProductList = ({ setMsgOk, setOpenOk, ...props }) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(GetAllProducts());
  }, []);

  const handleAddCart = (product, quantity) => {
    dispatch(cartAdd({ product: product, quantity: Number(quantity) }));
    setMsgOk("Product added successfully");
    setOpenOk(true);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom component="div">
            Products List
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ mt: 1 }} container spacing={2}>
        <>
          {products &&
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleAddCart={handleAddCart}
              />
            ))}
        </>
      </Grid>
    </>
  );
};

export default ProductList;
