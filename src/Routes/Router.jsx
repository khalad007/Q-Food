import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import Error from "../Pages/Error/Error";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'addfood',
          element: <AddFood></AddFood>
        },
        {
          path: 'availablefoods',
          element: <AvailableFoods></AvailableFoods>
        }
      ]
    },
  ]);

  export default router;