import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Divider, Typography, TextField, Grid } from "@mui/material";
import { signup } from "../api/singup"; // import the appropriate API function for user registration
import * as yup from "yup";
import { PrimaryButton, SecondaryButton } from "../MaterialUiConfig/styled";

const SignUp = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      navigateTo("/");
    }
  }, [navigateTo]);

  const [validationErrors, setValidationErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    phoneNo: yup.string().required("Please enter your phone number"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(3, "Password must be at least 3 characters"),
  });

const onSubmitHandler = async (event) => {
  event.preventDefault();
  try {
    await schema.validate(
      { firstName, lastName, email, phoneNo, password },
      { abortEarly: false }
    );
    const res = await signup(firstName, lastName, email, password, phoneNo);
    sessionStorage.setItem("id", res.user.userid);
    window.location.href = "/";
  } catch (err) {
    console.error(err);
    if (err.response) {
      setErrorMessage(err.response.data.message);
    } else {
      const validationErrors = {};
      err.inner.forEach((error) => {
        console.log(error.path, error.message); // Log the validation error message for each field
        validationErrors[error.path] = error.message;
      });
      console.log(validationErrors); // Log the validationErrors object
      setValidationErrors(validationErrors);
    }
  }
};

  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "100vw",
        minHeight: { xs: "max-content", md: "100vh" },
        backgroundColor: "#fffff",
        justifyContent: "center",
        alignItems: { xs: "flex-start", md: "center" },
        py: { xs: 5, md: 0 },
      }}
    >
      <Box
        sx={{
          width: { xs: "70vw", sm: "60vw", md: "50vw" },
          maxWidth: { md: "30vw" },
          p: { xs: 0, md: 5 },
          px: { xs: 4 },
          py: { xs: 4, sm: 2 },
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: { xs: "max-content", md: "50vh" },
          display: "flex",
          flexDirection: "column",
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmitHandler}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: "2rem", textAlign: "center" }}
        >
          Sign Up
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              sx={{ mb: 2 }}
              label="First Name"
              fullWidth
              required
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              error={!!validationErrors.firstName} // Set error prop to true if there is a validation error for this field
              helperText={validationErrors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              sx={{ mb: 2 }}
              label="Last Name"
              fullWidth
              required
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              error={!!validationErrors.lastName}
              helperText={validationErrors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              sx={{ mb: 2 }}
              label="Email"
              fullWidth
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              error={!!validationErrors.email}
              helperText={validationErrors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              sx={{ mb: 2 }}
              label="Phone Number"
              fullWidth
              required
              type="number"
              value={phoneNo}
              onChange={(event) => setPhoneNo(event.target.value)}
              error={!!validationErrors.phoneNo}
              helperText={validationErrors.phoneNo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              sx={{ mb: 2 }}
              label="Password"
              fullWidth
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              error={!!validationErrors.password}
              helperText={validationErrors.password}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              sx={{ mb: 2 }}
              label="Confirm Password"
              fullWidth
              required
              type="password"
            />
          </Grid>
        </Grid>
        {/* Display error message if it exists */}
        {errorMessage && (
          <Typography sx={{ mt: 2, color: "red" }}>{errorMessage}</Typography>
        )}
        <SecondaryButton
          sx={{ width: "250px", p: 1, mx: "auto" }}
          type="submit"
        >
          Sign Up
        </SecondaryButton>
        <Typography sx={{ mt: 3, color: "#862e9c" }} variant="subtitle2">
          Already have an account ?
        </Typography>
        <Box component={Link} to="/login">
          <Typography variant="subtitle2" sx={{ m: 0, color: "#101010" }}>
            Login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
