import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../ErrorPage/Error";
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
        path: '/blog/:id',
        element: <Blog></Blog>,
          loader: ({params}) => fetch(`https://chef-receipe-hunter-server-sabbir0070.vercel.app/chefdatas/${params.id}`)
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
        path: '/chefrecipes/:id',
        element: <ChefAllData></ChefAllData>,

      },

      {
        path: '/',
        element: <ChefCard></ChefCard>,
        loader: () => fetch(`https://chef-receipe-hunter-server-sabbir0070.vercel.app/chefdatas`)
      },
      {
        path: '/chefrecipes',
        element: <ChefRecipes></ChefRecipes>
      }
    ]
  },
  // ChefRecipes Layout Route
  // {
  //   path: '/',
  //   element: <ChefRecipesLayout></ChefRecipesLayout>,
  //   errorElement: <Error></Error>,
  //   children: [

  //   ]
  // }

])
export default router;
