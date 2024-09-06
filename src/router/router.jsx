import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Logout from "../pages/Logout/Logout";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";

export const baseURL = '/login_Y_LAB'

const errorPath = {
  path:`${baseURL}/*`,
  element:<Error/>
}

function PublicNavigate(){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate(`${baseURL}/login`)
  },[])
}
export function PrivateNavigate(){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate(`${baseURL}/logout`)
  },[])
}

export const privateRoutes = createBrowserRouter([
  {
    path:`${baseURL}/`,
    element:<PrivateNavigate/>,
  },
  {
    path:`${baseURL}/logout`,
    element:<Logout/>,
  },
  {
    path:`${baseURL}/login`,
    element:<Login/>,
  },
  errorPath,
])

export const publicRoutes = createBrowserRouter([
  {
    path:`${baseURL}/`,
    element:<PublicNavigate/>,
  },
  {
    path:`${baseURL}/login`,
    element:<Login/>,
  },
  {
    path:`${baseURL}/logout`,
    element:<PublicNavigate/>,
  },
  errorPath,
])
