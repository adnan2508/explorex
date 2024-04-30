import React from "react";
import ReactDOM from "react-dom/client";
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
import UpdateSpot from "./pages/UpdateSpot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch(`https://explorex-server.vercel.app/country`)
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
  {
    path: "/allTouristSpot",
    element: <AllTouristSpot></AllTouristSpot>,
    loader: () => fetch(`https://explorex-server.vercel.app/spot`)
  },
  {
    path: "/spotDetails/:id",
    element: 
      <PrivateRoute>
        <SpotDetails></SpotDetails>
      </PrivateRoute>,
    
    loader: ({ params }) => fetch(`https://explorex-server.vercel.app/spot/${params.id}`),
  },
  {
    path: "/addTouristSpot",
    element: (
      <PrivateRoute>
        <AddTouristSpot></AddTouristSpot>
      </PrivateRoute>
    ),
  },
  {
    path: "/myList",
    element: 
      <PrivateRoute>
        <MyList></MyList>
      </PrivateRoute>,
   
  },
  {
    path: "/updateSpot/:id",
    element: 
      <PrivateRoute>
        <UpdateSpot></UpdateSpot>
      </PrivateRoute>,
    
    loader: ({ params }) => fetch(`https://explorex-server.vercel.app/spot/${params.id}`),
  },
  {
    path: "/login",
    element: <Login></Login>,
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
