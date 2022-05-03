import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartRemove, setEmail, cleanCart } from "../features/Cart/CartSlice";
import { OrderCreateAsync } from "../features/Orders/OrderActions";
import CheckoutItem from "./CheckoutItem";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Typography,
  Grid,
  Button,
  List,
  TextField,
  FormControl,
} from "@mui/material";

const Checkout = ({ setMsgOk, setOpenOk, ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartProducts, email } = useSelector((state) => state.cart);
  const { userLogged } = useSelector((state) => state.users);

  const handleRemoveCart = (productId) => {
    dispatch(cartRemove({ productId: productId }));
    setMsgOk("Product removed successfully");
    setOpenOk(true);
  };

  const handleCreateOrder = () => {
    if (!email) return;
    OrderCreateAsync(dispatch,  userLogged[0].id, email, cartProducts);
    dispatch(cleanCart());
    navigate("/");
    setMsgOk("Order sent successfully!");
    setOpenOk(true);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom component="div">
            Checkout
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ mb: 3 }}>
        <List>
          {cartProducts &&
            cartProducts.map((item) => (
              <CheckoutItem
                key={item.product.id}
                item={item}
                handleRemoveCart={handleRemoveCart}
              />
            ))}
        </List>

        {!cartProducts ||
          (cartProducts.length === 0 && (
            <Typography variant="body1" gutterBottom component="div">
              There are no products in the cart.
            </Typography>
          ))}
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom component="div">
          Total Amount:{" "}
          {cartProducts
            .map((item) => item.quantity)
            .reduce((prev, curr) => prev + curr, 0)}
        </Typography>
      </Grid>
      <Grid>
        {cartProducts && cartProducts.length > 0 && (
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => {
                dispatch(setEmail({email: e.target.value}));
              }}
              error={!email}
              helperText={!email ? "Enter your email" : ""}
            />
          </FormControl>
        )}
      </Grid>
      <Grid align="center">
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          sx={{ mr: 3 }}
          startIcon={<ArrowBackIcon />}
        >
          Back to Products
        </Button>
        {cartProducts && cartProducts.length > 0 && (
          <Button
            variant="outlined"
            onClick={() => handleCreateOrder()}
            startIcon={<ShoppingCartCheckoutIcon />}
          >
            Complete Order
          </Button>
        )}
      </Grid>
    </>
  );
};

export default Checkout;
