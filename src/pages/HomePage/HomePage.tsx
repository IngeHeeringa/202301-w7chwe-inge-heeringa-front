import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = (): JSX.Element => {
  return (
    <section className={styles.homePage}>
      <h1 className="main-title">Welcome to Frenemies</h1>
      <div className={styles.wrapper}>
        <Link to="/">
          <Button variant="contained" size="large">
            Sign up
          </Button>
        </Link>
        <Link to="/">
          <Button variant="contained" size="large">
            Log in
          </Button>
        </Link>
      </div>
      <img
        className={styles.image}
        src="./media/social.webp"
        alt="social network"
        width="500"
        height="333"
      />
    </section>
  );
};

export default HomePage;
