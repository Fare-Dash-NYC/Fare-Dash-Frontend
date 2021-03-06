import {useState, useEffect, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/Signup";
import HomePage from "./Components/Homepage";
import Explore from "./Components/Explore";
import Report from "./Components/Report";
import Login from "./Components/Login";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar";

const url = "http://localhost:8081/";


function App() {

  
     
	const checkAuthenticated = async () => {
    let localToken = window.localStorage.getItem("token")
		try {
		  const res = await fetch(`${url}is-verify`, {
			method: "GET",
			headers: { Authorization: `Bearer ${localToken}`,
      "Content-Type": "application/json" }
		  });
	
		  const response = await res.json();
      console.log(response)
		  response === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
		  console.error(err.message);
		}
	  };
	
	  useEffect(() => {
      checkAuthenticated();
      }, []);
	
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const navigate = useNavigate();

  return (
    <div className="main-container">
      <NavBar setAuth={setAuth} isAuthenticated={isAuthenticated} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore isAuthenticated={isAuthenticated} />} />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login setAuth={setAuth} />
            ) : (
              <Navigate replace to="/explore" />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <SignUp setAuth={setAuth} />
            ) : (
              <Navigate replace to="/explore" />
            )
          }
        />
        <Route
          path="/report"
          element={
            isAuthenticated ? (
              <Report />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
