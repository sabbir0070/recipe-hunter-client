import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../ErrorPage/Error";


const router = createBrowserRouter([
{
path:'/',
element:<MainLayout></MainLayout>,
errorElement:<Error></Error>,
children:[
{
path:'/',
element:<Home></Home>
},
{
path:'/blog',
element:<Blog></Blog>
},
{
path:'/login',
element:<Login></Login>,
},
{
path:'/register',
element:<Register></Register>
}
]
}
])
export default router;
