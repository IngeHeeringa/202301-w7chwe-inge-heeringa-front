import { Box, Button, TextField } from "@mui/material";
import styles from "./LoginForm.module.css";

const LoginForm = (): JSX.Element => {
  return (
    <Box component="form" className={styles.loginForm}>
      <TextField
        required
        id="outlined-username-input"
        name="username"
        label="Username"
      />
      <TextField
        required
        id="outlined-password-input"
        label="Password"
        name="password"
        type="password"
      />
      <Button variant="contained" type="submit">
        Log in
      </Button>
    </Box>
  );
};

export default LoginForm;
