import { Navigate, createBrowserRouter } from "react-router-dom";

import { LandingLayout } from "../layouts/LandingLayout";

import Home from "../Paginas/Home";
import About from "../Paginas/About";




export const menuRoutes = [
  {
    to: "/",
    icon: "fa-solid fa-spell-check",
    title: "Home",
    description: "",
    component: <Home />
  },
//   {
//     to: "/about",
//     icon: "fa-solid fa-spell-check",
//     title: "Home",
//     description: "",
//     component: <About />
//   },
//   {
//     to: "/#contacto",
//     icon: "fa-solid fa-spell-check",
//     title: "Contacto",
//     description: "",
//     component: <Contacto />
//   },


 
]


export const  router = createBrowserRouter([
  {
    path:"/",
    element: <LandingLayout/>,
    children:[
      ...menuRoutes.map(route => ({
        path:route.to,
        element:route.component
      })),
      {
        path:'',
        element: <Navigate to={menuRoutes[0].to}/>
      }
    ]
}
]);

