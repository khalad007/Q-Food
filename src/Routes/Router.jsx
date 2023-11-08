import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import Error from "../Pages/Error/Error";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
// import AvailableFoodsCard from "../Pages/AvailableFoods/AvailableFoodsCard";
import SingleFoodDetails from "../Pages/SingleFoodDetails/SingleFoodDetails";
import SingleFoodDetails2 from "../Pages/SingleFoodDetails/SingleFoodDetails2";
import PrivateRoute from "./PrivateRoute";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import ManageMyRequest from "../Pages/ManageMyRequest/ManageMyRequest";
import Update from "../Pages/ManageMyFoods/Update";
import Details from "../Pages/ManageMyFoods/Details";

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
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: 'availablefoods',
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: 'managemyfoods',
        element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
      },
      {
        path: 'myfoodrequest',
        element: <PrivateRoute><ManageMyRequest></ManageMyRequest></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://eleven-assignment-server-pink.vercel.app/allfood/${params.id}`)
      },
      {
        path: '/details',
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: '/singleFoodDetails/:id',
        element: <PrivateRoute><SingleFoodDetails></SingleFoodDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://eleven-assignment-server-pink.vercel.app/allfood/${params.id}`)
      },
      

    ]
  },
]);

export default router;