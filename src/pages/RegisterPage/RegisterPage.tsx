import styles from "./RegisterPage.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const RegisterPage = (): JSX.Element => {
  const { registerUser } = useUser();
  const [error, setError] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (data: FormData) => {
    try {
      await registerUser(data);
      setRegistered(true);
    } catch (error: unknown) {
      setError(true);
    }
  };

  return (
    <section className={styles.registerPage}>
      {registered ? (
        <>
          <div className={styles.wrapper}>
            <span className={styles.registerPage__welcomeMessage}>
              Welcome to the family!
            </span>
            <span className={styles.registerPage__successMessage}>
              Your account has been created
            </span>
          </div>
          <Link to="/">
            <Button variant="contained" size="large">
              Log in
            </Button>
          </Link>
        </>
      ) : (
        <>
          <h1>Sign up today!</h1>
          <span>Instantly connect with your friends and enemies</span>
          <RegisterForm onSubmit={handleSubmit} error={error} />
        </>
      )}
    </section>
  );
};

export default RegisterPage;
