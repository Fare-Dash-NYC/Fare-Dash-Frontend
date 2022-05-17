import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from "./Components/NavBar";
import HomePage from "./Components/homepage"
import SignUp from "./Components/signup"
import Explore from "./Components/explore"
import Login from "./Components/login"
// import "./Styles/index.css"
// import Report from "./Components/Report";

  
function App() {
  return(
    <div>
			<NavBar/>

			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/signup" element={<SignUp/>}/>
				<Route path="/explore" element={<Explore/>}/>
				<Route path="login" element={<Login/>}/> 


			</Routes>




		</div>
   
  )
}
  
export default App;