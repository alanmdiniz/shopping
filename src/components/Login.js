import { useState } from "react";
import { useDispatch } from "react-redux";
import { GetUserByLogin } from "../features/Users/UserService";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Login = () => {
  const [usernameLogin, setUsernameLogin] = useState(
    process.env.REACT_APP_LOGIN_MOCK
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(GetUserByLogin(usernameLogin));
    // session
    localStorage.setItem('shopping/username', usernameLogin);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={usernameLogin}
            onChange={(event) => setUsernameLogin(event.target.value)}
            InputProps={{
              readOnly: true,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
