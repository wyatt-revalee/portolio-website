import "./register.css"
import { useContext, useRef } from "react"
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const username = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()
  const history = useNavigate()

  const { user, isFetching, error, dispatch } = useContext(AuthContext)

  const handleClick = async (e) => {
    e.preventDefault()
    if(confirmPassword.current.value !== password.current.value){
      confirmPassword.current.setCustomValidity("Passwords Must Match")
    } else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try{
        await axios.post("/auth/register", user)
        history.push("/login")

      } catch(err){
        console.log(err)
      }
    }
  }

  return (
    <div className="login" >
        <div className="loginWrapper">
              <div className="loginLeft">
                <h3 className="loginLogo">WrayoSocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on WrayoSocial.
                </span>
              </div>
              <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                      <input placeholder="Username" required ref={username} className="loginInput" />
                      <input placeholder="Email" required ref={email} type="email" className="loginInput" />
                      <input placeholder="Password required" ref={password} type="password" minLength="6" className="loginInput" />
                      <input placeholder="Confirm Password" required ref={confirmPassword} type="password" minLength="6" className="loginInput" />
                      <button className="loginButton" type="submit">Sign Up</button>
                      <Link to={`/login`} className="loginRegisterButton" style={{ textDecoration: "none" }} >
                        <button className="loginRegisterButton">Log In</button>
                      </Link>
                </form>
              </div>
        </div>
    </div>
  )
}
