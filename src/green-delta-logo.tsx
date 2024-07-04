import { Link } from '@mui/material';
import greenDeltaLogo from './assets/greendelta_white.png';
import { gdLogo } from "./style";

const GreenDeltaLogo = () => {
  return (
    <Link href='https://www.greendelta.com/' sx={gdLogo}>
      <img height={'20em'} src={greenDeltaLogo} alt='Green Delta Logo' />
    </Link>
  );
};

export default GreenDeltaLogo;
