
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import{Col,Row} from 'reactstrap'
import "../SignUp.css"
import { MdPermContactCalendar } from "react-icons/md";


const url = "http://localhost:8081/register";

function SignUp({setAuth}) {
  const navigate = useNavigate()
  const [signupForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    displayName: "",
  });
  const handleSignupFormChange = (event) => {
    event.preventDefault();
    setSignUpForm({
      ...signupForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(signupForm),
    });
    const data = await response.json();
    console.log(data.token)
    if (data.token) {
      window.localStorage.setItem("token", data.token);
      setAuth(true);
      navigate("/explore", {replace: true})
    } else {
      setAuth(false);
    }
    
  };

 
 



  
     


  return (
    <div >
   
   
         <section className="forms">
           <div className="sign-up">
             <div className="heading">
                  <h1 className="dash-account">DASH ACCOUNT<MdPermContactCalendar/></h1>
       </div>
     <div className="act">
       <form onSubmit={handleRegistration}>
     
          <Col className="top-col" style={{marginBottom:'30px'}}>
            
             
              <input
              style={{borderRadius:"10px", textAlign:"center",height:'40px'}}
                onChange={handleSignupFormChange}
                id="firstName"
                name="firstName"
                placeholder='First name'
                type="name"
                
              />
            
        
             
              <input
                 style={{borderRadius:"10px", marginLeft:'30px',height:'40px', textAlign:"center"}}
                onChange={handleSignupFormChange}
                id="lastName"
                name="lastName"
                placeholder="Last name"
                type="name"

              />
         
         </Col>
        
        <Col style={{marginBottom:'30px'}}>
              <input
              style={{borderRadius:"10px", textAlign:"center",height:'40px'}}
                onChange={handleSignupFormChange}
                id="email"
                name="email"
                placeholder="Email"
              />
           
         
              
              <input
              
              style={{borderRadius:"10px", marginLeft:'30px',textAlign:"center",height:'40px'}}
                onChange={handleSignupFormChange}
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
             
         />
</Col>
<Row style={{marginBottom:'30px', width:'300px'}}>
            <input
            style={{borderRadius:"10px", textAlign:"center", marginLeft:'70px',height:'40px'}}
              onChange={handleSignupFormChange}
              id="displayName"
              name="displayName"
              placeholder="Display name"
              type="displayName"
        />
        </Row>
        <div className="link">
        <h5>Already A Member?</h5> <Link to={'/login'}><h5 style={{paddingLeft:'0'}}><a href="">Login here</a> </h5>
        </Link>
        </div>
        <Col >
         
          <button type="submit" >Create Account</button>
          </Col>
      </form> 
      </div>
      </div>
      </section> 
        </div>
    
   
  );
}

export default SignUp;
