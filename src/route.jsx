import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Page from "./layout/Page";
import Projects from "./pages/Projects";
import ServicesPage from "./pages/ServicesPage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
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
            },
            {
                path:"services",
                element:<ServicesPage/>
            },
            {
                path:'about-us',
                element:<About/>
            },
            {
                path:'contact-us',
                element:<Contact/>
            }
        ]
    }
]) 

export default router