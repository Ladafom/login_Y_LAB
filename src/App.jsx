import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router/router";
import { useState } from "react";
import { AuthContext } from "./context/context";

function App() {

  const [isAuthorised, setIsAuthorised] = useState(false)
  const accessToken = localStorage.getItem('token')

  return (
    <AuthContext.Provider value={{
      isAuthorised,
      setIsAuthorised,
    }}>
      <RouterProvider router={accessToken || isAuthorised ? privateRoutes : publicRoutes} />
    </AuthContext.Provider>
  )
}

export default App
