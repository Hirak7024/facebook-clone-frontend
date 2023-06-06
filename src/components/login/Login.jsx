import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">facebook clone</h3>
                <span className="loginDesc">Connect with the friends and the world around you on facebook clone</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type="email" className="loginInput" />
                    <input placeholder="Password" type="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    {/* <hr className="loginHr"/> */}
                    <button className="loginRegisterButton">Create new account</button>
                </div>
            </div>
        </div>    
    </div>
  )
}
