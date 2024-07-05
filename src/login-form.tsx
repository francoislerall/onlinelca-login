import { Box } from "@mui/material";
import { button, input, label, labelElement, loginForm } from "./style";

export enum LoginFormKeys {
  Email = "email",
  Password = "password",
}

const LoginForm = () => {
  const emailRegExp = "^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$";

  return (
    <form method={"post"}>
      <Box>
        <table style={loginForm}>
          <tr>
            <td style={labelElement}>
              <label htmlFor={LoginFormKeys.Email} style={label}>
                Email
              </label>
            </td>
            <td>
              <input
                title="Please enter a valid email address"
                type="text"
                name={LoginFormKeys.Email}
                required
                pattern={emailRegExp}
                style={input}
              />
            </td>
          </tr>

          <tr>
            <td style={labelElement}>
              <label htmlFor={LoginFormKeys.Password} style={label}>
                Password
              </label>
            </td>
            <td>
              <input
                title="Please enter your password"
                type="password"
                name={LoginFormKeys.Password}
                required
                style={input}
              />
            </td>
          </tr>
        </table>
      </Box>

      <Box display={"flex"} justifyContent={"center"} pt={2}>
        <button type="submit" style={button}>
          <b>Go!</b>
        </button>
      </Box>
    </form>
  );
};

export default LoginForm;
