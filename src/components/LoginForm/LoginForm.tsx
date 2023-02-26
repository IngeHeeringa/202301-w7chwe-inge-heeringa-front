import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserCredentials } from "../../types";
import styles from "./LoginForm.module.css";

interface LoginFormProps {
  onSubmit: (userCredentials: UserCredentials) => void;
  error: boolean;
}

const LoginForm = ({ onSubmit, error }: LoginFormProps): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsername("");
    setPassword("");

    const userCredentials = {
      username,
      password,
    };

    onSubmit(userCredentials);
  };

  return (
    <Box
      component="form"
      className={styles.loginForm}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        required
        name="username"
        label="Username"
        onChange={handleChangeUsername}
      />
      <TextField
        required
        label="Password"
        name="password"
        type="password"
        onChange={handleChangePassword}
      />
      <Button variant="contained" type="submit">
        Log in
      </Button>
      {error && (
        <div className={styles.loginError}>
          <span className={styles.loginError__generalMessage}>
            Wrong credentials
          </span>
          <span className={styles.loginError__specificMessage}>
            Not a member?
            <Link to="/register" className={styles.loginError__redirect}>
              Sign up now!
            </Link>
          </span>
        </div>
      )}
    </Box>
  );
};

export default LoginForm;
