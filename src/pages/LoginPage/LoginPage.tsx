import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser";
import { useAppSelector } from "../../store/hooks";
import { UserCredentials } from "../../types";
import styles from "./LoginPage.module.css";

const LoginPage = (): JSX.Element => {
  const { loginUser } = useUser();
  const [error, setError] = useState(false);
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const handleSubmit = async (userCredentials: UserCredentials) => {
    try {
      await loginUser(userCredentials);
    } catch (error: unknown) {
      setError(true);
    }
  };

  return (
    <section className={styles.loginPage}>
      {isLogged ? (
        <>
          <div className={styles.wrapper}>
            <span className={styles.loginPage__welcomeMessage}>Hey there!</span>
            <span className={styles.loginPage__successMessage}>
              Your frenemies are only one click away
            </span>
          </div>
          <Link to="/">
            <Button variant="contained" size="large">
              Go to home
            </Button>
          </Link>
        </>
      ) : (
        <>
          <h1>Welcome back</h1>
          <span>Log in to connect with your friends and enemies</span>
          <LoginForm onSubmit={handleSubmit} error={error} />
        </>
      )}
    </section>
  );
};

export default LoginPage;
