import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./RegisterForm.module.css";
import { PhotoCamera } from "@mui/icons-material";
import { useState } from "react";

export interface RegisterFormProps {
  onSubmit: (data: FormData) => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps): JSX.Element => {
  const [avatar, setAvatar] = useState<File>();

  const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAvatar(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("avatar", avatar!);

    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      encType="multipart/form"
      className={styles.registerForm}
      onSubmit={handleSubmit}
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
        type="password"
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
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={handleChangeAvatar}
        />
      </Button>
      <Button variant="contained" type="submit">
        Sign up
      </Button>
    </Box>
  );
};

export default RegisterForm;
