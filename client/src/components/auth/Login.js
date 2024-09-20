import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import TextInput from "../shared/TextInput";
import GoogleSignIn from "./GoogleSignIn";
import FacebookSignIn from "./FacebookSignIn";
import ForgotPasswordForm from "./ForgotPasswordForm";

const initialFormValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { t } = useTranslation(["auth"]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRegularLogin = (e) => {
    e.preventDefault();

    // Login API call
    axios
      .post(`http://localhost:5001/user/auth/login`, {
        ...formValues,
      })
      .then((response) => {
        const bearer = {
          login_type: "normal",
          token: response.data.token,
        };
        window.localStorage.setItem("bearer", JSON.stringify(bearer));
        enqueueSnackbar("Login Successful!", { variant: "success" });
        navigate("/home");
      })
      .catch((err) => {
        enqueueSnackbar("Login failed. Please try again!", { variant: "error" });
      });
  };

  return (
    <Grid
      container
      component="main"
      style={{
        height: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=800&auto=format&fit=crop&q=60)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "16px",
          padding: "32px",
          margin: "auto",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1" variant="h5" style={{ marginBottom: "16px" }}>
            {t("login")}
          </Typography>
          <form method="POST" onSubmit={handleRegularLogin} style={{ width: "100%" }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextInput
                name="email"
                placeholder={t("emailAddress")}
                type="email"
                label={t("emailAddress")}
                value={formValues.email}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextInput
                name="password"
                placeholder={t("password")}
                type={showPassword ? "text" : "password"}
                label={t("password")}
                value={formValues.password}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t("rememberMe")}
              />
              <Button onClick={() => setShowLoginForm(false)}>{t("forgotPassword")}</Button>
            </Box>

            <FormControl fullWidth>
              <Button
                variant="contained"
                type="submit"
                size="large"
                style={{
                  backgroundColor: "#DD7230",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "12px",
                }}
              >
                {t("login")}
              </Button>
            </FormControl>
          </form>

          <Typography variant="body2" style={{ marginTop: "16px" }}>
            {t("noAccount")}{" "}
            <Link to="/signup" style={{ color: "#DD7230" }}>
              {t("signup")}
            </Link>
          </Typography>

          <Box mt={2}>
            <GoogleSignIn />
            <FacebookSignIn />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
