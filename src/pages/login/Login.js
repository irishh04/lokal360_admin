import React, {useEffect} from "react";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const Login = () => {
  //Set Page Title
  useEffect(() => {
    document.title = "Login | Lokal 360";
    return () => {
      document.title = "Lokal 360"; 
    };
  }, []);

  return (  
    <Container
      disableGutters
      maxWidth="100%"
      sx={{
        height: "0vh",
        background: "linear-gradient(to right bottom, #E4E1F9, #ACA4EC)",
      }}
    >
      <LoginHeader />

      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "80%",
          display: "flex",
        }}
      >
        <Grid
          item
          sx={{ display: { xs: 'none', lg: 'block', xl: 'block' } }}
        >
          <img
            src={require("../../assets/login_web.png")}
            style={{ width: 590, height: 430 }}
            alt="Logo"
          />
        </Grid>

        <Grid item xs>
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
