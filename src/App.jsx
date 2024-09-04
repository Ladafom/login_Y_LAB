import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router/router";
import { useState, useEffect } from "react";

function App() {

  const accessToken = localStorage.getItem('token')

  return (
    <>
      <RouterProvider router={accessToken ? privateRoutes : publicRoutes} />
    </>
  )
}

export default App
