import homeBackground from "./assets/background_start_page.png";

export const container = {
  display: "flex",
  height: "100vh",
  backgroundImage: `url(${homeBackground})`,
  backgroundRepeat: "repeat",
  backgroundSize: "100vh",
  backgroundPosition: "center",
  backgroundColor: "rgba(210, 210, 210)",
};

export const logo = {
    width: "20vw",
    height: "17vw",
    maxHeight: "174px",
    maxWidth: "200px",
};

export const openlca = {
  height: "17vw",
  width: "36vw",
  maxWidth: "368px",
  maxHeight: "174px",
};
export const gdLogo = {
  position: "absolute",
  bottom: "2vh",
  right: "2vh",
};

export const input = {
  dispay: "flex",
  width: "100%",
  color: "#ffffff",
  border: "none",
  borderBottom: "4px solid #ffffff",
  background: "none",
  fontSize: "1.2rem",
  maxWidth: "15rem",
};

export const label = {
  color: "#ffffff",
  background: "none",
  fontSize: "1.2rem",
  display: "flex",
  justifyContent: "flex-end",
};

export const button = {
  color: "#ffffff",
  background: "none",
  fontSize: "1.3rem",
  border: "3px solid #ffffff",
  borderBottom: "5px solid #ffffff",
};
