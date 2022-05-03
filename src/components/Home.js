import { useState, forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetUserByLogin } from "../features/Users/UserService";
import { GetProductsSearch } from "../features/Products/ProductService";
import { logout } from "../features/Users/UserSlice";
import {
  SearchIconWrapper,
  SearchInput,
  StyledInputBase,
  StyledLink,
} from "./Home.css";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MuiAlert from "@mui/material/Alert";
import {
  Typography,
  Snackbar,
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
} from "@mui/material";

import ProductList from "./ProductList";
import Checkout from "./Checkout";

const Home = ({ page, ...props }) => {
  const [search, setSearch] = useState("");
  const [msgOk, setMsgOk] = useState("");
  const [openOk, setOpenOk] = useState(false);

  const { userLogged } = useSelector((state) => state.users);
  const { cartProducts } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogged) {
      const userLoggedUsername = localStorage.getItem("shopping/username");
      if (userLoggedUsername) dispatch(GetUserByLogin(userLoggedUsername));
      else navigate("/");
    }
  }, [dispatch, navigate, userLogged]);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      dispatch(GetProductsSearch(search));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("shopping/username");
    dispatch(logout());
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <AppBar>
        <Toolbar>
          <StyledLink to="/">
            <StoreIcon sx={{ mr: 2 }} />
          </StyledLink>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            <StyledLink to="/">{process.env.REACT_APP_TITLE}</StyledLink>
          </Typography>

          {cartProducts.length > 0 && (
            <Button
              color="error"
              align="right"
              variant="contained"
              startIcon={<ShoppingCartCheckoutIcon />}
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </Button>
          )}

          <SearchInput>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={handleSearch}
              onChange={(event) => setSearch(event.target.value)}
            />
          </SearchInput>
          <Button
            color="inherit"
            align="right"
            variant="outlined"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            pt: 10,
            pb: 5,
          }}
        >
          <Container maxWidth="sm">
            {!page ? (
              <ProductList setMsgOk={setMsgOk} setOpenOk={setOpenOk} />
            ) : (
              <Checkout setMsgOk={setMsgOk} setOpenOk={setOpenOk} />
            )}
          </Container>
        </Box>
      </main>

      <Snackbar
        open={openOk}
        autoHideDuration={4000}
        onClose={() => setOpenOk(false)}
      >
        <Alert
          onClose={() => setOpenOk(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {msgOk}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
