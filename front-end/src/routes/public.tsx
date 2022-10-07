import { Navigate } from "react-router-dom";

export const publicRoutes = [
  {
    path: "/signin",
    element: `<SignIn />`,
  },
  {
    path: "/signup",
    element: `<SignUp />`,
  },
  {
    path: "*",
    element: <Navigate to="/signin" />,
  },
];
