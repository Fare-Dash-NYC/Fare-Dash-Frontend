import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./SignUp";
import HomePage from "./Homepage";
import Explore from "./Explore";
import Login from "./Login"
import {Routes, Route, Router} from 'react-router-dom'
import '../App.css';
import NavBar from "./NavBar";


  
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