import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate()

  function onLogout(e){
    e.preventDefault()
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <>
      <h1>Welcome!</h1>
      <form onSubmit={onLogout} >
        <button>Logout</button>
      </form>
    </>
  );
}

export default Logout;