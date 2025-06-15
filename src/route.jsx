import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./layout/Page";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Page/>, 
        children:[
            {
                index:true , 
                element:<Home/>
            }
        ]
    }
]) 

export default router