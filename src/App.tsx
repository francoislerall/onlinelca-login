import { Grid, Typography, Stack, Box } from "@mui/material";
import { container, logo, openlca } from "./style";
import appLogo from "./assets/logo.svg";
import onlinelca from "./assets/onlinelca.png";
import LoginForm from "./login-form";
import GreenDeltaLogo from "./green-delta-logo";

const App = () => {
  return (
    <Box style={container}>
      <Grid container alignItems={"center"}>
        <Grid item md={8} xs={12}>
          <LoginComponent />
        </Grid>

        <Grid item p={4}></Grid>
      </Grid>

      <GreenDeltaLogo />
    </Box>
  );
};

const LoginComponent = () => {
  const message = "";
  const error = "";

  return (
    <Grid container spacing={5}>
      <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
        <img src={appLogo} alt="logo" style={logo} />
      </Grid>
      <Grid item xs={6}>
        <img src={onlinelca} alt="onlineLCA" style={openlca} />
      </Grid>

      <Grid item md={6} xs={0}></Grid>

      <Grid item xs>
        <Stack spacing={2} pr={2}>
          {message && (
            <Typography
              variant="h5"
              color={"white"}
              display={"flex"}
              justifyContent={"center"}
            >
              {message}
            </Typography>
          )}

          {error && (
            <Typography
              variant="subtitle1"
              color={"error"}
              display={"flex"}
              justifyContent={"center"}
            >
              {error}
            </Typography>
          )}

          <Grid item>
            <LoginForm />
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default App;
