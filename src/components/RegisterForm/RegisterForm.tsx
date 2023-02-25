import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./RegisterForm.module.css";
import { PhotoCamera } from "@mui/icons-material";

const RegisterForm = (): JSX.Element => {
  return (
    <Box
      component="form"
      encType="multipart/form"
      className={styles.registerForm}
    >
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
      />
      <TextField
        required
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
      />
      <Button variant="contained" component="label" endIcon={<PhotoCamera />}>
        Upload avatar
        <input hidden accept="image/*" type="file" />
      </Button>
      <Button variant="contained" type="submit">
        Sign up
      </Button>
    </Box>
  );
};

export default RegisterForm;
