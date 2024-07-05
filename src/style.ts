import homeBackground from "./assets/background_start_page.png";

export const container = {
  display: "flex",
  height: "100vh",
  backgroundImage: `url(${homeBackground})`,
  backgroundRepeat: "repeat",
  backgroundSize: "150vh",
  backgroundPosition: "center",
  backgroundColor: "rgba(210, 210, 210)",
};

export const logo = {
  height: "15.5vw",
  width: "auto",
  maxHeight: "145px",
  minHeight: "80px",
};

export const gdLink = {
  position: "absolute",
  bottom: "3vh",
  right: "3vh",
};

export const loginForm = {
  
}

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
