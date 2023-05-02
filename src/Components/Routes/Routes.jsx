import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../ErrorPage/Error";
import ChefRecipesLayout from "../../Layouts/ChefRecipesLayout";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import Home from "../Home/Home";
import ChefCard from "../pages/ChefCard/ChefCard";
import ChefAllData from "../ChefAllData/ChefAllData";



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch(`https://chef-receipe-hunter-server-sabbir0070.vercel.app/chefdatas`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/',
        element: <ChefAllData></ChefAllData>,
      },

      {
        path: '/:id',
        element: <ChefCard></ChefCard>,
         loader: ({params}) => fetch(`https://chef-receipe-hunter-server-sabbir0070.vercel.app/chefdatas/${params.id}`)
      }
    ]
  },
  // ChefRecipes Layout Route
  {
    path: '/',
    element: <ChefRecipesLayout></ChefRecipesLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/chefrecipes',
        element: <ChefRecipes></ChefRecipes>
      }
    ]
  }

])
export default router;
