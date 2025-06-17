import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Page from "./layout/Page";
import Projects from "./pages/Projects";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Page/>, 
        children:[
            {
                index:true , 
                element:<Home/>
            },
            {
                path:'projects',
                element:<Projects/>
            }
        ]
    }
]) 

export default router