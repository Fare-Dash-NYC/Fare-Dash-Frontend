import {useState, useEffect, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp";
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
		try {
		  const res = await fetch(`${url}/is-verify`, {
			method: "POST",
			headers: { token: window.localStorage.getItem("token") }
		  });
	
		  const response = await res.json();
	
		  response === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
		  console.error(err.message);
		}
	  };
	
	  useEffect(() => {
      checkAuthenticated();
      }, []);
	
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const navigate = useNavigate();

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
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
              <Report setAuth={setAuth} />
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
