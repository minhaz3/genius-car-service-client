import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cheakout from "../../Pages/Cheakout/Cheakout";
import Home from "../../Pages/HomePage/Home/Home";
import Loginpage from "../../Pages/LoginPage/Loginpage";
import Order from "../../Pages/Order/Order";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Loginpage></Loginpage>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/cheakout/:id',
                element:<Cheakout></Cheakout>,
                loader:({params})=>fetch(`https://genius-car-server-lake.vercel.app/services/${params.id}`)
            },
            {
                path:'/orders',
                element:<PrivateRoute><Order></Order></PrivateRoute>,
            }
        ]
    }
])

export default router;