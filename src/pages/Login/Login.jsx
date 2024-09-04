import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css'
import eye from '../../assets/images/eye.svg'
import eyeClosed from '../../assets/images/eye_closed.svg'
import { emailRegex } from '../../utils/validation';
import { errorMessages } from '../../utils/errorMessages';
import { useLogin } from '../../mock/api';

function Login() {

  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState(false)
  const [emailValidError, setEmailValidError] = useState(null)
  const [passwordValidError, setPasswordValidError] = useState(null)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [login, setLogin] = useState({
    email:'',
    password:'',
  })

  const disabledBtn = emailValidError || passwordValidError || !login.email || !login.password

  function handleLogin(e){
    if (e.target.validity.valid) {
      if(e.target.id === 'email'){
        setEmailValidError(null)
      } else {
        setPasswordValidError(null)
      }
    }
    setLogin({...login, [e.target.id]:e.target.value})
  }

  function handleValidError(e){
    if (e.target.validity.patternMismatch) {
      setEmailValidError(errorMessages.patternMismatch)
    } else if (e.target.validity.valueMissing) {
      if (e.target.id === 'email'){
        setEmailValidError(errorMessages.valueMissing)
      } else {
        setPasswordValidError(errorMessages.valueMissing)
      }
    } else if (e.target.validity.tooShort) {
      setPasswordValidError(errorMessages.tooShort)
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    localStorage.removeItem("token");
    setIsRedirecting(true)
    useLogin(login)
    .then((res) => {
      localStorage.setItem("token", res.accessToken);
    })
    .then(()=>{
      setIsRedirecting(false)
      navigate('/logout')
    })
  }

  if(isRedirecting){
    return(
      <h1>Redirecting...</h1>
    )
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Вход</h1>

      <div className='login__email'>
        <label htmlFor="email">Email:</label>
        <input
        className='login__input'
        type="text"
        id='email'
        pattern='[A-Za-z0-9\-_]+@[a-z0-9.\-]+\.[a-z]{2,}'
        required
        onBlur={handleValidError}
        onChange={handleLogin}
        value={login.email}
        />
        {
          emailValidError &&
          <p>
            {emailValidError}
          </p>
        }
      </div>

      <div className='login__password'>
        <label htmlFor="password">Password:</label>
        <input
          className='login__input'
          type={isVisible? 'text' : 'password'}
          id='password'
          autoComplete="off"
          required
          minLength="7"
          onBlur={handleValidError}
          onChange={handleLogin}
          value={login.password}
          />
        <img
          className='login__show-password'
          src={isVisible? eyeClosed : eye}
          onClick={()=>setIsVisible(!isVisible)}/>
        {
          passwordValidError &&
          <p>
            {passwordValidError}
          </p>
        }
      </div>

      <button className='login__btn' disabled={disabledBtn ? true : false }>
        Log In
      </button>
    </form>
  );
}

export default Login;