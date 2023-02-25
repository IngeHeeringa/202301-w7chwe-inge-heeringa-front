import { createTheme, ThemeProvider } from "@mui/material";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import useUser from "./hooks/useUser";

const App = (): JSX.Element => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ba000d",
      },
      secondary: {
        main: "#3a3a3a",
      },
    },
  });
  const { registerUser } = useUser();

  const handleSubmit = (data: FormData) => {
    registerUser(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <RegisterForm onSubmit={handleSubmit} />
    </ThemeProvider>
  );
};

export default App;
