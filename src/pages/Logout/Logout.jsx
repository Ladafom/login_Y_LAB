import { useContext } from "react";
import { AuthContext } from "../../context/context";
import './logout.css'

function Logout() {

  const {isAuthorised, setIsAuthorised} = useContext(AuthContext)

  function onLogout(e){
    e.preventDefault()
    localStorage.removeItem('token')
    setIsAuthorised(false)
  }

  return (
    <div className="logout">
      <h1>Welcome!</h1>
      <form onSubmit={onLogout} >
        <button>Logout</button>
      </form>
    </div>
  );
}

export default Logout;