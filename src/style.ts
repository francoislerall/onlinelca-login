import { Theme } from "@mui/material";
import backgroundImage from "./assets/background_start_page.svg";
import backgroundImageMobile from "./assets/background_start_page_mobile.svg";

export const background = ({ theme }: { theme: Theme }) => ({
  display: "flex",
  height: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "1800px",
  backgroundPosition: "center",
  backgroundColor: "rgba(210, 210, 210)",
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${backgroundImageMobile})`,
    backgroundSize: "700px",
  },
});

export const logo = {
  height: "17.5vw",
  width: "auto",
  maxHeight: "175px",
  minHeight: "80px",
};

export const openLCA = {
  height: "15.5vw",
  width: "auto",
  maxHeight: "155px",
  minHeight: "80px",
};

export const gdLink = {
  position: "absolute",
  bottom: "3vh",
  right: "3vh",
};

export const loginForm = ({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
});

export const input = {
  width: "100%",
  color: "#ffffff",
  border: "none",
  borderBottom: "3px solid #ffffff",
  background: "none",
  fontSize: "1.2rem",
  maxWidth: "15rem",
};

export const label = {
  color: "#ffffff",
  fontSize: "1.2rem",
};

export const labelElement = {
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: "15px",
};

export const button = {
  color: "#ffffff",
  background: "none",
  fontSize: "1.8rem",
  border: "3px solid #ffffff",
  borderBottom: "5px solid #ffffff",
};
