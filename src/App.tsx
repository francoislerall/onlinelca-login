import { Grid, Typography, Stack, Box, styled } from "@mui/material";
import { background, loginForm, logo, openLCA } from "./style";
import appLogo from "./assets/logo.svg";
import onlinelca from "./assets/onlinelca.png";
import LoginForm from "./login-form";
import GreenDeltaLogo from "./green-delta-logo";

const BackgroundBox = styled(Box)(background);
const LoginFormItem = styled(Grid)(loginForm);

const App = () => {
  return (
    <BackgroundBox>
      <Grid container alignItems={"center"}>
        <Grid item md={8} xs={12}>
          <LoginComponent />
        </Grid>

        <Grid item p={4}></Grid>
      </Grid>

      <GreenDeltaLogo />
    </BackgroundBox>
  );
};

const LoginComponent = () => {
  const message = "";
  const error = "";

  return (
    <Grid container rowSpacing={5} alignContent={"center"}>
      <Grid
        item
        md={6}
        xs={5}
        display={"flex"}
        justifyContent={"flex-end"}
        paddingX={"2vw"}
      >
        <img src={appLogo} alt="logo" style={logo} />
      </Grid>
      <Grid item md={6} xs={7} alignContent={"center"}>
        <img src={onlinelca} alt="onlineLCA" style={openLCA} />
      </Grid>

      <Grid item md={6} xs={0}></Grid>

      <Grid item xs>
        <Stack>
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

          <LoginFormItem item>
            <LoginForm />
          </LoginFormItem>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default App;
