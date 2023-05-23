import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/HomePage";
import TrendingPage from "../pages/TrendingPage";
import UsersPage from "../pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "trending", element: <TrendingPage /> },
      { path: "users", element: <UsersPage /> },
    ],
  },
]);

export default router;
