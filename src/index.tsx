import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "@fontsource/signika-negative";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import theme from "./styles/theme";
import "./styles/index.css";
import { router } from "./router/router";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
