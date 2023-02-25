import styles from "./RegisterPage.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import useUser from "../../hooks/useUser";

const RegisterPage = (): JSX.Element => {
  const { registerUser } = useUser();

  const handleSubmit = (data: FormData) => {
    registerUser(data);
  };

  return (
    <section className={styles.registerPage}>
      <h1>Sign up today</h1>
      <span>Instantly connect with your friends and enemies</span>
      <RegisterForm onSubmit={handleSubmit} />
    </section>
  );
};

export default RegisterPage;
