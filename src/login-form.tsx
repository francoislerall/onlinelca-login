import { Grid } from '@mui/material';
import { button, input, label } from './style';

export enum LoginFormKeys {
  Email = 'email',
  Password = 'password',
}

const LoginForm = () => {
  const emailRegExp = '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$';

  return (
    <form method={'post'}>
      <Grid container alignItems={'center'} spacing={2}>
        <Grid item style={label} md={3} xs={6}>
          <label htmlFor={LoginFormKeys.Email}>
            Email
          </label>
        </Grid>

        <Grid item pr={4} md={9} xs={6}>
          <input
            title='Please enter a valid email address'
            type='text'
            name={LoginFormKeys.Email}
            required
            pattern={emailRegExp}
            style={input}
          />
        </Grid>

        <Grid item style={label} md={3} xs={6}>
          <label htmlFor={LoginFormKeys.Password}>
            Password
          </label>
        </Grid>

        <Grid item pr={4} md={9} xs={6}>
          <input
            title='Please enter your password'
            type='password'
            name={LoginFormKeys.Password}
            required
            style={input}
          />
        </Grid>

        <Grid item md={3} xs={6}></Grid>

        <Grid item  md={9} xs={6} display={'flex'} justifyContent={'flex-start'}>
          <button type='submit' style={button}>
            <b>Go!</b>
          </button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
