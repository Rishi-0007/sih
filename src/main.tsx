import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
