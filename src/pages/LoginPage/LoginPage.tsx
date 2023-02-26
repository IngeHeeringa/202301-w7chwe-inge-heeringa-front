import styles from "./LoginPage.module.css";

const LoginPage = (): JSX.Element => {
  return (
    <section className={styles.loginPage}>
      <h1>Welcome back</h1>
      <span>Log in to connect with your friends and enemies</span>
    </section>
  );
};

export default LoginPage;
