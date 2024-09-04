import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Logout from "../pages/Logout/Logout";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";

const errorPath = {
  path:'/*',
  element:<Error/>
}

function PublicNavigate(){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/login')
  },[])
}
export function PrivateNavigate(){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/logout')
  },[])
}

export const privateRoutes = createBrowserRouter([
  {
    path:'/',
    element:<PrivateNavigate/>,
  },
  {
    path:'/logout',
    element:<Logout/>,
  },
  {
    path:'/login',
    element:<Login/>,
  },
  errorPath,
])

export const publicRoutes = createBrowserRouter([
  {
    path:'/',
    element:<PublicNavigate/>,
  },
  {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/logout',
    element:<PublicNavigate/>,
  },
  errorPath,
])
