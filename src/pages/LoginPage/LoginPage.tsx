import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser";
import { UserCredentials } from "../../types";
import styles from "./LoginPage.module.css";

const LoginPage = (): JSX.Element => {
  const { loginUser } = useUser();
  const [error, setError] = useState(false);

  const handleSubmit = async (userCredentials: UserCredentials) => {
    try {
      await loginUser(userCredentials);
    } catch (error: unknown) {
      setError(true);
    }
  };

  return (
    <section className={styles.loginPage}>
      <h1>Welcome back</h1>
      <span>Log in to connect with your friends and enemies</span>
      <LoginForm onSubmit={handleSubmit} error={error} />
    </section>
  );
};

export default LoginPage;
