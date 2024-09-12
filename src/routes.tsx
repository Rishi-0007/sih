import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import Admin from "./components/Admin";
import Employee from "./components/Employee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "employee",
    element: <Employee />,
  },
]);

export default router;
