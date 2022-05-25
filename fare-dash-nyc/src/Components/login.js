
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Login.css'
import {MdOutlineLogin} from 'react-icons/md'
import { Link } from "react-router-dom";
const url = "http://localhost:8081";

function Login({setAuth}) {
  const navigate = useNavigate();
  const [LogInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });
  const handleLogInFormChange = (event) => {
    event.preventDefault();
    setLogInForm({
      ...LogInForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(LogInForm),
    });
    const data = await response.json();
    console.log(data.token);
    if (data.token) {
      window.localStorage.setItem("token", data.token);
      setAuth(true);
    } else {
      setAuth(false);
    }
    navigate("/explore", { replace: true });
  };

  return (
    <div> 
      <section className="form-sec">
        <div className="login">
          <div className="header">
      <h1 className="mt-5 text-center">LOG IN <MdOutlineLogin/></h1>
     </div> 
     <div className="form-con">
     <form inline onSubmit={handleLogIn}>
       
      
          <input
            onChange={handleLogInFormChange}
            id="exampleEmail"
            name="email"
            placeholder="something@idk.cool"
            type="email"
            className="form-control my-3"
          />
       
        
         
          <input
            onChange={handleLogInFormChange}
            id="examplePassword"
            name="password"
            placeholder="don't tell!"
            type="password"
            className="form-control my-3"

          />
          <div className="link">
        <h5>Not A Member Yet?</h5>
        <Link to={'/signup'}>
        <h5 style={{paddingLeft:'0'}}><a href="">Sign Up</a> </h5></Link>
      </div>  <button type="submit" class="btn btn-success btn-block">Log in</button>
      </form>
      </div>
      </div>
      </section>
    </div>
  );
}
export default Login;
