import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import AuthProvider from "./authProvider/AuthProvider.jsx";
import AllTouristSpot from "./pages/AllTouristSpot.jsx";
import AddTouristSpot from "./pages/AddTouristSpot.jsx";
import PrivateRoute from "./layouts/PrivateRoute.jsx";
import MyList from "./pages/MyList.jsx";
import SpotDetails from "./components/SpotDetails.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
  {
    path: "/allTouristSpot",
    element: <AllTouristSpot></AllTouristSpot>,
    loader: () => fetch('http://localhost:5000/spot')
  },
  {
    path: "/spotDetails/:id",
    element: <PrivateRoute>
      <SpotDetails></SpotDetails>
    </PrivateRoute> ,
    loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
  },
  {
    path: "/addTouristSpot",
    element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>,
  },
  {
    path: "/myList",
    element: <PrivateRoute><MyList></MyList></PrivateRoute>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/user",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/user')
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
