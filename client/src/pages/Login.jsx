import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";
import { Alert, Box, Divider, TextField, Typography } from "@mui/material";
import { PrimaryButton, SecondaryButton } from "../MaterialUiConfig/styled";

const Login = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      navigateTo("/");
    }
  }, [navigateTo]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await login(email, password);
      // Redirect to home page or dashboard
      //console.log(data);
      sessionStorage.setItem("id", data.user.userid);
      console.log(sessionStorage.getItem("id"));
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      setError("Incorrect email or password");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "#00000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90vw", sm: "60vw", md: "40vw" },
          maxWidth: { md: "60vw" },
          p: 5,
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: "2rem", textAlign: "left" }}
        >
          Welcome to Game Zone X
        </Typography>
        <Typography
          variant="subtitle1"
          component="h1"
          sx={{ mb: "2rem", textAlign: "left", color: "#98a6ad" }}
        >
          Sign into your Game Zone account
        </Typography>

        <TextField
          sx={{ mb: 2 }}
          label="Email"
          fullWidth
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          sx={{ mb: 2 }}
          label="Password"
          fullWidth
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Box component={Link} to="/forgotpassword">
          <Typography variant="subtitle2" sx={{ m: 0 }}>
            Forgot your Password ?
          </Typography>
        </Box>
        {error && <Alert severity="error">{error}</Alert>}
        <PrimaryButton
          sx={{ width: { xs: "10rem", md: "100%" }, p: 1, mx: "auto" }}
          type="submit"
          //style={{ backgroundColor: "red" }}
        >
          Login
        </PrimaryButton>
        <Box sx={{ position: "relative" }}>
          <Divider />
          <Typography
            sx={{
              background: "#fff",
              px: 1,
              position: "absolute",
              left: "50%",
              bottom: "-11px",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          >
            or
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
        <Typography sx={{ mt: 3, color: "#862e9c" }} variant="subtitle2">
          New to Game Zone ?
        </Typography>
        <Box
          component={Link}
          to="/signup"
        >
          <Typography variant="subtitle2" sx={{ m: 0 }}>
            Create your account
          </Typography>
        </Box>
      </Box>
    </Box>
   
  );
};

export default Login;