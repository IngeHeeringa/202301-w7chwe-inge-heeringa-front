import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => {
  return (
    <>
      <h1 className="main-title">Welcome to Frenemies</h1>
      <Link to="/" className="call-to-action">
        Sign up
      </Link>
      <Link to="/" className="call-to-action">
        Log in
      </Link>
    </>
  );
};

export default HomePage;
