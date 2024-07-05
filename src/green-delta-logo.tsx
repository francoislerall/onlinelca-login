import { Link } from "@mui/material";
import greenDeltaLogo from "./assets/greendelta_white.png";
import { gdLink } from "./style";

const GreenDeltaLogo = () => {
  return (
    <Link href="https://www.greendelta.com/" sx={gdLink}>
      <img height={"30em"} src={greenDeltaLogo} alt="Green Delta Logo" />
    </Link>
  );
};

export default GreenDeltaLogo;
